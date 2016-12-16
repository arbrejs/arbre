function remove(node) {
  const parent = node.parent;
  if (null == parent) return;

  const index = parent.children.indexOf(node);
  parent.children.splice(index, 1);
  node.parent = null;

  return node;
}

function insertAt(node, child, index) {
  if (null == node || child === node) return;
  if (index < 0 || index > node.children.length) return;

  remove(child);
  node.children.splice(index, 0, child);
  child.parent = node;

  return child;
}

// TODO: jsperf if push/unshift are need for edge cases

function insert(node, child) {
  if (null == node) return;
  return insertAt(node, child, node.children.length);
}

const cloneDeep = (node, Ctor) => {
  const newNode = new Ctor(node.value);

  newNode.children = node.children.map(child => {
    return insert(newNode, child.children.length > 0 ? cloneDeep(child, Ctor) : new Ctor(child.value));
  });

  return newNode;
};

function clone(node, Ctor) {
  return cloneDeep(node, Ctor || node.constructor);
}

function insertAfter(node, after) {
  if (null == after || null === after.parent) return;

  const index = after.parent.children.indexOf(after);
  return insertAt(after.parent, node, index + 1);
}

function hoist(node) {
  const children = node.children;
  const ret = children.length;

  while (children.length > 0) {
    const child = children[children.length - 1];
    insertAfter(child, node);
  }

  return ret;
}

function insertBefore(node, before) {
  if (null == before || null === before.parent) return;

  const index = before.parent.children.indexOf(before);
  return insertAt(before.parent, node, index);
}

function prune(node) {
  const children = node.children;
  const ret = children.length;

  while (0 !== children.length) {
    const child = children.shift();
    child.parent = null;
  }

  return ret;
}

function replace(node, replace) {
  if (null == replace || this === replace || null === replace.parent) return;

  const index = replace.parent.children.indexOf(replace);
  insertAt(replace.parent, node, index);
  remove(replace);

  return node;
}

export { clone, hoist, insertAfter, insertAt, insertBefore, insert, prune, remove, replace };