import { map as rmap } from 'ramda'
import type from '../type'
import { wrap, unwrap, typeEq } from '../types'

const list = type({
  name: 'list',
  validate: typeEq('Array'),
  transform: rmap(wrap),
  unwrap: rmap(unwrap),
})

export default list

