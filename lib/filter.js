const traverse = require('./traverse')

function filter(predicate, hoistOrphans = true) {
  // TODO: use map
  this.traverse(node => {
    if (!predicate(node)) {
      // Removes the node from its parent
      node.parent.remove(node)

      // Then hoist every children of the removed node to its former
      // parent
      if (hoistOrphans && node.parent.parent) {
        node.children.forEach(child => node.parent.parent.add(child))
      }
      return -1
    }
  })
}
