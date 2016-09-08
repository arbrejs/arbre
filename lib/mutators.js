export function cloneNode(node) {
  return node.clone()
}

export function addNode(node, parentNode) {
  parentNode.add(node)
}

export function removeNode(mutation, node, parentNode) {
  if ('remove' === mutation) {
    parentNode.remove(node)
  }
}
