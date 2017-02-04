# at

Return a descendant node at the given indices.

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

Deeply clone the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.
-   `creator` **\[[Creator](#creator)]** Function that creates new node object. (optional, default `cloneNode`)

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# depth

Return the depth of the node.

The **depth** is the number of edges from a node to the root.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# filter

Filter the node given a predicate.

When a node is removed, all its children are removed too.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.
-   `predicate` **[Predicate](#predicate)** Filter predicate.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# find

Find the node with the given predicate.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.
-   `predicate` **[Predicate](#predicate)** Search predicate.

Returns **([Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling) \| [undefined](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined))** 

# first-child

Return the first child of the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# first-sibling

Return the first sibling of the node.

The first **sibling** node is the left-most child of a node's parent.
If the node is the root node or the only child, it returns the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# from-array

Convert an **array-notation** tree into a `Node` tree.

**Parameters**

-   `array` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** Array-notation tree.
-   `creator` **\[[Creator](#creator)]** Function that creates new node object. (optional, default `cloneNode`)

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# from-json

Convert a **JSON-notation** tree into an `Node` tree.

**Parameters**

-   `json` **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** JSON-notation tree.
-   `creator` **\[[Creator](#creator)]** Function that creates new node object. (optional, default `cloneNode`)

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# from-object

Convert an **plain-object-notation** tree into a `Node` tree.

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

Return `true` if the node has the given node as child.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.
-   `child` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to check.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# height

Return the height of the node.

The **height** is the length of the longest path from a node to its deepest
ancestor.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# hoist

Hoist the node's children.

**Hoisting** a node is an operation that insert all children of node after
the node itself.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# index

Return the index of the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# insert-after

Insert a target node after the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.
-   `target` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be inserted.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# insert-at

Insert a target node at the given index.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.
-   `target` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be inserted.
-   `index` **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Index where to insert the target node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# insert-before

Insert a target node before the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.
-   `target` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be inserted.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# insert

Insert a node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.
-   `target` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node to be inserted.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# is-first-sibling

Return `true` if the node is the first sibling.

If the node is the root node or the only child, it returns `true`.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# is-last-sibling

Return `true` if the node is the last sibling.

If the node is the root node or the only child, it returns `true`.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# is-leaf

Return `true` if the node is a leaf.

A **leaf** is a node that does not have any children.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# is-node

Return `true` is the object is a `Node`.

**Parameters**

-   `obj` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** Object to check.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# is-only-child

Return `true` if the node is the only child of its parent.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# is-root

Return `true` if the node is a root.

a **root** is a node without parent.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)** 

# is-sibling-of

Return `true` if a target node is a sibling of the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.
-   `target` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Compared node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# last-child

Return the last child of the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Parent node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# last-sibling

Return the last sibling of the node.

The last sibling node is the right-most child of a node's parent.
If the node is the root node or the only child, it returns the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# length

Return the length of the node.

The **length** is the number of the node's children.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# level

Return the level of a node.

The **level** of a node is its **depth** + 1.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# map

Map a node and its descendants.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.
-   `iteratee` **[Iteratee](#iteratee)** Return the altered node or a new node.
-   `order` **\[[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)]** [description] (optional, default `'pre'`)

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# next-sibling

Return the next sibling of the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# path

Return the path of the node.

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

Prune the node.

It remove all the node's children making it a leaf node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# remove

Remove the node from its parent.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# replace

Replace the node by a target node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.
-   `target` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Replacement node.

Returns **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** 

# siblings

Return the siblings of the node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

# size

Return the size of the node.

The **size** is the total number of descendants of a node.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** 

# to-array

Convert a `Node` tree to an **array-notation** tree.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)** 

# to-json

Convert a `Node` tree to an **JSON-notation** tree.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** 

# to-object

Convert a `Node` tree to an **object-notation** tree.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.

Returns **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)** 

# walk

Walk a node and its descendants.

**Parameters**

-   `node` **[Node](https://developer.mozilla.org/en-US/docs/Web/API/Node/nextSibling)** Node.
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
