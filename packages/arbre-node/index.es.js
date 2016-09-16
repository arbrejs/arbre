import merge from 'merge-deep';

class Node {
  constructor(props) {
    merge(this, props);
    this.parent = null;
    this.children = [];
  }
}

export default Node;