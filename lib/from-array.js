function fromLevel(factory, parent, children) {
  return children.reduce((parent, child) => {
    if (Array.isArray(child)) {
      child = fromLevel(factory, child.shift(), child)
    }
    else {
      child = factory(child)
    }
    parent.children.push(child)
    child.parent = parent
    return parent
  }, factory(parent))
}

export default function fromArray(factory, array) {
  return fromLevel(factory, array.shift(), array)
}
