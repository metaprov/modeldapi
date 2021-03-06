import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/team/v1alpha1/generated_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';


export class ListAccountsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListAccountsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListAccountsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListAccountsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAccountsRequest): ListAccountsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAccountsRequest;
  static deserializeBinaryFromReader(message: ListAccountsRequest, reader: jspb.BinaryReader): ListAccountsRequest;
}

export namespace ListAccountsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListAccountsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account>): ListAccountsResponse;
  clearItemsList(): ListAccountsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account, index?: number): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListAccountsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAccountsResponse): ListAccountsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAccountsResponse;
  static deserializeBinaryFromReader(message: ListAccountsResponse, reader: jspb.BinaryReader): ListAccountsResponse;
}

export namespace ListAccountsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account.AsObject>,
    nextPageToken: string,
  }
}

export class GetAccountRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetAccountRequest;

  getName(): string;
  setName(value: string): GetAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAccountRequest): GetAccountRequest.AsObject;
  static serializeBinaryToWriter(message: GetAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAccountRequest;
  static deserializeBinaryFromReader(message: GetAccountRequest, reader: jspb.BinaryReader): GetAccountRequest;
}

export namespace GetAccountRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateAccountRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account): CreateAccountRequest;
  hasItem(): boolean;
  clearItem(): CreateAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAccountRequest): CreateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAccountRequest;
  static deserializeBinaryFromReader(message: CreateAccountRequest, reader: jspb.BinaryReader): CreateAccountRequest;
}

export namespace CreateAccountRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account.AsObject,
  }
}

export class UpdateAccountRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account): UpdateAccountRequest;
  hasItem(): boolean;
  clearItem(): UpdateAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAccountRequest): UpdateAccountRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAccountRequest;
  static deserializeBinaryFromReader(message: UpdateAccountRequest, reader: jspb.BinaryReader): UpdateAccountRequest;
}

export namespace UpdateAccountRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Account.AsObject,
  }
}

export class DeleteAccountRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteAccountRequest;

  getName(): string;
  setName(value: string): DeleteAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAccountRequest): DeleteAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAccountRequest;
  static deserializeBinaryFromReader(message: DeleteAccountRequest, reader: jspb.BinaryReader): DeleteAccountRequest;
}

export namespace DeleteAccountRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListAlertsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListAlertsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListAlertsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListAlertsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAlertsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListAlertsRequest): ListAlertsRequest.AsObject;
  static serializeBinaryToWriter(message: ListAlertsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAlertsRequest;
  static deserializeBinaryFromReader(message: ListAlertsRequest, reader: jspb.BinaryReader): ListAlertsRequest;
}

export namespace ListAlertsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListAlertsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert>): ListAlertsResponse;
  clearItemsList(): ListAlertsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert, index?: number): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListAlertsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListAlertsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListAlertsResponse): ListAlertsResponse.AsObject;
  static serializeBinaryToWriter(message: ListAlertsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListAlertsResponse;
  static deserializeBinaryFromReader(message: ListAlertsResponse, reader: jspb.BinaryReader): ListAlertsResponse;
}

export namespace ListAlertsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.AsObject>,
    nextPageToken: string,
  }
}

export class GetAlertRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetAlertRequest;

  getName(): string;
  setName(value: string): GetAlertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAlertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAlertRequest): GetAlertRequest.AsObject;
  static serializeBinaryToWriter(message: GetAlertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAlertRequest;
  static deserializeBinaryFromReader(message: GetAlertRequest, reader: jspb.BinaryReader): GetAlertRequest;
}

export namespace GetAlertRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateAlertRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert): CreateAlertRequest;
  hasItem(): boolean;
  clearItem(): CreateAlertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateAlertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateAlertRequest): CreateAlertRequest.AsObject;
  static serializeBinaryToWriter(message: CreateAlertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateAlertRequest;
  static deserializeBinaryFromReader(message: CreateAlertRequest, reader: jspb.BinaryReader): CreateAlertRequest;
}

export namespace CreateAlertRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.AsObject,
  }
}

export class UpdateAlertRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert): UpdateAlertRequest;
  hasItem(): boolean;
  clearItem(): UpdateAlertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateAlertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateAlertRequest): UpdateAlertRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateAlertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateAlertRequest;
  static deserializeBinaryFromReader(message: UpdateAlertRequest, reader: jspb.BinaryReader): UpdateAlertRequest;
}

export namespace UpdateAlertRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Alert.AsObject,
  }
}

export class DeleteAlertRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteAlertRequest;

  getName(): string;
  setName(value: string): DeleteAlertRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteAlertRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteAlertRequest): DeleteAlertRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteAlertRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteAlertRequest;
  static deserializeBinaryFromReader(message: DeleteAlertRequest, reader: jspb.BinaryReader): DeleteAlertRequest;
}

export namespace DeleteAlertRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListTaskCardsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListTaskCardsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListTaskCardsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListTaskCardsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTaskCardsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTaskCardsRequest): ListTaskCardsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTaskCardsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTaskCardsRequest;
  static deserializeBinaryFromReader(message: ListTaskCardsRequest, reader: jspb.BinaryReader): ListTaskCardsRequest;
}

export namespace ListTaskCardsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTaskCardsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard>): ListTaskCardsResponse;
  clearItemsList(): ListTaskCardsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard, index?: number): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListTaskCardsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTaskCardsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTaskCardsResponse): ListTaskCardsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTaskCardsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTaskCardsResponse;
  static deserializeBinaryFromReader(message: ListTaskCardsResponse, reader: jspb.BinaryReader): ListTaskCardsResponse;
}

export namespace ListTaskCardsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard.AsObject>,
    nextPageToken: string,
  }
}

export class GetTaskCardRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetTaskCardRequest;

  getName(): string;
  setName(value: string): GetTaskCardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTaskCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTaskCardRequest): GetTaskCardRequest.AsObject;
  static serializeBinaryToWriter(message: GetTaskCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTaskCardRequest;
  static deserializeBinaryFromReader(message: GetTaskCardRequest, reader: jspb.BinaryReader): GetTaskCardRequest;
}

export namespace GetTaskCardRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateTaskCardRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard): CreateTaskCardRequest;
  hasItem(): boolean;
  clearItem(): CreateTaskCardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTaskCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTaskCardRequest): CreateTaskCardRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTaskCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTaskCardRequest;
  static deserializeBinaryFromReader(message: CreateTaskCardRequest, reader: jspb.BinaryReader): CreateTaskCardRequest;
}

export namespace CreateTaskCardRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard.AsObject,
  }
}

export class UpdateTaskCardRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard): UpdateTaskCardRequest;
  hasItem(): boolean;
  clearItem(): UpdateTaskCardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTaskCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTaskCardRequest): UpdateTaskCardRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTaskCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTaskCardRequest;
  static deserializeBinaryFromReader(message: UpdateTaskCardRequest, reader: jspb.BinaryReader): UpdateTaskCardRequest;
}

export namespace UpdateTaskCardRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TaskCard.AsObject,
  }
}

export class DeleteTaskCardRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteTaskCardRequest;

  getName(): string;
  setName(value: string): DeleteTaskCardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTaskCardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTaskCardRequest): DeleteTaskCardRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTaskCardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTaskCardRequest;
  static deserializeBinaryFromReader(message: DeleteTaskCardRequest, reader: jspb.BinaryReader): DeleteTaskCardRequest;
}

export namespace DeleteTaskCardRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListCommitsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListCommitsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCommitsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCommitsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCommitsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCommitsRequest): ListCommitsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCommitsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCommitsRequest;
  static deserializeBinaryFromReader(message: ListCommitsRequest, reader: jspb.BinaryReader): ListCommitsRequest;
}

export namespace ListCommitsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListCommitsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit>): ListCommitsResponse;
  clearItemsList(): ListCommitsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit, index?: number): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCommitsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCommitsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCommitsResponse): ListCommitsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCommitsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCommitsResponse;
  static deserializeBinaryFromReader(message: ListCommitsResponse, reader: jspb.BinaryReader): ListCommitsResponse;
}

export namespace ListCommitsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit.AsObject>,
    nextPageToken: string,
  }
}

export class GetCommitRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetCommitRequest;

  getName(): string;
  setName(value: string): GetCommitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCommitRequest): GetCommitRequest.AsObject;
  static serializeBinaryToWriter(message: GetCommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCommitRequest;
  static deserializeBinaryFromReader(message: GetCommitRequest, reader: jspb.BinaryReader): GetCommitRequest;
}

export namespace GetCommitRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateCommitRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit): CreateCommitRequest;
  hasItem(): boolean;
  clearItem(): CreateCommitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommitRequest): CreateCommitRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommitRequest;
  static deserializeBinaryFromReader(message: CreateCommitRequest, reader: jspb.BinaryReader): CreateCommitRequest;
}

export namespace CreateCommitRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit.AsObject,
  }
}

export class UpdateCommitRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit): UpdateCommitRequest;
  hasItem(): boolean;
  clearItem(): UpdateCommitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCommitRequest): UpdateCommitRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCommitRequest;
  static deserializeBinaryFromReader(message: UpdateCommitRequest, reader: jspb.BinaryReader): UpdateCommitRequest;
}

export namespace UpdateCommitRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Commit.AsObject,
  }
}

export class DeleteCommitRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteCommitRequest;

  getName(): string;
  setName(value: string): DeleteCommitRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCommitRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCommitRequest): DeleteCommitRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCommitRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCommitRequest;
  static deserializeBinaryFromReader(message: DeleteCommitRequest, reader: jspb.BinaryReader): DeleteCommitRequest;
}

export namespace DeleteCommitRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListApiTokensRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListApiTokensRequest;

  getPageSize(): number;
  setPageSize(value: number): ListApiTokensRequest;

  getPageToken(): string;
  setPageToken(value: string): ListApiTokensRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApiTokensRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListApiTokensRequest): ListApiTokensRequest.AsObject;
  static serializeBinaryToWriter(message: ListApiTokensRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApiTokensRequest;
  static deserializeBinaryFromReader(message: ListApiTokensRequest, reader: jspb.BinaryReader): ListApiTokensRequest;
}

export namespace ListApiTokensRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListApiTokensResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken>): ListApiTokensResponse;
  clearItemsList(): ListApiTokensResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken, index?: number): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListApiTokensResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListApiTokensResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListApiTokensResponse): ListApiTokensResponse.AsObject;
  static serializeBinaryToWriter(message: ListApiTokensResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListApiTokensResponse;
  static deserializeBinaryFromReader(message: ListApiTokensResponse, reader: jspb.BinaryReader): ListApiTokensResponse;
}

export namespace ListApiTokensResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken.AsObject>,
    nextPageToken: string,
  }
}

export class GetApiTokenRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetApiTokenRequest;

  getName(): string;
  setName(value: string): GetApiTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetApiTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetApiTokenRequest): GetApiTokenRequest.AsObject;
  static serializeBinaryToWriter(message: GetApiTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetApiTokenRequest;
  static deserializeBinaryFromReader(message: GetApiTokenRequest, reader: jspb.BinaryReader): GetApiTokenRequest;
}

export namespace GetApiTokenRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateApiTokenRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken): CreateApiTokenRequest;
  hasItem(): boolean;
  clearItem(): CreateApiTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateApiTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateApiTokenRequest): CreateApiTokenRequest.AsObject;
  static serializeBinaryToWriter(message: CreateApiTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateApiTokenRequest;
  static deserializeBinaryFromReader(message: CreateApiTokenRequest, reader: jspb.BinaryReader): CreateApiTokenRequest;
}

export namespace CreateApiTokenRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken.AsObject,
  }
}

export class UpdateApiTokenRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken): UpdateApiTokenRequest;
  hasItem(): boolean;
  clearItem(): UpdateApiTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateApiTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateApiTokenRequest): UpdateApiTokenRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateApiTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateApiTokenRequest;
  static deserializeBinaryFromReader(message: UpdateApiTokenRequest, reader: jspb.BinaryReader): UpdateApiTokenRequest;
}

export namespace UpdateApiTokenRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ApiToken.AsObject,
  }
}

export class DeleteApiTokenRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteApiTokenRequest;

  getName(): string;
  setName(value: string): DeleteApiTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteApiTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteApiTokenRequest): DeleteApiTokenRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteApiTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteApiTokenRequest;
  static deserializeBinaryFromReader(message: DeleteApiTokenRequest, reader: jspb.BinaryReader): DeleteApiTokenRequest;
}

export namespace DeleteApiTokenRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListConnectionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListConnectionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListConnectionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListConnectionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConnectionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConnectionsRequest): ListConnectionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListConnectionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConnectionsRequest;
  static deserializeBinaryFromReader(message: ListConnectionsRequest, reader: jspb.BinaryReader): ListConnectionsRequest;
}

export namespace ListConnectionsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListConnectionsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection>): ListConnectionsResponse;
  clearItemsList(): ListConnectionsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, index?: number): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListConnectionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConnectionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListConnectionsResponse): ListConnectionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListConnectionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConnectionsResponse;
  static deserializeBinaryFromReader(message: ListConnectionsResponse, reader: jspb.BinaryReader): ListConnectionsResponse;
}

export namespace ListConnectionsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject>,
    nextPageToken: string,
  }
}

export class GetConnectionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetConnectionRequest;

  getName(): string;
  setName(value: string): GetConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConnectionRequest): GetConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: GetConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConnectionRequest;
  static deserializeBinaryFromReader(message: GetConnectionRequest, reader: jspb.BinaryReader): GetConnectionRequest;
}

export namespace GetConnectionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateConnectionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateConnectionRequest;
  hasItem(): boolean;
  clearItem(): CreateConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConnectionRequest): CreateConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConnectionRequest;
  static deserializeBinaryFromReader(message: CreateConnectionRequest, reader: jspb.BinaryReader): CreateConnectionRequest;
}

export namespace CreateConnectionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
  }
}

export class UpdateConnectionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): UpdateConnectionRequest;
  hasItem(): boolean;
  clearItem(): UpdateConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConnectionRequest): UpdateConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConnectionRequest;
  static deserializeBinaryFromReader(message: UpdateConnectionRequest, reader: jspb.BinaryReader): UpdateConnectionRequest;
}

export namespace UpdateConnectionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
  }
}

export class DeleteConnectionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteConnectionRequest;

  getName(): string;
  setName(value: string): DeleteConnectionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConnectionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConnectionRequest): DeleteConnectionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteConnectionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConnectionRequest;
  static deserializeBinaryFromReader(message: DeleteConnectionRequest, reader: jspb.BinaryReader): DeleteConnectionRequest;
}

export namespace DeleteConnectionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListLabsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListLabsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListLabsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLabsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabsRequest): ListLabsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLabsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabsRequest;
  static deserializeBinaryFromReader(message: ListLabsRequest, reader: jspb.BinaryReader): ListLabsRequest;
}

export namespace ListLabsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListLabsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab>): ListLabsResponse;
  clearItemsList(): ListLabsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab, index?: number): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLabsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabsResponse): ListLabsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLabsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabsResponse;
  static deserializeBinaryFromReader(message: ListLabsResponse, reader: jspb.BinaryReader): ListLabsResponse;
}

export namespace ListLabsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.AsObject>,
    nextPageToken: string,
  }
}

export class GetLabRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetLabRequest;

  getName(): string;
  setName(value: string): GetLabRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabRequest): GetLabRequest.AsObject;
  static serializeBinaryToWriter(message: GetLabRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabRequest;
  static deserializeBinaryFromReader(message: GetLabRequest, reader: jspb.BinaryReader): GetLabRequest;
}

export namespace GetLabRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateLabRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab): CreateLabRequest;
  hasItem(): boolean;
  clearItem(): CreateLabRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabRequest): CreateLabRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLabRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabRequest;
  static deserializeBinaryFromReader(message: CreateLabRequest, reader: jspb.BinaryReader): CreateLabRequest;
}

export namespace CreateLabRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.AsObject,
  }
}

export class UpdateLabRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab): UpdateLabRequest;
  hasItem(): boolean;
  clearItem(): UpdateLabRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabRequest): UpdateLabRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLabRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabRequest;
  static deserializeBinaryFromReader(message: UpdateLabRequest, reader: jspb.BinaryReader): UpdateLabRequest;
}

export namespace UpdateLabRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Lab.AsObject,
  }
}

export class DeleteLabRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteLabRequest;

  getName(): string;
  setName(value: string): DeleteLabRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLabRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLabRequest): DeleteLabRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLabRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLabRequest;
  static deserializeBinaryFromReader(message: DeleteLabRequest, reader: jspb.BinaryReader): DeleteLabRequest;
}

export namespace DeleteLabRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListLicensesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListLicensesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListLicensesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLicensesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLicensesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLicensesRequest): ListLicensesRequest.AsObject;
  static serializeBinaryToWriter(message: ListLicensesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLicensesRequest;
  static deserializeBinaryFromReader(message: ListLicensesRequest, reader: jspb.BinaryReader): ListLicensesRequest;
}

export namespace ListLicensesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListLicensesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License>): ListLicensesResponse;
  clearItemsList(): ListLicensesResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License, index?: number): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLicensesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLicensesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLicensesResponse): ListLicensesResponse.AsObject;
  static serializeBinaryToWriter(message: ListLicensesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLicensesResponse;
  static deserializeBinaryFromReader(message: ListLicensesResponse, reader: jspb.BinaryReader): ListLicensesResponse;
}

export namespace ListLicensesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License.AsObject>,
    nextPageToken: string,
  }
}

export class GetLicenseRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetLicenseRequest;

  getName(): string;
  setName(value: string): GetLicenseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLicenseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLicenseRequest): GetLicenseRequest.AsObject;
  static serializeBinaryToWriter(message: GetLicenseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLicenseRequest;
  static deserializeBinaryFromReader(message: GetLicenseRequest, reader: jspb.BinaryReader): GetLicenseRequest;
}

export namespace GetLicenseRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateLicenseRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License): CreateLicenseRequest;
  hasItem(): boolean;
  clearItem(): CreateLicenseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLicenseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLicenseRequest): CreateLicenseRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLicenseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLicenseRequest;
  static deserializeBinaryFromReader(message: CreateLicenseRequest, reader: jspb.BinaryReader): CreateLicenseRequest;
}

export namespace CreateLicenseRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License.AsObject,
  }
}

export class UpdateLicenseRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License): UpdateLicenseRequest;
  hasItem(): boolean;
  clearItem(): UpdateLicenseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLicenseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLicenseRequest): UpdateLicenseRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLicenseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLicenseRequest;
  static deserializeBinaryFromReader(message: UpdateLicenseRequest, reader: jspb.BinaryReader): UpdateLicenseRequest;
}

export namespace UpdateLicenseRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.License.AsObject,
  }
}

export class DeleteLicenseRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteLicenseRequest;

  getName(): string;
  setName(value: string): DeleteLicenseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLicenseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLicenseRequest): DeleteLicenseRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLicenseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLicenseRequest;
  static deserializeBinaryFromReader(message: DeleteLicenseRequest, reader: jspb.BinaryReader): DeleteLicenseRequest;
}

export namespace DeleteLicenseRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListNotifiersRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListNotifiersRequest;

  getPageSize(): number;
  setPageSize(value: number): ListNotifiersRequest;

  getPageToken(): string;
  setPageToken(value: string): ListNotifiersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotifiersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotifiersRequest): ListNotifiersRequest.AsObject;
  static serializeBinaryToWriter(message: ListNotifiersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotifiersRequest;
  static deserializeBinaryFromReader(message: ListNotifiersRequest, reader: jspb.BinaryReader): ListNotifiersRequest;
}

export namespace ListNotifiersRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListNotifiersResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier>): ListNotifiersResponse;
  clearItemsList(): ListNotifiersResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier, index?: number): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListNotifiersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotifiersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotifiersResponse): ListNotifiersResponse.AsObject;
  static serializeBinaryToWriter(message: ListNotifiersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotifiersResponse;
  static deserializeBinaryFromReader(message: ListNotifiersResponse, reader: jspb.BinaryReader): ListNotifiersResponse;
}

export namespace ListNotifiersResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.AsObject>,
    nextPageToken: string,
  }
}

export class GetNotifierRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetNotifierRequest;

  getName(): string;
  setName(value: string): GetNotifierRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotifierRequest): GetNotifierRequest.AsObject;
  static serializeBinaryToWriter(message: GetNotifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotifierRequest;
  static deserializeBinaryFromReader(message: GetNotifierRequest, reader: jspb.BinaryReader): GetNotifierRequest;
}

export namespace GetNotifierRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateNotifierRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier): CreateNotifierRequest;
  hasItem(): boolean;
  clearItem(): CreateNotifierRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNotifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNotifierRequest): CreateNotifierRequest.AsObject;
  static serializeBinaryToWriter(message: CreateNotifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNotifierRequest;
  static deserializeBinaryFromReader(message: CreateNotifierRequest, reader: jspb.BinaryReader): CreateNotifierRequest;
}

export namespace CreateNotifierRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.AsObject,
  }
}

export class UpdateNotifierRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier): UpdateNotifierRequest;
  hasItem(): boolean;
  clearItem(): UpdateNotifierRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotifierRequest): UpdateNotifierRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateNotifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotifierRequest;
  static deserializeBinaryFromReader(message: UpdateNotifierRequest, reader: jspb.BinaryReader): UpdateNotifierRequest;
}

export namespace UpdateNotifierRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Notifier.AsObject,
  }
}

export class DeleteNotifierRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteNotifierRequest;

  getName(): string;
  setName(value: string): DeleteNotifierRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNotifierRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNotifierRequest): DeleteNotifierRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteNotifierRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNotifierRequest;
  static deserializeBinaryFromReader(message: DeleteNotifierRequest, reader: jspb.BinaryReader): DeleteNotifierRequest;
}

export namespace DeleteNotifierRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListServingsitesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListServingsitesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListServingsitesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListServingsitesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServingsitesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServingsitesRequest): ListServingsitesRequest.AsObject;
  static serializeBinaryToWriter(message: ListServingsitesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServingsitesRequest;
  static deserializeBinaryFromReader(message: ListServingsitesRequest, reader: jspb.BinaryReader): ListServingsitesRequest;
}

export namespace ListServingsitesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListServingsitesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite>): ListServingsitesResponse;
  clearItemsList(): ListServingsitesResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite, index?: number): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListServingsitesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServingsitesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServingsitesResponse): ListServingsitesResponse.AsObject;
  static serializeBinaryToWriter(message: ListServingsitesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServingsitesResponse;
  static deserializeBinaryFromReader(message: ListServingsitesResponse, reader: jspb.BinaryReader): ListServingsitesResponse;
}

export namespace ListServingsitesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.AsObject>,
    nextPageToken: string,
  }
}

export class GetServingsiteRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetServingsiteRequest;

  getName(): string;
  setName(value: string): GetServingsiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServingsiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServingsiteRequest): GetServingsiteRequest.AsObject;
  static serializeBinaryToWriter(message: GetServingsiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServingsiteRequest;
  static deserializeBinaryFromReader(message: GetServingsiteRequest, reader: jspb.BinaryReader): GetServingsiteRequest;
}

export namespace GetServingsiteRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateServingsiteRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite): CreateServingsiteRequest;
  hasItem(): boolean;
  clearItem(): CreateServingsiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServingsiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServingsiteRequest): CreateServingsiteRequest.AsObject;
  static serializeBinaryToWriter(message: CreateServingsiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServingsiteRequest;
  static deserializeBinaryFromReader(message: CreateServingsiteRequest, reader: jspb.BinaryReader): CreateServingsiteRequest;
}

export namespace CreateServingsiteRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.AsObject,
  }
}

export class UpdateServingsiteRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite): UpdateServingsiteRequest;
  hasItem(): boolean;
  clearItem(): UpdateServingsiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateServingsiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateServingsiteRequest): UpdateServingsiteRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateServingsiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateServingsiteRequest;
  static deserializeBinaryFromReader(message: UpdateServingsiteRequest, reader: jspb.BinaryReader): UpdateServingsiteRequest;
}

export namespace UpdateServingsiteRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.ServingSite.AsObject,
  }
}

export class DeleteServingsiteRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteServingsiteRequest;

  getName(): string;
  setName(value: string): DeleteServingsiteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServingsiteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServingsiteRequest): DeleteServingsiteRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteServingsiteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServingsiteRequest;
  static deserializeBinaryFromReader(message: DeleteServingsiteRequest, reader: jspb.BinaryReader): DeleteServingsiteRequest;
}

export namespace DeleteServingsiteRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListTenantsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListTenantsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListTenantsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListTenantsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTenantsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTenantsRequest): ListTenantsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTenantsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTenantsRequest;
  static deserializeBinaryFromReader(message: ListTenantsRequest, reader: jspb.BinaryReader): ListTenantsRequest;
}

export namespace ListTenantsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListTenantsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant>): ListTenantsResponse;
  clearItemsList(): ListTenantsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant, index?: number): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListTenantsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTenantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTenantsResponse): ListTenantsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTenantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTenantsResponse;
  static deserializeBinaryFromReader(message: ListTenantsResponse, reader: jspb.BinaryReader): ListTenantsResponse;
}

export namespace ListTenantsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.AsObject>,
    nextPageToken: string,
  }
}

export class GetTenantRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetTenantRequest;

  getName(): string;
  setName(value: string): GetTenantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTenantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTenantRequest): GetTenantRequest.AsObject;
  static serializeBinaryToWriter(message: GetTenantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTenantRequest;
  static deserializeBinaryFromReader(message: GetTenantRequest, reader: jspb.BinaryReader): GetTenantRequest;
}

export namespace GetTenantRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateTenantRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant): CreateTenantRequest;
  hasItem(): boolean;
  clearItem(): CreateTenantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTenantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTenantRequest): CreateTenantRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTenantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTenantRequest;
  static deserializeBinaryFromReader(message: CreateTenantRequest, reader: jspb.BinaryReader): CreateTenantRequest;
}

export namespace CreateTenantRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.AsObject,
  }
}

export class UpdateTenantRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant): UpdateTenantRequest;
  hasItem(): boolean;
  clearItem(): UpdateTenantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTenantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTenantRequest): UpdateTenantRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTenantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTenantRequest;
  static deserializeBinaryFromReader(message: UpdateTenantRequest, reader: jspb.BinaryReader): UpdateTenantRequest;
}

export namespace UpdateTenantRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.AsObject,
  }
}

export class DeleteTenantRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteTenantRequest;

  getName(): string;
  setName(value: string): DeleteTenantRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTenantRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTenantRequest): DeleteTenantRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTenantRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTenantRequest;
  static deserializeBinaryFromReader(message: DeleteTenantRequest, reader: jspb.BinaryReader): DeleteTenantRequest;
}

export namespace DeleteTenantRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListVirtualBucketsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListVirtualBucketsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListVirtualBucketsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListVirtualBucketsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualBucketsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualBucketsRequest): ListVirtualBucketsRequest.AsObject;
  static serializeBinaryToWriter(message: ListVirtualBucketsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualBucketsRequest;
  static deserializeBinaryFromReader(message: ListVirtualBucketsRequest, reader: jspb.BinaryReader): ListVirtualBucketsRequest;
}

export namespace ListVirtualBucketsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListVirtualBucketsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket>): ListVirtualBucketsResponse;
  clearItemsList(): ListVirtualBucketsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, index?: number): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListVirtualBucketsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualBucketsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualBucketsResponse): ListVirtualBucketsResponse.AsObject;
  static serializeBinaryToWriter(message: ListVirtualBucketsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualBucketsResponse;
  static deserializeBinaryFromReader(message: ListVirtualBucketsResponse, reader: jspb.BinaryReader): ListVirtualBucketsResponse;
}

export namespace ListVirtualBucketsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject>,
    nextPageToken: string,
  }
}

export class GetVirtualBucketRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetVirtualBucketRequest;

  getName(): string;
  setName(value: string): GetVirtualBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVirtualBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVirtualBucketRequest): GetVirtualBucketRequest.AsObject;
  static serializeBinaryToWriter(message: GetVirtualBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVirtualBucketRequest;
  static deserializeBinaryFromReader(message: GetVirtualBucketRequest, reader: jspb.BinaryReader): GetVirtualBucketRequest;
}

export namespace GetVirtualBucketRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateVirtualBucketRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): CreateVirtualBucketRequest;
  hasItem(): boolean;
  clearItem(): CreateVirtualBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVirtualBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVirtualBucketRequest): CreateVirtualBucketRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVirtualBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVirtualBucketRequest;
  static deserializeBinaryFromReader(message: CreateVirtualBucketRequest, reader: jspb.BinaryReader): CreateVirtualBucketRequest;
}

export namespace CreateVirtualBucketRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
  }
}

export class UpdateVirtualBucketRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): UpdateVirtualBucketRequest;
  hasItem(): boolean;
  clearItem(): UpdateVirtualBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVirtualBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVirtualBucketRequest): UpdateVirtualBucketRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVirtualBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVirtualBucketRequest;
  static deserializeBinaryFromReader(message: UpdateVirtualBucketRequest, reader: jspb.BinaryReader): UpdateVirtualBucketRequest;
}

export namespace UpdateVirtualBucketRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
  }
}

export class DeleteVirtualBucketRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteVirtualBucketRequest;

  getName(): string;
  setName(value: string): DeleteVirtualBucketRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVirtualBucketRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVirtualBucketRequest): DeleteVirtualBucketRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVirtualBucketRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVirtualBucketRequest;
  static deserializeBinaryFromReader(message: DeleteVirtualBucketRequest, reader: jspb.BinaryReader): DeleteVirtualBucketRequest;
}

export namespace DeleteVirtualBucketRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListVirtualClustersRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListVirtualClustersRequest;

  getPageSize(): number;
  setPageSize(value: number): ListVirtualClustersRequest;

  getPageToken(): string;
  setPageToken(value: string): ListVirtualClustersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualClustersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualClustersRequest): ListVirtualClustersRequest.AsObject;
  static serializeBinaryToWriter(message: ListVirtualClustersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualClustersRequest;
  static deserializeBinaryFromReader(message: ListVirtualClustersRequest, reader: jspb.BinaryReader): ListVirtualClustersRequest;
}

export namespace ListVirtualClustersRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListVirtualClustersResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster>): ListVirtualClustersResponse;
  clearItemsList(): ListVirtualClustersResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster, index?: number): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListVirtualClustersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualClustersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualClustersResponse): ListVirtualClustersResponse.AsObject;
  static serializeBinaryToWriter(message: ListVirtualClustersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualClustersResponse;
  static deserializeBinaryFromReader(message: ListVirtualClustersResponse, reader: jspb.BinaryReader): ListVirtualClustersResponse;
}

export namespace ListVirtualClustersResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster.AsObject>,
    nextPageToken: string,
  }
}

export class GetVirtualClusterRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetVirtualClusterRequest;

  getName(): string;
  setName(value: string): GetVirtualClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVirtualClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVirtualClusterRequest): GetVirtualClusterRequest.AsObject;
  static serializeBinaryToWriter(message: GetVirtualClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVirtualClusterRequest;
  static deserializeBinaryFromReader(message: GetVirtualClusterRequest, reader: jspb.BinaryReader): GetVirtualClusterRequest;
}

export namespace GetVirtualClusterRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateVirtualClusterRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster): CreateVirtualClusterRequest;
  hasItem(): boolean;
  clearItem(): CreateVirtualClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVirtualClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVirtualClusterRequest): CreateVirtualClusterRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVirtualClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVirtualClusterRequest;
  static deserializeBinaryFromReader(message: CreateVirtualClusterRequest, reader: jspb.BinaryReader): CreateVirtualClusterRequest;
}

export namespace CreateVirtualClusterRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster.AsObject,
  }
}

export class UpdateVirtualClusterRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster): UpdateVirtualClusterRequest;
  hasItem(): boolean;
  clearItem(): UpdateVirtualClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVirtualClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVirtualClusterRequest): UpdateVirtualClusterRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVirtualClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVirtualClusterRequest;
  static deserializeBinaryFromReader(message: UpdateVirtualClusterRequest, reader: jspb.BinaryReader): UpdateVirtualClusterRequest;
}

export namespace UpdateVirtualClusterRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualCluster.AsObject,
  }
}

export class DeleteVirtualClusterRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteVirtualClusterRequest;

  getName(): string;
  setName(value: string): DeleteVirtualClusterRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVirtualClusterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVirtualClusterRequest): DeleteVirtualClusterRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVirtualClusterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVirtualClusterRequest;
  static deserializeBinaryFromReader(message: DeleteVirtualClusterRequest, reader: jspb.BinaryReader): DeleteVirtualClusterRequest;
}

export namespace DeleteVirtualClusterRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListVirtualVolumesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListVirtualVolumesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListVirtualVolumesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListVirtualVolumesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualVolumesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualVolumesRequest): ListVirtualVolumesRequest.AsObject;
  static serializeBinaryToWriter(message: ListVirtualVolumesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualVolumesRequest;
  static deserializeBinaryFromReader(message: ListVirtualVolumesRequest, reader: jspb.BinaryReader): ListVirtualVolumesRequest;
}

export namespace ListVirtualVolumesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListVirtualVolumesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume>): ListVirtualVolumesResponse;
  clearItemsList(): ListVirtualVolumesResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume, index?: number): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListVirtualVolumesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListVirtualVolumesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListVirtualVolumesResponse): ListVirtualVolumesResponse.AsObject;
  static serializeBinaryToWriter(message: ListVirtualVolumesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListVirtualVolumesResponse;
  static deserializeBinaryFromReader(message: ListVirtualVolumesResponse, reader: jspb.BinaryReader): ListVirtualVolumesResponse;
}

export namespace ListVirtualVolumesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.AsObject>,
    nextPageToken: string,
  }
}

export class GetVirtualVolumeRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetVirtualVolumeRequest;

  getName(): string;
  setName(value: string): GetVirtualVolumeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVirtualVolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetVirtualVolumeRequest): GetVirtualVolumeRequest.AsObject;
  static serializeBinaryToWriter(message: GetVirtualVolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVirtualVolumeRequest;
  static deserializeBinaryFromReader(message: GetVirtualVolumeRequest, reader: jspb.BinaryReader): GetVirtualVolumeRequest;
}

export namespace GetVirtualVolumeRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateVirtualVolumeRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume): CreateVirtualVolumeRequest;
  hasItem(): boolean;
  clearItem(): CreateVirtualVolumeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateVirtualVolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateVirtualVolumeRequest): CreateVirtualVolumeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateVirtualVolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateVirtualVolumeRequest;
  static deserializeBinaryFromReader(message: CreateVirtualVolumeRequest, reader: jspb.BinaryReader): CreateVirtualVolumeRequest;
}

export namespace CreateVirtualVolumeRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.AsObject,
  }
}

export class UpdateVirtualVolumeRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume): UpdateVirtualVolumeRequest;
  hasItem(): boolean;
  clearItem(): UpdateVirtualVolumeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVirtualVolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVirtualVolumeRequest): UpdateVirtualVolumeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVirtualVolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVirtualVolumeRequest;
  static deserializeBinaryFromReader(message: UpdateVirtualVolumeRequest, reader: jspb.BinaryReader): UpdateVirtualVolumeRequest;
}

export namespace UpdateVirtualVolumeRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualVolume.AsObject,
  }
}

export class DeleteVirtualVolumeRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteVirtualVolumeRequest;

  getName(): string;
  setName(value: string): DeleteVirtualVolumeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteVirtualVolumeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteVirtualVolumeRequest): DeleteVirtualVolumeRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteVirtualVolumeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteVirtualVolumeRequest;
  static deserializeBinaryFromReader(message: DeleteVirtualVolumeRequest, reader: jspb.BinaryReader): DeleteVirtualVolumeRequest;
}

export namespace DeleteVirtualVolumeRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListDataPipelinesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDataPipelinesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDataPipelinesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDataPipelinesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataPipelinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataPipelinesRequest): ListDataPipelinesRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataPipelinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataPipelinesRequest;
  static deserializeBinaryFromReader(message: ListDataPipelinesRequest, reader: jspb.BinaryReader): ListDataPipelinesRequest;
}

export namespace ListDataPipelinesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDataPipelinesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline>): ListDataPipelinesResponse;
  clearItemsList(): ListDataPipelinesResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDataPipelinesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataPipelinesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataPipelinesResponse): ListDataPipelinesResponse.AsObject;
  static serializeBinaryToWriter(message: ListDataPipelinesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataPipelinesResponse;
  static deserializeBinaryFromReader(message: ListDataPipelinesResponse, reader: jspb.BinaryReader): ListDataPipelinesResponse;
}

export namespace ListDataPipelinesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.AsObject>,
    nextPageToken: string,
  }
}

export class GetDataPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDataPipelineRequest;

  getName(): string;
  setName(value: string): GetDataPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataPipelineRequest): GetDataPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataPipelineRequest;
  static deserializeBinaryFromReader(message: GetDataPipelineRequest, reader: jspb.BinaryReader): GetDataPipelineRequest;
}

export namespace GetDataPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateDataPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline): CreateDataPipelineRequest;
  hasItem(): boolean;
  clearItem(): CreateDataPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataPipelineRequest): CreateDataPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataPipelineRequest;
  static deserializeBinaryFromReader(message: CreateDataPipelineRequest, reader: jspb.BinaryReader): CreateDataPipelineRequest;
}

export namespace CreateDataPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.AsObject,
  }
}

export class UpdateDataPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline): UpdateDataPipelineRequest;
  hasItem(): boolean;
  clearItem(): UpdateDataPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataPipelineRequest): UpdateDataPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataPipelineRequest;
  static deserializeBinaryFromReader(message: UpdateDataPipelineRequest, reader: jspb.BinaryReader): UpdateDataPipelineRequest;
}

export namespace UpdateDataPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.AsObject,
  }
}

export class DeleteDataPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDataPipelineRequest;

  getName(): string;
  setName(value: string): DeleteDataPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataPipelineRequest): DeleteDataPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataPipelineRequest;
  static deserializeBinaryFromReader(message: DeleteDataPipelineRequest, reader: jspb.BinaryReader): DeleteDataPipelineRequest;
}

export namespace DeleteDataPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListDataPipelineRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDataPipelineRunsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDataPipelineRunsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDataPipelineRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataPipelineRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataPipelineRunsRequest): ListDataPipelineRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataPipelineRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataPipelineRunsRequest;
  static deserializeBinaryFromReader(message: ListDataPipelineRunsRequest, reader: jspb.BinaryReader): ListDataPipelineRunsRequest;
}

export namespace ListDataPipelineRunsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDataPipelineRunsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun>): ListDataPipelineRunsResponse;
  clearItemsList(): ListDataPipelineRunsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDataPipelineRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataPipelineRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataPipelineRunsResponse): ListDataPipelineRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDataPipelineRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataPipelineRunsResponse;
  static deserializeBinaryFromReader(message: ListDataPipelineRunsResponse, reader: jspb.BinaryReader): ListDataPipelineRunsResponse;
}

export namespace ListDataPipelineRunsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.AsObject>,
    nextPageToken: string,
  }
}

export class GetDataPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDataPipelineRunRequest;

  getName(): string;
  setName(value: string): GetDataPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataPipelineRunRequest): GetDataPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataPipelineRunRequest;
  static deserializeBinaryFromReader(message: GetDataPipelineRunRequest, reader: jspb.BinaryReader): GetDataPipelineRunRequest;
}

export namespace GetDataPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateDataPipelineRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun): CreateDataPipelineRunRequest;
  hasItem(): boolean;
  clearItem(): CreateDataPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataPipelineRunRequest): CreateDataPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDataPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataPipelineRunRequest;
  static deserializeBinaryFromReader(message: CreateDataPipelineRunRequest, reader: jspb.BinaryReader): CreateDataPipelineRunRequest;
}

export namespace CreateDataPipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.AsObject,
  }
}

export class UpdateDataPipelineRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun): UpdateDataPipelineRunRequest;
  hasItem(): boolean;
  clearItem(): UpdateDataPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataPipelineRunRequest): UpdateDataPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDataPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataPipelineRunRequest;
  static deserializeBinaryFromReader(message: UpdateDataPipelineRunRequest, reader: jspb.BinaryReader): UpdateDataPipelineRunRequest;
}

export namespace UpdateDataPipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.AsObject,
  }
}

export class DeleteDataPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDataPipelineRunRequest;

  getName(): string;
  setName(value: string): DeleteDataPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataPipelineRunRequest): DeleteDataPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDataPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataPipelineRunRequest;
  static deserializeBinaryFromReader(message: DeleteDataPipelineRunRequest, reader: jspb.BinaryReader): DeleteDataPipelineRunRequest;
}

export namespace DeleteDataPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListDataProductsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDataProductsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDataProductsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDataProductsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataProductsRequest): ListDataProductsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataProductsRequest;
  static deserializeBinaryFromReader(message: ListDataProductsRequest, reader: jspb.BinaryReader): ListDataProductsRequest;
}

export namespace ListDataProductsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDataProductsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct>): ListDataProductsResponse;
  clearItemsList(): ListDataProductsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDataProductsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataProductsResponse): ListDataProductsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDataProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataProductsResponse;
  static deserializeBinaryFromReader(message: ListDataProductsResponse, reader: jspb.BinaryReader): ListDataProductsResponse;
}

export namespace ListDataProductsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject>,
    nextPageToken: string,
  }
}

export class GetDataProductRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDataProductRequest;

  getName(): string;
  setName(value: string): GetDataProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataProductRequest): GetDataProductRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataProductRequest;
  static deserializeBinaryFromReader(message: GetDataProductRequest, reader: jspb.BinaryReader): GetDataProductRequest;
}

export namespace GetDataProductRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateDataProductRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): CreateDataProductRequest;
  hasItem(): boolean;
  clearItem(): CreateDataProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataProductRequest): CreateDataProductRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDataProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataProductRequest;
  static deserializeBinaryFromReader(message: CreateDataProductRequest, reader: jspb.BinaryReader): CreateDataProductRequest;
}

export namespace CreateDataProductRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
  }
}

export class UpdateDataProductRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): UpdateDataProductRequest;
  hasItem(): boolean;
  clearItem(): UpdateDataProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataProductRequest): UpdateDataProductRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDataProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataProductRequest;
  static deserializeBinaryFromReader(message: UpdateDataProductRequest, reader: jspb.BinaryReader): UpdateDataProductRequest;
}

export namespace UpdateDataProductRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
  }
}

export class DeleteDataProductRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDataProductRequest;

  getName(): string;
  setName(value: string): DeleteDataProductRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataProductRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataProductRequest): DeleteDataProductRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDataProductRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataProductRequest;
  static deserializeBinaryFromReader(message: DeleteDataProductRequest, reader: jspb.BinaryReader): DeleteDataProductRequest;
}

export namespace DeleteDataProductRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListDataProductVersionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDataProductVersionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDataProductVersionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDataProductVersionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataProductVersionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataProductVersionsRequest): ListDataProductVersionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataProductVersionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataProductVersionsRequest;
  static deserializeBinaryFromReader(message: ListDataProductVersionsRequest, reader: jspb.BinaryReader): ListDataProductVersionsRequest;
}

export namespace ListDataProductVersionsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDataProductVersionsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion>): ListDataProductVersionsResponse;
  clearItemsList(): ListDataProductVersionsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDataProductVersionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataProductVersionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataProductVersionsResponse): ListDataProductVersionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDataProductVersionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataProductVersionsResponse;
  static deserializeBinaryFromReader(message: ListDataProductVersionsResponse, reader: jspb.BinaryReader): ListDataProductVersionsResponse;
}

export namespace ListDataProductVersionsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject>,
    nextPageToken: string,
  }
}

export class GetDataProductVersionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDataProductVersionRequest;

  getName(): string;
  setName(value: string): GetDataProductVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataProductVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataProductVersionRequest): GetDataProductVersionRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataProductVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataProductVersionRequest;
  static deserializeBinaryFromReader(message: GetDataProductVersionRequest, reader: jspb.BinaryReader): GetDataProductVersionRequest;
}

export namespace GetDataProductVersionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateDataProductVersionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): CreateDataProductVersionRequest;
  hasItem(): boolean;
  clearItem(): CreateDataProductVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataProductVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataProductVersionRequest): CreateDataProductVersionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDataProductVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataProductVersionRequest;
  static deserializeBinaryFromReader(message: CreateDataProductVersionRequest, reader: jspb.BinaryReader): CreateDataProductVersionRequest;
}

export namespace CreateDataProductVersionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
  }
}

export class UpdateDataProductVersionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): UpdateDataProductVersionRequest;
  hasItem(): boolean;
  clearItem(): UpdateDataProductVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataProductVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataProductVersionRequest): UpdateDataProductVersionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDataProductVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataProductVersionRequest;
  static deserializeBinaryFromReader(message: UpdateDataProductVersionRequest, reader: jspb.BinaryReader): UpdateDataProductVersionRequest;
}

export namespace UpdateDataProductVersionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
  }
}

export class DeleteDataProductVersionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDataProductVersionRequest;

  getName(): string;
  setName(value: string): DeleteDataProductVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataProductVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataProductVersionRequest): DeleteDataProductVersionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDataProductVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataProductVersionRequest;
  static deserializeBinaryFromReader(message: DeleteDataProductVersionRequest, reader: jspb.BinaryReader): DeleteDataProductVersionRequest;
}

export namespace DeleteDataProductVersionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListDatasetsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDatasetsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDatasetsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDatasetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsRequest): ListDatasetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListDatasetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsRequest;
  static deserializeBinaryFromReader(message: ListDatasetsRequest, reader: jspb.BinaryReader): ListDatasetsRequest;
}

export namespace ListDatasetsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDatasetsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset>): ListDatasetsResponse;
  clearItemsList(): ListDatasetsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDatasetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasetsResponse): ListDatasetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListDatasetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasetsResponse;
  static deserializeBinaryFromReader(message: ListDatasetsResponse, reader: jspb.BinaryReader): ListDatasetsResponse;
}

export namespace ListDatasetsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject>,
    nextPageToken: string,
  }
}

export class GetDatasetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDatasetRequest;

  getName(): string;
  setName(value: string): GetDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasetRequest): GetDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasetRequest;
  static deserializeBinaryFromReader(message: GetDatasetRequest, reader: jspb.BinaryReader): GetDatasetRequest;
}

export namespace GetDatasetRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateDatasetRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): CreateDatasetRequest;
  hasItem(): boolean;
  clearItem(): CreateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasetRequest): CreateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasetRequest;
  static deserializeBinaryFromReader(message: CreateDatasetRequest, reader: jspb.BinaryReader): CreateDatasetRequest;
}

export namespace CreateDatasetRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class UpdateDatasetRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): UpdateDatasetRequest;
  hasItem(): boolean;
  clearItem(): UpdateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDatasetRequest): UpdateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDatasetRequest;
  static deserializeBinaryFromReader(message: UpdateDatasetRequest, reader: jspb.BinaryReader): UpdateDatasetRequest;
}

export namespace UpdateDatasetRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class DeleteDatasetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDatasetRequest;

  getName(): string;
  setName(value: string): DeleteDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatasetRequest): DeleteDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatasetRequest;
  static deserializeBinaryFromReader(message: DeleteDatasetRequest, reader: jspb.BinaryReader): DeleteDatasetRequest;
}

export namespace DeleteDatasetRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListDatasourcesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDatasourcesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDatasourcesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListDatasourcesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasourcesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasourcesRequest): ListDatasourcesRequest.AsObject;
  static serializeBinaryToWriter(message: ListDatasourcesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasourcesRequest;
  static deserializeBinaryFromReader(message: ListDatasourcesRequest, reader: jspb.BinaryReader): ListDatasourcesRequest;
}

export namespace ListDatasourcesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListDatasourcesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource>): ListDatasourcesResponse;
  clearItemsList(): ListDatasourcesResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListDatasourcesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDatasourcesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDatasourcesResponse): ListDatasourcesResponse.AsObject;
  static serializeBinaryToWriter(message: ListDatasourcesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDatasourcesResponse;
  static deserializeBinaryFromReader(message: ListDatasourcesResponse, reader: jspb.BinaryReader): ListDatasourcesResponse;
}

export namespace ListDatasourcesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject>,
    nextPageToken: string,
  }
}

export class GetDatasourceRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDatasourceRequest;

  getName(): string;
  setName(value: string): GetDatasourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDatasourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDatasourceRequest): GetDatasourceRequest.AsObject;
  static serializeBinaryToWriter(message: GetDatasourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDatasourceRequest;
  static deserializeBinaryFromReader(message: GetDatasourceRequest, reader: jspb.BinaryReader): GetDatasourceRequest;
}

export namespace GetDatasourceRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateDatasourceRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): CreateDatasourceRequest;
  hasItem(): boolean;
  clearItem(): CreateDatasourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasourceRequest): CreateDatasourceRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDatasourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasourceRequest;
  static deserializeBinaryFromReader(message: CreateDatasourceRequest, reader: jspb.BinaryReader): CreateDatasourceRequest;
}

export namespace CreateDatasourceRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
  }
}

export class UpdateDatasourceRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): UpdateDatasourceRequest;
  hasItem(): boolean;
  clearItem(): UpdateDatasourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDatasourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDatasourceRequest): UpdateDatasourceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDatasourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDatasourceRequest;
  static deserializeBinaryFromReader(message: UpdateDatasourceRequest, reader: jspb.BinaryReader): UpdateDatasourceRequest;
}

export namespace UpdateDatasourceRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
  }
}

export class DeleteDatasourceRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDatasourceRequest;

  getName(): string;
  setName(value: string): DeleteDatasourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDatasourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDatasourceRequest): DeleteDatasourceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDatasourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDatasourceRequest;
  static deserializeBinaryFromReader(message: DeleteDatasourceRequest, reader: jspb.BinaryReader): DeleteDatasourceRequest;
}

export namespace DeleteDatasourceRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListEntitiesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListEntitiesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListEntitiesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListEntitiesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEntitiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListEntitiesRequest): ListEntitiesRequest.AsObject;
  static serializeBinaryToWriter(message: ListEntitiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEntitiesRequest;
  static deserializeBinaryFromReader(message: ListEntitiesRequest, reader: jspb.BinaryReader): ListEntitiesRequest;
}

export namespace ListEntitiesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListEntitiesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity>): ListEntitiesResponse;
  clearItemsList(): ListEntitiesResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListEntitiesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListEntitiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListEntitiesResponse): ListEntitiesResponse.AsObject;
  static serializeBinaryToWriter(message: ListEntitiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListEntitiesResponse;
  static deserializeBinaryFromReader(message: ListEntitiesResponse, reader: jspb.BinaryReader): ListEntitiesResponse;
}

export namespace ListEntitiesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity.AsObject>,
    nextPageToken: string,
  }
}

export class GetEntityRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetEntityRequest;

  getName(): string;
  setName(value: string): GetEntityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetEntityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetEntityRequest): GetEntityRequest.AsObject;
  static serializeBinaryToWriter(message: GetEntityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetEntityRequest;
  static deserializeBinaryFromReader(message: GetEntityRequest, reader: jspb.BinaryReader): GetEntityRequest;
}

export namespace GetEntityRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateEntityRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity): CreateEntityRequest;
  hasItem(): boolean;
  clearItem(): CreateEntityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateEntityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateEntityRequest): CreateEntityRequest.AsObject;
  static serializeBinaryToWriter(message: CreateEntityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateEntityRequest;
  static deserializeBinaryFromReader(message: CreateEntityRequest, reader: jspb.BinaryReader): CreateEntityRequest;
}

export namespace CreateEntityRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity.AsObject,
  }
}

export class UpdateEntityRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity): UpdateEntityRequest;
  hasItem(): boolean;
  clearItem(): UpdateEntityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateEntityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateEntityRequest): UpdateEntityRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateEntityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateEntityRequest;
  static deserializeBinaryFromReader(message: UpdateEntityRequest, reader: jspb.BinaryReader): UpdateEntityRequest;
}

export namespace UpdateEntityRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Entity.AsObject,
  }
}

export class DeleteEntityRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteEntityRequest;

  getName(): string;
  setName(value: string): DeleteEntityRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteEntityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteEntityRequest): DeleteEntityRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteEntityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteEntityRequest;
  static deserializeBinaryFromReader(message: DeleteEntityRequest, reader: jspb.BinaryReader): DeleteEntityRequest;
}

export namespace DeleteEntityRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListFeaturesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListFeaturesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFeaturesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFeaturesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturesRequest): ListFeaturesRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeaturesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturesRequest;
  static deserializeBinaryFromReader(message: ListFeaturesRequest, reader: jspb.BinaryReader): ListFeaturesRequest;
}

export namespace ListFeaturesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListFeaturesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature>): ListFeaturesResponse;
  clearItemsList(): ListFeaturesResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFeaturesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturesResponse): ListFeaturesResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeaturesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturesResponse;
  static deserializeBinaryFromReader(message: ListFeaturesResponse, reader: jspb.BinaryReader): ListFeaturesResponse;
}

export namespace ListFeaturesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature.AsObject>,
    nextPageToken: string,
  }
}

export class GetFeatureRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetFeatureRequest;

  getName(): string;
  setName(value: string): GetFeatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeatureRequest): GetFeatureRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeatureRequest;
  static deserializeBinaryFromReader(message: GetFeatureRequest, reader: jspb.BinaryReader): GetFeatureRequest;
}

export namespace GetFeatureRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateFeatureRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature): CreateFeatureRequest;
  hasItem(): boolean;
  clearItem(): CreateFeatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeatureRequest): CreateFeatureRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeatureRequest;
  static deserializeBinaryFromReader(message: CreateFeatureRequest, reader: jspb.BinaryReader): CreateFeatureRequest;
}

export namespace CreateFeatureRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature.AsObject,
  }
}

export class UpdateFeatureRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature): UpdateFeatureRequest;
  hasItem(): boolean;
  clearItem(): UpdateFeatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeatureRequest): UpdateFeatureRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFeatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeatureRequest;
  static deserializeBinaryFromReader(message: UpdateFeatureRequest, reader: jspb.BinaryReader): UpdateFeatureRequest;
}

export namespace UpdateFeatureRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Feature.AsObject,
  }
}

export class DeleteFeatureRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteFeatureRequest;

  getName(): string;
  setName(value: string): DeleteFeatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeatureRequest): DeleteFeatureRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFeatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeatureRequest;
  static deserializeBinaryFromReader(message: DeleteFeatureRequest, reader: jspb.BinaryReader): DeleteFeatureRequest;
}

export namespace DeleteFeatureRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListFeaturePipelinesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListFeaturePipelinesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFeaturePipelinesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFeaturePipelinesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturePipelinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturePipelinesRequest): ListFeaturePipelinesRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeaturePipelinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturePipelinesRequest;
  static deserializeBinaryFromReader(message: ListFeaturePipelinesRequest, reader: jspb.BinaryReader): ListFeaturePipelinesRequest;
}

export namespace ListFeaturePipelinesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListFeaturePipelinesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline>): ListFeaturePipelinesResponse;
  clearItemsList(): ListFeaturePipelinesResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFeaturePipelinesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturePipelinesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturePipelinesResponse): ListFeaturePipelinesResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeaturePipelinesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturePipelinesResponse;
  static deserializeBinaryFromReader(message: ListFeaturePipelinesResponse, reader: jspb.BinaryReader): ListFeaturePipelinesResponse;
}

export namespace ListFeaturePipelinesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline.AsObject>,
    nextPageToken: string,
  }
}

export class GetFeaturePipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetFeaturePipelineRequest;

  getName(): string;
  setName(value: string): GetFeaturePipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeaturePipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeaturePipelineRequest): GetFeaturePipelineRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeaturePipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeaturePipelineRequest;
  static deserializeBinaryFromReader(message: GetFeaturePipelineRequest, reader: jspb.BinaryReader): GetFeaturePipelineRequest;
}

export namespace GetFeaturePipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateFeaturePipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline): CreateFeaturePipelineRequest;
  hasItem(): boolean;
  clearItem(): CreateFeaturePipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeaturePipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeaturePipelineRequest): CreateFeaturePipelineRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeaturePipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeaturePipelineRequest;
  static deserializeBinaryFromReader(message: CreateFeaturePipelineRequest, reader: jspb.BinaryReader): CreateFeaturePipelineRequest;
}

export namespace CreateFeaturePipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline.AsObject,
  }
}

export class UpdateFeaturePipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline): UpdateFeaturePipelineRequest;
  hasItem(): boolean;
  clearItem(): UpdateFeaturePipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeaturePipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeaturePipelineRequest): UpdateFeaturePipelineRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFeaturePipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeaturePipelineRequest;
  static deserializeBinaryFromReader(message: UpdateFeaturePipelineRequest, reader: jspb.BinaryReader): UpdateFeaturePipelineRequest;
}

export namespace UpdateFeaturePipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipeline.AsObject,
  }
}

export class DeleteFeaturePipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteFeaturePipelineRequest;

  getName(): string;
  setName(value: string): DeleteFeaturePipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeaturePipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeaturePipelineRequest): DeleteFeaturePipelineRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFeaturePipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeaturePipelineRequest;
  static deserializeBinaryFromReader(message: DeleteFeaturePipelineRequest, reader: jspb.BinaryReader): DeleteFeaturePipelineRequest;
}

export namespace DeleteFeaturePipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListFeaturePipelineRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListFeaturePipelineRunsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFeaturePipelineRunsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFeaturePipelineRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturePipelineRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturePipelineRunsRequest): ListFeaturePipelineRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeaturePipelineRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturePipelineRunsRequest;
  static deserializeBinaryFromReader(message: ListFeaturePipelineRunsRequest, reader: jspb.BinaryReader): ListFeaturePipelineRunsRequest;
}

export namespace ListFeaturePipelineRunsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListFeaturePipelineRunsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun>): ListFeaturePipelineRunsResponse;
  clearItemsList(): ListFeaturePipelineRunsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFeaturePipelineRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturePipelineRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturePipelineRunsResponse): ListFeaturePipelineRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeaturePipelineRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturePipelineRunsResponse;
  static deserializeBinaryFromReader(message: ListFeaturePipelineRunsResponse, reader: jspb.BinaryReader): ListFeaturePipelineRunsResponse;
}

export namespace ListFeaturePipelineRunsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.AsObject>,
    nextPageToken: string,
  }
}

export class GetFeaturePipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetFeaturePipelineRunRequest;

  getName(): string;
  setName(value: string): GetFeaturePipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeaturePipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeaturePipelineRunRequest): GetFeaturePipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeaturePipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeaturePipelineRunRequest;
  static deserializeBinaryFromReader(message: GetFeaturePipelineRunRequest, reader: jspb.BinaryReader): GetFeaturePipelineRunRequest;
}

export namespace GetFeaturePipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateFeaturePipelineRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun): CreateFeaturePipelineRunRequest;
  hasItem(): boolean;
  clearItem(): CreateFeaturePipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeaturePipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeaturePipelineRunRequest): CreateFeaturePipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeaturePipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeaturePipelineRunRequest;
  static deserializeBinaryFromReader(message: CreateFeaturePipelineRunRequest, reader: jspb.BinaryReader): CreateFeaturePipelineRunRequest;
}

export namespace CreateFeaturePipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.AsObject,
  }
}

export class UpdateFeaturePipelineRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun): UpdateFeaturePipelineRunRequest;
  hasItem(): boolean;
  clearItem(): UpdateFeaturePipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeaturePipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeaturePipelineRunRequest): UpdateFeaturePipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFeaturePipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeaturePipelineRunRequest;
  static deserializeBinaryFromReader(message: UpdateFeaturePipelineRunRequest, reader: jspb.BinaryReader): UpdateFeaturePipelineRunRequest;
}

export namespace UpdateFeaturePipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FeaturePipelineRun.AsObject,
  }
}

export class DeleteFeaturePipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteFeaturePipelineRunRequest;

  getName(): string;
  setName(value: string): DeleteFeaturePipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeaturePipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeaturePipelineRunRequest): DeleteFeaturePipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFeaturePipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeaturePipelineRunRequest;
  static deserializeBinaryFromReader(message: DeleteFeaturePipelineRunRequest, reader: jspb.BinaryReader): DeleteFeaturePipelineRunRequest;
}

export namespace DeleteFeaturePipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListFeaturesetsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListFeaturesetsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFeaturesetsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListFeaturesetsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturesetsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturesetsRequest): ListFeaturesetsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeaturesetsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturesetsRequest;
  static deserializeBinaryFromReader(message: ListFeaturesetsRequest, reader: jspb.BinaryReader): ListFeaturesetsRequest;
}

export namespace ListFeaturesetsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListFeaturesetsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset>): ListFeaturesetsResponse;
  clearItemsList(): ListFeaturesetsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListFeaturesetsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeaturesetsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeaturesetsResponse): ListFeaturesetsResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeaturesetsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeaturesetsResponse;
  static deserializeBinaryFromReader(message: ListFeaturesetsResponse, reader: jspb.BinaryReader): ListFeaturesetsResponse;
}

export namespace ListFeaturesetsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset.AsObject>,
    nextPageToken: string,
  }
}

export class GetFeaturesetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetFeaturesetRequest;

  getName(): string;
  setName(value: string): GetFeaturesetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeaturesetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeaturesetRequest): GetFeaturesetRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeaturesetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeaturesetRequest;
  static deserializeBinaryFromReader(message: GetFeaturesetRequest, reader: jspb.BinaryReader): GetFeaturesetRequest;
}

export namespace GetFeaturesetRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateFeaturesetRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset): CreateFeaturesetRequest;
  hasItem(): boolean;
  clearItem(): CreateFeaturesetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeaturesetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeaturesetRequest): CreateFeaturesetRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeaturesetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeaturesetRequest;
  static deserializeBinaryFromReader(message: CreateFeaturesetRequest, reader: jspb.BinaryReader): CreateFeaturesetRequest;
}

export namespace CreateFeaturesetRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset.AsObject,
  }
}

export class UpdateFeaturesetRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset): UpdateFeaturesetRequest;
  hasItem(): boolean;
  clearItem(): UpdateFeaturesetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateFeaturesetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateFeaturesetRequest): UpdateFeaturesetRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateFeaturesetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateFeaturesetRequest;
  static deserializeBinaryFromReader(message: UpdateFeaturesetRequest, reader: jspb.BinaryReader): UpdateFeaturesetRequest;
}

export namespace UpdateFeaturesetRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Featureset.AsObject,
  }
}

export class DeleteFeaturesetRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteFeaturesetRequest;

  getName(): string;
  setName(value: string): DeleteFeaturesetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFeaturesetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFeaturesetRequest): DeleteFeaturesetRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFeaturesetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFeaturesetRequest;
  static deserializeBinaryFromReader(message: DeleteFeaturesetRequest, reader: jspb.BinaryReader): DeleteFeaturesetRequest;
}

export namespace DeleteFeaturesetRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListLabelingPipelinesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListLabelingPipelinesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListLabelingPipelinesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLabelingPipelinesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabelingPipelinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabelingPipelinesRequest): ListLabelingPipelinesRequest.AsObject;
  static serializeBinaryToWriter(message: ListLabelingPipelinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabelingPipelinesRequest;
  static deserializeBinaryFromReader(message: ListLabelingPipelinesRequest, reader: jspb.BinaryReader): ListLabelingPipelinesRequest;
}

export namespace ListLabelingPipelinesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListLabelingPipelinesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline>): ListLabelingPipelinesResponse;
  clearItemsList(): ListLabelingPipelinesResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLabelingPipelinesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabelingPipelinesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabelingPipelinesResponse): ListLabelingPipelinesResponse.AsObject;
  static serializeBinaryToWriter(message: ListLabelingPipelinesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabelingPipelinesResponse;
  static deserializeBinaryFromReader(message: ListLabelingPipelinesResponse, reader: jspb.BinaryReader): ListLabelingPipelinesResponse;
}

export namespace ListLabelingPipelinesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline.AsObject>,
    nextPageToken: string,
  }
}

export class GetLabelingPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetLabelingPipelineRequest;

  getName(): string;
  setName(value: string): GetLabelingPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabelingPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabelingPipelineRequest): GetLabelingPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: GetLabelingPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabelingPipelineRequest;
  static deserializeBinaryFromReader(message: GetLabelingPipelineRequest, reader: jspb.BinaryReader): GetLabelingPipelineRequest;
}

export namespace GetLabelingPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateLabelingPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline): CreateLabelingPipelineRequest;
  hasItem(): boolean;
  clearItem(): CreateLabelingPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabelingPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabelingPipelineRequest): CreateLabelingPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLabelingPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabelingPipelineRequest;
  static deserializeBinaryFromReader(message: CreateLabelingPipelineRequest, reader: jspb.BinaryReader): CreateLabelingPipelineRequest;
}

export namespace CreateLabelingPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline.AsObject,
  }
}

export class UpdateLabelingPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline): UpdateLabelingPipelineRequest;
  hasItem(): boolean;
  clearItem(): UpdateLabelingPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabelingPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabelingPipelineRequest): UpdateLabelingPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLabelingPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabelingPipelineRequest;
  static deserializeBinaryFromReader(message: UpdateLabelingPipelineRequest, reader: jspb.BinaryReader): UpdateLabelingPipelineRequest;
}

export namespace UpdateLabelingPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipeline.AsObject,
  }
}

export class DeleteLabelingPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteLabelingPipelineRequest;

  getName(): string;
  setName(value: string): DeleteLabelingPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLabelingPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLabelingPipelineRequest): DeleteLabelingPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLabelingPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLabelingPipelineRequest;
  static deserializeBinaryFromReader(message: DeleteLabelingPipelineRequest, reader: jspb.BinaryReader): DeleteLabelingPipelineRequest;
}

export namespace DeleteLabelingPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListLabelingPipelineRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListLabelingPipelineRunsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListLabelingPipelineRunsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListLabelingPipelineRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabelingPipelineRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabelingPipelineRunsRequest): ListLabelingPipelineRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLabelingPipelineRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabelingPipelineRunsRequest;
  static deserializeBinaryFromReader(message: ListLabelingPipelineRunsRequest, reader: jspb.BinaryReader): ListLabelingPipelineRunsRequest;
}

export namespace ListLabelingPipelineRunsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListLabelingPipelineRunsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun>): ListLabelingPipelineRunsResponse;
  clearItemsList(): ListLabelingPipelineRunsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListLabelingPipelineRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLabelingPipelineRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLabelingPipelineRunsResponse): ListLabelingPipelineRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLabelingPipelineRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLabelingPipelineRunsResponse;
  static deserializeBinaryFromReader(message: ListLabelingPipelineRunsResponse, reader: jspb.BinaryReader): ListLabelingPipelineRunsResponse;
}

export namespace ListLabelingPipelineRunsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.AsObject>,
    nextPageToken: string,
  }
}

export class GetLabelingPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetLabelingPipelineRunRequest;

  getName(): string;
  setName(value: string): GetLabelingPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLabelingPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLabelingPipelineRunRequest): GetLabelingPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetLabelingPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLabelingPipelineRunRequest;
  static deserializeBinaryFromReader(message: GetLabelingPipelineRunRequest, reader: jspb.BinaryReader): GetLabelingPipelineRunRequest;
}

export namespace GetLabelingPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateLabelingPipelineRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun): CreateLabelingPipelineRunRequest;
  hasItem(): boolean;
  clearItem(): CreateLabelingPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLabelingPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLabelingPipelineRunRequest): CreateLabelingPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLabelingPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLabelingPipelineRunRequest;
  static deserializeBinaryFromReader(message: CreateLabelingPipelineRunRequest, reader: jspb.BinaryReader): CreateLabelingPipelineRunRequest;
}

export namespace CreateLabelingPipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.AsObject,
  }
}

export class UpdateLabelingPipelineRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun): UpdateLabelingPipelineRunRequest;
  hasItem(): boolean;
  clearItem(): UpdateLabelingPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLabelingPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLabelingPipelineRunRequest): UpdateLabelingPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLabelingPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLabelingPipelineRunRequest;
  static deserializeBinaryFromReader(message: UpdateLabelingPipelineRunRequest, reader: jspb.BinaryReader): UpdateLabelingPipelineRunRequest;
}

export namespace UpdateLabelingPipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.LabelingPipelineRun.AsObject,
  }
}

export class DeleteLabelingPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteLabelingPipelineRunRequest;

  getName(): string;
  setName(value: string): DeleteLabelingPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLabelingPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLabelingPipelineRunRequest): DeleteLabelingPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLabelingPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLabelingPipelineRunRequest;
  static deserializeBinaryFromReader(message: DeleteLabelingPipelineRunRequest, reader: jspb.BinaryReader): DeleteLabelingPipelineRunRequest;
}

export namespace DeleteLabelingPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListRecipesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListRecipesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListRecipesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListRecipesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipesRequest): ListRecipesRequest.AsObject;
  static serializeBinaryToWriter(message: ListRecipesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipesRequest;
  static deserializeBinaryFromReader(message: ListRecipesRequest, reader: jspb.BinaryReader): ListRecipesRequest;
}

export namespace ListRecipesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListRecipesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe>): ListRecipesResponse;
  clearItemsList(): ListRecipesResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListRecipesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipesResponse): ListRecipesResponse.AsObject;
  static serializeBinaryToWriter(message: ListRecipesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipesResponse;
  static deserializeBinaryFromReader(message: ListRecipesResponse, reader: jspb.BinaryReader): ListRecipesResponse;
}

export namespace ListRecipesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.AsObject>,
    nextPageToken: string,
  }
}

export class GetRecipeRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetRecipeRequest;

  getName(): string;
  setName(value: string): GetRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecipeRequest): GetRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecipeRequest;
  static deserializeBinaryFromReader(message: GetRecipeRequest, reader: jspb.BinaryReader): GetRecipeRequest;
}

export namespace GetRecipeRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateRecipeRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe): CreateRecipeRequest;
  hasItem(): boolean;
  clearItem(): CreateRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRecipeRequest): CreateRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRecipeRequest;
  static deserializeBinaryFromReader(message: CreateRecipeRequest, reader: jspb.BinaryReader): CreateRecipeRequest;
}

export namespace CreateRecipeRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.AsObject,
  }
}

export class UpdateRecipeRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe): UpdateRecipeRequest;
  hasItem(): boolean;
  clearItem(): UpdateRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecipeRequest): UpdateRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecipeRequest;
  static deserializeBinaryFromReader(message: UpdateRecipeRequest, reader: jspb.BinaryReader): UpdateRecipeRequest;
}

export namespace UpdateRecipeRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.AsObject,
  }
}

export class DeleteRecipeRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteRecipeRequest;

  getName(): string;
  setName(value: string): DeleteRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRecipeRequest): DeleteRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRecipeRequest;
  static deserializeBinaryFromReader(message: DeleteRecipeRequest, reader: jspb.BinaryReader): DeleteRecipeRequest;
}

export namespace DeleteRecipeRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListRecipeRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListRecipeRunsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListRecipeRunsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListRecipeRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipeRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipeRunsRequest): ListRecipeRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListRecipeRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipeRunsRequest;
  static deserializeBinaryFromReader(message: ListRecipeRunsRequest, reader: jspb.BinaryReader): ListRecipeRunsRequest;
}

export namespace ListRecipeRunsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListRecipeRunsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun>): ListRecipeRunsResponse;
  clearItemsList(): ListRecipeRunsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun, index?: number): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListRecipeRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRecipeRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRecipeRunsResponse): ListRecipeRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListRecipeRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRecipeRunsResponse;
  static deserializeBinaryFromReader(message: ListRecipeRunsResponse, reader: jspb.BinaryReader): ListRecipeRunsResponse;
}

export namespace ListRecipeRunsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.AsObject>,
    nextPageToken: string,
  }
}

export class GetRecipeRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetRecipeRunRequest;

  getName(): string;
  setName(value: string): GetRecipeRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRecipeRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRecipeRunRequest): GetRecipeRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetRecipeRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRecipeRunRequest;
  static deserializeBinaryFromReader(message: GetRecipeRunRequest, reader: jspb.BinaryReader): GetRecipeRunRequest;
}

export namespace GetRecipeRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateRecipeRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun): CreateRecipeRunRequest;
  hasItem(): boolean;
  clearItem(): CreateRecipeRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRecipeRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRecipeRunRequest): CreateRecipeRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRecipeRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRecipeRunRequest;
  static deserializeBinaryFromReader(message: CreateRecipeRunRequest, reader: jspb.BinaryReader): CreateRecipeRunRequest;
}

export namespace CreateRecipeRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.AsObject,
  }
}

export class UpdateRecipeRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun): UpdateRecipeRunRequest;
  hasItem(): boolean;
  clearItem(): UpdateRecipeRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRecipeRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRecipeRunRequest): UpdateRecipeRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRecipeRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRecipeRunRequest;
  static deserializeBinaryFromReader(message: UpdateRecipeRunRequest, reader: jspb.BinaryReader): UpdateRecipeRunRequest;
}

export namespace UpdateRecipeRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.AsObject,
  }
}

export class DeleteRecipeRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteRecipeRunRequest;

  getName(): string;
  setName(value: string): DeleteRecipeRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRecipeRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRecipeRunRequest): DeleteRecipeRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRecipeRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRecipeRunRequest;
  static deserializeBinaryFromReader(message: DeleteRecipeRunRequest, reader: jspb.BinaryReader): DeleteRecipeRunRequest;
}

export namespace DeleteRecipeRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListModelAutobuildersRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelAutobuildersRequest;

  getPageSize(): number;
  setPageSize(value: number): ListModelAutobuildersRequest;

  getPageToken(): string;
  setPageToken(value: string): ListModelAutobuildersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelAutobuildersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelAutobuildersRequest): ListModelAutobuildersRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelAutobuildersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelAutobuildersRequest;
  static deserializeBinaryFromReader(message: ListModelAutobuildersRequest, reader: jspb.BinaryReader): ListModelAutobuildersRequest;
}

export namespace ListModelAutobuildersRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListModelAutobuildersResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder>): ListModelAutobuildersResponse;
  clearItemsList(): ListModelAutobuildersResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListModelAutobuildersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelAutobuildersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelAutobuildersResponse): ListModelAutobuildersResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelAutobuildersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelAutobuildersResponse;
  static deserializeBinaryFromReader(message: ListModelAutobuildersResponse, reader: jspb.BinaryReader): ListModelAutobuildersResponse;
}

export namespace ListModelAutobuildersResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.AsObject>,
    nextPageToken: string,
  }
}

export class GetModelAutobuilderRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelAutobuilderRequest;

  getName(): string;
  setName(value: string): GetModelAutobuilderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelAutobuilderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelAutobuilderRequest): GetModelAutobuilderRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelAutobuilderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelAutobuilderRequest;
  static deserializeBinaryFromReader(message: GetModelAutobuilderRequest, reader: jspb.BinaryReader): GetModelAutobuilderRequest;
}

export namespace GetModelAutobuilderRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateModelAutobuilderRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder): CreateModelAutobuilderRequest;
  hasItem(): boolean;
  clearItem(): CreateModelAutobuilderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelAutobuilderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelAutobuilderRequest): CreateModelAutobuilderRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelAutobuilderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelAutobuilderRequest;
  static deserializeBinaryFromReader(message: CreateModelAutobuilderRequest, reader: jspb.BinaryReader): CreateModelAutobuilderRequest;
}

export namespace CreateModelAutobuilderRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.AsObject,
  }
}

export class UpdateModelAutobuilderRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder): UpdateModelAutobuilderRequest;
  hasItem(): boolean;
  clearItem(): UpdateModelAutobuilderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelAutobuilderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelAutobuilderRequest): UpdateModelAutobuilderRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelAutobuilderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelAutobuilderRequest;
  static deserializeBinaryFromReader(message: UpdateModelAutobuilderRequest, reader: jspb.BinaryReader): UpdateModelAutobuilderRequest;
}

export namespace UpdateModelAutobuilderRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelAutobuilder.AsObject,
  }
}

export class DeleteModelAutobuilderRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteModelAutobuilderRequest;

  getName(): string;
  setName(value: string): DeleteModelAutobuilderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelAutobuilderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelAutobuilderRequest): DeleteModelAutobuilderRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelAutobuilderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelAutobuilderRequest;
  static deserializeBinaryFromReader(message: DeleteModelAutobuilderRequest, reader: jspb.BinaryReader): DeleteModelAutobuilderRequest;
}

export namespace DeleteModelAutobuilderRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListModelsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListModelsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListModelsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsRequest): ListModelsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsRequest;
  static deserializeBinaryFromReader(message: ListModelsRequest, reader: jspb.BinaryReader): ListModelsRequest;
}

export namespace ListModelsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListModelsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model>): ListModelsResponse;
  clearItemsList(): ListModelsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListModelsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelsResponse): ListModelsResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelsResponse;
  static deserializeBinaryFromReader(message: ListModelsResponse, reader: jspb.BinaryReader): ListModelsResponse;
}

export namespace ListModelsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
    nextPageToken: string,
  }
}

export class GetModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelRequest;

  getName(): string;
  setName(value: string): GetModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelRequest): GetModelRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelRequest;
  static deserializeBinaryFromReader(message: GetModelRequest, reader: jspb.BinaryReader): GetModelRequest;
}

export namespace GetModelRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateModelRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model): CreateModelRequest;
  hasItem(): boolean;
  clearItem(): CreateModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelRequest): CreateModelRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelRequest;
  static deserializeBinaryFromReader(message: CreateModelRequest, reader: jspb.BinaryReader): CreateModelRequest;
}

export namespace CreateModelRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
  }
}

export class UpdateModelRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model): UpdateModelRequest;
  hasItem(): boolean;
  clearItem(): UpdateModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelRequest): UpdateModelRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelRequest;
  static deserializeBinaryFromReader(message: UpdateModelRequest, reader: jspb.BinaryReader): UpdateModelRequest;
}

export namespace UpdateModelRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
  }
}

export class DeleteModelRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteModelRequest;

  getName(): string;
  setName(value: string): DeleteModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelRequest): DeleteModelRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelRequest;
  static deserializeBinaryFromReader(message: DeleteModelRequest, reader: jspb.BinaryReader): DeleteModelRequest;
}

export namespace DeleteModelRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListModelPipelinesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelPipelinesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListModelPipelinesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListModelPipelinesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelPipelinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelPipelinesRequest): ListModelPipelinesRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelPipelinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelPipelinesRequest;
  static deserializeBinaryFromReader(message: ListModelPipelinesRequest, reader: jspb.BinaryReader): ListModelPipelinesRequest;
}

export namespace ListModelPipelinesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListModelPipelinesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline>): ListModelPipelinesResponse;
  clearItemsList(): ListModelPipelinesResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListModelPipelinesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelPipelinesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelPipelinesResponse): ListModelPipelinesResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelPipelinesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelPipelinesResponse;
  static deserializeBinaryFromReader(message: ListModelPipelinesResponse, reader: jspb.BinaryReader): ListModelPipelinesResponse;
}

export namespace ListModelPipelinesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.AsObject>,
    nextPageToken: string,
  }
}

export class GetModelPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelPipelineRequest;

  getName(): string;
  setName(value: string): GetModelPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelPipelineRequest): GetModelPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelPipelineRequest;
  static deserializeBinaryFromReader(message: GetModelPipelineRequest, reader: jspb.BinaryReader): GetModelPipelineRequest;
}

export namespace GetModelPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateModelPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline): CreateModelPipelineRequest;
  hasItem(): boolean;
  clearItem(): CreateModelPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelPipelineRequest): CreateModelPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelPipelineRequest;
  static deserializeBinaryFromReader(message: CreateModelPipelineRequest, reader: jspb.BinaryReader): CreateModelPipelineRequest;
}

export namespace CreateModelPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.AsObject,
  }
}

export class UpdateModelPipelineRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline): UpdateModelPipelineRequest;
  hasItem(): boolean;
  clearItem(): UpdateModelPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelPipelineRequest): UpdateModelPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelPipelineRequest;
  static deserializeBinaryFromReader(message: UpdateModelPipelineRequest, reader: jspb.BinaryReader): UpdateModelPipelineRequest;
}

export namespace UpdateModelPipelineRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipeline.AsObject,
  }
}

export class DeleteModelPipelineRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteModelPipelineRequest;

  getName(): string;
  setName(value: string): DeleteModelPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelPipelineRequest): DeleteModelPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelPipelineRequest;
  static deserializeBinaryFromReader(message: DeleteModelPipelineRequest, reader: jspb.BinaryReader): DeleteModelPipelineRequest;
}

export namespace DeleteModelPipelineRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListModelPipelineRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListModelPipelineRunsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListModelPipelineRunsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListModelPipelineRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelPipelineRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelPipelineRunsRequest): ListModelPipelineRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListModelPipelineRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelPipelineRunsRequest;
  static deserializeBinaryFromReader(message: ListModelPipelineRunsRequest, reader: jspb.BinaryReader): ListModelPipelineRunsRequest;
}

export namespace ListModelPipelineRunsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListModelPipelineRunsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun>): ListModelPipelineRunsResponse;
  clearItemsList(): ListModelPipelineRunsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListModelPipelineRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListModelPipelineRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListModelPipelineRunsResponse): ListModelPipelineRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListModelPipelineRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListModelPipelineRunsResponse;
  static deserializeBinaryFromReader(message: ListModelPipelineRunsResponse, reader: jspb.BinaryReader): ListModelPipelineRunsResponse;
}

export namespace ListModelPipelineRunsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.AsObject>,
    nextPageToken: string,
  }
}

export class GetModelPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetModelPipelineRunRequest;

  getName(): string;
  setName(value: string): GetModelPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetModelPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetModelPipelineRunRequest): GetModelPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetModelPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetModelPipelineRunRequest;
  static deserializeBinaryFromReader(message: GetModelPipelineRunRequest, reader: jspb.BinaryReader): GetModelPipelineRunRequest;
}

export namespace GetModelPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateModelPipelineRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun): CreateModelPipelineRunRequest;
  hasItem(): boolean;
  clearItem(): CreateModelPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelPipelineRunRequest): CreateModelPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelPipelineRunRequest;
  static deserializeBinaryFromReader(message: CreateModelPipelineRunRequest, reader: jspb.BinaryReader): CreateModelPipelineRunRequest;
}

export namespace CreateModelPipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.AsObject,
  }
}

export class UpdateModelPipelineRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun): UpdateModelPipelineRunRequest;
  hasItem(): boolean;
  clearItem(): UpdateModelPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateModelPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateModelPipelineRunRequest): UpdateModelPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateModelPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateModelPipelineRunRequest;
  static deserializeBinaryFromReader(message: UpdateModelPipelineRunRequest, reader: jspb.BinaryReader): UpdateModelPipelineRunRequest;
}

export namespace UpdateModelPipelineRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelPipelineRun.AsObject,
  }
}

export class DeleteModelPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteModelPipelineRunRequest;

  getName(): string;
  setName(value: string): DeleteModelPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteModelPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteModelPipelineRunRequest): DeleteModelPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteModelPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteModelPipelineRunRequest;
  static deserializeBinaryFromReader(message: DeleteModelPipelineRunRequest, reader: jspb.BinaryReader): DeleteModelPipelineRunRequest;
}

export namespace DeleteModelPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListNotebooksRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListNotebooksRequest;

  getPageSize(): number;
  setPageSize(value: number): ListNotebooksRequest;

  getPageToken(): string;
  setPageToken(value: string): ListNotebooksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotebooksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotebooksRequest): ListNotebooksRequest.AsObject;
  static serializeBinaryToWriter(message: ListNotebooksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotebooksRequest;
  static deserializeBinaryFromReader(message: ListNotebooksRequest, reader: jspb.BinaryReader): ListNotebooksRequest;
}

export namespace ListNotebooksRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListNotebooksResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook>): ListNotebooksResponse;
  clearItemsList(): ListNotebooksResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListNotebooksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotebooksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotebooksResponse): ListNotebooksResponse.AsObject;
  static serializeBinaryToWriter(message: ListNotebooksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotebooksResponse;
  static deserializeBinaryFromReader(message: ListNotebooksResponse, reader: jspb.BinaryReader): ListNotebooksResponse;
}

export namespace ListNotebooksResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook.AsObject>,
    nextPageToken: string,
  }
}

export class GetNotebookRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetNotebookRequest;

  getName(): string;
  setName(value: string): GetNotebookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotebookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotebookRequest): GetNotebookRequest.AsObject;
  static serializeBinaryToWriter(message: GetNotebookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotebookRequest;
  static deserializeBinaryFromReader(message: GetNotebookRequest, reader: jspb.BinaryReader): GetNotebookRequest;
}

export namespace GetNotebookRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateNotebookRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook): CreateNotebookRequest;
  hasItem(): boolean;
  clearItem(): CreateNotebookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNotebookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNotebookRequest): CreateNotebookRequest.AsObject;
  static serializeBinaryToWriter(message: CreateNotebookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNotebookRequest;
  static deserializeBinaryFromReader(message: CreateNotebookRequest, reader: jspb.BinaryReader): CreateNotebookRequest;
}

export namespace CreateNotebookRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook.AsObject,
  }
}

export class UpdateNotebookRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook): UpdateNotebookRequest;
  hasItem(): boolean;
  clearItem(): UpdateNotebookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotebookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotebookRequest): UpdateNotebookRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateNotebookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotebookRequest;
  static deserializeBinaryFromReader(message: UpdateNotebookRequest, reader: jspb.BinaryReader): UpdateNotebookRequest;
}

export namespace UpdateNotebookRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Notebook.AsObject,
  }
}

export class DeleteNotebookRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteNotebookRequest;

  getName(): string;
  setName(value: string): DeleteNotebookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNotebookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNotebookRequest): DeleteNotebookRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteNotebookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNotebookRequest;
  static deserializeBinaryFromReader(message: DeleteNotebookRequest, reader: jspb.BinaryReader): DeleteNotebookRequest;
}

export namespace DeleteNotebookRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListNotebookRunsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListNotebookRunsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListNotebookRunsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListNotebookRunsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotebookRunsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotebookRunsRequest): ListNotebookRunsRequest.AsObject;
  static serializeBinaryToWriter(message: ListNotebookRunsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotebookRunsRequest;
  static deserializeBinaryFromReader(message: ListNotebookRunsRequest, reader: jspb.BinaryReader): ListNotebookRunsRequest;
}

export namespace ListNotebookRunsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListNotebookRunsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun>): ListNotebookRunsResponse;
  clearItemsList(): ListNotebookRunsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListNotebookRunsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListNotebookRunsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListNotebookRunsResponse): ListNotebookRunsResponse.AsObject;
  static serializeBinaryToWriter(message: ListNotebookRunsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListNotebookRunsResponse;
  static deserializeBinaryFromReader(message: ListNotebookRunsResponse, reader: jspb.BinaryReader): ListNotebookRunsResponse;
}

export namespace ListNotebookRunsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.AsObject>,
    nextPageToken: string,
  }
}

export class GetNotebookRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetNotebookRunRequest;

  getName(): string;
  setName(value: string): GetNotebookRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetNotebookRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetNotebookRunRequest): GetNotebookRunRequest.AsObject;
  static serializeBinaryToWriter(message: GetNotebookRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetNotebookRunRequest;
  static deserializeBinaryFromReader(message: GetNotebookRunRequest, reader: jspb.BinaryReader): GetNotebookRunRequest;
}

export namespace GetNotebookRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateNotebookRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun): CreateNotebookRunRequest;
  hasItem(): boolean;
  clearItem(): CreateNotebookRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateNotebookRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateNotebookRunRequest): CreateNotebookRunRequest.AsObject;
  static serializeBinaryToWriter(message: CreateNotebookRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateNotebookRunRequest;
  static deserializeBinaryFromReader(message: CreateNotebookRunRequest, reader: jspb.BinaryReader): CreateNotebookRunRequest;
}

export namespace CreateNotebookRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.AsObject,
  }
}

export class UpdateNotebookRunRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun): UpdateNotebookRunRequest;
  hasItem(): boolean;
  clearItem(): UpdateNotebookRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateNotebookRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateNotebookRunRequest): UpdateNotebookRunRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateNotebookRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateNotebookRunRequest;
  static deserializeBinaryFromReader(message: UpdateNotebookRunRequest, reader: jspb.BinaryReader): UpdateNotebookRunRequest;
}

export namespace UpdateNotebookRunRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.NotebookRun.AsObject,
  }
}

export class DeleteNotebookRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteNotebookRunRequest;

  getName(): string;
  setName(value: string): DeleteNotebookRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteNotebookRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteNotebookRunRequest): DeleteNotebookRunRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteNotebookRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteNotebookRunRequest;
  static deserializeBinaryFromReader(message: DeleteNotebookRunRequest, reader: jspb.BinaryReader): DeleteNotebookRunRequest;
}

export namespace DeleteNotebookRunRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListReportsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListReportsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListReportsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListReportsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReportsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListReportsRequest): ListReportsRequest.AsObject;
  static serializeBinaryToWriter(message: ListReportsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReportsRequest;
  static deserializeBinaryFromReader(message: ListReportsRequest, reader: jspb.BinaryReader): ListReportsRequest;
}

export namespace ListReportsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListReportsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report>): ListReportsResponse;
  clearItemsList(): ListReportsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListReportsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListReportsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListReportsResponse): ListReportsResponse.AsObject;
  static serializeBinaryToWriter(message: ListReportsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListReportsResponse;
  static deserializeBinaryFromReader(message: ListReportsResponse, reader: jspb.BinaryReader): ListReportsResponse;
}

export namespace ListReportsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject>,
    nextPageToken: string,
  }
}

export class GetReportRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetReportRequest;

  getName(): string;
  setName(value: string): GetReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReportRequest): GetReportRequest.AsObject;
  static serializeBinaryToWriter(message: GetReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReportRequest;
  static deserializeBinaryFromReader(message: GetReportRequest, reader: jspb.BinaryReader): GetReportRequest;
}

export namespace GetReportRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateReportRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report): CreateReportRequest;
  hasItem(): boolean;
  clearItem(): CreateReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReportRequest): CreateReportRequest.AsObject;
  static serializeBinaryToWriter(message: CreateReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReportRequest;
  static deserializeBinaryFromReader(message: CreateReportRequest, reader: jspb.BinaryReader): CreateReportRequest;
}

export namespace CreateReportRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
  }
}

export class UpdateReportRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report): UpdateReportRequest;
  hasItem(): boolean;
  clearItem(): UpdateReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateReportRequest): UpdateReportRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateReportRequest;
  static deserializeBinaryFromReader(message: UpdateReportRequest, reader: jspb.BinaryReader): UpdateReportRequest;
}

export namespace UpdateReportRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
  }
}

export class DeleteReportRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteReportRequest;

  getName(): string;
  setName(value: string): DeleteReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteReportRequest): DeleteReportRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteReportRequest;
  static deserializeBinaryFromReader(message: DeleteReportRequest, reader: jspb.BinaryReader): DeleteReportRequest;
}

export namespace DeleteReportRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListCronReportsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListCronReportsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCronReportsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCronReportsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCronReportsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCronReportsRequest): ListCronReportsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCronReportsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCronReportsRequest;
  static deserializeBinaryFromReader(message: ListCronReportsRequest, reader: jspb.BinaryReader): ListCronReportsRequest;
}

export namespace ListCronReportsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListCronReportsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport>): ListCronReportsResponse;
  clearItemsList(): ListCronReportsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCronReportsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCronReportsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCronReportsResponse): ListCronReportsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCronReportsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCronReportsResponse;
  static deserializeBinaryFromReader(message: ListCronReportsResponse, reader: jspb.BinaryReader): ListCronReportsResponse;
}

export namespace ListCronReportsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport.AsObject>,
    nextPageToken: string,
  }
}

export class GetCronReportRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetCronReportRequest;

  getName(): string;
  setName(value: string): GetCronReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCronReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCronReportRequest): GetCronReportRequest.AsObject;
  static serializeBinaryToWriter(message: GetCronReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCronReportRequest;
  static deserializeBinaryFromReader(message: GetCronReportRequest, reader: jspb.BinaryReader): GetCronReportRequest;
}

export namespace GetCronReportRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateCronReportRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport): CreateCronReportRequest;
  hasItem(): boolean;
  clearItem(): CreateCronReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCronReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCronReportRequest): CreateCronReportRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCronReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCronReportRequest;
  static deserializeBinaryFromReader(message: CreateCronReportRequest, reader: jspb.BinaryReader): CreateCronReportRequest;
}

export namespace CreateCronReportRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport.AsObject,
  }
}

export class UpdateCronReportRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport): UpdateCronReportRequest;
  hasItem(): boolean;
  clearItem(): UpdateCronReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCronReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCronReportRequest): UpdateCronReportRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCronReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCronReportRequest;
  static deserializeBinaryFromReader(message: UpdateCronReportRequest, reader: jspb.BinaryReader): UpdateCronReportRequest;
}

export namespace UpdateCronReportRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.CronReport.AsObject,
  }
}

export class DeleteCronReportRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteCronReportRequest;

  getName(): string;
  setName(value: string): DeleteCronReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCronReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCronReportRequest): DeleteCronReportRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCronReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCronReportRequest;
  static deserializeBinaryFromReader(message: DeleteCronReportRequest, reader: jspb.BinaryReader): DeleteCronReportRequest;
}

export namespace DeleteCronReportRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListStudiesRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListStudiesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListStudiesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListStudiesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStudiesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListStudiesRequest): ListStudiesRequest.AsObject;
  static serializeBinaryToWriter(message: ListStudiesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStudiesRequest;
  static deserializeBinaryFromReader(message: ListStudiesRequest, reader: jspb.BinaryReader): ListStudiesRequest;
}

export namespace ListStudiesRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListStudiesResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study>): ListStudiesResponse;
  clearItemsList(): ListStudiesResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListStudiesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListStudiesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListStudiesResponse): ListStudiesResponse.AsObject;
  static serializeBinaryToWriter(message: ListStudiesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListStudiesResponse;
  static deserializeBinaryFromReader(message: ListStudiesResponse, reader: jspb.BinaryReader): ListStudiesResponse;
}

export namespace ListStudiesResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject>,
    nextPageToken: string,
  }
}

export class GetStudyRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetStudyRequest;

  getName(): string;
  setName(value: string): GetStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStudyRequest): GetStudyRequest.AsObject;
  static serializeBinaryToWriter(message: GetStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStudyRequest;
  static deserializeBinaryFromReader(message: GetStudyRequest, reader: jspb.BinaryReader): GetStudyRequest;
}

export namespace GetStudyRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateStudyRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study): CreateStudyRequest;
  hasItem(): boolean;
  clearItem(): CreateStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStudyRequest): CreateStudyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStudyRequest;
  static deserializeBinaryFromReader(message: CreateStudyRequest, reader: jspb.BinaryReader): CreateStudyRequest;
}

export namespace CreateStudyRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
  }
}

export class UpdateStudyRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study): UpdateStudyRequest;
  hasItem(): boolean;
  clearItem(): UpdateStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateStudyRequest): UpdateStudyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateStudyRequest;
  static deserializeBinaryFromReader(message: UpdateStudyRequest, reader: jspb.BinaryReader): UpdateStudyRequest;
}

export namespace UpdateStudyRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
  }
}

export class DeleteStudyRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteStudyRequest;

  getName(): string;
  setName(value: string): DeleteStudyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteStudyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteStudyRequest): DeleteStudyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteStudyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteStudyRequest;
  static deserializeBinaryFromReader(message: DeleteStudyRequest, reader: jspb.BinaryReader): DeleteStudyRequest;
}

export namespace DeleteStudyRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListCronPredictionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListCronPredictionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCronPredictionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCronPredictionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCronPredictionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCronPredictionsRequest): ListCronPredictionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCronPredictionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCronPredictionsRequest;
  static deserializeBinaryFromReader(message: ListCronPredictionsRequest, reader: jspb.BinaryReader): ListCronPredictionsRequest;
}

export namespace ListCronPredictionsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListCronPredictionsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction>): ListCronPredictionsResponse;
  clearItemsList(): ListCronPredictionsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction, index?: number): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCronPredictionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCronPredictionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCronPredictionsResponse): ListCronPredictionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCronPredictionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCronPredictionsResponse;
  static deserializeBinaryFromReader(message: ListCronPredictionsResponse, reader: jspb.BinaryReader): ListCronPredictionsResponse;
}

export namespace ListCronPredictionsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.AsObject>,
    nextPageToken: string,
  }
}

export class GetCronPredictionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetCronPredictionRequest;

  getName(): string;
  setName(value: string): GetCronPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCronPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCronPredictionRequest): GetCronPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: GetCronPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCronPredictionRequest;
  static deserializeBinaryFromReader(message: GetCronPredictionRequest, reader: jspb.BinaryReader): GetCronPredictionRequest;
}

export namespace GetCronPredictionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateCronPredictionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction): CreateCronPredictionRequest;
  hasItem(): boolean;
  clearItem(): CreateCronPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCronPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCronPredictionRequest): CreateCronPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCronPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCronPredictionRequest;
  static deserializeBinaryFromReader(message: CreateCronPredictionRequest, reader: jspb.BinaryReader): CreateCronPredictionRequest;
}

export namespace CreateCronPredictionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.AsObject,
  }
}

export class UpdateCronPredictionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction): UpdateCronPredictionRequest;
  hasItem(): boolean;
  clearItem(): UpdateCronPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCronPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCronPredictionRequest): UpdateCronPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCronPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCronPredictionRequest;
  static deserializeBinaryFromReader(message: UpdateCronPredictionRequest, reader: jspb.BinaryReader): UpdateCronPredictionRequest;
}

export namespace UpdateCronPredictionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.CronPrediction.AsObject,
  }
}

export class DeleteCronPredictionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteCronPredictionRequest;

  getName(): string;
  setName(value: string): DeleteCronPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCronPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCronPredictionRequest): DeleteCronPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCronPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCronPredictionRequest;
  static deserializeBinaryFromReader(message: DeleteCronPredictionRequest, reader: jspb.BinaryReader): DeleteCronPredictionRequest;
}

export namespace DeleteCronPredictionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListCurtainsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListCurtainsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCurtainsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListCurtainsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCurtainsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCurtainsRequest): ListCurtainsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCurtainsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCurtainsRequest;
  static deserializeBinaryFromReader(message: ListCurtainsRequest, reader: jspb.BinaryReader): ListCurtainsRequest;
}

export namespace ListCurtainsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListCurtainsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain>): ListCurtainsResponse;
  clearItemsList(): ListCurtainsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain, index?: number): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListCurtainsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCurtainsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCurtainsResponse): ListCurtainsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCurtainsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCurtainsResponse;
  static deserializeBinaryFromReader(message: ListCurtainsResponse, reader: jspb.BinaryReader): ListCurtainsResponse;
}

export namespace ListCurtainsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain.AsObject>,
    nextPageToken: string,
  }
}

export class GetCurtainRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetCurtainRequest;

  getName(): string;
  setName(value: string): GetCurtainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCurtainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCurtainRequest): GetCurtainRequest.AsObject;
  static serializeBinaryToWriter(message: GetCurtainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCurtainRequest;
  static deserializeBinaryFromReader(message: GetCurtainRequest, reader: jspb.BinaryReader): GetCurtainRequest;
}

export namespace GetCurtainRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateCurtainRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain): CreateCurtainRequest;
  hasItem(): boolean;
  clearItem(): CreateCurtainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCurtainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCurtainRequest): CreateCurtainRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCurtainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCurtainRequest;
  static deserializeBinaryFromReader(message: CreateCurtainRequest, reader: jspb.BinaryReader): CreateCurtainRequest;
}

export namespace CreateCurtainRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain.AsObject,
  }
}

export class UpdateCurtainRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain): UpdateCurtainRequest;
  hasItem(): boolean;
  clearItem(): UpdateCurtainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCurtainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCurtainRequest): UpdateCurtainRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCurtainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCurtainRequest;
  static deserializeBinaryFromReader(message: UpdateCurtainRequest, reader: jspb.BinaryReader): UpdateCurtainRequest;
}

export namespace UpdateCurtainRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Curtain.AsObject,
  }
}

export class DeleteCurtainRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteCurtainRequest;

  getName(): string;
  setName(value: string): DeleteCurtainRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCurtainRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCurtainRequest): DeleteCurtainRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCurtainRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCurtainRequest;
  static deserializeBinaryFromReader(message: DeleteCurtainRequest, reader: jspb.BinaryReader): DeleteCurtainRequest;
}

export namespace DeleteCurtainRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListPredictionsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPredictionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListPredictionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListPredictionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictionsRequest): ListPredictionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPredictionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictionsRequest;
  static deserializeBinaryFromReader(message: ListPredictionsRequest, reader: jspb.BinaryReader): ListPredictionsRequest;
}

export namespace ListPredictionsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListPredictionsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction>): ListPredictionsResponse;
  clearItemsList(): ListPredictionsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction, index?: number): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListPredictionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictionsResponse): ListPredictionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPredictionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictionsResponse;
  static deserializeBinaryFromReader(message: ListPredictionsResponse, reader: jspb.BinaryReader): ListPredictionsResponse;
}

export namespace ListPredictionsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject>,
    nextPageToken: string,
  }
}

export class GetPredictionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetPredictionRequest;

  getName(): string;
  setName(value: string): GetPredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPredictionRequest): GetPredictionRequest.AsObject;
  static serializeBinaryToWriter(message: GetPredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPredictionRequest;
  static deserializeBinaryFromReader(message: GetPredictionRequest, reader: jspb.BinaryReader): GetPredictionRequest;
}

export namespace GetPredictionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreatePredictionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction): CreatePredictionRequest;
  hasItem(): boolean;
  clearItem(): CreatePredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePredictionRequest): CreatePredictionRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePredictionRequest;
  static deserializeBinaryFromReader(message: CreatePredictionRequest, reader: jspb.BinaryReader): CreatePredictionRequest;
}

export namespace CreatePredictionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject,
  }
}

export class UpdatePredictionRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction): UpdatePredictionRequest;
  hasItem(): boolean;
  clearItem(): UpdatePredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePredictionRequest): UpdatePredictionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePredictionRequest;
  static deserializeBinaryFromReader(message: UpdatePredictionRequest, reader: jspb.BinaryReader): UpdatePredictionRequest;
}

export namespace UpdatePredictionRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Prediction.AsObject,
  }
}

export class DeletePredictionRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeletePredictionRequest;

  getName(): string;
  setName(value: string): DeletePredictionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePredictionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePredictionRequest): DeletePredictionRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePredictionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePredictionRequest;
  static deserializeBinaryFromReader(message: DeletePredictionRequest, reader: jspb.BinaryReader): DeletePredictionRequest;
}

export namespace DeletePredictionRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListPredictorsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPredictorsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListPredictorsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListPredictorsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictorsRequest): ListPredictorsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPredictorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictorsRequest;
  static deserializeBinaryFromReader(message: ListPredictorsRequest, reader: jspb.BinaryReader): ListPredictorsRequest;
}

export namespace ListPredictorsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListPredictorsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor>): ListPredictorsResponse;
  clearItemsList(): ListPredictorsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor, index?: number): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListPredictorsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPredictorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPredictorsResponse): ListPredictorsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPredictorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPredictorsResponse;
  static deserializeBinaryFromReader(message: ListPredictorsResponse, reader: jspb.BinaryReader): ListPredictorsResponse;
}

export namespace ListPredictorsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.AsObject>,
    nextPageToken: string,
  }
}

export class GetPredictorRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetPredictorRequest;

  getName(): string;
  setName(value: string): GetPredictorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPredictorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPredictorRequest): GetPredictorRequest.AsObject;
  static serializeBinaryToWriter(message: GetPredictorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPredictorRequest;
  static deserializeBinaryFromReader(message: GetPredictorRequest, reader: jspb.BinaryReader): GetPredictorRequest;
}

export namespace GetPredictorRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreatePredictorRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor): CreatePredictorRequest;
  hasItem(): boolean;
  clearItem(): CreatePredictorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePredictorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePredictorRequest): CreatePredictorRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePredictorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePredictorRequest;
  static deserializeBinaryFromReader(message: CreatePredictorRequest, reader: jspb.BinaryReader): CreatePredictorRequest;
}

export namespace CreatePredictorRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.AsObject,
  }
}

export class UpdatePredictorRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor): UpdatePredictorRequest;
  hasItem(): boolean;
  clearItem(): UpdatePredictorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePredictorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePredictorRequest): UpdatePredictorRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePredictorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePredictorRequest;
  static deserializeBinaryFromReader(message: UpdatePredictorRequest, reader: jspb.BinaryReader): UpdatePredictorRequest;
}

export namespace UpdatePredictorRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_inference_v1alpha1_generated_pb.Predictor.AsObject,
  }
}

export class DeletePredictorRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeletePredictorRequest;

  getName(): string;
  setName(value: string): DeletePredictorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePredictorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePredictorRequest): DeletePredictorRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePredictorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePredictorRequest;
  static deserializeBinaryFromReader(message: DeletePredictorRequest, reader: jspb.BinaryReader): DeletePredictorRequest;
}

export namespace DeletePredictorRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListConversationsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListConversationsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListConversationsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListConversationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConversationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConversationsRequest): ListConversationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListConversationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConversationsRequest;
  static deserializeBinaryFromReader(message: ListConversationsRequest, reader: jspb.BinaryReader): ListConversationsRequest;
}

export namespace ListConversationsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListConversationsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation>): ListConversationsResponse;
  clearItemsList(): ListConversationsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation, index?: number): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListConversationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConversationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListConversationsResponse): ListConversationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListConversationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConversationsResponse;
  static deserializeBinaryFromReader(message: ListConversationsResponse, reader: jspb.BinaryReader): ListConversationsResponse;
}

export namespace ListConversationsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation.AsObject>,
    nextPageToken: string,
  }
}

export class GetConversationRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetConversationRequest;

  getName(): string;
  setName(value: string): GetConversationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetConversationRequest): GetConversationRequest.AsObject;
  static serializeBinaryToWriter(message: GetConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetConversationRequest;
  static deserializeBinaryFromReader(message: GetConversationRequest, reader: jspb.BinaryReader): GetConversationRequest;
}

export namespace GetConversationRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateConversationRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation): CreateConversationRequest;
  hasItem(): boolean;
  clearItem(): CreateConversationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateConversationRequest): CreateConversationRequest.AsObject;
  static serializeBinaryToWriter(message: CreateConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateConversationRequest;
  static deserializeBinaryFromReader(message: CreateConversationRequest, reader: jspb.BinaryReader): CreateConversationRequest;
}

export namespace CreateConversationRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation.AsObject,
  }
}

export class UpdateConversationRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation): UpdateConversationRequest;
  hasItem(): boolean;
  clearItem(): UpdateConversationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateConversationRequest): UpdateConversationRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateConversationRequest;
  static deserializeBinaryFromReader(message: UpdateConversationRequest, reader: jspb.BinaryReader): UpdateConversationRequest;
}

export namespace UpdateConversationRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.Conversation.AsObject,
  }
}

export class DeleteConversationRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteConversationRequest;

  getName(): string;
  setName(value: string): DeleteConversationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConversationRequest): DeleteConversationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConversationRequest;
  static deserializeBinaryFromReader(message: DeleteConversationRequest, reader: jspb.BinaryReader): DeleteConversationRequest;
}

export namespace DeleteConversationRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListPostMortemsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPostMortemsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListPostMortemsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListPostMortemsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPostMortemsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPostMortemsRequest): ListPostMortemsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPostMortemsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPostMortemsRequest;
  static deserializeBinaryFromReader(message: ListPostMortemsRequest, reader: jspb.BinaryReader): ListPostMortemsRequest;
}

export namespace ListPostMortemsRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListPostMortemsResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem>): ListPostMortemsResponse;
  clearItemsList(): ListPostMortemsResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem, index?: number): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListPostMortemsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPostMortemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPostMortemsResponse): ListPostMortemsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPostMortemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPostMortemsResponse;
  static deserializeBinaryFromReader(message: ListPostMortemsResponse, reader: jspb.BinaryReader): ListPostMortemsResponse;
}

export namespace ListPostMortemsResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.AsObject>,
    nextPageToken: string,
  }
}

export class GetPostMortemRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetPostMortemRequest;

  getName(): string;
  setName(value: string): GetPostMortemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostMortemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostMortemRequest): GetPostMortemRequest.AsObject;
  static serializeBinaryToWriter(message: GetPostMortemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostMortemRequest;
  static deserializeBinaryFromReader(message: GetPostMortemRequest, reader: jspb.BinaryReader): GetPostMortemRequest;
}

export namespace GetPostMortemRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreatePostMortemRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem): CreatePostMortemRequest;
  hasItem(): boolean;
  clearItem(): CreatePostMortemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostMortemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostMortemRequest): CreatePostMortemRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePostMortemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePostMortemRequest;
  static deserializeBinaryFromReader(message: CreatePostMortemRequest, reader: jspb.BinaryReader): CreatePostMortemRequest;
}

export namespace CreatePostMortemRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.AsObject,
  }
}

export class UpdatePostMortemRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem): UpdatePostMortemRequest;
  hasItem(): boolean;
  clearItem(): UpdatePostMortemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePostMortemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePostMortemRequest): UpdatePostMortemRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePostMortemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePostMortemRequest;
  static deserializeBinaryFromReader(message: UpdatePostMortemRequest, reader: jspb.BinaryReader): UpdatePostMortemRequest;
}

export namespace UpdatePostMortemRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.AsObject,
  }
}

export class DeletePostMortemRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeletePostMortemRequest;

  getName(): string;
  setName(value: string): DeletePostMortemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePostMortemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePostMortemRequest): DeletePostMortemRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePostMortemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePostMortemRequest;
  static deserializeBinaryFromReader(message: DeletePostMortemRequest, reader: jspb.BinaryReader): DeletePostMortemRequest;
}

export namespace DeletePostMortemRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class ListRunbooksRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListRunbooksRequest;

  getPageSize(): number;
  setPageSize(value: number): ListRunbooksRequest;

  getPageToken(): string;
  setPageToken(value: string): ListRunbooksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRunbooksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRunbooksRequest): ListRunbooksRequest.AsObject;
  static serializeBinaryToWriter(message: ListRunbooksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRunbooksRequest;
  static deserializeBinaryFromReader(message: ListRunbooksRequest, reader: jspb.BinaryReader): ListRunbooksRequest;
}

export namespace ListRunbooksRequest {
  export type AsObject = {
    namespace: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListRunbooksResponse extends jspb.Message {
  getItemsList(): Array<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook>;
  setItemsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook>): ListRunbooksResponse;
  clearItemsList(): ListRunbooksResponse;
  addItems(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook, index?: number): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListRunbooksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRunbooksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRunbooksResponse): ListRunbooksResponse.AsObject;
  static serializeBinaryToWriter(message: ListRunbooksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRunbooksResponse;
  static deserializeBinaryFromReader(message: ListRunbooksResponse, reader: jspb.BinaryReader): ListRunbooksResponse;
}

export namespace ListRunbooksResponse {
  export type AsObject = {
    itemsList: Array<github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.AsObject>,
    nextPageToken: string,
  }
}

export class GetRunbookRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetRunbookRequest;

  getName(): string;
  setName(value: string): GetRunbookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRunbookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRunbookRequest): GetRunbookRequest.AsObject;
  static serializeBinaryToWriter(message: GetRunbookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRunbookRequest;
  static deserializeBinaryFromReader(message: GetRunbookRequest, reader: jspb.BinaryReader): GetRunbookRequest;
}

export namespace GetRunbookRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class CreateRunbookRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook): CreateRunbookRequest;
  hasItem(): boolean;
  clearItem(): CreateRunbookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRunbookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRunbookRequest): CreateRunbookRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRunbookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRunbookRequest;
  static deserializeBinaryFromReader(message: CreateRunbookRequest, reader: jspb.BinaryReader): CreateRunbookRequest;
}

export namespace CreateRunbookRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.AsObject,
  }
}

export class UpdateRunbookRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook): UpdateRunbookRequest;
  hasItem(): boolean;
  clearItem(): UpdateRunbookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRunbookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRunbookRequest): UpdateRunbookRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRunbookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRunbookRequest;
  static deserializeBinaryFromReader(message: UpdateRunbookRequest, reader: jspb.BinaryReader): UpdateRunbookRequest;
}

export namespace UpdateRunbookRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.RunBook.AsObject,
  }
}

export class DeleteRunbookRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteRunbookRequest;

  getName(): string;
  setName(value: string): DeleteRunbookRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRunbookRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRunbookRequest): DeleteRunbookRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRunbookRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRunbookRequest;
  static deserializeBinaryFromReader(message: DeleteRunbookRequest, reader: jspb.BinaryReader): DeleteRunbookRequest;
}

export namespace DeleteRunbookRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

