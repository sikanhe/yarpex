import type from '../type'
import { typeEq } from '../types'

const regex = type({
  name: 'regex',
  validate: typeEq('RegExp'),
})

export default regex
