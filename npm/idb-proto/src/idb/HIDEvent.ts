// Original file: ../../proto/idb.proto

import type { Point as _idb_Point, Point__Output as _idb_Point__Output } from '../idb/Point.js';
import type { Long } from '@grpc/proto-loader';

export interface _idb_HIDEvent_HIDButton {
  'button'?: (_idb_HIDEvent_HIDButtonType);
}

export interface _idb_HIDEvent_HIDButton__Output {
  'button'?: (_idb_HIDEvent_HIDButtonType__Output);
}

// Original file: ../../proto/idb.proto

export const _idb_HIDEvent_HIDButtonType = {
  APPLE_PAY: 0,
  HOME: 1,
  LOCK: 2,
  SIDE_BUTTON: 3,
  SIRI: 4,
  PLAY_PAUSE: 5,
  VOLUME_UP: 6,
  VOLUME_DOWN: 7,
  EJECT: 8,
} as const;

export type _idb_HIDEvent_HIDButtonType =
  | 'APPLE_PAY'
  | 0
  | 'HOME'
  | 1
  | 'LOCK'
  | 2
  | 'SIDE_BUTTON'
  | 3
  | 'SIRI'
  | 4
  | 'PLAY_PAUSE'
  | 5
  | 'VOLUME_UP'
  | 6
  | 'VOLUME_DOWN'
  | 7
  | 'EJECT'
  | 8

export type _idb_HIDEvent_HIDButtonType__Output = typeof _idb_HIDEvent_HIDButtonType[keyof typeof _idb_HIDEvent_HIDButtonType]

export interface _idb_HIDEvent_HIDDelay {
  'duration'?: (number | string);
}

export interface _idb_HIDEvent_HIDDelay__Output {
  'duration'?: (number);
}

// Original file: ../../proto/idb.proto

export const _idb_HIDEvent_HIDDirection = {
  DOWN: 0,
  UP: 1,
} as const;

export type _idb_HIDEvent_HIDDirection =
  | 'DOWN'
  | 0
  | 'UP'
  | 1

export type _idb_HIDEvent_HIDDirection__Output = typeof _idb_HIDEvent_HIDDirection[keyof typeof _idb_HIDEvent_HIDDirection]

export interface _idb_HIDEvent_HIDHinge {
  'angle'?: (number | string);
}

export interface _idb_HIDEvent_HIDHinge__Output {
  'angle'?: (number);
}

export interface _idb_HIDEvent_HIDKey {
  'keycode'?: (number | string | Long);
}

export interface _idb_HIDEvent_HIDKey__Output {
  'keycode'?: (Long);
}

export interface _idb_HIDEvent_HIDOrientation {
  'orientation'?: (_idb_HIDEvent_HIDOrientationType);
}

export interface _idb_HIDEvent_HIDOrientation__Output {
  'orientation'?: (_idb_HIDEvent_HIDOrientationType__Output);
}

// Original file: ../../proto/idb.proto

export const _idb_HIDEvent_HIDOrientationType = {
  PORTRAIT: 0,
  PORTRAIT_UPSIDE_DOWN: 1,
  LANDSCAPE_LEFT: 2,
  LANDSCAPE_RIGHT: 3,
} as const;

export type _idb_HIDEvent_HIDOrientationType =
  | 'PORTRAIT'
  | 0
  | 'PORTRAIT_UPSIDE_DOWN'
  | 1
  | 'LANDSCAPE_LEFT'
  | 2
  | 'LANDSCAPE_RIGHT'
  | 3

export type _idb_HIDEvent_HIDOrientationType__Output = typeof _idb_HIDEvent_HIDOrientationType[keyof typeof _idb_HIDEvent_HIDOrientationType]

export interface _idb_HIDEvent_HIDPinch {
  'center'?: (_idb_Point | null);
  'scale'?: (number | string);
  'duration'?: (number | string);
  'radius'?: (number | string);
}

export interface _idb_HIDEvent_HIDPinch__Output {
  'center'?: (_idb_Point__Output);
  'scale'?: (number);
  'duration'?: (number);
  'radius'?: (number);
}

export interface _idb_HIDEvent_HIDPress {
  'action'?: (_idb_HIDEvent_HIDPressAction | null);
  'direction'?: (_idb_HIDEvent_HIDDirection);
}

export interface _idb_HIDEvent_HIDPress__Output {
  'action'?: (_idb_HIDEvent_HIDPressAction__Output);
  'direction'?: (_idb_HIDEvent_HIDDirection__Output);
}

export interface _idb_HIDEvent_HIDPressAction {
  'touch'?: (_idb_HIDEvent_HIDTouch | null);
  'button'?: (_idb_HIDEvent_HIDButton | null);
  'key'?: (_idb_HIDEvent_HIDKey | null);
  'action'?: "touch"|"button"|"key";
}

export interface _idb_HIDEvent_HIDPressAction__Output {
  'touch'?: (_idb_HIDEvent_HIDTouch__Output);
  'button'?: (_idb_HIDEvent_HIDButton__Output);
  'key'?: (_idb_HIDEvent_HIDKey__Output);
}

export interface _idb_HIDEvent_HIDShake {
}

export interface _idb_HIDEvent_HIDShake__Output {
}

export interface _idb_HIDEvent_HIDSwipe {
  'start'?: (_idb_Point | null);
  'end'?: (_idb_Point | null);
  'delta'?: (number | string);
  'duration'?: (number | string);
}

export interface _idb_HIDEvent_HIDSwipe__Output {
  'start'?: (_idb_Point__Output);
  'end'?: (_idb_Point__Output);
  'delta'?: (number);
  'duration'?: (number);
}

export interface _idb_HIDEvent_HIDTouch {
  'point'?: (_idb_Point | null);
}

export interface _idb_HIDEvent_HIDTouch__Output {
  'point'?: (_idb_Point__Output);
}

export interface HIDEvent {
  'press'?: (_idb_HIDEvent_HIDPress | null);
  'swipe'?: (_idb_HIDEvent_HIDSwipe | null);
  'delay'?: (_idb_HIDEvent_HIDDelay | null);
  'pinch'?: (_idb_HIDEvent_HIDPinch | null);
  'orientation'?: (_idb_HIDEvent_HIDOrientation | null);
  'shake'?: (_idb_HIDEvent_HIDShake | null);
  'hinge'?: (_idb_HIDEvent_HIDHinge | null);
  'event'?: "press"|"swipe"|"delay"|"pinch"|"orientation"|"shake"|"hinge";
}

export interface HIDEvent__Output {
  'press'?: (_idb_HIDEvent_HIDPress__Output);
  'swipe'?: (_idb_HIDEvent_HIDSwipe__Output);
  'delay'?: (_idb_HIDEvent_HIDDelay__Output);
  'pinch'?: (_idb_HIDEvent_HIDPinch__Output);
  'orientation'?: (_idb_HIDEvent_HIDOrientation__Output);
  'shake'?: (_idb_HIDEvent_HIDShake__Output);
  'hinge'?: (_idb_HIDEvent_HIDHinge__Output);
}
