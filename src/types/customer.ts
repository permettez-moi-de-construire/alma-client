import { SetNullable } from './type-helpers'

import { AlmaEntity } from './common'

import { AlmaAddress, AlmaAddressPayload } from './address'
import { AlmaBankAccount } from './bank-account'
import { AlmaCard } from './card'

export interface AlmaCustomerBaseShape {
  first_name: string
  last_name: string
  // addresses: AlmaAddressBaseShape[]
  email: string
  phone: string
  birth_date: string
}

export type AlmaCustomerPayload =
  Partial<AlmaCustomerBaseShape> &
  {
    addresses?: AlmaAddressPayload[] | null
  }

// "addresses": [],
// "bank_accounts": [],
// "banking_data_collected": false,
// "birth_date": null,
// "business_id_number": null,
// "business_name": null,
// "card": null,
// "cards": [],
// "collection_state": null,
// "created": 1591783949,
// "email": null,
// "email_verified": false,
// "first_name": null,
// "id": "customer_11jj1Rx6ZnZluudt2WoWsWE4ws0OR2OxG7",
// "is_business": false,
// "last_name": null,
// "phone": null,
// "phone_verified": false,
// "primary_bank_account": null
export type AlmaCustomer =
  AlmaEntity &
  SetNullable<AlmaCustomerBaseShape> &
  {
    bank_accounts: AlmaBankAccount[],
    banking_data_collected: boolean,
    business_id_number: number | null,
    business_name: string | null,
    card: AlmaCard | null,
    cards: AlmaCard[],
    // TODO: type correctly
    collection_state: any | null,
    email_verified: boolean,
    is_business: boolean,
    phone: string | null,
    phone_verified: boolean,
    primary_bank_account: AlmaBankAccount | null,
    addresses: AlmaAddress[]
  }