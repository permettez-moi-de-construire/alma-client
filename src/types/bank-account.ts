// TODO: CHECK

import { AlmaEntity } from './common'

export interface AlmaSepaMandateBaseShape {
  accept_date: number
  accepted: boolean
  account_number: string
  url: string
}

export type AlmaSepaMandate =
  AlmaEntity &
  AlmaSepaMandateBaseShape


  export interface AlmaBankAccountBaseShape {
  account_number: string
  id: string
  mandate: AlmaSepaMandate
  owner_name: string
}

export type AlmaBankAccount =
  AlmaEntity &
  AlmaBankAccountBaseShape
