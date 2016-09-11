import Node from './lib/node'

export default function arbre(value) {
  if (null != value) {
    if ('object' !== typeof value) {
      return new Node(value)
    }
    return Node.fromObject(value)
  }
  return new Node()
}

arbre.Node = Node
