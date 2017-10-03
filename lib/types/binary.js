import { either, is } from 'ramda'
import type from '../type'
import { typeEq } from '../types'

const isBinary = either(typeEq('String'), is(Buffer))

const binary = type({
  name: 'binary',
  validate: isBinary,
})

export default binary
