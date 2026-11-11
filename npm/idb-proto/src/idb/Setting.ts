// Original file: ../../proto/idb.proto

export const Setting = {
  LOCALE: 0,
  ANY: 1,
} as const;

export type Setting =
  | 'LOCALE'
  | 0
  | 'ANY'
  | 1

export type Setting__Output = typeof Setting[keyof typeof Setting]
