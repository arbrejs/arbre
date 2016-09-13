export default class Node {
  constructor(props) {
    Object.assign(this, props)
    this.parent = null
    this.children = []
  }
}
