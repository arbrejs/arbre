import { fromObject } from './from-object'

export function fromJSON(json, constructor) {
  return fromObject(JSON.parse(json), constructor)
}
