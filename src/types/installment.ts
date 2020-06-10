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
  eligible: boolean,
  installments_count: number
}

export interface AlmaEligibilityCheckPayload {
  installments_count?: number | number[]
  purchase_amount: number
}

export interface AlmaSingleEligibilityCheckPayload extends AlmaEligibilityCheckPayload {
  installments_count?: number
  purchase_amount: number
}

export interface AlmaMultiEligibilityCheckPayload extends AlmaEligibilityCheckPayload {
  installments_count: number[]
  purchase_amount: number
}

// TODO: CHECK original_purchase_amount

export interface AlmaEligibleEligibility extends AlmaEligibility {
  eligible: true
  payment_plan: Omit<AlmaInstallment, 'state'>[]
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
