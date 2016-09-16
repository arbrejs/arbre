#!/usr/bin/env node
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const rollup = require('rollup').rollup
const babel = require('rollup-plugin-babel')
const multiEntry = require('rollup-plugin-multi-entry')
const readPkg = require('read-pkg')

const rootPath = path.resolve(__dirname, '../packages')

function entry(buildType, pkgPath, pkgName) {
  return path.join(pkgPath, 'lib', ('simple' === buildType ?
    `${pkgName.replace('arbre-', '')}.js` :
    '*.js'
  ))
}

function plugins(buildType) {
  const plugins = [
    babel({ exclude: 'node_modules/**' })
  ]
  if ('lib' === buildType) {
    plugins.push(multiEntry())
  }
  return plugins
}

function logSuccess(pkgName) {
  console.log(`[${chalk.cyan(pkgName)}] success 😎`)
}

function logError(pkgName, err) {
  console.error(
    `[${chalk.cyan(pkgName)}] error: ${chalk.red(err.message)}`
  )
}

fs.readdir(rootPath, (err, packages) => {
  if (err) process.exit(1)

  const bundlers = packages.map(pkgName => {
    const pkgPath = path.resolve(rootPath, pkgName)

    return readPkg(pkgPath)
    .then(pkg => (pkg.arbre ? pkg.arbre.build : 'lib'))
    .then(buildType =>
      rollup({
        entry: entry(buildType, pkgPath, pkgName),
        plugins: plugins(buildType),
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
          moduleName: pkgName.replace(/-(\w)/, g => g[1].toUpperCase())
        })
      ]))
      .then(() => logSuccess(pkgName))
    )
    .catch(err => logError(pkgName, err))
  })

  Promise.all(bundlers)
})
