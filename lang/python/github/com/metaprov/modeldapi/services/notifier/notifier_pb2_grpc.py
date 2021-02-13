# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.notifier import notifier_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2


class NotifierServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListNotifiers = channel.unary_unary(
                '/github.com.metaprov.modeld.services.notifier.NotifierService/ListNotifiers',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.ListNotifiersRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.ListNotifiersResponse.FromString,
                )
        self.CreateNotifier = channel.unary_unary(
                '/github.com.metaprov.modeld.services.notifier.NotifierService/CreateNotifier',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.CreateNotifierRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.CreateNotifierResponse.FromString,
                )
        self.GetNotifier = channel.unary_unary(
                '/github.com.metaprov.modeld.services.notifier.NotifierService/GetNotifier',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.GetNotifierRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.GetNotifierResponse.FromString,
                )
        self.UpdateNotifier = channel.unary_unary(
                '/github.com.metaprov.modeld.services.notifier.NotifierService/UpdateNotifier',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.UpdateNotifierRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.UpdateNotifierResponse.FromString,
                )
        self.DeleteNotifier = channel.unary_unary(
                '/github.com.metaprov.modeld.services.notifier.NotifierService/DeleteNotifier',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.DeleteNotifierRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.DeleteNotifierResponse.FromString,
                )


class NotifierServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListNotifiers(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateNotifier(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetNotifier(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateNotifier(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteNotifier(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_NotifierServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListNotifiers': grpc.unary_unary_rpc_method_handler(
                    servicer.ListNotifiers,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.ListNotifiersRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.ListNotifiersResponse.SerializeToString,
            ),
            'CreateNotifier': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateNotifier,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.CreateNotifierRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.CreateNotifierResponse.SerializeToString,
            ),
            'GetNotifier': grpc.unary_unary_rpc_method_handler(
                    servicer.GetNotifier,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.GetNotifierRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.GetNotifierResponse.SerializeToString,
            ),
            'UpdateNotifier': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateNotifier,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.UpdateNotifierRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.UpdateNotifierResponse.SerializeToString,
            ),
            'DeleteNotifier': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteNotifier,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.DeleteNotifierRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.DeleteNotifierResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeld.services.notifier.NotifierService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class NotifierService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListNotifiers(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.notifier.NotifierService/ListNotifiers',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.ListNotifiersRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.ListNotifiersResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateNotifier(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.notifier.NotifierService/CreateNotifier',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.CreateNotifierRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.CreateNotifierResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetNotifier(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.notifier.NotifierService/GetNotifier',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.GetNotifierRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.GetNotifierResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateNotifier(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.notifier.NotifierService/UpdateNotifier',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.UpdateNotifierRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.UpdateNotifierResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteNotifier(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeld.services.notifier.NotifierService/DeleteNotifier',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.DeleteNotifierRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_notifier_dot_notifier__pb2.DeleteNotifierResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
