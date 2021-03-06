# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.cloudproxyd.v1 import cloudproxyd_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2


class CloudProxyServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.Download = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/Download',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.FileDownloadRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.FileDownloadResponse.FromString,
                )
        self.Upload = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/Upload',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.FileUploadRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.FileUploadResponse.FromString,
                )
        self.KeyExistInVirtualBucket = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/KeyExistInVirtualBucket',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.KeyExistInVirtualBucketRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.KeyExistInVirtualBucketResponse.FromString,
                )
        self.VirtualBucketExist = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/VirtualBucketExist',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.VirtualBucketExistRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.VirtualBucketExistResponse.FromString,
                )
        self.CreateVirtualBucketIfNotExist = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/CreateVirtualBucketIfNotExist',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.CreateVirtualBucketRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.CreateVirtualBucketResponse.FromString,
                )
        self.Shutdown = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/Shutdown',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.ShutdownRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.ShutdownResponse.FromString,
                )


class CloudProxyServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def Download(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Upload(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def KeyExistInVirtualBucket(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def VirtualBucketExist(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateVirtualBucketIfNotExist(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Shutdown(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_CloudProxyServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'Download': grpc.unary_unary_rpc_method_handler(
                    servicer.Download,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.FileDownloadRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.FileDownloadResponse.SerializeToString,
            ),
            'Upload': grpc.unary_unary_rpc_method_handler(
                    servicer.Upload,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.FileUploadRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.FileUploadResponse.SerializeToString,
            ),
            'KeyExistInVirtualBucket': grpc.unary_unary_rpc_method_handler(
                    servicer.KeyExistInVirtualBucket,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.KeyExistInVirtualBucketRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.KeyExistInVirtualBucketResponse.SerializeToString,
            ),
            'VirtualBucketExist': grpc.unary_unary_rpc_method_handler(
                    servicer.VirtualBucketExist,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.VirtualBucketExistRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.VirtualBucketExistResponse.SerializeToString,
            ),
            'CreateVirtualBucketIfNotExist': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateVirtualBucketIfNotExist,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.CreateVirtualBucketRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.CreateVirtualBucketResponse.SerializeToString,
            ),
            'Shutdown': grpc.unary_unary_rpc_method_handler(
                    servicer.Shutdown,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.ShutdownRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.ShutdownResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class CloudProxyService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def Download(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/Download',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.FileDownloadRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.FileDownloadResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Upload(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/Upload',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.FileUploadRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.FileUploadResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def KeyExistInVirtualBucket(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/KeyExistInVirtualBucket',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.KeyExistInVirtualBucketRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.KeyExistInVirtualBucketResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def VirtualBucketExist(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/VirtualBucketExist',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.VirtualBucketExistRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.VirtualBucketExistResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateVirtualBucketIfNotExist(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/CreateVirtualBucketIfNotExist',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.CreateVirtualBucketRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.CreateVirtualBucketResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Shutdown(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.cloudproxyd.v1.CloudProxyService/Shutdown',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.ShutdownRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cloudproxyd_dot_v1_dot_cloudproxyd__pb2.ShutdownResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
