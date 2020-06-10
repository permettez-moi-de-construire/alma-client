// TODO: CHECK

import {
  AlmaEntity,
  AlmaCardFunding,
  AlmaCardBrand
} from './common.d'

export interface AlmaCardBaseShape<PSPT extends {} = {}> {
  exp_month: number
  exp_year: number
  last4: string
  country: string
  funding: AlmaCardFunding
  brand: AlmaCardBrand
  three_d_secure_possible: boolean
  verified: boolean
  psp_representations: PSPT
}

export type AlmaCard<PSPT extends {} = {}> =
  AlmaEntity &
  // TODO: Check nullables
  AlmaCardBaseShape<PSPT>
