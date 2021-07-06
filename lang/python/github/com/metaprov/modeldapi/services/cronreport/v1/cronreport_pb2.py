# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/cronreport/v1/cronreport.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modeldapi/services/cronreport/v1/cronreport.proto',
  package='github.com.metaprov.modeldapi.services.cronreport.v1',
  syntax='proto3',
  serialized_options=b'Z4github.com/metaprov/modeldapi/services/cronreport/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\nEgithub.com/metaprov/modeldapi/services/cronreport/v1/cronreport.proto\x12\x34github.com.metaprov.modeldapi.services.cronreport.v1\x1a\x1cgoogle/api/annotations.proto\x1aHgithub.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated.proto\"\xd2\x01\n\x16ListCronReportsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12h\n\x06labels\x18\x03 \x03(\x0b\x32X.github.com.metaprov.modeldapi.services.cronreport.v1.ListCronReportsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"r\n\x17ListCronReportsResponse\x12W\n\x05items\x18\x01 \x01(\x0b\x32H.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CronReportList\"\x1a\n\x18\x43reateCronReportResponse\"m\n\x17\x43reateCronReportRequest\x12R\n\x04item\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CronReport\"m\n\x17UpdateCronReportRequest\x12R\n\x04item\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CronReport\"\x1a\n\x18UpdateCronReportResponse\"7\n\x14GetCronReportRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"y\n\x15GetCronReportResponse\x12R\n\x04item\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CronReport\x12\x0c\n\x04yaml\x18\x02 \x01(\t\":\n\x17\x44\x65leteCronReportRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1a\n\x18\x44\x65leteCronReportResponse\"9\n\x16PauseCronReportRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x19\n\x17PauseCronReportResponse\":\n\x17ResumeCronReportRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x1a\n\x18ResumeCronReportResponse\"j\n\x14RunCronReportRequest\x12R\n\x04item\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.CronReport\"\x17\n\x15RunCronReportResponse2\xb4\r\n\x11\x43ronReportService\x12\xc7\x01\n\x0fListCronReports\x12L.github.com.metaprov.modeldapi.services.cronreport.v1.ListCronReportsRequest\x1aM.github.com.metaprov.modeldapi.services.cronreport.v1.ListCronReportsResponse\"\x17\x82\xd3\xe4\x93\x02\x11\x12\x0f/v1/cronreports\x12\xcd\x01\n\x10\x43reateCronReport\x12M.github.com.metaprov.modeldapi.services.cronreport.v1.CreateCronReportRequest\x1aN.github.com.metaprov.modeldapi.services.cronreport.v1.CreateCronReportResponse\"\x1a\x82\xd3\xe4\x93\x02\x14\"\x0f/v1/cronreports:\x01*\x12\xc8\x01\n\rGetCronReport\x12J.github.com.metaprov.modeldapi.services.cronreport.v1.GetCronReportRequest\x1aK.github.com.metaprov.modeldapi.services.cronreport.v1.GetCronReportResponse\"\x1e\x82\xd3\xe4\x93\x02\x18\x12\x16/v1/cronreports/{name}\x12\xe8\x01\n\x10UpdateCronReport\x12M.github.com.metaprov.modeldapi.services.cronreport.v1.UpdateCronReportRequest\x1aN.github.com.metaprov.modeldapi.services.cronreport.v1.UpdateCronReportResponse\"5\x82\xd3\xe4\x93\x02/\x1a*/v1/cronreports/{cronreport.metadata.name}:\x01*\x12\xd1\x01\n\x10\x44\x65leteCronReport\x12M.github.com.metaprov.modeldapi.services.cronreport.v1.DeleteCronReportRequest\x1aN.github.com.metaprov.modeldapi.services.cronreport.v1.DeleteCronReportResponse\"\x1e\x82\xd3\xe4\x93\x02\x18*\x16/v1/cronreports/{name}\x12\xc8\x01\n\tRunReport\x12J.github.com.metaprov.modeldapi.services.cronreport.v1.RunCronReportRequest\x1aK.github.com.metaprov.modeldapi.services.cronreport.v1.RunCronReportResponse\"\"\x82\xd3\xe4\x93\x02\x1c\"\x1a/v1/cronreports/{name}:run\x12\xd4\x01\n\x0fPauseCronReport\x12L.github.com.metaprov.modeldapi.services.cronreport.v1.PauseCronReportRequest\x1aM.github.com.metaprov.modeldapi.services.cronreport.v1.PauseCronReportResponse\"$\x82\xd3\xe4\x93\x02\x1e\"\x1c/v1/cronreports/{name}:pause\x12\xd8\x01\n\x10ResumeCronReport\x12M.github.com.metaprov.modeldapi.services.cronreport.v1.ResumeCronReportRequest\x1aN.github.com.metaprov.modeldapi.services.cronreport.v1.ResumeCronReportResponse\"%\x82\xd3\xe4\x93\x02\x1f\"\x1d/v1/cronreports/{name}:resumeB6Z4github.com/metaprov/modeldapi/services/cronreport/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTCRONREPORTSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.ListCronReportsRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.ListCronReportsRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.ListCronReportsRequest.LabelsEntry.value', index=1,
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
  serialized_start=397,
  serialized_end=442,
)

_LISTCRONREPORTSREQUEST = _descriptor.Descriptor(
  name='ListCronReportsRequest',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.ListCronReportsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.ListCronReportsRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.ListCronReportsRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.ListCronReportsRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTCRONREPORTSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=232,
  serialized_end=442,
)


_LISTCRONREPORTSRESPONSE = _descriptor.Descriptor(
  name='ListCronReportsResponse',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.ListCronReportsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.ListCronReportsResponse.items', index=0,
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
  serialized_start=444,
  serialized_end=558,
)


_CREATECRONREPORTRESPONSE = _descriptor.Descriptor(
  name='CreateCronReportResponse',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.CreateCronReportResponse',
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
  serialized_start=560,
  serialized_end=586,
)


_CREATECRONREPORTREQUEST = _descriptor.Descriptor(
  name='CreateCronReportRequest',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.CreateCronReportRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.CreateCronReportRequest.item', index=0,
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
  serialized_start=588,
  serialized_end=697,
)


_UPDATECRONREPORTREQUEST = _descriptor.Descriptor(
  name='UpdateCronReportRequest',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.UpdateCronReportRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.UpdateCronReportRequest.item', index=0,
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
  serialized_start=699,
  serialized_end=808,
)


_UPDATECRONREPORTRESPONSE = _descriptor.Descriptor(
  name='UpdateCronReportResponse',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.UpdateCronReportResponse',
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
  serialized_start=810,
  serialized_end=836,
)


_GETCRONREPORTREQUEST = _descriptor.Descriptor(
  name='GetCronReportRequest',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.GetCronReportRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.GetCronReportRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.GetCronReportRequest.name', index=1,
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
  serialized_start=838,
  serialized_end=893,
)


_GETCRONREPORTRESPONSE = _descriptor.Descriptor(
  name='GetCronReportResponse',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.GetCronReportResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.GetCronReportResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.GetCronReportResponse.yaml', index=1,
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
  serialized_start=895,
  serialized_end=1016,
)


_DELETECRONREPORTREQUEST = _descriptor.Descriptor(
  name='DeleteCronReportRequest',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.DeleteCronReportRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.DeleteCronReportRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.DeleteCronReportRequest.name', index=1,
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
  serialized_start=1018,
  serialized_end=1076,
)


_DELETECRONREPORTRESPONSE = _descriptor.Descriptor(
  name='DeleteCronReportResponse',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.DeleteCronReportResponse',
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
  serialized_start=1078,
  serialized_end=1104,
)


_PAUSECRONREPORTREQUEST = _descriptor.Descriptor(
  name='PauseCronReportRequest',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.PauseCronReportRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.PauseCronReportRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.PauseCronReportRequest.name', index=1,
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
  serialized_start=1106,
  serialized_end=1163,
)


_PAUSECRONREPORTRESPONSE = _descriptor.Descriptor(
  name='PauseCronReportResponse',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.PauseCronReportResponse',
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
  serialized_start=1165,
  serialized_end=1190,
)


_RESUMECRONREPORTREQUEST = _descriptor.Descriptor(
  name='ResumeCronReportRequest',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.ResumeCronReportRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.ResumeCronReportRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.ResumeCronReportRequest.name', index=1,
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
  serialized_start=1192,
  serialized_end=1250,
)


_RESUMECRONREPORTRESPONSE = _descriptor.Descriptor(
  name='ResumeCronReportResponse',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.ResumeCronReportResponse',
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
  serialized_start=1252,
  serialized_end=1278,
)


_RUNCRONREPORTREQUEST = _descriptor.Descriptor(
  name='RunCronReportRequest',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.RunCronReportRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.cronreport.v1.RunCronReportRequest.item', index=0,
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
  serialized_start=1280,
  serialized_end=1386,
)


_RUNCRONREPORTRESPONSE = _descriptor.Descriptor(
  name='RunCronReportResponse',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.RunCronReportResponse',
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
  serialized_start=1388,
  serialized_end=1411,
)

_LISTCRONREPORTSREQUEST_LABELSENTRY.containing_type = _LISTCRONREPORTSREQUEST
_LISTCRONREPORTSREQUEST.fields_by_name['labels'].message_type = _LISTCRONREPORTSREQUEST_LABELSENTRY
_LISTCRONREPORTSRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._CRONREPORTLIST
_CREATECRONREPORTREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._CRONREPORT
_UPDATECRONREPORTREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._CRONREPORT
_GETCRONREPORTRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._CRONREPORT
_RUNCRONREPORTREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._CRONREPORT
DESCRIPTOR.message_types_by_name['ListCronReportsRequest'] = _LISTCRONREPORTSREQUEST
DESCRIPTOR.message_types_by_name['ListCronReportsResponse'] = _LISTCRONREPORTSRESPONSE
DESCRIPTOR.message_types_by_name['CreateCronReportResponse'] = _CREATECRONREPORTRESPONSE
DESCRIPTOR.message_types_by_name['CreateCronReportRequest'] = _CREATECRONREPORTREQUEST
DESCRIPTOR.message_types_by_name['UpdateCronReportRequest'] = _UPDATECRONREPORTREQUEST
DESCRIPTOR.message_types_by_name['UpdateCronReportResponse'] = _UPDATECRONREPORTRESPONSE
DESCRIPTOR.message_types_by_name['GetCronReportRequest'] = _GETCRONREPORTREQUEST
DESCRIPTOR.message_types_by_name['GetCronReportResponse'] = _GETCRONREPORTRESPONSE
DESCRIPTOR.message_types_by_name['DeleteCronReportRequest'] = _DELETECRONREPORTREQUEST
DESCRIPTOR.message_types_by_name['DeleteCronReportResponse'] = _DELETECRONREPORTRESPONSE
DESCRIPTOR.message_types_by_name['PauseCronReportRequest'] = _PAUSECRONREPORTREQUEST
DESCRIPTOR.message_types_by_name['PauseCronReportResponse'] = _PAUSECRONREPORTRESPONSE
DESCRIPTOR.message_types_by_name['ResumeCronReportRequest'] = _RESUMECRONREPORTREQUEST
DESCRIPTOR.message_types_by_name['ResumeCronReportResponse'] = _RESUMECRONREPORTRESPONSE
DESCRIPTOR.message_types_by_name['RunCronReportRequest'] = _RUNCRONREPORTREQUEST
DESCRIPTOR.message_types_by_name['RunCronReportResponse'] = _RUNCRONREPORTRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListCronReportsRequest = _reflection.GeneratedProtocolMessageType('ListCronReportsRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTCRONREPORTSREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.ListCronReportsRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTCRONREPORTSREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.ListCronReportsRequest)
  })
_sym_db.RegisterMessage(ListCronReportsRequest)
_sym_db.RegisterMessage(ListCronReportsRequest.LabelsEntry)

ListCronReportsResponse = _reflection.GeneratedProtocolMessageType('ListCronReportsResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTCRONREPORTSRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.ListCronReportsResponse)
  })
_sym_db.RegisterMessage(ListCronReportsResponse)

CreateCronReportResponse = _reflection.GeneratedProtocolMessageType('CreateCronReportResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATECRONREPORTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.CreateCronReportResponse)
  })
_sym_db.RegisterMessage(CreateCronReportResponse)

CreateCronReportRequest = _reflection.GeneratedProtocolMessageType('CreateCronReportRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATECRONREPORTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.CreateCronReportRequest)
  })
_sym_db.RegisterMessage(CreateCronReportRequest)

UpdateCronReportRequest = _reflection.GeneratedProtocolMessageType('UpdateCronReportRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATECRONREPORTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.UpdateCronReportRequest)
  })
_sym_db.RegisterMessage(UpdateCronReportRequest)

UpdateCronReportResponse = _reflection.GeneratedProtocolMessageType('UpdateCronReportResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATECRONREPORTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.UpdateCronReportResponse)
  })
_sym_db.RegisterMessage(UpdateCronReportResponse)

GetCronReportRequest = _reflection.GeneratedProtocolMessageType('GetCronReportRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETCRONREPORTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.GetCronReportRequest)
  })
_sym_db.RegisterMessage(GetCronReportRequest)

GetCronReportResponse = _reflection.GeneratedProtocolMessageType('GetCronReportResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETCRONREPORTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.GetCronReportResponse)
  })
_sym_db.RegisterMessage(GetCronReportResponse)

DeleteCronReportRequest = _reflection.GeneratedProtocolMessageType('DeleteCronReportRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETECRONREPORTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.DeleteCronReportRequest)
  })
_sym_db.RegisterMessage(DeleteCronReportRequest)

DeleteCronReportResponse = _reflection.GeneratedProtocolMessageType('DeleteCronReportResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETECRONREPORTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.DeleteCronReportResponse)
  })
_sym_db.RegisterMessage(DeleteCronReportResponse)

PauseCronReportRequest = _reflection.GeneratedProtocolMessageType('PauseCronReportRequest', (_message.Message,), {
  'DESCRIPTOR' : _PAUSECRONREPORTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.PauseCronReportRequest)
  })
_sym_db.RegisterMessage(PauseCronReportRequest)

PauseCronReportResponse = _reflection.GeneratedProtocolMessageType('PauseCronReportResponse', (_message.Message,), {
  'DESCRIPTOR' : _PAUSECRONREPORTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.PauseCronReportResponse)
  })
_sym_db.RegisterMessage(PauseCronReportResponse)

ResumeCronReportRequest = _reflection.GeneratedProtocolMessageType('ResumeCronReportRequest', (_message.Message,), {
  'DESCRIPTOR' : _RESUMECRONREPORTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.ResumeCronReportRequest)
  })
_sym_db.RegisterMessage(ResumeCronReportRequest)

ResumeCronReportResponse = _reflection.GeneratedProtocolMessageType('ResumeCronReportResponse', (_message.Message,), {
  'DESCRIPTOR' : _RESUMECRONREPORTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.ResumeCronReportResponse)
  })
_sym_db.RegisterMessage(ResumeCronReportResponse)

RunCronReportRequest = _reflection.GeneratedProtocolMessageType('RunCronReportRequest', (_message.Message,), {
  'DESCRIPTOR' : _RUNCRONREPORTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.RunCronReportRequest)
  })
_sym_db.RegisterMessage(RunCronReportRequest)

RunCronReportResponse = _reflection.GeneratedProtocolMessageType('RunCronReportResponse', (_message.Message,), {
  'DESCRIPTOR' : _RUNCRONREPORTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.cronreport.v1.cronreport_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.cronreport.v1.RunCronReportResponse)
  })
_sym_db.RegisterMessage(RunCronReportResponse)


DESCRIPTOR._options = None
_LISTCRONREPORTSREQUEST_LABELSENTRY._options = None

_CRONREPORTSERVICE = _descriptor.ServiceDescriptor(
  name='CronReportService',
  full_name='github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1414,
  serialized_end=3130,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListCronReports',
    full_name='github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService.ListCronReports',
    index=0,
    containing_service=None,
    input_type=_LISTCRONREPORTSREQUEST,
    output_type=_LISTCRONREPORTSRESPONSE,
    serialized_options=b'\202\323\344\223\002\021\022\017/v1/cronreports',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateCronReport',
    full_name='github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService.CreateCronReport',
    index=1,
    containing_service=None,
    input_type=_CREATECRONREPORTREQUEST,
    output_type=_CREATECRONREPORTRESPONSE,
    serialized_options=b'\202\323\344\223\002\024\"\017/v1/cronreports:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetCronReport',
    full_name='github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService.GetCronReport',
    index=2,
    containing_service=None,
    input_type=_GETCRONREPORTREQUEST,
    output_type=_GETCRONREPORTRESPONSE,
    serialized_options=b'\202\323\344\223\002\030\022\026/v1/cronreports/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateCronReport',
    full_name='github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService.UpdateCronReport',
    index=3,
    containing_service=None,
    input_type=_UPDATECRONREPORTREQUEST,
    output_type=_UPDATECRONREPORTRESPONSE,
    serialized_options=b'\202\323\344\223\002/\032*/v1/cronreports/{cronreport.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteCronReport',
    full_name='github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService.DeleteCronReport',
    index=4,
    containing_service=None,
    input_type=_DELETECRONREPORTREQUEST,
    output_type=_DELETECRONREPORTRESPONSE,
    serialized_options=b'\202\323\344\223\002\030*\026/v1/cronreports/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='RunReport',
    full_name='github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService.RunReport',
    index=5,
    containing_service=None,
    input_type=_RUNCRONREPORTREQUEST,
    output_type=_RUNCRONREPORTRESPONSE,
    serialized_options=b'\202\323\344\223\002\034\"\032/v1/cronreports/{name}:run',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='PauseCronReport',
    full_name='github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService.PauseCronReport',
    index=6,
    containing_service=None,
    input_type=_PAUSECRONREPORTREQUEST,
    output_type=_PAUSECRONREPORTRESPONSE,
    serialized_options=b'\202\323\344\223\002\036\"\034/v1/cronreports/{name}:pause',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ResumeCronReport',
    full_name='github.com.metaprov.modeldapi.services.cronreport.v1.CronReportService.ResumeCronReport',
    index=7,
    containing_service=None,
    input_type=_RESUMECRONREPORTREQUEST,
    output_type=_RESUMECRONREPORTRESPONSE,
    serialized_options=b'\202\323\344\223\002\037\"\035/v1/cronreports/{name}:resume',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_CRONREPORTSERVICE)

DESCRIPTOR.services_by_name['CronReportService'] = _CRONREPORTSERVICE

# @@protoc_insertion_point(module_scope)
