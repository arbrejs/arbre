const Node = require('./lib/node')

module.exports = function grapes(value) {
  if ('object' === typeof value) {
    return Node.fromObject(value)
  }
  return new Node()
}

module.exports.Node = Node
