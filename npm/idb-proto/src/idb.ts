import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { AccessibilityActionRequest as _idb_AccessibilityActionRequest, AccessibilityActionRequest__Output as _idb_AccessibilityActionRequest__Output } from './idb/AccessibilityActionRequest.js';
import type { AccessibilityActionResponse as _idb_AccessibilityActionResponse, AccessibilityActionResponse__Output as _idb_AccessibilityActionResponse__Output } from './idb/AccessibilityActionResponse.js';
import type { AccessibilityInfoRequest as _idb_AccessibilityInfoRequest, AccessibilityInfoRequest__Output as _idb_AccessibilityInfoRequest__Output } from './idb/AccessibilityInfoRequest.js';
import type { AccessibilityInfoResponse as _idb_AccessibilityInfoResponse, AccessibilityInfoResponse__Output as _idb_AccessibilityInfoResponse__Output } from './idb/AccessibilityInfoResponse.js';
import type { AccessibilityQuiescenceRequest as _idb_AccessibilityQuiescenceRequest, AccessibilityQuiescenceRequest__Output as _idb_AccessibilityQuiescenceRequest__Output } from './idb/AccessibilityQuiescenceRequest.js';
import type { AccessibilityQuiescenceResponse as _idb_AccessibilityQuiescenceResponse, AccessibilityQuiescenceResponse__Output as _idb_AccessibilityQuiescenceResponse__Output } from './idb/AccessibilityQuiescenceResponse.js';
import type { AddMediaRequest as _idb_AddMediaRequest, AddMediaRequest__Output as _idb_AddMediaRequest__Output } from './idb/AddMediaRequest.js';
import type { AddMediaResponse as _idb_AddMediaResponse, AddMediaResponse__Output as _idb_AddMediaResponse__Output } from './idb/AddMediaResponse.js';
import type { ApproveRequest as _idb_ApproveRequest, ApproveRequest__Output as _idb_ApproveRequest__Output } from './idb/ApproveRequest.js';
import type { ApproveResponse as _idb_ApproveResponse, ApproveResponse__Output as _idb_ApproveResponse__Output } from './idb/ApproveResponse.js';
import type { ClearDeliveredNotificationsRequest as _idb_ClearDeliveredNotificationsRequest, ClearDeliveredNotificationsRequest__Output as _idb_ClearDeliveredNotificationsRequest__Output } from './idb/ClearDeliveredNotificationsRequest.js';
import type { ClearDeliveredNotificationsResponse as _idb_ClearDeliveredNotificationsResponse, ClearDeliveredNotificationsResponse__Output as _idb_ClearDeliveredNotificationsResponse__Output } from './idb/ClearDeliveredNotificationsResponse.js';
import type { ClearKeychainRequest as _idb_ClearKeychainRequest, ClearKeychainRequest__Output as _idb_ClearKeychainRequest__Output } from './idb/ClearKeychainRequest.js';
import type { ClearKeychainResponse as _idb_ClearKeychainResponse, ClearKeychainResponse__Output as _idb_ClearKeychainResponse__Output } from './idb/ClearKeychainResponse.js';
import type { CompanionInfo as _idb_CompanionInfo, CompanionInfo__Output as _idb_CompanionInfo__Output } from './idb/CompanionInfo.js';
import type { CompanionServiceClient as _idb_CompanionServiceClient, CompanionServiceDefinition as _idb_CompanionServiceDefinition } from './idb/CompanionService.js';
import type { ConnectRequest as _idb_ConnectRequest, ConnectRequest__Output as _idb_ConnectRequest__Output } from './idb/ConnectRequest.js';
import type { ConnectResponse as _idb_ConnectResponse, ConnectResponse__Output as _idb_ConnectResponse__Output } from './idb/ConnectResponse.js';
import type { ContactsClearRequest as _idb_ContactsClearRequest, ContactsClearRequest__Output as _idb_ContactsClearRequest__Output } from './idb/ContactsClearRequest.js';
import type { ContactsClearResponse as _idb_ContactsClearResponse, ContactsClearResponse__Output as _idb_ContactsClearResponse__Output } from './idb/ContactsClearResponse.js';
import type { ContactsUpdateRequest as _idb_ContactsUpdateRequest, ContactsUpdateRequest__Output as _idb_ContactsUpdateRequest__Output } from './idb/ContactsUpdateRequest.js';
import type { ContactsUpdateResponse as _idb_ContactsUpdateResponse, ContactsUpdateResponse__Output as _idb_ContactsUpdateResponse__Output } from './idb/ContactsUpdateResponse.js';
import type { CrashLogInfo as _idb_CrashLogInfo, CrashLogInfo__Output as _idb_CrashLogInfo__Output } from './idb/CrashLogInfo.js';
import type { CrashLogQuery as _idb_CrashLogQuery, CrashLogQuery__Output as _idb_CrashLogQuery__Output } from './idb/CrashLogQuery.js';
import type { CrashLogResponse as _idb_CrashLogResponse, CrashLogResponse__Output as _idb_CrashLogResponse__Output } from './idb/CrashLogResponse.js';
import type { CrashShowRequest as _idb_CrashShowRequest, CrashShowRequest__Output as _idb_CrashShowRequest__Output } from './idb/CrashShowRequest.js';
import type { CrashShowResponse as _idb_CrashShowResponse, CrashShowResponse__Output as _idb_CrashShowResponse__Output } from './idb/CrashShowResponse.js';
import type { DapRequest as _idb_DapRequest, DapRequest__Output as _idb_DapRequest__Output } from './idb/DapRequest.js';
import type { DapResponse as _idb_DapResponse, DapResponse__Output as _idb_DapResponse__Output } from './idb/DapResponse.js';
import type { DebugServerRequest as _idb_DebugServerRequest, DebugServerRequest__Output as _idb_DebugServerRequest__Output } from './idb/DebugServerRequest.js';
import type { DebugServerResponse as _idb_DebugServerResponse, DebugServerResponse__Output as _idb_DebugServerResponse__Output } from './idb/DebugServerResponse.js';
import type { DebuggerInfo as _idb_DebuggerInfo, DebuggerInfo__Output as _idb_DebuggerInfo__Output } from './idb/DebuggerInfo.js';
import type { DeliveredNotification as _idb_DeliveredNotification, DeliveredNotification__Output as _idb_DeliveredNotification__Output } from './idb/DeliveredNotification.js';
import type { DeliveredNotificationsRequest as _idb_DeliveredNotificationsRequest, DeliveredNotificationsRequest__Output as _idb_DeliveredNotificationsRequest__Output } from './idb/DeliveredNotificationsRequest.js';
import type { DeliveredNotificationsResponse as _idb_DeliveredNotificationsResponse, DeliveredNotificationsResponse__Output as _idb_DeliveredNotificationsResponse__Output } from './idb/DeliveredNotificationsResponse.js';
import type { Display as _idb_Display, Display__Output as _idb_Display__Output } from './idb/Display.js';
import type { FileContainer as _idb_FileContainer, FileContainer__Output as _idb_FileContainer__Output } from './idb/FileContainer.js';
import type { FileInfo as _idb_FileInfo, FileInfo__Output as _idb_FileInfo__Output } from './idb/FileInfo.js';
import type { FileListing as _idb_FileListing, FileListing__Output as _idb_FileListing__Output } from './idb/FileListing.js';
import type { FocusRequest as _idb_FocusRequest, FocusRequest__Output as _idb_FocusRequest__Output } from './idb/FocusRequest.js';
import type { FocusResponse as _idb_FocusResponse, FocusResponse__Output as _idb_FocusResponse__Output } from './idb/FocusResponse.js';
import type { FramebufferDisplay as _idb_FramebufferDisplay, FramebufferDisplay__Output as _idb_FramebufferDisplay__Output } from './idb/FramebufferDisplay.js';
import type { FramebufferDisplays as _idb_FramebufferDisplays, FramebufferDisplays__Output as _idb_FramebufferDisplays__Output } from './idb/FramebufferDisplays.js';
import type { FramebufferInfo as _idb_FramebufferInfo, FramebufferInfo__Output as _idb_FramebufferInfo__Output } from './idb/FramebufferInfo.js';
import type { FramebufferStreamRequest as _idb_FramebufferStreamRequest, FramebufferStreamRequest__Output as _idb_FramebufferStreamRequest__Output } from './idb/FramebufferStreamRequest.js';
import type { FramebufferStreamResponse as _idb_FramebufferStreamResponse, FramebufferStreamResponse__Output as _idb_FramebufferStreamResponse__Output } from './idb/FramebufferStreamResponse.js';
import type { GetOrientationRequest as _idb_GetOrientationRequest, GetOrientationRequest__Output as _idb_GetOrientationRequest__Output } from './idb/GetOrientationRequest.js';
import type { GetOrientationResponse as _idb_GetOrientationResponse, GetOrientationResponse__Output as _idb_GetOrientationResponse__Output } from './idb/GetOrientationResponse.js';
import type { GetSettingRequest as _idb_GetSettingRequest, GetSettingRequest__Output as _idb_GetSettingRequest__Output } from './idb/GetSettingRequest.js';
import type { GetSettingResponse as _idb_GetSettingResponse, GetSettingResponse__Output as _idb_GetSettingResponse__Output } from './idb/GetSettingResponse.js';
import type { HIDEvent as _idb_HIDEvent, HIDEvent__Output as _idb_HIDEvent__Output } from './idb/HIDEvent.js';
import type { HIDResponse as _idb_HIDResponse, HIDResponse__Output as _idb_HIDResponse__Output } from './idb/HIDResponse.js';
import type { HingeAngleRequest as _idb_HingeAngleRequest, HingeAngleRequest__Output as _idb_HingeAngleRequest__Output } from './idb/HingeAngleRequest.js';
import type { HingeAngleResponse as _idb_HingeAngleResponse, HingeAngleResponse__Output as _idb_HingeAngleResponse__Output } from './idb/HingeAngleResponse.js';
import type { InjectAudioRequest as _idb_InjectAudioRequest, InjectAudioRequest__Output as _idb_InjectAudioRequest__Output } from './idb/InjectAudioRequest.js';
import type { InjectAudioResponse as _idb_InjectAudioResponse, InjectAudioResponse__Output as _idb_InjectAudioResponse__Output } from './idb/InjectAudioResponse.js';
import type { InstallRequest as _idb_InstallRequest, InstallRequest__Output as _idb_InstallRequest__Output } from './idb/InstallRequest.js';
import type { InstallResponse as _idb_InstallResponse, InstallResponse__Output as _idb_InstallResponse__Output } from './idb/InstallResponse.js';
import type { InstalledAppInfo as _idb_InstalledAppInfo, InstalledAppInfo__Output as _idb_InstalledAppInfo__Output } from './idb/InstalledAppInfo.js';
import type { InstrumentsRunRequest as _idb_InstrumentsRunRequest, InstrumentsRunRequest__Output as _idb_InstrumentsRunRequest__Output } from './idb/InstrumentsRunRequest.js';
import type { InstrumentsRunResponse as _idb_InstrumentsRunResponse, InstrumentsRunResponse__Output as _idb_InstrumentsRunResponse__Output } from './idb/InstrumentsRunResponse.js';
import type { LaunchRequest as _idb_LaunchRequest, LaunchRequest__Output as _idb_LaunchRequest__Output } from './idb/LaunchRequest.js';
import type { LaunchResponse as _idb_LaunchResponse, LaunchResponse__Output as _idb_LaunchResponse__Output } from './idb/LaunchResponse.js';
import type { ListAppsRequest as _idb_ListAppsRequest, ListAppsRequest__Output as _idb_ListAppsRequest__Output } from './idb/ListAppsRequest.js';
import type { ListAppsResponse as _idb_ListAppsResponse, ListAppsResponse__Output as _idb_ListAppsResponse__Output } from './idb/ListAppsResponse.js';
import type { ListSettingRequest as _idb_ListSettingRequest, ListSettingRequest__Output as _idb_ListSettingRequest__Output } from './idb/ListSettingRequest.js';
import type { ListSettingResponse as _idb_ListSettingResponse, ListSettingResponse__Output as _idb_ListSettingResponse__Output } from './idb/ListSettingResponse.js';
import type { Location as _idb_Location, Location__Output as _idb_Location__Output } from './idb/Location.js';
import type { LogRequest as _idb_LogRequest, LogRequest__Output as _idb_LogRequest__Output } from './idb/LogRequest.js';
import type { LogResponse as _idb_LogResponse, LogResponse__Output as _idb_LogResponse__Output } from './idb/LogResponse.js';
import type { LsRequest as _idb_LsRequest, LsRequest__Output as _idb_LsRequest__Output } from './idb/LsRequest.js';
import type { LsResponse as _idb_LsResponse, LsResponse__Output as _idb_LsResponse__Output } from './idb/LsResponse.js';
import type { MkdirRequest as _idb_MkdirRequest, MkdirRequest__Output as _idb_MkdirRequest__Output } from './idb/MkdirRequest.js';
import type { MkdirResponse as _idb_MkdirResponse, MkdirResponse__Output as _idb_MkdirResponse__Output } from './idb/MkdirResponse.js';
import type { MvRequest as _idb_MvRequest, MvRequest__Output as _idb_MvRequest__Output } from './idb/MvRequest.js';
import type { MvResponse as _idb_MvResponse, MvResponse__Output as _idb_MvResponse__Output } from './idb/MvResponse.js';
import type { OpenUrlRequest as _idb_OpenUrlRequest, OpenUrlRequest__Output as _idb_OpenUrlRequest__Output } from './idb/OpenUrlRequest.js';
import type { OpenUrlResponse as _idb_OpenUrlResponse, OpenUrlResponse__Output as _idb_OpenUrlResponse__Output } from './idb/OpenUrlResponse.js';
import type { Payload as _idb_Payload, Payload__Output as _idb_Payload__Output } from './idb/Payload.js';
import type { PhotosClearRequest as _idb_PhotosClearRequest, PhotosClearRequest__Output as _idb_PhotosClearRequest__Output } from './idb/PhotosClearRequest.js';
import type { PhotosClearResponse as _idb_PhotosClearResponse, PhotosClearResponse__Output as _idb_PhotosClearResponse__Output } from './idb/PhotosClearResponse.js';
import type { Point as _idb_Point, Point__Output as _idb_Point__Output } from './idb/Point.js';
import type { ProcessOutput as _idb_ProcessOutput, ProcessOutput__Output as _idb_ProcessOutput__Output } from './idb/ProcessOutput.js';
import type { PullRequest as _idb_PullRequest, PullRequest__Output as _idb_PullRequest__Output } from './idb/PullRequest.js';
import type { PullResponse as _idb_PullResponse, PullResponse__Output as _idb_PullResponse__Output } from './idb/PullResponse.js';
import type { PushRequest as _idb_PushRequest, PushRequest__Output as _idb_PushRequest__Output } from './idb/PushRequest.js';
import type { PushResponse as _idb_PushResponse, PushResponse__Output as _idb_PushResponse__Output } from './idb/PushResponse.js';
import type { RecordRequest as _idb_RecordRequest, RecordRequest__Output as _idb_RecordRequest__Output } from './idb/RecordRequest.js';
import type { RecordResponse as _idb_RecordResponse, RecordResponse__Output as _idb_RecordResponse__Output } from './idb/RecordResponse.js';
import type { ReplRequest as _idb_ReplRequest, ReplRequest__Output as _idb_ReplRequest__Output } from './idb/ReplRequest.js';
import type { ReplResponse as _idb_ReplResponse, ReplResponse__Output as _idb_ReplResponse__Output } from './idb/ReplResponse.js';
import type { RevokeRequest as _idb_RevokeRequest, RevokeRequest__Output as _idb_RevokeRequest__Output } from './idb/RevokeRequest.js';
import type { RevokeResponse as _idb_RevokeResponse, RevokeResponse__Output as _idb_RevokeResponse__Output } from './idb/RevokeResponse.js';
import type { RmRequest as _idb_RmRequest, RmRequest__Output as _idb_RmRequest__Output } from './idb/RmRequest.js';
import type { RmResponse as _idb_RmResponse, RmResponse__Output as _idb_RmResponse__Output } from './idb/RmResponse.js';
import type { ScreenDimensions as _idb_ScreenDimensions, ScreenDimensions__Output as _idb_ScreenDimensions__Output } from './idb/ScreenDimensions.js';
import type { ScreenshotRequest as _idb_ScreenshotRequest, ScreenshotRequest__Output as _idb_ScreenshotRequest__Output } from './idb/ScreenshotRequest.js';
import type { ScreenshotResponse as _idb_ScreenshotResponse, ScreenshotResponse__Output as _idb_ScreenshotResponse__Output } from './idb/ScreenshotResponse.js';
import type { SendNotificationRequest as _idb_SendNotificationRequest, SendNotificationRequest__Output as _idb_SendNotificationRequest__Output } from './idb/SendNotificationRequest.js';
import type { SendNotificationResponse as _idb_SendNotificationResponse, SendNotificationResponse__Output as _idb_SendNotificationResponse__Output } from './idb/SendNotificationResponse.js';
import type { SetLocationRequest as _idb_SetLocationRequest, SetLocationRequest__Output as _idb_SetLocationRequest__Output } from './idb/SetLocationRequest.js';
import type { SetLocationResponse as _idb_SetLocationResponse, SetLocationResponse__Output as _idb_SetLocationResponse__Output } from './idb/SetLocationResponse.js';
import type { SetOrientationRequest as _idb_SetOrientationRequest, SetOrientationRequest__Output as _idb_SetOrientationRequest__Output } from './idb/SetOrientationRequest.js';
import type { SetOrientationResponse as _idb_SetOrientationResponse, SetOrientationResponse__Output as _idb_SetOrientationResponse__Output } from './idb/SetOrientationResponse.js';
import type { SettingRequest as _idb_SettingRequest, SettingRequest__Output as _idb_SettingRequest__Output } from './idb/SettingRequest.js';
import type { SettingResponse as _idb_SettingResponse, SettingResponse__Output as _idb_SettingResponse__Output } from './idb/SettingResponse.js';
import type { SimulateMemoryWarningRequest as _idb_SimulateMemoryWarningRequest, SimulateMemoryWarningRequest__Output as _idb_SimulateMemoryWarningRequest__Output } from './idb/SimulateMemoryWarningRequest.js';
import type { SimulateMemoryWarningResponse as _idb_SimulateMemoryWarningResponse, SimulateMemoryWarningResponse__Output as _idb_SimulateMemoryWarningResponse__Output } from './idb/SimulateMemoryWarningResponse.js';
import type { TailRequest as _idb_TailRequest, TailRequest__Output as _idb_TailRequest__Output } from './idb/TailRequest.js';
import type { TailResponse as _idb_TailResponse, TailResponse__Output as _idb_TailResponse__Output } from './idb/TailResponse.js';
import type { TargetDescription as _idb_TargetDescription, TargetDescription__Output as _idb_TargetDescription__Output } from './idb/TargetDescription.js';
import type { TargetDescriptionRequest as _idb_TargetDescriptionRequest, TargetDescriptionRequest__Output as _idb_TargetDescriptionRequest__Output } from './idb/TargetDescriptionRequest.js';
import type { TargetDescriptionResponse as _idb_TargetDescriptionResponse, TargetDescriptionResponse__Output as _idb_TargetDescriptionResponse__Output } from './idb/TargetDescriptionResponse.js';
import type { TerminateRequest as _idb_TerminateRequest, TerminateRequest__Output as _idb_TerminateRequest__Output } from './idb/TerminateRequest.js';
import type { TerminateResponse as _idb_TerminateResponse, TerminateResponse__Output as _idb_TerminateResponse__Output } from './idb/TerminateResponse.js';
import type { UninstallRequest as _idb_UninstallRequest, UninstallRequest__Output as _idb_UninstallRequest__Output } from './idb/UninstallRequest.js';
import type { UninstallResponse as _idb_UninstallResponse, UninstallResponse__Output as _idb_UninstallResponse__Output } from './idb/UninstallResponse.js';
import type { VideoStreamRequest as _idb_VideoStreamRequest, VideoStreamRequest__Output as _idb_VideoStreamRequest__Output } from './idb/VideoStreamRequest.js';
import type { VideoStreamResponse as _idb_VideoStreamResponse, VideoStreamResponse__Output as _idb_VideoStreamResponse__Output } from './idb/VideoStreamResponse.js';
import type { XctestListBundlesRequest as _idb_XctestListBundlesRequest, XctestListBundlesRequest__Output as _idb_XctestListBundlesRequest__Output } from './idb/XctestListBundlesRequest.js';
import type { XctestListBundlesResponse as _idb_XctestListBundlesResponse, XctestListBundlesResponse__Output as _idb_XctestListBundlesResponse__Output } from './idb/XctestListBundlesResponse.js';
import type { XctestListTestsRequest as _idb_XctestListTestsRequest, XctestListTestsRequest__Output as _idb_XctestListTestsRequest__Output } from './idb/XctestListTestsRequest.js';
import type { XctestListTestsResponse as _idb_XctestListTestsResponse, XctestListTestsResponse__Output as _idb_XctestListTestsResponse__Output } from './idb/XctestListTestsResponse.js';
import type { XctestRunRequest as _idb_XctestRunRequest, XctestRunRequest__Output as _idb_XctestRunRequest__Output } from './idb/XctestRunRequest.js';
import type { XctestRunResponse as _idb_XctestRunResponse, XctestRunResponse__Output as _idb_XctestRunResponse__Output } from './idb/XctestRunResponse.js';
import type { XctraceRecordRequest as _idb_XctraceRecordRequest, XctraceRecordRequest__Output as _idb_XctraceRecordRequest__Output } from './idb/XctraceRecordRequest.js';
import type { XctraceRecordResponse as _idb_XctraceRecordResponse, XctraceRecordResponse__Output as _idb_XctraceRecordResponse__Output } from './idb/XctraceRecordResponse.js';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  idb: {
    AccessibilityActionRequest: MessageTypeDefinition<_idb_AccessibilityActionRequest, _idb_AccessibilityActionRequest__Output>
    AccessibilityActionResponse: MessageTypeDefinition<_idb_AccessibilityActionResponse, _idb_AccessibilityActionResponse__Output>
    AccessibilityInfoRequest: MessageTypeDefinition<_idb_AccessibilityInfoRequest, _idb_AccessibilityInfoRequest__Output>
    AccessibilityInfoResponse: MessageTypeDefinition<_idb_AccessibilityInfoResponse, _idb_AccessibilityInfoResponse__Output>
    AccessibilityQuiescenceRequest: MessageTypeDefinition<_idb_AccessibilityQuiescenceRequest, _idb_AccessibilityQuiescenceRequest__Output>
    AccessibilityQuiescenceResponse: MessageTypeDefinition<_idb_AccessibilityQuiescenceResponse, _idb_AccessibilityQuiescenceResponse__Output>
    AddMediaRequest: MessageTypeDefinition<_idb_AddMediaRequest, _idb_AddMediaRequest__Output>
    AddMediaResponse: MessageTypeDefinition<_idb_AddMediaResponse, _idb_AddMediaResponse__Output>
    ApproveRequest: MessageTypeDefinition<_idb_ApproveRequest, _idb_ApproveRequest__Output>
    ApproveResponse: MessageTypeDefinition<_idb_ApproveResponse, _idb_ApproveResponse__Output>
    ClearDeliveredNotificationsRequest: MessageTypeDefinition<_idb_ClearDeliveredNotificationsRequest, _idb_ClearDeliveredNotificationsRequest__Output>
    ClearDeliveredNotificationsResponse: MessageTypeDefinition<_idb_ClearDeliveredNotificationsResponse, _idb_ClearDeliveredNotificationsResponse__Output>
    ClearKeychainRequest: MessageTypeDefinition<_idb_ClearKeychainRequest, _idb_ClearKeychainRequest__Output>
    ClearKeychainResponse: MessageTypeDefinition<_idb_ClearKeychainResponse, _idb_ClearKeychainResponse__Output>
    CompanionInfo: MessageTypeDefinition<_idb_CompanionInfo, _idb_CompanionInfo__Output>
    CompanionService: SubtypeConstructor<typeof grpc.Client, _idb_CompanionServiceClient> & { service: _idb_CompanionServiceDefinition }
    ConnectRequest: MessageTypeDefinition<_idb_ConnectRequest, _idb_ConnectRequest__Output>
    ConnectResponse: MessageTypeDefinition<_idb_ConnectResponse, _idb_ConnectResponse__Output>
    ContactsClearRequest: MessageTypeDefinition<_idb_ContactsClearRequest, _idb_ContactsClearRequest__Output>
    ContactsClearResponse: MessageTypeDefinition<_idb_ContactsClearResponse, _idb_ContactsClearResponse__Output>
    ContactsUpdateRequest: MessageTypeDefinition<_idb_ContactsUpdateRequest, _idb_ContactsUpdateRequest__Output>
    ContactsUpdateResponse: MessageTypeDefinition<_idb_ContactsUpdateResponse, _idb_ContactsUpdateResponse__Output>
    CrashLogInfo: MessageTypeDefinition<_idb_CrashLogInfo, _idb_CrashLogInfo__Output>
    CrashLogQuery: MessageTypeDefinition<_idb_CrashLogQuery, _idb_CrashLogQuery__Output>
    CrashLogResponse: MessageTypeDefinition<_idb_CrashLogResponse, _idb_CrashLogResponse__Output>
    CrashShowRequest: MessageTypeDefinition<_idb_CrashShowRequest, _idb_CrashShowRequest__Output>
    CrashShowResponse: MessageTypeDefinition<_idb_CrashShowResponse, _idb_CrashShowResponse__Output>
    DapRequest: MessageTypeDefinition<_idb_DapRequest, _idb_DapRequest__Output>
    DapResponse: MessageTypeDefinition<_idb_DapResponse, _idb_DapResponse__Output>
    DebugServerRequest: MessageTypeDefinition<_idb_DebugServerRequest, _idb_DebugServerRequest__Output>
    DebugServerResponse: MessageTypeDefinition<_idb_DebugServerResponse, _idb_DebugServerResponse__Output>
    DebuggerInfo: MessageTypeDefinition<_idb_DebuggerInfo, _idb_DebuggerInfo__Output>
    DeliveredNotification: MessageTypeDefinition<_idb_DeliveredNotification, _idb_DeliveredNotification__Output>
    DeliveredNotificationsRequest: MessageTypeDefinition<_idb_DeliveredNotificationsRequest, _idb_DeliveredNotificationsRequest__Output>
    DeliveredNotificationsResponse: MessageTypeDefinition<_idb_DeliveredNotificationsResponse, _idb_DeliveredNotificationsResponse__Output>
    Display: MessageTypeDefinition<_idb_Display, _idb_Display__Output>
    DisplayRotation: EnumTypeDefinition
    FileContainer: MessageTypeDefinition<_idb_FileContainer, _idb_FileContainer__Output>
    FileInfo: MessageTypeDefinition<_idb_FileInfo, _idb_FileInfo__Output>
    FileListing: MessageTypeDefinition<_idb_FileListing, _idb_FileListing__Output>
    FocusRequest: MessageTypeDefinition<_idb_FocusRequest, _idb_FocusRequest__Output>
    FocusResponse: MessageTypeDefinition<_idb_FocusResponse, _idb_FocusResponse__Output>
    FramebufferDisplay: MessageTypeDefinition<_idb_FramebufferDisplay, _idb_FramebufferDisplay__Output>
    FramebufferDisplays: MessageTypeDefinition<_idb_FramebufferDisplays, _idb_FramebufferDisplays__Output>
    FramebufferInfo: MessageTypeDefinition<_idb_FramebufferInfo, _idb_FramebufferInfo__Output>
    FramebufferStreamRequest: MessageTypeDefinition<_idb_FramebufferStreamRequest, _idb_FramebufferStreamRequest__Output>
    FramebufferStreamResponse: MessageTypeDefinition<_idb_FramebufferStreamResponse, _idb_FramebufferStreamResponse__Output>
    GetOrientationRequest: MessageTypeDefinition<_idb_GetOrientationRequest, _idb_GetOrientationRequest__Output>
    GetOrientationResponse: MessageTypeDefinition<_idb_GetOrientationResponse, _idb_GetOrientationResponse__Output>
    GetSettingRequest: MessageTypeDefinition<_idb_GetSettingRequest, _idb_GetSettingRequest__Output>
    GetSettingResponse: MessageTypeDefinition<_idb_GetSettingResponse, _idb_GetSettingResponse__Output>
    HIDEvent: MessageTypeDefinition<_idb_HIDEvent, _idb_HIDEvent__Output>
    HIDResponse: MessageTypeDefinition<_idb_HIDResponse, _idb_HIDResponse__Output>
    HingeAngleRequest: MessageTypeDefinition<_idb_HingeAngleRequest, _idb_HingeAngleRequest__Output>
    HingeAngleResponse: MessageTypeDefinition<_idb_HingeAngleResponse, _idb_HingeAngleResponse__Output>
    InjectAudioRequest: MessageTypeDefinition<_idb_InjectAudioRequest, _idb_InjectAudioRequest__Output>
    InjectAudioResponse: MessageTypeDefinition<_idb_InjectAudioResponse, _idb_InjectAudioResponse__Output>
    InstallRequest: MessageTypeDefinition<_idb_InstallRequest, _idb_InstallRequest__Output>
    InstallResponse: MessageTypeDefinition<_idb_InstallResponse, _idb_InstallResponse__Output>
    InstalledAppInfo: MessageTypeDefinition<_idb_InstalledAppInfo, _idb_InstalledAppInfo__Output>
    InstrumentsRunRequest: MessageTypeDefinition<_idb_InstrumentsRunRequest, _idb_InstrumentsRunRequest__Output>
    InstrumentsRunResponse: MessageTypeDefinition<_idb_InstrumentsRunResponse, _idb_InstrumentsRunResponse__Output>
    LaunchRequest: MessageTypeDefinition<_idb_LaunchRequest, _idb_LaunchRequest__Output>
    LaunchResponse: MessageTypeDefinition<_idb_LaunchResponse, _idb_LaunchResponse__Output>
    ListAppsRequest: MessageTypeDefinition<_idb_ListAppsRequest, _idb_ListAppsRequest__Output>
    ListAppsResponse: MessageTypeDefinition<_idb_ListAppsResponse, _idb_ListAppsResponse__Output>
    ListSettingRequest: MessageTypeDefinition<_idb_ListSettingRequest, _idb_ListSettingRequest__Output>
    ListSettingResponse: MessageTypeDefinition<_idb_ListSettingResponse, _idb_ListSettingResponse__Output>
    Location: MessageTypeDefinition<_idb_Location, _idb_Location__Output>
    LogRequest: MessageTypeDefinition<_idb_LogRequest, _idb_LogRequest__Output>
    LogResponse: MessageTypeDefinition<_idb_LogResponse, _idb_LogResponse__Output>
    LsRequest: MessageTypeDefinition<_idb_LsRequest, _idb_LsRequest__Output>
    LsResponse: MessageTypeDefinition<_idb_LsResponse, _idb_LsResponse__Output>
    MkdirRequest: MessageTypeDefinition<_idb_MkdirRequest, _idb_MkdirRequest__Output>
    MkdirResponse: MessageTypeDefinition<_idb_MkdirResponse, _idb_MkdirResponse__Output>
    MvRequest: MessageTypeDefinition<_idb_MvRequest, _idb_MvRequest__Output>
    MvResponse: MessageTypeDefinition<_idb_MvResponse, _idb_MvResponse__Output>
    OpenUrlRequest: MessageTypeDefinition<_idb_OpenUrlRequest, _idb_OpenUrlRequest__Output>
    OpenUrlResponse: MessageTypeDefinition<_idb_OpenUrlResponse, _idb_OpenUrlResponse__Output>
    Payload: MessageTypeDefinition<_idb_Payload, _idb_Payload__Output>
    PhotosClearRequest: MessageTypeDefinition<_idb_PhotosClearRequest, _idb_PhotosClearRequest__Output>
    PhotosClearResponse: MessageTypeDefinition<_idb_PhotosClearResponse, _idb_PhotosClearResponse__Output>
    Point: MessageTypeDefinition<_idb_Point, _idb_Point__Output>
    ProcessOutput: MessageTypeDefinition<_idb_ProcessOutput, _idb_ProcessOutput__Output>
    PullRequest: MessageTypeDefinition<_idb_PullRequest, _idb_PullRequest__Output>
    PullResponse: MessageTypeDefinition<_idb_PullResponse, _idb_PullResponse__Output>
    PushRequest: MessageTypeDefinition<_idb_PushRequest, _idb_PushRequest__Output>
    PushResponse: MessageTypeDefinition<_idb_PushResponse, _idb_PushResponse__Output>
    RecordRequest: MessageTypeDefinition<_idb_RecordRequest, _idb_RecordRequest__Output>
    RecordResponse: MessageTypeDefinition<_idb_RecordResponse, _idb_RecordResponse__Output>
    ReplRequest: MessageTypeDefinition<_idb_ReplRequest, _idb_ReplRequest__Output>
    ReplResponse: MessageTypeDefinition<_idb_ReplResponse, _idb_ReplResponse__Output>
    RevokeRequest: MessageTypeDefinition<_idb_RevokeRequest, _idb_RevokeRequest__Output>
    RevokeResponse: MessageTypeDefinition<_idb_RevokeResponse, _idb_RevokeResponse__Output>
    RmRequest: MessageTypeDefinition<_idb_RmRequest, _idb_RmRequest__Output>
    RmResponse: MessageTypeDefinition<_idb_RmResponse, _idb_RmResponse__Output>
    ScreenDimensions: MessageTypeDefinition<_idb_ScreenDimensions, _idb_ScreenDimensions__Output>
    ScreenshotRequest: MessageTypeDefinition<_idb_ScreenshotRequest, _idb_ScreenshotRequest__Output>
    ScreenshotResponse: MessageTypeDefinition<_idb_ScreenshotResponse, _idb_ScreenshotResponse__Output>
    SendNotificationRequest: MessageTypeDefinition<_idb_SendNotificationRequest, _idb_SendNotificationRequest__Output>
    SendNotificationResponse: MessageTypeDefinition<_idb_SendNotificationResponse, _idb_SendNotificationResponse__Output>
    SetLocationRequest: MessageTypeDefinition<_idb_SetLocationRequest, _idb_SetLocationRequest__Output>
    SetLocationResponse: MessageTypeDefinition<_idb_SetLocationResponse, _idb_SetLocationResponse__Output>
    SetOrientationRequest: MessageTypeDefinition<_idb_SetOrientationRequest, _idb_SetOrientationRequest__Output>
    SetOrientationResponse: MessageTypeDefinition<_idb_SetOrientationResponse, _idb_SetOrientationResponse__Output>
    Setting: EnumTypeDefinition
    SettingRequest: MessageTypeDefinition<_idb_SettingRequest, _idb_SettingRequest__Output>
    SettingResponse: MessageTypeDefinition<_idb_SettingResponse, _idb_SettingResponse__Output>
    SimulateMemoryWarningRequest: MessageTypeDefinition<_idb_SimulateMemoryWarningRequest, _idb_SimulateMemoryWarningRequest__Output>
    SimulateMemoryWarningResponse: MessageTypeDefinition<_idb_SimulateMemoryWarningResponse, _idb_SimulateMemoryWarningResponse__Output>
    TailRequest: MessageTypeDefinition<_idb_TailRequest, _idb_TailRequest__Output>
    TailResponse: MessageTypeDefinition<_idb_TailResponse, _idb_TailResponse__Output>
    TargetDescription: MessageTypeDefinition<_idb_TargetDescription, _idb_TargetDescription__Output>
    TargetDescriptionRequest: MessageTypeDefinition<_idb_TargetDescriptionRequest, _idb_TargetDescriptionRequest__Output>
    TargetDescriptionResponse: MessageTypeDefinition<_idb_TargetDescriptionResponse, _idb_TargetDescriptionResponse__Output>
    TerminateRequest: MessageTypeDefinition<_idb_TerminateRequest, _idb_TerminateRequest__Output>
    TerminateResponse: MessageTypeDefinition<_idb_TerminateResponse, _idb_TerminateResponse__Output>
    UninstallRequest: MessageTypeDefinition<_idb_UninstallRequest, _idb_UninstallRequest__Output>
    UninstallResponse: MessageTypeDefinition<_idb_UninstallResponse, _idb_UninstallResponse__Output>
    VideoStreamRequest: MessageTypeDefinition<_idb_VideoStreamRequest, _idb_VideoStreamRequest__Output>
    VideoStreamResponse: MessageTypeDefinition<_idb_VideoStreamResponse, _idb_VideoStreamResponse__Output>
    XctestListBundlesRequest: MessageTypeDefinition<_idb_XctestListBundlesRequest, _idb_XctestListBundlesRequest__Output>
    XctestListBundlesResponse: MessageTypeDefinition<_idb_XctestListBundlesResponse, _idb_XctestListBundlesResponse__Output>
    XctestListTestsRequest: MessageTypeDefinition<_idb_XctestListTestsRequest, _idb_XctestListTestsRequest__Output>
    XctestListTestsResponse: MessageTypeDefinition<_idb_XctestListTestsResponse, _idb_XctestListTestsResponse__Output>
    XctestRunRequest: MessageTypeDefinition<_idb_XctestRunRequest, _idb_XctestRunRequest__Output>
    XctestRunResponse: MessageTypeDefinition<_idb_XctestRunResponse, _idb_XctestRunResponse__Output>
    XctraceRecordRequest: MessageTypeDefinition<_idb_XctraceRecordRequest, _idb_XctraceRecordRequest__Output>
    XctraceRecordResponse: MessageTypeDefinition<_idb_XctraceRecordResponse, _idb_XctraceRecordResponse__Output>
  }
}

