// Original file: ../../proto/idb.proto

export const DisplayRotation = {
  ROT0: 0,
  ROT90: 1,
  ROT180: 2,
  ROT270: 3,
} as const;

export type DisplayRotation =
  | 'ROT0'
  | 0
  | 'ROT90'
  | 1
  | 'ROT180'
  | 2
  | 'ROT270'
  | 3

export type DisplayRotation__Output = typeof DisplayRotation[keyof typeof DisplayRotation]
