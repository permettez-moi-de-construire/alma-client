[@permettezmoideconstruire/alma-client](../globals.md) › [AlmaAxiosInstance](almaaxiosinstance.md)

# Interface: AlmaAxiosInstance

## Hierarchy

* AxiosInstance

  ↳ **AlmaAxiosInstance**

## Callable

▸ (`config`: AxiosRequestConfig): *AxiosPromise*

Defined in node_modules/axios/index.d.ts:127

**Parameters:**

Name | Type |
------ | ------ |
`config` | AxiosRequestConfig |

**Returns:** *AxiosPromise*

▸ (`url`: string, `config?`: AxiosRequestConfig): *AxiosPromise*

Defined in node_modules/axios/index.d.ts:128

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`config?` | AxiosRequestConfig |

**Returns:** *AxiosPromise*

## Index

### Properties

* [defaults](almaaxiosinstance.md#defaults)
* [interceptors](almaaxiosinstance.md#interceptors)

### Methods

* [delete](almaaxiosinstance.md#delete)
* [get](almaaxiosinstance.md#get)
* [getUri](almaaxiosinstance.md#geturi)
* [head](almaaxiosinstance.md#head)
* [options](almaaxiosinstance.md#options)
* [patch](almaaxiosinstance.md#patch)
* [post](almaaxiosinstance.md#post)
* [put](almaaxiosinstance.md#put)
* [request](almaaxiosinstance.md#request)

## Properties

###  defaults

• **defaults**: *AxiosRequestConfig*

*Inherited from [AlmaAxiosInstance](almaaxiosinstance.md).[defaults](almaaxiosinstance.md#defaults)*

Defined in node_modules/axios/index.d.ts:130

___

###  interceptors

• **interceptors**: *object*

*Inherited from [AlmaAxiosInstance](almaaxiosinstance.md).[interceptors](almaaxiosinstance.md#interceptors)*

Defined in node_modules/axios/index.d.ts:131

#### Type declaration:

* **request**: *AxiosInterceptorManager‹AxiosRequestConfig›*

* **response**: *AxiosInterceptorManager‹AxiosResponse›*

## Methods

###  delete

▸ **delete**‹**T**, **R**›(`url`: string, `config?`: AxiosRequestConfig): *Promise‹R›*

*Inherited from [AlmaAxiosInstance](almaaxiosinstance.md).[delete](almaaxiosinstance.md#delete)*

Defined in node_modules/axios/index.d.ts:138

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`config?` | AxiosRequestConfig |

**Returns:** *Promise‹R›*

___

###  get

▸ **get**‹**T**, **R**›(`url`: string, `config?`: AxiosRequestConfig): *Promise‹R›*

*Inherited from [AlmaAxiosInstance](almaaxiosinstance.md).[get](almaaxiosinstance.md#get)*

Defined in node_modules/axios/index.d.ts:137

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`config?` | AxiosRequestConfig |

**Returns:** *Promise‹R›*

___

###  getUri

▸ **getUri**(`config?`: AxiosRequestConfig): *string*

*Inherited from [AlmaAxiosInstance](almaaxiosinstance.md).[getUri](almaaxiosinstance.md#geturi)*

Defined in node_modules/axios/index.d.ts:135

**Parameters:**

Name | Type |
------ | ------ |
`config?` | AxiosRequestConfig |

**Returns:** *string*

___

###  head

▸ **head**‹**T**, **R**›(`url`: string, `config?`: AxiosRequestConfig): *Promise‹R›*

*Inherited from [AlmaAxiosInstance](almaaxiosinstance.md).[head](almaaxiosinstance.md#head)*

Defined in node_modules/axios/index.d.ts:139

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`config?` | AxiosRequestConfig |

**Returns:** *Promise‹R›*

___

###  options

▸ **options**‹**T**, **R**›(`url`: string, `config?`: AxiosRequestConfig): *Promise‹R›*

*Inherited from [AlmaAxiosInstance](almaaxiosinstance.md).[options](almaaxiosinstance.md#options)*

Defined in node_modules/axios/index.d.ts:140

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`config?` | AxiosRequestConfig |

**Returns:** *Promise‹R›*

___

###  patch

▸ **patch**‹**T**, **R**›(`url`: string, `data?`: any, `config?`: AxiosRequestConfig): *Promise‹R›*

*Inherited from [AlmaAxiosInstance](almaaxiosinstance.md).[patch](almaaxiosinstance.md#patch)*

Defined in node_modules/axios/index.d.ts:143

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`data?` | any |
`config?` | AxiosRequestConfig |

**Returns:** *Promise‹R›*

___

###  post

▸ **post**‹**T**, **R**›(`url`: string, `data?`: any, `config?`: AxiosRequestConfig): *Promise‹R›*

*Inherited from [AlmaAxiosInstance](almaaxiosinstance.md).[post](almaaxiosinstance.md#post)*

Defined in node_modules/axios/index.d.ts:141

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`data?` | any |
`config?` | AxiosRequestConfig |

**Returns:** *Promise‹R›*

___

###  put

▸ **put**‹**T**, **R**›(`url`: string, `data?`: any, `config?`: AxiosRequestConfig): *Promise‹R›*

*Inherited from [AlmaAxiosInstance](almaaxiosinstance.md).[put](almaaxiosinstance.md#put)*

Defined in node_modules/axios/index.d.ts:142

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |
`data?` | any |
`config?` | AxiosRequestConfig |

**Returns:** *Promise‹R›*

___

###  request

▸ **request**‹**T**, **R**›(`config`: AxiosRequestConfig): *Promise‹R›*

*Inherited from [AlmaAxiosInstance](almaaxiosinstance.md).[request](almaaxiosinstance.md#request)*

Defined in node_modules/axios/index.d.ts:136

**Type parameters:**

▪ **T**

▪ **R**

**Parameters:**

Name | Type |
------ | ------ |
`config` | AxiosRequestConfig |

**Returns:** *Promise‹R›*
