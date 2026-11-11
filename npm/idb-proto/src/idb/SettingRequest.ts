// Original file: ../../proto/idb.proto

import type { Setting as _idb_Setting, Setting__Output as _idb_Setting__Output } from '../idb/Setting.js';

export interface _idb_SettingRequest_HardwareKeyboard {
  'enabled'?: (boolean);
}

export interface _idb_SettingRequest_HardwareKeyboard__Output {
  'enabled'?: (boolean);
}

export interface _idb_SettingRequest_StringSetting {
  'setting'?: (_idb_Setting);
  'value'?: (string);
  'name'?: (string);
  'domain'?: (string);
  'valueType'?: (string);
}

export interface _idb_SettingRequest_StringSetting__Output {
  'setting'?: (_idb_Setting__Output);
  'value'?: (string);
  'name'?: (string);
  'domain'?: (string);
  'valueType'?: (string);
}

export interface SettingRequest {
  'hardwareKeyboard'?: (_idb_SettingRequest_HardwareKeyboard | null);
  'stringSetting'?: (_idb_SettingRequest_StringSetting | null);
  'setting'?: "hardwareKeyboard"|"stringSetting";
}

export interface SettingRequest__Output {
  'hardwareKeyboard'?: (_idb_SettingRequest_HardwareKeyboard__Output);
  'stringSetting'?: (_idb_SettingRequest_StringSetting__Output);
}
