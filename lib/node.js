const deepEqual = require('deep-equal')
const deepAssign = require('deep-assign')
const walk = require('./traversing/walk')
const map = require('./traversing/map')

const EMPTY_ARRAY = []

module.exports = class Node {
  constructor(value) {
    this.value = value
    this.parent = null
    this.children = EMPTY_ARRAY
  }

  add(node) {
    node = Node.toNode(node)

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

  insertAfter(node) {
    this.insertAt(node.parent, node.index + 1)
  }

  insertBefore(node) {
    this.insertAt(node.parent, node.index)
  }

  insertAt(parentNode, index) {
    if (null === parentNode) return false
    if (index < 0 || index > parentNode.length - 1) return false

    if (!this.isRoot) {
      this.parent.remove(this)
    }

    parentNode.children.splice(index, 0, this)
    this.parent = parentNode

    return true
  }

  remove(node = null) {
    if (null === node) {
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

  prune() {
    const out = []

    while (0 !== this.children.length) {
      const node = this.children.shift()
      node.parent = null
      out.push(node)
    }

    return out
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
    if ('object' !== typeof this.value) {
      return new Node(this.value)
    }
    return new Node(deepAssign({}, this.value))
  }

  cloneWith(value) {
    return new Node(deepAssign({}, this.value, value))
  }

  cloneDeep() {
    return map(this)
  }

  equals(node) {
    // Shortcut for identity.
    if (this === node) return true

    // Nodes are equal if their values are equal
    return deepEqual(this.value, node.value)
  }

  deepEquals(node) {
    return deepEqual(this, node)
  }

  traverse(iteratee) {
    this.traversePreorder(iteratee)
  }

  traversePreorder(iteratee) {
    walk(this, null, iteratee, { strategy: 'pre' })
  }

  traversePostorder(iteratee) {
    walk(this, null, iteratee, { strategy: 'post' })
  }

  find(value) {
    let foundNode = null

    // Traverse the entire tree to find the node and return it
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
    return map(this, iteratee)
  }

  mapValues(iteratee) {
    return map(this, node => {
      const cloneValue = deepAssign({}, node.value)
      const retValue = iteratee(cloneValue)
      if (null === retValue) return null
      return new Node(retValue || cloneValue)
    })
  }

  filter(predicate) {
    return this.map(node => (predicate(node) ? node.clone() : null))
  }

  toObject() {
    return map(this,
      node => Object.assign({ children: [] }, node.value),
      (obj, parentObj) => parentObj.children.push(obj)
    )
  }

  toJSON() {
    return JSON.stringify(this.toObject(), null, 2)
  }

  toArray() {
    const array = []
    this.traverse(node => array.push(node.data))
    return array
  }

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
    })
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

  static isNode(value) {
    return (value instanceof Node)
  }

  static toNode(value) {
    if (Node.isNode(value)) return value
    return new Node(value)
  }

  static fromObject(obj) {
    return map(obj,
      value => {
        const node = new Node(deepAssign({}, value))
        delete node.value.children
        return node
      },
      (node, parentNode) => parentNode.add(node)
    )
  }

  static fromJSON(json) {
    return Node.fromObject(JSON.parse(json))
  }
}
