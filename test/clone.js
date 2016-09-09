import test from 'ava'
import seed from './helpers/seed'

test.todo('should deep clone, shallow clone should be done via copy')

// test('deep clone a tree value', t => {
//   const tree = seed('foo', { deep: { property: { bar: 'baz' }}})
//   const cloneTree = tree.clone()
//
//   t.not(cloneTree, tree)
//   t.deepEqual(cloneTree.at(0).value.deep, tree.at(0).value.deep)
// })
//
// test('clone a tree primitive value', t => {
//   const tree = seed('foo')
//   const cloneTree = tree.clone()
//
//   t.not(cloneTree, tree)
//   t.is(cloneTree.value, tree.value)
// })
