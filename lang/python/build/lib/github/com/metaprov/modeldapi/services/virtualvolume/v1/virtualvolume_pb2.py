# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/virtualvolume/v1/virtualvolume.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.protobuf import empty_pb2 as google_dot_protobuf_dot_empty__pb2
from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modeldapi/services/virtualvolume/v1/virtualvolume.proto',
  package='github.com.metaprov.modeld.services.virtualvolume.v1',
  syntax='proto3',
  serialized_options=b'Z7github.com/metaprov/modeldapi/services/virtualvolume/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nKgithub.com/metaprov/modeldapi/services/virtualvolume/v1/virtualvolume.proto\x12\x34github.com.metaprov.modeld.services.virtualvolume.v1\x1a\x1bgoogle/protobuf/empty.proto\x1a\x1cgoogle/api/annotations.proto\x1a\x45github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated.proto\"\xca\x01\n\x12VirtualVolumeQuery\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12\x64\n\x06labels\x18\x03 \x03(\x0b\x32T.github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeQuery.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x17\n\x15VirtualVolumeResponse\"\xb2\x02\n\x1aVirtualVolumeCreateRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12l\n\x06labels\x18\x03 \x03(\x0b\x32\\.github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeCreateRequest.LabelsEntry\x12V\n\x04spec\x18\x05 \x01(\x0b\x32H.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\xb2\x02\n\x1aVirtualVolumeUpdateRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12l\n\x06labels\x18\x03 \x03(\x0b\x32\\.github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeUpdateRequest.LabelsEntry\x12V\n\x04spec\x18\x05 \x01(\x0b\x32H.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeSpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"|\n\x18VirtualVolumeGetResponse\x12R\n\x04item\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolume\x12\x0c\n\x04yaml\x18\x02 \x01(\t2\xb5\x07\n\x14VirtualVolumeService\x12\xc0\x01\n\x04List\x12H.github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeQuery\x1aH.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualVolumeList\"$\x82\xd3\xe4\x93\x02\x1e\x12\x1c/api/v1alpha1/virtualvolumes\x12\xa7\x01\n\x06\x43reate\x12P.github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeCreateRequest\x1a\x16.google.protobuf.Empty\"3\x82\xd3\xe4\x93\x02-\"\x1c/api/v1alpha1/virtualvolumes:\rvirtualvolume\x12\xcc\x01\n\x03Get\x12H.github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeQuery\x1aN.github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeGetResponse\"+\x82\xd3\xe4\x93\x02%\x12#/api/v1alpha1/virtualvolumes/{name}\x12\xc6\x01\n\x06Update\x12P.github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeUpdateRequest\x1a\x16.google.protobuf.Empty\"R\x82\xd3\xe4\x93\x02L\x1a;/api/v1alpha1/virtualvolumes/{virtualvolumes.metadata.name}:\rvirtualvolume\x12\x97\x01\n\x06\x44\x65lete\x12H.github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeQuery\x1a\x16.google.protobuf.Empty\"+\x82\xd3\xe4\x93\x02%*#/api/v1alpha1/virtualvolumes/{name}B9Z7github.com/metaprov/modeldapi/services/virtualvolume/v1b\x06proto3'
  ,
  dependencies=[google_dot_protobuf_dot_empty__pb2.DESCRIPTOR,google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_VIRTUALVOLUMEQUERY_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeQuery.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeQuery.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeQuery.LabelsEntry.value', index=1,
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
  serialized_start=421,
  serialized_end=466,
)

_VIRTUALVOLUMEQUERY = _descriptor.Descriptor(
  name='VirtualVolumeQuery',
  full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeQuery',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeQuery.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeQuery.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeQuery.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_VIRTUALVOLUMEQUERY_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=264,
  serialized_end=466,
)


_VIRTUALVOLUMERESPONSE = _descriptor.Descriptor(
  name='VirtualVolumeResponse',
  full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeResponse',
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
  serialized_start=468,
  serialized_end=491,
)


_VIRTUALVOLUMECREATEREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeCreateRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeCreateRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeCreateRequest.LabelsEntry.value', index=1,
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
  serialized_start=421,
  serialized_end=466,
)

_VIRTUALVOLUMECREATEREQUEST = _descriptor.Descriptor(
  name='VirtualVolumeCreateRequest',
  full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeCreateRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeCreateRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeCreateRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeCreateRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeCreateRequest.spec', index=3,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_VIRTUALVOLUMECREATEREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=494,
  serialized_end=800,
)


_VIRTUALVOLUMEUPDATEREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeUpdateRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeUpdateRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeUpdateRequest.LabelsEntry.value', index=1,
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
  serialized_start=421,
  serialized_end=466,
)

_VIRTUALVOLUMEUPDATEREQUEST = _descriptor.Descriptor(
  name='VirtualVolumeUpdateRequest',
  full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeUpdateRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeUpdateRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeUpdateRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeUpdateRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeUpdateRequest.spec', index=3,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_VIRTUALVOLUMEUPDATEREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=803,
  serialized_end=1109,
)


_VIRTUALVOLUMEGETRESPONSE = _descriptor.Descriptor(
  name='VirtualVolumeGetResponse',
  full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeGetResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeGetResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeGetResponse.yaml', index=1,
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
  serialized_start=1111,
  serialized_end=1235,
)

_VIRTUALVOLUMEQUERY_LABELSENTRY.containing_type = _VIRTUALVOLUMEQUERY
_VIRTUALVOLUMEQUERY.fields_by_name['labels'].message_type = _VIRTUALVOLUMEQUERY_LABELSENTRY
_VIRTUALVOLUMECREATEREQUEST_LABELSENTRY.containing_type = _VIRTUALVOLUMECREATEREQUEST
_VIRTUALVOLUMECREATEREQUEST.fields_by_name['labels'].message_type = _VIRTUALVOLUMECREATEREQUEST_LABELSENTRY
_VIRTUALVOLUMECREATEREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALVOLUMESPEC
_VIRTUALVOLUMEUPDATEREQUEST_LABELSENTRY.containing_type = _VIRTUALVOLUMEUPDATEREQUEST
_VIRTUALVOLUMEUPDATEREQUEST.fields_by_name['labels'].message_type = _VIRTUALVOLUMEUPDATEREQUEST_LABELSENTRY
_VIRTUALVOLUMEUPDATEREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALVOLUMESPEC
_VIRTUALVOLUMEGETRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALVOLUME
DESCRIPTOR.message_types_by_name['VirtualVolumeQuery'] = _VIRTUALVOLUMEQUERY
DESCRIPTOR.message_types_by_name['VirtualVolumeResponse'] = _VIRTUALVOLUMERESPONSE
DESCRIPTOR.message_types_by_name['VirtualVolumeCreateRequest'] = _VIRTUALVOLUMECREATEREQUEST
DESCRIPTOR.message_types_by_name['VirtualVolumeUpdateRequest'] = _VIRTUALVOLUMEUPDATEREQUEST
DESCRIPTOR.message_types_by_name['VirtualVolumeGetResponse'] = _VIRTUALVOLUMEGETRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

VirtualVolumeQuery = _reflection.GeneratedProtocolMessageType('VirtualVolumeQuery', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _VIRTUALVOLUMEQUERY_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeQuery.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _VIRTUALVOLUMEQUERY,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeQuery)
  })
_sym_db.RegisterMessage(VirtualVolumeQuery)
_sym_db.RegisterMessage(VirtualVolumeQuery.LabelsEntry)

VirtualVolumeResponse = _reflection.GeneratedProtocolMessageType('VirtualVolumeResponse', (_message.Message,), {
  'DESCRIPTOR' : _VIRTUALVOLUMERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeResponse)
  })
_sym_db.RegisterMessage(VirtualVolumeResponse)

VirtualVolumeCreateRequest = _reflection.GeneratedProtocolMessageType('VirtualVolumeCreateRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _VIRTUALVOLUMECREATEREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeCreateRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _VIRTUALVOLUMECREATEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeCreateRequest)
  })
_sym_db.RegisterMessage(VirtualVolumeCreateRequest)
_sym_db.RegisterMessage(VirtualVolumeCreateRequest.LabelsEntry)

VirtualVolumeUpdateRequest = _reflection.GeneratedProtocolMessageType('VirtualVolumeUpdateRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _VIRTUALVOLUMEUPDATEREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeUpdateRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _VIRTUALVOLUMEUPDATEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeUpdateRequest)
  })
_sym_db.RegisterMessage(VirtualVolumeUpdateRequest)
_sym_db.RegisterMessage(VirtualVolumeUpdateRequest.LabelsEntry)

VirtualVolumeGetResponse = _reflection.GeneratedProtocolMessageType('VirtualVolumeGetResponse', (_message.Message,), {
  'DESCRIPTOR' : _VIRTUALVOLUMEGETRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.virtualvolume.v1.virtualvolume_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeGetResponse)
  })
_sym_db.RegisterMessage(VirtualVolumeGetResponse)


DESCRIPTOR._options = None
_VIRTUALVOLUMEQUERY_LABELSENTRY._options = None
_VIRTUALVOLUMECREATEREQUEST_LABELSENTRY._options = None
_VIRTUALVOLUMEUPDATEREQUEST_LABELSENTRY._options = None

_VIRTUALVOLUMESERVICE = _descriptor.ServiceDescriptor(
  name='VirtualVolumeService',
  full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1238,
  serialized_end=2187,
  methods=[
  _descriptor.MethodDescriptor(
    name='List',
    full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService.List',
    index=0,
    containing_service=None,
    input_type=_VIRTUALVOLUMEQUERY,
    output_type=github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_infra_dot_v1alpha1_dot_generated__pb2._VIRTUALVOLUMELIST,
    serialized_options=b'\202\323\344\223\002\036\022\034/api/v1alpha1/virtualvolumes',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='Create',
    full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService.Create',
    index=1,
    containing_service=None,
    input_type=_VIRTUALVOLUMECREATEREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\002-\"\034/api/v1alpha1/virtualvolumes:\rvirtualvolume',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='Get',
    full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService.Get',
    index=2,
    containing_service=None,
    input_type=_VIRTUALVOLUMEQUERY,
    output_type=_VIRTUALVOLUMEGETRESPONSE,
    serialized_options=b'\202\323\344\223\002%\022#/api/v1alpha1/virtualvolumes/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='Update',
    full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService.Update',
    index=3,
    containing_service=None,
    input_type=_VIRTUALVOLUMEUPDATEREQUEST,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\002L\032;/api/v1alpha1/virtualvolumes/{virtualvolumes.metadata.name}:\rvirtualvolume',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='Delete',
    full_name='github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService.Delete',
    index=4,
    containing_service=None,
    input_type=_VIRTUALVOLUMEQUERY,
    output_type=google_dot_protobuf_dot_empty__pb2._EMPTY,
    serialized_options=b'\202\323\344\223\002%*#/api/v1alpha1/virtualvolumes/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_VIRTUALVOLUMESERVICE)

DESCRIPTOR.services_by_name['VirtualVolumeService'] = _VIRTUALVOLUMESERVICE

# @@protoc_insertion_point(module_scope)
