'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var clone = _interopDefault(require('clone'));
var crawl = _interopDefault(require('tree-crawl'));
var deepEqual = _interopDefault(require('not-so-shallow'));
var isPlainObject = _interopDefault(require('is-plain-obj'));
var morph = _interopDefault(require('tree-morph'));
var mutate = _interopDefault(require('tree-mutate'));

function cloneNode(node) {
  return node.clone()
}

function addNode(node, parentNode) {
  parentNode.add(node)
}

function layoutNode(mutation, node, parentNode, index) {
  if ('remove' === mutation) {
    parentNode.remove(node)
  }
  else if ('replace' === mutation) {
    node.replace(parentNode.at(index))
  }
}

const EMPTY_ARRAY = []

class Node {
  get length() {
    return this.children.length
  }

  get size() {
    let size = 0
    this.traverse(() => size++)
    return size
  }

  get isRoot() {
    return (null === this.parent)
  }

  get isLeaf() {
    return (0 === this.length)
  }

  get firstChild() {
    return this.children[0]
  }

  get lastChild() {
    return this.children[this.length - 1]
  }

  get siblings() {
    if (this.isRoot) return []

    return this.parent.children.reduce((siblings, child) => {
      if (child !== this) {
        siblings.push(child)
      }
      return siblings
    }, [])
  }

  get nextSibling() {
    const index = this.index
    if (-1 !== index) {
      return this.parent.at(index + 1)
    }
  }

  get previousSibling() {
    const index = this.index
    if (-1 !== index) {
      return this.parent.at(index - 1)
    }
  }

  get index() {
    if (!this.isRoot) {
      return this.parent.children.indexOf(this)
    }
    return -1
  }

  constructor(value) {
    this.value = value
    this.parent = null
    this.children = EMPTY_ARRAY
  }

  add(node) {
    if (this === node) return node

    if (!Node.isNode(node)) {
      node = new Node(node)
    }

    if (!node.isRoot) {
      node.parent.remove(node)
    }

    if (EMPTY_ARRAY === this.children) {
      this.children = []
    }

    this.children.push(node)
    node.parent = this

    return node
  }

  insertAt(parentNode, index) {
    if (null == parentNode || this === parentNode) return
    if (index < 0 || index > parentNode.length - 1) return

    if (!this.isRoot) {
      this.parent.remove(this)
    }

    parentNode.children.splice(index, 0, this)
    this.parent = parentNode
  }

  insertAfter(node) {
    if (null == node || this === node) return

    this.insertAt(node.parent, node.index + 1)
  }

  insertBefore(node) {
    if (null == node || this === node) return

    this.insertAt(node.parent, node.index)
  }

  remove(node = null) {
    if (null === node && !this.isRoot) {
      return this.parent.remove(this)
    }

    if (!Node.isNode(node)) {
      node = this.find(node)
      if (!node) return this
    }

    const index = node.index
    if (-1 !== index) {
      this.children.splice(index, 1)
      node.parent = null
    }

    return node
  }

  replace(node) {
    if (null == node || this === node || node.isRoot) return this

    this.insertAt(node.parent, node.index)
    return node.remove()
  }

  prune() {
    while (0 !== this.children.length) {
      const node = this.children.shift()
      node.parent = null
    }
  }

  hoist() {
    for (let child of this.children) {
      child.insertAfter(this)
    }
  }

  at(...indices) {
    let node = this

    for (let i = 0, len = indices.length; i < len; i++) {
      node = node.children[indices[i]]
    }

    return node
  }

  has(node) {
    if (Node.isNode(node)) {
      return (this === node.parent)
    }
    return (null !== this.find(node))
  }

  clone() {
    // shortcut for immutable values
    if ('object' !== typeof this.value) {
      return new Node(this.value)
    }
    // retun a deep clone of node value
    return new Node(clone(this.value))
  }

  cloneDeep() {
    return morph(this, cloneNode, addNode)
  }

  equals(node) {
    // shortcut for identity
    if (this === node) return true

    // nodes are equal if their values are equal
    return deepEqual(this.value, node.value)
  }

  deepEquals(node) {
    return deepEqual(this, node)
  }

  traversePreorder(iteratee) {
    crawl(this, iteratee, { order: 'pre' })
  }

  traversePostorder(iteratee) {
    crawl(this, iteratee, { order: 'post' })
  }

  traverse(iteratee) {
    this.traversePreorder(iteratee)
  }

  find(value) {
    let foundNode = null

    // traverse the entire tree to find the node and return it
    this.traverse((node, context) => {
      if (node === this) return
      if (node.value === value) {
        foundNode = node
        context.break()
      }
    })

    return foundNode
  }

  map(iteratee) {
    return mutate(this, iteratee, layoutNode)
  }

  mapValues(iteratee) {
    return mutate(this, (node, context) => {
      const retValue = iteratee(node.value)

      if (null === retValue) return null

      if (undefined !== retValue) {
        node.value = retValue
      }
    }, layoutNode)
  }

  filter(predicate) {
    if ('function' !== typeof predicate) return this

    return this.map(node => (predicate(node) ? node : null))
  }

  toObject() {
    return morph(this,
      node => clone(
        isPlainObject(node.value) ? node.value : { value: node.value }
      ),
      (obj, parentObj) => {
        if (null == parentObj.children) {
          parentObj.children = []
        }
        parentObj.children.push(obj)
      }
    )
  }

  toJSON() {
    return JSON.stringify(this.toObject(), null, 2)
  }

  toArray() {
    return morph(this,
      node => (node.isLeaf ? node.value : [node.value]),
      (item, parentItem) => parentItem.push(item)
    )
  }

  static isNode(value) {
    return (value instanceof Node)
  }

  static fromObject(obj) {
    return morph(obj,
      value => {
        const node = new Node(clone(value))
        delete node.value.children
        return node
      },
      addNode
    )
  }

  static fromJSON(json) {
    return Node.fromObject(JSON.parse(json))
  }
}

function arbre(value) {
  if (null != value) {
    if ('object' !== typeof value) {
      return new Node(value)
    }
    return Node.fromObject(value)
  }
  return new Node()
}

exports['default'] = arbre;
exports.Node = Node;