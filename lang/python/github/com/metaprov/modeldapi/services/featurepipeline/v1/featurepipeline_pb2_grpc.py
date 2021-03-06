# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.featurepipeline.v1 import featurepipeline_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2


class FeaturePipelineServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListFeaturePipelines = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/ListFeaturePipelines',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.ListFeaturePipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.ListFeaturePipelineResponse.FromString,
                )
        self.CreateFeaturePipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/CreateFeaturePipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.CreateFeaturePipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.CreateFeaturePipelineResponse.FromString,
                )
        self.GetFeaturePipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/GetFeaturePipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.GetFeaturePipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.GetFeaturePipelineResponse.FromString,
                )
        self.UpdateFeaturePipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/UpdateFeaturePipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.UpdateFeaturePipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.UpdateFeaturePipelineResponse.FromString,
                )
        self.DeleteFeaturePipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/DeleteFeaturePipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.DeleteFeaturePipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.DeleteFeaturePipelineResponse.FromString,
                )
        self.PauseFeaturePipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/PauseFeaturePipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.PauseFeaturePipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.PauseFeaturePipelineResponse.FromString,
                )
        self.ResumeFeaturePipeline = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/ResumeFeaturePipeline',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.ResumeFeaturePipelineRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.ResumeFeaturePipelineResponse.FromString,
                )


class FeaturePipelineServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListFeaturePipelines(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateFeaturePipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetFeaturePipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateFeaturePipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteFeaturePipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def PauseFeaturePipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ResumeFeaturePipeline(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_FeaturePipelineServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListFeaturePipelines': grpc.unary_unary_rpc_method_handler(
                    servicer.ListFeaturePipelines,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.ListFeaturePipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.ListFeaturePipelineResponse.SerializeToString,
            ),
            'CreateFeaturePipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateFeaturePipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.CreateFeaturePipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.CreateFeaturePipelineResponse.SerializeToString,
            ),
            'GetFeaturePipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.GetFeaturePipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.GetFeaturePipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.GetFeaturePipelineResponse.SerializeToString,
            ),
            'UpdateFeaturePipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateFeaturePipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.UpdateFeaturePipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.UpdateFeaturePipelineResponse.SerializeToString,
            ),
            'DeleteFeaturePipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteFeaturePipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.DeleteFeaturePipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.DeleteFeaturePipelineResponse.SerializeToString,
            ),
            'PauseFeaturePipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.PauseFeaturePipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.PauseFeaturePipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.PauseFeaturePipelineResponse.SerializeToString,
            ),
            'ResumeFeaturePipeline': grpc.unary_unary_rpc_method_handler(
                    servicer.ResumeFeaturePipeline,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.ResumeFeaturePipelineRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.ResumeFeaturePipelineResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class FeaturePipelineService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListFeaturePipelines(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/ListFeaturePipelines',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.ListFeaturePipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.ListFeaturePipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateFeaturePipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/CreateFeaturePipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.CreateFeaturePipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.CreateFeaturePipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetFeaturePipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/GetFeaturePipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.GetFeaturePipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.GetFeaturePipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateFeaturePipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/UpdateFeaturePipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.UpdateFeaturePipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.UpdateFeaturePipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteFeaturePipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/DeleteFeaturePipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.DeleteFeaturePipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.DeleteFeaturePipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def PauseFeaturePipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/PauseFeaturePipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.PauseFeaturePipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.PauseFeaturePipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ResumeFeaturePipeline(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.featurepipeline.v1.FeaturePipelineService/ResumeFeaturePipeline',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.ResumeFeaturePipelineRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_featurepipeline_dot_v1_dot_featurepipeline__pb2.ResumeFeaturePipelineResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
