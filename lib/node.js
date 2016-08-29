const cuid = require('cuid')
const walk = require('./traversing/walk')
const map = require('./traversing/map')

const EMPTY_ARRAY = []

module.exports = class Node {
  constructor(value) {
    this.uuid = cuid()
    this.value = value
    this.parent = null
    this.children = EMPTY_ARRAY
  }

  add(node) {
    node = Node.toNode(node)

    if (null !== node.parent) {
      node.parent.remove(node)
    }

    if (EMPTY_ARRAY === this.children) {
      this.children = []
    }
    this.children.push(node)
    node.parent = this

    return node
  }

  remove(node) {
    if (!Node.isNode(node)) {
      node = this.find(node)
      if (!node) return this
    }

    const index = node.index()
    if (-1 !== index) {
      this.children.splice(index, 1)
    }

    return node
  }

  at(index) {
    return this.children[index]
  }

  has(node) {
    return (this === node.parent)
  }

  index() {
    return this.parent.children.indexOf(this)
  }

  clone(overrides) {
    return new Node(Object.assign({}, this.value, overrides))
  }

  cloneDeep() {
    // TODO: use map for deep copy
  }

  same(node) {
    if (this === node) return true
    if (this.uuid === node.uuid) return true
    if (this.value === node.value) return true
  }

  equals(node) {
    // TODO: use valueOf
    if (
      this.same(node) &&
      (this.parent === node.parent) &&
      (this.children === node.children)
    ) return true
  }

  traverse(iteratee, options = { strategy: 'pre' }) {
    walk(this, null, iteratee, options)
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

  toArray() {
    const array = []
    this.traverse(node => array.push(node.data))
    return array
  }

  static isNode(value) {
    return (value instanceof Node)
  }

  static toNode(value) {
    if (Node.isNode(value)) return value
    return new Node(value)
  }

  static fromObject(obj) {
    // TODO: replace by clone
    return map(obj, value => {
      const node = new Node(Object.assign({}, value))
      delete node.value.children
      return node
    })

    // let out, path = []
    //
    // traverse(obj, value => {
    //   const node = new Node(Object.assign({}, value))
    //   delete node.value.children
    //
    //   if (value === obj) {
    //     out = node
    //   }
    //   else {
    //     const parentNode = path[path.length - 1].node
    //     parentNode.add(node)
    //     path[path.length - 1].count--
    //     if (0 === path[path.length - 1].count) {
    //       path.pop()
    //     }
    //   }
    //
    //   // If current value has children, set it as parent as all are going
    //   // to be iterated next
    //   if (value.children) {
    //     path.push({ node, count: value.children.length })
    //   }
    // })
    //
    // return out

    // const nodesMap = new Map()
    //
    // let root
    //
    // walk(obj, null, (obj, parent) => {
    //   const node = new Node(Object.assign({}, obj))
    //   delete node.value.children
    //   nodesMap.set(obj, node)
    //
    //   if (null !== parent) {
    //     const parentNode = nodesMap.get(parent)
    //     parentNode.add(node)
    //   }
    //   else {
    //     root = node
    //   }
    // })
    //
    // return root
  }
}
