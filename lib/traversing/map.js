const transform = require('./transform')

module.exports = function map(node, iteratee) {
  return transform(node, iteratee, (node, parentNode) => {
    parentNode.add(node)
  })
}
