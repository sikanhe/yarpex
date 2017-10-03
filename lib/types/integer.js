import type from '../type'
import { typeEq } from '../types'

const integer = type({
  name: 'integer',
  validate: typeEq('Number'),
})

export default integer

