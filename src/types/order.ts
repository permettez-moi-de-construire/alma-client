import { SetNullable } from './type-helpers'

import { AlmaEntity } from './common'

export interface AlmaOrderBaseShape<CODT extends {} = {}> {
  merchant_reference: string
  merchant_url: string
  data: CODT
}

export type AlmaOrderPayload<CODT extends {} = {}> = Partial<AlmaOrderBaseShape<CODT>>

// "comment": null,
// "created": 1591783949,
// "customer_url": null,
// "data": {},
// "id": "order_11jj0GD1VzYYb3TaGgCsqky68EYQN1Qzor",
// "merchant_reference": null,
// "merchant_url": null,
// "payment": "payment_11jj1Ye4isylzn1NIW2YGcKG2qIew4GN7F"
export type AlmaOrder<CODT extends {} = {}> =
  AlmaEntity &
  SetNullable<AlmaOrderBaseShape<CODT>> &
  {
    payment: string
    comment: string | null
    customer_url: string | null
  }
