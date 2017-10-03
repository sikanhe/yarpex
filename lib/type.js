import { identity, always } from 'ramda'

export default function type ({ name, validate, transform, unwrap }) {
  return {
    name,
    validate: validate || always(true),
    transform: transform || identity,
    unwrap: unwrap || identity,
  }
}

