export default function withinBounds(parent, index) {
  return (index >= 0 && index <= parent.children.length)
}
