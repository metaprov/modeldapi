import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';


export class ListDataPipelineRunRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListDataPipelineRunRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListDataPipelineRunRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataPipelineRunRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataPipelineRunRequest): ListDataPipelineRunRequest.AsObject;
  static serializeBinaryToWriter(message: ListDataPipelineRunRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataPipelineRunRequest;
  static deserializeBinaryFromReader(message: ListDataPipelineRunRequest, reader: jspb.BinaryReader): ListDataPipelineRunRequest;
}

export namespace ListDataPipelineRunRequest {
  export type AsObject = {
    namespace: string,
    labelsMap: Array<[string, string]>,
  }
}

export class ListDataPipelineRunResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRunList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRunList): ListDataPipelineRunResponse;
  hasItems(): boolean;
  clearItems(): ListDataPipelineRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDataPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDataPipelineRunResponse): ListDataPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: ListDataPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDataPipelineRunResponse;
  static deserializeBinaryFromReader(message: ListDataPipelineRunResponse, reader: jspb.BinaryReader): ListDataPipelineRunResponse;
}

export namespace ListDataPipelineRunResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRunList.AsObject,
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

export class CreateDataPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDataPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDataPipelineRunResponse): CreateDataPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: CreateDataPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDataPipelineRunResponse;
  static deserializeBinaryFromReader(message: CreateDataPipelineRunResponse, reader: jspb.BinaryReader): CreateDataPipelineRunResponse;
}

export namespace CreateDataPipelineRunResponse {
  export type AsObject = {
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

export class UpdateDataPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateDataPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateDataPipelineRunResponse): UpdateDataPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateDataPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateDataPipelineRunResponse;
  static deserializeBinaryFromReader(message: UpdateDataPipelineRunResponse, reader: jspb.BinaryReader): UpdateDataPipelineRunResponse;
}

export namespace UpdateDataPipelineRunResponse {
  export type AsObject = {
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

export class GetDataPipelineRunResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun): GetDataPipelineRunResponse;
  hasItem(): boolean;
  clearItem(): GetDataPipelineRunResponse;

  getYaml(): string;
  setYaml(value: string): GetDataPipelineRunResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDataPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDataPipelineRunResponse): GetDataPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: GetDataPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDataPipelineRunResponse;
  static deserializeBinaryFromReader(message: GetDataPipelineRunResponse, reader: jspb.BinaryReader): GetDataPipelineRunResponse;
}

export namespace GetDataPipelineRunResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipelineRun.AsObject,
    yaml: string,
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

export class DeleteDataPipelineRunResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteDataPipelineRunResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteDataPipelineRunResponse): DeleteDataPipelineRunResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteDataPipelineRunResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteDataPipelineRunResponse;
  static deserializeBinaryFromReader(message: DeleteDataPipelineRunResponse, reader: jspb.BinaryReader): DeleteDataPipelineRunResponse;
}

export namespace DeleteDataPipelineRunResponse {
  export type AsObject = {
  }
}

