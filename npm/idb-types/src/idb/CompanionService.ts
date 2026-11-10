// Original file: ../../proto/idb.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { AccessibilityActionRequest as _idb_AccessibilityActionRequest, AccessibilityActionRequest__Output as _idb_AccessibilityActionRequest__Output } from '../idb/AccessibilityActionRequest.js';
import type { AccessibilityActionResponse as _idb_AccessibilityActionResponse, AccessibilityActionResponse__Output as _idb_AccessibilityActionResponse__Output } from '../idb/AccessibilityActionResponse.js';
import type { AccessibilityInfoRequest as _idb_AccessibilityInfoRequest, AccessibilityInfoRequest__Output as _idb_AccessibilityInfoRequest__Output } from '../idb/AccessibilityInfoRequest.js';
import type { AccessibilityInfoResponse as _idb_AccessibilityInfoResponse, AccessibilityInfoResponse__Output as _idb_AccessibilityInfoResponse__Output } from '../idb/AccessibilityInfoResponse.js';
import type { AccessibilityQuiescenceRequest as _idb_AccessibilityQuiescenceRequest, AccessibilityQuiescenceRequest__Output as _idb_AccessibilityQuiescenceRequest__Output } from '../idb/AccessibilityQuiescenceRequest.js';
import type { AccessibilityQuiescenceResponse as _idb_AccessibilityQuiescenceResponse, AccessibilityQuiescenceResponse__Output as _idb_AccessibilityQuiescenceResponse__Output } from '../idb/AccessibilityQuiescenceResponse.js';
import type { AddMediaRequest as _idb_AddMediaRequest, AddMediaRequest__Output as _idb_AddMediaRequest__Output } from '../idb/AddMediaRequest.js';
import type { AddMediaResponse as _idb_AddMediaResponse, AddMediaResponse__Output as _idb_AddMediaResponse__Output } from '../idb/AddMediaResponse.js';
import type { ApproveRequest as _idb_ApproveRequest, ApproveRequest__Output as _idb_ApproveRequest__Output } from '../idb/ApproveRequest.js';
import type { ApproveResponse as _idb_ApproveResponse, ApproveResponse__Output as _idb_ApproveResponse__Output } from '../idb/ApproveResponse.js';
import type { ClearDeliveredNotificationsRequest as _idb_ClearDeliveredNotificationsRequest, ClearDeliveredNotificationsRequest__Output as _idb_ClearDeliveredNotificationsRequest__Output } from '../idb/ClearDeliveredNotificationsRequest.js';
import type { ClearDeliveredNotificationsResponse as _idb_ClearDeliveredNotificationsResponse, ClearDeliveredNotificationsResponse__Output as _idb_ClearDeliveredNotificationsResponse__Output } from '../idb/ClearDeliveredNotificationsResponse.js';
import type { ClearKeychainRequest as _idb_ClearKeychainRequest, ClearKeychainRequest__Output as _idb_ClearKeychainRequest__Output } from '../idb/ClearKeychainRequest.js';
import type { ClearKeychainResponse as _idb_ClearKeychainResponse, ClearKeychainResponse__Output as _idb_ClearKeychainResponse__Output } from '../idb/ClearKeychainResponse.js';
import type { ConnectRequest as _idb_ConnectRequest, ConnectRequest__Output as _idb_ConnectRequest__Output } from '../idb/ConnectRequest.js';
import type { ConnectResponse as _idb_ConnectResponse, ConnectResponse__Output as _idb_ConnectResponse__Output } from '../idb/ConnectResponse.js';
import type { ContactsClearRequest as _idb_ContactsClearRequest, ContactsClearRequest__Output as _idb_ContactsClearRequest__Output } from '../idb/ContactsClearRequest.js';
import type { ContactsClearResponse as _idb_ContactsClearResponse, ContactsClearResponse__Output as _idb_ContactsClearResponse__Output } from '../idb/ContactsClearResponse.js';
import type { ContactsUpdateRequest as _idb_ContactsUpdateRequest, ContactsUpdateRequest__Output as _idb_ContactsUpdateRequest__Output } from '../idb/ContactsUpdateRequest.js';
import type { ContactsUpdateResponse as _idb_ContactsUpdateResponse, ContactsUpdateResponse__Output as _idb_ContactsUpdateResponse__Output } from '../idb/ContactsUpdateResponse.js';
import type { CrashLogQuery as _idb_CrashLogQuery, CrashLogQuery__Output as _idb_CrashLogQuery__Output } from '../idb/CrashLogQuery.js';
import type { CrashLogResponse as _idb_CrashLogResponse, CrashLogResponse__Output as _idb_CrashLogResponse__Output } from '../idb/CrashLogResponse.js';
import type { CrashShowRequest as _idb_CrashShowRequest, CrashShowRequest__Output as _idb_CrashShowRequest__Output } from '../idb/CrashShowRequest.js';
import type { CrashShowResponse as _idb_CrashShowResponse, CrashShowResponse__Output as _idb_CrashShowResponse__Output } from '../idb/CrashShowResponse.js';
import type { DapRequest as _idb_DapRequest, DapRequest__Output as _idb_DapRequest__Output } from '../idb/DapRequest.js';
import type { DapResponse as _idb_DapResponse, DapResponse__Output as _idb_DapResponse__Output } from '../idb/DapResponse.js';
import type { DebugServerRequest as _idb_DebugServerRequest, DebugServerRequest__Output as _idb_DebugServerRequest__Output } from '../idb/DebugServerRequest.js';
import type { DebugServerResponse as _idb_DebugServerResponse, DebugServerResponse__Output as _idb_DebugServerResponse__Output } from '../idb/DebugServerResponse.js';
import type { DeliveredNotificationsRequest as _idb_DeliveredNotificationsRequest, DeliveredNotificationsRequest__Output as _idb_DeliveredNotificationsRequest__Output } from '../idb/DeliveredNotificationsRequest.js';
import type { DeliveredNotificationsResponse as _idb_DeliveredNotificationsResponse, DeliveredNotificationsResponse__Output as _idb_DeliveredNotificationsResponse__Output } from '../idb/DeliveredNotificationsResponse.js';
import type { FocusRequest as _idb_FocusRequest, FocusRequest__Output as _idb_FocusRequest__Output } from '../idb/FocusRequest.js';
import type { FocusResponse as _idb_FocusResponse, FocusResponse__Output as _idb_FocusResponse__Output } from '../idb/FocusResponse.js';
import type { FramebufferStreamRequest as _idb_FramebufferStreamRequest, FramebufferStreamRequest__Output as _idb_FramebufferStreamRequest__Output } from '../idb/FramebufferStreamRequest.js';
import type { FramebufferStreamResponse as _idb_FramebufferStreamResponse, FramebufferStreamResponse__Output as _idb_FramebufferStreamResponse__Output } from '../idb/FramebufferStreamResponse.js';
import type { GetOrientationRequest as _idb_GetOrientationRequest, GetOrientationRequest__Output as _idb_GetOrientationRequest__Output } from '../idb/GetOrientationRequest.js';
import type { GetOrientationResponse as _idb_GetOrientationResponse, GetOrientationResponse__Output as _idb_GetOrientationResponse__Output } from '../idb/GetOrientationResponse.js';
import type { GetSettingRequest as _idb_GetSettingRequest, GetSettingRequest__Output as _idb_GetSettingRequest__Output } from '../idb/GetSettingRequest.js';
import type { GetSettingResponse as _idb_GetSettingResponse, GetSettingResponse__Output as _idb_GetSettingResponse__Output } from '../idb/GetSettingResponse.js';
import type { HIDEvent as _idb_HIDEvent, HIDEvent__Output as _idb_HIDEvent__Output } from '../idb/HIDEvent.js';
import type { HIDResponse as _idb_HIDResponse, HIDResponse__Output as _idb_HIDResponse__Output } from '../idb/HIDResponse.js';
import type { HingeAngleRequest as _idb_HingeAngleRequest, HingeAngleRequest__Output as _idb_HingeAngleRequest__Output } from '../idb/HingeAngleRequest.js';
import type { HingeAngleResponse as _idb_HingeAngleResponse, HingeAngleResponse__Output as _idb_HingeAngleResponse__Output } from '../idb/HingeAngleResponse.js';
import type { InjectAudioRequest as _idb_InjectAudioRequest, InjectAudioRequest__Output as _idb_InjectAudioRequest__Output } from '../idb/InjectAudioRequest.js';
import type { InjectAudioResponse as _idb_InjectAudioResponse, InjectAudioResponse__Output as _idb_InjectAudioResponse__Output } from '../idb/InjectAudioResponse.js';
import type { InstallRequest as _idb_InstallRequest, InstallRequest__Output as _idb_InstallRequest__Output } from '../idb/InstallRequest.js';
import type { InstallResponse as _idb_InstallResponse, InstallResponse__Output as _idb_InstallResponse__Output } from '../idb/InstallResponse.js';
import type { InstrumentsRunRequest as _idb_InstrumentsRunRequest, InstrumentsRunRequest__Output as _idb_InstrumentsRunRequest__Output } from '../idb/InstrumentsRunRequest.js';
import type { InstrumentsRunResponse as _idb_InstrumentsRunResponse, InstrumentsRunResponse__Output as _idb_InstrumentsRunResponse__Output } from '../idb/InstrumentsRunResponse.js';
import type { LaunchRequest as _idb_LaunchRequest, LaunchRequest__Output as _idb_LaunchRequest__Output } from '../idb/LaunchRequest.js';
import type { LaunchResponse as _idb_LaunchResponse, LaunchResponse__Output as _idb_LaunchResponse__Output } from '../idb/LaunchResponse.js';
import type { ListAppsRequest as _idb_ListAppsRequest, ListAppsRequest__Output as _idb_ListAppsRequest__Output } from '../idb/ListAppsRequest.js';
import type { ListAppsResponse as _idb_ListAppsResponse, ListAppsResponse__Output as _idb_ListAppsResponse__Output } from '../idb/ListAppsResponse.js';
import type { ListSettingRequest as _idb_ListSettingRequest, ListSettingRequest__Output as _idb_ListSettingRequest__Output } from '../idb/ListSettingRequest.js';
import type { ListSettingResponse as _idb_ListSettingResponse, ListSettingResponse__Output as _idb_ListSettingResponse__Output } from '../idb/ListSettingResponse.js';
import type { LogRequest as _idb_LogRequest, LogRequest__Output as _idb_LogRequest__Output } from '../idb/LogRequest.js';
import type { LogResponse as _idb_LogResponse, LogResponse__Output as _idb_LogResponse__Output } from '../idb/LogResponse.js';
import type { LsRequest as _idb_LsRequest, LsRequest__Output as _idb_LsRequest__Output } from '../idb/LsRequest.js';
import type { LsResponse as _idb_LsResponse, LsResponse__Output as _idb_LsResponse__Output } from '../idb/LsResponse.js';
import type { MkdirRequest as _idb_MkdirRequest, MkdirRequest__Output as _idb_MkdirRequest__Output } from '../idb/MkdirRequest.js';
import type { MkdirResponse as _idb_MkdirResponse, MkdirResponse__Output as _idb_MkdirResponse__Output } from '../idb/MkdirResponse.js';
import type { MvRequest as _idb_MvRequest, MvRequest__Output as _idb_MvRequest__Output } from '../idb/MvRequest.js';
import type { MvResponse as _idb_MvResponse, MvResponse__Output as _idb_MvResponse__Output } from '../idb/MvResponse.js';
import type { OpenUrlRequest as _idb_OpenUrlRequest, OpenUrlRequest__Output as _idb_OpenUrlRequest__Output } from '../idb/OpenUrlRequest.js';
import type { PhotosClearRequest as _idb_PhotosClearRequest, PhotosClearRequest__Output as _idb_PhotosClearRequest__Output } from '../idb/PhotosClearRequest.js';
import type { PhotosClearResponse as _idb_PhotosClearResponse, PhotosClearResponse__Output as _idb_PhotosClearResponse__Output } from '../idb/PhotosClearResponse.js';
import type { PullRequest as _idb_PullRequest, PullRequest__Output as _idb_PullRequest__Output } from '../idb/PullRequest.js';
import type { PullResponse as _idb_PullResponse, PullResponse__Output as _idb_PullResponse__Output } from '../idb/PullResponse.js';
import type { PushRequest as _idb_PushRequest, PushRequest__Output as _idb_PushRequest__Output } from '../idb/PushRequest.js';
import type { PushResponse as _idb_PushResponse, PushResponse__Output as _idb_PushResponse__Output } from '../idb/PushResponse.js';
import type { RecordRequest as _idb_RecordRequest, RecordRequest__Output as _idb_RecordRequest__Output } from '../idb/RecordRequest.js';
import type { RecordResponse as _idb_RecordResponse, RecordResponse__Output as _idb_RecordResponse__Output } from '../idb/RecordResponse.js';
import type { ReplRequest as _idb_ReplRequest, ReplRequest__Output as _idb_ReplRequest__Output } from '../idb/ReplRequest.js';
import type { ReplResponse as _idb_ReplResponse, ReplResponse__Output as _idb_ReplResponse__Output } from '../idb/ReplResponse.js';
import type { RevokeRequest as _idb_RevokeRequest, RevokeRequest__Output as _idb_RevokeRequest__Output } from '../idb/RevokeRequest.js';
import type { RevokeResponse as _idb_RevokeResponse, RevokeResponse__Output as _idb_RevokeResponse__Output } from '../idb/RevokeResponse.js';
import type { RmRequest as _idb_RmRequest, RmRequest__Output as _idb_RmRequest__Output } from '../idb/RmRequest.js';
import type { RmResponse as _idb_RmResponse, RmResponse__Output as _idb_RmResponse__Output } from '../idb/RmResponse.js';
import type { ScreenshotRequest as _idb_ScreenshotRequest, ScreenshotRequest__Output as _idb_ScreenshotRequest__Output } from '../idb/ScreenshotRequest.js';
import type { ScreenshotResponse as _idb_ScreenshotResponse, ScreenshotResponse__Output as _idb_ScreenshotResponse__Output } from '../idb/ScreenshotResponse.js';
import type { SendNotificationRequest as _idb_SendNotificationRequest, SendNotificationRequest__Output as _idb_SendNotificationRequest__Output } from '../idb/SendNotificationRequest.js';
import type { SendNotificationResponse as _idb_SendNotificationResponse, SendNotificationResponse__Output as _idb_SendNotificationResponse__Output } from '../idb/SendNotificationResponse.js';
import type { SetLocationRequest as _idb_SetLocationRequest, SetLocationRequest__Output as _idb_SetLocationRequest__Output } from '../idb/SetLocationRequest.js';
import type { SetLocationResponse as _idb_SetLocationResponse, SetLocationResponse__Output as _idb_SetLocationResponse__Output } from '../idb/SetLocationResponse.js';
import type { SetOrientationRequest as _idb_SetOrientationRequest, SetOrientationRequest__Output as _idb_SetOrientationRequest__Output } from '../idb/SetOrientationRequest.js';
import type { SetOrientationResponse as _idb_SetOrientationResponse, SetOrientationResponse__Output as _idb_SetOrientationResponse__Output } from '../idb/SetOrientationResponse.js';
import type { SettingRequest as _idb_SettingRequest, SettingRequest__Output as _idb_SettingRequest__Output } from '../idb/SettingRequest.js';
import type { SettingResponse as _idb_SettingResponse, SettingResponse__Output as _idb_SettingResponse__Output } from '../idb/SettingResponse.js';
import type { SimulateMemoryWarningRequest as _idb_SimulateMemoryWarningRequest, SimulateMemoryWarningRequest__Output as _idb_SimulateMemoryWarningRequest__Output } from '../idb/SimulateMemoryWarningRequest.js';
import type { SimulateMemoryWarningResponse as _idb_SimulateMemoryWarningResponse, SimulateMemoryWarningResponse__Output as _idb_SimulateMemoryWarningResponse__Output } from '../idb/SimulateMemoryWarningResponse.js';
import type { TailRequest as _idb_TailRequest, TailRequest__Output as _idb_TailRequest__Output } from '../idb/TailRequest.js';
import type { TailResponse as _idb_TailResponse, TailResponse__Output as _idb_TailResponse__Output } from '../idb/TailResponse.js';
import type { TargetDescriptionRequest as _idb_TargetDescriptionRequest, TargetDescriptionRequest__Output as _idb_TargetDescriptionRequest__Output } from '../idb/TargetDescriptionRequest.js';
import type { TargetDescriptionResponse as _idb_TargetDescriptionResponse, TargetDescriptionResponse__Output as _idb_TargetDescriptionResponse__Output } from '../idb/TargetDescriptionResponse.js';
import type { TerminateRequest as _idb_TerminateRequest, TerminateRequest__Output as _idb_TerminateRequest__Output } from '../idb/TerminateRequest.js';
import type { TerminateResponse as _idb_TerminateResponse, TerminateResponse__Output as _idb_TerminateResponse__Output } from '../idb/TerminateResponse.js';
import type { UninstallRequest as _idb_UninstallRequest, UninstallRequest__Output as _idb_UninstallRequest__Output } from '../idb/UninstallRequest.js';
import type { UninstallResponse as _idb_UninstallResponse, UninstallResponse__Output as _idb_UninstallResponse__Output } from '../idb/UninstallResponse.js';
import type { VideoStreamRequest as _idb_VideoStreamRequest, VideoStreamRequest__Output as _idb_VideoStreamRequest__Output } from '../idb/VideoStreamRequest.js';
import type { VideoStreamResponse as _idb_VideoStreamResponse, VideoStreamResponse__Output as _idb_VideoStreamResponse__Output } from '../idb/VideoStreamResponse.js';
import type { XctestListBundlesRequest as _idb_XctestListBundlesRequest, XctestListBundlesRequest__Output as _idb_XctestListBundlesRequest__Output } from '../idb/XctestListBundlesRequest.js';
import type { XctestListBundlesResponse as _idb_XctestListBundlesResponse, XctestListBundlesResponse__Output as _idb_XctestListBundlesResponse__Output } from '../idb/XctestListBundlesResponse.js';
import type { XctestListTestsRequest as _idb_XctestListTestsRequest, XctestListTestsRequest__Output as _idb_XctestListTestsRequest__Output } from '../idb/XctestListTestsRequest.js';
import type { XctestListTestsResponse as _idb_XctestListTestsResponse, XctestListTestsResponse__Output as _idb_XctestListTestsResponse__Output } from '../idb/XctestListTestsResponse.js';
import type { XctestRunRequest as _idb_XctestRunRequest, XctestRunRequest__Output as _idb_XctestRunRequest__Output } from '../idb/XctestRunRequest.js';
import type { XctestRunResponse as _idb_XctestRunResponse, XctestRunResponse__Output as _idb_XctestRunResponse__Output } from '../idb/XctestRunResponse.js';
import type { XctraceRecordRequest as _idb_XctraceRecordRequest, XctraceRecordRequest__Output as _idb_XctraceRecordRequest__Output } from '../idb/XctraceRecordRequest.js';
import type { XctraceRecordResponse as _idb_XctraceRecordResponse, XctraceRecordResponse__Output as _idb_XctraceRecordResponse__Output } from '../idb/XctraceRecordResponse.js';

export interface CompanionServiceClient extends grpc.Client {
  accessibility_action(argument: _idb_AccessibilityActionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_AccessibilityActionResponse__Output>): grpc.ClientUnaryCall;
  accessibility_action(argument: _idb_AccessibilityActionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_AccessibilityActionResponse__Output>): grpc.ClientUnaryCall;
  accessibility_action(argument: _idb_AccessibilityActionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_AccessibilityActionResponse__Output>): grpc.ClientUnaryCall;
  accessibility_action(argument: _idb_AccessibilityActionRequest, callback: grpc.requestCallback<_idb_AccessibilityActionResponse__Output>): grpc.ClientUnaryCall;
  accessibilityAction(argument: _idb_AccessibilityActionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_AccessibilityActionResponse__Output>): grpc.ClientUnaryCall;
  accessibilityAction(argument: _idb_AccessibilityActionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_AccessibilityActionResponse__Output>): grpc.ClientUnaryCall;
  accessibilityAction(argument: _idb_AccessibilityActionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_AccessibilityActionResponse__Output>): grpc.ClientUnaryCall;
  accessibilityAction(argument: _idb_AccessibilityActionRequest, callback: grpc.requestCallback<_idb_AccessibilityActionResponse__Output>): grpc.ClientUnaryCall;
  
  accessibility_info(argument: _idb_AccessibilityInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_AccessibilityInfoResponse__Output>): grpc.ClientUnaryCall;
  accessibility_info(argument: _idb_AccessibilityInfoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_AccessibilityInfoResponse__Output>): grpc.ClientUnaryCall;
  accessibility_info(argument: _idb_AccessibilityInfoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_AccessibilityInfoResponse__Output>): grpc.ClientUnaryCall;
  accessibility_info(argument: _idb_AccessibilityInfoRequest, callback: grpc.requestCallback<_idb_AccessibilityInfoResponse__Output>): grpc.ClientUnaryCall;
  accessibilityInfo(argument: _idb_AccessibilityInfoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_AccessibilityInfoResponse__Output>): grpc.ClientUnaryCall;
  accessibilityInfo(argument: _idb_AccessibilityInfoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_AccessibilityInfoResponse__Output>): grpc.ClientUnaryCall;
  accessibilityInfo(argument: _idb_AccessibilityInfoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_AccessibilityInfoResponse__Output>): grpc.ClientUnaryCall;
  accessibilityInfo(argument: _idb_AccessibilityInfoRequest, callback: grpc.requestCallback<_idb_AccessibilityInfoResponse__Output>): grpc.ClientUnaryCall;
  
  accessibility_quiescence(argument: _idb_AccessibilityQuiescenceRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_idb_AccessibilityQuiescenceResponse__Output>;
  accessibility_quiescence(argument: _idb_AccessibilityQuiescenceRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_idb_AccessibilityQuiescenceResponse__Output>;
  accessibilityQuiescence(argument: _idb_AccessibilityQuiescenceRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_idb_AccessibilityQuiescenceResponse__Output>;
  accessibilityQuiescence(argument: _idb_AccessibilityQuiescenceRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_idb_AccessibilityQuiescenceResponse__Output>;
  
  add_media(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_AddMediaResponse__Output>): grpc.ClientWritableStream<_idb_AddMediaRequest>;
  add_media(metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_AddMediaResponse__Output>): grpc.ClientWritableStream<_idb_AddMediaRequest>;
  add_media(options: grpc.CallOptions, callback: grpc.requestCallback<_idb_AddMediaResponse__Output>): grpc.ClientWritableStream<_idb_AddMediaRequest>;
  add_media(callback: grpc.requestCallback<_idb_AddMediaResponse__Output>): grpc.ClientWritableStream<_idb_AddMediaRequest>;
  addMedia(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_AddMediaResponse__Output>): grpc.ClientWritableStream<_idb_AddMediaRequest>;
  addMedia(metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_AddMediaResponse__Output>): grpc.ClientWritableStream<_idb_AddMediaRequest>;
  addMedia(options: grpc.CallOptions, callback: grpc.requestCallback<_idb_AddMediaResponse__Output>): grpc.ClientWritableStream<_idb_AddMediaRequest>;
  addMedia(callback: grpc.requestCallback<_idb_AddMediaResponse__Output>): grpc.ClientWritableStream<_idb_AddMediaRequest>;
  
  approve(argument: _idb_ApproveRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ApproveResponse__Output>): grpc.ClientUnaryCall;
  approve(argument: _idb_ApproveRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_ApproveResponse__Output>): grpc.ClientUnaryCall;
  approve(argument: _idb_ApproveRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ApproveResponse__Output>): grpc.ClientUnaryCall;
  approve(argument: _idb_ApproveRequest, callback: grpc.requestCallback<_idb_ApproveResponse__Output>): grpc.ClientUnaryCall;
  
  clear_delivered_notifications(argument: _idb_ClearDeliveredNotificationsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ClearDeliveredNotificationsResponse__Output>): grpc.ClientUnaryCall;
  clear_delivered_notifications(argument: _idb_ClearDeliveredNotificationsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_ClearDeliveredNotificationsResponse__Output>): grpc.ClientUnaryCall;
  clear_delivered_notifications(argument: _idb_ClearDeliveredNotificationsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ClearDeliveredNotificationsResponse__Output>): grpc.ClientUnaryCall;
  clear_delivered_notifications(argument: _idb_ClearDeliveredNotificationsRequest, callback: grpc.requestCallback<_idb_ClearDeliveredNotificationsResponse__Output>): grpc.ClientUnaryCall;
  clearDeliveredNotifications(argument: _idb_ClearDeliveredNotificationsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ClearDeliveredNotificationsResponse__Output>): grpc.ClientUnaryCall;
  clearDeliveredNotifications(argument: _idb_ClearDeliveredNotificationsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_ClearDeliveredNotificationsResponse__Output>): grpc.ClientUnaryCall;
  clearDeliveredNotifications(argument: _idb_ClearDeliveredNotificationsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ClearDeliveredNotificationsResponse__Output>): grpc.ClientUnaryCall;
  clearDeliveredNotifications(argument: _idb_ClearDeliveredNotificationsRequest, callback: grpc.requestCallback<_idb_ClearDeliveredNotificationsResponse__Output>): grpc.ClientUnaryCall;
  
  clear_keychain(argument: _idb_ClearKeychainRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ClearKeychainResponse__Output>): grpc.ClientUnaryCall;
  clear_keychain(argument: _idb_ClearKeychainRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_ClearKeychainResponse__Output>): grpc.ClientUnaryCall;
  clear_keychain(argument: _idb_ClearKeychainRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ClearKeychainResponse__Output>): grpc.ClientUnaryCall;
  clear_keychain(argument: _idb_ClearKeychainRequest, callback: grpc.requestCallback<_idb_ClearKeychainResponse__Output>): grpc.ClientUnaryCall;
  clearKeychain(argument: _idb_ClearKeychainRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ClearKeychainResponse__Output>): grpc.ClientUnaryCall;
  clearKeychain(argument: _idb_ClearKeychainRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_ClearKeychainResponse__Output>): grpc.ClientUnaryCall;
  clearKeychain(argument: _idb_ClearKeychainRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ClearKeychainResponse__Output>): grpc.ClientUnaryCall;
  clearKeychain(argument: _idb_ClearKeychainRequest, callback: grpc.requestCallback<_idb_ClearKeychainResponse__Output>): grpc.ClientUnaryCall;
  
  connect(argument: _idb_ConnectRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ConnectResponse__Output>): grpc.ClientUnaryCall;
  connect(argument: _idb_ConnectRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_ConnectResponse__Output>): grpc.ClientUnaryCall;
  connect(argument: _idb_ConnectRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ConnectResponse__Output>): grpc.ClientUnaryCall;
  connect(argument: _idb_ConnectRequest, callback: grpc.requestCallback<_idb_ConnectResponse__Output>): grpc.ClientUnaryCall;
  
  contacts_clear(argument: _idb_ContactsClearRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ContactsClearResponse__Output>): grpc.ClientUnaryCall;
  contacts_clear(argument: _idb_ContactsClearRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_ContactsClearResponse__Output>): grpc.ClientUnaryCall;
  contacts_clear(argument: _idb_ContactsClearRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ContactsClearResponse__Output>): grpc.ClientUnaryCall;
  contacts_clear(argument: _idb_ContactsClearRequest, callback: grpc.requestCallback<_idb_ContactsClearResponse__Output>): grpc.ClientUnaryCall;
  contactsClear(argument: _idb_ContactsClearRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ContactsClearResponse__Output>): grpc.ClientUnaryCall;
  contactsClear(argument: _idb_ContactsClearRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_ContactsClearResponse__Output>): grpc.ClientUnaryCall;
  contactsClear(argument: _idb_ContactsClearRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ContactsClearResponse__Output>): grpc.ClientUnaryCall;
  contactsClear(argument: _idb_ContactsClearRequest, callback: grpc.requestCallback<_idb_ContactsClearResponse__Output>): grpc.ClientUnaryCall;
  
  contacts_update(argument: _idb_ContactsUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ContactsUpdateResponse__Output>): grpc.ClientUnaryCall;
  contacts_update(argument: _idb_ContactsUpdateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_ContactsUpdateResponse__Output>): grpc.ClientUnaryCall;
  contacts_update(argument: _idb_ContactsUpdateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ContactsUpdateResponse__Output>): grpc.ClientUnaryCall;
  contacts_update(argument: _idb_ContactsUpdateRequest, callback: grpc.requestCallback<_idb_ContactsUpdateResponse__Output>): grpc.ClientUnaryCall;
  contactsUpdate(argument: _idb_ContactsUpdateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ContactsUpdateResponse__Output>): grpc.ClientUnaryCall;
  contactsUpdate(argument: _idb_ContactsUpdateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_ContactsUpdateResponse__Output>): grpc.ClientUnaryCall;
  contactsUpdate(argument: _idb_ContactsUpdateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ContactsUpdateResponse__Output>): grpc.ClientUnaryCall;
  contactsUpdate(argument: _idb_ContactsUpdateRequest, callback: grpc.requestCallback<_idb_ContactsUpdateResponse__Output>): grpc.ClientUnaryCall;
  
  crash_delete(argument: _idb_CrashLogQuery, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_CrashLogResponse__Output>): grpc.ClientUnaryCall;
  crash_delete(argument: _idb_CrashLogQuery, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_CrashLogResponse__Output>): grpc.ClientUnaryCall;
  crash_delete(argument: _idb_CrashLogQuery, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_CrashLogResponse__Output>): grpc.ClientUnaryCall;
  crash_delete(argument: _idb_CrashLogQuery, callback: grpc.requestCallback<_idb_CrashLogResponse__Output>): grpc.ClientUnaryCall;
  crashDelete(argument: _idb_CrashLogQuery, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_CrashLogResponse__Output>): grpc.ClientUnaryCall;
  crashDelete(argument: _idb_CrashLogQuery, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_CrashLogResponse__Output>): grpc.ClientUnaryCall;
  crashDelete(argument: _idb_CrashLogQuery, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_CrashLogResponse__Output>): grpc.ClientUnaryCall;
  crashDelete(argument: _idb_CrashLogQuery, callback: grpc.requestCallback<_idb_CrashLogResponse__Output>): grpc.ClientUnaryCall;
  
  crash_list(argument: _idb_CrashLogQuery, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_CrashLogResponse__Output>): grpc.ClientUnaryCall;
  crash_list(argument: _idb_CrashLogQuery, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_CrashLogResponse__Output>): grpc.ClientUnaryCall;
  crash_list(argument: _idb_CrashLogQuery, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_CrashLogResponse__Output>): grpc.ClientUnaryCall;
  crash_list(argument: _idb_CrashLogQuery, callback: grpc.requestCallback<_idb_CrashLogResponse__Output>): grpc.ClientUnaryCall;
  crashList(argument: _idb_CrashLogQuery, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_CrashLogResponse__Output>): grpc.ClientUnaryCall;
  crashList(argument: _idb_CrashLogQuery, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_CrashLogResponse__Output>): grpc.ClientUnaryCall;
  crashList(argument: _idb_CrashLogQuery, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_CrashLogResponse__Output>): grpc.ClientUnaryCall;
  crashList(argument: _idb_CrashLogQuery, callback: grpc.requestCallback<_idb_CrashLogResponse__Output>): grpc.ClientUnaryCall;
  
  crash_show(argument: _idb_CrashShowRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_CrashShowResponse__Output>): grpc.ClientUnaryCall;
  crash_show(argument: _idb_CrashShowRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_CrashShowResponse__Output>): grpc.ClientUnaryCall;
  crash_show(argument: _idb_CrashShowRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_CrashShowResponse__Output>): grpc.ClientUnaryCall;
  crash_show(argument: _idb_CrashShowRequest, callback: grpc.requestCallback<_idb_CrashShowResponse__Output>): grpc.ClientUnaryCall;
  crashShow(argument: _idb_CrashShowRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_CrashShowResponse__Output>): grpc.ClientUnaryCall;
  crashShow(argument: _idb_CrashShowRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_CrashShowResponse__Output>): grpc.ClientUnaryCall;
  crashShow(argument: _idb_CrashShowRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_CrashShowResponse__Output>): grpc.ClientUnaryCall;
  crashShow(argument: _idb_CrashShowRequest, callback: grpc.requestCallback<_idb_CrashShowResponse__Output>): grpc.ClientUnaryCall;
  
  dap(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_DapRequest, _idb_DapResponse__Output>;
  dap(options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_DapRequest, _idb_DapResponse__Output>;
  
  debugserver(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_DebugServerRequest, _idb_DebugServerResponse__Output>;
  debugserver(options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_DebugServerRequest, _idb_DebugServerResponse__Output>;
  
  delivered_notifications(argument: _idb_DeliveredNotificationsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_DeliveredNotificationsResponse__Output>): grpc.ClientUnaryCall;
  delivered_notifications(argument: _idb_DeliveredNotificationsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_DeliveredNotificationsResponse__Output>): grpc.ClientUnaryCall;
  delivered_notifications(argument: _idb_DeliveredNotificationsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_DeliveredNotificationsResponse__Output>): grpc.ClientUnaryCall;
  delivered_notifications(argument: _idb_DeliveredNotificationsRequest, callback: grpc.requestCallback<_idb_DeliveredNotificationsResponse__Output>): grpc.ClientUnaryCall;
  deliveredNotifications(argument: _idb_DeliveredNotificationsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_DeliveredNotificationsResponse__Output>): grpc.ClientUnaryCall;
  deliveredNotifications(argument: _idb_DeliveredNotificationsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_DeliveredNotificationsResponse__Output>): grpc.ClientUnaryCall;
  deliveredNotifications(argument: _idb_DeliveredNotificationsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_DeliveredNotificationsResponse__Output>): grpc.ClientUnaryCall;
  deliveredNotifications(argument: _idb_DeliveredNotificationsRequest, callback: grpc.requestCallback<_idb_DeliveredNotificationsResponse__Output>): grpc.ClientUnaryCall;
  
  describe(argument: _idb_TargetDescriptionRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_TargetDescriptionResponse__Output>): grpc.ClientUnaryCall;
  describe(argument: _idb_TargetDescriptionRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_TargetDescriptionResponse__Output>): grpc.ClientUnaryCall;
  describe(argument: _idb_TargetDescriptionRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_TargetDescriptionResponse__Output>): grpc.ClientUnaryCall;
  describe(argument: _idb_TargetDescriptionRequest, callback: grpc.requestCallback<_idb_TargetDescriptionResponse__Output>): grpc.ClientUnaryCall;
  
  focus(argument: _idb_FocusRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_FocusResponse__Output>): grpc.ClientUnaryCall;
  focus(argument: _idb_FocusRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_FocusResponse__Output>): grpc.ClientUnaryCall;
  focus(argument: _idb_FocusRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_FocusResponse__Output>): grpc.ClientUnaryCall;
  focus(argument: _idb_FocusRequest, callback: grpc.requestCallback<_idb_FocusResponse__Output>): grpc.ClientUnaryCall;
  
  framebuffer_stream(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_FramebufferStreamRequest, _idb_FramebufferStreamResponse__Output>;
  framebuffer_stream(options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_FramebufferStreamRequest, _idb_FramebufferStreamResponse__Output>;
  framebufferStream(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_FramebufferStreamRequest, _idb_FramebufferStreamResponse__Output>;
  framebufferStream(options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_FramebufferStreamRequest, _idb_FramebufferStreamResponse__Output>;
  
  get_orientation(argument: _idb_GetOrientationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_GetOrientationResponse__Output>): grpc.ClientUnaryCall;
  get_orientation(argument: _idb_GetOrientationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_GetOrientationResponse__Output>): grpc.ClientUnaryCall;
  get_orientation(argument: _idb_GetOrientationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_GetOrientationResponse__Output>): grpc.ClientUnaryCall;
  get_orientation(argument: _idb_GetOrientationRequest, callback: grpc.requestCallback<_idb_GetOrientationResponse__Output>): grpc.ClientUnaryCall;
  getOrientation(argument: _idb_GetOrientationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_GetOrientationResponse__Output>): grpc.ClientUnaryCall;
  getOrientation(argument: _idb_GetOrientationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_GetOrientationResponse__Output>): grpc.ClientUnaryCall;
  getOrientation(argument: _idb_GetOrientationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_GetOrientationResponse__Output>): grpc.ClientUnaryCall;
  getOrientation(argument: _idb_GetOrientationRequest, callback: grpc.requestCallback<_idb_GetOrientationResponse__Output>): grpc.ClientUnaryCall;
  
  get_setting(argument: _idb_GetSettingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_GetSettingResponse__Output>): grpc.ClientUnaryCall;
  get_setting(argument: _idb_GetSettingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_GetSettingResponse__Output>): grpc.ClientUnaryCall;
  get_setting(argument: _idb_GetSettingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_GetSettingResponse__Output>): grpc.ClientUnaryCall;
  get_setting(argument: _idb_GetSettingRequest, callback: grpc.requestCallback<_idb_GetSettingResponse__Output>): grpc.ClientUnaryCall;
  getSetting(argument: _idb_GetSettingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_GetSettingResponse__Output>): grpc.ClientUnaryCall;
  getSetting(argument: _idb_GetSettingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_GetSettingResponse__Output>): grpc.ClientUnaryCall;
  getSetting(argument: _idb_GetSettingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_GetSettingResponse__Output>): grpc.ClientUnaryCall;
  getSetting(argument: _idb_GetSettingRequest, callback: grpc.requestCallback<_idb_GetSettingResponse__Output>): grpc.ClientUnaryCall;
  
  hid(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_HIDResponse__Output>): grpc.ClientWritableStream<_idb_HIDEvent>;
  hid(metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_HIDResponse__Output>): grpc.ClientWritableStream<_idb_HIDEvent>;
  hid(options: grpc.CallOptions, callback: grpc.requestCallback<_idb_HIDResponse__Output>): grpc.ClientWritableStream<_idb_HIDEvent>;
  hid(callback: grpc.requestCallback<_idb_HIDResponse__Output>): grpc.ClientWritableStream<_idb_HIDEvent>;
  
  hinge_angle(argument: _idb_HingeAngleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_HingeAngleResponse__Output>): grpc.ClientUnaryCall;
  hinge_angle(argument: _idb_HingeAngleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_HingeAngleResponse__Output>): grpc.ClientUnaryCall;
  hinge_angle(argument: _idb_HingeAngleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_HingeAngleResponse__Output>): grpc.ClientUnaryCall;
  hinge_angle(argument: _idb_HingeAngleRequest, callback: grpc.requestCallback<_idb_HingeAngleResponse__Output>): grpc.ClientUnaryCall;
  hingeAngle(argument: _idb_HingeAngleRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_HingeAngleResponse__Output>): grpc.ClientUnaryCall;
  hingeAngle(argument: _idb_HingeAngleRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_HingeAngleResponse__Output>): grpc.ClientUnaryCall;
  hingeAngle(argument: _idb_HingeAngleRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_HingeAngleResponse__Output>): grpc.ClientUnaryCall;
  hingeAngle(argument: _idb_HingeAngleRequest, callback: grpc.requestCallback<_idb_HingeAngleResponse__Output>): grpc.ClientUnaryCall;
  
  inject_audio(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_InjectAudioResponse__Output>): grpc.ClientWritableStream<_idb_InjectAudioRequest>;
  inject_audio(metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_InjectAudioResponse__Output>): grpc.ClientWritableStream<_idb_InjectAudioRequest>;
  inject_audio(options: grpc.CallOptions, callback: grpc.requestCallback<_idb_InjectAudioResponse__Output>): grpc.ClientWritableStream<_idb_InjectAudioRequest>;
  inject_audio(callback: grpc.requestCallback<_idb_InjectAudioResponse__Output>): grpc.ClientWritableStream<_idb_InjectAudioRequest>;
  injectAudio(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_InjectAudioResponse__Output>): grpc.ClientWritableStream<_idb_InjectAudioRequest>;
  injectAudio(metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_InjectAudioResponse__Output>): grpc.ClientWritableStream<_idb_InjectAudioRequest>;
  injectAudio(options: grpc.CallOptions, callback: grpc.requestCallback<_idb_InjectAudioResponse__Output>): grpc.ClientWritableStream<_idb_InjectAudioRequest>;
  injectAudio(callback: grpc.requestCallback<_idb_InjectAudioResponse__Output>): grpc.ClientWritableStream<_idb_InjectAudioRequest>;
  
  install(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_InstallRequest, _idb_InstallResponse__Output>;
  install(options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_InstallRequest, _idb_InstallResponse__Output>;
  
  instruments_run(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_InstrumentsRunRequest, _idb_InstrumentsRunResponse__Output>;
  instruments_run(options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_InstrumentsRunRequest, _idb_InstrumentsRunResponse__Output>;
  instrumentsRun(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_InstrumentsRunRequest, _idb_InstrumentsRunResponse__Output>;
  instrumentsRun(options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_InstrumentsRunRequest, _idb_InstrumentsRunResponse__Output>;
  
  launch(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_LaunchRequest, _idb_LaunchResponse__Output>;
  launch(options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_LaunchRequest, _idb_LaunchResponse__Output>;
  
  list_apps(argument: _idb_ListAppsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ListAppsResponse__Output>): grpc.ClientUnaryCall;
  list_apps(argument: _idb_ListAppsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_ListAppsResponse__Output>): grpc.ClientUnaryCall;
  list_apps(argument: _idb_ListAppsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ListAppsResponse__Output>): grpc.ClientUnaryCall;
  list_apps(argument: _idb_ListAppsRequest, callback: grpc.requestCallback<_idb_ListAppsResponse__Output>): grpc.ClientUnaryCall;
  listApps(argument: _idb_ListAppsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ListAppsResponse__Output>): grpc.ClientUnaryCall;
  listApps(argument: _idb_ListAppsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_ListAppsResponse__Output>): grpc.ClientUnaryCall;
  listApps(argument: _idb_ListAppsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ListAppsResponse__Output>): grpc.ClientUnaryCall;
  listApps(argument: _idb_ListAppsRequest, callback: grpc.requestCallback<_idb_ListAppsResponse__Output>): grpc.ClientUnaryCall;
  
  list_settings(argument: _idb_ListSettingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ListSettingResponse__Output>): grpc.ClientUnaryCall;
  list_settings(argument: _idb_ListSettingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_ListSettingResponse__Output>): grpc.ClientUnaryCall;
  list_settings(argument: _idb_ListSettingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ListSettingResponse__Output>): grpc.ClientUnaryCall;
  list_settings(argument: _idb_ListSettingRequest, callback: grpc.requestCallback<_idb_ListSettingResponse__Output>): grpc.ClientUnaryCall;
  listSettings(argument: _idb_ListSettingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ListSettingResponse__Output>): grpc.ClientUnaryCall;
  listSettings(argument: _idb_ListSettingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_ListSettingResponse__Output>): grpc.ClientUnaryCall;
  listSettings(argument: _idb_ListSettingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ListSettingResponse__Output>): grpc.ClientUnaryCall;
  listSettings(argument: _idb_ListSettingRequest, callback: grpc.requestCallback<_idb_ListSettingResponse__Output>): grpc.ClientUnaryCall;
  
  log(argument: _idb_LogRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_idb_LogResponse__Output>;
  log(argument: _idb_LogRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_idb_LogResponse__Output>;
  
  ls(argument: _idb_LsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_LsResponse__Output>): grpc.ClientUnaryCall;
  ls(argument: _idb_LsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_LsResponse__Output>): grpc.ClientUnaryCall;
  ls(argument: _idb_LsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_LsResponse__Output>): grpc.ClientUnaryCall;
  ls(argument: _idb_LsRequest, callback: grpc.requestCallback<_idb_LsResponse__Output>): grpc.ClientUnaryCall;
  
  mkdir(argument: _idb_MkdirRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_MkdirResponse__Output>): grpc.ClientUnaryCall;
  mkdir(argument: _idb_MkdirRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_MkdirResponse__Output>): grpc.ClientUnaryCall;
  mkdir(argument: _idb_MkdirRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_MkdirResponse__Output>): grpc.ClientUnaryCall;
  mkdir(argument: _idb_MkdirRequest, callback: grpc.requestCallback<_idb_MkdirResponse__Output>): grpc.ClientUnaryCall;
  
  mv(argument: _idb_MvRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_MvResponse__Output>): grpc.ClientUnaryCall;
  mv(argument: _idb_MvRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_MvResponse__Output>): grpc.ClientUnaryCall;
  mv(argument: _idb_MvRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_MvResponse__Output>): grpc.ClientUnaryCall;
  mv(argument: _idb_MvRequest, callback: grpc.requestCallback<_idb_MvResponse__Output>): grpc.ClientUnaryCall;
  
  open_url(argument: _idb_OpenUrlRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_OpenUrlRequest__Output>): grpc.ClientUnaryCall;
  open_url(argument: _idb_OpenUrlRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_OpenUrlRequest__Output>): grpc.ClientUnaryCall;
  open_url(argument: _idb_OpenUrlRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_OpenUrlRequest__Output>): grpc.ClientUnaryCall;
  open_url(argument: _idb_OpenUrlRequest, callback: grpc.requestCallback<_idb_OpenUrlRequest__Output>): grpc.ClientUnaryCall;
  openUrl(argument: _idb_OpenUrlRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_OpenUrlRequest__Output>): grpc.ClientUnaryCall;
  openUrl(argument: _idb_OpenUrlRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_OpenUrlRequest__Output>): grpc.ClientUnaryCall;
  openUrl(argument: _idb_OpenUrlRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_OpenUrlRequest__Output>): grpc.ClientUnaryCall;
  openUrl(argument: _idb_OpenUrlRequest, callback: grpc.requestCallback<_idb_OpenUrlRequest__Output>): grpc.ClientUnaryCall;
  
  photos_clear(argument: _idb_PhotosClearRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_PhotosClearResponse__Output>): grpc.ClientUnaryCall;
  photos_clear(argument: _idb_PhotosClearRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_PhotosClearResponse__Output>): grpc.ClientUnaryCall;
  photos_clear(argument: _idb_PhotosClearRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_PhotosClearResponse__Output>): grpc.ClientUnaryCall;
  photos_clear(argument: _idb_PhotosClearRequest, callback: grpc.requestCallback<_idb_PhotosClearResponse__Output>): grpc.ClientUnaryCall;
  photosClear(argument: _idb_PhotosClearRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_PhotosClearResponse__Output>): grpc.ClientUnaryCall;
  photosClear(argument: _idb_PhotosClearRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_PhotosClearResponse__Output>): grpc.ClientUnaryCall;
  photosClear(argument: _idb_PhotosClearRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_PhotosClearResponse__Output>): grpc.ClientUnaryCall;
  photosClear(argument: _idb_PhotosClearRequest, callback: grpc.requestCallback<_idb_PhotosClearResponse__Output>): grpc.ClientUnaryCall;
  
  pull(argument: _idb_PullRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_idb_PullResponse__Output>;
  pull(argument: _idb_PullRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_idb_PullResponse__Output>;
  
  push(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_PushResponse__Output>): grpc.ClientWritableStream<_idb_PushRequest>;
  push(metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_PushResponse__Output>): grpc.ClientWritableStream<_idb_PushRequest>;
  push(options: grpc.CallOptions, callback: grpc.requestCallback<_idb_PushResponse__Output>): grpc.ClientWritableStream<_idb_PushRequest>;
  push(callback: grpc.requestCallback<_idb_PushResponse__Output>): grpc.ClientWritableStream<_idb_PushRequest>;
  
  record(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_RecordRequest, _idb_RecordResponse__Output>;
  record(options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_RecordRequest, _idb_RecordResponse__Output>;
  
  repl(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_ReplRequest, _idb_ReplResponse__Output>;
  repl(options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_ReplRequest, _idb_ReplResponse__Output>;
  
  revoke(argument: _idb_RevokeRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_RevokeResponse__Output>): grpc.ClientUnaryCall;
  revoke(argument: _idb_RevokeRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_RevokeResponse__Output>): grpc.ClientUnaryCall;
  revoke(argument: _idb_RevokeRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_RevokeResponse__Output>): grpc.ClientUnaryCall;
  revoke(argument: _idb_RevokeRequest, callback: grpc.requestCallback<_idb_RevokeResponse__Output>): grpc.ClientUnaryCall;
  
  rm(argument: _idb_RmRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_RmResponse__Output>): grpc.ClientUnaryCall;
  rm(argument: _idb_RmRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_RmResponse__Output>): grpc.ClientUnaryCall;
  rm(argument: _idb_RmRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_RmResponse__Output>): grpc.ClientUnaryCall;
  rm(argument: _idb_RmRequest, callback: grpc.requestCallback<_idb_RmResponse__Output>): grpc.ClientUnaryCall;
  
  screenshot(argument: _idb_ScreenshotRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ScreenshotResponse__Output>): grpc.ClientUnaryCall;
  screenshot(argument: _idb_ScreenshotRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_ScreenshotResponse__Output>): grpc.ClientUnaryCall;
  screenshot(argument: _idb_ScreenshotRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_ScreenshotResponse__Output>): grpc.ClientUnaryCall;
  screenshot(argument: _idb_ScreenshotRequest, callback: grpc.requestCallback<_idb_ScreenshotResponse__Output>): grpc.ClientUnaryCall;
  
  send_notification(argument: _idb_SendNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SendNotificationResponse__Output>): grpc.ClientUnaryCall;
  send_notification(argument: _idb_SendNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_SendNotificationResponse__Output>): grpc.ClientUnaryCall;
  send_notification(argument: _idb_SendNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SendNotificationResponse__Output>): grpc.ClientUnaryCall;
  send_notification(argument: _idb_SendNotificationRequest, callback: grpc.requestCallback<_idb_SendNotificationResponse__Output>): grpc.ClientUnaryCall;
  sendNotification(argument: _idb_SendNotificationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SendNotificationResponse__Output>): grpc.ClientUnaryCall;
  sendNotification(argument: _idb_SendNotificationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_SendNotificationResponse__Output>): grpc.ClientUnaryCall;
  sendNotification(argument: _idb_SendNotificationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SendNotificationResponse__Output>): grpc.ClientUnaryCall;
  sendNotification(argument: _idb_SendNotificationRequest, callback: grpc.requestCallback<_idb_SendNotificationResponse__Output>): grpc.ClientUnaryCall;
  
  set_location(argument: _idb_SetLocationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SetLocationResponse__Output>): grpc.ClientUnaryCall;
  set_location(argument: _idb_SetLocationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_SetLocationResponse__Output>): grpc.ClientUnaryCall;
  set_location(argument: _idb_SetLocationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SetLocationResponse__Output>): grpc.ClientUnaryCall;
  set_location(argument: _idb_SetLocationRequest, callback: grpc.requestCallback<_idb_SetLocationResponse__Output>): grpc.ClientUnaryCall;
  setLocation(argument: _idb_SetLocationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SetLocationResponse__Output>): grpc.ClientUnaryCall;
  setLocation(argument: _idb_SetLocationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_SetLocationResponse__Output>): grpc.ClientUnaryCall;
  setLocation(argument: _idb_SetLocationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SetLocationResponse__Output>): grpc.ClientUnaryCall;
  setLocation(argument: _idb_SetLocationRequest, callback: grpc.requestCallback<_idb_SetLocationResponse__Output>): grpc.ClientUnaryCall;
  
  set_orientation(argument: _idb_SetOrientationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SetOrientationResponse__Output>): grpc.ClientUnaryCall;
  set_orientation(argument: _idb_SetOrientationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_SetOrientationResponse__Output>): grpc.ClientUnaryCall;
  set_orientation(argument: _idb_SetOrientationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SetOrientationResponse__Output>): grpc.ClientUnaryCall;
  set_orientation(argument: _idb_SetOrientationRequest, callback: grpc.requestCallback<_idb_SetOrientationResponse__Output>): grpc.ClientUnaryCall;
  setOrientation(argument: _idb_SetOrientationRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SetOrientationResponse__Output>): grpc.ClientUnaryCall;
  setOrientation(argument: _idb_SetOrientationRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_SetOrientationResponse__Output>): grpc.ClientUnaryCall;
  setOrientation(argument: _idb_SetOrientationRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SetOrientationResponse__Output>): grpc.ClientUnaryCall;
  setOrientation(argument: _idb_SetOrientationRequest, callback: grpc.requestCallback<_idb_SetOrientationResponse__Output>): grpc.ClientUnaryCall;
  
  setting(argument: _idb_SettingRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SettingResponse__Output>): grpc.ClientUnaryCall;
  setting(argument: _idb_SettingRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_SettingResponse__Output>): grpc.ClientUnaryCall;
  setting(argument: _idb_SettingRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SettingResponse__Output>): grpc.ClientUnaryCall;
  setting(argument: _idb_SettingRequest, callback: grpc.requestCallback<_idb_SettingResponse__Output>): grpc.ClientUnaryCall;
  
  simulate_memory_warning(argument: _idb_SimulateMemoryWarningRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SimulateMemoryWarningResponse__Output>): grpc.ClientUnaryCall;
  simulate_memory_warning(argument: _idb_SimulateMemoryWarningRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_SimulateMemoryWarningResponse__Output>): grpc.ClientUnaryCall;
  simulate_memory_warning(argument: _idb_SimulateMemoryWarningRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SimulateMemoryWarningResponse__Output>): grpc.ClientUnaryCall;
  simulate_memory_warning(argument: _idb_SimulateMemoryWarningRequest, callback: grpc.requestCallback<_idb_SimulateMemoryWarningResponse__Output>): grpc.ClientUnaryCall;
  simulateMemoryWarning(argument: _idb_SimulateMemoryWarningRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SimulateMemoryWarningResponse__Output>): grpc.ClientUnaryCall;
  simulateMemoryWarning(argument: _idb_SimulateMemoryWarningRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_SimulateMemoryWarningResponse__Output>): grpc.ClientUnaryCall;
  simulateMemoryWarning(argument: _idb_SimulateMemoryWarningRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_SimulateMemoryWarningResponse__Output>): grpc.ClientUnaryCall;
  simulateMemoryWarning(argument: _idb_SimulateMemoryWarningRequest, callback: grpc.requestCallback<_idb_SimulateMemoryWarningResponse__Output>): grpc.ClientUnaryCall;
  
  tail(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_TailRequest, _idb_TailResponse__Output>;
  tail(options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_TailRequest, _idb_TailResponse__Output>;
  
  terminate(argument: _idb_TerminateRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_TerminateResponse__Output>): grpc.ClientUnaryCall;
  terminate(argument: _idb_TerminateRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_TerminateResponse__Output>): grpc.ClientUnaryCall;
  terminate(argument: _idb_TerminateRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_TerminateResponse__Output>): grpc.ClientUnaryCall;
  terminate(argument: _idb_TerminateRequest, callback: grpc.requestCallback<_idb_TerminateResponse__Output>): grpc.ClientUnaryCall;
  
  uninstall(argument: _idb_UninstallRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_UninstallResponse__Output>): grpc.ClientUnaryCall;
  uninstall(argument: _idb_UninstallRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_UninstallResponse__Output>): grpc.ClientUnaryCall;
  uninstall(argument: _idb_UninstallRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_UninstallResponse__Output>): grpc.ClientUnaryCall;
  uninstall(argument: _idb_UninstallRequest, callback: grpc.requestCallback<_idb_UninstallResponse__Output>): grpc.ClientUnaryCall;
  
  unrotated_hid(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_HIDResponse__Output>): grpc.ClientWritableStream<_idb_HIDEvent>;
  unrotated_hid(metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_HIDResponse__Output>): grpc.ClientWritableStream<_idb_HIDEvent>;
  unrotated_hid(options: grpc.CallOptions, callback: grpc.requestCallback<_idb_HIDResponse__Output>): grpc.ClientWritableStream<_idb_HIDEvent>;
  unrotated_hid(callback: grpc.requestCallback<_idb_HIDResponse__Output>): grpc.ClientWritableStream<_idb_HIDEvent>;
  unrotatedHid(metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_HIDResponse__Output>): grpc.ClientWritableStream<_idb_HIDEvent>;
  unrotatedHid(metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_HIDResponse__Output>): grpc.ClientWritableStream<_idb_HIDEvent>;
  unrotatedHid(options: grpc.CallOptions, callback: grpc.requestCallback<_idb_HIDResponse__Output>): grpc.ClientWritableStream<_idb_HIDEvent>;
  unrotatedHid(callback: grpc.requestCallback<_idb_HIDResponse__Output>): grpc.ClientWritableStream<_idb_HIDEvent>;
  
  video_stream(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_VideoStreamRequest, _idb_VideoStreamResponse__Output>;
  video_stream(options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_VideoStreamRequest, _idb_VideoStreamResponse__Output>;
  videoStream(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_VideoStreamRequest, _idb_VideoStreamResponse__Output>;
  videoStream(options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_VideoStreamRequest, _idb_VideoStreamResponse__Output>;
  
  xctest_list_bundles(argument: _idb_XctestListBundlesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_XctestListBundlesResponse__Output>): grpc.ClientUnaryCall;
  xctest_list_bundles(argument: _idb_XctestListBundlesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_XctestListBundlesResponse__Output>): grpc.ClientUnaryCall;
  xctest_list_bundles(argument: _idb_XctestListBundlesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_XctestListBundlesResponse__Output>): grpc.ClientUnaryCall;
  xctest_list_bundles(argument: _idb_XctestListBundlesRequest, callback: grpc.requestCallback<_idb_XctestListBundlesResponse__Output>): grpc.ClientUnaryCall;
  xctestListBundles(argument: _idb_XctestListBundlesRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_XctestListBundlesResponse__Output>): grpc.ClientUnaryCall;
  xctestListBundles(argument: _idb_XctestListBundlesRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_XctestListBundlesResponse__Output>): grpc.ClientUnaryCall;
  xctestListBundles(argument: _idb_XctestListBundlesRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_XctestListBundlesResponse__Output>): grpc.ClientUnaryCall;
  xctestListBundles(argument: _idb_XctestListBundlesRequest, callback: grpc.requestCallback<_idb_XctestListBundlesResponse__Output>): grpc.ClientUnaryCall;
  
  xctest_list_tests(argument: _idb_XctestListTestsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_XctestListTestsResponse__Output>): grpc.ClientUnaryCall;
  xctest_list_tests(argument: _idb_XctestListTestsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_XctestListTestsResponse__Output>): grpc.ClientUnaryCall;
  xctest_list_tests(argument: _idb_XctestListTestsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_XctestListTestsResponse__Output>): grpc.ClientUnaryCall;
  xctest_list_tests(argument: _idb_XctestListTestsRequest, callback: grpc.requestCallback<_idb_XctestListTestsResponse__Output>): grpc.ClientUnaryCall;
  xctestListTests(argument: _idb_XctestListTestsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_XctestListTestsResponse__Output>): grpc.ClientUnaryCall;
  xctestListTests(argument: _idb_XctestListTestsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_idb_XctestListTestsResponse__Output>): grpc.ClientUnaryCall;
  xctestListTests(argument: _idb_XctestListTestsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_idb_XctestListTestsResponse__Output>): grpc.ClientUnaryCall;
  xctestListTests(argument: _idb_XctestListTestsRequest, callback: grpc.requestCallback<_idb_XctestListTestsResponse__Output>): grpc.ClientUnaryCall;
  
  xctest_run(argument: _idb_XctestRunRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_idb_XctestRunResponse__Output>;
  xctest_run(argument: _idb_XctestRunRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_idb_XctestRunResponse__Output>;
  xctestRun(argument: _idb_XctestRunRequest, metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientReadableStream<_idb_XctestRunResponse__Output>;
  xctestRun(argument: _idb_XctestRunRequest, options?: grpc.CallOptions): grpc.ClientReadableStream<_idb_XctestRunResponse__Output>;
  
  xctrace_record(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_XctraceRecordRequest, _idb_XctraceRecordResponse__Output>;
  xctrace_record(options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_XctraceRecordRequest, _idb_XctraceRecordResponse__Output>;
  xctraceRecord(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_XctraceRecordRequest, _idb_XctraceRecordResponse__Output>;
  xctraceRecord(options?: grpc.CallOptions): grpc.ClientDuplexStream<_idb_XctraceRecordRequest, _idb_XctraceRecordResponse__Output>;
  
}

export interface CompanionServiceHandlers extends grpc.UntypedServiceImplementation {
  accessibility_action: grpc.handleUnaryCall<_idb_AccessibilityActionRequest__Output, _idb_AccessibilityActionResponse>;
  
  accessibility_info: grpc.handleUnaryCall<_idb_AccessibilityInfoRequest__Output, _idb_AccessibilityInfoResponse>;
  
  accessibility_quiescence: grpc.handleServerStreamingCall<_idb_AccessibilityQuiescenceRequest__Output, _idb_AccessibilityQuiescenceResponse>;
  
  add_media: grpc.handleClientStreamingCall<_idb_AddMediaRequest__Output, _idb_AddMediaResponse>;
  
  approve: grpc.handleUnaryCall<_idb_ApproveRequest__Output, _idb_ApproveResponse>;
  
  clear_delivered_notifications: grpc.handleUnaryCall<_idb_ClearDeliveredNotificationsRequest__Output, _idb_ClearDeliveredNotificationsResponse>;
  
  clear_keychain: grpc.handleUnaryCall<_idb_ClearKeychainRequest__Output, _idb_ClearKeychainResponse>;
  
  connect: grpc.handleUnaryCall<_idb_ConnectRequest__Output, _idb_ConnectResponse>;
  
  contacts_clear: grpc.handleUnaryCall<_idb_ContactsClearRequest__Output, _idb_ContactsClearResponse>;
  
  contacts_update: grpc.handleUnaryCall<_idb_ContactsUpdateRequest__Output, _idb_ContactsUpdateResponse>;
  
  crash_delete: grpc.handleUnaryCall<_idb_CrashLogQuery__Output, _idb_CrashLogResponse>;
  
  crash_list: grpc.handleUnaryCall<_idb_CrashLogQuery__Output, _idb_CrashLogResponse>;
  
  crash_show: grpc.handleUnaryCall<_idb_CrashShowRequest__Output, _idb_CrashShowResponse>;
  
  dap: grpc.handleBidiStreamingCall<_idb_DapRequest__Output, _idb_DapResponse>;
  
  debugserver: grpc.handleBidiStreamingCall<_idb_DebugServerRequest__Output, _idb_DebugServerResponse>;
  
  delivered_notifications: grpc.handleUnaryCall<_idb_DeliveredNotificationsRequest__Output, _idb_DeliveredNotificationsResponse>;
  
  describe: grpc.handleUnaryCall<_idb_TargetDescriptionRequest__Output, _idb_TargetDescriptionResponse>;
  
  focus: grpc.handleUnaryCall<_idb_FocusRequest__Output, _idb_FocusResponse>;
  
  framebuffer_stream: grpc.handleBidiStreamingCall<_idb_FramebufferStreamRequest__Output, _idb_FramebufferStreamResponse>;
  
  get_orientation: grpc.handleUnaryCall<_idb_GetOrientationRequest__Output, _idb_GetOrientationResponse>;
  
  get_setting: grpc.handleUnaryCall<_idb_GetSettingRequest__Output, _idb_GetSettingResponse>;
  
  hid: grpc.handleClientStreamingCall<_idb_HIDEvent__Output, _idb_HIDResponse>;
  
  hinge_angle: grpc.handleUnaryCall<_idb_HingeAngleRequest__Output, _idb_HingeAngleResponse>;
  
  inject_audio: grpc.handleClientStreamingCall<_idb_InjectAudioRequest__Output, _idb_InjectAudioResponse>;
  
  install: grpc.handleBidiStreamingCall<_idb_InstallRequest__Output, _idb_InstallResponse>;
  
  instruments_run: grpc.handleBidiStreamingCall<_idb_InstrumentsRunRequest__Output, _idb_InstrumentsRunResponse>;
  
  launch: grpc.handleBidiStreamingCall<_idb_LaunchRequest__Output, _idb_LaunchResponse>;
  
  list_apps: grpc.handleUnaryCall<_idb_ListAppsRequest__Output, _idb_ListAppsResponse>;
  
  list_settings: grpc.handleUnaryCall<_idb_ListSettingRequest__Output, _idb_ListSettingResponse>;
  
  log: grpc.handleServerStreamingCall<_idb_LogRequest__Output, _idb_LogResponse>;
  
  ls: grpc.handleUnaryCall<_idb_LsRequest__Output, _idb_LsResponse>;
  
  mkdir: grpc.handleUnaryCall<_idb_MkdirRequest__Output, _idb_MkdirResponse>;
  
  mv: grpc.handleUnaryCall<_idb_MvRequest__Output, _idb_MvResponse>;
  
  open_url: grpc.handleUnaryCall<_idb_OpenUrlRequest__Output, _idb_OpenUrlRequest>;
  
  photos_clear: grpc.handleUnaryCall<_idb_PhotosClearRequest__Output, _idb_PhotosClearResponse>;
  
  pull: grpc.handleServerStreamingCall<_idb_PullRequest__Output, _idb_PullResponse>;
  
  push: grpc.handleClientStreamingCall<_idb_PushRequest__Output, _idb_PushResponse>;
  
  record: grpc.handleBidiStreamingCall<_idb_RecordRequest__Output, _idb_RecordResponse>;
  
  repl: grpc.handleBidiStreamingCall<_idb_ReplRequest__Output, _idb_ReplResponse>;
  
  revoke: grpc.handleUnaryCall<_idb_RevokeRequest__Output, _idb_RevokeResponse>;
  
  rm: grpc.handleUnaryCall<_idb_RmRequest__Output, _idb_RmResponse>;
  
  screenshot: grpc.handleUnaryCall<_idb_ScreenshotRequest__Output, _idb_ScreenshotResponse>;
  
  send_notification: grpc.handleUnaryCall<_idb_SendNotificationRequest__Output, _idb_SendNotificationResponse>;
  
  set_location: grpc.handleUnaryCall<_idb_SetLocationRequest__Output, _idb_SetLocationResponse>;
  
  set_orientation: grpc.handleUnaryCall<_idb_SetOrientationRequest__Output, _idb_SetOrientationResponse>;
  
  setting: grpc.handleUnaryCall<_idb_SettingRequest__Output, _idb_SettingResponse>;
  
  simulate_memory_warning: grpc.handleUnaryCall<_idb_SimulateMemoryWarningRequest__Output, _idb_SimulateMemoryWarningResponse>;
  
  tail: grpc.handleBidiStreamingCall<_idb_TailRequest__Output, _idb_TailResponse>;
  
  terminate: grpc.handleUnaryCall<_idb_TerminateRequest__Output, _idb_TerminateResponse>;
  
  uninstall: grpc.handleUnaryCall<_idb_UninstallRequest__Output, _idb_UninstallResponse>;
  
  unrotated_hid: grpc.handleClientStreamingCall<_idb_HIDEvent__Output, _idb_HIDResponse>;
  
  video_stream: grpc.handleBidiStreamingCall<_idb_VideoStreamRequest__Output, _idb_VideoStreamResponse>;
  
  xctest_list_bundles: grpc.handleUnaryCall<_idb_XctestListBundlesRequest__Output, _idb_XctestListBundlesResponse>;
  
  xctest_list_tests: grpc.handleUnaryCall<_idb_XctestListTestsRequest__Output, _idb_XctestListTestsResponse>;
  
  xctest_run: grpc.handleServerStreamingCall<_idb_XctestRunRequest__Output, _idb_XctestRunResponse>;
  
  xctrace_record: grpc.handleBidiStreamingCall<_idb_XctraceRecordRequest__Output, _idb_XctraceRecordResponse>;
  
}

export interface CompanionServiceDefinition extends grpc.ServiceDefinition {
  accessibility_action: MethodDefinition<_idb_AccessibilityActionRequest, _idb_AccessibilityActionResponse, _idb_AccessibilityActionRequest__Output, _idb_AccessibilityActionResponse__Output>
  accessibility_info: MethodDefinition<_idb_AccessibilityInfoRequest, _idb_AccessibilityInfoResponse, _idb_AccessibilityInfoRequest__Output, _idb_AccessibilityInfoResponse__Output>
  accessibility_quiescence: MethodDefinition<_idb_AccessibilityQuiescenceRequest, _idb_AccessibilityQuiescenceResponse, _idb_AccessibilityQuiescenceRequest__Output, _idb_AccessibilityQuiescenceResponse__Output>
  add_media: MethodDefinition<_idb_AddMediaRequest, _idb_AddMediaResponse, _idb_AddMediaRequest__Output, _idb_AddMediaResponse__Output>
  approve: MethodDefinition<_idb_ApproveRequest, _idb_ApproveResponse, _idb_ApproveRequest__Output, _idb_ApproveResponse__Output>
  clear_delivered_notifications: MethodDefinition<_idb_ClearDeliveredNotificationsRequest, _idb_ClearDeliveredNotificationsResponse, _idb_ClearDeliveredNotificationsRequest__Output, _idb_ClearDeliveredNotificationsResponse__Output>
  clear_keychain: MethodDefinition<_idb_ClearKeychainRequest, _idb_ClearKeychainResponse, _idb_ClearKeychainRequest__Output, _idb_ClearKeychainResponse__Output>
  connect: MethodDefinition<_idb_ConnectRequest, _idb_ConnectResponse, _idb_ConnectRequest__Output, _idb_ConnectResponse__Output>
  contacts_clear: MethodDefinition<_idb_ContactsClearRequest, _idb_ContactsClearResponse, _idb_ContactsClearRequest__Output, _idb_ContactsClearResponse__Output>
  contacts_update: MethodDefinition<_idb_ContactsUpdateRequest, _idb_ContactsUpdateResponse, _idb_ContactsUpdateRequest__Output, _idb_ContactsUpdateResponse__Output>
  crash_delete: MethodDefinition<_idb_CrashLogQuery, _idb_CrashLogResponse, _idb_CrashLogQuery__Output, _idb_CrashLogResponse__Output>
  crash_list: MethodDefinition<_idb_CrashLogQuery, _idb_CrashLogResponse, _idb_CrashLogQuery__Output, _idb_CrashLogResponse__Output>
  crash_show: MethodDefinition<_idb_CrashShowRequest, _idb_CrashShowResponse, _idb_CrashShowRequest__Output, _idb_CrashShowResponse__Output>
  dap: MethodDefinition<_idb_DapRequest, _idb_DapResponse, _idb_DapRequest__Output, _idb_DapResponse__Output>
  debugserver: MethodDefinition<_idb_DebugServerRequest, _idb_DebugServerResponse, _idb_DebugServerRequest__Output, _idb_DebugServerResponse__Output>
  delivered_notifications: MethodDefinition<_idb_DeliveredNotificationsRequest, _idb_DeliveredNotificationsResponse, _idb_DeliveredNotificationsRequest__Output, _idb_DeliveredNotificationsResponse__Output>
  describe: MethodDefinition<_idb_TargetDescriptionRequest, _idb_TargetDescriptionResponse, _idb_TargetDescriptionRequest__Output, _idb_TargetDescriptionResponse__Output>
  focus: MethodDefinition<_idb_FocusRequest, _idb_FocusResponse, _idb_FocusRequest__Output, _idb_FocusResponse__Output>
  framebuffer_stream: MethodDefinition<_idb_FramebufferStreamRequest, _idb_FramebufferStreamResponse, _idb_FramebufferStreamRequest__Output, _idb_FramebufferStreamResponse__Output>
  get_orientation: MethodDefinition<_idb_GetOrientationRequest, _idb_GetOrientationResponse, _idb_GetOrientationRequest__Output, _idb_GetOrientationResponse__Output>
  get_setting: MethodDefinition<_idb_GetSettingRequest, _idb_GetSettingResponse, _idb_GetSettingRequest__Output, _idb_GetSettingResponse__Output>
  hid: MethodDefinition<_idb_HIDEvent, _idb_HIDResponse, _idb_HIDEvent__Output, _idb_HIDResponse__Output>
  hinge_angle: MethodDefinition<_idb_HingeAngleRequest, _idb_HingeAngleResponse, _idb_HingeAngleRequest__Output, _idb_HingeAngleResponse__Output>
  inject_audio: MethodDefinition<_idb_InjectAudioRequest, _idb_InjectAudioResponse, _idb_InjectAudioRequest__Output, _idb_InjectAudioResponse__Output>
  install: MethodDefinition<_idb_InstallRequest, _idb_InstallResponse, _idb_InstallRequest__Output, _idb_InstallResponse__Output>
  instruments_run: MethodDefinition<_idb_InstrumentsRunRequest, _idb_InstrumentsRunResponse, _idb_InstrumentsRunRequest__Output, _idb_InstrumentsRunResponse__Output>
  launch: MethodDefinition<_idb_LaunchRequest, _idb_LaunchResponse, _idb_LaunchRequest__Output, _idb_LaunchResponse__Output>
  list_apps: MethodDefinition<_idb_ListAppsRequest, _idb_ListAppsResponse, _idb_ListAppsRequest__Output, _idb_ListAppsResponse__Output>
  list_settings: MethodDefinition<_idb_ListSettingRequest, _idb_ListSettingResponse, _idb_ListSettingRequest__Output, _idb_ListSettingResponse__Output>
  log: MethodDefinition<_idb_LogRequest, _idb_LogResponse, _idb_LogRequest__Output, _idb_LogResponse__Output>
  ls: MethodDefinition<_idb_LsRequest, _idb_LsResponse, _idb_LsRequest__Output, _idb_LsResponse__Output>
  mkdir: MethodDefinition<_idb_MkdirRequest, _idb_MkdirResponse, _idb_MkdirRequest__Output, _idb_MkdirResponse__Output>
  mv: MethodDefinition<_idb_MvRequest, _idb_MvResponse, _idb_MvRequest__Output, _idb_MvResponse__Output>
  open_url: MethodDefinition<_idb_OpenUrlRequest, _idb_OpenUrlRequest, _idb_OpenUrlRequest__Output, _idb_OpenUrlRequest__Output>
  photos_clear: MethodDefinition<_idb_PhotosClearRequest, _idb_PhotosClearResponse, _idb_PhotosClearRequest__Output, _idb_PhotosClearResponse__Output>
  pull: MethodDefinition<_idb_PullRequest, _idb_PullResponse, _idb_PullRequest__Output, _idb_PullResponse__Output>
  push: MethodDefinition<_idb_PushRequest, _idb_PushResponse, _idb_PushRequest__Output, _idb_PushResponse__Output>
  record: MethodDefinition<_idb_RecordRequest, _idb_RecordResponse, _idb_RecordRequest__Output, _idb_RecordResponse__Output>
  repl: MethodDefinition<_idb_ReplRequest, _idb_ReplResponse, _idb_ReplRequest__Output, _idb_ReplResponse__Output>
  revoke: MethodDefinition<_idb_RevokeRequest, _idb_RevokeResponse, _idb_RevokeRequest__Output, _idb_RevokeResponse__Output>
  rm: MethodDefinition<_idb_RmRequest, _idb_RmResponse, _idb_RmRequest__Output, _idb_RmResponse__Output>
  screenshot: MethodDefinition<_idb_ScreenshotRequest, _idb_ScreenshotResponse, _idb_ScreenshotRequest__Output, _idb_ScreenshotResponse__Output>
  send_notification: MethodDefinition<_idb_SendNotificationRequest, _idb_SendNotificationResponse, _idb_SendNotificationRequest__Output, _idb_SendNotificationResponse__Output>
  set_location: MethodDefinition<_idb_SetLocationRequest, _idb_SetLocationResponse, _idb_SetLocationRequest__Output, _idb_SetLocationResponse__Output>
  set_orientation: MethodDefinition<_idb_SetOrientationRequest, _idb_SetOrientationResponse, _idb_SetOrientationRequest__Output, _idb_SetOrientationResponse__Output>
  setting: MethodDefinition<_idb_SettingRequest, _idb_SettingResponse, _idb_SettingRequest__Output, _idb_SettingResponse__Output>
  simulate_memory_warning: MethodDefinition<_idb_SimulateMemoryWarningRequest, _idb_SimulateMemoryWarningResponse, _idb_SimulateMemoryWarningRequest__Output, _idb_SimulateMemoryWarningResponse__Output>
  tail: MethodDefinition<_idb_TailRequest, _idb_TailResponse, _idb_TailRequest__Output, _idb_TailResponse__Output>
  terminate: MethodDefinition<_idb_TerminateRequest, _idb_TerminateResponse, _idb_TerminateRequest__Output, _idb_TerminateResponse__Output>
  uninstall: MethodDefinition<_idb_UninstallRequest, _idb_UninstallResponse, _idb_UninstallRequest__Output, _idb_UninstallResponse__Output>
  unrotated_hid: MethodDefinition<_idb_HIDEvent, _idb_HIDResponse, _idb_HIDEvent__Output, _idb_HIDResponse__Output>
  video_stream: MethodDefinition<_idb_VideoStreamRequest, _idb_VideoStreamResponse, _idb_VideoStreamRequest__Output, _idb_VideoStreamResponse__Output>
  xctest_list_bundles: MethodDefinition<_idb_XctestListBundlesRequest, _idb_XctestListBundlesResponse, _idb_XctestListBundlesRequest__Output, _idb_XctestListBundlesResponse__Output>
  xctest_list_tests: MethodDefinition<_idb_XctestListTestsRequest, _idb_XctestListTestsResponse, _idb_XctestListTestsRequest__Output, _idb_XctestListTestsResponse__Output>
  xctest_run: MethodDefinition<_idb_XctestRunRequest, _idb_XctestRunResponse, _idb_XctestRunRequest__Output, _idb_XctestRunResponse__Output>
  xctrace_record: MethodDefinition<_idb_XctraceRecordRequest, _idb_XctraceRecordResponse, _idb_XctraceRecordRequest__Output, _idb_XctraceRecordResponse__Output>
}
