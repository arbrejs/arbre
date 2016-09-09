import { Node } from '../..'

export default function seed(root, ...items) {
  return items.reduce((root, item) => {
    let node

    if (Array.isArray(item)) {
      if (Array.isArray(item)) {
        node = seed(item[0], ...item[1])
      }
      else {
        node = seed(item[0], item[1])
      }
    }
    else {
      node = item
    }

    root.add(node)
    return root
  }, new Node(root))
}
