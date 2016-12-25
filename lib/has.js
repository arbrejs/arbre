export default function has(node, child) {
  if (null == child) return false
  return (node === child.parent)
}
