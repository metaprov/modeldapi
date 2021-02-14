# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/entity/v1/entity.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modeldapi/services/entity/v1/entity.proto',
  package='github.com.metaprov.modeld.services.entity.v1',
  syntax='proto3',
  serialized_options=b'Z0github.com/metaprov/modeldapi/services/entity/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n=github.com/metaprov/modeldapi/services/entity/v1/entity.proto\x12-github.com.metaprov.modeld.services.entity.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated.proto\"\xb7\x01\n\x13ListEntitiesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12^\n\x06labels\x18\x02 \x03(\x0b\x32N.github.com.metaprov.modeld.services.entity.v1.ListEntitiesRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"g\n\x14ListEntitiesResponse\x12O\n\x05items\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.EntityList\"\x95\x02\n\x13\x43reateEntityRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12^\n\x06labels\x18\x03 \x03(\x0b\x32N.github.com.metaprov.modeld.services.entity.v1.CreateEntityRequest.LabelsEntry\x12N\n\x04spec\x18\x04 \x01(\x0b\x32@.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.EntitySpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x16\n\x14\x43reateEntityResponse\"\x95\x02\n\x13UpdateEntityRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12^\n\x06labels\x18\x03 \x03(\x0b\x32N.github.com.metaprov.modeld.services.entity.v1.UpdateEntityRequest.LabelsEntry\x12N\n\x04spec\x18\x05 \x01(\x0b\x32@.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.EntitySpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x16\n\x14UpdateEntityResponse\"3\n\x10GetEntityRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"m\n\x11GetEntityResponse\x12J\n\x04item\x18\x01 \x01(\x0b\x32<.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Entity\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"6\n\x13\x44\x65leteEntityRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x16\n\x14\x44\x65leteEntityResponse2\xfc\x06\n\rEntityService\x12\xad\x01\n\x0cListEntities\x12\x42.github.com.metaprov.modeld.services.entity.v1.ListEntitiesRequest\x1a\x43.github.com.metaprov.modeld.services.entity.v1.ListEntitiesResponse\"\x14\x82\xd3\xe4\x93\x02\x0e\x12\x0c/v1/entities\x12\xb3\x01\n\x0c\x43reateEntity\x12\x42.github.com.metaprov.modeld.services.entity.v1.CreateEntityRequest\x1a\x43.github.com.metaprov.modeld.services.entity.v1.CreateEntityResponse\"\x1a\x82\xd3\xe4\x93\x02\x14\"\x0c/v1/entities:\x04spec\x12\xab\x01\n\tGetEntity\x12?.github.com.metaprov.modeld.services.entity.v1.GetEntityRequest\x1a@.github.com.metaprov.modeld.services.entity.v1.GetEntityResponse\"\x1b\x82\xd3\xe4\x93\x02\x15\x12\x13/v1/entities/{name}\x12\xba\x01\n\x0cUpdateEntity\x12\x42.github.com.metaprov.modeld.services.entity.v1.UpdateEntityRequest\x1a\x43.github.com.metaprov.modeld.services.entity.v1.UpdateEntityResponse\"!\x82\xd3\xe4\x93\x02\x1b\x1a\x13/v1/entities/{name}:\x04spec\x12\x99\x01\n\x0c\x44\x65leteEntity\x12\x42.github.com.metaprov.modeld.services.entity.v1.DeleteEntityRequest\x1a\x43.github.com.metaprov.modeld.services.entity.v1.DeleteEntityResponse\"\x00\x42\x32Z0github.com/metaprov/modeldapi/services/entity/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTENTITIESREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.entity.v1.ListEntitiesRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.entity.v1.ListEntitiesRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.entity.v1.ListEntitiesRequest.LabelsEntry.value', index=1,
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
  serialized_start=351,
  serialized_end=396,
)

_LISTENTITIESREQUEST = _descriptor.Descriptor(
  name='ListEntitiesRequest',
  full_name='github.com.metaprov.modeld.services.entity.v1.ListEntitiesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.entity.v1.ListEntitiesRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.entity.v1.ListEntitiesRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTENTITIESREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=213,
  serialized_end=396,
)


_LISTENTITIESRESPONSE = _descriptor.Descriptor(
  name='ListEntitiesResponse',
  full_name='github.com.metaprov.modeld.services.entity.v1.ListEntitiesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeld.services.entity.v1.ListEntitiesResponse.items', index=0,
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
  serialized_start=398,
  serialized_end=501,
)


_CREATEENTITYREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.entity.v1.CreateEntityRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.entity.v1.CreateEntityRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.entity.v1.CreateEntityRequest.LabelsEntry.value', index=1,
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
  serialized_start=351,
  serialized_end=396,
)

_CREATEENTITYREQUEST = _descriptor.Descriptor(
  name='CreateEntityRequest',
  full_name='github.com.metaprov.modeld.services.entity.v1.CreateEntityRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.entity.v1.CreateEntityRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.entity.v1.CreateEntityRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.entity.v1.CreateEntityRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeld.services.entity.v1.CreateEntityRequest.spec', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_CREATEENTITYREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=504,
  serialized_end=781,
)


_CREATEENTITYRESPONSE = _descriptor.Descriptor(
  name='CreateEntityResponse',
  full_name='github.com.metaprov.modeld.services.entity.v1.CreateEntityResponse',
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
  serialized_start=783,
  serialized_end=805,
)


_UPDATEENTITYREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.entity.v1.UpdateEntityRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.entity.v1.UpdateEntityRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.entity.v1.UpdateEntityRequest.LabelsEntry.value', index=1,
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
  serialized_start=351,
  serialized_end=396,
)

_UPDATEENTITYREQUEST = _descriptor.Descriptor(
  name='UpdateEntityRequest',
  full_name='github.com.metaprov.modeld.services.entity.v1.UpdateEntityRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.entity.v1.UpdateEntityRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.entity.v1.UpdateEntityRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.entity.v1.UpdateEntityRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeld.services.entity.v1.UpdateEntityRequest.spec', index=3,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_UPDATEENTITYREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=808,
  serialized_end=1085,
)


_UPDATEENTITYRESPONSE = _descriptor.Descriptor(
  name='UpdateEntityResponse',
  full_name='github.com.metaprov.modeld.services.entity.v1.UpdateEntityResponse',
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
  serialized_start=1087,
  serialized_end=1109,
)


_GETENTITYREQUEST = _descriptor.Descriptor(
  name='GetEntityRequest',
  full_name='github.com.metaprov.modeld.services.entity.v1.GetEntityRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.entity.v1.GetEntityRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.entity.v1.GetEntityRequest.name', index=1,
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
  serialized_end=1162,
)


_GETENTITYRESPONSE = _descriptor.Descriptor(
  name='GetEntityResponse',
  full_name='github.com.metaprov.modeld.services.entity.v1.GetEntityResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeld.services.entity.v1.GetEntityResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeld.services.entity.v1.GetEntityResponse.yaml', index=1,
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
  serialized_start=1164,
  serialized_end=1273,
)


_DELETEENTITYREQUEST = _descriptor.Descriptor(
  name='DeleteEntityRequest',
  full_name='github.com.metaprov.modeld.services.entity.v1.DeleteEntityRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.entity.v1.DeleteEntityRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.entity.v1.DeleteEntityRequest.name', index=1,
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
  serialized_start=1275,
  serialized_end=1329,
)


_DELETEENTITYRESPONSE = _descriptor.Descriptor(
  name='DeleteEntityResponse',
  full_name='github.com.metaprov.modeld.services.entity.v1.DeleteEntityResponse',
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
  serialized_start=1331,
  serialized_end=1353,
)

_LISTENTITIESREQUEST_LABELSENTRY.containing_type = _LISTENTITIESREQUEST
_LISTENTITIESREQUEST.fields_by_name['labels'].message_type = _LISTENTITIESREQUEST_LABELSENTRY
_LISTENTITIESRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._ENTITYLIST
_CREATEENTITYREQUEST_LABELSENTRY.containing_type = _CREATEENTITYREQUEST
_CREATEENTITYREQUEST.fields_by_name['labels'].message_type = _CREATEENTITYREQUEST_LABELSENTRY
_CREATEENTITYREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._ENTITYSPEC
_UPDATEENTITYREQUEST_LABELSENTRY.containing_type = _UPDATEENTITYREQUEST
_UPDATEENTITYREQUEST.fields_by_name['labels'].message_type = _UPDATEENTITYREQUEST_LABELSENTRY
_UPDATEENTITYREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._ENTITYSPEC
_GETENTITYRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._ENTITY
DESCRIPTOR.message_types_by_name['ListEntitiesRequest'] = _LISTENTITIESREQUEST
DESCRIPTOR.message_types_by_name['ListEntitiesResponse'] = _LISTENTITIESRESPONSE
DESCRIPTOR.message_types_by_name['CreateEntityRequest'] = _CREATEENTITYREQUEST
DESCRIPTOR.message_types_by_name['CreateEntityResponse'] = _CREATEENTITYRESPONSE
DESCRIPTOR.message_types_by_name['UpdateEntityRequest'] = _UPDATEENTITYREQUEST
DESCRIPTOR.message_types_by_name['UpdateEntityResponse'] = _UPDATEENTITYRESPONSE
DESCRIPTOR.message_types_by_name['GetEntityRequest'] = _GETENTITYREQUEST
DESCRIPTOR.message_types_by_name['GetEntityResponse'] = _GETENTITYRESPONSE
DESCRIPTOR.message_types_by_name['DeleteEntityRequest'] = _DELETEENTITYREQUEST
DESCRIPTOR.message_types_by_name['DeleteEntityResponse'] = _DELETEENTITYRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListEntitiesRequest = _reflection.GeneratedProtocolMessageType('ListEntitiesRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTENTITIESREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.entity.v1.entity_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.entity.v1.ListEntitiesRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTENTITIESREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.entity.v1.entity_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.entity.v1.ListEntitiesRequest)
  })
_sym_db.RegisterMessage(ListEntitiesRequest)
_sym_db.RegisterMessage(ListEntitiesRequest.LabelsEntry)

ListEntitiesResponse = _reflection.GeneratedProtocolMessageType('ListEntitiesResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTENTITIESRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.entity.v1.entity_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.entity.v1.ListEntitiesResponse)
  })
_sym_db.RegisterMessage(ListEntitiesResponse)

CreateEntityRequest = _reflection.GeneratedProtocolMessageType('CreateEntityRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _CREATEENTITYREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.entity.v1.entity_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.entity.v1.CreateEntityRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _CREATEENTITYREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.entity.v1.entity_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.entity.v1.CreateEntityRequest)
  })
_sym_db.RegisterMessage(CreateEntityRequest)
_sym_db.RegisterMessage(CreateEntityRequest.LabelsEntry)

CreateEntityResponse = _reflection.GeneratedProtocolMessageType('CreateEntityResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEENTITYRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.entity.v1.entity_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.entity.v1.CreateEntityResponse)
  })
_sym_db.RegisterMessage(CreateEntityResponse)

UpdateEntityRequest = _reflection.GeneratedProtocolMessageType('UpdateEntityRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _UPDATEENTITYREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.entity.v1.entity_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.entity.v1.UpdateEntityRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _UPDATEENTITYREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.entity.v1.entity_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.entity.v1.UpdateEntityRequest)
  })
_sym_db.RegisterMessage(UpdateEntityRequest)
_sym_db.RegisterMessage(UpdateEntityRequest.LabelsEntry)

UpdateEntityResponse = _reflection.GeneratedProtocolMessageType('UpdateEntityResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEENTITYRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.entity.v1.entity_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.entity.v1.UpdateEntityResponse)
  })
_sym_db.RegisterMessage(UpdateEntityResponse)

GetEntityRequest = _reflection.GeneratedProtocolMessageType('GetEntityRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETENTITYREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.entity.v1.entity_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.entity.v1.GetEntityRequest)
  })
_sym_db.RegisterMessage(GetEntityRequest)

GetEntityResponse = _reflection.GeneratedProtocolMessageType('GetEntityResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETENTITYRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.entity.v1.entity_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.entity.v1.GetEntityResponse)
  })
_sym_db.RegisterMessage(GetEntityResponse)

DeleteEntityRequest = _reflection.GeneratedProtocolMessageType('DeleteEntityRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEENTITYREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.entity.v1.entity_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.entity.v1.DeleteEntityRequest)
  })
_sym_db.RegisterMessage(DeleteEntityRequest)

DeleteEntityResponse = _reflection.GeneratedProtocolMessageType('DeleteEntityResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEENTITYRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.entity.v1.entity_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.entity.v1.DeleteEntityResponse)
  })
_sym_db.RegisterMessage(DeleteEntityResponse)


DESCRIPTOR._options = None
_LISTENTITIESREQUEST_LABELSENTRY._options = None
_CREATEENTITYREQUEST_LABELSENTRY._options = None
_UPDATEENTITYREQUEST_LABELSENTRY._options = None

_ENTITYSERVICE = _descriptor.ServiceDescriptor(
  name='EntityService',
  full_name='github.com.metaprov.modeld.services.entity.v1.EntityService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1356,
  serialized_end=2248,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListEntities',
    full_name='github.com.metaprov.modeld.services.entity.v1.EntityService.ListEntities',
    index=0,
    containing_service=None,
    input_type=_LISTENTITIESREQUEST,
    output_type=_LISTENTITIESRESPONSE,
    serialized_options=b'\202\323\344\223\002\016\022\014/v1/entities',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateEntity',
    full_name='github.com.metaprov.modeld.services.entity.v1.EntityService.CreateEntity',
    index=1,
    containing_service=None,
    input_type=_CREATEENTITYREQUEST,
    output_type=_CREATEENTITYRESPONSE,
    serialized_options=b'\202\323\344\223\002\024\"\014/v1/entities:\004spec',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetEntity',
    full_name='github.com.metaprov.modeld.services.entity.v1.EntityService.GetEntity',
    index=2,
    containing_service=None,
    input_type=_GETENTITYREQUEST,
    output_type=_GETENTITYRESPONSE,
    serialized_options=b'\202\323\344\223\002\025\022\023/v1/entities/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateEntity',
    full_name='github.com.metaprov.modeld.services.entity.v1.EntityService.UpdateEntity',
    index=3,
    containing_service=None,
    input_type=_UPDATEENTITYREQUEST,
    output_type=_UPDATEENTITYRESPONSE,
    serialized_options=b'\202\323\344\223\002\033\032\023/v1/entities/{name}:\004spec',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteEntity',
    full_name='github.com.metaprov.modeld.services.entity.v1.EntityService.DeleteEntity',
    index=4,
    containing_service=None,
    input_type=_DELETEENTITYREQUEST,
    output_type=_DELETEENTITYRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_ENTITYSERVICE)

DESCRIPTOR.services_by_name['EntityService'] = _ENTITYSERVICE

# @@protoc_insertion_point(module_scope)