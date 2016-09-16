import Node from 'arbre-node';
import mixin from 'arbre-mixin';

mixin(Node, 'arbre-access', 'arbre-convert', 'arbre-manipulate', 'arbre-traverse');

export default Node;