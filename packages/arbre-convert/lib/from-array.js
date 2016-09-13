function insert(node, child) {
  node.children.push(child)
  child.parent = node
}

function fromLevel(parent, children, Ctor) {
  return children.reduce((parent, child) => {
    if (Array.isArray(child)) {
      child = fromLevel(child.shift(), child, Ctor)
    }
    else {
      child = new Ctor(child)
    }

    insert(parent, child)

    return parent
  }, new Ctor(parent))
}

export function fromArray(array, Ctor) {
  return fromLevel(array.shift(), array, Ctor)
}
