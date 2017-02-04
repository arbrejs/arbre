import test from 'ava'
import toObject from '../lib/to-object'

test('convert to object', t => {
  const root = Tree(0, [1, 2, 3], [4, 5])
  const json = toObject(root)

  t.deepEqual(json, {
    value: 0,
    children: [
      {
        value: 1,
        children: [
          { value: 2 },
          { value: 3 }
        ]
      },
      {
        value: 4,
        children: [
          { value: 5 }
        ]
      }
    ]
  })
})
