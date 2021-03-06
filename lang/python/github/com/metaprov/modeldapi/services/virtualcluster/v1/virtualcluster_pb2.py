# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/virtualcluster/v1/virtualcluster.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modeldapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_common_dot_v1_dot_common__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modeldapi/services/virtualcluster/v1/virtualcluster.proto',
  package='github.com.metaprov.modeldapi.services.virtualcluster.v1',
  syntax='proto3',
  serialized_options=b'Z8github.com/metaprov/modeldapi/services/virtualcluster/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nMgithub.com/metaprov/modeldapi/services/virtualcluster/v1/virtualcluster.proto\x12\x38github.com.metaprov.modeldapi.services.virtualcluster.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated.proto\x1a=github.com/metaprov/modeldapi/services/common/v1/common.proto\"\xf2\x01\n\x1aListVirtualClustersRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x86\x01\n\x11virtualclusterels\x18\x03 \x03(\x0b\x32k.github.com.metaprov.modeldapi.services.virtualcluster.v1.ListVirtualClustersRequest.VirtualclusterelsEntry\x1a\x38\n\x16VirtualclusterelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"w\n\x1bListVirtualClustersResponse\x12X\n\x05items\x18\x01 \x01(\x0b\x32I.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualClusterList\"\x18\n\x16VirtualClusterResponse\"r\n\x1b\x43reateVirtualClusterRequest\x12S\n\x04item\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster\"\x1e\n\x1c\x43reateVirtualClusterResponse\"r\n\x1bUpdateVirtualClusterRequest\x12S\n\x04item\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster\"\x1e\n\x1cUpdateVirtualClusterResponse\";\n\x18GetVirtualClusterRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"~\n\x19GetVirtualClusterResponse\x12S\n\x04item\x18\x01 \x01(\x0b\x32\x45.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualCluster\x12\x0c\n\x04yaml\x18\x02 \x01(\t\">\n\x1b\x44\x65leteVirtualClusterRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1e\n\x1c\x44\x65leteVirtualClusterResponse2\xa7\t\n\x15VirtualClusterService\x12\xe3\x01\n\x13ListVirtualClusters\x12T.github.com.metaprov.modeldapi.services.virtualcluster.v1.ListVirtualClustersRequest\x1aU.github.com.metaprov.modeldapi.services.virtualcluster.v1.ListVirtualClustersResponse\"\x1f\x82\xd3\xe4\x93\x02\x19\x12\x17/api/v1/virtualclusters\x12\xe5\x01\n\x14\x43reateVirtualCluster\x12U.github.com.metaprov.modeldapi.services.virtualcluster.v1.CreateVirtualClusterRequest\x1aV.github.com.metaprov.modeldapi.services.virtualcluster.v1.CreateVirtualClusterResponse\"\x1e\x82\xd3\xe4\x93\x02\x18\"\x13/v1/virtualclusters:\x01*\x12\xe4\x01\n\x11GetVirtualCluster\x12R.github.com.metaprov.modeldapi.services.virtualcluster.v1.GetVirtualClusterRequest\x1aS.github.com.metaprov.modeldapi.services.virtualcluster.v1.GetVirtualClusterResponse\"&\x82\xd3\xe4\x93\x02 \x12\x1e/api/v1/virtualclusters/{name}\x12\xec\x01\n\x14UpdateVirtualCluster\x12U.github.com.metaprov.modeldapi.services.virtualcluster.v1.UpdateVirtualClusterRequest\x1aV.github.com.metaprov.modeldapi.services.virtualcluster.v1.UpdateVirtualClusterResponse\"%\x82\xd3\xe4\x93\x02\x1f\x1a\x1a/v1/virtualclusters/{name}:\x01*\x12\xe9\x01\n\x14\x44\x65leteVirtualCluster\x12U.github.com.metaprov.modeldapi.services.virtualcluster.v1.DeleteVirtualClusterRequest\x1aV.github.com.metaprov.modeldapi.services.virtualcluster.v1.DeleteVirtualClusterResponse\"\"\x82\xd3\xe4\x93\x02\x1c*\x1a/v1/virtualclusters/{name}B:Z8github.com/metaprov/modeldapi/services/virtualcluster/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_common_dot_v1_dot_common__pb2.DESCRIPTOR,])




_LISTVIRTUALCLUSTERSREQUEST_VIRTUALCLUSTERELSENTRY = _descriptor.Descriptor(
  name='VirtualclusterelsEntry',
  full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.ListVirtualClustersRequest.VirtualclusterelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.ListVirtualClustersRequest.VirtualclusterelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.ListVirtualClustersRequest.VirtualclusterelsEntry.value', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=b'8\001',
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=490,
  serialized_end=546,
)

_LISTVIRTUALCLUSTERSREQUEST = _descriptor.Descriptor(
  name='ListVirtualClustersRequest',
  full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.ListVirtualClustersRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.ListVirtualClustersRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='virtualclusterels', full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.ListVirtualClustersRequest.virtualclusterels', index=1,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTVIRTUALCLUSTERSREQUEST_VIRTUALCLUSTERELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=304,
  serialized_end=546,
)


_LISTVIRTUALCLUSTERSRESPONSE = _descriptor.Descriptor(
  name='ListVirtualClustersResponse',
  full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.ListVirtualClustersResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.ListVirtualClustersResponse.items', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=548,
  serialized_end=667,
)


_VIRTUALCLUSTERRESPONSE = _descriptor.Descriptor(
  name='VirtualClusterResponse',
  full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=669,
  serialized_end=693,
)


_CREATEVIRTUALCLUSTERREQUEST = _descriptor.Descriptor(
  name='CreateVirtualClusterRequest',
  full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.CreateVirtualClusterRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.CreateVirtualClusterRequest.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=695,
  serialized_end=809,
)


_CREATEVIRTUALCLUSTERRESPONSE = _descriptor.Descriptor(
  name='CreateVirtualClusterResponse',
  full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.CreateVirtualClusterResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=811,
  serialized_end=841,
)


_UPDATEVIRTUALCLUSTERREQUEST = _descriptor.Descriptor(
  name='UpdateVirtualClusterRequest',
  full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.UpdateVirtualClusterRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.UpdateVirtualClusterRequest.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=843,
  serialized_end=957,
)


_UPDATEVIRTUALCLUSTERRESPONSE = _descriptor.Descriptor(
  name='UpdateVirtualClusterResponse',
  full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.UpdateVirtualClusterResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=959,
  serialized_end=989,
)


_GETVIRTUALCLUSTERREQUEST = _descriptor.Descriptor(
  name='GetVirtualClusterRequest',
  full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.GetVirtualClusterRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.GetVirtualClusterRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.GetVirtualClusterRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=991,
  serialized_end=1050,
)


_GETVIRTUALCLUSTERRESPONSE = _descriptor.Descriptor(
  name='GetVirtualClusterResponse',
  full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.GetVirtualClusterResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.GetVirtualClusterResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.GetVirtualClusterResponse.yaml', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1052,
  serialized_end=1178,
)


_DELETEVIRTUALCLUSTERREQUEST = _descriptor.Descriptor(
  name='DeleteVirtualClusterRequest',
  full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.DeleteVirtualClusterRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.DeleteVirtualClusterRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.DeleteVirtualClusterRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1180,
  serialized_end=1242,
)


_DELETEVIRTUALCLUSTERRESPONSE = _descriptor.Descriptor(
  name='DeleteVirtualClusterResponse',
  full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.DeleteVirtualClusterResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
  ],
  extensions=[
  ],
  nested_types=[],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1244,
  serialized_end=1274,
)

_LISTVIRTUALCLUSTERSREQUEST_VIRTUALCLUSTERELSENTRY.containing_type = _LISTVIRTUALCLUSTERSREQUEST
_LISTVIRTUALCLUSTERSREQUEST.fields_by_name['virtualclusterels'].message_type = _LISTVIRTUALCLUSTERSREQUEST_VIRTUALCLUSTERELSENTRY
_LISTVIRTUALCLUSTERSRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALCLUSTERLIST
_CREATEVIRTUALCLUSTERREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALCLUSTER
_UPDATEVIRTUALCLUSTERREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALCLUSTER
_GETVIRTUALCLUSTERRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALCLUSTER
DESCRIPTOR.message_types_by_name['ListVirtualClustersRequest'] = _LISTVIRTUALCLUSTERSREQUEST
DESCRIPTOR.message_types_by_name['ListVirtualClustersResponse'] = _LISTVIRTUALCLUSTERSRESPONSE
DESCRIPTOR.message_types_by_name['VirtualClusterResponse'] = _VIRTUALCLUSTERRESPONSE
DESCRIPTOR.message_types_by_name['CreateVirtualClusterRequest'] = _CREATEVIRTUALCLUSTERREQUEST
DESCRIPTOR.message_types_by_name['CreateVirtualClusterResponse'] = _CREATEVIRTUALCLUSTERRESPONSE
DESCRIPTOR.message_types_by_name['UpdateVirtualClusterRequest'] = _UPDATEVIRTUALCLUSTERREQUEST
DESCRIPTOR.message_types_by_name['UpdateVirtualClusterResponse'] = _UPDATEVIRTUALCLUSTERRESPONSE
DESCRIPTOR.message_types_by_name['GetVirtualClusterRequest'] = _GETVIRTUALCLUSTERREQUEST
DESCRIPTOR.message_types_by_name['GetVirtualClusterResponse'] = _GETVIRTUALCLUSTERRESPONSE
DESCRIPTOR.message_types_by_name['DeleteVirtualClusterRequest'] = _DELETEVIRTUALCLUSTERREQUEST
DESCRIPTOR.message_types_by_name['DeleteVirtualClusterResponse'] = _DELETEVIRTUALCLUSTERRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListVirtualClustersRequest = _reflection.GeneratedProtocolMessageType('ListVirtualClustersRequest', (_message.Message,), {

  'VirtualclusterelsEntry' : _reflection.GeneratedProtocolMessageType('VirtualclusterelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTVIRTUALCLUSTERSREQUEST_VIRTUALCLUSTERELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.virtualcluster.v1.virtualcluster_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualcluster.v1.ListVirtualClustersRequest.VirtualclusterelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTVIRTUALCLUSTERSREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualcluster.v1.virtualcluster_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualcluster.v1.ListVirtualClustersRequest)
  })
_sym_db.RegisterMessage(ListVirtualClustersRequest)
_sym_db.RegisterMessage(ListVirtualClustersRequest.VirtualclusterelsEntry)

ListVirtualClustersResponse = _reflection.GeneratedProtocolMessageType('ListVirtualClustersResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTVIRTUALCLUSTERSRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualcluster.v1.virtualcluster_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualcluster.v1.ListVirtualClustersResponse)
  })
_sym_db.RegisterMessage(ListVirtualClustersResponse)

VirtualClusterResponse = _reflection.GeneratedProtocolMessageType('VirtualClusterResponse', (_message.Message,), {
  'DESCRIPTOR' : _VIRTUALCLUSTERRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualcluster.v1.virtualcluster_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterResponse)
  })
_sym_db.RegisterMessage(VirtualClusterResponse)

CreateVirtualClusterRequest = _reflection.GeneratedProtocolMessageType('CreateVirtualClusterRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEVIRTUALCLUSTERREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualcluster.v1.virtualcluster_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualcluster.v1.CreateVirtualClusterRequest)
  })
_sym_db.RegisterMessage(CreateVirtualClusterRequest)

CreateVirtualClusterResponse = _reflection.GeneratedProtocolMessageType('CreateVirtualClusterResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEVIRTUALCLUSTERRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualcluster.v1.virtualcluster_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualcluster.v1.CreateVirtualClusterResponse)
  })
_sym_db.RegisterMessage(CreateVirtualClusterResponse)

UpdateVirtualClusterRequest = _reflection.GeneratedProtocolMessageType('UpdateVirtualClusterRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEVIRTUALCLUSTERREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualcluster.v1.virtualcluster_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualcluster.v1.UpdateVirtualClusterRequest)
  })
_sym_db.RegisterMessage(UpdateVirtualClusterRequest)

UpdateVirtualClusterResponse = _reflection.GeneratedProtocolMessageType('UpdateVirtualClusterResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEVIRTUALCLUSTERRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualcluster.v1.virtualcluster_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualcluster.v1.UpdateVirtualClusterResponse)
  })
_sym_db.RegisterMessage(UpdateVirtualClusterResponse)

GetVirtualClusterRequest = _reflection.GeneratedProtocolMessageType('GetVirtualClusterRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETVIRTUALCLUSTERREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualcluster.v1.virtualcluster_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualcluster.v1.GetVirtualClusterRequest)
  })
_sym_db.RegisterMessage(GetVirtualClusterRequest)

GetVirtualClusterResponse = _reflection.GeneratedProtocolMessageType('GetVirtualClusterResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETVIRTUALCLUSTERRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualcluster.v1.virtualcluster_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualcluster.v1.GetVirtualClusterResponse)
  })
_sym_db.RegisterMessage(GetVirtualClusterResponse)

DeleteVirtualClusterRequest = _reflection.GeneratedProtocolMessageType('DeleteVirtualClusterRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEVIRTUALCLUSTERREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualcluster.v1.virtualcluster_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualcluster.v1.DeleteVirtualClusterRequest)
  })
_sym_db.RegisterMessage(DeleteVirtualClusterRequest)

DeleteVirtualClusterResponse = _reflection.GeneratedProtocolMessageType('DeleteVirtualClusterResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEVIRTUALCLUSTERRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualcluster.v1.virtualcluster_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.virtualcluster.v1.DeleteVirtualClusterResponse)
  })
_sym_db.RegisterMessage(DeleteVirtualClusterResponse)


DESCRIPTOR._options = None
_LISTVIRTUALCLUSTERSREQUEST_VIRTUALCLUSTERELSENTRY._options = None

_VIRTUALCLUSTERSERVICE = _descriptor.ServiceDescriptor(
  name='VirtualClusterService',
  full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1277,
  serialized_end=2468,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListVirtualClusters',
    full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterService.ListVirtualClusters',
    index=0,
    containing_service=None,
    input_type=_LISTVIRTUALCLUSTERSREQUEST,
    output_type=_LISTVIRTUALCLUSTERSRESPONSE,
    serialized_options=b'\202\323\344\223\002\031\022\027/api/v1/virtualclusters',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateVirtualCluster',
    full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterService.CreateVirtualCluster',
    index=1,
    containing_service=None,
    input_type=_CREATEVIRTUALCLUSTERREQUEST,
    output_type=_CREATEVIRTUALCLUSTERRESPONSE,
    serialized_options=b'\202\323\344\223\002\030\"\023/v1/virtualclusters:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetVirtualCluster',
    full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterService.GetVirtualCluster',
    index=2,
    containing_service=None,
    input_type=_GETVIRTUALCLUSTERREQUEST,
    output_type=_GETVIRTUALCLUSTERRESPONSE,
    serialized_options=b'\202\323\344\223\002 \022\036/api/v1/virtualclusters/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateVirtualCluster',
    full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterService.UpdateVirtualCluster',
    index=3,
    containing_service=None,
    input_type=_UPDATEVIRTUALCLUSTERREQUEST,
    output_type=_UPDATEVIRTUALCLUSTERRESPONSE,
    serialized_options=b'\202\323\344\223\002\037\032\032/v1/virtualclusters/{name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteVirtualCluster',
    full_name='github.com.metaprov.modeldapi.services.virtualcluster.v1.VirtualClusterService.DeleteVirtualCluster',
    index=4,
    containing_service=None,
    input_type=_DELETEVIRTUALCLUSTERREQUEST,
    output_type=_DELETEVIRTUALCLUSTERRESPONSE,
    serialized_options=b'\202\323\344\223\002\034*\032/v1/virtualclusters/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_VIRTUALCLUSTERSERVICE)

DESCRIPTOR.services_by_name['VirtualClusterService'] = _VIRTUALCLUSTERSERVICE

# @@protoc_insertion_point(module_scope)
