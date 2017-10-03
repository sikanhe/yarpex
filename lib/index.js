import { __, pipe, curry, merge, toPairs, map as rmap } from 'ramda'
import { wrapAs } from './types'
import init from './types/initializer'

export { wrap, wrapAs, unwrap } from './types'

export const atom = wrapAs('atom')
export const map = wrapAs('map')
export const list = wrapAs('list')
export const tuple = wrapAs('tuple')
export const integer = wrapAs('integer')
export const charlist = wrapAs('charlist')
export const float = wrapAs('float')
export const binary = wrapAs('binary')
export const regex = wrapAs('regex')
export const time = wrapAs('time')
export const nil = wrapAs('nil')

export const struct = curry((type, value) =>
  pipe(
    merge(__, { __struct__: atom(`Elixir.${type}`) }),
    toPairs,
    rmap(([k, v]) => [atom(k), v]),
    map,
  )(value))

export const keywordlist =
  pipe(
    toPairs,
    rmap(([k, v]) => tuple([atom(k), v])),
    list,
  )

init()

