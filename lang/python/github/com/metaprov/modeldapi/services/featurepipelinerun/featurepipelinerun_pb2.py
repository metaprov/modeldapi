# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/featurepipelinerun/featurepipelinerun.proto
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
  name='github.com/metaprov/modeldapi/services/featurepipelinerun/featurepipelinerun.proto',
  package='github.com.metaprov.modeld.services.featurepipelinerun',
  syntax='proto3',
  serialized_options=b'Z9github.com/metaprov/modeldapi/services/featurepipelinerun',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nRgithub.com/metaprov/modeldapi/services/featurepipelinerun/featurepipelinerun.proto\x12\x36github.com.metaprov.modeld.services.featurepipelinerun\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated.proto\"\xd4\x01\n\x1dListFeaturePipelineRunRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12q\n\x06labels\x18\x02 \x03(\x0b\x32\x61.github.com.metaprov.modeld.services.featurepipelinerun.ListFeaturePipelineRunRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"}\n\x1eListFeaturePipelineRunResponse\x12[\n\x05items\x18\x01 \x01(\x0b\x32L.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipelineRunList\"\xc2\x02\n\x1f\x43reateFeaturePipelineRunRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12s\n\x06labels\x18\x03 \x03(\x0b\x32\x63.github.com.metaprov.modeld.services.featurepipelinerun.CreateFeaturePipelineRunRequest.LabelsEntry\x12Z\n\x04spec\x18\x04 \x01(\x0b\x32L.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipelineRunSpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\"\n CreateFeaturePipelineRunResponse\"\xc2\x02\n\x1fUpdateFeaturePipelineRunRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12s\n\x06labels\x18\x03 \x03(\x0b\x32\x63.github.com.metaprov.modeld.services.featurepipelinerun.UpdateFeaturePipelineRunRequest.LabelsEntry\x12Z\n\x04spec\x18\x05 \x01(\x0b\x32L.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipelineRunSpec\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\"\n UpdateFeaturePipelineRunResponse\"?\n\x1cGetFeaturePipelineRunRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x85\x01\n\x1dGetFeaturePipelineRunResponse\x12V\n\x04item\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.FeaturePipelineRun\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"B\n\x1f\x44\x65leteFeaturePipelineRunRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\"\n DeleteFeaturePipelineRunResponse2\xe7\t\n\x19\x46\x65\x61turePipelineRunService\x12\xe9\x01\n\x17ListFeaturePipelineRuns\x12U.github.com.metaprov.modeld.services.featurepipelinerun.ListFeaturePipelineRunRequest\x1aV.github.com.metaprov.modeld.services.featurepipelinerun.ListFeaturePipelineRunResponse\"\x1f\x82\xd3\xe4\x93\x02\x19\x12\x17/v1/featurepipelineruns\x12\x82\x02\n\x18\x43reateFeaturePipelineRun\x12W.github.com.metaprov.modeld.services.featurepipelinerun.CreateFeaturePipelineRunRequest\x1aX.github.com.metaprov.modeld.services.featurepipelinerun.CreateFeaturePipelineRunResponse\"3\x82\xd3\xe4\x93\x02-\"\x17/v1/featurepipelineruns:\x12\x66\x65\x61turepipelinerun\x12\xec\x01\n\x15GetFeaturePipelineRun\x12T.github.com.metaprov.modeld.services.featurepipelinerun.GetFeaturePipelineRunRequest\x1aU.github.com.metaprov.modeld.services.featurepipelinerun.GetFeaturePipelineRunResponse\"&\x82\xd3\xe4\x93\x02 \x12\x1e/v1/featurepipelineruns/{name}\x12\x97\x02\n\x18UpdateFeaturePipelineRun\x12W.github.com.metaprov.modeld.services.featurepipelinerun.UpdateFeaturePipelineRunRequest\x1aX.github.com.metaprov.modeld.services.featurepipelinerun.UpdateFeaturePipelineRunResponse\"H\x82\xd3\xe4\x93\x02\x42\x1a,/v1/featurepipelines/{feature.metadata.name}:\x12\x66\x65\x61turepipelinerun\x12\xcf\x01\n\x18\x44\x65leteFeaturePipelineRun\x12W.github.com.metaprov.modeld.services.featurepipelinerun.DeleteFeaturePipelineRunRequest\x1aX.github.com.metaprov.modeld.services.featurepipelinerun.DeleteFeaturePipelineRunResponse\"\x00\x42;Z9github.com/metaprov/modeldapi/services/featurepipelinerunb\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTFEATUREPIPELINERUNREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.featurepipelinerun.ListFeaturePipelineRunRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.featurepipelinerun.ListFeaturePipelineRunRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.featurepipelinerun.ListFeaturePipelineRunRequest.LabelsEntry.value', index=1,
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
  serialized_start=410,
  serialized_end=455,
)

_LISTFEATUREPIPELINERUNREQUEST = _descriptor.Descriptor(
  name='ListFeaturePipelineRunRequest',
  full_name='github.com.metaprov.modeld.services.featurepipelinerun.ListFeaturePipelineRunRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.featurepipelinerun.ListFeaturePipelineRunRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.featurepipelinerun.ListFeaturePipelineRunRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTFEATUREPIPELINERUNREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=243,
  serialized_end=455,
)


_LISTFEATUREPIPELINERUNRESPONSE = _descriptor.Descriptor(
  name='ListFeaturePipelineRunResponse',
  full_name='github.com.metaprov.modeld.services.featurepipelinerun.ListFeaturePipelineRunResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeld.services.featurepipelinerun.ListFeaturePipelineRunResponse.items', index=0,
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
  serialized_start=457,
  serialized_end=582,
)


_CREATEFEATUREPIPELINERUNREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.featurepipelinerun.CreateFeaturePipelineRunRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.featurepipelinerun.CreateFeaturePipelineRunRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.featurepipelinerun.CreateFeaturePipelineRunRequest.LabelsEntry.value', index=1,
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
  serialized_start=410,
  serialized_end=455,
)

_CREATEFEATUREPIPELINERUNREQUEST = _descriptor.Descriptor(
  name='CreateFeaturePipelineRunRequest',
  full_name='github.com.metaprov.modeld.services.featurepipelinerun.CreateFeaturePipelineRunRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.featurepipelinerun.CreateFeaturePipelineRunRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.featurepipelinerun.CreateFeaturePipelineRunRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.featurepipelinerun.CreateFeaturePipelineRunRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeld.services.featurepipelinerun.CreateFeaturePipelineRunRequest.spec', index=3,
      number=4, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_CREATEFEATUREPIPELINERUNREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=585,
  serialized_end=907,
)


_CREATEFEATUREPIPELINERUNRESPONSE = _descriptor.Descriptor(
  name='CreateFeaturePipelineRunResponse',
  full_name='github.com.metaprov.modeld.services.featurepipelinerun.CreateFeaturePipelineRunResponse',
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
  serialized_start=909,
  serialized_end=943,
)


_UPDATEFEATUREPIPELINERUNREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeld.services.featurepipelinerun.UpdateFeaturePipelineRunRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeld.services.featurepipelinerun.UpdateFeaturePipelineRunRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeld.services.featurepipelinerun.UpdateFeaturePipelineRunRequest.LabelsEntry.value', index=1,
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
  serialized_start=410,
  serialized_end=455,
)

_UPDATEFEATUREPIPELINERUNREQUEST = _descriptor.Descriptor(
  name='UpdateFeaturePipelineRunRequest',
  full_name='github.com.metaprov.modeld.services.featurepipelinerun.UpdateFeaturePipelineRunRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.featurepipelinerun.UpdateFeaturePipelineRunRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.featurepipelinerun.UpdateFeaturePipelineRunRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeld.services.featurepipelinerun.UpdateFeaturePipelineRunRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeld.services.featurepipelinerun.UpdateFeaturePipelineRunRequest.spec', index=3,
      number=5, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_UPDATEFEATUREPIPELINERUNREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=946,
  serialized_end=1268,
)


_UPDATEFEATUREPIPELINERUNRESPONSE = _descriptor.Descriptor(
  name='UpdateFeaturePipelineRunResponse',
  full_name='github.com.metaprov.modeld.services.featurepipelinerun.UpdateFeaturePipelineRunResponse',
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
  serialized_start=1270,
  serialized_end=1304,
)


_GETFEATUREPIPELINERUNREQUEST = _descriptor.Descriptor(
  name='GetFeaturePipelineRunRequest',
  full_name='github.com.metaprov.modeld.services.featurepipelinerun.GetFeaturePipelineRunRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.featurepipelinerun.GetFeaturePipelineRunRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.featurepipelinerun.GetFeaturePipelineRunRequest.name', index=1,
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
  serialized_start=1306,
  serialized_end=1369,
)


_GETFEATUREPIPELINERUNRESPONSE = _descriptor.Descriptor(
  name='GetFeaturePipelineRunResponse',
  full_name='github.com.metaprov.modeld.services.featurepipelinerun.GetFeaturePipelineRunResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeld.services.featurepipelinerun.GetFeaturePipelineRunResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeld.services.featurepipelinerun.GetFeaturePipelineRunResponse.yaml', index=1,
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
  serialized_start=1372,
  serialized_end=1505,
)


_DELETEFEATUREPIPELINERUNREQUEST = _descriptor.Descriptor(
  name='DeleteFeaturePipelineRunRequest',
  full_name='github.com.metaprov.modeld.services.featurepipelinerun.DeleteFeaturePipelineRunRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeld.services.featurepipelinerun.DeleteFeaturePipelineRunRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeld.services.featurepipelinerun.DeleteFeaturePipelineRunRequest.name', index=1,
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
  serialized_start=1507,
  serialized_end=1573,
)


_DELETEFEATUREPIPELINERUNRESPONSE = _descriptor.Descriptor(
  name='DeleteFeaturePipelineRunResponse',
  full_name='github.com.metaprov.modeld.services.featurepipelinerun.DeleteFeaturePipelineRunResponse',
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
  serialized_start=1575,
  serialized_end=1609,
)

_LISTFEATUREPIPELINERUNREQUEST_LABELSENTRY.containing_type = _LISTFEATUREPIPELINERUNREQUEST
_LISTFEATUREPIPELINERUNREQUEST.fields_by_name['labels'].message_type = _LISTFEATUREPIPELINERUNREQUEST_LABELSENTRY
_LISTFEATUREPIPELINERUNRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATUREPIPELINERUNLIST
_CREATEFEATUREPIPELINERUNREQUEST_LABELSENTRY.containing_type = _CREATEFEATUREPIPELINERUNREQUEST
_CREATEFEATUREPIPELINERUNREQUEST.fields_by_name['labels'].message_type = _CREATEFEATUREPIPELINERUNREQUEST_LABELSENTRY
_CREATEFEATUREPIPELINERUNREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATUREPIPELINERUNSPEC
_UPDATEFEATUREPIPELINERUNREQUEST_LABELSENTRY.containing_type = _UPDATEFEATUREPIPELINERUNREQUEST
_UPDATEFEATUREPIPELINERUNREQUEST.fields_by_name['labels'].message_type = _UPDATEFEATUREPIPELINERUNREQUEST_LABELSENTRY
_UPDATEFEATUREPIPELINERUNREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATUREPIPELINERUNSPEC
_GETFEATUREPIPELINERUNRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._FEATUREPIPELINERUN
DESCRIPTOR.message_types_by_name['ListFeaturePipelineRunRequest'] = _LISTFEATUREPIPELINERUNREQUEST
DESCRIPTOR.message_types_by_name['ListFeaturePipelineRunResponse'] = _LISTFEATUREPIPELINERUNRESPONSE
DESCRIPTOR.message_types_by_name['CreateFeaturePipelineRunRequest'] = _CREATEFEATUREPIPELINERUNREQUEST
DESCRIPTOR.message_types_by_name['CreateFeaturePipelineRunResponse'] = _CREATEFEATUREPIPELINERUNRESPONSE
DESCRIPTOR.message_types_by_name['UpdateFeaturePipelineRunRequest'] = _UPDATEFEATUREPIPELINERUNREQUEST
DESCRIPTOR.message_types_by_name['UpdateFeaturePipelineRunResponse'] = _UPDATEFEATUREPIPELINERUNRESPONSE
DESCRIPTOR.message_types_by_name['GetFeaturePipelineRunRequest'] = _GETFEATUREPIPELINERUNREQUEST
DESCRIPTOR.message_types_by_name['GetFeaturePipelineRunResponse'] = _GETFEATUREPIPELINERUNRESPONSE
DESCRIPTOR.message_types_by_name['DeleteFeaturePipelineRunRequest'] = _DELETEFEATUREPIPELINERUNREQUEST
DESCRIPTOR.message_types_by_name['DeleteFeaturePipelineRunResponse'] = _DELETEFEATUREPIPELINERUNRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListFeaturePipelineRunRequest = _reflection.GeneratedProtocolMessageType('ListFeaturePipelineRunRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTFEATUREPIPELINERUNREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.featurepipelinerun.featurepipelinerun_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.featurepipelinerun.ListFeaturePipelineRunRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTFEATUREPIPELINERUNREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.featurepipelinerun.featurepipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.featurepipelinerun.ListFeaturePipelineRunRequest)
  })
_sym_db.RegisterMessage(ListFeaturePipelineRunRequest)
_sym_db.RegisterMessage(ListFeaturePipelineRunRequest.LabelsEntry)

ListFeaturePipelineRunResponse = _reflection.GeneratedProtocolMessageType('ListFeaturePipelineRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTFEATUREPIPELINERUNRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.featurepipelinerun.featurepipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.featurepipelinerun.ListFeaturePipelineRunResponse)
  })
_sym_db.RegisterMessage(ListFeaturePipelineRunResponse)

CreateFeaturePipelineRunRequest = _reflection.GeneratedProtocolMessageType('CreateFeaturePipelineRunRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _CREATEFEATUREPIPELINERUNREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.featurepipelinerun.featurepipelinerun_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.featurepipelinerun.CreateFeaturePipelineRunRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _CREATEFEATUREPIPELINERUNREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.featurepipelinerun.featurepipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.featurepipelinerun.CreateFeaturePipelineRunRequest)
  })
_sym_db.RegisterMessage(CreateFeaturePipelineRunRequest)
_sym_db.RegisterMessage(CreateFeaturePipelineRunRequest.LabelsEntry)

CreateFeaturePipelineRunResponse = _reflection.GeneratedProtocolMessageType('CreateFeaturePipelineRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEFEATUREPIPELINERUNRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.featurepipelinerun.featurepipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.featurepipelinerun.CreateFeaturePipelineRunResponse)
  })
_sym_db.RegisterMessage(CreateFeaturePipelineRunResponse)

UpdateFeaturePipelineRunRequest = _reflection.GeneratedProtocolMessageType('UpdateFeaturePipelineRunRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _UPDATEFEATUREPIPELINERUNREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.featurepipelinerun.featurepipelinerun_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.featurepipelinerun.UpdateFeaturePipelineRunRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _UPDATEFEATUREPIPELINERUNREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.featurepipelinerun.featurepipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.featurepipelinerun.UpdateFeaturePipelineRunRequest)
  })
_sym_db.RegisterMessage(UpdateFeaturePipelineRunRequest)
_sym_db.RegisterMessage(UpdateFeaturePipelineRunRequest.LabelsEntry)

UpdateFeaturePipelineRunResponse = _reflection.GeneratedProtocolMessageType('UpdateFeaturePipelineRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEFEATUREPIPELINERUNRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.featurepipelinerun.featurepipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.featurepipelinerun.UpdateFeaturePipelineRunResponse)
  })
_sym_db.RegisterMessage(UpdateFeaturePipelineRunResponse)

GetFeaturePipelineRunRequest = _reflection.GeneratedProtocolMessageType('GetFeaturePipelineRunRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETFEATUREPIPELINERUNREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.featurepipelinerun.featurepipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.featurepipelinerun.GetFeaturePipelineRunRequest)
  })
_sym_db.RegisterMessage(GetFeaturePipelineRunRequest)

GetFeaturePipelineRunResponse = _reflection.GeneratedProtocolMessageType('GetFeaturePipelineRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETFEATUREPIPELINERUNRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.featurepipelinerun.featurepipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.featurepipelinerun.GetFeaturePipelineRunResponse)
  })
_sym_db.RegisterMessage(GetFeaturePipelineRunResponse)

DeleteFeaturePipelineRunRequest = _reflection.GeneratedProtocolMessageType('DeleteFeaturePipelineRunRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEFEATUREPIPELINERUNREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.featurepipelinerun.featurepipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.featurepipelinerun.DeleteFeaturePipelineRunRequest)
  })
_sym_db.RegisterMessage(DeleteFeaturePipelineRunRequest)

DeleteFeaturePipelineRunResponse = _reflection.GeneratedProtocolMessageType('DeleteFeaturePipelineRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEFEATUREPIPELINERUNRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.featurepipelinerun.featurepipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeld.services.featurepipelinerun.DeleteFeaturePipelineRunResponse)
  })
_sym_db.RegisterMessage(DeleteFeaturePipelineRunResponse)


DESCRIPTOR._options = None
_LISTFEATUREPIPELINERUNREQUEST_LABELSENTRY._options = None
_CREATEFEATUREPIPELINERUNREQUEST_LABELSENTRY._options = None
_UPDATEFEATUREPIPELINERUNREQUEST_LABELSENTRY._options = None

_FEATUREPIPELINERUNSERVICE = _descriptor.ServiceDescriptor(
  name='FeaturePipelineRunService',
  full_name='github.com.metaprov.modeld.services.featurepipelinerun.FeaturePipelineRunService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1612,
  serialized_end=2867,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListFeaturePipelineRuns',
    full_name='github.com.metaprov.modeld.services.featurepipelinerun.FeaturePipelineRunService.ListFeaturePipelineRuns',
    index=0,
    containing_service=None,
    input_type=_LISTFEATUREPIPELINERUNREQUEST,
    output_type=_LISTFEATUREPIPELINERUNRESPONSE,
    serialized_options=b'\202\323\344\223\002\031\022\027/v1/featurepipelineruns',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateFeaturePipelineRun',
    full_name='github.com.metaprov.modeld.services.featurepipelinerun.FeaturePipelineRunService.CreateFeaturePipelineRun',
    index=1,
    containing_service=None,
    input_type=_CREATEFEATUREPIPELINERUNREQUEST,
    output_type=_CREATEFEATUREPIPELINERUNRESPONSE,
    serialized_options=b'\202\323\344\223\002-\"\027/v1/featurepipelineruns:\022featurepipelinerun',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetFeaturePipelineRun',
    full_name='github.com.metaprov.modeld.services.featurepipelinerun.FeaturePipelineRunService.GetFeaturePipelineRun',
    index=2,
    containing_service=None,
    input_type=_GETFEATUREPIPELINERUNREQUEST,
    output_type=_GETFEATUREPIPELINERUNRESPONSE,
    serialized_options=b'\202\323\344\223\002 \022\036/v1/featurepipelineruns/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateFeaturePipelineRun',
    full_name='github.com.metaprov.modeld.services.featurepipelinerun.FeaturePipelineRunService.UpdateFeaturePipelineRun',
    index=3,
    containing_service=None,
    input_type=_UPDATEFEATUREPIPELINERUNREQUEST,
    output_type=_UPDATEFEATUREPIPELINERUNRESPONSE,
    serialized_options=b'\202\323\344\223\002B\032,/v1/featurepipelines/{feature.metadata.name}:\022featurepipelinerun',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteFeaturePipelineRun',
    full_name='github.com.metaprov.modeld.services.featurepipelinerun.FeaturePipelineRunService.DeleteFeaturePipelineRun',
    index=4,
    containing_service=None,
    input_type=_DELETEFEATUREPIPELINERUNREQUEST,
    output_type=_DELETEFEATUREPIPELINERUNRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_FEATUREPIPELINERUNSERVICE)

DESCRIPTOR.services_by_name['FeaturePipelineRunService'] = _FEATUREPIPELINERUNSERVICE

# @@protoc_insertion_point(module_scope)
