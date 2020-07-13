export const eurosToCents = (eurs: number): number => Math.round(eurs * 100)
export const centsToEurs = (cents: number): number => cents / 100

export const almaTimestampToDate = (almaTimestamp: number): Date => new Date(almaTimestamp * 1000)
export const dateToAlmaTimestamp = (date: Date): number => Math.round(date.getTime() / 1000)
