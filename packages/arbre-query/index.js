import deepEqualObj from 'not-so-shallow'

export function at(node, ...indices) {
  for (let i = 0, len = indices.length; i < len; i++) {
    node = node.children[indices[i]]
  }
  return node
}

export function deepEqual(tree1, tree2) {
  if (null == tree1 && null == tree2) return false
  return deepEqualObj(tree1, tree2)
}

export function equal(tree1, tree2) {
  if (null == tree1 && null == tree2) return false
  return deepEqualObj(tree1.value, tree2.value)
}

export function firstChild(node) {
  return node.children[0]
}

export function has(node, child) {
  if (null == child) return false
  return (node === child.parent)
}

export function index(node) {
  if (null !== node.parent) {
    return node.parent.children.indexOf(node)
  }
  return -1
}

export function isLeaf(node) {
  return (0 === node.children.length)
}

export function isNode(node) {
  return (
    Array.isArray(node.children) &&
    undefined !== node.parent
  )
}

export function isRoot(node) {
  return (null === node.parent)
}

export function lastChild(node) {
  return node.children[node.children.length - 1]
}

export function length(node) {
  return node.children.length
}

export function nextSibling(node) {
  const parent = node.parent
  if (null == parent) return

  const index = parent.children.indexOf(node)
  return parent.children[index + 1]
}

export function previousSibling(node) {
  const parent = node.parent
  if (null == parent) return

  const index = parent.children.indexOf(node)
  return parent.children[index - 1]
}

export function siblings(node) {
  const parent = node.parent
  if (null == parent || 0 === parent.children.length) return []
  return parent.children.reduce((siblings, child) => {
    if (child !== node) {
      siblings.push(child)
    }
    return siblings
  }, [])
}

export function size(node) {
  if (0 === node.children.length) return 1
  return sizeReduce(node.children, 1)
}

function sizeReduce(nodes, size) {
  return nodes.reduce((size, node) => {
    size++
    if (0 !== node.children.length) {
      size = sizeReduce(node.children, size)
    }
    return size
  }, size)
}
