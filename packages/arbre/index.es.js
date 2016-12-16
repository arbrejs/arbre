import Node from 'arbre-node';
import mixin from 'arbre-mixin';
import * as access from 'arbre-access';
import * as manipulate from 'arbre-manipulate';
import * as traverse from 'arbre-traverse';
import { toObject, toJSON, toArray, fromObject, fromJSON, fromArray } from 'arbre-convert';

mixin(Node, access, manipulate, traverse, { toArray, toJSON, toObject });

// manual plumbing for functions using rest parameters
// TODO: create associated test
Node.prototype.at = function () {
  for (var _len = arguments.length, indices = Array(_len), _key = 0; _key < _len; _key++) {
    indices[_key] = arguments[_key];
  }

  indices.unshift(this);
  return access.at.apply(this, indices);
};

Object.assign(Node, {
  fromArray: fromArray.bind(null, Node),
  fromJSON: fromJSON.bind(null, Node),
  fromObject: fromObject.bind(null, Node)
});

export default Node;