import Node from '../../lib/node'

export default function seed(node, ...children) {
  return children.reduce((node, child) => {
    if (Array.isArray(child)) {
      child = seed(child.shift(), ...child)
    }

    node.add(child)

    return node
  }, new Node(node))
}
