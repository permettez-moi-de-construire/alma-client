[@permettezmoideconstruire/alma-client](README.md) › [Globals](globals.md)

# @permettezmoideconstruire/alma-client

## Index

### Enumerations

* [ALMA_HTTP_METHODS](enums/alma_http_methods.md)
* [AlmaCardBrand](enums/almacardbrand.md)
* [AlmaCardFunding](enums/almacardfunding.md)
* [AlmaInstallmentState](enums/almainstallmentstate.md)
* [AlmaLocale](enums/almalocale.md)
* [AlmaPaymentMethod](enums/almapaymentmethod.md)
* [AlmaPaymentState](enums/almapaymentstate.md)

### Interfaces

* [AlmaAddressBaseShape](interfaces/almaaddressbaseshape.md)
* [AlmaBankAccountBaseShape](interfaces/almabankaccountbaseshape.md)
* [AlmaCardBaseShape](interfaces/almacardbaseshape.md)
* [AlmaCustomerBaseShape](interfaces/almacustomerbaseshape.md)
* [AlmaEligibility](interfaces/almaeligibility.md)
* [AlmaEligibilityCheckPayload](interfaces/almaeligibilitycheckpayload.md)
* [AlmaEligibleEligibility](interfaces/almaeligibleeligibility.md)
* [AlmaEntity](interfaces/almaentity.md)
* [AlmaIneligibleEligibility](interfaces/almaineligibleeligibility.md)
* [AlmaInstallment](interfaces/almainstallment.md)
* [AlmaInstallmentBaseShape](interfaces/almainstallmentbaseshape.md)
* [AlmaList](interfaces/almalist.md)
* [AlmaListOptions](interfaces/almalistoptions.md)
* [AlmaMultiEligibilityCheckPayload](interfaces/almamultieligibilitycheckpayload.md)
* [AlmaOrderBaseShape](interfaces/almaorderbaseshape.md)
* [AlmaPaymentBaseShape](interfaces/almapaymentbaseshape.md)
* [AlmaPaymentOrderPayload](interfaces/almapaymentorderpayload.md)
* [AlmaRefundBaseShape](interfaces/almarefundbaseshape.md)
* [AlmaSepaMandateBaseShape](interfaces/almasepamandatebaseshape.md)
* [AlmaSingleEligibilityCheckPayload](interfaces/almasingleeligibilitycheckpayload.md)
* [PaymentEligibilityGetRequest](interfaces/paymenteligibilitygetrequest.md)
* [PaymentsRequestListFilters](interfaces/paymentsrequestlistfilters.md)

### Type aliases

* [AllNullable](globals.md#allnullable)
* [AlmaAddress](globals.md#almaaddress)
* [AlmaAddressPayload](globals.md#almaaddresspayload)
* [AlmaAxiosInstance](globals.md#almaaxiosinstance)
* [AlmaBankAccount](globals.md#almabankaccount)
* [AlmaCard](globals.md#almacard)
* [AlmaCustomer](globals.md#almacustomer)
* [AlmaCustomerPayload](globals.md#almacustomerpayload)
* [AlmaHypotheticalInstallment](globals.md#almahypotheticalinstallment)
* [AlmaOrder](globals.md#almaorder)
* [AlmaOrderPayload](globals.md#almaorderpayload)
* [AlmaPayment](globals.md#almapayment)
* [AlmaPaymentPayload](globals.md#almapaymentpayload)
* [AlmaRefund](globals.md#almarefund)
* [AlmaRefundPayload](globals.md#almarefundpayload)
* [AlmaSepaMandate](globals.md#almasepamandate)
* [Nullable](globals.md#nullable)
* [RequireAtLeastOne](globals.md#requireatleastone)
* [SetNullable](globals.md#setnullable)

### Variables

* [defaultEndpoint](globals.md#const-defaultendpoint)

### Functions

* [createPayment](globals.md#const-createpayment)
* [createRefund](globals.md#const-createrefund)
* [findPayment](globals.md#const-findpayment)
* [getClient](globals.md#const-getclient)
* [getPaymentEligibility](globals.md#const-getpaymenteligibility)
* [listPayments](globals.md#const-listpayments)

## Type aliases

###  AllNullable

Ƭ **AllNullable**: *object*

*Defined in [types/type-helpers.ts:5](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/type-helpers.ts#L5)*

#### Type declaration:

___

###  AlmaAddress

Ƭ **AlmaAddress**: *[AlmaEntity](interfaces/almaentity.md) & Omit‹[SetNullable](globals.md#setnullable)‹[AlmaAddressBaseShape](interfaces/almaaddressbaseshape.md)›, "country"› & Pick‹[AlmaAddressBaseShape](interfaces/almaaddressbaseshape.md), "country"›*

*Defined in [types/address.ts:33](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/address.ts#L33)*

___

###  AlmaAddressPayload

Ƭ **AlmaAddressPayload**: *Partial‹[AlmaAddressBaseShape](interfaces/almaaddressbaseshape.md)›*

*Defined in [types/address.ts:19](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/address.ts#L19)*

___

###  AlmaAxiosInstance

Ƭ **AlmaAxiosInstance**: *AxiosInstance*

*Defined in [lib/index.ts:3](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/lib/index.ts#L3)*

___

###  AlmaBankAccount

Ƭ **AlmaBankAccount**: *[AlmaEntity](interfaces/almaentity.md) & [AlmaBankAccountBaseShape](interfaces/almabankaccountbaseshape.md)*

*Defined in [types/bank-account.ts:23](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/bank-account.ts#L23)*

___

###  AlmaCard

Ƭ **AlmaCard**: *[AlmaEntity](interfaces/almaentity.md) & [AlmaCardBaseShape](interfaces/almacardbaseshape.md)‹PSPT›*

*Defined in [types/card.ts:21](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/card.ts#L21)*

___

###  AlmaCustomer

Ƭ **AlmaCustomer**: *[AlmaEntity](interfaces/almaentity.md) & [SetNullable](globals.md#setnullable)‹[AlmaCustomerBaseShape](interfaces/almacustomerbaseshape.md)› & object*

*Defined in [types/customer.ts:43](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/customer.ts#L43)*

___

###  AlmaCustomerPayload

Ƭ **AlmaCustomerPayload**: *Partial‹[AlmaCustomerBaseShape](interfaces/almacustomerbaseshape.md)› & object*

*Defined in [types/customer.ts:18](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/customer.ts#L18)*

___

###  AlmaHypotheticalInstallment

Ƭ **AlmaHypotheticalInstallment**: *[AlmaInstallmentBaseShape](interfaces/almainstallmentbaseshape.md)*

*Defined in [types/installment.ts:9](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/installment.ts#L9)*

___

###  AlmaOrder

Ƭ **AlmaOrder**: *[AlmaEntity](interfaces/almaentity.md) & [SetNullable](globals.md#setnullable)‹[AlmaOrderBaseShape](interfaces/almaorderbaseshape.md)‹CODT›› & object*

*Defined in [types/order.ts:21](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/order.ts#L21)*

___

###  AlmaOrderPayload

Ƭ **AlmaOrderPayload**: *Partial‹[AlmaOrderBaseShape](interfaces/almaorderbaseshape.md)‹CODT››*

*Defined in [types/order.ts:11](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/order.ts#L11)*

___

###  AlmaPayment

Ƭ **AlmaPayment**: *[AlmaEntity](interfaces/almaentity.md) & [SetNullable](globals.md#setnullable)‹[AlmaPaymentBaseShape](interfaces/almapaymentbaseshape.md)‹CDT›, "customer_cancel_url" | "return_url"› & object*

*Defined in [types/payment.ts:144](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/payment.ts#L144)*

___

###  AlmaPaymentPayload

Ƭ **AlmaPaymentPayload**: *Omit‹Partial‹[AlmaPaymentBaseShape](interfaces/almapaymentbaseshape.md)‹CDT››, "purchase_amount"› & Pick‹[AlmaPaymentBaseShape](interfaces/almapaymentbaseshape.md), "purchase_amount"› & [RequireAtLeastOne](globals.md#requireatleastone)‹object› & object*

*Defined in [types/payment.ts:36](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/payment.ts#L36)*

___

###  AlmaRefund

Ƭ **AlmaRefund**: *[AlmaEntity](interfaces/almaentity.md) & [AlmaRefundBaseShape](interfaces/almarefundbaseshape.md)*

*Defined in [types/refund.ts:15](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/refund.ts#L15)*

___

###  AlmaRefundPayload

Ƭ **AlmaRefundPayload**: *Omit‹Partial‹[AlmaRefundBaseShape](interfaces/almarefundbaseshape.md)›, "payment"›*

*Defined in [types/refund.ts:9](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/refund.ts#L9)*

___

###  AlmaSepaMandate

Ƭ **AlmaSepaMandate**: *[AlmaEntity](interfaces/almaentity.md) & [AlmaSepaMandateBaseShape](interfaces/almasepamandatebaseshape.md)*

*Defined in [types/bank-account.ts:12](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/bank-account.ts#L12)*

___

###  Nullable

Ƭ **Nullable**: *T | null*

*Defined in [types/type-helpers.ts:3](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/type-helpers.ts#L3)*

___

###  RequireAtLeastOne

Ƭ **RequireAtLeastOne**: *Pick‹T, Exclude‹keyof T, Keys›› & object[Keys]*

*Defined in [types/type-helpers.ts:19](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/type-helpers.ts#L19)*

___

###  SetNullable

Ƭ **SetNullable**: *Except<BaseType, Keys> & AllNullable<Pick<BaseType, Keys>> extends infer InferredType ? object : never*

*Defined in [types/type-helpers.ts:9](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/types/type-helpers.ts#L9)*

## Variables

### `Const` defaultEndpoint

• **defaultEndpoint**: *"https://api.getalma.eu"* = "https://api.getalma.eu"

*Defined in [lib/index.ts:11](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/lib/index.ts#L11)*

## Functions

### `Const` createPayment

▸ **createPayment**(`almaAxiosClient`: [AlmaAxiosInstance](globals.md#almaaxiosinstance)): *(Anonymous function)*

*Defined in [lib/payment.ts:14](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/lib/payment.ts#L14)*

**Parameters:**

Name | Type |
------ | ------ |
`almaAxiosClient` | [AlmaAxiosInstance](globals.md#almaaxiosinstance) |

**Returns:** *(Anonymous function)*

___

### `Const` createRefund

▸ **createRefund**(`almaAxiosClient`: [AlmaAxiosInstance](globals.md#almaaxiosinstance)): *(Anonymous function)*

*Defined in [lib/refund.ts:11](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/lib/refund.ts#L11)*

**Parameters:**

Name | Type |
------ | ------ |
`almaAxiosClient` | [AlmaAxiosInstance](globals.md#almaaxiosinstance) |

**Returns:** *(Anonymous function)*

___

### `Const` findPayment

▸ **findPayment**(`almaAxiosClient`: [AlmaAxiosInstance](globals.md#almaaxiosinstance)): *(Anonymous function)*

*Defined in [lib/payment.ts:25](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/lib/payment.ts#L25)*

**Parameters:**

Name | Type |
------ | ------ |
`almaAxiosClient` | [AlmaAxiosInstance](globals.md#almaaxiosinstance) |

**Returns:** *(Anonymous function)*

___

### `Const` getClient

▸ **getClient**(`apiKey`: string, `endpoint`: string): *[AlmaAxiosInstance](globals.md#almaaxiosinstance)*

*Defined in [lib/index.ts:13](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/lib/index.ts#L13)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`apiKey` | string | - |
`endpoint` | string | defaultEndpoint |

**Returns:** *[AlmaAxiosInstance](globals.md#almaaxiosinstance)*

___

### `Const` getPaymentEligibility

▸ **getPaymentEligibility**(`almaAxiosClient`: [AlmaAxiosInstance](globals.md#almaaxiosinstance)): *[PaymentEligibilityGetRequest](interfaces/paymenteligibilitygetrequest.md)*

*Defined in [lib/eligibility.ts:20](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/lib/eligibility.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`almaAxiosClient` | [AlmaAxiosInstance](globals.md#almaaxiosinstance) |

**Returns:** *[PaymentEligibilityGetRequest](interfaces/paymenteligibilitygetrequest.md)*

___

### `Const` listPayments

▸ **listPayments**(`almaAxiosClient`: [AlmaAxiosInstance](globals.md#almaaxiosinstance)): *(Anonymous function)*

*Defined in [lib/payment.ts:40](https://github.com/permettez-moi-de-construire/alma-client/blob/299dafb/src/lib/payment.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`almaAxiosClient` | [AlmaAxiosInstance](globals.md#almaaxiosinstance) |

**Returns:** *(Anonymous function)*
