# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/report/v1/report.proto
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
  name='github.com/metaprov/modeldapi/services/report/v1/report.proto',
  package='github.com.metaprov.modeldapi.services.report.v1',
  syntax='proto3',
  serialized_options=b'Z0github.com/metaprov/modeldapi/services/report/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n=github.com/metaprov/modeldapi/services/report/v1/report.proto\x12\x30github.com.metaprov.modeldapi.services.report.v1\x1a\x1cgoogle/api/annotations.proto\x1aHgithub.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated.proto\"\xc6\x01\n\x12ListReportsRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12`\n\x06labels\x18\x03 \x03(\x0b\x32P.github.com.metaprov.modeldapi.services.report.v1.ListReportsRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"j\n\x13ListReportsResponse\x12S\n\x05items\x18\x01 \x01(\x0b\x32\x44.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ReportList\"e\n\x13\x43reateReportRequest\x12N\n\x04item\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report\"\x16\n\x14\x43reateReportResponse\"e\n\x13UpdateReportRequest\x12N\n\x04item\x18\x05 \x01(\x0b\x32@.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report\"\x16\n\x14UpdateReportResponse\"3\n\x10GetReportRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"q\n\x11GetReportResponse\x12N\n\x04item\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"6\n\x13\x44\x65leteReportRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x16\n\x14\x44\x65leteReportResponse\"8\n\x15\x44ownloadReportRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"%\n\x16\x44ownloadReportResponse\x12\x0b\n\x03raw\x18\x01 \x01(\x0c\x32\xb1\t\n\rReportService\x12\xb9\x01\n\x0bListReports\x12\x44.github.com.metaprov.modeldapi.services.report.v1.ListReportsRequest\x1a\x45.github.com.metaprov.modeldapi.services.report.v1.ListReportsResponse\"\x1d\x82\xd3\xe4\x93\x02\x17\x12\x15/api/v1alpha1/reports\x12\xba\x01\n\x0c\x43reateReport\x12\x45.github.com.metaprov.modeldapi.services.report.v1.CreateReportRequest\x1a\x46.github.com.metaprov.modeldapi.services.report.v1.CreateReportResponse\"\x1b\x82\xd3\xe4\x93\x02\x15\"\x0b/v1/reports:\x06report\x12\xc0\x01\n\tGetReport\x12\x42.github.com.metaprov.modeldapi.services.report.v1.GetReportRequest\x1a\x43.github.com.metaprov.modeldapi.services.report.v1.GetReportResponse\"*\x82\xd3\xe4\x93\x02$\x12\"/v1/reports/{report.metadata.name}\x12\xd1\x01\n\x0cUpdateReport\x12\x45.github.com.metaprov.modeldapi.services.report.v1.UpdateReportRequest\x1a\x46.github.com.metaprov.modeldapi.services.report.v1.UpdateReportResponse\"2\x82\xd3\xe4\x93\x02,\x1a\"/v1/reports/{report.metadata.name}:\x06report\x12\xc9\x01\n\x0c\x44\x65leteReport\x12\x45.github.com.metaprov.modeldapi.services.report.v1.DeleteReportRequest\x1a\x46.github.com.metaprov.modeldapi.services.report.v1.DeleteReportResponse\"*\x82\xd3\xe4\x93\x02$*\"/v1/reports/{report.metadata.name}\x12\xc3\x01\n\x08\x44ownload\x12G.github.com.metaprov.modeldapi.services.report.v1.DownloadReportRequest\x1aH.github.com.metaprov.modeldapi.services.report.v1.DownloadReportResponse\"$\x82\xd3\xe4\x93\x02\x1e*\x1c/api/v1alpha1/reports/{name}B2Z0github.com/metaprov/modeldapi/services/report/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTREPORTSREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.report.v1.ListReportsRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.report.v1.ListReportsRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.report.v1.ListReportsRequest.LabelsEntry.value', index=1,
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
  serialized_start=373,
  serialized_end=418,
)

_LISTREPORTSREQUEST = _descriptor.Descriptor(
  name='ListReportsRequest',
  full_name='github.com.metaprov.modeldapi.services.report.v1.ListReportsRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.report.v1.ListReportsRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.report.v1.ListReportsRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.report.v1.ListReportsRequest.labels', index=2,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTREPORTSREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=220,
  serialized_end=418,
)


_LISTREPORTSRESPONSE = _descriptor.Descriptor(
  name='ListReportsResponse',
  full_name='github.com.metaprov.modeldapi.services.report.v1.ListReportsResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeldapi.services.report.v1.ListReportsResponse.items', index=0,
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
  serialized_start=420,
  serialized_end=526,
)


_CREATEREPORTREQUEST = _descriptor.Descriptor(
  name='CreateReportRequest',
  full_name='github.com.metaprov.modeldapi.services.report.v1.CreateReportRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.report.v1.CreateReportRequest.item', index=0,
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
  serialized_start=528,
  serialized_end=629,
)


_CREATEREPORTRESPONSE = _descriptor.Descriptor(
  name='CreateReportResponse',
  full_name='github.com.metaprov.modeldapi.services.report.v1.CreateReportResponse',
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
  serialized_start=631,
  serialized_end=653,
)


_UPDATEREPORTREQUEST = _descriptor.Descriptor(
  name='UpdateReportRequest',
  full_name='github.com.metaprov.modeldapi.services.report.v1.UpdateReportRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.report.v1.UpdateReportRequest.item', index=0,
      number=5, type=11, cpp_type=10, label=1,
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
  serialized_start=655,
  serialized_end=756,
)


_UPDATEREPORTRESPONSE = _descriptor.Descriptor(
  name='UpdateReportResponse',
  full_name='github.com.metaprov.modeldapi.services.report.v1.UpdateReportResponse',
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
  serialized_start=758,
  serialized_end=780,
)


_GETREPORTREQUEST = _descriptor.Descriptor(
  name='GetReportRequest',
  full_name='github.com.metaprov.modeldapi.services.report.v1.GetReportRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.report.v1.GetReportRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.report.v1.GetReportRequest.name', index=1,
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
  serialized_start=782,
  serialized_end=833,
)


_GETREPORTRESPONSE = _descriptor.Descriptor(
  name='GetReportResponse',
  full_name='github.com.metaprov.modeldapi.services.report.v1.GetReportResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.report.v1.GetReportResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeldapi.services.report.v1.GetReportResponse.yaml', index=1,
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
  serialized_start=835,
  serialized_end=948,
)


_DELETEREPORTREQUEST = _descriptor.Descriptor(
  name='DeleteReportRequest',
  full_name='github.com.metaprov.modeldapi.services.report.v1.DeleteReportRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.report.v1.DeleteReportRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.report.v1.DeleteReportRequest.name', index=1,
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
  serialized_start=950,
  serialized_end=1004,
)


_DELETEREPORTRESPONSE = _descriptor.Descriptor(
  name='DeleteReportResponse',
  full_name='github.com.metaprov.modeldapi.services.report.v1.DeleteReportResponse',
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
  serialized_start=1006,
  serialized_end=1028,
)


_DOWNLOADREPORTREQUEST = _descriptor.Descriptor(
  name='DownloadReportRequest',
  full_name='github.com.metaprov.modeldapi.services.report.v1.DownloadReportRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.report.v1.DownloadReportRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.report.v1.DownloadReportRequest.name', index=1,
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
  serialized_start=1030,
  serialized_end=1086,
)


_DOWNLOADREPORTRESPONSE = _descriptor.Descriptor(
  name='DownloadReportResponse',
  full_name='github.com.metaprov.modeldapi.services.report.v1.DownloadReportResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='raw', full_name='github.com.metaprov.modeldapi.services.report.v1.DownloadReportResponse.raw', index=0,
      number=1, type=12, cpp_type=9, label=1,
      has_default_value=False, default_value=b"",
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
  serialized_start=1088,
  serialized_end=1125,
)

_LISTREPORTSREQUEST_LABELSENTRY.containing_type = _LISTREPORTSREQUEST
_LISTREPORTSREQUEST.fields_by_name['labels'].message_type = _LISTREPORTSREQUEST_LABELSENTRY
_LISTREPORTSRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._REPORTLIST
_CREATEREPORTREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._REPORT
_UPDATEREPORTREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._REPORT
_GETREPORTRESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_training_dot_v1alpha1_dot_generated__pb2._REPORT
DESCRIPTOR.message_types_by_name['ListReportsRequest'] = _LISTREPORTSREQUEST
DESCRIPTOR.message_types_by_name['ListReportsResponse'] = _LISTREPORTSRESPONSE
DESCRIPTOR.message_types_by_name['CreateReportRequest'] = _CREATEREPORTREQUEST
DESCRIPTOR.message_types_by_name['CreateReportResponse'] = _CREATEREPORTRESPONSE
DESCRIPTOR.message_types_by_name['UpdateReportRequest'] = _UPDATEREPORTREQUEST
DESCRIPTOR.message_types_by_name['UpdateReportResponse'] = _UPDATEREPORTRESPONSE
DESCRIPTOR.message_types_by_name['GetReportRequest'] = _GETREPORTREQUEST
DESCRIPTOR.message_types_by_name['GetReportResponse'] = _GETREPORTRESPONSE
DESCRIPTOR.message_types_by_name['DeleteReportRequest'] = _DELETEREPORTREQUEST
DESCRIPTOR.message_types_by_name['DeleteReportResponse'] = _DELETEREPORTRESPONSE
DESCRIPTOR.message_types_by_name['DownloadReportRequest'] = _DOWNLOADREPORTREQUEST
DESCRIPTOR.message_types_by_name['DownloadReportResponse'] = _DOWNLOADREPORTRESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListReportsRequest = _reflection.GeneratedProtocolMessageType('ListReportsRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTREPORTSREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.report.v1.report_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.report.v1.ListReportsRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTREPORTSREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.report.v1.report_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.report.v1.ListReportsRequest)
  })
_sym_db.RegisterMessage(ListReportsRequest)
_sym_db.RegisterMessage(ListReportsRequest.LabelsEntry)

ListReportsResponse = _reflection.GeneratedProtocolMessageType('ListReportsResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTREPORTSRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.report.v1.report_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.report.v1.ListReportsResponse)
  })
_sym_db.RegisterMessage(ListReportsResponse)

CreateReportRequest = _reflection.GeneratedProtocolMessageType('CreateReportRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATEREPORTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.report.v1.report_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.report.v1.CreateReportRequest)
  })
_sym_db.RegisterMessage(CreateReportRequest)

CreateReportResponse = _reflection.GeneratedProtocolMessageType('CreateReportResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATEREPORTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.report.v1.report_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.report.v1.CreateReportResponse)
  })
_sym_db.RegisterMessage(CreateReportResponse)

UpdateReportRequest = _reflection.GeneratedProtocolMessageType('UpdateReportRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEREPORTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.report.v1.report_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.report.v1.UpdateReportRequest)
  })
_sym_db.RegisterMessage(UpdateReportRequest)

UpdateReportResponse = _reflection.GeneratedProtocolMessageType('UpdateReportResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATEREPORTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.report.v1.report_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.report.v1.UpdateReportResponse)
  })
_sym_db.RegisterMessage(UpdateReportResponse)

GetReportRequest = _reflection.GeneratedProtocolMessageType('GetReportRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETREPORTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.report.v1.report_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.report.v1.GetReportRequest)
  })
_sym_db.RegisterMessage(GetReportRequest)

GetReportResponse = _reflection.GeneratedProtocolMessageType('GetReportResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETREPORTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.report.v1.report_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.report.v1.GetReportResponse)
  })
_sym_db.RegisterMessage(GetReportResponse)

DeleteReportRequest = _reflection.GeneratedProtocolMessageType('DeleteReportRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETEREPORTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.report.v1.report_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.report.v1.DeleteReportRequest)
  })
_sym_db.RegisterMessage(DeleteReportRequest)

DeleteReportResponse = _reflection.GeneratedProtocolMessageType('DeleteReportResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETEREPORTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.report.v1.report_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.report.v1.DeleteReportResponse)
  })
_sym_db.RegisterMessage(DeleteReportResponse)

DownloadReportRequest = _reflection.GeneratedProtocolMessageType('DownloadReportRequest', (_message.Message,), {
  'DESCRIPTOR' : _DOWNLOADREPORTREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.report.v1.report_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.report.v1.DownloadReportRequest)
  })
_sym_db.RegisterMessage(DownloadReportRequest)

DownloadReportResponse = _reflection.GeneratedProtocolMessageType('DownloadReportResponse', (_message.Message,), {
  'DESCRIPTOR' : _DOWNLOADREPORTRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.report.v1.report_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.report.v1.DownloadReportResponse)
  })
_sym_db.RegisterMessage(DownloadReportResponse)


DESCRIPTOR._options = None
_LISTREPORTSREQUEST_LABELSENTRY._options = None

_REPORTSERVICE = _descriptor.ServiceDescriptor(
  name='ReportService',
  full_name='github.com.metaprov.modeldapi.services.report.v1.ReportService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1128,
  serialized_end=2329,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListReports',
    full_name='github.com.metaprov.modeldapi.services.report.v1.ReportService.ListReports',
    index=0,
    containing_service=None,
    input_type=_LISTREPORTSREQUEST,
    output_type=_LISTREPORTSRESPONSE,
    serialized_options=b'\202\323\344\223\002\027\022\025/api/v1alpha1/reports',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateReport',
    full_name='github.com.metaprov.modeldapi.services.report.v1.ReportService.CreateReport',
    index=1,
    containing_service=None,
    input_type=_CREATEREPORTREQUEST,
    output_type=_CREATEREPORTRESPONSE,
    serialized_options=b'\202\323\344\223\002\025\"\013/v1/reports:\006report',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetReport',
    full_name='github.com.metaprov.modeldapi.services.report.v1.ReportService.GetReport',
    index=2,
    containing_service=None,
    input_type=_GETREPORTREQUEST,
    output_type=_GETREPORTRESPONSE,
    serialized_options=b'\202\323\344\223\002$\022\"/v1/reports/{report.metadata.name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateReport',
    full_name='github.com.metaprov.modeldapi.services.report.v1.ReportService.UpdateReport',
    index=3,
    containing_service=None,
    input_type=_UPDATEREPORTREQUEST,
    output_type=_UPDATEREPORTRESPONSE,
    serialized_options=b'\202\323\344\223\002,\032\"/v1/reports/{report.metadata.name}:\006report',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteReport',
    full_name='github.com.metaprov.modeldapi.services.report.v1.ReportService.DeleteReport',
    index=4,
    containing_service=None,
    input_type=_DELETEREPORTREQUEST,
    output_type=_DELETEREPORTRESPONSE,
    serialized_options=b'\202\323\344\223\002$*\"/v1/reports/{report.metadata.name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='Download',
    full_name='github.com.metaprov.modeldapi.services.report.v1.ReportService.Download',
    index=5,
    containing_service=None,
    input_type=_DOWNLOADREPORTREQUEST,
    output_type=_DOWNLOADREPORTRESPONSE,
    serialized_options=b'\202\323\344\223\002\036*\034/api/v1alpha1/reports/{name}',
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_REPORTSERVICE)

DESCRIPTOR.services_by_name['ReportService'] = _REPORTSERVICE

# @@protoc_insertion_point(module_scope)
