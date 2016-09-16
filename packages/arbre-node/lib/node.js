import merge from 'merge-deep'

export default class Node {
  constructor(props) {
    merge(this, props)
    this.parent = null
    this.children = []
  }
}
