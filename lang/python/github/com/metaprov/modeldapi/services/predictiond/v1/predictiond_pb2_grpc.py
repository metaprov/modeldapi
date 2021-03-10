# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.predictiond.v1 import predictiond_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2


class PredictionServerStub(object):
    """On any input that is documented to expect a string parameter in
    snake_case or kebab-case, either of those cases is accepted.
    """

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ServerLive = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ServerLive',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerLiveRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerLiveResponse.FromString,
                )
        self.ServerReady = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ServerReady',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerReadyRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerReadyResponse.FromString,
                )
        self.ModelReady = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ModelReady',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ModelReadyRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ModelReadyResponse.FromString,
                )
        self.ServerMetadata = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ServerMetadata',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerMetadataRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerMetadataResponse.FromString,
                )
        self.ModelMetadata = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ModelMetadata',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ModelMetadataRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ModelMetadataResponse.FromString,
                )
        self.GetPredictor = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/GetPredictor',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.GetPredictorRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.GetPredictorResponse.FromString,
                )
        self.GetModel = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/GetModel',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.GetModelRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.GetModelRequest.FromString,
                )
        self.Predict = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/Predict',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.PredictRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.PredictResponse.FromString,
                )


class PredictionServerServicer(object):
    """On any input that is documented to expect a string parameter in
    snake_case or kebab-case, either of those cases is accepted.
    """

    def ServerLive(self, request, context):
        """Check liveness of the inference server.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ServerReady(self, request, context):
        """Check readiness of the inference server.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ModelReady(self, request, context):
        """Check readiness of a model in the inference server.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ServerMetadata(self, request, context):
        """Get server metadata.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ModelMetadata(self, request, context):
        """Get model metadata.
        """
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetPredictor(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetModel(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Predict(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_PredictionServerServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ServerLive': grpc.unary_unary_rpc_method_handler(
                    servicer.ServerLive,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerLiveRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerLiveResponse.SerializeToString,
            ),
            'ServerReady': grpc.unary_unary_rpc_method_handler(
                    servicer.ServerReady,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerReadyRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerReadyResponse.SerializeToString,
            ),
            'ModelReady': grpc.unary_unary_rpc_method_handler(
                    servicer.ModelReady,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ModelReadyRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ModelReadyResponse.SerializeToString,
            ),
            'ServerMetadata': grpc.unary_unary_rpc_method_handler(
                    servicer.ServerMetadata,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerMetadataRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerMetadataResponse.SerializeToString,
            ),
            'ModelMetadata': grpc.unary_unary_rpc_method_handler(
                    servicer.ModelMetadata,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ModelMetadataRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ModelMetadataResponse.SerializeToString,
            ),
            'GetPredictor': grpc.unary_unary_rpc_method_handler(
                    servicer.GetPredictor,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.GetPredictorRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.GetPredictorResponse.SerializeToString,
            ),
            'GetModel': grpc.unary_unary_rpc_method_handler(
                    servicer.GetModel,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.GetModelRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.GetModelRequest.SerializeToString,
            ),
            'Predict': grpc.unary_unary_rpc_method_handler(
                    servicer.Predict,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.PredictRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.PredictResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class PredictionServer(object):
    """On any input that is documented to expect a string parameter in
    snake_case or kebab-case, either of those cases is accepted.
    """

    @staticmethod
    def ServerLive(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ServerLive',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerLiveRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerLiveResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ServerReady(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ServerReady',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerReadyRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerReadyResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ModelReady(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ModelReady',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ModelReadyRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ModelReadyResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ServerMetadata(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ServerMetadata',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerMetadataRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ServerMetadataResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ModelMetadata(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/ModelMetadata',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ModelMetadataRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.ModelMetadataResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetPredictor(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/GetPredictor',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.GetPredictorRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.GetPredictorResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetModel(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/GetModel',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.GetModelRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.GetModelRequest.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Predict(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.predictiond.v1.PredictionServer/Predict',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.PredictRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictiond_dot_v1_dot_predictiond__pb2.PredictResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)