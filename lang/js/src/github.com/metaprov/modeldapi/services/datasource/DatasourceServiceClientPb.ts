/**
 * @fileoverview gRPC-Web generated client stub for github.com.metaprov.modeld.services.datasource
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as github_com_metaprov_modeldapi_services_datasource_datasource_pb from '../../../../../github.com/metaprov/modeldapi/services/datasource/datasource_pb';


export class DataSourceServiceClient {
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

  methodInfoListDataSources = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_datasource_datasource_pb.ListDataSourceResponse,
    (request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.ListDataSourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_datasource_datasource_pb.ListDataSourceResponse.deserializeBinary
  );

  listDataSources(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.ListDataSourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datasource_datasource_pb.ListDataSourceResponse>;

  listDataSources(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.ListDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datasource_datasource_pb.ListDataSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datasource_datasource_pb.ListDataSourceResponse>;

  listDataSources(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.ListDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datasource_datasource_pb.ListDataSourceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.datasource.DataSourceService/ListDataSources',
        request,
        metadata || {},
        this.methodInfoListDataSources,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.datasource.DataSourceService/ListDataSources',
    request,
    metadata || {},
    this.methodInfoListDataSources);
  }

  methodInfoCreateDataSource = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_datasource_datasource_pb.CreateDataSourceResponse,
    (request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.CreateDataSourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_datasource_datasource_pb.CreateDataSourceResponse.deserializeBinary
  );

  createDataSource(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.CreateDataSourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datasource_datasource_pb.CreateDataSourceResponse>;

  createDataSource(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.CreateDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datasource_datasource_pb.CreateDataSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datasource_datasource_pb.CreateDataSourceResponse>;

  createDataSource(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.CreateDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datasource_datasource_pb.CreateDataSourceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.datasource.DataSourceService/CreateDataSource',
        request,
        metadata || {},
        this.methodInfoCreateDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.datasource.DataSourceService/CreateDataSource',
    request,
    metadata || {},
    this.methodInfoCreateDataSource);
  }

  methodInfoGetDataSource = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetDataSourceResponse,
    (request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetDataSourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetDataSourceResponse.deserializeBinary
  );

  getDataSource(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetDataSourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetDataSourceResponse>;

  getDataSource(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetDataSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetDataSourceResponse>;

  getDataSource(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetDataSourceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.datasource.DataSourceService/GetDataSource',
        request,
        metadata || {},
        this.methodInfoGetDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.datasource.DataSourceService/GetDataSource',
    request,
    metadata || {},
    this.methodInfoGetDataSource);
  }

  methodInfoUpdateDataSource = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_datasource_datasource_pb.UpdateDataSourceResponse,
    (request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.UpdateDataSourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_datasource_datasource_pb.UpdateDataSourceResponse.deserializeBinary
  );

  updateDataSource(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.UpdateDataSourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datasource_datasource_pb.UpdateDataSourceResponse>;

  updateDataSource(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.UpdateDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datasource_datasource_pb.UpdateDataSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datasource_datasource_pb.UpdateDataSourceResponse>;

  updateDataSource(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.UpdateDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datasource_datasource_pb.UpdateDataSourceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.datasource.DataSourceService/UpdateDataSource',
        request,
        metadata || {},
        this.methodInfoUpdateDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.datasource.DataSourceService/UpdateDataSource',
    request,
    metadata || {},
    this.methodInfoUpdateDataSource);
  }

  methodInfoDeleteDataSource = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_datasource_datasource_pb.DeleteDataSourceResponse,
    (request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.DeleteDataSourceRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_datasource_datasource_pb.DeleteDataSourceResponse.deserializeBinary
  );

  deleteDataSource(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.DeleteDataSourceRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datasource_datasource_pb.DeleteDataSourceResponse>;

  deleteDataSource(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.DeleteDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datasource_datasource_pb.DeleteDataSourceResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datasource_datasource_pb.DeleteDataSourceResponse>;

  deleteDataSource(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.DeleteDataSourceRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datasource_datasource_pb.DeleteDataSourceResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.datasource.DataSourceService/DeleteDataSource',
        request,
        metadata || {},
        this.methodInfoDeleteDataSource,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.datasource.DataSourceService/DeleteDataSource',
    request,
    metadata || {},
    this.methodInfoDeleteDataSource);
  }

  methodInfoInferSchema = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_datasource_datasource_pb.InferSchemaResponse,
    (request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.InferSchemaRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_datasource_datasource_pb.InferSchemaResponse.deserializeBinary
  );

  inferSchema(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.InferSchemaRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datasource_datasource_pb.InferSchemaResponse>;

  inferSchema(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.InferSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datasource_datasource_pb.InferSchemaResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datasource_datasource_pb.InferSchemaResponse>;

  inferSchema(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.InferSchemaRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datasource_datasource_pb.InferSchemaResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.datasource.DataSourceService/InferSchema',
        request,
        metadata || {},
        this.methodInfoInferSchema,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.datasource.DataSourceService/InferSchema',
    request,
    metadata || {},
    this.methodInfoInferSchema);
  }

  methodInfoGetTableView = new grpcWeb.AbstractClientBase.MethodInfo(
    github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetTableViewResponse,
    (request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetTableViewRequest) => {
      return request.serializeBinary();
    },
    github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetTableViewResponse.deserializeBinary
  );

  getTableView(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetTableViewRequest,
    metadata: grpcWeb.Metadata | null): Promise<github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetTableViewResponse>;

  getTableView(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetTableViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetTableViewResponse) => void): grpcWeb.ClientReadableStream<github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetTableViewResponse>;

  getTableView(
    request: github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetTableViewRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: github_com_metaprov_modeldapi_services_datasource_datasource_pb.GetTableViewResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/github.com.metaprov.modeld.services.datasource.DataSourceService/GetTableView',
        request,
        metadata || {},
        this.methodInfoGetTableView,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/github.com.metaprov.modeld.services.datasource.DataSourceService/GetTableView',
    request,
    metadata || {},
    this.methodInfoGetTableView);
  }

}
