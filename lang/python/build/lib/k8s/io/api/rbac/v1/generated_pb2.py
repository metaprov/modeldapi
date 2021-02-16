# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: k8s.io/api/rbac/v1/generated.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from k8s.io.apimachinery.pkg.apis.meta.v1 import generated_pb2 as k8s_dot_io_dot_apimachinery_dot_pkg_dot_apis_dot_meta_dot_v1_dot_generated__pb2
from k8s.io.apimachinery.pkg.runtime import generated_pb2 as k8s_dot_io_dot_apimachinery_dot_pkg_dot_runtime_dot_generated__pb2
from k8s.io.apimachinery.pkg.runtime.schema import generated_pb2 as k8s_dot_io_dot_apimachinery_dot_pkg_dot_runtime_dot_schema_dot_generated__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='k8s.io/api/rbac/v1/generated.proto',
  package='k8s.io.api.rbac.v1',
  syntax='proto2',
  serialized_options=b'Z\002v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n\"k8s.io/api/rbac/v1/generated.proto\x12\x12k8s.io.api.rbac.v1\x1a\x34k8s.io/apimachinery/pkg/apis/meta/v1/generated.proto\x1a/k8s.io/apimachinery/pkg/runtime/generated.proto\x1a\x36k8s.io/apimachinery/pkg/runtime/schema/generated.proto\"d\n\x0f\x41ggregationRule\x12Q\n\x14\x63lusterRoleSelectors\x18\x01 \x03(\x0b\x32\x33.k8s.io.apimachinery.pkg.apis.meta.v1.LabelSelector\"\xbe\x01\n\x0b\x43lusterRole\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12-\n\x05rules\x18\x02 \x03(\x0b\x32\x1e.k8s.io.api.rbac.v1.PolicyRule\x12<\n\x0f\x61ggregationRule\x18\x03 \x01(\x0b\x32#.k8s.io.api.rbac.v1.AggregationRule\"\xb5\x01\n\x12\x43lusterRoleBinding\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12-\n\x08subjects\x18\x02 \x03(\x0b\x32\x1b.k8s.io.api.rbac.v1.Subject\x12,\n\x07roleRef\x18\x03 \x01(\x0b\x32\x1b.k8s.io.api.rbac.v1.RoleRef\"\x91\x01\n\x16\x43lusterRoleBindingList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12\x35\n\x05items\x18\x02 \x03(\x0b\x32&.k8s.io.api.rbac.v1.ClusterRoleBinding\"\x83\x01\n\x0f\x43lusterRoleList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12.\n\x05items\x18\x02 \x03(\x0b\x32\x1f.k8s.io.api.rbac.v1.ClusterRole\"q\n\nPolicyRule\x12\r\n\x05verbs\x18\x01 \x03(\t\x12\x11\n\tapiGroups\x18\x02 \x03(\t\x12\x11\n\tresources\x18\x03 \x03(\t\x12\x15\n\rresourceNames\x18\x04 \x03(\t\x12\x17\n\x0fnonResourceURLs\x18\x05 \x03(\t\"y\n\x04Role\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12-\n\x05rules\x18\x02 \x03(\x0b\x32\x1e.k8s.io.api.rbac.v1.PolicyRule\"\xae\x01\n\x0bRoleBinding\x12\x42\n\x08metadata\x18\x01 \x01(\x0b\x32\x30.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta\x12-\n\x08subjects\x18\x02 \x03(\x0b\x32\x1b.k8s.io.api.rbac.v1.Subject\x12,\n\x07roleRef\x18\x03 \x01(\x0b\x32\x1b.k8s.io.api.rbac.v1.RoleRef\"\x83\x01\n\x0fRoleBindingList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12.\n\x05items\x18\x02 \x03(\x0b\x32\x1f.k8s.io.api.rbac.v1.RoleBinding\"u\n\x08RoleList\x12@\n\x08metadata\x18\x01 \x01(\x0b\x32..k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta\x12\'\n\x05items\x18\x02 \x03(\x0b\x32\x18.k8s.io.api.rbac.v1.Role\"7\n\x07RoleRef\x12\x10\n\x08\x61piGroup\x18\x01 \x01(\t\x12\x0c\n\x04kind\x18\x02 \x01(\t\x12\x0c\n\x04name\x18\x03 \x01(\t\"J\n\x07Subject\x12\x0c\n\x04kind\x18\x01 \x01(\t\x12\x10\n\x08\x61piGroup\x18\x02 \x01(\t\x12\x0c\n\x04name\x18\x03 \x01(\t\x12\x11\n\tnamespace\x18\x04 \x01(\tB\x04Z\x02v1'
  ,
  dependencies=[k8s_dot_io_dot_apimachinery_dot_pkg_dot_apis_dot_meta_dot_v1_dot_generated__pb2.DESCRIPTOR,k8s_dot_io_dot_apimachinery_dot_pkg_dot_runtime_dot_generated__pb2.DESCRIPTOR,k8s_dot_io_dot_apimachinery_dot_pkg_dot_runtime_dot_schema_dot_generated__pb2.DESCRIPTOR,])




_AGGREGATIONRULE = _descriptor.Descriptor(
  name='AggregationRule',
  full_name='k8s.io.api.rbac.v1.AggregationRule',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='clusterRoleSelectors', full_name='k8s.io.api.rbac.v1.AggregationRule.clusterRoleSelectors', index=0,
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
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=217,
  serialized_end=317,
)


_CLUSTERROLE = _descriptor.Descriptor(
  name='ClusterRole',
  full_name='k8s.io.api.rbac.v1.ClusterRole',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='metadata', full_name='k8s.io.api.rbac.v1.ClusterRole.metadata', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='rules', full_name='k8s.io.api.rbac.v1.ClusterRole.rules', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='aggregationRule', full_name='k8s.io.api.rbac.v1.ClusterRole.aggregationRule', index=2,
      number=3, type=11, cpp_type=10, label=1,
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
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=320,
  serialized_end=510,
)


_CLUSTERROLEBINDING = _descriptor.Descriptor(
  name='ClusterRoleBinding',
  full_name='k8s.io.api.rbac.v1.ClusterRoleBinding',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='metadata', full_name='k8s.io.api.rbac.v1.ClusterRoleBinding.metadata', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='subjects', full_name='k8s.io.api.rbac.v1.ClusterRoleBinding.subjects', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='roleRef', full_name='k8s.io.api.rbac.v1.ClusterRoleBinding.roleRef', index=2,
      number=3, type=11, cpp_type=10, label=1,
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
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=513,
  serialized_end=694,
)


_CLUSTERROLEBINDINGLIST = _descriptor.Descriptor(
  name='ClusterRoleBindingList',
  full_name='k8s.io.api.rbac.v1.ClusterRoleBindingList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='metadata', full_name='k8s.io.api.rbac.v1.ClusterRoleBindingList.metadata', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='items', full_name='k8s.io.api.rbac.v1.ClusterRoleBindingList.items', index=1,
      number=2, type=11, cpp_type=10, label=3,
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
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=697,
  serialized_end=842,
)


_CLUSTERROLELIST = _descriptor.Descriptor(
  name='ClusterRoleList',
  full_name='k8s.io.api.rbac.v1.ClusterRoleList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='metadata', full_name='k8s.io.api.rbac.v1.ClusterRoleList.metadata', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='items', full_name='k8s.io.api.rbac.v1.ClusterRoleList.items', index=1,
      number=2, type=11, cpp_type=10, label=3,
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
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=845,
  serialized_end=976,
)


_POLICYRULE = _descriptor.Descriptor(
  name='PolicyRule',
  full_name='k8s.io.api.rbac.v1.PolicyRule',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='verbs', full_name='k8s.io.api.rbac.v1.PolicyRule.verbs', index=0,
      number=1, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='apiGroups', full_name='k8s.io.api.rbac.v1.PolicyRule.apiGroups', index=1,
      number=2, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='resources', full_name='k8s.io.api.rbac.v1.PolicyRule.resources', index=2,
      number=3, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='resourceNames', full_name='k8s.io.api.rbac.v1.PolicyRule.resourceNames', index=3,
      number=4, type=9, cpp_type=9, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='nonResourceURLs', full_name='k8s.io.api.rbac.v1.PolicyRule.nonResourceURLs', index=4,
      number=5, type=9, cpp_type=9, label=3,
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
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=978,
  serialized_end=1091,
)


_ROLE = _descriptor.Descriptor(
  name='Role',
  full_name='k8s.io.api.rbac.v1.Role',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='metadata', full_name='k8s.io.api.rbac.v1.Role.metadata', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='rules', full_name='k8s.io.api.rbac.v1.Role.rules', index=1,
      number=2, type=11, cpp_type=10, label=3,
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
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1093,
  serialized_end=1214,
)


_ROLEBINDING = _descriptor.Descriptor(
  name='RoleBinding',
  full_name='k8s.io.api.rbac.v1.RoleBinding',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='metadata', full_name='k8s.io.api.rbac.v1.RoleBinding.metadata', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='subjects', full_name='k8s.io.api.rbac.v1.RoleBinding.subjects', index=1,
      number=2, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='roleRef', full_name='k8s.io.api.rbac.v1.RoleBinding.roleRef', index=2,
      number=3, type=11, cpp_type=10, label=1,
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
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1217,
  serialized_end=1391,
)


_ROLEBINDINGLIST = _descriptor.Descriptor(
  name='RoleBindingList',
  full_name='k8s.io.api.rbac.v1.RoleBindingList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='metadata', full_name='k8s.io.api.rbac.v1.RoleBindingList.metadata', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='items', full_name='k8s.io.api.rbac.v1.RoleBindingList.items', index=1,
      number=2, type=11, cpp_type=10, label=3,
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
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1394,
  serialized_end=1525,
)


_ROLELIST = _descriptor.Descriptor(
  name='RoleList',
  full_name='k8s.io.api.rbac.v1.RoleList',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='metadata', full_name='k8s.io.api.rbac.v1.RoleList.metadata', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='items', full_name='k8s.io.api.rbac.v1.RoleList.items', index=1,
      number=2, type=11, cpp_type=10, label=3,
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
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1527,
  serialized_end=1644,
)


_ROLEREF = _descriptor.Descriptor(
  name='RoleRef',
  full_name='k8s.io.api.rbac.v1.RoleRef',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='apiGroup', full_name='k8s.io.api.rbac.v1.RoleRef.apiGroup', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='kind', full_name='k8s.io.api.rbac.v1.RoleRef.kind', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='k8s.io.api.rbac.v1.RoleRef.name', index=2,
      number=3, type=9, cpp_type=9, label=1,
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
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1646,
  serialized_end=1701,
)


_SUBJECT = _descriptor.Descriptor(
  name='Subject',
  full_name='k8s.io.api.rbac.v1.Subject',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='kind', full_name='k8s.io.api.rbac.v1.Subject.kind', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='apiGroup', full_name='k8s.io.api.rbac.v1.Subject.apiGroup', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='k8s.io.api.rbac.v1.Subject.name', index=2,
      number=3, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='namespace', full_name='k8s.io.api.rbac.v1.Subject.namespace', index=3,
      number=4, type=9, cpp_type=9, label=1,
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
  syntax='proto2',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1703,
  serialized_end=1777,
)

_AGGREGATIONRULE.fields_by_name['clusterRoleSelectors'].message_type = k8s_dot_io_dot_apimachinery_dot_pkg_dot_apis_dot_meta_dot_v1_dot_generated__pb2._LABELSELECTOR
_CLUSTERROLE.fields_by_name['metadata'].message_type = k8s_dot_io_dot_apimachinery_dot_pkg_dot_apis_dot_meta_dot_v1_dot_generated__pb2._OBJECTMETA
_CLUSTERROLE.fields_by_name['rules'].message_type = _POLICYRULE
_CLUSTERROLE.fields_by_name['aggregationRule'].message_type = _AGGREGATIONRULE
_CLUSTERROLEBINDING.fields_by_name['metadata'].message_type = k8s_dot_io_dot_apimachinery_dot_pkg_dot_apis_dot_meta_dot_v1_dot_generated__pb2._OBJECTMETA
_CLUSTERROLEBINDING.fields_by_name['subjects'].message_type = _SUBJECT
_CLUSTERROLEBINDING.fields_by_name['roleRef'].message_type = _ROLEREF
_CLUSTERROLEBINDINGLIST.fields_by_name['metadata'].message_type = k8s_dot_io_dot_apimachinery_dot_pkg_dot_apis_dot_meta_dot_v1_dot_generated__pb2._LISTMETA
_CLUSTERROLEBINDINGLIST.fields_by_name['items'].message_type = _CLUSTERROLEBINDING
_CLUSTERROLELIST.fields_by_name['metadata'].message_type = k8s_dot_io_dot_apimachinery_dot_pkg_dot_apis_dot_meta_dot_v1_dot_generated__pb2._LISTMETA
_CLUSTERROLELIST.fields_by_name['items'].message_type = _CLUSTERROLE
_ROLE.fields_by_name['metadata'].message_type = k8s_dot_io_dot_apimachinery_dot_pkg_dot_apis_dot_meta_dot_v1_dot_generated__pb2._OBJECTMETA
_ROLE.fields_by_name['rules'].message_type = _POLICYRULE
_ROLEBINDING.fields_by_name['metadata'].message_type = k8s_dot_io_dot_apimachinery_dot_pkg_dot_apis_dot_meta_dot_v1_dot_generated__pb2._OBJECTMETA
_ROLEBINDING.fields_by_name['subjects'].message_type = _SUBJECT
_ROLEBINDING.fields_by_name['roleRef'].message_type = _ROLEREF
_ROLEBINDINGLIST.fields_by_name['metadata'].message_type = k8s_dot_io_dot_apimachinery_dot_pkg_dot_apis_dot_meta_dot_v1_dot_generated__pb2._LISTMETA
_ROLEBINDINGLIST.fields_by_name['items'].message_type = _ROLEBINDING
_ROLELIST.fields_by_name['metadata'].message_type = k8s_dot_io_dot_apimachinery_dot_pkg_dot_apis_dot_meta_dot_v1_dot_generated__pb2._LISTMETA
_ROLELIST.fields_by_name['items'].message_type = _ROLE
DESCRIPTOR.message_types_by_name['AggregationRule'] = _AGGREGATIONRULE
DESCRIPTOR.message_types_by_name['ClusterRole'] = _CLUSTERROLE
DESCRIPTOR.message_types_by_name['ClusterRoleBinding'] = _CLUSTERROLEBINDING
DESCRIPTOR.message_types_by_name['ClusterRoleBindingList'] = _CLUSTERROLEBINDINGLIST
DESCRIPTOR.message_types_by_name['ClusterRoleList'] = _CLUSTERROLELIST
DESCRIPTOR.message_types_by_name['PolicyRule'] = _POLICYRULE
DESCRIPTOR.message_types_by_name['Role'] = _ROLE
DESCRIPTOR.message_types_by_name['RoleBinding'] = _ROLEBINDING
DESCRIPTOR.message_types_by_name['RoleBindingList'] = _ROLEBINDINGLIST
DESCRIPTOR.message_types_by_name['RoleList'] = _ROLELIST
DESCRIPTOR.message_types_by_name['RoleRef'] = _ROLEREF
DESCRIPTOR.message_types_by_name['Subject'] = _SUBJECT
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

AggregationRule = _reflection.GeneratedProtocolMessageType('AggregationRule', (_message.Message,), {
  'DESCRIPTOR' : _AGGREGATIONRULE,
  '__module__' : 'k8s.io.api.rbac.v1.generated_pb2'
  # @@protoc_insertion_point(class_scope:k8s.io.api.rbac.v1.AggregationRule)
  })
_sym_db.RegisterMessage(AggregationRule)

ClusterRole = _reflection.GeneratedProtocolMessageType('ClusterRole', (_message.Message,), {
  'DESCRIPTOR' : _CLUSTERROLE,
  '__module__' : 'k8s.io.api.rbac.v1.generated_pb2'
  # @@protoc_insertion_point(class_scope:k8s.io.api.rbac.v1.ClusterRole)
  })
_sym_db.RegisterMessage(ClusterRole)

ClusterRoleBinding = _reflection.GeneratedProtocolMessageType('ClusterRoleBinding', (_message.Message,), {
  'DESCRIPTOR' : _CLUSTERROLEBINDING,
  '__module__' : 'k8s.io.api.rbac.v1.generated_pb2'
  # @@protoc_insertion_point(class_scope:k8s.io.api.rbac.v1.ClusterRoleBinding)
  })
_sym_db.RegisterMessage(ClusterRoleBinding)

ClusterRoleBindingList = _reflection.GeneratedProtocolMessageType('ClusterRoleBindingList', (_message.Message,), {
  'DESCRIPTOR' : _CLUSTERROLEBINDINGLIST,
  '__module__' : 'k8s.io.api.rbac.v1.generated_pb2'
  # @@protoc_insertion_point(class_scope:k8s.io.api.rbac.v1.ClusterRoleBindingList)
  })
_sym_db.RegisterMessage(ClusterRoleBindingList)

ClusterRoleList = _reflection.GeneratedProtocolMessageType('ClusterRoleList', (_message.Message,), {
  'DESCRIPTOR' : _CLUSTERROLELIST,
  '__module__' : 'k8s.io.api.rbac.v1.generated_pb2'
  # @@protoc_insertion_point(class_scope:k8s.io.api.rbac.v1.ClusterRoleList)
  })
_sym_db.RegisterMessage(ClusterRoleList)

PolicyRule = _reflection.GeneratedProtocolMessageType('PolicyRule', (_message.Message,), {
  'DESCRIPTOR' : _POLICYRULE,
  '__module__' : 'k8s.io.api.rbac.v1.generated_pb2'
  # @@protoc_insertion_point(class_scope:k8s.io.api.rbac.v1.PolicyRule)
  })
_sym_db.RegisterMessage(PolicyRule)

Role = _reflection.GeneratedProtocolMessageType('Role', (_message.Message,), {
  'DESCRIPTOR' : _ROLE,
  '__module__' : 'k8s.io.api.rbac.v1.generated_pb2'
  # @@protoc_insertion_point(class_scope:k8s.io.api.rbac.v1.Role)
  })
_sym_db.RegisterMessage(Role)

RoleBinding = _reflection.GeneratedProtocolMessageType('RoleBinding', (_message.Message,), {
  'DESCRIPTOR' : _ROLEBINDING,
  '__module__' : 'k8s.io.api.rbac.v1.generated_pb2'
  # @@protoc_insertion_point(class_scope:k8s.io.api.rbac.v1.RoleBinding)
  })
_sym_db.RegisterMessage(RoleBinding)

RoleBindingList = _reflection.GeneratedProtocolMessageType('RoleBindingList', (_message.Message,), {
  'DESCRIPTOR' : _ROLEBINDINGLIST,
  '__module__' : 'k8s.io.api.rbac.v1.generated_pb2'
  # @@protoc_insertion_point(class_scope:k8s.io.api.rbac.v1.RoleBindingList)
  })
_sym_db.RegisterMessage(RoleBindingList)

RoleList = _reflection.GeneratedProtocolMessageType('RoleList', (_message.Message,), {
  'DESCRIPTOR' : _ROLELIST,
  '__module__' : 'k8s.io.api.rbac.v1.generated_pb2'
  # @@protoc_insertion_point(class_scope:k8s.io.api.rbac.v1.RoleList)
  })
_sym_db.RegisterMessage(RoleList)

RoleRef = _reflection.GeneratedProtocolMessageType('RoleRef', (_message.Message,), {
  'DESCRIPTOR' : _ROLEREF,
  '__module__' : 'k8s.io.api.rbac.v1.generated_pb2'
  # @@protoc_insertion_point(class_scope:k8s.io.api.rbac.v1.RoleRef)
  })
_sym_db.RegisterMessage(RoleRef)

Subject = _reflection.GeneratedProtocolMessageType('Subject', (_message.Message,), {
  'DESCRIPTOR' : _SUBJECT,
  '__module__' : 'k8s.io.api.rbac.v1.generated_pb2'
  # @@protoc_insertion_point(class_scope:k8s.io.api.rbac.v1.Subject)
  })
_sym_db.RegisterMessage(Subject)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)