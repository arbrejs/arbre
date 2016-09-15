import morph from 'tree-morph';

// TODO: use tree-fold

const dataMutator = ancestors => {
  let nextId = 0;

  return (node, context) => {
    const entry = [nextId++, null, node.valueOf()];

    if (0 === context.depth) {
      ancestors.push(entry);
      return ancestors;
    }

    return entry;
  };
};

const layoutMutator = ancestors => (entry, parent) => {
  entry[1] = parent === ancestors ? parent[0][0] : parent[0];
  ancestors.push(entry);
};

function toAncestors(node) {
  const ancestors = [];

  return morph(node, dataMutator(ancestors), layoutMutator(ancestors));
}

export { toAncestors };