import { forEach } from 'ramda'
import { registerType } from './registry'
import map from './map'
import list from './list'
import tuple from './tuple'
import atom from './atom'
import integer from './integer'
import float from './float'
import binary from './binary'
import regex from './regex'
import charlist from './charlist'
import time from './time'
import nil from './nil'

export default function init () {
  const types = [
    map,
    list,
    tuple,
    atom,
    integer,
    float,
    binary,
    charlist,
    regex,
    time,
    nil,
  ]

  forEach(registerType, types)
}
