import clone from 'clone'

export default function cloneNode(node) {
  const newNode = Object.create(Object.getPrototypeOf(node))
  for (let k in node) {
    /* istanbul ignore next */
    if (!node.hasOwnProperty(k)) continue
    if ('parent' === k || 'children' === k) continue
    newNode[k] = clone(node[k])
  }
  newNode.parent = null
  newNode.children = []
  return newNode
}
