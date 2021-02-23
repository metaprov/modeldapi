# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/labelingpipelinerun/v1/labelingpipelinerun.proto
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
  name='github.com/metaprov/modeldapi/services/labelingpipelinerun/v1/labelingpipelinerun.proto',
  package='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1',
  syntax='proto3',
  serialized_options=b'Z=github.com/metaprov/modeldapi/services/labelingpipelinerun/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nWgithub.com/metaprov/modeldapi/services/labelingpipelinerun/v1/labelingpipelinerun.proto\x12=github.com.metaprov.modeldapi.services.labelingpipelinerun.v1\x1a\x1cgoogle/api/annotations.proto\x1a\x44github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated.proto\"\xdd\x01\n\x1eListLabelingPipelineRunRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12y\n\x06labels\x18\x02 \x03(\x0b\x32i.github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.ListLabelingPipelineRunRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"\x7f\n\x1fListLabelingPipelineRunResponse\x12\\\n\x05items\x18\x01 \x01(\x0b\x32M.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipelineRunList\"{\n CreateLabelingPipelineRunRequest\x12W\n\x04item\x18\x01 \x01(\x0b\x32I.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipelineRun\"#\n!CreateLabelingPipelineRunResponse\"{\n UpdateLabelingPipelineRunRequest\x12W\n\x04item\x18\x01 \x01(\x0b\x32I.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipelineRun\"#\n!UpdateLabelingPipelineRunResponse\"@\n\x1dGetLabelingPipelineRunRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x87\x01\n\x1eGetLabelingPipelineRunResponse\x12W\n\x04item\x18\x01 \x01(\x0b\x32I.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.LabelingPipelineRun\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"C\n DeleteLabelingPipelineRunRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"#\n!DeleteLabelingPipelineRunResponse2\xc1\n\n\x1aLabelingPipelineRunService\x12\xfb\x01\n\x18ListLabelingPipelineRuns\x12].github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.ListLabelingPipelineRunRequest\x1a^.github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.ListLabelingPipelineRunResponse\" \x82\xd3\xe4\x93\x02\x1a\x12\x18/v1/labelingpipelineruns\x12\x95\x02\n\x19\x43reateLabelingPipelineRun\x12_.github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.CreateLabelingPipelineRunRequest\x1a`.github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.CreateLabelingPipelineRunResponse\"5\x82\xd3\xe4\x93\x02/\"\x18/v1/labelingpipelineruns:\x13labelingpipelinerun\x12\xfe\x01\n\x16GetLabelingPipelineRun\x12\\.github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.GetLabelingPipelineRunRequest\x1a].github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.GetLabelingPipelineRunResponse\"\'\x82\xd3\xe4\x93\x02!\x12\x1f/v1/labelingpipelineruns/{name}\x12\xa8\x02\n\x19UpdateLabelingPipelineRun\x12_.github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.UpdateLabelingPipelineRunRequest\x1a`.github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.UpdateLabelingPipelineRunResponse\"H\x82\xd3\xe4\x93\x02\x42\x1a+/v1/labelingpipelines/{label.metadata.name}:\x13labelingpipelinerun\x12\xe0\x01\n\x19\x44\x65leteLabelingPipelineRun\x12_.github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.DeleteLabelingPipelineRunRequest\x1a`.github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.DeleteLabelingPipelineRunResponse\"\x00\x42?Z=github.com/metaprov/modeldapi/services/labelingpipelinerun/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTLABELINGPIPELINERUNREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.ListLabelingPipelineRunRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.ListLabelingPipelineRunRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.ListLabelingPipelineRunRequest.LabelsEntry.value', index=1,
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
  serialized_start=431,
  serialized_end=476,
)

_LISTLABELINGPIPELINERUNREQUEST = _descriptor.Descriptor(
  name='ListLabelingPipelineRunRequest',
  full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.ListLabelingPipelineRunRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.ListLabelingPipelineRunRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.ListLabelingPipelineRunRequest.labels', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTLABELINGPIPELINERUNREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=255,
  serialized_end=476,
)


_LISTLABELINGPIPELINERUNRESPONSE = _descriptor.Descriptor(
  name='ListLabelingPipelineRunResponse',
  full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.ListLabelingPipelineRunResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.ListLabelingPipelineRunResponse.items', index=0,
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
  serialized_start=478,
  serialized_end=605,
)


_CREATELABELINGPIPELINERUNREQUEST = _descriptor.Descriptor(
  name='CreateLabelingPipelineRunRequest',
  full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.CreateLabelingPipelineRunRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.CreateLabelingPipelineRunRequest.item', index=0,
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
  serialized_start=607,
  serialized_end=730,
)


_CREATELABELINGPIPELINERUNRESPONSE = _descriptor.Descriptor(
  name='CreateLabelingPipelineRunResponse',
  full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.CreateLabelingPipelineRunResponse',
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
  serialized_start=732,
  serialized_end=767,
)


_UPDATELABELINGPIPELINERUNREQUEST = _descriptor.Descriptor(
  name='UpdateLabelingPipelineRunRequest',
  full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.UpdateLabelingPipelineRunRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.UpdateLabelingPipelineRunRequest.item', index=0,
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
  serialized_start=769,
  serialized_end=892,
)


_UPDATELABELINGPIPELINERUNRESPONSE = _descriptor.Descriptor(
  name='UpdateLabelingPipelineRunResponse',
  full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.UpdateLabelingPipelineRunResponse',
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
  serialized_start=894,
  serialized_end=929,
)


_GETLABELINGPIPELINERUNREQUEST = _descriptor.Descriptor(
  name='GetLabelingPipelineRunRequest',
  full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.GetLabelingPipelineRunRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.GetLabelingPipelineRunRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.GetLabelingPipelineRunRequest.name', index=1,
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
  serialized_start=931,
  serialized_end=995,
)


_GETLABELINGPIPELINERUNRESPONSE = _descriptor.Descriptor(
  name='GetLabelingPipelineRunResponse',
  full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.GetLabelingPipelineRunResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.GetLabelingPipelineRunResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.GetLabelingPipelineRunResponse.yaml', index=1,
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
  serialized_start=998,
  serialized_end=1133,
)


_DELETELABELINGPIPELINERUNREQUEST = _descriptor.Descriptor(
  name='DeleteLabelingPipelineRunRequest',
  full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.DeleteLabelingPipelineRunRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.DeleteLabelingPipelineRunRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.DeleteLabelingPipelineRunRequest.name', index=1,
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
  serialized_start=1135,
  serialized_end=1202,
)


_DELETELABELINGPIPELINERUNRESPONSE = _descriptor.Descriptor(
  name='DeleteLabelingPipelineRunResponse',
  full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.DeleteLabelingPipelineRunResponse',
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
  serialized_start=1204,
  serialized_end=1239,
)

_LISTLABELINGPIPELINERUNREQUEST_LABELSENTRY.containing_type = _LISTLABELINGPIPELINERUNREQUEST
_LISTLABELINGPIPELINERUNREQUEST.fields_by_name['labels'].message_type = _LISTLABELINGPIPELINERUNREQUEST_LABELSENTRY
_LISTLABELINGPIPELINERUNRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._LABELINGPIPELINERUNLIST
_CREATELABELINGPIPELINERUNREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._LABELINGPIPELINERUN
_UPDATELABELINGPIPELINERUNREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._LABELINGPIPELINERUN
_GETLABELINGPIPELINERUNRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._LABELINGPIPELINERUN
DESCRIPTOR.message_types_by_name['ListLabelingPipelineRunRequest'] = _LISTLABELINGPIPELINERUNREQUEST
DESCRIPTOR.message_types_by_name['ListLabelingPipelineRunResponse'] = _LISTLABELINGPIPELINERUNRESPONSE
DESCRIPTOR.message_types_by_name['CreateLabelingPipelineRunRequest'] = _CREATELABELINGPIPELINERUNREQUEST
DESCRIPTOR.message_types_by_name['CreateLabelingPipelineRunResponse'] = _CREATELABELINGPIPELINERUNRESPONSE
DESCRIPTOR.message_types_by_name['UpdateLabelingPipelineRunRequest'] = _UPDATELABELINGPIPELINERUNREQUEST
DESCRIPTOR.message_types_by_name['UpdateLabelingPipelineRunResponse'] = _UPDATELABELINGPIPELINERUNRESPONSE
DESCRIPTOR.message_types_by_name['GetLabelingPipelineRunRequest'] = _GETLABELINGPIPELINERUNREQUEST
DESCRIPTOR.message_types_by_name['GetLabelingPipelineRunResponse'] = _GETLABELINGPIPELINERUNRESPONSE
DESCRIPTOR.message_types_by_name['DeleteLabelingPipelineRunRequest'] = _DELETELABELINGPIPELINERUNREQUEST
DESCRIPTOR.message_types_by_name['DeleteLabelingPipelineRunResponse'] = _DELETELABELINGPIPELINERUNRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListLabelingPipelineRunRequest = _reflection.GeneratedProtocolMessageType('ListLabelingPipelineRunRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTLABELINGPIPELINERUNREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.labelingpipelinerun_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.ListLabelingPipelineRunRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTLABELINGPIPELINERUNREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.labelingpipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.ListLabelingPipelineRunRequest)
  })
_sym_db.RegisterMessage(ListLabelingPipelineRunRequest)
_sym_db.RegisterMessage(ListLabelingPipelineRunRequest.LabelsEntry)

ListLabelingPipelineRunResponse = _reflection.GeneratedProtocolMessageType('ListLabelingPipelineRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTLABELINGPIPELINERUNRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.labelingpipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.ListLabelingPipelineRunResponse)
  })
_sym_db.RegisterMessage(ListLabelingPipelineRunResponse)

CreateLabelingPipelineRunRequest = _reflection.GeneratedProtocolMessageType('CreateLabelingPipelineRunRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATELABELINGPIPELINERUNREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.labelingpipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.CreateLabelingPipelineRunRequest)
  })
_sym_db.RegisterMessage(CreateLabelingPipelineRunRequest)

CreateLabelingPipelineRunResponse = _reflection.GeneratedProtocolMessageType('CreateLabelingPipelineRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATELABELINGPIPELINERUNRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.labelingpipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.CreateLabelingPipelineRunResponse)
  })
_sym_db.RegisterMessage(CreateLabelingPipelineRunResponse)

UpdateLabelingPipelineRunRequest = _reflection.GeneratedProtocolMessageType('UpdateLabelingPipelineRunRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATELABELINGPIPELINERUNREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.labelingpipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.UpdateLabelingPipelineRunRequest)
  })
_sym_db.RegisterMessage(UpdateLabelingPipelineRunRequest)

UpdateLabelingPipelineRunResponse = _reflection.GeneratedProtocolMessageType('UpdateLabelingPipelineRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATELABELINGPIPELINERUNRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.labelingpipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.UpdateLabelingPipelineRunResponse)
  })
_sym_db.RegisterMessage(UpdateLabelingPipelineRunResponse)

GetLabelingPipelineRunRequest = _reflection.GeneratedProtocolMessageType('GetLabelingPipelineRunRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETLABELINGPIPELINERUNREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.labelingpipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.GetLabelingPipelineRunRequest)
  })
_sym_db.RegisterMessage(GetLabelingPipelineRunRequest)

GetLabelingPipelineRunResponse = _reflection.GeneratedProtocolMessageType('GetLabelingPipelineRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETLABELINGPIPELINERUNRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.labelingpipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.GetLabelingPipelineRunResponse)
  })
_sym_db.RegisterMessage(GetLabelingPipelineRunResponse)

DeleteLabelingPipelineRunRequest = _reflection.GeneratedProtocolMessageType('DeleteLabelingPipelineRunRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETELABELINGPIPELINERUNREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.labelingpipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.DeleteLabelingPipelineRunRequest)
  })
_sym_db.RegisterMessage(DeleteLabelingPipelineRunRequest)

DeleteLabelingPipelineRunResponse = _reflection.GeneratedProtocolMessageType('DeleteLabelingPipelineRunResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETELABELINGPIPELINERUNRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.labelingpipelinerun_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.DeleteLabelingPipelineRunResponse)
  })
_sym_db.RegisterMessage(DeleteLabelingPipelineRunResponse)


DESCRIPTOR._options = None
_LISTLABELINGPIPELINERUNREQUEST_LABELSENTRY._options = None

_LABELINGPIPELINERUNSERVICE = _descriptor.ServiceDescriptor(
  name='LabelingPipelineRunService',
  full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1242,
  serialized_end=2587,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListLabelingPipelineRuns',
    full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService.ListLabelingPipelineRuns',
    index=0,
    containing_service=None,
    input_type=_LISTLABELINGPIPELINERUNREQUEST,
    output_type=_LISTLABELINGPIPELINERUNRESPONSE,
    serialized_options=b'\202\323\344\223\002\032\022\030/v1/labelingpipelineruns',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateLabelingPipelineRun',
    full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService.CreateLabelingPipelineRun',
    index=1,
    containing_service=None,
    input_type=_CREATELABELINGPIPELINERUNREQUEST,
    output_type=_CREATELABELINGPIPELINERUNRESPONSE,
    serialized_options=b'\202\323\344\223\002/\"\030/v1/labelingpipelineruns:\023labelingpipelinerun',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetLabelingPipelineRun',
    full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService.GetLabelingPipelineRun',
    index=2,
    containing_service=None,
    input_type=_GETLABELINGPIPELINERUNREQUEST,
    output_type=_GETLABELINGPIPELINERUNRESPONSE,
    serialized_options=b'\202\323\344\223\002!\022\037/v1/labelingpipelineruns/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateLabelingPipelineRun',
    full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService.UpdateLabelingPipelineRun',
    index=3,
    containing_service=None,
    input_type=_UPDATELABELINGPIPELINERUNREQUEST,
    output_type=_UPDATELABELINGPIPELINERUNRESPONSE,
    serialized_options=b'\202\323\344\223\002B\032+/v1/labelingpipelines/{label.metadata.name}:\023labelingpipelinerun',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteLabelingPipelineRun',
    full_name='github.com.metaprov.modeldapi.services.labelingpipelinerun.v1.LabelingPipelineRunService.DeleteLabelingPipelineRun',
    index=4,
    containing_service=None,
    input_type=_DELETELABELINGPIPELINERUNREQUEST,
    output_type=_DELETELABELINGPIPELINERUNRESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_LABELINGPIPELINERUNSERVICE)

DESCRIPTOR.services_by_name['LabelingPipelineRunService'] = _LABELINGPIPELINERUNSERVICE

# @@protoc_insertion_point(module_scope)
