[@permettezmoideconstruire/alma-client](../README.md) › [Globals](../globals.md) › [AlmaIneligibleEligibility](almaineligibleeligibility.md)

# Interface: AlmaIneligibleEligibility

## Hierarchy

* [AlmaEligibility](almaeligibility.md)

  ↳ **AlmaIneligibleEligibility**

## Index

### Properties

* [constraints](almaineligibleeligibility.md#constraints)
* [eligible](almaineligibleeligibility.md#eligible)
* [installments_count](almaineligibleeligibility.md#installments_count)
* [reasons](almaineligibleeligibility.md#reasons)

## Properties

###  constraints

• **constraints**: *object*

*Defined in [types/installment.ts:45](https://github.com/permettez-moi-de-construire/alma-client/blob/23f101f/src/types/installment.ts#L45)*

#### Type declaration:

* **purchase_amount**(): *object*

  * **maximum**: *number*

  * **minimum**: *number*

___

###  eligible

• **eligible**: *false*

*Overrides [AlmaEligibility](almaeligibility.md).[eligible](almaeligibility.md#eligible)*

*Defined in [types/installment.ts:43](https://github.com/permettez-moi-de-construire/alma-client/blob/23f101f/src/types/installment.ts#L43)*

___

###  installments_count

• **installments_count**: *number*

*Inherited from [AlmaEligibility](almaeligibility.md).[installments_count](almaeligibility.md#installments_count)*

*Defined in [types/installment.ts:17](https://github.com/permettez-moi-de-construire/alma-client/blob/23f101f/src/types/installment.ts#L17)*

___

###  reasons

• **reasons**: *Record‹string, string›*

*Defined in [types/installment.ts:44](https://github.com/permettez-moi-de-construire/alma-client/blob/23f101f/src/types/installment.ts#L44)*
