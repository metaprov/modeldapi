# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.lab.v1 import lab_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2


class LabServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListLabs = channel.unary_unary(
                '/github.com.metaprov.modeld.services.lab.v1.LabService/ListLabs',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.ListLabsRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.ListLabsResponse.FromString,
                )
        self.CreateLab = channel.unary_unary(
                '/github.com.metaprov.modeld.services.lab.v1.LabService/CreateLab',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.CreateLabRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.CreateLabResponse.FromString,
                )
        self.GetLab = channel.unary_unary(
                '/github.com.metaprov.modeld.services.lab.v1.LabService/GetLab',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.GetLabRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.GetLabResponse.FromString,
                )
        self.UpdateLab = channel.unary_unary(
                '/github.com.metaprov.modeld.services.lab.v1.LabService/UpdateLab',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.UpdateLabRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.UpdateLabResponse.FromString,
                )
        self.DeleteLab = channel.unary_unary(
                '/github.com.metaprov.modeld.services.lab.v1.LabService/DeleteLab',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.DeleteLabRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.DeleteLabResponse.FromString,
                )


class LabServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListLabs(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateLab(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetLab(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateLab(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteLab(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_LabServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListLabs': grpc.unary_unary_rpc_method_handler(
                    servicer.ListLabs,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.ListLabsRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.ListLabsResponse.SerializeToString,
            ),
            'CreateLab': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateLab,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.CreateLabRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.CreateLabResponse.SerializeToString,
            ),
            'GetLab': grpc.unary_unary_rpc_method_handler(
                    servicer.GetLab,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.GetLabRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.GetLabResponse.SerializeToString,
            ),
            'UpdateLab': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateLab,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.UpdateLabRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.UpdateLabResponse.SerializeToString,
            ),
            'DeleteLab': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteLab,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.DeleteLabRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.DeleteLabResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeld.services.lab.v1.LabService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class LabService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListLabs(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.lab.v1.LabService/ListLabs',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.ListLabsRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.ListLabsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateLab(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.lab.v1.LabService/CreateLab',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.CreateLabRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.CreateLabResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetLab(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.lab.v1.LabService/GetLab',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.GetLabRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.GetLabResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateLab(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.lab.v1.LabService/UpdateLab',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.UpdateLabRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.UpdateLabResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteLab(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.lab.v1.LabService/DeleteLab',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.DeleteLabRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_lab_dot_v1_dot_lab__pb2.DeleteLabResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)