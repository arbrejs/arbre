export function create(value) {
  return {
    parent: null,
    children: [],
    value
  }
}

export function clone(node) {
  return create(node.value)
}

export function serialize(node) {
  return { value: node.value }
}

export function serializePrimitive(node) {
  return node.value
}
