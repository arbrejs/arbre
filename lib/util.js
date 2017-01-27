import clone from 'clone'

export function cloneNode(node) {
  const newNode = Object.create(Object.getPrototypeOf(node))
  for (let k in node) {
    if (!node.hasOwnProperty(k)) continue
    if ('parent' === k || 'children' === k) continue
    newNode[k] = clone(node[k])
  }
  newNode.parent = null
  newNode.children = []
  return newNode
}

export function dataMutatorWith(creator) {
  return (value) => {
    return creator(value)
  }
}

export function layoutMutator(node, parent) {
  parent.children.push(node)
  node.parent = parent
}

export function layoutMorpher(operation, node, parent, index) {
  if ('remove' === operation) {
    parent.children.splice(index, 1)
    node.parent = null
  }
  else if ('replace' === operation) {
    const old = parent.children[index]
    parent.children[index] = node
    node.parent = old.parent
    old.parent = null
  }
}
