// Original file: ../../proto/idb.proto


export interface DeliveredNotification {
  'bundleId'?: (string);
  'identifier'?: (string);
  'title'?: (string);
  'subtitle'?: (string);
  'body'?: (string);
  'threadIdentifier'?: (string);
  'date'?: (number | string);
  'optionalDate'?: "date";
}

export interface DeliveredNotification__Output {
  'bundleId'?: (string);
  'identifier'?: (string);
  'title'?: (string);
  'subtitle'?: (string);
  'body'?: (string);
  'threadIdentifier'?: (string);
  'date'?: (number);
}
