import type from '../type'
import { typeEq } from '../types'

const nil = type({
  name: 'nil',
  validate: typeEq('Null'),
})

export default nil
