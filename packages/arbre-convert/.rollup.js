import multiEntry from 'rollup-plugin-multi-entry'

export default {
  entry: 'lib/*.js',
  moduleName: 'arbreConvert',
  plugins: [multiEntry()],
  targets: [
    { dest: 'index.js', format: 'umd' },
    { dest: 'index.es.js', format: 'es' }
  ]
}
