import {
  AlmaAxiosInstance,
  ALMA_HTTP_METHODS
} from './'

import type {
  AlmaRefundPayload,
  AlmaRefund
} from '../types'

const createRefund = (
  almaAxiosClient: AlmaAxiosInstance
) => async (
  paymentId: string,
  refundPayload: AlmaRefundPayload = {}
) => (
  await almaAxiosClient.post<AlmaRefund>(
    `${ALMA_HTTP_METHODS.PAYMENTS}/${paymentId}/${ALMA_HTTP_METHODS.REFUND}`,
    refundPayload
  )
)

export {
  createRefund
}
