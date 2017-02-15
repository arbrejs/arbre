export default function layoutMorpher(node, parent) {
  parent.children.push(node)
  node.parent = parent
}
