import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../../../google/api/annotations_pb';
import * as github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb from '../../../../../../github.com/metaprov/modeldapi/pkg/apis/team/v1alpha1/generated_pb';


export class ListPostMortemsRequest extends jspb.Message {
  getNamespace(): string;
  setNamespace(value: string): ListPostMortemsRequest;

  getLabelsMap(): jspb.Map<string, string>;
  clearLabelsMap(): ListPostMortemsRequest;

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
    labelsMap: Array<[string, string]>,
  }
}

export class ListPostMortemsResponse extends jspb.Message {
  getItems(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortemList | undefined;
  setItems(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortemList): ListPostMortemsResponse;
  hasItems(): boolean;
  clearItems(): ListPostMortemsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPostMortemsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPostMortemsResponse): ListPostMortemsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPostMortemsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPostMortemsResponse;
  static deserializeBinaryFromReader(message: ListPostMortemsResponse, reader: jspb.BinaryReader): ListPostMortemsResponse;
}

export namespace ListPostMortemsResponse {
  export type AsObject = {
    items?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortemList.AsObject,
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

export class CreatePostMortemResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostMortemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostMortemResponse): CreatePostMortemResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePostMortemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePostMortemResponse;
  static deserializeBinaryFromReader(message: CreatePostMortemResponse, reader: jspb.BinaryReader): CreatePostMortemResponse;
}

export namespace CreatePostMortemResponse {
  export type AsObject = {
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

export class UpdatePostMortemResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePostMortemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePostMortemResponse): UpdatePostMortemResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePostMortemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePostMortemResponse;
  static deserializeBinaryFromReader(message: UpdatePostMortemResponse, reader: jspb.BinaryReader): UpdatePostMortemResponse;
}

export namespace UpdatePostMortemResponse {
  export type AsObject = {
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

export class GetPostMortemResponse extends jspb.Message {
  getItem(): github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem | undefined;
  setItem(value?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem): GetPostMortemResponse;
  hasItem(): boolean;
  clearItem(): GetPostMortemResponse;

  getYaml(): string;
  setYaml(value: string): GetPostMortemResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostMortemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostMortemResponse): GetPostMortemResponse.AsObject;
  static serializeBinaryToWriter(message: GetPostMortemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostMortemResponse;
  static deserializeBinaryFromReader(message: GetPostMortemResponse, reader: jspb.BinaryReader): GetPostMortemResponse;
}

export namespace GetPostMortemResponse {
  export type AsObject = {
    item?: github_com_metaprov_modeldapi_pkg_apis_team_v1alpha1_generated_pb.PostMortem.AsObject,
    yaml: string,
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

export class DeletePostMortemResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePostMortemResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePostMortemResponse): DeletePostMortemResponse.AsObject;
  static serializeBinaryToWriter(message: DeletePostMortemResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePostMortemResponse;
  static deserializeBinaryFromReader(message: DeletePostMortemResponse, reader: jspb.BinaryReader): DeletePostMortemResponse;
}

export namespace DeletePostMortemResponse {
  export type AsObject = {
  }
}

