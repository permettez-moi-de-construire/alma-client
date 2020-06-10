import { AlmaEntity } from './common.d'

export interface AlmaRefundBaseShape {
  amount: number
  payment: string
  merchant_reference: string
}

export type AlmaRefundPayload =
  Omit<
    Partial<AlmaRefundBaseShape>,
    'payment'
  >

export type AlmaRefund =
  AlmaEntity &
  AlmaRefundBaseShape
