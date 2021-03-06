/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeldapi.services.cloudproxyd.v1
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb from '../../../../../../github.com/metaprov/modeldapi/services/cloudproxyd/v1/cloudproxyd_pb';


export class CloudProxyServiceClient {
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

  methodInfoDownload = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileDownloadResponse,
    (request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileDownloadRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileDownloadResponse.deserializeBinary
  );

  download(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileDownloadRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileDownloadResponse>;

  download(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileDownloadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileDownloadResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileDownloadResponse>;

  download(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileDownloadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileDownloadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/Download',
        request,
        metadata || {},
        this.methodInfoDownload,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/Download',
    request,
    metadata || {},
    this.methodInfoDownload);
  }

  methodInfoUpload = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileUploadResponse,
    (request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileUploadRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileUploadResponse.deserializeBinary
  );

  upload(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileUploadRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileUploadResponse>;

  upload(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileUploadResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileUploadResponse>;

  upload(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileUploadRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.FileUploadResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/Upload',
        request,
        metadata || {},
        this.methodInfoUpload,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/Upload',
    request,
    metadata || {},
    this.methodInfoUpload);
  }

  methodInfoKeyExistInVirtualBucket = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.KeyExistInVirtualBucketResponse,
    (request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.KeyExistInVirtualBucketRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.KeyExistInVirtualBucketResponse.deserializeBinary
  );

  keyExistInVirtualBucket(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.KeyExistInVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.KeyExistInVirtualBucketResponse>;

  keyExistInVirtualBucket(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.KeyExistInVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.KeyExistInVirtualBucketResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.KeyExistInVirtualBucketResponse>;

  keyExistInVirtualBucket(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.KeyExistInVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.KeyExistInVirtualBucketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/KeyExistInVirtualBucket',
        request,
        metadata || {},
        this.methodInfoKeyExistInVirtualBucket,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/KeyExistInVirtualBucket',
    request,
    metadata || {},
    this.methodInfoKeyExistInVirtualBucket);
  }

  methodInfoVirtualBucketExist = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.VirtualBucketExistResponse,
    (request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.VirtualBucketExistRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.VirtualBucketExistResponse.deserializeBinary
  );

  virtualBucketExist(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.VirtualBucketExistRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.VirtualBucketExistResponse>;

  virtualBucketExist(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.VirtualBucketExistRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.VirtualBucketExistResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.VirtualBucketExistResponse>;

  virtualBucketExist(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.VirtualBucketExistRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.VirtualBucketExistResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/VirtualBucketExist',
        request,
        metadata || {},
        this.methodInfoVirtualBucketExist,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/VirtualBucketExist',
    request,
    metadata || {},
    this.methodInfoVirtualBucketExist);
  }

  methodInfoCreateVirtualBucketIfNotExist = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.CreateVirtualBucketResponse,
    (request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.CreateVirtualBucketRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.CreateVirtualBucketResponse.deserializeBinary
  );

  createVirtualBucketIfNotExist(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.CreateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.CreateVirtualBucketResponse>;

  createVirtualBucketIfNotExist(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.CreateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.CreateVirtualBucketResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.CreateVirtualBucketResponse>;

  createVirtualBucketIfNotExist(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.CreateVirtualBucketRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.CreateVirtualBucketResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/CreateVirtualBucketIfNotExist',
        request,
        metadata || {},
        this.methodInfoCreateVirtualBucketIfNotExist,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/CreateVirtualBucketIfNotExist',
    request,
    metadata || {},
    this.methodInfoCreateVirtualBucketIfNotExist);
  }

  methodInfoShutdown = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.ShutdownResponse,
    (request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.ShutdownRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.ShutdownResponse.deserializeBinary
  );

  shutdown(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.ShutdownRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.ShutdownResponse>;

  shutdown(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.ShutdownRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.ShutdownResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.ShutdownResponse>;

  shutdown(
    request: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.ShutdownRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_cloudproxyd_v1_cloudproxyd_pb.ShutdownResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/Shutdown',
        request,
        metadata || {},
        this.methodInfoShutdown,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/Shutdown',
    request,
    metadata || {},
    this.methodInfoShutdown);
  }

}

