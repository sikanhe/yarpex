import type from '../type'
import { typeEq } from '../types'

const float = type({
  name: 'float',
  validate: typeEq('Number'),
})

export default float
