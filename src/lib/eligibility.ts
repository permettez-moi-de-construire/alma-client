import { AxiosResponse } from 'axios'

import {
  AlmaAxiosInstance,
  ALMA_HTTP_METHODS
} from './'

import type {
  AlmaEligibility,
  AlmaMultiEligibilityCheckPayload,
  AlmaSingleEligibilityCheckPayload,
  AlmaEligibilityCheckPayload
} from '../types'

type PaymentEligibilityGetRequest = {
  (eligibilityCheckPayload: AlmaMultiEligibilityCheckPayload)
    : Promise<AxiosResponse<AlmaEligibility[]>>
  (eligibilityCheckPayload: AlmaSingleEligibilityCheckPayload)
    : Promise<AxiosResponse<AlmaEligibility>>
}

const getPaymentEligibility = (
  almaAxiosClient: AlmaAxiosInstance
): PaymentEligibilityGetRequest => (
  eligibilityCheckPayload: AlmaEligibilityCheckPayload
) => almaAxiosClient.post(
  `${ALMA_HTTP_METHODS.PAYMENTS}/${ALMA_HTTP_METHODS.ELIGIBILITY}`,
  eligibilityCheckPayload
)

export {
  getPaymentEligibility
}

export type {
  PaymentEligibilityGetRequest
}
