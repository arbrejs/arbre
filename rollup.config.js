import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import cleanup from 'rollup-plugin-cleanup'
import uglify from 'rollup-plugin-uglify'

const isNode = ('build-node' === process.env.NODE_ENV)
const isMinified = ('1' === process.env.MIN)

const pkg = require('./package.json')

export default {
  format: (isNode ? 'cjs' : 'umd'),
  entry: 'index.js',
  dest: `dist/arbre.${isNode ? 'node' : 'browser'}${isMinified ? '.min' : ''}.js`,
  moduleName: 'arbre',
  external: isNode ? Object.keys(pkg.dependencies || {}) : [],
  plugins: [
    resolve({
      jsnext: true,
      main: true
    }),
    commonjs(),
    // XXX: https://github.com/rollup/rollup-plugin-babel/issues/120
    babel({
      babelrc: false,
      presets: [
        ['env', {
          targets: isNode ? { node: 5 } : { browsers: '> 1%' },
          modules: false
        }]
      ],
      plugins: [
        'external-helpers'
      ]
    }),
    cleanup(),
    isMinified ? uglify({
      mangleProperties: {
        regex: /_.*/
      }
    }) : null
  ].filter(Boolean)
}
