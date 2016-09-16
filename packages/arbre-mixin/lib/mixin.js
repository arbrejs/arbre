import toMethod from 'to-method'

export default function mixin(nodeClass, ...modules) {
  // mixin each module into `nodeClass` prototype
  modules.forEach(module => toMethod(nodeClass, module))
}
