/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.modeldsystem.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb from '../../../../../../github.com/metaprov/modeldapi/services/modeldsystem/v1/modeldsystem_pb';


export class ModeldSystemServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoListModeldSystems = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.ListModeldSystemsResponse,
    (request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.ListModeldSystemsRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.ListModeldSystemsResponse.deserializeBinary
  );

  listModeldSystems(
    request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.ListModeldSystemsRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.ListModeldSystemsResponse>;

  listModeldSystems(
    request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.ListModeldSystemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.ListModeldSystemsResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.ListModeldSystemsResponse>;

  listModeldSystems(
    request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.ListModeldSystemsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.ListModeldSystemsResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.modeldsystem.v1.ModeldSystemService/ListModeldSystems',
        request,
        metadata || {},
        this.methodInfoListModeldSystems,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.modeldsystem.v1.ModeldSystemService/ListModeldSystems',
    request,
    metadata || {},
    this.methodInfoListModeldSystems);
  }

  methodInfoCreateModeldSystem = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.CreateModeldSystemResponse,
    (request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.CreateModeldSystemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.CreateModeldSystemResponse.deserializeBinary
  );

  createModeldSystem(
    request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.CreateModeldSystemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.CreateModeldSystemResponse>;

  createModeldSystem(
    request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.CreateModeldSystemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.CreateModeldSystemResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.CreateModeldSystemResponse>;

  createModeldSystem(
    request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.CreateModeldSystemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.CreateModeldSystemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.modeldsystem.v1.ModeldSystemService/CreateModeldSystem',
        request,
        metadata || {},
        this.methodInfoCreateModeldSystem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.modeldsystem.v1.ModeldSystemService/CreateModeldSystem',
    request,
    metadata || {},
    this.methodInfoCreateModeldSystem);
  }

  methodInfoGetModeldSystem = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.GetModeldSystemResponse,
    (request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.GetModeldSystemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.GetModeldSystemResponse.deserializeBinary
  );

  getModeldSystem(
    request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.GetModeldSystemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.GetModeldSystemResponse>;

  getModeldSystem(
    request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.GetModeldSystemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.GetModeldSystemResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.GetModeldSystemResponse>;

  getModeldSystem(
    request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.GetModeldSystemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.GetModeldSystemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.modeldsystem.v1.ModeldSystemService/GetModeldSystem',
        request,
        metadata || {},
        this.methodInfoGetModeldSystem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.modeldsystem.v1.ModeldSystemService/GetModeldSystem',
    request,
    metadata || {},
    this.methodInfoGetModeldSystem);
  }

  methodInfoUpdateModeldSystem = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.UpdateModeldSystemResponse,
    (request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.UpdateModeldSystemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.UpdateModeldSystemResponse.deserializeBinary
  );

  updateModeldSystem(
    request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.UpdateModeldSystemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.UpdateModeldSystemResponse>;

  updateModeldSystem(
    request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.UpdateModeldSystemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.UpdateModeldSystemResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.UpdateModeldSystemResponse>;

  updateModeldSystem(
    request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.UpdateModeldSystemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.UpdateModeldSystemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.modeldsystem.v1.ModeldSystemService/UpdateModeldSystem',
        request,
        metadata || {},
        this.methodInfoUpdateModeldSystem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.modeldsystem.v1.ModeldSystemService/UpdateModeldSystem',
    request,
    metadata || {},
    this.methodInfoUpdateModeldSystem);
  }

  methodInfoDeleteModeldSystem = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.DeleteModeldSystemResponse,
    (request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.DeleteModeldSystemRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.DeleteModeldSystemResponse.deserializeBinary
  );

  deleteModeldSystem(
    request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.DeleteModeldSystemRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.DeleteModeldSystemResponse>;

  deleteModeldSystem(
    request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.DeleteModeldSystemRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.DeleteModeldSystemResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.DeleteModeldSystemResponse>;

  deleteModeldSystem(
    request: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.DeleteModeldSystemRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_modeldsystem_v1_modeldsystem_pb.DeleteModeldSystemResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.modeldsystem.v1.ModeldSystemService/DeleteModeldSystem',
        request,
        metadata || {},
        this.methodInfoDeleteModeldSystem,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.modeldsystem.v1.ModeldSystemService/DeleteModeldSystem',
    request,
    metadata || {},
    this.methodInfoDeleteModeldSystem);
  }

}

