import type from '../type'
import { typeEq } from '../types'

const time = type({
  name: 'boolean',
  validate: typeEq('Boolean'),
})

export default time
