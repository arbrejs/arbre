import test from 'ava'
import seed from './helpers/seed'

test.todo('convert a tree to an array with deep structure')
// test('convert a tree to an array', t => {
//   const obj = {
//     type: 'foo',
//     children: [
//       { type: 'bar' }
//     ]
//   }
//   const tree = grapes(obj)
//
//   t.deepEqual(tree.toArray(), [
//     { type: 'foo' },
//     { type: 'bar' }
//   ])
// })
//
// test('convert a nested tree to an array', t => {
//   const obj = {
//     type: 'foo',
//     children: [
//       {
//         type: 'bar',
//         children: [
//           {
//             type: 'baz',
//             children: [
//               { type: 'qux' }
//             ]
//           }
//         ]
//       }
//     ]
//   }
//   const tree = grapes(obj)
//
//   t.deepEqual(tree.toArray(), [
//     { type: 'foo' },
//     { type: 'bar' },
//     { type: 'baz' },
//     { type: 'qux' }
//   ])
// })
//
// test('convert a complex tree to an array', t => {
//   const obj = {
//     type: 'foo',
//     children: [
//       {
//         type: 'bar',
//         children: [
//           { type: 'baz' },
//           { type: 'qux' }
//         ]
//       },
//       {
//         type: 'quux',
//         children: [
//           { type: 'corge' }
//         ]
//       }
//     ]
//   }
//   const tree = grapes(obj)
//
//   t.deepEqual(tree.toArray(), [
//     { type: 'foo' },
//     { type: 'bar' },
//     { type: 'baz' },
//     { type: 'qux' },
//     { type: 'quux' },
//     { type: 'corge' }
//   ])
// })
