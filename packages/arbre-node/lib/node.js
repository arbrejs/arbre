import clone from 'clone'

export default class Node {
  constructor(value) {
    this.value = clone(value)
    this.parent = null
    this.children = []
  }
}
