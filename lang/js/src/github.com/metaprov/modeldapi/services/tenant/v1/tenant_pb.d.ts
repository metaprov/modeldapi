import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';


export class ListTenantsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListTenantsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListTenantsRequest;

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
    labelsMap: Array<[string, string]>,
  }
}

export class ListTenantsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TenantList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TenantList): ListTenantsResponse;
  hasItems(): boolean;
  clearItems(): ListTenantsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTenantsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTenantsResponse): ListTenantsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTenantsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTenantsResponse;
  static deserializeBinaryFromReader(message: ListTenantsResponse, reader: jspb.BinaryReader): ListTenantsResponse;
}

export namespace ListTenantsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.TenantList.AsObject,
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

export class CreateTenantResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTenantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTenantResponse): CreateTenantResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTenantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTenantResponse;
  static deserializeBinaryFromReader(message: CreateTenantResponse, reader: jspb.BinaryReader): CreateTenantResponse;
}

export namespace CreateTenantResponse {
  export type AsObject = {
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

export class UpdateTenantResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTenantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTenantResponse): UpdateTenantResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateTenantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTenantResponse;
  static deserializeBinaryFromReader(message: UpdateTenantResponse, reader: jspb.BinaryReader): UpdateTenantResponse;
}

export namespace UpdateTenantResponse {
  export type AsObject = {
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

export class GetTenantResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant): GetTenantResponse;
  hasItem(): boolean;
  clearItem(): GetTenantResponse;

  getYaml(): string;
  setYaml(value: string): GetTenantResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTenantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTenantResponse): GetTenantResponse.AsObject;
  static serializeBinaryToWriter(message: GetTenantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTenantResponse;
  static deserializeBinaryFromReader(message: GetTenantResponse, reader: jspb.BinaryReader): GetTenantResponse;
}

export namespace GetTenantResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Tenant.AsObject,
    yaml: string,
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

export class DeleteTenantResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTenantResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTenantResponse): DeleteTenantResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteTenantResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTenantResponse;
  static deserializeBinaryFromReader(message: DeleteTenantResponse, reader: jspb.BinaryReader): DeleteTenantResponse;
}

export namespace DeleteTenantResponse {
  export type AsObject = {
  }
}

