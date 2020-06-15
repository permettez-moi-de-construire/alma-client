import { AxiosResponse } from 'axios'

import {
  AlmaAxiosInstance,
  ALMA_HTTP_METHODS
} from './'

import type {
  AlmaEligibility,
  AlmaEligibleEligibility,
  AlmaMultiEligibilityCheckPayload,
  AlmaSingleEligibilityCheckPayload,
  AlmaEligibilityCheckPayload
} from '../types'

interface PaymentEligibilityGetRequest {
  (eligibilityCheckPayload: AlmaMultiEligibilityCheckPayload): Promise<AxiosResponse<AlmaEligibility[]>>
  (eligibilityCheckPayload: AlmaSingleEligibilityCheckPayload): Promise<AxiosResponse<AlmaEligibility>>
}

const getPaymentEligibility = (
  almaAxiosClient: AlmaAxiosInstance
): PaymentEligibilityGetRequest => async (
  eligibilityCheckPayload: AlmaEligibilityCheckPayload
) => (
  await almaAxiosClient.post(
    `${ALMA_HTTP_METHODS.PAYMENTS}/${ALMA_HTTP_METHODS.ELIGIBILITY}`,
    eligibilityCheckPayload
  )
)

const isEligible = (eligibility: AlmaEligibility): eligibility is AlmaEligibleEligibility => (
  eligibility.eligible
)

export {
  getPaymentEligibility,
  isEligible
}

export type {
  PaymentEligibilityGetRequest
}
