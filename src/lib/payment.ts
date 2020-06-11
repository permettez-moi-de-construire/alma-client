import {
  AlmaAxiosInstance,
  ALMA_HTTP_METHODS
} from './'

import type {
  AlmaPaymentOrderPayload,
  AlmaList,
  AlmaListOptions,
  AlmaPayment,
  AlmaPaymentState
} from '../types'

const createPayment = (
  almaAxiosClient: AlmaAxiosInstance
) => async <CDT extends {} = {}, CODT extends {} = {}>(
  paymentPayload: AlmaPaymentOrderPayload<CDT, CODT>
) => (
  await almaAxiosClient.post<AlmaPayment<CDT, CODT>>(
    ALMA_HTTP_METHODS.PAYMENTS,
    paymentPayload
  )
)

const findPayment = (
  almaAxiosClient: AlmaAxiosInstance
) => async <CDT extends {} = {}, CODT extends {} = {}>(
  paymentId: string
) => (
  await almaAxiosClient.get<AlmaPayment<CDT, CODT>>(
    `${ALMA_HTTP_METHODS.PAYMENTS}/${paymentId}`
  )
)

interface PaymentsRequestListFilters {
  customer_email?: string
  state?: AlmaPaymentState
}

const listPayments = (
  almaAxiosClient: AlmaAxiosInstance
) => async <CDT extends {} = {}, CODT extends {} = {}>(
  filters: PaymentsRequestListFilters = {},
  options: AlmaListOptions = {}
) => (
  await almaAxiosClient.get<AlmaList<AlmaPayment<CDT, CODT>>>(
    `${ALMA_HTTP_METHODS.PAYMENTS}`,
    {
      params: {
        ...filters,
        ...options
      }
    }
  )
)

export {
  createPayment,
  findPayment,
  listPayments
}

export type {
  PaymentsRequestListFilters
}
