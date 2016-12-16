function insert(node, child) {
  node.children.push(child)
  child.parent = node
}

function fromLevel(Ctor, parent, children) {
  return children.reduce((parent, child) => {
    if (Array.isArray(child)) {
      child = fromLevel(Ctor, child.shift(), child)
    }
    else {
      child = new Ctor(child)
    }

    insert(parent, child)

    return parent
  }, new Ctor(parent))
}

export function fromArray(Ctor, array) {
  return fromLevel(Ctor, array.shift(), array)
}
