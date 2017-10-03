import { map as rmap } from 'ramda'
import type from '../type'
import { wrap, unwrap, typeEq } from '../types'

const tuple = type({
  name: 'tuple',
  validate: typeEq('Array'),
  transform: rmap(wrap),
  unwrap: rmap(unwrap),
})

export default tuple

