import * as jspb from 'google-protobuf'

import * as github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb from '../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb from '../../../../../github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb from '../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb';
import * as github_com_metaprov_modeldapi_services_common_common_pb from '../../../../../github.com/metaprov/modeldapi/services/common/common_pb';
import * as k8s_io_api_core_v1_generated_pb from '../../../../../k8s.io/api/core/v1/generated_pb';


export class DsReadFileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsReadFileRequest;
  hasProduct(): boolean;
  clearProduct(): DsReadFileRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsReadFileRequest;
  hasVersion(): boolean;
  clearVersion(): DsReadFileRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsReadFileRequest;
  hasConnection(): boolean;
  clearConnection(): DsReadFileRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsReadFileRequest;
  hasBucket(): boolean;
  clearBucket(): DsReadFileRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsReadFileRequest;
  hasSecret(): boolean;
  clearSecret(): DsReadFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsReadFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsReadFileRequest): DsReadFileRequest.AsObject;
  static serializeBinaryToWriter(message: DsReadFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsReadFileRequest;
  static deserializeBinaryFromReader(message: DsReadFileRequest, reader: jspb.BinaryReader): DsReadFileRequest;
}

export namespace DsReadFileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
  }
}

export class DsReadFeatureRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsReadFeatureRequest;
  hasProduct(): boolean;
  clearProduct(): DsReadFeatureRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsReadFeatureRequest;
  hasVersion(): boolean;
  clearVersion(): DsReadFeatureRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsReadFeatureRequest;
  hasBucket(): boolean;
  clearBucket(): DsReadFeatureRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsReadFeatureRequest;
  hasConnection(): boolean;
  clearConnection(): DsReadFeatureRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsReadFeatureRequest;
  hasSecret(): boolean;
  clearSecret(): DsReadFeatureRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsReadFeatureRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsReadFeatureRequest): DsReadFeatureRequest.AsObject;
  static serializeBinaryToWriter(message: DsReadFeatureRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsReadFeatureRequest;
  static deserializeBinaryFromReader(message: DsReadFeatureRequest, reader: jspb.BinaryReader): DsReadFeatureRequest;
}

export namespace DsReadFeatureRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
  }
}

export class DsWriteFileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsWriteFileRequest;
  hasProduct(): boolean;
  clearProduct(): DsWriteFileRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsWriteFileRequest;
  hasVersion(): boolean;
  clearVersion(): DsWriteFileRequest;

  getContent(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setContent(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsWriteFileRequest;
  hasContent(): boolean;
  clearContent(): DsWriteFileRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsWriteFileRequest;
  hasBucket(): boolean;
  clearBucket(): DsWriteFileRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsWriteFileRequest;
  hasConnection(): boolean;
  clearConnection(): DsWriteFileRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsWriteFileRequest;
  hasSecret(): boolean;
  clearSecret(): DsWriteFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsWriteFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsWriteFileRequest): DsWriteFileRequest.AsObject;
  static serializeBinaryToWriter(message: DsWriteFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsWriteFileRequest;
  static deserializeBinaryFromReader(message: DsWriteFileRequest, reader: jspb.BinaryReader): DsWriteFileRequest;
}

export namespace DsWriteFileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    content?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
  }
}

export class DsReadAudioRequest extends jspb.Message {
  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsReadAudioRequest;
  hasBucket(): boolean;
  clearBucket(): DsReadAudioRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsReadAudioRequest;
  hasConnection(): boolean;
  clearConnection(): DsReadAudioRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsReadAudioRequest;
  hasSecret(): boolean;
  clearSecret(): DsReadAudioRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsReadAudioRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsReadAudioRequest): DsReadAudioRequest.AsObject;
  static serializeBinaryToWriter(message: DsReadAudioRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsReadAudioRequest;
  static deserializeBinaryFromReader(message: DsReadAudioRequest, reader: jspb.BinaryReader): DsReadAudioRequest;
}

export namespace DsReadAudioRequest {
  export type AsObject = {
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
  }
}

export class DsReadTextCorpusRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsReadTextCorpusRequest;
  hasProduct(): boolean;
  clearProduct(): DsReadTextCorpusRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsReadTextCorpusRequest;
  hasVersion(): boolean;
  clearVersion(): DsReadTextCorpusRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsReadTextCorpusRequest;
  hasBucket(): boolean;
  clearBucket(): DsReadTextCorpusRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsReadTextCorpusRequest;
  hasConnection(): boolean;
  clearConnection(): DsReadTextCorpusRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsReadTextCorpusRequest;
  hasSecret(): boolean;
  clearSecret(): DsReadTextCorpusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsReadTextCorpusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsReadTextCorpusRequest): DsReadTextCorpusRequest.AsObject;
  static serializeBinaryToWriter(message: DsReadTextCorpusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsReadTextCorpusRequest;
  static deserializeBinaryFromReader(message: DsReadTextCorpusRequest, reader: jspb.BinaryReader): DsReadTextCorpusRequest;
}

export namespace DsReadTextCorpusRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
  }
}

export class DsReadFromStoreResponse extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsReadFromStoreResponse;
  hasProduct(): boolean;
  clearProduct(): DsReadFromStoreResponse;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsReadFromStoreResponse;
  hasVersion(): boolean;
  clearVersion(): DsReadFromStoreResponse;

  getResult(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setResult(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsReadFromStoreResponse;
  hasResult(): boolean;
  clearResult(): DsReadFromStoreResponse;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsReadFromStoreResponse;
  hasBucket(): boolean;
  clearBucket(): DsReadFromStoreResponse;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsReadFromStoreResponse;
  hasConnection(): boolean;
  clearConnection(): DsReadFromStoreResponse;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsReadFromStoreResponse;
  hasSecret(): boolean;
  clearSecret(): DsReadFromStoreResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsReadFromStoreResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsReadFromStoreResponse): DsReadFromStoreResponse.AsObject;
  static serializeBinaryToWriter(message: DsReadFromStoreResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsReadFromStoreResponse;
  static deserializeBinaryFromReader(message: DsReadFromStoreResponse, reader: jspb.BinaryReader): DsReadFromStoreResponse;
}

export namespace DsReadFromStoreResponse {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    result?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
  }
}

export class DsRunDataPipelineRequest extends jspb.Message {
  getPipeline(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline | undefined;
  setPipeline(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline): DsRunDataPipelineRequest;
  hasPipeline(): boolean;
  clearPipeline(): DsRunDataPipelineRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsRunDataPipelineRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsRunDataPipelineRequest): DsRunDataPipelineRequest.AsObject;
  static serializeBinaryToWriter(message: DsRunDataPipelineRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsRunDataPipelineRequest;
  static deserializeBinaryFromReader(message: DsRunDataPipelineRequest, reader: jspb.BinaryReader): DsRunDataPipelineRequest;
}

export namespace DsRunDataPipelineRequest {
  export type AsObject = {
    pipeline?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.AsObject,
  }
}

export class DsRunDataPipelineResponse extends jspb.Message {
  getResult(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setResult(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsRunDataPipelineResponse;
  hasResult(): boolean;
  clearResult(): DsRunDataPipelineResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsRunDataPipelineResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsRunDataPipelineResponse): DsRunDataPipelineResponse.AsObject;
  static serializeBinaryToWriter(message: DsRunDataPipelineResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsRunDataPipelineResponse;
  static deserializeBinaryFromReader(message: DsRunDataPipelineResponse, reader: jspb.BinaryReader): DsRunDataPipelineResponse;
}

export namespace DsRunDataPipelineResponse {
  export type AsObject = {
    result?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
  }
}

export class DsRunRecipeRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsRunRecipeRequest;
  hasProduct(): boolean;
  clearProduct(): DsRunRecipeRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsRunRecipeRequest;
  hasVersion(): boolean;
  clearVersion(): DsRunRecipeRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsRunRecipeRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsRunRecipeRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsRunRecipeRequest;
  hasDataset(): boolean;
  clearDataset(): DsRunRecipeRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsRunRecipeRequest;
  hasConnection(): boolean;
  clearConnection(): DsRunRecipeRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsRunRecipeRequest;
  hasBucket(): boolean;
  clearBucket(): DsRunRecipeRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsRunRecipeRequest;
  hasSecret(): boolean;
  clearSecret(): DsRunRecipeRequest;

  getRecipe(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe | undefined;
  setRecipe(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe): DsRunRecipeRequest;
  hasRecipe(): boolean;
  clearRecipe(): DsRunRecipeRequest;

  getReciperun(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun | undefined;
  setReciperun(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun): DsRunRecipeRequest;
  hasReciperun(): boolean;
  clearReciperun(): DsRunRecipeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsRunRecipeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsRunRecipeRequest): DsRunRecipeRequest.AsObject;
  static serializeBinaryToWriter(message: DsRunRecipeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsRunRecipeRequest;
  static deserializeBinaryFromReader(message: DsRunRecipeRequest, reader: jspb.BinaryReader): DsRunRecipeRequest;
}

export namespace DsRunRecipeRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
    recipe?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.AsObject,
    reciperun?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.AsObject,
  }
}

export class DsRunRecipeResponse extends jspb.Message {
  getResult(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe | undefined;
  setResult(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe): DsRunRecipeResponse;
  hasResult(): boolean;
  clearResult(): DsRunRecipeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsRunRecipeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsRunRecipeResponse): DsRunRecipeResponse.AsObject;
  static serializeBinaryToWriter(message: DsRunRecipeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsRunRecipeResponse;
  static deserializeBinaryFromReader(message: DsRunRecipeResponse, reader: jspb.BinaryReader): DsRunRecipeResponse;
}

export namespace DsRunRecipeResponse {
  export type AsObject = {
    result?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.AsObject,
  }
}

export class DsCreateRecipeProfileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsCreateRecipeProfileRequest;
  hasProduct(): boolean;
  clearProduct(): DsCreateRecipeProfileRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsCreateRecipeProfileRequest;
  hasVersion(): boolean;
  clearVersion(): DsCreateRecipeProfileRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsCreateRecipeProfileRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsCreateRecipeProfileRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsCreateRecipeProfileRequest;
  hasDataset(): boolean;
  clearDataset(): DsCreateRecipeProfileRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsCreateRecipeProfileRequest;
  hasConnection(): boolean;
  clearConnection(): DsCreateRecipeProfileRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsCreateRecipeProfileRequest;
  hasBucket(): boolean;
  clearBucket(): DsCreateRecipeProfileRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsCreateRecipeProfileRequest;
  hasSecret(): boolean;
  clearSecret(): DsCreateRecipeProfileRequest;

  getRecipe(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe | undefined;
  setRecipe(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe): DsCreateRecipeProfileRequest;
  hasRecipe(): boolean;
  clearRecipe(): DsCreateRecipeProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateRecipeProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateRecipeProfileRequest): DsCreateRecipeProfileRequest.AsObject;
  static serializeBinaryToWriter(message: DsCreateRecipeProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateRecipeProfileRequest;
  static deserializeBinaryFromReader(message: DsCreateRecipeProfileRequest, reader: jspb.BinaryReader): DsCreateRecipeProfileRequest;
}

export namespace DsCreateRecipeProfileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
    recipe?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.AsObject,
  }
}

export class DsCreateRecipeProfileResponse extends jspb.Message {
  getResult(): github_com_metaprov_modeldapi_services_common_common_pb.TableView | undefined;
  setResult(value?: github_com_metaprov_modeldapi_services_common_common_pb.TableView): DsCreateRecipeProfileResponse;
  hasResult(): boolean;
  clearResult(): DsCreateRecipeProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateRecipeProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateRecipeProfileResponse): DsCreateRecipeProfileResponse.AsObject;
  static serializeBinaryToWriter(message: DsCreateRecipeProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateRecipeProfileResponse;
  static deserializeBinaryFromReader(message: DsCreateRecipeProfileResponse, reader: jspb.BinaryReader): DsCreateRecipeProfileResponse;
}

export namespace DsCreateRecipeProfileResponse {
  export type AsObject = {
    result?: github_com_metaprov_modeldapi_services_common_common_pb.TableView.AsObject,
  }
}

export class DataSourceResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataSourceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DataSourceResponse): DataSourceResponse.AsObject;
  static serializeBinaryToWriter(message: DataSourceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataSourceResponse;
  static deserializeBinaryFromReader(message: DataSourceResponse, reader: jspb.BinaryReader): DataSourceResponse;
}

export namespace DataSourceResponse {
  export type AsObject = {
  }
}

export class DatasetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DatasetResponse): DatasetResponse.AsObject;
  static serializeBinaryToWriter(message: DatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DatasetResponse;
  static deserializeBinaryFromReader(message: DatasetResponse, reader: jspb.BinaryReader): DatasetResponse;
}

export namespace DatasetResponse {
  export type AsObject = {
  }
}

export class DsCreateDatasetProfileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsCreateDatasetProfileRequest;
  hasProduct(): boolean;
  clearProduct(): DsCreateDatasetProfileRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsCreateDatasetProfileRequest;
  hasVersion(): boolean;
  clearVersion(): DsCreateDatasetProfileRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsCreateDatasetProfileRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsCreateDatasetProfileRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsCreateDatasetProfileRequest;
  hasDataset(): boolean;
  clearDataset(): DsCreateDatasetProfileRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsCreateDatasetProfileRequest;
  hasConnection(): boolean;
  clearConnection(): DsCreateDatasetProfileRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsCreateDatasetProfileRequest;
  hasBucket(): boolean;
  clearBucket(): DsCreateDatasetProfileRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsCreateDatasetProfileRequest;
  hasSecret(): boolean;
  clearSecret(): DsCreateDatasetProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateDatasetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateDatasetProfileRequest): DsCreateDatasetProfileRequest.AsObject;
  static serializeBinaryToWriter(message: DsCreateDatasetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateDatasetProfileRequest;
  static deserializeBinaryFromReader(message: DsCreateDatasetProfileRequest, reader: jspb.BinaryReader): DsCreateDatasetProfileRequest;
}

export namespace DsCreateDatasetProfileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
  }
}

export class DsCreateDatasetProfileResponse extends jspb.Message {
  getUri(): string;
  setUri(value: string): DsCreateDatasetProfileResponse;

  getProfile(): github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile | undefined;
  setProfile(value?: github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile): DsCreateDatasetProfileResponse;
  hasProfile(): boolean;
  clearProfile(): DsCreateDatasetProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateDatasetProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateDatasetProfileResponse): DsCreateDatasetProfileResponse.AsObject;
  static serializeBinaryToWriter(message: DsCreateDatasetProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateDatasetProfileResponse;
  static deserializeBinaryFromReader(message: DsCreateDatasetProfileResponse, reader: jspb.BinaryReader): DsCreateDatasetProfileResponse;
}

export namespace DsCreateDatasetProfileResponse {
  export type AsObject = {
    uri: string,
    profile?: github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile.AsObject,
  }
}

export class DsCreateModelProfileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsCreateModelProfileRequest;
  hasProduct(): boolean;
  clearProduct(): DsCreateModelProfileRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsCreateModelProfileRequest;
  hasVersion(): boolean;
  clearVersion(): DsCreateModelProfileRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsCreateModelProfileRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsCreateModelProfileRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsCreateModelProfileRequest;
  hasDataset(): boolean;
  clearDataset(): DsCreateModelProfileRequest;

  getStudy(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsCreateModelProfileRequest;
  hasStudy(): boolean;
  clearStudy(): DsCreateModelProfileRequest;

  getModel(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model): DsCreateModelProfileRequest;
  hasModel(): boolean;
  clearModel(): DsCreateModelProfileRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsCreateModelProfileRequest;
  hasConnection(): boolean;
  clearConnection(): DsCreateModelProfileRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsCreateModelProfileRequest;
  hasBucket(): boolean;
  clearBucket(): DsCreateModelProfileRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsCreateModelProfileRequest;
  hasSecret(): boolean;
  clearSecret(): DsCreateModelProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateModelProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateModelProfileRequest): DsCreateModelProfileRequest.AsObject;
  static serializeBinaryToWriter(message: DsCreateModelProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateModelProfileRequest;
  static deserializeBinaryFromReader(message: DsCreateModelProfileRequest, reader: jspb.BinaryReader): DsCreateModelProfileRequest;
}

export namespace DsCreateModelProfileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    study?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    model?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
  }
}

export class DsCreateModelProfileResponse extends jspb.Message {
  getUri(): string;
  setUri(value: string): DsCreateModelProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateModelProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateModelProfileResponse): DsCreateModelProfileResponse.AsObject;
  static serializeBinaryToWriter(message: DsCreateModelProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateModelProfileResponse;
  static deserializeBinaryFromReader(message: DsCreateModelProfileResponse, reader: jspb.BinaryReader): DsCreateModelProfileResponse;
}

export namespace DsCreateModelProfileResponse {
  export type AsObject = {
    uri: string,
  }
}

export class DsCreateForecastPartitionFilesRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsCreateForecastPartitionFilesRequest;
  hasProduct(): boolean;
  clearProduct(): DsCreateForecastPartitionFilesRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsCreateForecastPartitionFilesRequest;
  hasVersion(): boolean;
  clearVersion(): DsCreateForecastPartitionFilesRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsCreateForecastPartitionFilesRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsCreateForecastPartitionFilesRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsCreateForecastPartitionFilesRequest;
  hasDataset(): boolean;
  clearDataset(): DsCreateForecastPartitionFilesRequest;

  getStudy(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsCreateForecastPartitionFilesRequest;
  hasStudy(): boolean;
  clearStudy(): DsCreateForecastPartitionFilesRequest;

  getModel(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model): DsCreateForecastPartitionFilesRequest;
  hasModel(): boolean;
  clearModel(): DsCreateForecastPartitionFilesRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsCreateForecastPartitionFilesRequest;
  hasConnection(): boolean;
  clearConnection(): DsCreateForecastPartitionFilesRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsCreateForecastPartitionFilesRequest;
  hasBucket(): boolean;
  clearBucket(): DsCreateForecastPartitionFilesRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsCreateForecastPartitionFilesRequest;
  hasSecret(): boolean;
  clearSecret(): DsCreateForecastPartitionFilesRequest;

  getForecastsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj>;
  setForecastsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj>): DsCreateForecastPartitionFilesRequest;
  clearForecastsList(): DsCreateForecastPartitionFilesRequest;
  addForecasts(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateForecastPartitionFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateForecastPartitionFilesRequest): DsCreateForecastPartitionFilesRequest.AsObject;
  static serializeBinaryToWriter(message: DsCreateForecastPartitionFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateForecastPartitionFilesRequest;
  static deserializeBinaryFromReader(message: DsCreateForecastPartitionFilesRequest, reader: jspb.BinaryReader): DsCreateForecastPartitionFilesRequest;
}

export namespace DsCreateForecastPartitionFilesRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    study?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    model?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
    forecastsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj.AsObject>,
  }
}

export class DsCreateForecastPartitionFilesResponse extends jspb.Message {
  getPartitionsList(): Array<PartitionValues>;
  setPartitionsList(value: Array<PartitionValues>): DsCreateForecastPartitionFilesResponse;
  clearPartitionsList(): DsCreateForecastPartitionFilesResponse;
  addPartitions(value?: PartitionValues, index?: number): PartitionValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateForecastPartitionFilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateForecastPartitionFilesResponse): DsCreateForecastPartitionFilesResponse.AsObject;
  static serializeBinaryToWriter(message: DsCreateForecastPartitionFilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateForecastPartitionFilesResponse;
  static deserializeBinaryFromReader(message: DsCreateForecastPartitionFilesResponse, reader: jspb.BinaryReader): DsCreateForecastPartitionFilesResponse;
}

export namespace DsCreateForecastPartitionFilesResponse {
  export type AsObject = {
    partitionsList: Array<PartitionValues.AsObject>,
  }
}

export class PartitionValues extends jspb.Message {
  getName(): string;
  setName(value: string): PartitionValues;

  getValuesList(): Array<string>;
  setValuesList(value: Array<string>): PartitionValues;
  clearValuesList(): PartitionValues;
  addValues(value: string, index?: number): PartitionValues;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PartitionValues.AsObject;
  static toObject(includeInstance: boolean, msg: PartitionValues): PartitionValues.AsObject;
  static serializeBinaryToWriter(message: PartitionValues, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PartitionValues;
  static deserializeBinaryFromReader(message: PartitionValues, reader: jspb.BinaryReader): PartitionValues;
}

export namespace PartitionValues {
  export type AsObject = {
    name: string,
    valuesList: Array<string>,
  }
}

export class DsMergeForecastFileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsMergeForecastFileRequest;
  hasProduct(): boolean;
  clearProduct(): DsMergeForecastFileRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsMergeForecastFileRequest;
  hasVersion(): boolean;
  clearVersion(): DsMergeForecastFileRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsMergeForecastFileRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsMergeForecastFileRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsMergeForecastFileRequest;
  hasDataset(): boolean;
  clearDataset(): DsMergeForecastFileRequest;

  getStudy(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsMergeForecastFileRequest;
  hasStudy(): boolean;
  clearStudy(): DsMergeForecastFileRequest;

  getModel(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model): DsMergeForecastFileRequest;
  hasModel(): boolean;
  clearModel(): DsMergeForecastFileRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsMergeForecastFileRequest;
  hasConnection(): boolean;
  clearConnection(): DsMergeForecastFileRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsMergeForecastFileRequest;
  hasBucket(): boolean;
  clearBucket(): DsMergeForecastFileRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsMergeForecastFileRequest;
  hasSecret(): boolean;
  clearSecret(): DsMergeForecastFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsMergeForecastFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsMergeForecastFileRequest): DsMergeForecastFileRequest.AsObject;
  static serializeBinaryToWriter(message: DsMergeForecastFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsMergeForecastFileRequest;
  static deserializeBinaryFromReader(message: DsMergeForecastFileRequest, reader: jspb.BinaryReader): DsMergeForecastFileRequest;
}

export namespace DsMergeForecastFileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    study?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    model?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
  }
}

export class DsMergeForecastFileResponse extends jspb.Message {
  getUri(): string;
  setUri(value: string): DsMergeForecastFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsMergeForecastFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsMergeForecastFileResponse): DsMergeForecastFileResponse.AsObject;
  static serializeBinaryToWriter(message: DsMergeForecastFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsMergeForecastFileResponse;
  static deserializeBinaryFromReader(message: DsMergeForecastFileResponse, reader: jspb.BinaryReader): DsMergeForecastFileResponse;
}

export namespace DsMergeForecastFileResponse {
  export type AsObject = {
    uri: string,
  }
}

export class DsCreateStudyProfileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsCreateStudyProfileRequest;
  hasProduct(): boolean;
  clearProduct(): DsCreateStudyProfileRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsCreateStudyProfileRequest;
  hasVersion(): boolean;
  clearVersion(): DsCreateStudyProfileRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsCreateStudyProfileRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsCreateStudyProfileRequest;

  getStudy(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsCreateStudyProfileRequest;
  hasStudy(): boolean;
  clearStudy(): DsCreateStudyProfileRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsCreateStudyProfileRequest;
  hasDataset(): boolean;
  clearDataset(): DsCreateStudyProfileRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsCreateStudyProfileRequest;
  hasConnection(): boolean;
  clearConnection(): DsCreateStudyProfileRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsCreateStudyProfileRequest;
  hasBucket(): boolean;
  clearBucket(): DsCreateStudyProfileRequest;

  getModelsList(): Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model>;
  setModelsList(value: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model>): DsCreateStudyProfileRequest;
  clearModelsList(): DsCreateStudyProfileRequest;
  addModels(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, index?: number): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsCreateStudyProfileRequest;
  hasSecret(): boolean;
  clearSecret(): DsCreateStudyProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateStudyProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateStudyProfileRequest): DsCreateStudyProfileRequest.AsObject;
  static serializeBinaryToWriter(message: DsCreateStudyProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateStudyProfileRequest;
  static deserializeBinaryFromReader(message: DsCreateStudyProfileRequest, reader: jspb.BinaryReader): DsCreateStudyProfileRequest;
}

export namespace DsCreateStudyProfileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    study?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    modelsList: Array<github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject>,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
  }
}

export class DsCreateStudyProfileResponse extends jspb.Message {
  getUri(): string;
  setUri(value: string): DsCreateStudyProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateStudyProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateStudyProfileResponse): DsCreateStudyProfileResponse.AsObject;
  static serializeBinaryToWriter(message: DsCreateStudyProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateStudyProfileResponse;
  static deserializeBinaryFromReader(message: DsCreateStudyProfileResponse, reader: jspb.BinaryReader): DsCreateStudyProfileResponse;
}

export namespace DsCreateStudyProfileResponse {
  export type AsObject = {
    uri: string,
  }
}

export class DsValidateDatasetRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsValidateDatasetRequest;
  hasProduct(): boolean;
  clearProduct(): DsValidateDatasetRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsValidateDatasetRequest;
  hasVersion(): boolean;
  clearVersion(): DsValidateDatasetRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsValidateDatasetRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsValidateDatasetRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsValidateDatasetRequest;
  hasDataset(): boolean;
  clearDataset(): DsValidateDatasetRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsValidateDatasetRequest;
  hasConnection(): boolean;
  clearConnection(): DsValidateDatasetRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsValidateDatasetRequest;
  hasBucket(): boolean;
  clearBucket(): DsValidateDatasetRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsValidateDatasetRequest;
  hasSecret(): boolean;
  clearSecret(): DsValidateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsValidateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsValidateDatasetRequest): DsValidateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: DsValidateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsValidateDatasetRequest;
  static deserializeBinaryFromReader(message: DsValidateDatasetRequest, reader: jspb.BinaryReader): DsValidateDatasetRequest;
}

export namespace DsValidateDatasetRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
  }
}

export class DsValidateDatasetResponse extends jspb.Message {
  getErrorsList(): Array<string>;
  setErrorsList(value: Array<string>): DsValidateDatasetResponse;
  clearErrorsList(): DsValidateDatasetResponse;
  addErrors(value: string, index?: number): DsValidateDatasetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsValidateDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsValidateDatasetResponse): DsValidateDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: DsValidateDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsValidateDatasetResponse;
  static deserializeBinaryFromReader(message: DsValidateDatasetResponse, reader: jspb.BinaryReader): DsValidateDatasetResponse;
}

export namespace DsValidateDatasetResponse {
  export type AsObject = {
    errorsList: Array<string>,
  }
}

export class DsGenerateDatasetRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsGenerateDatasetRequest;
  hasProduct(): boolean;
  clearProduct(): DsGenerateDatasetRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsGenerateDatasetRequest;
  hasVersion(): boolean;
  clearVersion(): DsGenerateDatasetRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsGenerateDatasetRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsGenerateDatasetRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsGenerateDatasetRequest;
  hasConnection(): boolean;
  clearConnection(): DsGenerateDatasetRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsGenerateDatasetRequest;
  hasBucket(): boolean;
  clearBucket(): DsGenerateDatasetRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsGenerateDatasetRequest;
  hasSecret(): boolean;
  clearSecret(): DsGenerateDatasetRequest;

  getRows(): number;
  setRows(value: number): DsGenerateDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsGenerateDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsGenerateDatasetRequest): DsGenerateDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: DsGenerateDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsGenerateDatasetRequest;
  static deserializeBinaryFromReader(message: DsGenerateDatasetRequest, reader: jspb.BinaryReader): DsGenerateDatasetRequest;
}

export namespace DsGenerateDatasetRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
    rows: number,
  }
}

export class DsGenerateDatasetResponse extends jspb.Message {
  getKey(): string;
  setKey(value: string): DsGenerateDatasetResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsGenerateDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsGenerateDatasetResponse): DsGenerateDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: DsGenerateDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsGenerateDatasetResponse;
  static deserializeBinaryFromReader(message: DsGenerateDatasetResponse, reader: jspb.BinaryReader): DsGenerateDatasetResponse;
}

export namespace DsGenerateDatasetResponse {
  export type AsObject = {
    key: string,
  }
}

export class DsSplitDatasetRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsSplitDatasetRequest;
  hasProduct(): boolean;
  clearProduct(): DsSplitDatasetRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsSplitDatasetRequest;
  hasVersion(): boolean;
  clearVersion(): DsSplitDatasetRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsSplitDatasetRequest;
  hasBucket(): boolean;
  clearBucket(): DsSplitDatasetRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsSplitDatasetRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsSplitDatasetRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsSplitDatasetRequest;
  hasDataset(): boolean;
  clearDataset(): DsSplitDatasetRequest;

  getStudy(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study): DsSplitDatasetRequest;
  hasStudy(): boolean;
  clearStudy(): DsSplitDatasetRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsSplitDatasetRequest;
  hasConnection(): boolean;
  clearConnection(): DsSplitDatasetRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsSplitDatasetRequest;
  hasSecret(): boolean;
  clearSecret(): DsSplitDatasetRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsSplitDatasetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsSplitDatasetRequest): DsSplitDatasetRequest.AsObject;
  static serializeBinaryToWriter(message: DsSplitDatasetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsSplitDatasetRequest;
  static deserializeBinaryFromReader(message: DsSplitDatasetRequest, reader: jspb.BinaryReader): DsSplitDatasetRequest;
}

export namespace DsSplitDatasetRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    study?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
  }
}

export class DsSplitDatasetToRungsRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsSplitDatasetToRungsRequest;
  hasProduct(): boolean;
  clearProduct(): DsSplitDatasetToRungsRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsSplitDatasetToRungsRequest;
  hasVersion(): boolean;
  clearVersion(): DsSplitDatasetToRungsRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsSplitDatasetToRungsRequest;
  hasBucket(): boolean;
  clearBucket(): DsSplitDatasetToRungsRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsSplitDatasetToRungsRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsSplitDatasetToRungsRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsSplitDatasetToRungsRequest;
  hasDataset(): boolean;
  clearDataset(): DsSplitDatasetToRungsRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsSplitDatasetToRungsRequest;
  hasConnection(): boolean;
  clearConnection(): DsSplitDatasetToRungsRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsSplitDatasetToRungsRequest;
  hasSecret(): boolean;
  clearSecret(): DsSplitDatasetToRungsRequest;

  getRungs(): number;
  setRungs(value: number): DsSplitDatasetToRungsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsSplitDatasetToRungsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsSplitDatasetToRungsRequest): DsSplitDatasetToRungsRequest.AsObject;
  static serializeBinaryToWriter(message: DsSplitDatasetToRungsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsSplitDatasetToRungsRequest;
  static deserializeBinaryFromReader(message: DsSplitDatasetToRungsRequest, reader: jspb.BinaryReader): DsSplitDatasetToRungsRequest;
}

export namespace DsSplitDatasetToRungsRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
    rungs: number,
  }
}

export class DsSplitDatasetToRungsResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsSplitDatasetToRungsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsSplitDatasetToRungsResponse): DsSplitDatasetToRungsResponse.AsObject;
  static serializeBinaryToWriter(message: DsSplitDatasetToRungsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsSplitDatasetToRungsResponse;
  static deserializeBinaryFromReader(message: DsSplitDatasetToRungsResponse, reader: jspb.BinaryReader): DsSplitDatasetToRungsResponse;
}

export namespace DsSplitDatasetToRungsResponse {
  export type AsObject = {
  }
}

export class DsSplitDatasetResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsSplitDatasetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsSplitDatasetResponse): DsSplitDatasetResponse.AsObject;
  static serializeBinaryToWriter(message: DsSplitDatasetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsSplitDatasetResponse;
  static deserializeBinaryFromReader(message: DsSplitDatasetResponse, reader: jspb.BinaryReader): DsSplitDatasetResponse;
}

export namespace DsSplitDatasetResponse {
  export type AsObject = {
  }
}

export class DsCreateColumnProfileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsCreateColumnProfileRequest;
  hasProduct(): boolean;
  clearProduct(): DsCreateColumnProfileRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsCreateColumnProfileRequest;
  hasVersion(): boolean;
  clearVersion(): DsCreateColumnProfileRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsCreateColumnProfileRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsCreateColumnProfileRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsCreateColumnProfileRequest;
  hasDataset(): boolean;
  clearDataset(): DsCreateColumnProfileRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsCreateColumnProfileRequest;
  hasBucket(): boolean;
  clearBucket(): DsCreateColumnProfileRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsCreateColumnProfileRequest;
  hasConnection(): boolean;
  clearConnection(): DsCreateColumnProfileRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsCreateColumnProfileRequest;
  hasSecret(): boolean;
  clearSecret(): DsCreateColumnProfileRequest;

  getColumntype(): string;
  setColumntype(value: string): DsCreateColumnProfileRequest;

  getColumnname(): string;
  setColumnname(value: string): DsCreateColumnProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateColumnProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateColumnProfileRequest): DsCreateColumnProfileRequest.AsObject;
  static serializeBinaryToWriter(message: DsCreateColumnProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateColumnProfileRequest;
  static deserializeBinaryFromReader(message: DsCreateColumnProfileRequest, reader: jspb.BinaryReader): DsCreateColumnProfileRequest;
}

export namespace DsCreateColumnProfileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
    columntype: string,
    columnname: string,
  }
}

export class DsCreateColumnProfileResponse extends jspb.Message {
  getName(): string;
  setName(value: string): DsCreateColumnProfileResponse;

  getPlot(): github_com_metaprov_modeldapi_services_common_common_pb.Plot | undefined;
  setPlot(value?: github_com_metaprov_modeldapi_services_common_common_pb.Plot): DsCreateColumnProfileResponse;
  hasPlot(): boolean;
  clearPlot(): DsCreateColumnProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsCreateColumnProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsCreateColumnProfileResponse): DsCreateColumnProfileResponse.AsObject;
  static serializeBinaryToWriter(message: DsCreateColumnProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsCreateColumnProfileResponse;
  static deserializeBinaryFromReader(message: DsCreateColumnProfileResponse, reader: jspb.BinaryReader): DsCreateColumnProfileResponse;
}

export namespace DsCreateColumnProfileResponse {
  export type AsObject = {
    name: string,
    plot?: github_com_metaprov_modeldapi_services_common_common_pb.Plot.AsObject,
  }
}

export class DsDatasetProfileRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsDatasetProfileRequest;
  hasProduct(): boolean;
  clearProduct(): DsDatasetProfileRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): DsDatasetProfileRequest;
  hasVersion(): boolean;
  clearVersion(): DsDatasetProfileRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): DsDatasetProfileRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsDatasetProfileRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): DsDatasetProfileRequest;
  hasDataset(): boolean;
  clearDataset(): DsDatasetProfileRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsDatasetProfileRequest;
  hasBucket(): boolean;
  clearBucket(): DsDatasetProfileRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsDatasetProfileRequest;
  hasConnection(): boolean;
  clearConnection(): DsDatasetProfileRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsDatasetProfileRequest;
  hasSecret(): boolean;
  clearSecret(): DsDatasetProfileRequest;

  getQuick(): boolean;
  setQuick(value: boolean): DsDatasetProfileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsDatasetProfileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsDatasetProfileRequest): DsDatasetProfileRequest.AsObject;
  static serializeBinaryToWriter(message: DsDatasetProfileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsDatasetProfileRequest;
  static deserializeBinaryFromReader(message: DsDatasetProfileRequest, reader: jspb.BinaryReader): DsDatasetProfileRequest;
}

export namespace DsDatasetProfileRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
    quick: boolean,
  }
}

export class DsDatasetProfileResponse extends jspb.Message {
  getProfile(): github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile | undefined;
  setProfile(value?: github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile): DsDatasetProfileResponse;
  hasProfile(): boolean;
  clearProfile(): DsDatasetProfileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsDatasetProfileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsDatasetProfileResponse): DsDatasetProfileResponse.AsObject;
  static serializeBinaryToWriter(message: DsDatasetProfileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsDatasetProfileResponse;
  static deserializeBinaryFromReader(message: DsDatasetProfileResponse, reader: jspb.BinaryReader): DsDatasetProfileResponse;
}

export namespace DsDatasetProfileResponse {
  export type AsObject = {
    profile?: github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile.AsObject,
  }
}

export class DsInferSchemaRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): DsInferSchemaRequest;
  hasProduct(): boolean;
  clearProduct(): DsInferSchemaRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsInferSchemaRequest;
  hasBucket(): boolean;
  clearBucket(): DsInferSchemaRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsInferSchemaRequest;
  hasConnection(): boolean;
  clearConnection(): DsInferSchemaRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsInferSchemaRequest;
  hasSecret(): boolean;
  clearSecret(): DsInferSchemaRequest;

  getKey(): string;
  setKey(value: string): DsInferSchemaRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsInferSchemaRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsInferSchemaRequest): DsInferSchemaRequest.AsObject;
  static serializeBinaryToWriter(message: DsInferSchemaRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsInferSchemaRequest;
  static deserializeBinaryFromReader(message: DsInferSchemaRequest, reader: jspb.BinaryReader): DsInferSchemaRequest;
}

export namespace DsInferSchemaRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
    key: string,
  }
}

export class DsInferSchemaResponse extends jspb.Message {
  getProfile(): github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile | undefined;
  setProfile(value?: github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile): DsInferSchemaResponse;
  hasProfile(): boolean;
  clearProfile(): DsInferSchemaResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsInferSchemaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsInferSchemaResponse): DsInferSchemaResponse.AsObject;
  static serializeBinaryToWriter(message: DsInferSchemaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsInferSchemaResponse;
  static deserializeBinaryFromReader(message: DsInferSchemaResponse, reader: jspb.BinaryReader): DsInferSchemaResponse;
}

export namespace DsInferSchemaResponse {
  export type AsObject = {
    profile?: github_com_metaprov_modeldapi_services_common_common_pb.DatasetProfile.AsObject,
  }
}

export class DsGetTableViewRequest extends jspb.Message {
  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsGetTableViewRequest;
  hasBucket(): boolean;
  clearBucket(): DsGetTableViewRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsGetTableViewRequest;
  hasConnection(): boolean;
  clearConnection(): DsGetTableViewRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec): DsGetTableViewRequest;
  hasDatasource(): boolean;
  clearDatasource(): DsGetTableViewRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsGetTableViewRequest;
  hasSecret(): boolean;
  clearSecret(): DsGetTableViewRequest;

  getKey(): string;
  setKey(value: string): DsGetTableViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsGetTableViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsGetTableViewRequest): DsGetTableViewRequest.AsObject;
  static serializeBinaryToWriter(message: DsGetTableViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsGetTableViewRequest;
  static deserializeBinaryFromReader(message: DsGetTableViewRequest, reader: jspb.BinaryReader): DsGetTableViewRequest;
}

export namespace DsGetTableViewRequest {
  export type AsObject = {
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
    key: string,
  }
}

export class DsGetTableViewResponse extends jspb.Message {
  getTableview(): github_com_metaprov_modeldapi_services_common_common_pb.TableView | undefined;
  setTableview(value?: github_com_metaprov_modeldapi_services_common_common_pb.TableView): DsGetTableViewResponse;
  hasTableview(): boolean;
  clearTableview(): DsGetTableViewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsGetTableViewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsGetTableViewResponse): DsGetTableViewResponse.AsObject;
  static serializeBinaryToWriter(message: DsGetTableViewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsGetTableViewResponse;
  static deserializeBinaryFromReader(message: DsGetTableViewResponse, reader: jspb.BinaryReader): DsGetTableViewResponse;
}

export namespace DsGetTableViewResponse {
  export type AsObject = {
    tableview?: github_com_metaprov_modeldapi_services_common_common_pb.TableView.AsObject,
  }
}

export class DsGetMisclassTableViewRequest extends jspb.Message {
  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): DsGetMisclassTableViewRequest;
  hasBucket(): boolean;
  clearBucket(): DsGetMisclassTableViewRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): DsGetMisclassTableViewRequest;
  hasConnection(): boolean;
  clearConnection(): DsGetMisclassTableViewRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): DsGetMisclassTableViewRequest;
  hasSecret(): boolean;
  clearSecret(): DsGetMisclassTableViewRequest;

  getKey(): string;
  setKey(value: string): DsGetMisclassTableViewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsGetMisclassTableViewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsGetMisclassTableViewRequest): DsGetMisclassTableViewRequest.AsObject;
  static serializeBinaryToWriter(message: DsGetMisclassTableViewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsGetMisclassTableViewRequest;
  static deserializeBinaryFromReader(message: DsGetMisclassTableViewRequest, reader: jspb.BinaryReader): DsGetMisclassTableViewRequest;
}

export namespace DsGetMisclassTableViewRequest {
  export type AsObject = {
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
    key: string,
  }
}

export class DsGetMisclassTableViewResponse extends jspb.Message {
  getTableview(): github_com_metaprov_modeldapi_services_common_common_pb.TableView | undefined;
  setTableview(value?: github_com_metaprov_modeldapi_services_common_common_pb.TableView): DsGetMisclassTableViewResponse;
  hasTableview(): boolean;
  clearTableview(): DsGetMisclassTableViewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsGetMisclassTableViewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsGetMisclassTableViewResponse): DsGetMisclassTableViewResponse.AsObject;
  static serializeBinaryToWriter(message: DsGetMisclassTableViewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsGetMisclassTableViewResponse;
  static deserializeBinaryFromReader(message: DsGetMisclassTableViewResponse, reader: jspb.BinaryReader): DsGetMisclassTableViewResponse;
}

export namespace DsGetMisclassTableViewResponse {
  export type AsObject = {
    tableview?: github_com_metaprov_modeldapi_services_common_common_pb.TableView.AsObject,
  }
}

export class CreateModelReportRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): CreateModelReportRequest;
  hasProduct(): boolean;
  clearProduct(): CreateModelReportRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): CreateModelReportRequest;
  hasVersion(): boolean;
  clearVersion(): CreateModelReportRequest;

  getStudy(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study): CreateModelReportRequest;
  hasStudy(): boolean;
  clearStudy(): CreateModelReportRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): CreateModelReportRequest;
  hasDataset(): boolean;
  clearDataset(): CreateModelReportRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): CreateModelReportRequest;
  hasDatasource(): boolean;
  clearDatasource(): CreateModelReportRequest;

  getModel(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model): CreateModelReportRequest;
  hasModel(): boolean;
  clearModel(): CreateModelReportRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateModelReportRequest;
  hasConnection(): boolean;
  clearConnection(): CreateModelReportRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): CreateModelReportRequest;
  hasSecret(): boolean;
  clearSecret(): CreateModelReportRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): CreateModelReportRequest;
  hasBucket(): boolean;
  clearBucket(): CreateModelReportRequest;

  getReport(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setReport(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report): CreateModelReportRequest;
  hasReport(): boolean;
  clearReport(): CreateModelReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateModelReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateModelReportRequest): CreateModelReportRequest.AsObject;
  static serializeBinaryToWriter(message: CreateModelReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateModelReportRequest;
  static deserializeBinaryFromReader(message: CreateModelReportRequest, reader: jspb.BinaryReader): CreateModelReportRequest;
}

export namespace CreateModelReportRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    study?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    model?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    report?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
  }
}

export class CreateForecastReportRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): CreateForecastReportRequest;
  hasProduct(): boolean;
  clearProduct(): CreateForecastReportRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): CreateForecastReportRequest;
  hasVersion(): boolean;
  clearVersion(): CreateForecastReportRequest;

  getStudy(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study): CreateForecastReportRequest;
  hasStudy(): boolean;
  clearStudy(): CreateForecastReportRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): CreateForecastReportRequest;
  hasDataset(): boolean;
  clearDataset(): CreateForecastReportRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): CreateForecastReportRequest;
  hasDatasource(): boolean;
  clearDatasource(): CreateForecastReportRequest;

  getForecast(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setForecast(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model): CreateForecastReportRequest;
  hasForecast(): boolean;
  clearForecast(): CreateForecastReportRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateForecastReportRequest;
  hasConnection(): boolean;
  clearConnection(): CreateForecastReportRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): CreateForecastReportRequest;
  hasSecret(): boolean;
  clearSecret(): CreateForecastReportRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): CreateForecastReportRequest;
  hasBucket(): boolean;
  clearBucket(): CreateForecastReportRequest;

  getReport(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setReport(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report): CreateForecastReportRequest;
  hasReport(): boolean;
  clearReport(): CreateForecastReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateForecastReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateForecastReportRequest): CreateForecastReportRequest.AsObject;
  static serializeBinaryToWriter(message: CreateForecastReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateForecastReportRequest;
  static deserializeBinaryFromReader(message: CreateForecastReportRequest, reader: jspb.BinaryReader): CreateForecastReportRequest;
}

export namespace CreateForecastReportRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    study?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    forecast?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    report?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
  }
}

export class CreateReportResponse extends jspb.Message {
  getPdf(): Uint8Array | string;
  getPdf_asU8(): Uint8Array;
  getPdf_asB64(): string;
  setPdf(value: Uint8Array | string): CreateReportResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateReportResponse): CreateReportResponse.AsObject;
  static serializeBinaryToWriter(message: CreateReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateReportResponse;
  static deserializeBinaryFromReader(message: CreateReportResponse, reader: jspb.BinaryReader): CreateReportResponse;
}

export namespace CreateReportResponse {
  export type AsObject = {
    pdf: Uint8Array | string,
  }
}

export class CreateDatasetReportRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): CreateDatasetReportRequest;
  hasProduct(): boolean;
  clearProduct(): CreateDatasetReportRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): CreateDatasetReportRequest;
  hasVersion(): boolean;
  clearVersion(): CreateDatasetReportRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): CreateDatasetReportRequest;
  hasDatasource(): boolean;
  clearDatasource(): CreateDatasetReportRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): CreateDatasetReportRequest;
  hasDataset(): boolean;
  clearDataset(): CreateDatasetReportRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateDatasetReportRequest;
  hasConnection(): boolean;
  clearConnection(): CreateDatasetReportRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): CreateDatasetReportRequest;
  hasBucket(): boolean;
  clearBucket(): CreateDatasetReportRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): CreateDatasetReportRequest;
  hasSecret(): boolean;
  clearSecret(): CreateDatasetReportRequest;

  getReport(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setReport(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report): CreateDatasetReportRequest;
  hasReport(): boolean;
  clearReport(): CreateDatasetReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDatasetReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDatasetReportRequest): CreateDatasetReportRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDatasetReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDatasetReportRequest;
  static deserializeBinaryFromReader(message: CreateDatasetReportRequest, reader: jspb.BinaryReader): CreateDatasetReportRequest;
}

export namespace CreateDatasetReportRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
    report?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
  }
}

export class CreateStudyReportRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): CreateStudyReportRequest;
  hasProduct(): boolean;
  clearProduct(): CreateStudyReportRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): CreateStudyReportRequest;
  hasVersion(): boolean;
  clearVersion(): CreateStudyReportRequest;

  getStudy(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study | undefined;
  setStudy(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study): CreateStudyReportRequest;
  hasStudy(): boolean;
  clearStudy(): CreateStudyReportRequest;

  getDataset(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset | undefined;
  setDataset(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset): CreateStudyReportRequest;
  hasDataset(): boolean;
  clearDataset(): CreateStudyReportRequest;

  getDatasource(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource | undefined;
  setDatasource(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource): CreateStudyReportRequest;
  hasDatasource(): boolean;
  clearDatasource(): CreateStudyReportRequest;

  getModels(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelList | undefined;
  setModels(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelList): CreateStudyReportRequest;
  hasModels(): boolean;
  clearModels(): CreateStudyReportRequest;

  getBucket(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket | undefined;
  setBucket(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket): CreateStudyReportRequest;
  hasBucket(): boolean;
  clearBucket(): CreateStudyReportRequest;

  getConnection(): github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection | undefined;
  setConnection(value?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection): CreateStudyReportRequest;
  hasConnection(): boolean;
  clearConnection(): CreateStudyReportRequest;

  getSecret(): k8s_io_api_core_v1_generated_pb.Secret | undefined;
  setSecret(value?: k8s_io_api_core_v1_generated_pb.Secret): CreateStudyReportRequest;
  hasSecret(): boolean;
  clearSecret(): CreateStudyReportRequest;

  getReport(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report | undefined;
  setReport(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report): CreateStudyReportRequest;
  hasReport(): boolean;
  clearReport(): CreateStudyReportRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateStudyReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateStudyReportRequest): CreateStudyReportRequest.AsObject;
  static serializeBinaryToWriter(message: CreateStudyReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateStudyReportRequest;
  static deserializeBinaryFromReader(message: CreateStudyReportRequest, reader: jspb.BinaryReader): CreateStudyReportRequest;
}

export namespace CreateStudyReportRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    study?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.AsObject,
    dataset?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.AsObject,
    datasource?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.AsObject,
    models?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelList.AsObject,
    bucket?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.AsObject,
    connection?: github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.AsObject,
    secret?: k8s_io_api_core_v1_generated_pb.Secret.AsObject,
    report?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.AsObject,
  }
}

export class AskModelRequest extends jspb.Message {
  getProduct(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct | undefined;
  setProduct(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct): AskModelRequest;
  hasProduct(): boolean;
  clearProduct(): AskModelRequest;

  getVersion(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion | undefined;
  setVersion(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion): AskModelRequest;
  hasVersion(): boolean;
  clearVersion(): AskModelRequest;

  getStudyname(): string;
  setStudyname(value: string): AskModelRequest;

  getStudynamespace(): string;
  setStudynamespace(value: string): AskModelRequest;

  getStudyspec(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.StudySpec | undefined;
  setStudyspec(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.StudySpec): AskModelRequest;
  hasStudyspec(): boolean;
  clearStudyspec(): AskModelRequest;

  getDatasourcename(): string;
  setDatasourcename(value: string): AskModelRequest;

  getDatasourcenamespace(): string;
  setDatasourcenamespace(value: string): AskModelRequest;

  getDatasourcespec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec | undefined;
  setDatasourcespec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec): AskModelRequest;
  hasDatasourcespec(): boolean;
  clearDatasourcespec(): AskModelRequest;

  getDatasetname(): string;
  setDatasetname(value: string): AskModelRequest;

  getDatasetnamespace(): string;
  setDatasetnamespace(value: string): AskModelRequest;

  getDatasetspec(): github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSpec | undefined;
  setDatasetspec(value?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSpec): AskModelRequest;
  hasDatasetspec(): boolean;
  clearDatasetspec(): AskModelRequest;

  getBudget(): number;
  setBudget(value: number): AskModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AskModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AskModelRequest): AskModelRequest.AsObject;
  static serializeBinaryToWriter(message: AskModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AskModelRequest;
  static deserializeBinaryFromReader(message: AskModelRequest, reader: jspb.BinaryReader): AskModelRequest;
}

export namespace AskModelRequest {
  export type AsObject = {
    product?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.AsObject,
    version?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.AsObject,
    studyname: string,
    studynamespace: string,
    studyspec?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.StudySpec.AsObject,
    datasourcename: string,
    datasourcenamespace: string,
    datasourcespec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.AsObject,
    datasetname: string,
    datasetnamespace: string,
    datasetspec?: github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSpec.AsObject,
    budget: number,
  }
}

export class AskModelResponse extends jspb.Message {
  getSpec(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelSpec | undefined;
  setSpec(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelSpec): AskModelResponse;
  hasSpec(): boolean;
  clearSpec(): AskModelResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AskModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AskModelResponse): AskModelResponse.AsObject;
  static serializeBinaryToWriter(message: AskModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AskModelResponse;
  static deserializeBinaryFromReader(message: AskModelResponse, reader: jspb.BinaryReader): AskModelResponse;
}

export namespace AskModelResponse {
  export type AsObject = {
    spec?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelSpec.AsObject,
  }
}

export class TellModelRequest extends jspb.Message {
  getModel(): github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model | undefined;
  setModel(value?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model): TellModelRequest;
  hasModel(): boolean;
  clearModel(): TellModelRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TellModelRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TellModelRequest): TellModelRequest.AsObject;
  static serializeBinaryToWriter(message: TellModelRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TellModelRequest;
  static deserializeBinaryFromReader(message: TellModelRequest, reader: jspb.BinaryReader): TellModelRequest;
}

export namespace TellModelRequest {
  export type AsObject = {
    model?: github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.AsObject,
  }
}

export class TellModelResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TellModelResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TellModelResponse): TellModelResponse.AsObject;
  static serializeBinaryToWriter(message: TellModelResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TellModelResponse;
  static deserializeBinaryFromReader(message: TellModelResponse, reader: jspb.BinaryReader): TellModelResponse;
}

export namespace TellModelResponse {
  export type AsObject = {
  }
}

export class DsShutdownRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsShutdownRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DsShutdownRequest): DsShutdownRequest.AsObject;
  static serializeBinaryToWriter(message: DsShutdownRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsShutdownRequest;
  static deserializeBinaryFromReader(message: DsShutdownRequest, reader: jspb.BinaryReader): DsShutdownRequest;
}

export namespace DsShutdownRequest {
  export type AsObject = {
  }
}

export class DsShutdownResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DsShutdownResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DsShutdownResponse): DsShutdownResponse.AsObject;
  static serializeBinaryToWriter(message: DsShutdownResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DsShutdownResponse;
  static deserializeBinaryFromReader(message: DsShutdownResponse, reader: jspb.BinaryReader): DsShutdownResponse;
}

export namespace DsShutdownResponse {
  export type AsObject = {
  }
}
