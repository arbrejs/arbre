class Context {
  contructor() {
    this.state = 'walk'
  }

  is(state) {
    return (this.state === state)
  }

  skip() { this.state = 'skip' }
  skipSiblings() { this.state = 'skipSiblings' }
  break() { this.state = 'break' }
  remove() { this.state = 'remove' }
}

function eachChildren(parentNode, walker, iteratee, context) {
  if (null == parentNode.children || 0 === parentNode.children.length) return

  for (let i = 0; i < parentNode.children.length; i++) {
    const child = parentNode.children[i]
    walker(child, parentNode, iteratee, context)

    // Break traversing
    if (context.is('break')) return true
    // Skip siblings
    if (context.is('skipSiblings')) break

    // A node was removed, adjust the index
    if (context.is('remove')) {
      i--
    }
  }
}

function walkPreOrder(node, parentNode, iteratee, context) {
  iteratee(node, context)
  if (!context.is('skip') && !context.is('remove')) {
    eachChildren(node, walkPreOrder, iteratee, context)
  }
}

function walkPostOrder(node, parentNode, iteratee, context) {
  if (!context.is('skip')) {
    eachChildren(node, walkPostOrder, iteratee, context)
  }
  iteratee(node, context)
}

// TODO: why parent node?
module.exports = function walk(
  node, parentNode, iteratee,
  options = { strategy: 'pre' }
) {
  const context = new Context()

  if ('pre' === options.strategy) {
    walkPreOrder(node, parentNode, iteratee, context)
  }
  else {
    walkPostOrder(node, parentNode, iteratee, context)
  }
}
