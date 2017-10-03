import type from '../type'
import { typeEq } from '../types'

const time = type({
  name: 'time',
  validate: typeEq('Date'),
})

export default time
