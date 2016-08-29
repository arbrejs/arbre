const walk = require('./walk')

module.exports = function map(node, iteratee) {
  let out, path = []

  walk(node, null, (snode, context) => {
    let dnode = iteratee(snode)

    // Get the current path item representing the potential parent of the
    // current node.
    const pitem = path[path.length - 1]

    // If source node is the caller node then it's the root of the tree
    // we are going to return.
    if (snode === node) {
      out = dnode
    }
    // Otherwize it's a node deeper in the hierarchy.
    else {
      // If iteratee returned a non null value we assume it's a
      // node-value and we add it to its parent
      if (dnode) {
        pitem.node.add(dnode)
      }
      // Otherwize the current node is discarded
      else {
        context.skip()
      }

      // Decrement the path item counter of children to be added. If it
      // reaches zero all the children have been added and we go up in the
      // hierarchy.
      pitem.count--
      if (0 === pitem.count) {
        path.pop()
      }
    }

    // If the current source node has children, push the current
    // destination node in the path mentioning how many children may be
    // added
    if (
      snode.children &&
      0 !== snode.children.length &&
      !context.is('skip')
    ) {
      path.push({ node: dnode, count: snode.children.length })
    }
  })

  return out
}
