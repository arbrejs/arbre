import Node from './lib/node'

export default function grapes(value) {
  if (null != value) {
    if ('object' !== typeof value) {
      return new Node(value)
    }
    return Node.fromObject(value)
  }
  return new Node()
}

export { Node as Node }
