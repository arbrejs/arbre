#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const rollup = require('rollup').rollup
const babel = require('rollup-plugin-babel')
const multiEntry = require('rollup-plugin-multi-entry')

const rootPath = path.resolve(__dirname, '../packages')

fs.readdir(rootPath, (err, packages) => {
  if (err) process.exit(1)

  const bundlers = packages.map(pkg => {
    const pkgPath = path.resolve(rootPath, pkg)

    return rollup({
      entry: path.join(pkgPath, 'lib', '*.js'),
      plugins: [
        babel({ exclude: 'node_modules/**' }),
        multiEntry()
      ],
      onwarn: () => {}
    })
    .then(bundle => Promise.all([
      bundle.write({
        dest: path.join(pkgPath, 'index.es.js'),
        format: 'es'
      }),
      bundle.write({
        dest: path.join(pkgPath, 'index.js'),
        format: 'umd',
        moduleName: pkg.replace(/-(\w)/, g => g[1].toUpperCase())
      })
    ]))
    .then(() => console.log(`${pkg}: build success`))
    .catch(err => console.error(`${pkg}: build error, ${err.message}`))
  })

  Promise.all(bundlers)
})
