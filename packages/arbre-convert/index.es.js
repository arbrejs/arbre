import morph from 'tree-morph';
import clone from 'clone';
import isPlainObject from 'is-plain-obj';

function insert(node, child) {
  node.children.push(child);
  child.parent = node;
}

function fromLevel(Ctor, parent, children) {
  return children.reduce((parent, child) => {
    if (Array.isArray(child)) {
      child = fromLevel(Ctor, child.shift(), child);
    } else {
      child = new Ctor(child);
    }

    insert(parent, child);

    return parent;
  }, new Ctor(parent));
}

function fromArray(Ctor, array) {
  return fromLevel(Ctor, array.shift(), array);
}

const dataMutator = (Ctor, childrenKey) => value => {
  if (childrenKey) {
    value.children = value[childrenKey];
    delete value[childrenKey];
  }

  const node = new Ctor(value);
  delete node.value.children;
  return node;
};

const layoutMutator = (node, parent) => {
  parent.children.push(node);
  node.parent = parent;
};

function fromObject(Ctor, obj, childrenKey) {
  return morph(obj, dataMutator(Ctor, childrenKey), layoutMutator);
}

function fromJSON(json, constructor) {
  return fromObject(JSON.parse(json), constructor);
}

const dataMutator$1 = node => {
  return clone(0 === node.children.length ? node.value : [node.value]);
};

const layoutMutator$1 = (item, parentItem) => {
  parentItem.push(item);
};

function toArray(node) {
  return morph(node, dataMutator$1, layoutMutator$1);
}

const dataMutator$2 = node => {
  return clone(isPlainObject(node.value) ? node.value : { value: node.value });
};

const layoutMutator$2 = (obj, parentObj) => {
  if (null == parentObj.children) {
    parentObj.children = [];
  }
  parentObj.children.push(obj);
};

function toObject(node) {
  return morph(node, dataMutator$2, layoutMutator$2);
}

function toJSON(node) {
  return JSON.stringify(toObject(node), null, 2);
}

export { fromArray, fromJSON, fromObject, toArray, toJSON, toObject };