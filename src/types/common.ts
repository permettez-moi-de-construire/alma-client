export enum AlmaPaymentMethod {
  CARD = 'card',
  BANK_CREDIT = 'bank_debit'
}

export enum AlmaLocale {
  FR = 'fr',
  EN = 'en'
}

export enum AlmaInstallmentState {
  PENDING = 'pending',
  PAID = 'paid',
  COVERED = 'covered'
}

export enum AlmaPaymentState {
  NOT_STARTED = 'not_started',
  SCORED_NO = 'scored_no',
  SCORED_YES = 'scored_yes',
  SCORED_MAYBE = 'scored_maybe',
  PAID = 'paid',
  IN_PROGRESS = 'in_progress'
}

export enum AlmaCardFunding {
  DEBIT = 'debit',
  CREDIT = 'credit',
  UNKNOWN = 'unknown'
}

export enum AlmaCardBrand {
  VISA = 'visa',
  MASTERCARD = 'mastercard',
  AMERICAN_EXPRESS = 'american express'
}

export interface AlmaEntity {
  id: string
  created: number
}

export interface AlmaList<T> {
  data: T[]
  has_more: boolean
}

export interface AlmaListOptions {
  // Default to 20
  limit?: number
  starting_after?: string
}
