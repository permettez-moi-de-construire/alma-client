# @permettezmoideconstruire/alma-client

[![build status](https://img.shields.io/travis/permettez-moi-de-construire/alma-client?style=flat-square&logo=travis)](https://travis-ci.org/github/permettez-moi-de-construire/alma-client) [![code style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square&logo=javascript)](https://standardjs.com/) [![libraries status](https://img.shields.io/david/permettez-moi-de-construire/alma-client?style=flat-square&logo=npm)](https://david-dm.org/permettez-moi-de-construire/alma-client)

See [Documentation](https://permettez-moi-de-construire.github.io/alma-client)

## Install

```bash
yarn add @permettezmoideconstruire/alma-client
```

## Usage

```typescript
import type { AxiosResponse } from 'axios'

import {
  getClient,
  createPayment,
  AlmaPaymentOrderPayload,
  AlmaPayment
} from '@permettezmoideconstruire/alma-client'

// This creates and configure
// dedicated Axios instance for Alma
const almaClient = getClient(
  process.env.ALMA_API_KEY,
  process.env.ALMA_API_ENDPOINT
)

// API types helpers for payloads
const paymentOrderPayload: AlmaPaymentOrderPayload = {
  payment: {
    billing_address: {
      country: 'France'
    },
    purchase_amount: 150000
  }
}

// Each call is curryfied : method(almaClient)(data / options)
const result: AxiosResponse<Payment> = await createPayment(almaClient)(paymentOrderCreation)

// API types for returns
const payment: Payment = result.data
```
