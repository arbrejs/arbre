export default function index(node) {
  if (null !== node.parent) {
    return node.parent.children.indexOf(node)
  }
  return -1
}
