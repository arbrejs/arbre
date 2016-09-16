import Node from 'arbre-node'
import mixin from 'arbre-mixin'

import * as access from 'arbre-access'
import * as convert from 'arbre-convert'
import * as manipulate from 'arbre-manipulate'
import * as traverse from 'arbre-traverse'

mixin(Node, access, convert, manipulate, traverse)

export default Node
