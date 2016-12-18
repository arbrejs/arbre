import { fromObject } from './from-object'

export function fromJSON(factory, json, constructor) {
  return fromObject(factory, JSON.parse(json), constructor)
}
