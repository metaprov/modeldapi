import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_services_common_v1_common_pb from '../../../../../../github.com/metaprov/modeldapi/services/common/v1/common_pb';


export class ListDataSourceRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDataSourceRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListDataSourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataSourceRequest): ListDataSourceRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataSourceRequest;
  static deserializeBinaryFromReader(message: ListDataSourceRequest, reader: jspb.BinaryReader): ListDataSourceRequest;
}

export namespace ListDataSourceRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListDataSourceResponse extends jspb.Message {
  getList(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceList | undefined;
  setList(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceList): ListDataSourceResponse;
  hasList(): boolean;
  clearList(): ListDataSourceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataSourceResponse): ListDataSourceResponse.AsObject;
  static serializeBinaryToWriter(message: ListDataSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataSourceResponse;
  static deserializeBinaryFromReader(message: ListDataSourceResponse, reader: jspb.BinaryReader): ListDataSourceResponse;
}

export namespace ListDataSourceResponse {
  export type AsObject = {
    list?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceList.AsObject,
  }
}

export class GetDataSourceRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): GetDataSourceRequest;

  getName(): string;
  setName(value: string): GetDataSourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataSourceRequest): GetDataSourceRequest.AsObject;
  static serializeBinaryToWriter(message: GetDataSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataSourceRequest;
  static deserializeBinaryFromReader(message: GetDataSourceRequest, reader: jspb.BinaryReader): GetDataSourceRequest;
}

export namespace GetDataSourceRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class GetDataSourceResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): GetDataSourceResponse;
  hasItem(): boolean;
  clearItem(): GetDataSourceResponse;

  getYaml(): string;
  setYaml(value: string): GetDataSourceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataSourceResponse): GetDataSourceResponse.AsObject;
  static serializeBinaryToWriter(message: GetDataSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataSourceResponse;
  static deserializeBinaryFromReader(message: GetDataSourceResponse, reader: jspb.BinaryReader): GetDataSourceResponse;
}

export namespace GetDataSourceResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    yaml: string,
  }
}

export class UpdateDataSourceRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): UpdateDataSourceRequest;
  hasItem(): boolean;
  clearItem(): UpdateDataSourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataSourceRequest): UpdateDataSourceRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateDataSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataSourceRequest;
  static deserializeBinaryFromReader(message: UpdateDataSourceRequest, reader: jspb.BinaryReader): UpdateDataSourceRequest;
}

export namespace UpdateDataSourceRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
  }
}

export class UpdateDataSourceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataSourceResponse): UpdateDataSourceResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateDataSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataSourceResponse;
  static deserializeBinaryFromReader(message: UpdateDataSourceResponse, reader: jspb.BinaryReader): UpdateDataSourceResponse;
}

export namespace UpdateDataSourceResponse {
  export type AsObject = {
  }
}

export class CreateDataSourceRequest extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): CreateDataSourceRequest;
  hasItem(): boolean;
  clearItem(): CreateDataSourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataSourceRequest): CreateDataSourceRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDataSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataSourceRequest;
  static deserializeBinaryFromReader(message: CreateDataSourceRequest, reader: jspb.BinaryReader): CreateDataSourceRequest;
}

export namespace CreateDataSourceRequest {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
  }
}

export class CreateDataSourceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataSourceResponse): CreateDataSourceResponse.AsObject;
  static serializeBinaryToWriter(message: CreateDataSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataSourceResponse;
  static deserializeBinaryFromReader(message: CreateDataSourceResponse, reader: jspb.BinaryReader): CreateDataSourceResponse;
}

export namespace CreateDataSourceResponse {
  export type AsObject = {
  }
}

export class DeleteDataSourceRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): DeleteDataSourceRequest;

  getName(): string;
  setName(value: string): DeleteDataSourceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataSourceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataSourceRequest): DeleteDataSourceRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteDataSourceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataSourceRequest;
  static deserializeBinaryFromReader(message: DeleteDataSourceRequest, reader: jspb.BinaryReader): DeleteDataSourceRequest;
}

export namespace DeleteDataSourceRequest {
  export type AsObject = {
    namespace: string,
    name: string,
  }
}

export class DeleteDataSourceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataSourceResponse): DeleteDataSourceResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteDataSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataSourceResponse;
  static deserializeBinaryFromReader(message: DeleteDataSourceResponse, reader: jspb.BinaryReader): DeleteDataSourceResponse;
}

export namespace DeleteDataSourceResponse {
  export type AsObject = {
  }
}

export class InferSchemaRequest extends jspb.Message {
  getName(): string;
  setName(value: string): InferSchemaRequest;

  getNamespace(): string;
  setNamespace(value: string): InferSchemaRequest;

  getTenant(): string;
  setTenant(value: string): InferSchemaRequest;

  getBucket(): string;
  setBucket(value: string): InferSchemaRequest;

  getKey(): string;
  setKey(value: string): InferSchemaRequest;

  getSourcetype(): string;
  setSourcetype(value: string): InferSchemaRequest;

  getFlatfile(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileSpec | undefined;
  setFlatfile(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileSpec): InferSchemaRequest;
  hasFlatfile(): boolean;
  clearFlatfile(): InferSchemaRequest;

  getTable(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.TableSpec | undefined;
  setTable(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.TableSpec): InferSchemaRequest;
  hasTable(): boolean;
  clearTable(): InferSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InferSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InferSchemaRequest): InferSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: InferSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InferSchemaRequest;
  static deserializeBinaryFromReader(message: InferSchemaRequest, reader: jspb.BinaryReader): InferSchemaRequest;
}

export namespace InferSchemaRequest {
  export type AsObject = {
    name: string,
    namespace: string,
    tenant: string,
    bucket: string,
    key: string,
    sourcetype: string,
    flatfile?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.FlatFileSpec.AsObject,
    table?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.TableSpec.AsObject,
  }
}

export class InferSchemaResponse extends jspb.Message {
  getColumnsList(): Array<github_com_metaprov_modeldapi_services_common_v1_common_pb.ColumnProfile>;
  setColumnsList(value: Array<github_com_metaprov_modeldapi_services_common_v1_common_pb.ColumnProfile>): InferSchemaResponse;
  clearColumnsList(): InferSchemaResponse;
  addColumns(value?: github_com_metaprov_modeldapi_services_common_v1_common_pb.ColumnProfile, index?: number): github_com_metaprov_modeldapi_services_common_v1_common_pb.ColumnProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InferSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InferSchemaResponse): InferSchemaResponse.AsObject;
  static serializeBinaryToWriter(message: InferSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InferSchemaResponse;
  static deserializeBinaryFromReader(message: InferSchemaResponse, reader: jspb.BinaryReader): InferSchemaResponse;
}

export namespace InferSchemaResponse {
  export type AsObject = {
    columnsList: Array<github_com_metaprov_modeldapi_services_common_v1_common_pb.ColumnProfile.AsObject>,
  }
}

export class GetTableViewRequest extends jspb.Message {
  getSource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setSource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): GetTableViewRequest;
  hasSource(): boolean;
  clearSource(): GetTableViewRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): GetTableViewRequest;
  hasBucket(): boolean;
  clearBucket(): GetTableViewRequest;

  getKey(): string;
  setKey(value: string): GetTableViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTableViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTableViewRequest): GetTableViewRequest.AsObject;
  static serializeBinaryToWriter(message: GetTableViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTableViewRequest;
  static deserializeBinaryFromReader(message: GetTableViewRequest, reader: jspb.BinaryReader): GetTableViewRequest;
}

export namespace GetTableViewRequest {
  export type AsObject = {
    source?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    key: string,
  }
}

export class GetTableViewResponse extends jspb.Message {
  getTable(): github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView | undefined;
  setTable(value?: github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView): GetTableViewResponse;
  hasTable(): boolean;
  clearTable(): GetTableViewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTableViewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTableViewResponse): GetTableViewResponse.AsObject;
  static serializeBinaryToWriter(message: GetTableViewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTableViewResponse;
  static deserializeBinaryFromReader(message: GetTableViewResponse, reader: jspb.BinaryReader): GetTableViewResponse;
}

export namespace GetTableViewResponse {
  export type AsObject = {
    table?: github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView.AsObject,
  }
}

