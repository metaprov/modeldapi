# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.predictor import predictor_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2


class PredictorServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListPredictors = channel.unary_unary(
                '/github.com.metaprov.modeld.services.predictor.PredictorService/ListPredictors',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.ListPredictorsRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.ListPredictorsResponse.FromString,
                )
        self.CreatePredictor = channel.unary_unary(
                '/github.com.metaprov.modeld.services.predictor.PredictorService/CreatePredictor',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.CreatePredictorRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.CreatePredictorResponse.FromString,
                )
        self.GetPredictor = channel.unary_unary(
                '/github.com.metaprov.modeld.services.predictor.PredictorService/GetPredictor',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.GetPredictorRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.GetPredictorResponse.FromString,
                )
        self.UpdatePredictor = channel.unary_unary(
                '/github.com.metaprov.modeld.services.predictor.PredictorService/UpdatePredictor',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.UpdatePredictorRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.UpdatePredictorResponse.FromString,
                )
        self.DeletePredictor = channel.unary_unary(
                '/github.com.metaprov.modeld.services.predictor.PredictorService/DeletePredictor',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.DeletePredictorRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.DeletePredictorResponse.FromString,
                )
        self.PredictOne = channel.unary_unary(
                '/github.com.metaprov.modeld.services.predictor.PredictorService/PredictOne',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.PredictOneRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.PredictOneResponse.FromString,
                )


class PredictorServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListPredictors(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreatePredictor(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetPredictor(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdatePredictor(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeletePredictor(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def PredictOne(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_PredictorServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListPredictors': grpc.unary_unary_rpc_method_handler(
                    servicer.ListPredictors,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.ListPredictorsRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.ListPredictorsResponse.SerializeToString,
            ),
            'CreatePredictor': grpc.unary_unary_rpc_method_handler(
                    servicer.CreatePredictor,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.CreatePredictorRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.CreatePredictorResponse.SerializeToString,
            ),
            'GetPredictor': grpc.unary_unary_rpc_method_handler(
                    servicer.GetPredictor,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.GetPredictorRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.GetPredictorResponse.SerializeToString,
            ),
            'UpdatePredictor': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdatePredictor,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.UpdatePredictorRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.UpdatePredictorResponse.SerializeToString,
            ),
            'DeletePredictor': grpc.unary_unary_rpc_method_handler(
                    servicer.DeletePredictor,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.DeletePredictorRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.DeletePredictorResponse.SerializeToString,
            ),
            'PredictOne': grpc.unary_unary_rpc_method_handler(
                    servicer.PredictOne,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.PredictOneRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.PredictOneResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeld.services.predictor.PredictorService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class PredictorService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListPredictors(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.predictor.PredictorService/ListPredictors',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.ListPredictorsRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.ListPredictorsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreatePredictor(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.predictor.PredictorService/CreatePredictor',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.CreatePredictorRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.CreatePredictorResponse.FromString,
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
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.predictor.PredictorService/GetPredictor',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.GetPredictorRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.GetPredictorResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdatePredictor(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.predictor.PredictorService/UpdatePredictor',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.UpdatePredictorRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.UpdatePredictorResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeletePredictor(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.predictor.PredictorService/DeletePredictor',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.DeletePredictorRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.DeletePredictorResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def PredictOne(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.predictor.PredictorService/PredictOne',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.PredictOneRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_predictor_dot_predictor__pb2.PredictOneResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
