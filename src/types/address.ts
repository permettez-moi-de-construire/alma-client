import type { SetNullable } from './type-helpers'

import type { AlmaEntity } from './common'

export interface AlmaAddressBaseShape {
  first_name: string
  last_name: string
  company: string
  line1: string
  line2: string
  city: string
  postal_code: string
  country: string
  email: string
  phone: string
}

// Everything is optional
export type AlmaAddressPayload = Partial<AlmaAddressBaseShape>

// "city": null,
// "company": null,
// "country": "",
// "created": 1591783949,
// "email": null,
// "first_name": null,
// "id": "address_11jj6Pb13YH26Yo5QIwwgawEyu4k7YKetv",
// "last_name": null,
// "line1": null,
// "line2": null,
// "phone": null,
// "postal_code": null
export type AlmaAddress =
  AlmaEntity &
  // Everything returned is nullable
  Omit<
  SetNullable<AlmaAddressBaseShape>,
  'country'
  > &
  // ...except country, which is always defined
  Pick<AlmaAddressBaseShape, 'country'>
