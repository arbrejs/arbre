import { toObject } from './to-object'

export function toJSON(node) {
  return JSON.stringify(toObject(node), null, 2)
}
