export function cloneNode(node) {
  return node.clone()
}

export function addNode(node, parentNode) {
  parentNode.add(node)
}

export function layoutNode(mutation, node, parentNode, index) {
  if ('remove' === mutation) {
    parentNode.remove(node)
  }
  else if ('replace' === mutation) {
    node.replace(parentNode.at(index))
  }
}
