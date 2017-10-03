import { either, is } from 'ramda'
import type from '../type'
import { typeEq } from '../types'

const isCharlist = either(typeEq('String'), is(Buffer))

const charlist = type({
  name: 'charlist',
  validate: isCharlist,
})

export default charlist
