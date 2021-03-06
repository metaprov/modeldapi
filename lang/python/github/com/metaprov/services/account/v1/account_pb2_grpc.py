# Generated by the gRPC Python protocol compiler plugin. DO NOT EDIT!
"""Client and server classes corresponding to protobuf-defined services."""
import grpc

from github.com.metaprov.modeldapi.services.account.v1 import account_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2


class AccountServiceStub(object):
    """Missing associated documentation comment in .proto file."""

    def __init__(self, channel):
        """Constructor.

        Args:
            channel: A grpc.Channel.
        """
        self.ListAccounts = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ListAccounts',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ListAccountsRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ListAccountsResponse.FromString,
                )
        self.CreateAccount = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/CreateAccount',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.CreateAccountRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.CreateAccountResponse.FromString,
                )
        self.GetAccount = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/GetAccount',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.GetAccountRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.GetAccountResponse.FromString,
                )
        self.UpdateAccount = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/UpdateAccount',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.UpdateAccountRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.UpdateAccountResponse.FromString,
                )
        self.DeleteAccount = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/DeleteAccount',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.DeleteAccountRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.DeleteAccountResponse.FromString,
                )
        self.GetAccountNamespaces = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/GetAccountNamespaces',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.GetAccountNamespacesRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.GetAccountNamespacesResponse.FromString,
                )
        self.Login = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/Login',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.AccountLoginRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.AccountLoginResponse.FromString,
                )
        self.Logout = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/Logout',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.AccountLogoutRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.LogoutResponse.FromString,
                )
        self.ChangePassword = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ChangePassword',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ChangePasswordRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ChangePasswordResponse.FromString,
                )
        self.ResetPassword = channel.unary_unary(
                '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ResetPassword',
                request_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ResetPasswordRequest.SerializeToString,
                response_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ResetPasswordResponse.FromString,
                )


class AccountServiceServicer(object):
    """Missing associated documentation comment in .proto file."""

    def ListAccounts(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def CreateAccount(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetAccount(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def UpdateAccount(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def DeleteAccount(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def GetAccountNamespaces(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Login(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def Logout(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ChangePassword(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')

    def ResetPassword(self, request, context):
        """Missing associated documentation comment in .proto file."""
        context.set_code(grpc.StatusCode.UNIMPLEMENTED)
        context.set_details('Method not implemented!')
        raise NotImplementedError('Method not implemented!')


def add_AccountServiceServicer_to_server(servicer, server):
    rpc_method_handlers = {
            'ListAccounts': grpc.unary_unary_rpc_method_handler(
                    servicer.ListAccounts,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ListAccountsRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ListAccountsResponse.SerializeToString,
            ),
            'CreateAccount': grpc.unary_unary_rpc_method_handler(
                    servicer.CreateAccount,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.CreateAccountRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.CreateAccountResponse.SerializeToString,
            ),
            'GetAccount': grpc.unary_unary_rpc_method_handler(
                    servicer.GetAccount,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.GetAccountRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.GetAccountResponse.SerializeToString,
            ),
            'UpdateAccount': grpc.unary_unary_rpc_method_handler(
                    servicer.UpdateAccount,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.UpdateAccountRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.UpdateAccountResponse.SerializeToString,
            ),
            'DeleteAccount': grpc.unary_unary_rpc_method_handler(
                    servicer.DeleteAccount,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.DeleteAccountRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.DeleteAccountResponse.SerializeToString,
            ),
            'GetAccountNamespaces': grpc.unary_unary_rpc_method_handler(
                    servicer.GetAccountNamespaces,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.GetAccountNamespacesRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.GetAccountNamespacesResponse.SerializeToString,
            ),
            'Login': grpc.unary_unary_rpc_method_handler(
                    servicer.Login,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.AccountLoginRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.AccountLoginResponse.SerializeToString,
            ),
            'Logout': grpc.unary_unary_rpc_method_handler(
                    servicer.Logout,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.AccountLogoutRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.LogoutResponse.SerializeToString,
            ),
            'ChangePassword': grpc.unary_unary_rpc_method_handler(
                    servicer.ChangePassword,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ChangePasswordRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ChangePasswordResponse.SerializeToString,
            ),
            'ResetPassword': grpc.unary_unary_rpc_method_handler(
                    servicer.ResetPassword,
                    request_deserializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ResetPasswordRequest.FromString,
                    response_serializer=github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ResetPasswordResponse.SerializeToString,
            ),
    }
    generic_handler = grpc.method_handlers_generic_handler(
            'github.com.metaprov.modeldapi.services.account.v1.AccountService', rpc_method_handlers)
    server.add_generic_rpc_handlers((generic_handler,))


 # This class is part of an EXPERIMENTAL API.
class AccountService(object):
    """Missing associated documentation comment in .proto file."""

    @staticmethod
    def ListAccounts(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ListAccounts',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ListAccountsRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ListAccountsResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def CreateAccount(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.account.v1.AccountService/CreateAccount',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.CreateAccountRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.CreateAccountResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetAccount(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.account.v1.AccountService/GetAccount',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.GetAccountRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.GetAccountResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def UpdateAccount(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.account.v1.AccountService/UpdateAccount',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.UpdateAccountRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.UpdateAccountResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def DeleteAccount(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.account.v1.AccountService/DeleteAccount',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.DeleteAccountRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.DeleteAccountResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def GetAccountNamespaces(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.account.v1.AccountService/GetAccountNamespaces',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.GetAccountNamespacesRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.GetAccountNamespacesResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Login(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.account.v1.AccountService/Login',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.AccountLoginRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.AccountLoginResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def Logout(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.account.v1.AccountService/Logout',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.AccountLogoutRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.LogoutResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ChangePassword(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ChangePassword',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ChangePasswordRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ChangePasswordResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)

    @staticmethod
    def ResetPassword(request,
            target,
            options=(),
            channel_credentials=None,
            call_credentials=None,
            insecure=False,
            compression=None,
            wait_for_ready=None,
            timeout=None,
            metadata=None):
        return grpc.experimental.unary_unary(request, target, '/github.com.metaprov.modeldapi.services.account.v1.AccountService/ResetPassword',
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ResetPasswordRequest.SerializeToString,
            github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_account_dot_v1_dot_account__pb2.ResetPasswordResponse.FromString,
            options, channel_credentials,
            insecure, call_credentials, compression, wait_for_ready, timeout, metadata)