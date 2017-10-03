import { isNil, curry, type, T, cond, is, always } from 'ramda'
import { types } from './registry'

function Typed () {}

export const typeEq = curry((name, x) => type(x) === name)

const typeNameFor = cond([
  [is(Buffer),       always('binary')],
  [is(Uint8Array),   always('binary')],
  [typeEq('String'), always('binary')],
  [typeEq('Array'),  always('list')],
  [typeEq('Number'), always('integer')],
  [typeEq('Object'), always('map')],
  [typeEq('RegExp'), always('regex')],
  [typeEq('Date'),   always('time')],
  [typeEq('Null'),   always('nil')],
  [T,                always(null)],
])

export const wrapAs = curry((name, valueOrTyped) => {
  let value = valueOrTyped

  if (is(Typed, valueOrTyped)) {
    if (valueOrTyped.type.name === name) {
      return valueOrTyped
    }

    value = value.value
  }

  const valueType = types[name]

  if (isNil(valueType)) {
    throw new Error('type does not exist')
  }

  if (!valueType.validate(value)) {
    throw new Error(`type validation for ${name} failed`)
  }

  return Object.create(Typed.prototype, {
    value: {
      configurable: false,
      writable: false,
      enumerable: true,
      value: valueType.transform(value),
    },
    type: {
      configurable: false,
      writable: false,
      enumerable: true,
      value: valueType,
    },
  })
})

export function wrap (value) {
  if (is(Typed, value)) {
    return value
  }

  const valueType = typeNameFor(value)

  if (valueType == null) {
    throw new Error('invalid value')
  }

  return wrapAs(valueType, value)
}

export function unwrap (value) {
  if (!is(Typed, value)) {
    return value
  }

  return value.type.unwrap(value.value)
}
