import toObject from './to-object'

export default function toJSON(node) {
  return JSON.stringify(toObject(node), null, 2)
}
