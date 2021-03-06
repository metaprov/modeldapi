# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: github.com/metaprov/modeldapi/services/recipe/v1/recipe.proto
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import message as _message
from google.protobuf import reflection as _reflection
from google.protobuf import symbol_database as _symbol_database
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


from google.api import annotations_pb2 as google_dot_api_dot_annotations__pb2
from github.com.metaprov.modeldapi.services.common.v1 import common_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_common_dot_v1_dot_common__pb2
from github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1 import generated_pb2 as github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2


DESCRIPTOR = _descriptor.FileDescriptor(
  name='github.com/metaprov/modeldapi/services/recipe/v1/recipe.proto',
  package='github.com.metaprov.modeldapi.services.recipe.v1',
  syntax='proto3',
  serialized_options=b'Z0github.com/metaprov/modeldapi/services/recipe/v1',
  create_key=_descriptor._internal_create_key,
  serialized_pb=b'\n=github.com/metaprov/modeldapi/services/recipe/v1/recipe.proto\x12\x30github.com.metaprov.modeldapi.services.recipe.v1\x1a\x1cgoogle/api/annotations.proto\x1a=github.com/metaprov/modeldapi/services/common/v1/common.proto\x1a\x44github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated.proto\"\xb8\x01\n\x12ListRecipesRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12`\n\x06labels\x18\x03 \x03(\x0b\x32P.github.com.metaprov.modeldapi.services.recipe.v1.ListRecipesRequest.LabelsEntry\x1a-\n\x0bLabelsEntry\x12\x0b\n\x03key\x18\x01 \x01(\t\x12\r\n\x05value\x18\x02 \x01(\t:\x02\x38\x01\"f\n\x13ListRecipesResponse\x12O\n\x05items\x18\x01 \x01(\x0b\x32@.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeList\"a\n\x13\x43reateRecipeRequest\x12J\n\x04item\x18\x01 \x01(\x0b\x32<.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe\"\x16\n\x14\x43reateRecipeResponse\"a\n\x13UpdateRecipeRequest\x12J\n\x04item\x18\x01 \x01(\x0b\x32<.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe\"\x16\n\x14UpdateRecipeResponse\"3\n\x10GetRecipeRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x87\x01\n\x14ProfileRecipeRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12N\n\x04spec\x18\x03 \x01(\x0b\x32@.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeSpec\"c\n\x15ProfileRecipeResponse\x12J\n\x05table\x18\x01 \x01(\x0b\x32;.github.com.metaprov.modeldapi.services.common.v1.TableView\"\x83\x01\n\x10RunRecipeRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\x12N\n\x04spec\x18\x03 \x01(\x0b\x32@.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeSpec\"o\n\x11RunRecipeResponse\x12L\n\x06recipe\x18\x01 \x01(\x0b\x32<.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"m\n\x11GetRecipeResponse\x12J\n\x04item\x18\x01 \x01(\x0b\x32<.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe\x12\x0c\n\x04yaml\x18\x02 \x01(\t\"6\n\x13\x44\x65leteRecipeRequest\x12\x11\n\tnamespace\x18\x01 \x01(\t\x12\x0c\n\x04name\x18\x02 \x01(\t\"\x16\n\x14\x44\x65leteRecipeResponse2\x9b\n\n\rRecipeService\x12\xaf\x01\n\x0bListRecipes\x12\x44.github.com.metaprov.modeldapi.services.recipe.v1.ListRecipesRequest\x1a\x45.github.com.metaprov.modeldapi.services.recipe.v1.ListRecipesResponse\"\x13\x82\xd3\xe4\x93\x02\r\x12\x0b/v1/recipes\x12\xb5\x01\n\x0c\x43reateRecipe\x12\x45.github.com.metaprov.modeldapi.services.recipe.v1.CreateRecipeRequest\x1a\x46.github.com.metaprov.modeldapi.services.recipe.v1.CreateRecipeResponse\"\x16\x82\xd3\xe4\x93\x02\x10\"\x0b/v1/recipes:\x01*\x12\xb0\x01\n\tGetRecipe\x12\x42.github.com.metaprov.modeldapi.services.recipe.v1.GetRecipeRequest\x1a\x43.github.com.metaprov.modeldapi.services.recipe.v1.GetRecipeResponse\"\x1a\x82\xd3\xe4\x93\x02\x14\x12\x12/v1/recipes/{name}\x12\xb4\x01\n\tRunRecipe\x12\x42.github.com.metaprov.modeldapi.services.recipe.v1.RunRecipeRequest\x1a\x43.github.com.metaprov.modeldapi.services.recipe.v1.RunRecipeResponse\"\x1e\x82\xd3\xe4\x93\x02\x18\x12\x16/v1/recipes/{name}:run\x12\xc4\x01\n\rProfileRecipe\x12\x46.github.com.metaprov.modeldapi.services.recipe.v1.ProfileRecipeRequest\x1aG.github.com.metaprov.modeldapi.services.recipe.v1.ProfileRecipeResponse\"\"\x82\xd3\xe4\x93\x02\x1c\x12\x1a/v1/recipes/{name}:profile\x12\xcc\x01\n\x0cUpdateRecipe\x12\x45.github.com.metaprov.modeldapi.services.recipe.v1.UpdateRecipeRequest\x1a\x46.github.com.metaprov.modeldapi.services.recipe.v1.UpdateRecipeResponse\"-\x82\xd3\xe4\x93\x02\'\x1a\"/v1/recipes/{recipe.metadata.name}:\x01*\x12\x9f\x01\n\x0c\x44\x65leteRecipe\x12\x45.github.com.metaprov.modeldapi.services.recipe.v1.DeleteRecipeRequest\x1a\x46.github.com.metaprov.modeldapi.services.recipe.v1.DeleteRecipeResponse\"\x00\x42\x32Z0github.com/metaprov/modeldapi/services/recipe/v1b\x06proto3'
  ,
  dependencies=[google_dot_api_dot_annotations__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_common_dot_v1_dot_common__pb2.DESCRIPTOR,github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2.DESCRIPTOR,])




_LISTRECIPESREQUEST_LABELSENTRY = _descriptor.Descriptor(
  name='LabelsEntry',
  full_name='github.com.metaprov.modeldapi.services.recipe.v1.ListRecipesRequest.LabelsEntry',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='key', full_name='github.com.metaprov.modeldapi.services.recipe.v1.ListRecipesRequest.LabelsEntry.key', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='value', full_name='github.com.metaprov.modeldapi.services.recipe.v1.ListRecipesRequest.LabelsEntry.value', index=1,
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
  serialized_start=418,
  serialized_end=463,
)

_LISTRECIPESREQUEST = _descriptor.Descriptor(
  name='ListRecipesRequest',
  full_name='github.com.metaprov.modeldapi.services.recipe.v1.ListRecipesRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.recipe.v1.ListRecipesRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='labels', full_name='github.com.metaprov.modeldapi.services.recipe.v1.ListRecipesRequest.labels', index=1,
      number=3, type=11, cpp_type=10, label=3,
      has_default_value=False, default_value=[],
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
  ],
  extensions=[
  ],
  nested_types=[_LISTRECIPESREQUEST_LABELSENTRY, ],
  enum_types=[
  ],
  serialized_options=None,
  is_extendable=False,
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=279,
  serialized_end=463,
)


_LISTRECIPESRESPONSE = _descriptor.Descriptor(
  name='ListRecipesResponse',
  full_name='github.com.metaprov.modeldapi.services.recipe.v1.ListRecipesResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='items', full_name='github.com.metaprov.modeldapi.services.recipe.v1.ListRecipesResponse.items', index=0,
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
  serialized_start=465,
  serialized_end=567,
)


_CREATERECIPEREQUEST = _descriptor.Descriptor(
  name='CreateRecipeRequest',
  full_name='github.com.metaprov.modeldapi.services.recipe.v1.CreateRecipeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.recipe.v1.CreateRecipeRequest.item', index=0,
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
  serialized_start=569,
  serialized_end=666,
)


_CREATERECIPERESPONSE = _descriptor.Descriptor(
  name='CreateRecipeResponse',
  full_name='github.com.metaprov.modeldapi.services.recipe.v1.CreateRecipeResponse',
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
  serialized_start=668,
  serialized_end=690,
)


_UPDATERECIPEREQUEST = _descriptor.Descriptor(
  name='UpdateRecipeRequest',
  full_name='github.com.metaprov.modeldapi.services.recipe.v1.UpdateRecipeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.recipe.v1.UpdateRecipeRequest.item', index=0,
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
  serialized_start=692,
  serialized_end=789,
)


_UPDATERECIPERESPONSE = _descriptor.Descriptor(
  name='UpdateRecipeResponse',
  full_name='github.com.metaprov.modeldapi.services.recipe.v1.UpdateRecipeResponse',
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
  serialized_start=791,
  serialized_end=813,
)


_GETRECIPEREQUEST = _descriptor.Descriptor(
  name='GetRecipeRequest',
  full_name='github.com.metaprov.modeldapi.services.recipe.v1.GetRecipeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.recipe.v1.GetRecipeRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.recipe.v1.GetRecipeRequest.name', index=1,
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
  serialized_start=815,
  serialized_end=866,
)


_PROFILERECIPEREQUEST = _descriptor.Descriptor(
  name='ProfileRecipeRequest',
  full_name='github.com.metaprov.modeldapi.services.recipe.v1.ProfileRecipeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.recipe.v1.ProfileRecipeRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.recipe.v1.ProfileRecipeRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeldapi.services.recipe.v1.ProfileRecipeRequest.spec', index=2,
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
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=869,
  serialized_end=1004,
)


_PROFILERECIPERESPONSE = _descriptor.Descriptor(
  name='ProfileRecipeResponse',
  full_name='github.com.metaprov.modeldapi.services.recipe.v1.ProfileRecipeResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='table', full_name='github.com.metaprov.modeldapi.services.recipe.v1.ProfileRecipeResponse.table', index=0,
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
  serialized_start=1006,
  serialized_end=1105,
)


_RUNRECIPEREQUEST = _descriptor.Descriptor(
  name='RunRecipeRequest',
  full_name='github.com.metaprov.modeldapi.services.recipe.v1.RunRecipeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.recipe.v1.RunRecipeRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.recipe.v1.RunRecipeRequest.name', index=1,
      number=2, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='spec', full_name='github.com.metaprov.modeldapi.services.recipe.v1.RunRecipeRequest.spec', index=2,
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
  syntax='proto3',
  extension_ranges=[],
  oneofs=[
  ],
  serialized_start=1108,
  serialized_end=1239,
)


_RUNRECIPERESPONSE = _descriptor.Descriptor(
  name='RunRecipeResponse',
  full_name='github.com.metaprov.modeldapi.services.recipe.v1.RunRecipeResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='recipe', full_name='github.com.metaprov.modeldapi.services.recipe.v1.RunRecipeResponse.recipe', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeldapi.services.recipe.v1.RunRecipeResponse.yaml', index=1,
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
  serialized_start=1241,
  serialized_end=1352,
)


_GETRECIPERESPONSE = _descriptor.Descriptor(
  name='GetRecipeResponse',
  full_name='github.com.metaprov.modeldapi.services.recipe.v1.GetRecipeResponse',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='item', full_name='github.com.metaprov.modeldapi.services.recipe.v1.GetRecipeResponse.item', index=0,
      number=1, type=11, cpp_type=10, label=1,
      has_default_value=False, default_value=None,
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='yaml', full_name='github.com.metaprov.modeldapi.services.recipe.v1.GetRecipeResponse.yaml', index=1,
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
  serialized_start=1354,
  serialized_end=1463,
)


_DELETERECIPEREQUEST = _descriptor.Descriptor(
  name='DeleteRecipeRequest',
  full_name='github.com.metaprov.modeldapi.services.recipe.v1.DeleteRecipeRequest',
  filename=None,
  file=DESCRIPTOR,
  containing_type=None,
  create_key=_descriptor._internal_create_key,
  fields=[
    _descriptor.FieldDescriptor(
      name='namespace', full_name='github.com.metaprov.modeldapi.services.recipe.v1.DeleteRecipeRequest.namespace', index=0,
      number=1, type=9, cpp_type=9, label=1,
      has_default_value=False, default_value=b"".decode('utf-8'),
      message_type=None, enum_type=None, containing_type=None,
      is_extension=False, extension_scope=None,
      serialized_options=None, file=DESCRIPTOR,  create_key=_descriptor._internal_create_key),
    _descriptor.FieldDescriptor(
      name='name', full_name='github.com.metaprov.modeldapi.services.recipe.v1.DeleteRecipeRequest.name', index=1,
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
  serialized_start=1465,
  serialized_end=1519,
)


_DELETERECIPERESPONSE = _descriptor.Descriptor(
  name='DeleteRecipeResponse',
  full_name='github.com.metaprov.modeldapi.services.recipe.v1.DeleteRecipeResponse',
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
  serialized_start=1521,
  serialized_end=1543,
)

_LISTRECIPESREQUEST_LABELSENTRY.containing_type = _LISTRECIPESREQUEST
_LISTRECIPESREQUEST.fields_by_name['labels'].message_type = _LISTRECIPESREQUEST_LABELSENTRY
_LISTRECIPESRESPONSE.fields_by_name['items'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._RECIPELIST
_CREATERECIPEREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._RECIPE
_UPDATERECIPEREQUEST.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._RECIPE
_PROFILERECIPEREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._RECIPESPEC
_PROFILERECIPERESPONSE.fields_by_name['table'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_services_dot_common_dot_v1_dot_common__pb2._TABLEVIEW
_RUNRECIPEREQUEST.fields_by_name['spec'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._RECIPESPEC
_RUNRECIPERESPONSE.fields_by_name['recipe'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._RECIPE
_GETRECIPERESPONSE.fields_by_name['item'].message_type = github_dot_com_dot_metaprov_dot_modeldapi_dot_pkg_dot_apis_dot_data_dot_v1alpha1_dot_generated__pb2._RECIPE
DESCRIPTOR.message_types_by_name['ListRecipesRequest'] = _LISTRECIPESREQUEST
DESCRIPTOR.message_types_by_name['ListRecipesResponse'] = _LISTRECIPESRESPONSE
DESCRIPTOR.message_types_by_name['CreateRecipeRequest'] = _CREATERECIPEREQUEST
DESCRIPTOR.message_types_by_name['CreateRecipeResponse'] = _CREATERECIPERESPONSE
DESCRIPTOR.message_types_by_name['UpdateRecipeRequest'] = _UPDATERECIPEREQUEST
DESCRIPTOR.message_types_by_name['UpdateRecipeResponse'] = _UPDATERECIPERESPONSE
DESCRIPTOR.message_types_by_name['GetRecipeRequest'] = _GETRECIPEREQUEST
DESCRIPTOR.message_types_by_name['ProfileRecipeRequest'] = _PROFILERECIPEREQUEST
DESCRIPTOR.message_types_by_name['ProfileRecipeResponse'] = _PROFILERECIPERESPONSE
DESCRIPTOR.message_types_by_name['RunRecipeRequest'] = _RUNRECIPEREQUEST
DESCRIPTOR.message_types_by_name['RunRecipeResponse'] = _RUNRECIPERESPONSE
DESCRIPTOR.message_types_by_name['GetRecipeResponse'] = _GETRECIPERESPONSE
DESCRIPTOR.message_types_by_name['DeleteRecipeRequest'] = _DELETERECIPEREQUEST
DESCRIPTOR.message_types_by_name['DeleteRecipeResponse'] = _DELETERECIPERESPONSE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

ListRecipesRequest = _reflection.GeneratedProtocolMessageType('ListRecipesRequest', (_message.Message,), {

  'LabelsEntry' : _reflection.GeneratedProtocolMessageType('LabelsEntry', (_message.Message,), {
    'DESCRIPTOR' : _LISTRECIPESREQUEST_LABELSENTRY,
    '__module__' : 'github.com.metaprov.modeldapi.services.recipe.v1.recipe_pb2'
    # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.recipe.v1.ListRecipesRequest.LabelsEntry)
    })
  ,
  'DESCRIPTOR' : _LISTRECIPESREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.recipe.v1.recipe_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.recipe.v1.ListRecipesRequest)
  })
_sym_db.RegisterMessage(ListRecipesRequest)
_sym_db.RegisterMessage(ListRecipesRequest.LabelsEntry)

ListRecipesResponse = _reflection.GeneratedProtocolMessageType('ListRecipesResponse', (_message.Message,), {
  'DESCRIPTOR' : _LISTRECIPESRESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.recipe.v1.recipe_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.recipe.v1.ListRecipesResponse)
  })
_sym_db.RegisterMessage(ListRecipesResponse)

CreateRecipeRequest = _reflection.GeneratedProtocolMessageType('CreateRecipeRequest', (_message.Message,), {
  'DESCRIPTOR' : _CREATERECIPEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.recipe.v1.recipe_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.recipe.v1.CreateRecipeRequest)
  })
_sym_db.RegisterMessage(CreateRecipeRequest)

CreateRecipeResponse = _reflection.GeneratedProtocolMessageType('CreateRecipeResponse', (_message.Message,), {
  'DESCRIPTOR' : _CREATERECIPERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.recipe.v1.recipe_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.recipe.v1.CreateRecipeResponse)
  })
_sym_db.RegisterMessage(CreateRecipeResponse)

UpdateRecipeRequest = _reflection.GeneratedProtocolMessageType('UpdateRecipeRequest', (_message.Message,), {
  'DESCRIPTOR' : _UPDATERECIPEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.recipe.v1.recipe_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.recipe.v1.UpdateRecipeRequest)
  })
_sym_db.RegisterMessage(UpdateRecipeRequest)

UpdateRecipeResponse = _reflection.GeneratedProtocolMessageType('UpdateRecipeResponse', (_message.Message,), {
  'DESCRIPTOR' : _UPDATERECIPERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.recipe.v1.recipe_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.recipe.v1.UpdateRecipeResponse)
  })
_sym_db.RegisterMessage(UpdateRecipeResponse)

GetRecipeRequest = _reflection.GeneratedProtocolMessageType('GetRecipeRequest', (_message.Message,), {
  'DESCRIPTOR' : _GETRECIPEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.recipe.v1.recipe_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.recipe.v1.GetRecipeRequest)
  })
_sym_db.RegisterMessage(GetRecipeRequest)

ProfileRecipeRequest = _reflection.GeneratedProtocolMessageType('ProfileRecipeRequest', (_message.Message,), {
  'DESCRIPTOR' : _PROFILERECIPEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.recipe.v1.recipe_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.recipe.v1.ProfileRecipeRequest)
  })
_sym_db.RegisterMessage(ProfileRecipeRequest)

ProfileRecipeResponse = _reflection.GeneratedProtocolMessageType('ProfileRecipeResponse', (_message.Message,), {
  'DESCRIPTOR' : _PROFILERECIPERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.recipe.v1.recipe_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.recipe.v1.ProfileRecipeResponse)
  })
_sym_db.RegisterMessage(ProfileRecipeResponse)

RunRecipeRequest = _reflection.GeneratedProtocolMessageType('RunRecipeRequest', (_message.Message,), {
  'DESCRIPTOR' : _RUNRECIPEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.recipe.v1.recipe_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.recipe.v1.RunRecipeRequest)
  })
_sym_db.RegisterMessage(RunRecipeRequest)

RunRecipeResponse = _reflection.GeneratedProtocolMessageType('RunRecipeResponse', (_message.Message,), {
  'DESCRIPTOR' : _RUNRECIPERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.recipe.v1.recipe_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.recipe.v1.RunRecipeResponse)
  })
_sym_db.RegisterMessage(RunRecipeResponse)

GetRecipeResponse = _reflection.GeneratedProtocolMessageType('GetRecipeResponse', (_message.Message,), {
  'DESCRIPTOR' : _GETRECIPERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.recipe.v1.recipe_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.recipe.v1.GetRecipeResponse)
  })
_sym_db.RegisterMessage(GetRecipeResponse)

DeleteRecipeRequest = _reflection.GeneratedProtocolMessageType('DeleteRecipeRequest', (_message.Message,), {
  'DESCRIPTOR' : _DELETERECIPEREQUEST,
  '__module__' : 'github.com.metaprov.modeldapi.services.recipe.v1.recipe_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.recipe.v1.DeleteRecipeRequest)
  })
_sym_db.RegisterMessage(DeleteRecipeRequest)

DeleteRecipeResponse = _reflection.GeneratedProtocolMessageType('DeleteRecipeResponse', (_message.Message,), {
  'DESCRIPTOR' : _DELETERECIPERESPONSE,
  '__module__' : 'github.com.metaprov.modeldapi.services.recipe.v1.recipe_pb2'
  # @@protoc_insertion_point(class_scope:github.com.metaprov.modeldapi.services.recipe.v1.DeleteRecipeResponse)
  })
_sym_db.RegisterMessage(DeleteRecipeResponse)


DESCRIPTOR._options = None
_LISTRECIPESREQUEST_LABELSENTRY._options = None

_RECIPESERVICE = _descriptor.ServiceDescriptor(
  name='RecipeService',
  full_name='github.com.metaprov.modeldapi.services.recipe.v1.RecipeService',
  file=DESCRIPTOR,
  index=0,
  serialized_options=None,
  create_key=_descriptor._internal_create_key,
  serialized_start=1546,
  serialized_end=2853,
  methods=[
  _descriptor.MethodDescriptor(
    name='ListRecipes',
    full_name='github.com.metaprov.modeldapi.services.recipe.v1.RecipeService.ListRecipes',
    index=0,
    containing_service=None,
    input_type=_LISTRECIPESREQUEST,
    output_type=_LISTRECIPESRESPONSE,
    serialized_options=b'\202\323\344\223\002\r\022\013/v1/recipes',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='CreateRecipe',
    full_name='github.com.metaprov.modeldapi.services.recipe.v1.RecipeService.CreateRecipe',
    index=1,
    containing_service=None,
    input_type=_CREATERECIPEREQUEST,
    output_type=_CREATERECIPERESPONSE,
    serialized_options=b'\202\323\344\223\002\020\"\013/v1/recipes:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='GetRecipe',
    full_name='github.com.metaprov.modeldapi.services.recipe.v1.RecipeService.GetRecipe',
    index=2,
    containing_service=None,
    input_type=_GETRECIPEREQUEST,
    output_type=_GETRECIPERESPONSE,
    serialized_options=b'\202\323\344\223\002\024\022\022/v1/recipes/{name}',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='RunRecipe',
    full_name='github.com.metaprov.modeldapi.services.recipe.v1.RecipeService.RunRecipe',
    index=3,
    containing_service=None,
    input_type=_RUNRECIPEREQUEST,
    output_type=_RUNRECIPERESPONSE,
    serialized_options=b'\202\323\344\223\002\030\022\026/v1/recipes/{name}:run',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='ProfileRecipe',
    full_name='github.com.metaprov.modeldapi.services.recipe.v1.RecipeService.ProfileRecipe',
    index=4,
    containing_service=None,
    input_type=_PROFILERECIPEREQUEST,
    output_type=_PROFILERECIPERESPONSE,
    serialized_options=b'\202\323\344\223\002\034\022\032/v1/recipes/{name}:profile',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='UpdateRecipe',
    full_name='github.com.metaprov.modeldapi.services.recipe.v1.RecipeService.UpdateRecipe',
    index=5,
    containing_service=None,
    input_type=_UPDATERECIPEREQUEST,
    output_type=_UPDATERECIPERESPONSE,
    serialized_options=b'\202\323\344\223\002\'\032\"/v1/recipes/{recipe.metadata.name}:\001*',
    create_key=_descriptor._internal_create_key,
  ),
  _descriptor.MethodDescriptor(
    name='DeleteRecipe',
    full_name='github.com.metaprov.modeldapi.services.recipe.v1.RecipeService.DeleteRecipe',
    index=6,
    containing_service=None,
    input_type=_DELETERECIPEREQUEST,
    output_type=_DELETERECIPERESPONSE,
    serialized_options=None,
    create_key=_descriptor._internal_create_key,
  ),
])
_sym_db.RegisterServiceDescriptor(_RECIPESERVICE)

DESCRIPTOR.services_by_name['RecipeService'] = _RECIPESERVICE

# @@protoc_insertion_point(module_scope)
