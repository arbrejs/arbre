import fromObject from './from-object'

export default function fromJSON(factory, json, constructor) {
  return fromObject(factory, JSON.parse(json), constructor)
}
