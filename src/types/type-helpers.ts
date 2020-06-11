import { Except } from 'type-fest'

export type Nullable<T> = T | null

export type AllNullable<BaseType> = {
  [KeyType in keyof BaseType]: BaseType[KeyType] | null
}

export type SetNullable<BaseType, Keys extends keyof BaseType = keyof BaseType> =
  // Pick just the keys that are not required from the base type.
  Except<BaseType, Keys> &
  // Pick the keys that should be required from the base type and make them required.
  AllNullable<Pick<BaseType, Keys>> extends
  // If `InferredType` extends the previous, then for each key, use the inferred type key.
  infer InferredType
    ? {[KeyType in keyof InferredType]: InferredType[KeyType]}
    : never

export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> =
  Pick<T, Exclude<keyof T, Keys>>
  & {
    [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
  }[Keys]
