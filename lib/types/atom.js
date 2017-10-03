import type from '../type'
import { typeEq } from '../types'

const atom = type({
  name: 'atom',
  validate: typeEq('String'),
})

export default atom

