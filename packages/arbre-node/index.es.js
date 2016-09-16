import clone from 'clone';

class Node {
  constructor(value) {
    this.value = clone(value);
    this.parent = null;
    this.children = [];
  }
}

export default Node;