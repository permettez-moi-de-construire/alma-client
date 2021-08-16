import { AlmaInstallmentState } from './common'

export interface AlmaInstallmentBaseShape {
  purchase_amount: number
  customer_fee: number
  due_date: number
}

export type AlmaHypotheticalInstallment = AlmaInstallmentBaseShape

export interface AlmaInstallment extends AlmaInstallmentBaseShape {
  state: AlmaInstallmentState
}

export interface AlmaEligibility {
  eligible: boolean
  installments_count: number
  deferred_days: number
}

export interface AlmaEligibilityPaymentPayload {
  installments_count?: number | number[]
  purchase_amount: number
  deferred_days?: number | number[]
}

export interface AlmaSingleEligibilityPaymentPayload extends AlmaEligibilityPaymentPayload {
  installments_count?: number
  purchase_amount: number
  deferred_days?: number
}

export interface AlmaMultiEligibilityPaymentPayload extends AlmaEligibilityPaymentPayload {
  installments_count: number[]
  purchase_amount: number
  deferred_days: number[]
}

export interface AlmaEligibilityCheckPayload {
  payment: AlmaSingleEligibilityPaymentPayload | AlmaMultiEligibilityPaymentPayload
}

export interface AlmaSingleEligibilityCheckPayload extends AlmaEligibilityCheckPayload {
  payment: AlmaSingleEligibilityPaymentPayload
}

export interface AlmaMultiEligibilityCheckPayload extends AlmaEligibilityCheckPayload {
  payment: AlmaMultiEligibilityPaymentPayload
}

// TODO: CHECK original_purchase_amount

export interface AlmaEligibleEligibility extends AlmaEligibility {
  eligible: true
  payment_plan: AlmaHypotheticalInstallment
}

export interface AlmaIneligibleEligibility extends AlmaEligibility {
  eligible: false
  reasons: Record<string, string>
  constraints: {
    purchase_amount: {
      minimum: number
      maximum: number
    }
  }
}
