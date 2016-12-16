import { fromObject } from './from-object'

export function fromJSON(Ctor, json, constructor) {
  return fromObject(Ctor, JSON.parse(json), constructor)
}
