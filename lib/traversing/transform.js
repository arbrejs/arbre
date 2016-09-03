const walk = require('./walk')

module.exports = function transform(node, creator, appender) {
  let out, path = []

  walk(node, null, (snode, context) => {
    let tvalue = creator(snode)

    // Get the current path item representing the potential parent of the
    // current node.
    const ptvalue = path[path.length - 1]

    // If it's the first iteration, we assume that's the root of the tree we
    // are going to return.
    if (undefined === ptvalue) {
      out = tvalue
    }
    // Otherwize it's a node deeper in the hierarchy.
    else {
      // If iteratee returned a non null value we pass it to the appender.
      if (tvalue) {
        appender(tvalue, ptvalue.value)
      }
      // Otherwize the current node is discarded
      else {
        context.skip()
      }

      // Decrement the path item counter of children to be added. If it
      // reaches zero all the children have been added and we go up in the
      // hierarchy.
      ptvalue.count--
      if (0 === ptvalue.count) {
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
      path.push({ value: tvalue, count: snode.children.length })
    }
  })

  return out
}
