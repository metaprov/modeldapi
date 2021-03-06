# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.modelpipelinerun.v1 import modelpipelinerun_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2


class ModelPipelineRunServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListModelPipelineRuns = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/ListModelPipelineRuns',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.ListModelPipelineRunsRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.ListModelPipelineRunsResponse.FromString,
                )
        self.CreateModelPipelineRun = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/CreateModelPipelineRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.CreateModelPipelineRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.CreateModelPipelineRunResponse.FromString,
                )
        self.GetModelPipelineRun = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/GetModelPipelineRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.GetModelPipelineRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.GetModelPipelineRunResponse.FromString,
                )
        self.UpdateModelPipelineRun = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/UpdateModelPipelineRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.UpdateModelPipelineRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.UpdateModelPipelineRunResponse.FromString,
                )
        self.DeleteModelPipelineRun = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/DeleteModelPipelineRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.DeleteModelPipelineRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.DeleteModelPipelineRunResponse.FromString,
                )
        self.ApproveModelPipelineRun = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/ApproveModelPipelineRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.ApproveModelPipelineRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.ApproveModelPipelineRunResponse.FromString,
                )
        self.DenyModelPipelineRun = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/DenyModelPipelineRun',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.DenyModelPipelineRunRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.DenyModelPipelineRunResponse.FromString,
                )


class ModelPipelineRunServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListModelPipelineRuns(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateModelPipelineRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetModelPipelineRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateModelPipelineRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteModelPipelineRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ApproveModelPipelineRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DenyModelPipelineRun(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_ModelPipelineRunServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListModelPipelineRuns': grpc.unary_unary_rpc_method_handler(
                    servicer.ListModelPipelineRuns,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.ListModelPipelineRunsRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.ListModelPipelineRunsResponse.SerializeToString,
            ),
            'CreateModelPipelineRun': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateModelPipelineRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.CreateModelPipelineRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.CreateModelPipelineRunResponse.SerializeToString,
            ),
            'GetModelPipelineRun': grpc.unary_unary_rpc_method_handler(
                    servicer.GetModelPipelineRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.GetModelPipelineRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.GetModelPipelineRunResponse.SerializeToString,
            ),
            'UpdateModelPipelineRun': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateModelPipelineRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.UpdateModelPipelineRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.UpdateModelPipelineRunResponse.SerializeToString,
            ),
            'DeleteModelPipelineRun': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteModelPipelineRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.DeleteModelPipelineRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.DeleteModelPipelineRunResponse.SerializeToString,
            ),
            'ApproveModelPipelineRun': grpc.unary_unary_rpc_method_handler(
                    servicer.ApproveModelPipelineRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.ApproveModelPipelineRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.ApproveModelPipelineRunResponse.SerializeToString,
            ),
            'DenyModelPipelineRun': grpc.unary_unary_rpc_method_handler(
                    servicer.DenyModelPipelineRun,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.DenyModelPipelineRunRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.DenyModelPipelineRunResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class ModelPipelineRunService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListModelPipelineRuns(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/ListModelPipelineRuns',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.ListModelPipelineRunsRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.ListModelPipelineRunsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateModelPipelineRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/CreateModelPipelineRun',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.CreateModelPipelineRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.CreateModelPipelineRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetModelPipelineRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/GetModelPipelineRun',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.GetModelPipelineRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.GetModelPipelineRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateModelPipelineRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/UpdateModelPipelineRun',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.UpdateModelPipelineRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.UpdateModelPipelineRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteModelPipelineRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/DeleteModelPipelineRun',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.DeleteModelPipelineRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.DeleteModelPipelineRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ApproveModelPipelineRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/ApproveModelPipelineRun',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.ApproveModelPipelineRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.ApproveModelPipelineRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DenyModelPipelineRun(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.modelpipelinerun.v1.ModelPipelineRunService/DenyModelPipelineRun',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.DenyModelPipelineRunRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_modelpipelinerun_dot_v1_dot_modelpipelinerun__pb2.DenyModelPipelineRunResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
