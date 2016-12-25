export default function siblings(node) {
  const parent = node.parent
  if (null == parent || 0 === parent.children.length) return []
  return parent.children.reduce((siblings, child) => {
    if (child !== node) {
      siblings.push(child)
    }
    return siblings
  }, [])
}
