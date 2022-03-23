declare global {
    interface Window {
      ZOHO: ZDK;
    }
}

export interface EmbeddedAppData {
    Entity: string
    EntityId: string
}
export type EmbeddedAppEvent = 'DialerActive' | 'Dial' | 'PageLoad'
export type EmbeddedAppCallback = (data: EmbeddedAppData) => void
export type EmbeddedAppListener = (
    event: EmbeddedAppEvent,
    callback: EmbeddedAppCallback
) => void

export interface EmbeddedApp {
    on: EmbeddedAppListener
    init: () => void
}
export interface ZDK {
    embeddedApp: EmbeddedApp
    CRM: CRM
}

export interface CRM {
    API: API
    BLUEPRINT: BLUEPRINT
    CONFIG: CONFIG
    CONNECTION: CONNECTION
    CONNECTOR: CONNECTOR
    FUNCTIONS: FUNCTIONS
    HTTP: HTTP
    META: META
    UI: UI
    WIZARD: WIZARD
}

export type Code = 'SUCCESS' | 'SYNTAX_ERROR'
export interface Response {
    code: Code
    message: string
    status: string
    details: {
        Created_By?: {
            id: string
            name: string
        }
        Created_Time?: Date
        Modified_By?: {
            id: string
            name: string
        }
        Modified_Time?: Date
        id: string
    }
}
export interface ResponseInfo {
    per_page: number
    count: number
    page: number
    more_records: boolean
}
export interface ResponseActions {
    actions: any[]
}
export interface ResponseProfiles {
    profiles: any[]
}
export interface ResponseUsers {
    users: any[]
    info: ResponseInfo
}
export interface ResponseRecords {
    data: any[]
    info: ResponseInfo
}
export interface ResponseBluePrint {
    blueprint: {
        process_info: any
        transitions: any[]
    }
}

export type Trigger = '' | 'workflow' | 'approval' | 'blueprint'
export type SortOrder = 'asc' | 'desc'
export type TypeUsers =
    | 'AllUsers'
    | 'ActiveUsers'
    | 'DeactiveUsers'
    | 'ConfirmedUsers'
    | 'NotConfirmedUsers'
    | 'DeletedUsers'
    | 'ActiveConfirmedUsers'
    | 'AdminUsers'
    | 'ActiveConfirmedAdmins'
export type TypeApprovalRecords = 'awaiting' | 'others_awaiting'
export interface Page {
    page?: string
    per_page?: string
}
export interface Config {
    Entity: string
    RecordID: string
}
export interface AddNoteConfig extends Config {
    Title: string
    Content: string
}
export interface ApproveRecordConfig extends Config {
    actionType: 'approve' | 'delegate' | 'resubmit' | 'reject'
    comments?: string
    user?: string
}
export interface AttachFileConfig extends Config {
    File: {
        Name: string
        Content: any
    }
}
export interface DelinkRelatedRecordConfig extends Config {
    RelatedListName: string
    RelatedRecordID: string
}
export interface GetAllRecordsConfig extends Page {
    Entity: string
    sort_order?: SortOrder
    converted?: string
    approved?: string
}
export interface GetAllUsersConfig extends Page {
    Type: TypeUsers
}
export interface GetApprovalByIdConfig {
    id: string
}
export interface GetApprovalRecordsConfig {
    type: TypeApprovalRecords
}
export interface GetFileConfig {
    id: string
}
export interface GetProfileConfig {
    ID: string
}
export interface GetRelatedRecordsConfig extends Page, Config {
    RelatedListName?: string
}
export interface GetUserConfig {
    ID: string
}
export interface InsertRecordConfig {
    Entity: string
    APIData: any
    Trigger: [Trigger]
}
export interface SearchRecordConfig extends Page {
    config: {
        Entity: string
        Type: 'email' | 'phone' | 'word' | 'criteria'
        Query: string
        delay: boolean
    }
}
export interface UpdateBluePrintConfig extends Config {
    BlueprintData: any
}
export interface UpdateProfileConfig {
    ID: any
    APIData: any
}
export interface UpdateRecordConfig extends Config {
    APIData: any
    Trigger: [Trigger]
}
export interface UpdateRelatedRecordsConfig extends Config {
    APIData: any
    RelatedListName: string
    RelatedRecordID: string
}
export interface UpsertRecordConfig extends Config {
    Trigger: [Trigger]
    APIData: any
    duplicate_check_fields: any
}
export interface API {
    addNotes: (config: AddNoteConfig) => Promise<Response>
    approveRecord: (config: ApproveRecordConfig) => Promise<Response>
    attachFile: (config: AttachFileConfig) => Promise<Response>
    deleteRecord: (config: Config) => Promise<Response>
    delinkRelatedRecord: (
        config: DelinkRelatedRecordConfig
    ) => Promise<Response>
    getAllActions: (config: Config) => Promise<ResponseActions>
    getAllProfiles: () => Promise<ResponseProfiles>
    getAllRecords: (config: GetAllRecordsConfig) => Promise<ResponseRecords>
    getAllUsers: (config: GetAllUsersConfig) => Promise<ResponseUsers>
    getApprovalById: (config: GetApprovalByIdConfig) => Promise<ResponseRecords>
    getApprovalRecords: (
        config: GetApprovalRecordsConfig
    ) => Promise<ResponseRecords>
    getApprovalsHistory: () => Promise<ResponseRecords>
    getBluePrint: (config: Config) => Promise<ResponseBluePrint>
    getFile: (config: GetFileConfig) => Promise<any>
    getOrgVariable: (data: any) => Promise<any>
    getProfile: (config: GetProfileConfig) => Promise<ResponseProfiles>
    getRecord: (config: Config) => Promise<ResponseRecords>
    getRelatedRecords: (
        config: GetRelatedRecordsConfig
    ) => Promise<ResponseRecords>
    getUser: (config: GetUserConfig) => Promise<ResponseUsers>
    insertRecord: (config: InsertRecordConfig) => Promise<ResponseRecords>
    searchRecord: (config: SearchRecordConfig) => Promise<ResponseRecords>
    updateBluePrint: (config: UpdateBluePrintConfig) => Promise<Response>
    updateProfile: (config: Config) => Promise<Response>
    updateRecord: (config: UpdateRecordConfig) => Promise<Response>
    updateRelatedRecords: (
        config: UpdateRelatedRecordsConfig
    ) => Promise<Response>
    uploadFile: (config: any) => Promise<Response>
    upsertRecord: (config: UpsertRecordConfig) => Promise<Response>
}

export interface BLUEPRINT {
    proceed: () => Promise<any>
}

export interface CONFIG {
    getCurrentUser: () => Promise<any>
    getOrgInfo: () => Promise<any>
}

export interface CONNECTION {
    invoke: (conn_name: string, req_data: any) => Promise<Response>
}

export interface DataConnector {
    VARIABLES: any
    CONTENT_TYPE?: any
    PARTS?: any[]
    FILE?: any
}
export interface CONNECTOR {
    authorize: (namespace: string) => Promise<any>
    invokeAPI: (namespace: string, data: DataConnector) => Promise<any>
}
export interface FUNCTIONS {
    execute: (func_name: string, req_data: any) => Promise<Response>
}
export interface Request {
    url: string
    params?: {
        scope?: string
        type?: string
    }
    headers?: {
        Authorization: string
    }
    body?: any
}
export interface HTTP {
    delete: (request: Request) => Promise<any>
    get: (request: Request) => Promise<any>
    patch: (request: Request) => Promise<any>
    post: (request: Request) => Promise<any>
    put: (request: Request) => Promise<any>
}
export interface META {}
export interface UI {
    Resize: (dimensions: { height: number; width: number }) => Promise<boolean>
    Dialer: {
        maximize: () => Promise<boolean>
        minimize: () => Promise<boolean>
        notify: () => Promise<boolean>
    }
    Popup: {
        close: () => Promise<boolean>
        closeReload: () => Promise<boolean>
    }
    Record: {
        create: (data: { Entity: string }) => Promise<boolean>
        edit: (data: Config) => Promise<boolean>
        open: (data: Config) => Promise<boolean>
        populate: (RecordData: any) => Promise<boolean>
    }
    Widget: {
        open: (data: any) => Promise<boolean>
    }
}
export interface WIZARD {
    post: (record_data: any) => Promise<any>
}
