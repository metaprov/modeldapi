# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.cronreport.v1 import cronreport_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2


class CronReportServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListCronReports = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService/ListCronReports',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.ListCronReportsRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.ListCronReportsResponse.FromString,
                )
        self.CreateCronReport = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService/CreateCronReport',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.CreateCronReportRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.CreateCronReportResponse.FromString,
                )
        self.GetCronReport = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService/GetCronReport',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.GetCronReportRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.GetCronReportResponse.FromString,
                )
        self.UpdateCronReport = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService/UpdateCronReport',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.UpdateCronReportRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.UpdateCronReportResponse.FromString,
                )
        self.DeleteCronReport = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService/DeleteCronReport',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.DeleteCronReportRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.DeleteCronReportResponse.FromString,
                )
        self.RunReport = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService/RunReport',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.RunCronReportRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.RunCronReportResponse.FromString,
                )
        self.PauseCronReport = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService/PauseCronReport',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.PauseCronReportRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.PauseCronReportResponse.FromString,
                )
        self.ResumeCronReport = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService/ResumeCronReport',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.ResumeCronReportRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.ResumeCronReportResponse.FromString,
                )


class CronReportServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListCronReports(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateCronReport(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetCronReport(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateCronReport(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteCronReport(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def RunReport(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def PauseCronReport(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ResumeCronReport(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_CronReportServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListCronReports': grpc.unary_unary_rpc_method_handler(
                    servicer.ListCronReports,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.ListCronReportsRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.ListCronReportsResponse.SerializeToString,
            ),
            'CreateCronReport': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateCronReport,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.CreateCronReportRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.CreateCronReportResponse.SerializeToString,
            ),
            'GetCronReport': grpc.unary_unary_rpc_method_handler(
                    servicer.GetCronReport,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.GetCronReportRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.GetCronReportResponse.SerializeToString,
            ),
            'UpdateCronReport': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateCronReport,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.UpdateCronReportRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.UpdateCronReportResponse.SerializeToString,
            ),
            'DeleteCronReport': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteCronReport,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.DeleteCronReportRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.DeleteCronReportResponse.SerializeToString,
            ),
            'RunReport': grpc.unary_unary_rpc_method_handler(
                    servicer.RunReport,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.RunCronReportRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.RunCronReportResponse.SerializeToString,
            ),
            'PauseCronReport': grpc.unary_unary_rpc_method_handler(
                    servicer.PauseCronReport,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.PauseCronReportRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.PauseCronReportResponse.SerializeToString,
            ),
            'ResumeCronReport': grpc.unary_unary_rpc_method_handler(
                    servicer.ResumeCronReport,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.ResumeCronReportRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.ResumeCronReportResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class CronReportService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListCronReports(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService/ListCronReports',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.ListCronReportsRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.ListCronReportsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateCronReport(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService/CreateCronReport',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.CreateCronReportRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.CreateCronReportResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetCronReport(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService/GetCronReport',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.GetCronReportRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.GetCronReportResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateCronReport(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService/UpdateCronReport',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.UpdateCronReportRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.UpdateCronReportResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteCronReport(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService/DeleteCronReport',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.DeleteCronReportRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.DeleteCronReportResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def RunReport(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService/RunReport',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.RunCronReportRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.RunCronReportResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def PauseCronReport(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService/PauseCronReport',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.PauseCronReportRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.PauseCronReportResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ResumeCronReport(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService/ResumeCronReport',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.ResumeCronReportRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_cronreport_dot_v1_dot_cronreport__pb2.ResumeCronReportResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)
