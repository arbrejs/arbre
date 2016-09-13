import walk from './walk'

export default function find(node, value) {
  let found = null

  // traverse the entire tree to find the node and return it
  walk(node, (node, context) => {
    if (0 === context.depth) return
    if (node.value === value) {
      found = node
      context.break()
    }
  })

  return found
}
