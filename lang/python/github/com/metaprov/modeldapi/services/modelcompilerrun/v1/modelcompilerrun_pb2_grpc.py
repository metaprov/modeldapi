# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.modelcompilerrun.v1 import modelcompilerrun_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2


class ModelCompilerRunServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListModelCompilerRuns = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelcompilerrun.v1.ModelCompilerRunService/ListModelCompilerRuns',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.ListModelCompilerRunsRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.ListModelCompilerRunsResponse.FromString,
                )
        self.CreateModelCompilerRun = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelcompilerrun.v1.ModelCompilerRunService/CreateModelCompilerRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.CreateModelCompilerRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.CreateModelCompilerRunResponse.FromString,
                )
        self.GetModelCompilerRun = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelcompilerrun.v1.ModelCompilerRunService/GetModelCompilerRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.GetModelCompilerRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.GetModelCompilerRunResponse.FromString,
                )
        self.UpdateModelCompilerRun = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelcompilerrun.v1.ModelCompilerRunService/UpdateModelCompilerRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.UpdateModelCompilerRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.UpdateModelCompilerRunResponse.FromString,
                )
        self.DeleteModelCompilerRun = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelcompilerrun.v1.ModelCompilerRunService/DeleteModelCompilerRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.DeleteModelCompilerRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.DeleteModelCompilerRunResponse.FromString,
                )


class ModelCompilerRunServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListModelCompilerRuns(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateModelCompilerRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetModelCompilerRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateModelCompilerRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteModelCompilerRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ModelCompilerRunServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListModelCompilerRuns': grpc.unary_unary_rpc_method_handler(
                    servicer.ListModelCompilerRuns,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.ListModelCompilerRunsRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.ListModelCompilerRunsResponse.SerializeToString,
            ),
            'CreateModelCompilerRun': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateModelCompilerRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.CreateModelCompilerRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.CreateModelCompilerRunResponse.SerializeToString,
            ),
            'GetModelCompilerRun': grpc.unary_unary_rpc_method_handler(
                    servicer.GetModelCompilerRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.GetModelCompilerRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.GetModelCompilerRunResponse.SerializeToString,
            ),
            'UpdateModelCompilerRun': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateModelCompilerRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.UpdateModelCompilerRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.UpdateModelCompilerRunResponse.SerializeToString,
            ),
            'DeleteModelCompilerRun': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteModelCompilerRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.DeleteModelCompilerRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.DeleteModelCompilerRunResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeldapi.services.modelcompilerrun.v1.ModelCompilerRunService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ModelCompilerRunService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListModelCompilerRuns(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelcompilerrun.v1.ModelCompilerRunService/ListModelCompilerRuns',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.ListModelCompilerRunsRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.ListModelCompilerRunsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateModelCompilerRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelcompilerrun.v1.ModelCompilerRunService/CreateModelCompilerRun',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.CreateModelCompilerRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.CreateModelCompilerRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetModelCompilerRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelcompilerrun.v1.ModelCompilerRunService/GetModelCompilerRun',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.GetModelCompilerRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.GetModelCompilerRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateModelCompilerRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelcompilerrun.v1.ModelCompilerRunService/UpdateModelCompilerRun',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.UpdateModelCompilerRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.UpdateModelCompilerRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteModelCompilerRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelcompilerrun.v1.ModelCompilerRunService/DeleteModelCompilerRun',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.DeleteModelCompilerRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelcompilerrun_dot_v1_dot_modelcompilerrun__pb2.DeleteModelCompilerRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
