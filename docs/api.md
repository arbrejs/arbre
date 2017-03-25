# at

Return a descendant node of a tree at the given indices.

**Parameters**

-   `root` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Root node.
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

The **breadth** is the number of siblings to a node + 1.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# clone

Clone the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.
-   `creator` **\[[Creator](#creator)]** Function that creates new node object. (optional, default `cloneNode`)

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# deep-clone

Deeply clone the tree.

**Parameters**

-   `root` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Root node.
-   `creator` **\[[Creator](#creator)]** Function that creates new node object. (optional, default `cloneNode`)

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# depth

Return the depth of the node.

The **depth** is the number of edges from a node to the root.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# filter

Filter the tree with the given predicate.

When a node is removed, all its children are removed too.

**Parameters**

-   `root` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Root node.
-   `predicate` **[Predicate](#predicate)** Filter predicate.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# find

Find a node with the given predicate.

**Parameters**

-   `root` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Root node.
-   `predicate` **[Predicate](#predicate)** Search predicate.

Returns **([Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling) \| [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined))** 

# first-child

Return the first child of a parent node.

**Parameters**

-   `parent` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Parent node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# first-sibling

Return the first sibling of a node.

The first **sibling** node is the left-most child of a node's parent.
If the node is the root node or the only child, it returns the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# from-array

Convert an **array-notation** tree into a tree.

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Array-notation tree.
-   `creator` **\[[Creator](#creator)]** Function that creates new node object. (optional, default `cloneNode`)

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# from-json

Convert a **JSON-notation** tree into an tree.

**Parameters**

-   `json` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** JSON-notation tree.
-   `creator` **\[[Creator](#creator)]** Function that creates new node object. (optional, default `cloneNode`)

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# from-object

Convert an **plain-object-notation** tree into a tree.

**Parameters**

-   `obj` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Plain-object-notation tree.
-   `creator` **\[[Creator](#creator)]** Function used to create `arbre` nodes. (optional, default `cloneNode`)

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# has-children

Return `true` if the node has at least one child.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# has

Return `true` if a parent node has the given child node.

**Parameters**

-   `parent` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Parent node.
-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to check.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# height

Return the height of a tree.

The **height** is the length of the longest path from a node to its deepest
ancestor.

**Parameters**

-   `root` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Root node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# hoist

Hoist a parent node's children.

**Hoisting** a node is an operation that insert all children of a node after
the node itself.

**Parameters**

-   `parent` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Parent node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# index

Return the index of a node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# insert-after

Insert a node after a sibling node.

**Parameters**

-   `sibling` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Sibling node.
-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be inserted.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# insert-at

Insert a node at the given index of the parent node children.

**Parameters**

-   `parent` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Parent node.
-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be inserted.
-   `index` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Index where to insert the node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# insert-before

Insert a node before a sibling node.

**Parameters**

-   `sibling` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Sibling node.
-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be inserted.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# insert

Insert a node.

**Parameters**

-   `parent` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Parent node.
-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be inserted.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# is-first-sibling

Return `true` if a node is the first sibling.

If the node is a root node or the only child, it returns `true`.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# is-last-sibling

Return `true` if a node is the last sibling.

If the node is a root node or the only child, it returns `true`.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# is-leaf

Return `true` if a node is a leaf.

A **leaf** is a node that does not have any children.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# is-node

Return `true` is an object has the shape of a `Node`.

**Parameters**

-   `obj` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Object to check.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# is-only-child

Return `true` if a node is the only child of its parent.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# is-root

Return `true` if a node is a root node.

a **root** is a node without parent.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# is-sibling-of

Return `true` if a target node is a sibling of the node.

**Parameters**

-   `sibling` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Sibling node.
-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node ot check.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# last-child

Return the last child of a parent node.

**Parameters**

-   `parent` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Parent node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# last-sibling

Return the last sibling of a node.

The last sibling node is the right-most child of a node's parent.
If the node is the root node or the only child, it returns the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# length

Return the length of a parent node.

The **length** is the number of node's children.

**Parameters**

-   `parent` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Parent node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# level

Return the level of a node.

The **level** of a node is its **depth** + 1.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# map

Map all the nodes of a tree.

**Parameters**

-   `root` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Root node.
-   `iteratee` **[Iteratee](#iteratee)** Return the altered node or a new node.
-   `order` **\[[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** [description] (optional, default `'pre'`)

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# next-sibling

Return the next sibling of the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# path

Return the path of a node.

The **path** is an array of node from the root to the given node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

# previous-sibling

Return the previous sibling of the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# prune

Prune a parent node.

It removes all node's children making it a leaf node.

**Parameters**

-   `parent` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Parent node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# remove

Remove a node from its parent.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# replace

Replace a node by another.

**Parameters**

-   `old` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Old node.
-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Replacement node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# siblings

Return the siblings of a node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

# size

Return the size of a tree.

The **size** is the total number of descendants of a root node.

**Parameters**

-   `root` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Root node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# to-array

Convert a tree to an **array-notation** tree.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

# to-json

Convert a tree to an **JSON-notation** tree.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

# to-object

Convert a tree to an **object-notation** tree.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

# walk

Walk a tree.

**Parameters**

-   `root` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Root node.
-   `iteratee` **[Iteratee](#iteratee)** Called on each node.
-   `order` **\[(pre | post)]** Traversal mode (optional, default `'pre'`)

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# Node

**arbre** compatible node.

**Properties**

-   `parent` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Parent node.
-   `children` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)>** Children nodes.

# Creator

Create a new `Node`.

**Parameters**

-   `Node` **Any** data.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# Predicate

Test if a node satisfies a condition.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be processed.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# Iteratee

Apply an operation on a node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be processed.

Returns **([Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling) \| [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined))** 
