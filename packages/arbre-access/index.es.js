import deepEqualObj from 'not-so-shallow';

function at(node) {
  for (var _len = arguments.length, indices = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    indices[_key - 1] = arguments[_key];
  }

  for (let i = 0, len = indices.length; i < len; i++) {
    node = node.children[indices[i]];
  }
  return node;
}

function deepEqual(tree1, tree2) {
  if (null == tree1 && null == tree2) return false;
  return deepEqualObj(tree1, tree2);
}

function equal(tree1, tree2) {
  if (null == tree1 && null == tree2) return false;
  return deepEqualObj(tree1.value, tree2.value);
}

function firstChild(node) {
  return node.children[0];
}

function has(node, child) {
  if (null == child) return false;
  return node === child.parent;
}

function index(node) {
  if (null !== node.parent) {
    return node.parent.children.indexOf(node);
  }
  return -1;
}

function isLeaf(node) {
  return 0 === node.children.length;
}

function isNode(node) {
  return Array.isArray(node.children) && undefined !== node.parent;
}

function isRoot(node) {
  return null === node.parent;
}

function lastChild(node) {
  return node.children[node.children.length - 1];
}

function length(node) {
  return node.children.length;
}

function nextSibling(node) {
  const parent = node.parent;
  if (null == parent) return;

  const index = parent.children.indexOf(node);
  return parent.children[index + 1];
}

function previousSibling(node) {
  const parent = node.parent;
  if (null == parent) return;

  const index = parent.children.indexOf(node);
  return parent.children[index - 1];
}

function siblings(node) {
  const parent = node.parent;
  if (null == parent || 0 === parent.children.length) return [];
  return parent.children.reduce((siblings, child) => {
    if (child !== node) {
      siblings.push(child);
    }
    return siblings;
  }, []);
}

const sizeReduce = (nodes, size) => {
  return nodes.reduce((size, node) => {
    size++;
    if (0 !== node.children.length) {
      size = sizeReduce(node.children, size);
    }
    return size;
  }, size);
};

function size(node) {
  if (0 === node.children.length) return 1;
  return sizeReduce(node.children, 1);
}

export { at, deepEqual, equal, firstChild, has, index, isLeaf, isNode, isRoot, lastChild, length, nextSibling, previousSibling, siblings, size };