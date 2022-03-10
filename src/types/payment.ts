import {
  SetNullable,
  RequireAtLeastOne
} from './type-helpers'

import {
  AlmaEntity,
  AlmaPaymentState,
  AlmaPaymentMethod,
  AlmaLocale
} from './common'

import { AlmaAddressPayload, AlmaAddress } from './address'
import { AlmaCustomerPayload, AlmaCustomer } from './customer'
import { AlmaOrderPayload, AlmaOrder } from './order'
import { AlmaRefund } from './refund'
import { AlmaInstallment } from './installment'

export interface AlmaPaymentBaseShape<CDT extends {} = {}> {
  // billing_address: AlmaAddressBaseShape
  customer_cancel_url: string
  custom_data: CDT
  deferred_months: number
  installments_count: number
  deferred_days?: number
  // TODO: /!\ check, it has to be a bug
  // ipn_callback_url: string
  preferred_payment_method: AlmaPaymentMethod
  purchase_amount: number
  return_url: string
  // shipping_address: AlmaAddressBaseShape
  // TODO: /!\ check, it has to be a bug
  // expires_after: number
  locale: AlmaLocale
}

export type AlmaPaymentPayload<CDT extends {} = {}> =
  // Everything is optional...
  Omit<
  Partial<AlmaPaymentBaseShape<CDT>>,
  'purchase_amount'
  > &
  // ...except purchase_amount...
  Pick<AlmaPaymentBaseShape, 'purchase_amount'> &
  // ...one of addresses
  RequireAtLeastOne<{
    billing_address: AlmaAddressPayload
    shipping_address: AlmaAddressPayload
  }> &
  // ... and expires_after + ipn_callback_url
  // TODO: check. It should also be in return?
  // so maybe in baseShape ?
  {
    expires_after?: number
    ipn_callback_url?: string
  }

export interface AlmaPaymentOrderPayload<CDT extends {} = {}, CODT extends {} = {}> {
  order?: AlmaOrderPayload<CODT>
  orders?: Array<AlmaOrderPayload<CODT>>
  customer?: AlmaCustomerPayload
  payment: AlmaPaymentPayload<CDT>
}

// RESPONSE FROM PAYMENT
// {
//   "billing_address": null,
//   "can_be_charged": false,
//   "created": 1591772561,
//   "custom_data": {},
//   "customer": {
//     "addresses": [],
//     "bank_accounts": [],
//     "banking_data_collected": false,
//     "birth_date": null,
//     "business_id_number": null,
//     "business_name": null,
//     "card": null,
//     "cards": [],
//     "collection_state": null,
//     "created": 1591772562,
//     "email": null,
//     "email_verified": false,
//     "first_name": null,
//     "id": "customer_11jiySx2z84mzHsxcOuI8QyMQA8WLBh2u9",
//     "is_business": false,
//     "last_name": null,
//     "phone": null,
//     "phone_verified": false,
//     "primary_bank_account": null
//   },
//   "customer_cancel_url": null,
//   "customer_fee": 0,
//   "customer_target_fee": 0,
//   "deferred_months": 0,
//   "id": "payment_11jiyZd3Er547365omsqcwM6KsaMQ3fN2E",
//   "installments_count": 3,
//   "is_customer_kyced": false,
//   "locale": "fr",
//   "merchant_id": "merchant_11jRF6240KQbEB36WGiAkusAo0uH6AFuNN",
//   "merchant_name": "Permettez-moi de construire ",
//   "merchant_target_fee": 7600,
//   "merchant_website": null,
//   "orders": [],
//   "origin": "online",
//   "payment_plan": [
//     {
//       "customer_fee": 0,
//       "due_date": 1591772561,
//       "original_purchase_amount": 66668,
//       "purchase_amount": 66668,
//       "state": "pending"
//     },
//     {
//       "customer_fee": 0,
//       "due_date": 1594364561,
//       "original_purchase_amount": 66666,
//       "purchase_amount": 66666,
//       "state": "pending"
//     },
//     {
//       "customer_fee": 0,
//       "due_date": 1597042961,
//       "original_purchase_amount": 66666,
//       "purchase_amount": 66666,
//       "state": "pending"
//     }
//   ],
//   "preferred_payment_method": "card",
//   "purchase_amount": 200000,
//   "refunds": [],
//   "requirements": {},
//   "return_url": null,
//   "seller": null,
//   "sepa_debit_enabled": true,
//   "shipping_address": null,
//   "state": "not_started",
//   "url": "https://pay.sandbox.getalma.eu/11jiyZd3Er547365omsqcwM6KsaMQ3fN2E",
//   "using_sepa_debit": false
// }

// This one is pretty strange...
// It's a mix between "Payment" (`payment` at root)
// and "PaymentOrder" (nested `payment`)
export type AlmaPayment<CDT extends {} = {}, CODT extends {} = {}> =
  AlmaEntity &
  SetNullable<
  AlmaPaymentBaseShape<CDT>,
  'customer_cancel_url' | 'return_url'
  > &
  {
    billing_address: AlmaAddress | null
    shipping_address: AlmaAddress | null

    can_be_charged: boolean
    customer: AlmaCustomer
    customer_fee: number
    customer_target_fee: number
    is_customer_kyced: boolean
    locale: AlmaLocale
    merchant_id: string
    merchant_name: string | null
    merchant_website: string | null
    orders: Array<AlmaOrder<CODT>>
    // TODO: type correctly
    origin: string | null
    payment_plan: AlmaInstallment[]
    refunds: AlmaRefund[]
    // TODO: TYPE CORRECTY
    requirements: {}
    // TODO: TYPE CORRECTY
    seller: any | null
    sepa_debit_enabled: boolean
    state: AlmaPaymentState
    url: string
    using_sepa_debit: boolean
  }
