function insert(node, child) {
  node.children.push(child)
  child.parent = node
}

function fromLevel(factory, parent, children) {
  return children.reduce((parent, child) => {
    if (Array.isArray(child)) {
      child = fromLevel(factory, child.shift(), child)
    }
    else {
      child = factory(child)
    }

    insert(parent, child)

    return parent
  }, factory(parent))
}

export function fromArray(Ctor, array) {
  return fromLevel(Ctor, array.shift(), array)
}
