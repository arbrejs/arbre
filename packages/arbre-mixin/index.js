import toMethod from 'to-method'

export function mixin(nodeClass, ...modules) {
  // mixin each module into `nodeClass` prototype
  modules.forEach(module => toMethod(nodeClass, module))
}
