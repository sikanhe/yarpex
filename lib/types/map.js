import { pipe, fromPairs, toPairs, when, either, map as rmap } from 'ramda'
import type from '../type'
import { wrap, unwrap, typeEq } from '../types'

export const transform =
  pipe(
    when(typeEq('Object'), toPairs),
    rmap(([k, v]) => [wrap(k), wrap(v)]),
  )

export const unwrapMap =
  pipe(
    rmap(([k, v]) => [unwrap(k), unwrap(v)]),
    fromPairs,
  )

const map = type({
  name: 'map',
  validate: either(typeEq('Object'), typeEq('Array')),
  transform,
  unwrap: unwrapMap,
})

export default map

