# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/labelingpipeline/v1/labelingpipeline.proto
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
  name='github.com/metaprov/modeldapi/services/labelingpipeline/v1/labelingpipeline.proto',
  package='github.com.metaprov.modeldapi.services.labelingpipeline.v1',
  syntax='proto3',
  serialized_options=b'Z:github.com/metaprov/modeldapi/services/labelingpipeline/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nQgithub.com/metaprov/modeldapi/services/labelingpipeline/v1/labelingpipeline.proto\x12:github.com.metaprov.modeldapi.services.labelingpipeline.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated.proto\"\xd4\x01\n\x1bListLabelingPipelineRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12s\n\x06labels\x18\x02 \x03(\x0b\x32\x63.github.com.metaprov.modeldapi.services.labelingpipeline.v1.ListLabelingPipelineRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"y\n\x1cListLabelingPipelineResponse\x12Y\n\x05items\x18\x01 \x01(\x0b\x32J.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipelineList\"u\n\x1d\x43reateLabelingPipelineRequest\x12T\n\x04item\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipeline\" \n\x1e\x43reateLabelingPipelineResponse\"u\n\x1dUpdateLabelingPipelineRequest\x12T\n\x04item\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipeline\" \n\x1eUpdateLabelingPipelineResponse\"=\n\x1aGetLabelingPipelineRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x81\x01\n\x1bGetLabelingPipelineResponse\x12T\n\x04item\x18\x01 \x01(\x0b\x32\x46.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipeline\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"@\n\x1d\x44\x65leteLabelingPipelineRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\" \n\x1e\x44\x65leteLabelingPipelineResponse\"\x1f\n\x1dPauseLabelingPipelineResponse\"?\n\x1cPauseLabelingPipelineRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\" \n\x1eResumeLabelingPipelineResponse\"@\n\x1dResumeLabelingPipelineRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t2\xd2\r\n\x17LabelingPipelineService\x12\xe6\x01\n\x15ListLabelingPipelines\x12W.github.com.metaprov.modeldapi.services.labelingpipeline.v1.ListLabelingPipelineRequest\x1aX.github.com.metaprov.modeldapi.services.labelingpipeline.v1.ListLabelingPipelineResponse\"\x1a\x82\xd3\xe4\x93\x02\x14\x12\x12/v1/labelpipelines\x12\xee\x01\n\x16\x43reateLabelingPipeline\x12Y.github.com.metaprov.modeldapi.services.labelingpipeline.v1.CreateLabelingPipelineRequest\x1aZ.github.com.metaprov.modeldapi.services.labelingpipeline.v1.CreateLabelingPipelineResponse\"\x1d\x82\xd3\xe4\x93\x02\x17\"\x12/v1/labelpipelines:\x01*\x12\xe9\x01\n\x13GetLabelingPipeline\x12V.github.com.metaprov.modeldapi.services.labelingpipeline.v1.GetLabelingPipelineRequest\x1aW.github.com.metaprov.modeldapi.services.labelingpipeline.v1.GetLabelingPipelineResponse\"!\x82\xd3\xe4\x93\x02\x1b\x12\x19/v1/labelpipelines/{name}\x12\x84\x02\n\x16UpdateLabelingPipeline\x12Y.github.com.metaprov.modeldapi.services.labelingpipeline.v1.UpdateLabelingPipelineRequest\x1aZ.github.com.metaprov.modeldapi.services.labelingpipeline.v1.UpdateLabelingPipelineResponse\"3\x82\xd3\xe4\x93\x02-\x1a(/v1/labelpipelines/{label.metadata.name}:\x01*\x12\xd1\x01\n\x16\x44\x65leteLabelingPipeline\x12Y.github.com.metaprov.modeldapi.services.labelingpipeline.v1.DeleteLabelingPipelineRequest\x1aZ.github.com.metaprov.modeldapi.services.labelingpipeline.v1.DeleteLabelingPipelineResponse\"\x00\x12\x87\x02\n\x15PauseLabelingPipeline\x12X.github.com.metaprov.modeldapi.services.labelingpipeline.v1.PauseLabelingPipelineRequest\x1aY.github.com.metaprov.modeldapi.services.labelingpipeline.v1.PauseLabelingPipelineResponse\"9\x82\xd3\xe4\x93\x02\x33\x1a./v1/labelpipelines/{label.metadata.name}:pause:\x01*\x12\x8b\x02\n\x16ResumeLabelingPipeline\x12Y.github.com.metaprov.modeldapi.services.labelingpipeline.v1.ResumeLabelingPipelineRequest\x1aZ.github.com.metaprov.modeldapi.services.labelingpipeline.v1.ResumeLabelingPipelineResponse\":\x82\xd3\xe4\x93\x02\x34\x1a//v1/labelpipelines/{label.metadata.name}:resume:\x01*B<Z:github.com/metaprov/modeldapi/services/labelingpipeline/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTLABELINGPIPELINEREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.ListLabelingPipelineRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.ListLabelingPipelineRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.ListLabelingPipelineRequest.LabelsEntry.value', index=1,
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
  serialized_start=413,
  serialized_end=458,
)

_LISTLABELINGPIPELINEREQUEST = _descriptor.Descriptor(
  name='ListLabelingPipelineRequest',
  full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.ListLabelingPipelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.ListLabelingPipelineRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.ListLabelingPipelineRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTLABELINGPIPELINEREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=246,
  serialized_end=458,
)


_LISTLABELINGPIPELINERESPONSE = _descriptor.Descriptor(
  name='ListLabelingPipelineResponse',
  full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.ListLabelingPipelineResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.ListLabelingPipelineResponse.items', index=0,
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
  serialized_start=460,
  serialized_end=581,
)


_CREATELABELINGPIPELINEREQUEST = _descriptor.Descriptor(
  name='CreateLabelingPipelineRequest',
  full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.CreateLabelingPipelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.CreateLabelingPipelineRequest.item', index=0,
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
  serialized_start=583,
  serialized_end=700,
)


_CREATELABELINGPIPELINERESPONSE = _descriptor.Descriptor(
  name='CreateLabelingPipelineResponse',
  full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.CreateLabelingPipelineResponse',
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
  serialized_start=702,
  serialized_end=734,
)


_UPDATELABELINGPIPELINEREQUEST = _descriptor.Descriptor(
  name='UpdateLabelingPipelineRequest',
  full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.UpdateLabelingPipelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.UpdateLabelingPipelineRequest.item', index=0,
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
  serialized_start=736,
  serialized_end=853,
)


_UPDATELABELINGPIPELINERESPONSE = _descriptor.Descriptor(
  name='UpdateLabelingPipelineResponse',
  full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.UpdateLabelingPipelineResponse',
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
  serialized_start=855,
  serialized_end=887,
)


_GETLABELINGPIPELINEREQUEST = _descriptor.Descriptor(
  name='GetLabelingPipelineRequest',
  full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.GetLabelingPipelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.GetLabelingPipelineRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.GetLabelingPipelineRequest.name', index=1,
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
  serialized_start=889,
  serialized_end=950,
)


_GETLABELINGPIPELINERESPONSE = _descriptor.Descriptor(
  name='GetLabelingPipelineResponse',
  full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.GetLabelingPipelineResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.GetLabelingPipelineResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.GetLabelingPipelineResponse.yaml', index=1,
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
  serialized_start=953,
  serialized_end=1082,
)


_DELETELABELINGPIPELINEREQUEST = _descriptor.Descriptor(
  name='DeleteLabelingPipelineRequest',
  full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.DeleteLabelingPipelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.DeleteLabelingPipelineRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.DeleteLabelingPipelineRequest.name', index=1,
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
  serialized_start=1084,
  serialized_end=1148,
)


_DELETELABELINGPIPELINERESPONSE = _descriptor.Descriptor(
  name='DeleteLabelingPipelineResponse',
  full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.DeleteLabelingPipelineResponse',
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
  serialized_start=1150,
  serialized_end=1182,
)


_PAUSELABELINGPIPELINERESPONSE = _descriptor.Descriptor(
  name='PauseLabelingPipelineResponse',
  full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.PauseLabelingPipelineResponse',
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
  serialized_start=1184,
  serialized_end=1215,
)


_PAUSELABELINGPIPELINEREQUEST = _descriptor.Descriptor(
  name='PauseLabelingPipelineRequest',
  full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.PauseLabelingPipelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.PauseLabelingPipelineRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.PauseLabelingPipelineRequest.name', index=1,
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
  serialized_start=1217,
  serialized_end=1280,
)


_RESUMELABELINGPIPELINERESPONSE = _descriptor.Descriptor(
  name='ResumeLabelingPipelineResponse',
  full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.ResumeLabelingPipelineResponse',
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
  serialized_start=1282,
  serialized_end=1314,
)


_RESUMELABELINGPIPELINEREQUEST = _descriptor.Descriptor(
  name='ResumeLabelingPipelineRequest',
  full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.ResumeLabelingPipelineRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.ResumeLabelingPipelineRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.ResumeLabelingPipelineRequest.name', index=1,
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
  serialized_start=1316,
  serialized_end=1380,
)

_LISTLABELINGPIPELINEREQUEST_LABELSENTRY.containing_type = _LISTLABELINGPIPELINEREQUEST
_LISTLABELINGPIPELINEREQUEST.fields_by_name['labels'].message_type = _LISTLABELINGPIPELINEREQUEST_LABELSENTRY
_LISTLABELINGPIPELINERESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._LABELINGPIPELINELIST
_CREATELABELINGPIPELINEREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._LABELINGPIPELINE
_UPDATELABELINGPIPELINEREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._LABELINGPIPELINE
_GETLABELINGPIPELINERESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._LABELINGPIPELINE
DESCRIPTOR.message_types_by_name['ListLabelingPipelineRequest'] = _LISTLABELINGPIPELINEREQUEST
DESCRIPTOR.message_types_by_name['ListLabelingPipelineResponse'] = _LISTLABELINGPIPELINERESPONSE
DESCRIPTOR.message_types_by_name['CreateLabelingPipelineRequest'] = _CREATELABELINGPIPELINEREQUEST
DESCRIPTOR.message_types_by_name['CreateLabelingPipelineResponse'] = _CREATELABELINGPIPELINERESPONSE
DESCRIPTOR.message_types_by_name['UpdateLabelingPipelineRequest'] = _UPDATELABELINGPIPELINEREQUEST
DESCRIPTOR.message_types_by_name['UpdateLabelingPipelineResponse'] = _UPDATELABELINGPIPELINERESPONSE
DESCRIPTOR.message_types_by_name['GetLabelingPipelineRequest'] = _GETLABELINGPIPELINEREQUEST
DESCRIPTOR.message_types_by_name['GetLabelingPipelineResponse'] = _GETLABELINGPIPELINERESPONSE
DESCRIPTOR.message_types_by_name['DeleteLabelingPipelineRequest'] = _DELETELABELINGPIPELINEREQUEST
DESCRIPTOR.message_types_by_name['DeleteLabelingPipelineResponse'] = _DELETELABELINGPIPELINERESPONSE
DESCRIPTOR.message_types_by_name['PauseLabelingPipelineResponse'] = _PAUSELABELINGPIPELINERESPONSE
DESCRIPTOR.message_types_by_name['PauseLabelingPipelineRequest'] = _PAUSELABELINGPIPELINEREQUEST
DESCRIPTOR.message_types_by_name['ResumeLabelingPipelineResponse'] = _RESUMELABELINGPIPELINERESPONSE
DESCRIPTOR.message_types_by_name['ResumeLabelingPipelineRequest'] = _RESUMELABELINGPIPELINEREQUEST
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListLabelingPipelineRequest = _reflection.GeneratedProtocolMessageType('ListLabelingPipelineRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTLABELINGPIPELINEREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipeline.v1.labelingpipeline_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipeline.v1.ListLabelingPipelineRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTLABELINGPIPELINEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipeline.v1.labelingpipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipeline.v1.ListLabelingPipelineRequest)
  })
_sym_db.RegisterMessage(ListLabelingPipelineRequest)
_sym_db.RegisterMessage(ListLabelingPipelineRequest.LabelsEntry)

ListLabelingPipelineResponse = _reflection.GeneratedProtocolMessageType('ListLabelingPipelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTLABELINGPIPELINERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipeline.v1.labelingpipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipeline.v1.ListLabelingPipelineResponse)
  })
_sym_db.RegisterMessage(ListLabelingPipelineResponse)

CreateLabelingPipelineRequest = _reflection.GeneratedProtocolMessageType('CreateLabelingPipelineRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATELABELINGPIPELINEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipeline.v1.labelingpipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipeline.v1.CreateLabelingPipelineRequest)
  })
_sym_db.RegisterMessage(CreateLabelingPipelineRequest)

CreateLabelingPipelineResponse = _reflection.GeneratedProtocolMessageType('CreateLabelingPipelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATELABELINGPIPELINERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipeline.v1.labelingpipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipeline.v1.CreateLabelingPipelineResponse)
  })
_sym_db.RegisterMessage(CreateLabelingPipelineResponse)

UpdateLabelingPipelineRequest = _reflection.GeneratedProtocolMessageType('UpdateLabelingPipelineRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATELABELINGPIPELINEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipeline.v1.labelingpipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipeline.v1.UpdateLabelingPipelineRequest)
  })
_sym_db.RegisterMessage(UpdateLabelingPipelineRequest)

UpdateLabelingPipelineResponse = _reflection.GeneratedProtocolMessageType('UpdateLabelingPipelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATELABELINGPIPELINERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipeline.v1.labelingpipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipeline.v1.UpdateLabelingPipelineResponse)
  })
_sym_db.RegisterMessage(UpdateLabelingPipelineResponse)

GetLabelingPipelineRequest = _reflection.GeneratedProtocolMessageType('GetLabelingPipelineRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETLABELINGPIPELINEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipeline.v1.labelingpipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipeline.v1.GetLabelingPipelineRequest)
  })
_sym_db.RegisterMessage(GetLabelingPipelineRequest)

GetLabelingPipelineResponse = _reflection.GeneratedProtocolMessageType('GetLabelingPipelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETLABELINGPIPELINERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipeline.v1.labelingpipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipeline.v1.GetLabelingPipelineResponse)
  })
_sym_db.RegisterMessage(GetLabelingPipelineResponse)

DeleteLabelingPipelineRequest = _reflection.GeneratedProtocolMessageType('DeleteLabelingPipelineRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETELABELINGPIPELINEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipeline.v1.labelingpipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipeline.v1.DeleteLabelingPipelineRequest)
  })
_sym_db.RegisterMessage(DeleteLabelingPipelineRequest)

DeleteLabelingPipelineResponse = _reflection.GeneratedProtocolMessageType('DeleteLabelingPipelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETELABELINGPIPELINERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipeline.v1.labelingpipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipeline.v1.DeleteLabelingPipelineResponse)
  })
_sym_db.RegisterMessage(DeleteLabelingPipelineResponse)

PauseLabelingPipelineResponse = _reflection.GeneratedProtocolMessageType('PauseLabelingPipelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _PAUSELABELINGPIPELINERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipeline.v1.labelingpipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipeline.v1.PauseLabelingPipelineResponse)
  })
_sym_db.RegisterMessage(PauseLabelingPipelineResponse)

PauseLabelingPipelineRequest = _reflection.GeneratedProtocolMessageType('PauseLabelingPipelineRequest', (_message.Message,), {
  'DESCRIPTOR' : _PAUSELABELINGPIPELINEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipeline.v1.labelingpipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipeline.v1.PauseLabelingPipelineRequest)
  })
_sym_db.RegisterMessage(PauseLabelingPipelineRequest)

ResumeLabelingPipelineResponse = _reflection.GeneratedProtocolMessageType('ResumeLabelingPipelineResponse', (_message.Message,), {
  'DESCRIPTOR' : _RESUMELABELINGPIPELINERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipeline.v1.labelingpipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipeline.v1.ResumeLabelingPipelineResponse)
  })
_sym_db.RegisterMessage(ResumeLabelingPipelineResponse)

ResumeLabelingPipelineRequest = _reflection.GeneratedProtocolMessageType('ResumeLabelingPipelineRequest', (_message.Message,), {
  'DESCRIPTOR' : _RESUMELABELINGPIPELINEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipeline.v1.labelingpipeline_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipeline.v1.ResumeLabelingPipelineRequest)
  })
_sym_db.RegisterMessage(ResumeLabelingPipelineRequest)


DESCRIPTOR._options = None
_LISTLABELINGPIPELINEREQUEST_LABELSENTRY._options = None

_LABELINGPIPELINESERVICE = _descriptor.ServiceDescriptor(
  name='LabelingPipelineService',
  full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1383,
  serialized_end=3129,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListLabelingPipelines',
    full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService.ListLabelingPipelines',
    index=0,
    containing_service=None,
    input_type=_LISTLABELINGPIPELINEREQUEST,
    output_type=_LISTLABELINGPIPELINERESPONSE,
    serialized_options=b'\202\323\344\223\002\024\022\022/v1/labelpipelines',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateLabelingPipeline',
    full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService.CreateLabelingPipeline',
    index=1,
    containing_service=None,
    input_type=_CREATELABELINGPIPELINEREQUEST,
    output_type=_CREATELABELINGPIPELINERESPONSE,
    serialized_options=b'\202\323\344\223\002\027\"\022/v1/labelpipelines:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetLabelingPipeline',
    full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService.GetLabelingPipeline',
    index=2,
    containing_service=None,
    input_type=_GETLABELINGPIPELINEREQUEST,
    output_type=_GETLABELINGPIPELINERESPONSE,
    serialized_options=b'\202\323\344\223\002\033\022\031/v1/labelpipelines/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateLabelingPipeline',
    full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService.UpdateLabelingPipeline',
    index=3,
    containing_service=None,
    input_type=_UPDATELABELINGPIPELINEREQUEST,
    output_type=_UPDATELABELINGPIPELINERESPONSE,
    serialized_options=b'\202\323\344\223\002-\032(/v1/labelpipelines/{label.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteLabelingPipeline',
    full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService.DeleteLabelingPipeline',
    index=4,
    containing_service=None,
    input_type=_DELETELABELINGPIPELINEREQUEST,
    output_type=_DELETELABELINGPIPELINERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='PauseLabelingPipeline',
    full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService.PauseLabelingPipeline',
    index=5,
    containing_service=None,
    input_type=_PAUSELABELINGPIPELINEREQUEST,
    output_type=_PAUSELABELINGPIPELINERESPONSE,
    serialized_options=b'\202\323\344\223\0023\032./v1/labelpipelines/{label.metadata.name}:pause:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ResumeLabelingPipeline',
    full_name='github.com.metaprov.modeldapi.services.labelingpipeline.v1.LabelingPipelineService.ResumeLabelingPipeline',
    index=6,
    containing_service=None,
    input_type=_RESUMELABELINGPIPELINEREQUEST,
    output_type=_RESUMELABELINGPIPELINERESPONSE,
    serialized_options=b'\202\323\344\223\0024\032//v1/labelpipelines/{label.metadata.name}:resume:\001*',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_LABELINGPIPELINESERVICE)

DESCRIPTOR.services_by_name['LabelingPipelineService'] = _LABELINGPIPELINESERVICE

# @@protoc_insertion_point(module_scope)
