import Axios, { AxiosInstance, AxiosResponse } from 'axios'

interface AlmaAxiosInstance extends AxiosInstance {}

enum ALMA_HTTP_METHODS {
  PAYMENTS = 'payments',
  ELIGIBILITY = 'eligibility',
  REFUND = 'refunds'
}

const defaultEndpoint = 'https://api.getalma.eu'

const getClient = (
  apiKey: string,
  endpoint: string = defaultEndpoint
): AlmaAxiosInstance => Axios.create({
  baseURL: `${endpoint}/v1`,
  headers: {
    Authorization: `Alma-Auth ${apiKey}`
  }
})

export {
  getClient,
  ALMA_HTTP_METHODS
}

export * from './eligibility'
export * from './payment'
export * from './refund'

export type {
  AlmaAxiosInstance
}
