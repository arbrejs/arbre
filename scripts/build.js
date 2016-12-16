#!/usr/bin/env node
const chalk = require('chalk')
const fs = require('fs')
const path = require('path')
const rollup = require('rollup').rollup
const buble = require('rollup-plugin-buble')
const readPkg = require('read-pkg')

const rootPath = path.resolve(__dirname, '../packages')

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
      .then(pkg =>
        rollup({
          entry: path.join(pkgPath, 'index.js'),
          plugins: [
            buble()
          ],
          onwarn: () => {}
        })
        .then(bundle => Promise.all([
          bundle.write({
            dest: path.join(pkgPath, pkg.browser),
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
