# at

Return a descendant node at the given path.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.
-   `indices` **...[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** List of indices of each child.

**Examples**

_Return the first child_

```javascript
at(node, 0)
```

_Return the first grandchild_

```javascript
at(node, 0, 0)
```

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# breadth

Return the breadth at the node's level.

The **breadth** is the number of siblings to this node + 1.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# clone

Deep clone a node and its children.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be cloned.
-   `factory` **[Function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function)** Factory creating a new node object.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# deep-equal

Check if a node deep equals another node.

**Parameters**

-   `node1` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** First node.
-   `node2` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Second node.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# depth

Return the depth of a node.

The `depth` is the number of edges from the node to the root.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# equal

Check if a node equals another node.

**Parameters**

-   `node1` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** First node.
-   `node2` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Second node.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# filter

Filter a node and its children given a predicate.

When a node is removed, all its children are removed too.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be filtered.
-   `predicate` **[Predicate](#predicate)** Filter predicate.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# find

Find a node with the given predicate.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be searched.
-   `predicate` **[Predicate](#predicate)** Search predicate.

Returns **([Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling) \| [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined))** 

# first-child

Return the first child of a node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Parent node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# first-sibling

Return the first sibling of a node.

The first **sibling** node is the left-most child of a node's parent.
If the node is the root node or the only child, it returns the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# from-array

Convert an array-notation tree into an `arbre` tree.

**Parameters**

-   `factory` **[NodeFactory](#nodefactory)** Function used to create `arbre` nodes.
-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Array-notation tree.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# from-json

Convert a JSON-notation tree into an `arbre` tree.

**Parameters**

-   `factory` **[NodeFactory](#nodefactory)** Function used to create `arbre` nodes.
-   `json` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** JSON-notation tree.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# from-object

Convert an plain-object-notation tree into an `arbre` tree.

**Parameters**

-   `factory` **[NodeFactory](#nodefactory)** Function used to create `arbre` nodes.
-   `obj` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Plain-object-notation tree.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# has-children

Return `true` if the node has ny child node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# has

Check if a node has another node as child.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Parent node.
-   `child` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to check.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# hoist

Hoist a node children.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node whose children are hoisted.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# index

Return the index of a node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# insert-after

Insert a node after another.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Reference node.
-   `target` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be inserted.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# insert-at

Insert a node at the given index.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Reference node.
-   `target` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be inserted.
-   `index` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Index where to insert the target node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# insert-before

Insert a node before another.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Reference node.
-   `target` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be inserted.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# insert

Insert a node.

**Parameters**

-   `parent` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Parent node.
-   `target` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be inserted.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# is-first-sibling

Return `true` if the node is the first sibling.

If the node is the root node or the only child, it returns the `true`.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# is-last-sibling

Return `true` if the node is the last sibling.

If the node is the root node or the only child, it returns the `true`.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# is-leaf

Check if a node is a leaf: it has no children.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to check.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# is-node

Check if an object is an arbre-compatible node.

**Parameters**

-   `obj` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Object to check.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# is-root

Check if a node is a root: it has no parent.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to check.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# Predicate

Test if a node satifies a condition.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be processed.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# NodeFactory

Create a new `arbre` node.

**Parameters**

-   `Node` **Any** data.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# Node

`arbre` compatible node.

**Properties**

-   `parent` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Parent node.
-   `children` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)>** Children nodes.

# Iteratee

Apply an operation on a node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be processed.

Returns **([Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling) \| [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined))** 

# last-child

Get the last child of a node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Parent node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# last-sibling

Return the last sibling of a node.

The last sibling node is the right-most child of a node's parent.
If the node is the root node or the only child, it returns the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# length

Get the length of a node: the number of children.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to check.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# level

Return the level of a node.

The `level` of a node is its `depth` + 1.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# map

Maps over each node recursively.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be mapped over.
-   `iteratee` **[Iteratee](#iteratee)** Return the altered node or a new node.
-   `order` **\[[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** [description] (optional, default `'pre'`)

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# next-sibling

Return the next sibling of a node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Reference node.

Returns **([Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling) \| [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined))** 

# path

Return the path of the node.

The **path** is an array of node from the root to the given node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

# previous-sibling

Return the previous sibling of a node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Reference node.

Returns **([Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling) \| [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined))** 

# prune

Prune a node: remove all its children.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to prune.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# remove

Remove a node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to remove.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# replace

Replace a node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to replace.
-   `target` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Replacement node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# siblings

Return the siblings of a node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Reference node.

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

# size

Return the size of a tree.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Root node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# to-array

Convert a tree to an array-notation.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Root node of the tree.

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

# to-json

Converts a tree to JSON-notation.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Root node of the tree.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

# to-object

Convert a tree to object-notation.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Root node of the tree.

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

# walk

Walk a tree, visiting each node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Root node of thee tree.
-   `iteratee` **[Iteratee](#iteratee)** Called on each node.
-   `order` **\[(pre | post)]** Traversal mode (optional, default `'pre'`)

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 
