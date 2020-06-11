[@permettezmoideconstruire/alma-client](../README.md) › [Globals](../globals.md) › [PaymentEligibilityGetRequest](paymenteligibilitygetrequest.md)

# Interface: PaymentEligibilityGetRequest

## Hierarchy

* **PaymentEligibilityGetRequest**

## Callable

▸ (`eligibilityCheckPayload`: [AlmaMultiEligibilityCheckPayload](almamultieligibilitycheckpayload.md)): *Promise‹AxiosResponse‹[AlmaEligibility](almaeligibility.md)[]››*

*Defined in [lib/eligibility.ts:15](https://github.com/permettez-moi-de-construire/alma-client/blob/23f101f/src/lib/eligibility.ts#L15)*

**Parameters:**

Name | Type |
------ | ------ |
`eligibilityCheckPayload` | [AlmaMultiEligibilityCheckPayload](almamultieligibilitycheckpayload.md) |

**Returns:** *Promise‹AxiosResponse‹[AlmaEligibility](almaeligibility.md)[]››*

▸ (`eligibilityCheckPayload`: [AlmaSingleEligibilityCheckPayload](almasingleeligibilitycheckpayload.md)): *Promise‹AxiosResponse‹[AlmaEligibility](almaeligibility.md)››*

*Defined in [lib/eligibility.ts:16](https://github.com/permettez-moi-de-construire/alma-client/blob/23f101f/src/lib/eligibility.ts#L16)*

**Parameters:**

Name | Type |
------ | ------ |
`eligibilityCheckPayload` | [AlmaSingleEligibilityCheckPayload](almasingleeligibilitycheckpayload.md) |

**Returns:** *Promise‹AxiosResponse‹[AlmaEligibility](almaeligibility.md)››*
