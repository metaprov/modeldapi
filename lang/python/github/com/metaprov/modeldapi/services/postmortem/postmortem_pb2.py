# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/postmortem/postmortem.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2
from github.com.metaprov.modeldapi.services.common import common_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_common_dot_common__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modeldapi/services/postmortem/postmortem.proto',
  package='github.com.metaprov.modeld.services.postmortem',
  syntax='proto3',
  serialized_options=b'Z1github.com/metaprov/modeldapi/services/postmortem',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nBgithub.com/metaprov/modeldapi/services/postmortem/postmortem.proto\x12.github.com.metaprov.modeld.services.postmortem\x1a\x1bgoogle/protobuf/empty.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modeldapi/pkg/apis/team/v1alpha1/generated.proto\x1a:github.com/metaprov/modeldapi/services/common/common.proto\"\xbe\x01\n\x0fPostMortemQuery\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12[\n\x06labels\x18\x03 \x03(\x0b\x32K.github.com.metaprov.modeld.services.postmortem.PostMortemQuery.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x14\n\x12PostMortemResponse\"\xc4\x02\n\x17PostMortemCreateRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x63\n\x06labels\x18\x03 \x03(\x0b\x32S.github.com.metaprov.modeld.services.postmortem.PostMortemCreateRequest.LabelsEntry\x12R\n\x04spec\x18\x05 \x01(\x0b\x32\x44.github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1.PostMortemSpec\x12\x10\n\x08password\x18\x06 \x01(\t\x12\x0e\n\x06upsert\x18\x07 \x01(\x08\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\xa2\x02\n\x17PostMortemUpdateRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x63\n\x06labels\x18\x03 \x03(\x0b\x32S.github.com.metaprov.modeld.services.postmortem.PostMortemUpdateRequest.LabelsEntry\x12R\n\x04spec\x18\x05 \x01(\x0b\x32\x44.github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1.PostMortemSpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"{\n\x15PostMortemGetResponse\x12T\n\npostmortem\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1.PostMortem\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"A\n\x1ePostMortemGetNamespacesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"p\n\x1fPostMortemGetNamespacesResponse\x12M\n\nnamespaces\x18\x01 \x03(\x0b\x32\x39.github.com.metaprov.modeld.services.common.NamespaceInfo2\xb6\x06\n\x11PostMortemService\x12\xb0\x01\n\x04List\x12?.github.com.metaprov.modeld.services.postmortem.PostMortemQuery\x1a\x44.github.com.metaprov.modeldapi.pkg.apis.team.v1alpha1.PostMortemList\"!\x82\xd3\xe4\x93\x02\x1b\x12\x19/api/v1alpha1/postmortems\x12\x98\x01\n\x06\x43reate\x12G.github.com.metaprov.modeld.services.postmortem.PostMortemCreateRequest\x1a\x16.google.protobuf.Empty\"-\x82\xd3\xe4\x93\x02\'\"\x19/api/v1alpha1/postmortems:\npostmortem\x12\xb7\x01\n\x03Get\x12?.github.com.metaprov.modeld.services.postmortem.PostMortemQuery\x1a\x45.github.com.metaprov.modeld.services.postmortem.PostMortemGetResponse\"(\x82\xd3\xe4\x93\x02\"\x12 /api/v1alpha1/postmortems/{name}\x12\xb3\x01\n\x06Update\x12G.github.com.metaprov.modeld.services.postmortem.PostMortemUpdateRequest\x1a\x16.google.protobuf.Empty\"H\x82\xd3\xe4\x93\x02\x42\x1a\x34/api/v1alpha1/postmortems/{postmortem.metadata.name}:\npostmortem\x12\x63\n\x06\x44\x65lete\x12?.github.com.metaprov.modeld.services.postmortem.PostMortemQuery\x1a\x16.google.protobuf.Empty\"\x00\x42\x33Z1github.com/metaprov/modeldapi/services/postmortemb\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_empty__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_common_dot_common__pb2.DESCRIPTOR,])




_POSTMORTEMQUERY_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.postmortem.PostMortemQuery.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemQuery.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemQuery.LabelsEntry.value', index=1,
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
  serialized_start=453,
  serialized_end=498,
)

_POSTMORTEMQUERY = _descriptor.Descriptor(
  name='PostMortemQuery',
  full_name='github.com.metaprov.modeld.services.postmortem.PostMortemQuery',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemQuery.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemQuery.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemQuery.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_POSTMORTEMQUERY_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=308,
  serialized_end=498,
)


_POSTMORTEMRESPONSE = _descriptor.Descriptor(
  name='PostMortemResponse',
  full_name='github.com.metaprov.modeld.services.postmortem.PostMortemResponse',
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
  serialized_start=500,
  serialized_end=520,
)


_POSTMORTEMCREATEREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.postmortem.PostMortemCreateRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemCreateRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemCreateRequest.LabelsEntry.value', index=1,
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
  serialized_start=453,
  serialized_end=498,
)

_POSTMORTEMCREATEREQUEST = _descriptor.Descriptor(
  name='PostMortemCreateRequest',
  full_name='github.com.metaprov.modeld.services.postmortem.PostMortemCreateRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemCreateRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemCreateRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemCreateRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemCreateRequest.spec', index=3,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='password', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemCreateRequest.password', index=4,
      number=6, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='upsert', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemCreateRequest.upsert', index=5,
      number=7, type=8, cpp_type=7, label=1,
      has_default_value=False, default_value=False,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_POSTMORTEMCREATEREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=523,
  serialized_end=847,
)


_POSTMORTEMUPDATEREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.postmortem.PostMortemUpdateRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemUpdateRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemUpdateRequest.LabelsEntry.value', index=1,
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
  serialized_start=453,
  serialized_end=498,
)

_POSTMORTEMUPDATEREQUEST = _descriptor.Descriptor(
  name='PostMortemUpdateRequest',
  full_name='github.com.metaprov.modeld.services.postmortem.PostMortemUpdateRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemUpdateRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemUpdateRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemUpdateRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemUpdateRequest.spec', index=3,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_POSTMORTEMUPDATEREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=850,
  serialized_end=1140,
)


_POSTMORTEMGETRESPONSE = _descriptor.Descriptor(
  name='PostMortemGetResponse',
  full_name='github.com.metaprov.modeld.services.postmortem.PostMortemGetResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='postmortem', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemGetResponse.postmortem', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemGetResponse.yaml', index=1,
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
  serialized_start=1142,
  serialized_end=1265,
)


_POSTMORTEMGETNAMESPACESREQUEST = _descriptor.Descriptor(
  name='PostMortemGetNamespacesRequest',
  full_name='github.com.metaprov.modeld.services.postmortem.PostMortemGetNamespacesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemGetNamespacesRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemGetNamespacesRequest.name', index=1,
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
  serialized_start=1267,
  serialized_end=1332,
)


_POSTMORTEMGETNAMESPACESRESPONSE = _descriptor.Descriptor(
  name='PostMortemGetNamespacesResponse',
  full_name='github.com.metaprov.modeld.services.postmortem.PostMortemGetNamespacesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespaces', full_name='github.com.metaprov.modeld.services.postmortem.PostMortemGetNamespacesResponse.namespaces', index=0,
      number=1, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
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
  serialized_start=1334,
  serialized_end=1446,
)

_POSTMORTEMQUERY_LABELSENTRY.containing_type = _POSTMORTEMQUERY
_POSTMORTEMQUERY.fields_by_name['labels'].message_type = _POSTMORTEMQUERY_LABELSENTRY
_POSTMORTEMCREATEREQUEST_LABELSENTRY.containing_type = _POSTMORTEMCREATEREQUEST
_POSTMORTEMCREATEREQUEST.fields_by_name['labels'].message_type = _POSTMORTEMCREATEREQUEST_LABELSENTRY
_POSTMORTEMCREATEREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2._POSTMORTEMSPEC
_POSTMORTEMUPDATEREQUEST_LABELSENTRY.containing_type = _POSTMORTEMUPDATEREQUEST
_POSTMORTEMUPDATEREQUEST.fields_by_name['labels'].message_type = _POSTMORTEMUPDATEREQUEST_LABELSENTRY
_POSTMORTEMUPDATEREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2._POSTMORTEMSPEC
_POSTMORTEMGETRESPONSE.fields_by_name['postmortem'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2._POSTMORTEM
_POSTMORTEMGETNAMESPACESRESPONSE.fields_by_name['namespaces'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_common_dot_common__pb2._NAMESPACEINFO
DESCRIPTOR.message_types_by_name['PostMortemQuery'] = _POSTMORTEMQUERY
DESCRIPTOR.message_types_by_name['PostMortemResponse'] = _POSTMORTEMRESPONSE
DESCRIPTOR.message_types_by_name['PostMortemCreateRequest'] = _POSTMORTEMCREATEREQUEST
DESCRIPTOR.message_types_by_name['PostMortemUpdateRequest'] = _POSTMORTEMUPDATEREQUEST
DESCRIPTOR.message_types_by_name['PostMortemGetResponse'] = _POSTMORTEMGETRESPONSE
DESCRIPTOR.message_types_by_name['PostMortemGetNamespacesRequest'] = _POSTMORTEMGETNAMESPACESREQUEST
DESCRIPTOR.message_types_by_name['PostMortemGetNamespacesResponse'] = _POSTMORTEMGETNAMESPACESRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

PostMortemQuery = _reflection.GeneratedProtocolMessageType('PostMortemQuery', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _POSTMORTEMQUERY_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.postmortem.postmortem_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.postmortem.PostMortemQuery.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _POSTMORTEMQUERY,
  '__module__' : 'github.com.metaprov.modeldapi.services.postmortem.postmortem_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.postmortem.PostMortemQuery)
  })
_sym_db.RegisterMessage(PostMortemQuery)
_sym_db.RegisterMessage(PostMortemQuery.LabelsEntry)

PostMortemResponse = _reflection.GeneratedProtocolMessageType('PostMortemResponse', (_message.Message,), {
  'DESCRIPTOR' : _POSTMORTEMRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.postmortem.postmortem_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.postmortem.PostMortemResponse)
  })
_sym_db.RegisterMessage(PostMortemResponse)

PostMortemCreateRequest = _reflection.GeneratedProtocolMessageType('PostMortemCreateRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _POSTMORTEMCREATEREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.postmortem.postmortem_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.postmortem.PostMortemCreateRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _POSTMORTEMCREATEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.postmortem.postmortem_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.postmortem.PostMortemCreateRequest)
  })
_sym_db.RegisterMessage(PostMortemCreateRequest)
_sym_db.RegisterMessage(PostMortemCreateRequest.LabelsEntry)

PostMortemUpdateRequest = _reflection.GeneratedProtocolMessageType('PostMortemUpdateRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _POSTMORTEMUPDATEREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.postmortem.postmortem_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.postmortem.PostMortemUpdateRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _POSTMORTEMUPDATEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.postmortem.postmortem_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.postmortem.PostMortemUpdateRequest)
  })
_sym_db.RegisterMessage(PostMortemUpdateRequest)
_sym_db.RegisterMessage(PostMortemUpdateRequest.LabelsEntry)

PostMortemGetResponse = _reflection.GeneratedProtocolMessageType('PostMortemGetResponse', (_message.Message,), {
  'DESCRIPTOR' : _POSTMORTEMGETRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.postmortem.postmortem_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.postmortem.PostMortemGetResponse)
  })
_sym_db.RegisterMessage(PostMortemGetResponse)

PostMortemGetNamespacesRequest = _reflection.GeneratedProtocolMessageType('PostMortemGetNamespacesRequest', (_message.Message,), {
  'DESCRIPTOR' : _POSTMORTEMGETNAMESPACESREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.postmortem.postmortem_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.postmortem.PostMortemGetNamespacesRequest)
  })
_sym_db.RegisterMessage(PostMortemGetNamespacesRequest)

PostMortemGetNamespacesResponse = _reflection.GeneratedProtocolMessageType('PostMortemGetNamespacesResponse', (_message.Message,), {
  'DESCRIPTOR' : _POSTMORTEMGETNAMESPACESRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.postmortem.postmortem_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.postmortem.PostMortemGetNamespacesResponse)
  })
_sym_db.RegisterMessage(PostMortemGetNamespacesResponse)


DESCRIPTOR._options = None
_POSTMORTEMQUERY_LABELSENTRY._options = None
_POSTMORTEMCREATEREQUEST_LABELSENTRY._options = None
_POSTMORTEMUPDATEREQUEST_LABELSENTRY._options = None

_POSTMORTEMSERVICE = _descriptor.ServiceDescriptor(
  name='PostMortemService',
  full_name='github.com.metaprov.modeld.services.postmortem.PostMortemService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1449,
  serialized_end=2271,
  methods=[
  _descriptor.MethodDescriptor(
    name='List',
    full_name='github.com.metaprov.modeld.services.postmortem.PostMortemService.List',
    index=0,
    containing_service=None,
    input_type=_POSTMORTEMQUERY,
    output_type=github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_team_dot_v1alpha1_dot_generated__pb2._POSTMORTEMLIST,
    serialized_options=b'\202\323\344\223\002\033\022\031/api/v1alpha1/postmortems',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='Create',
    full_name='github.com.metaprov.modeld.services.postmortem.PostMortemService.Create',
    index=1,
    containing_service=None,
    input_type=_POSTMORTEMCREATEREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\002\'\"\031/api/v1alpha1/postmortems:\npostmortem',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='Get',
    full_name='github.com.metaprov.modeld.services.postmortem.PostMortemService.Get',
    index=2,
    containing_service=None,
    input_type=_POSTMORTEMQUERY,
    output_type=_POSTMORTEMGETRESPONSE,
    serialized_options=b'\202\323\344\223\002\"\022 /api/v1alpha1/postmortems/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='Update',
    full_name='github.com.metaprov.modeld.services.postmortem.PostMortemService.Update',
    index=3,
    containing_service=None,
    input_type=_POSTMORTEMUPDATEREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\002B\0324/api/v1alpha1/postmortems/{postmortem.metadata.name}:\npostmortem',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='Delete',
    full_name='github.com.metaprov.modeld.services.postmortem.PostMortemService.Delete',
    index=4,
    containing_service=None,
    input_type=_POSTMORTEMQUERY,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_POSTMORTEMSERVICE)

DESCRIPTOR.services_by_name['PostMortemService'] = _POSTMORTEMSERVICE

# @@protoc_insertion_point(module_scope)
