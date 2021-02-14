/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1/generated_pb.js');
var github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1/generated_pb.js');
var github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb = require('../../../../../../github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1/generated_pb.js');
var github_com_metaprov_modeldapi_services_common_v1_common_pb = require('../../../../../../github.com/metaprov/modeldapi/services/common/v1/common_pb.js');
var k8s_io_api_core_v1_generated_pb = require('../../../../../../k8s.io/api/core/v1/generated_pb.js');
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.PartitionValues', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 6;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 6));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 6;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 6));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFeatureRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    content: (f = msg.getContent()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setContent(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getContent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset content = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.getContent = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.setContent = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.clearContent = function() {
  this.setContent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.hasContent = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsWriteFileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 4;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 4));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadAudioRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 6;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 6));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadTextCorpusRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    result: (f = msg.getResult()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset result = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.getResult = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 6;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 6));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsReadFromStoreResponse.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    pipeline: (f = msg.getPipeline()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.deserializeBinaryFromReader);
      msg.setPipeline(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPipeline();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataPipeline pipeline = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataPipeline}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest.prototype.getPipeline = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataPipeline} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataPipeline, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataPipeline|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest.prototype.setPipeline = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest.prototype.clearPipeline = function() {
  this.setPipeline(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineRequest.prototype.hasPipeline = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset result = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse.prototype.getResult = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunDataPipelineResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    recipe: (f = msg.getRecipe()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.toObject(includeInstance, f),
    reciperun: (f = msg.getReciperun()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinaryFromReader);
      msg.setRecipe(value);
      break;
    case 9:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.deserializeBinaryFromReader);
      msg.setReciperun(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getRecipe();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.serializeBinaryToWriter
    );
  }
  f = message.getReciperun();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe recipe = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.getRecipe = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.setRecipe = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.clearRecipe = function() {
  this.setRecipe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.hasRecipe = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun reciperun = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.getReciperun = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.RecipeRun, 9));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.RecipeRun|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.setReciperun = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.clearReciperun = function() {
  this.setReciperun(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeRequest.prototype.hasReciperun = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe result = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse.prototype.getResult = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsRunRecipeResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    recipe: (f = msg.getRecipe()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.deserializeBinaryFromReader);
      msg.setRecipe(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getRecipe();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe recipe = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.getRecipe = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Recipe, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Recipe|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.setRecipe = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.clearRecipe = function() {
  this.setRecipe(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileRequest.prototype.hasRecipe = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: (f = msg.getResult()) && github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView;
      reader.readMessage(value,github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView.deserializeBinaryFromReader);
      msg.setResult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.services.common.v1.TableView result = 1;
 * @return {?proto.github.com.metaprov.modeldapi.services.common.v1.TableView}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse.prototype.getResult = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.services.common.v1.TableView} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.services.common.v1.TableView|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse.prototype.setResult = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse.prototype.clearResult = function() {
  this.setResult(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateRecipeProfileResponse.prototype.hasResult = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DataSourceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uri: jspb.Message.getFieldWithDefault(msg, 1, ""),
    profile: (f = msg.getProfile()) && github_com_metaprov_modeldapi_services_common_v1_common_pb.DatasetProfile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_services_common_v1_common_pb.DatasetProfile;
      reader.readMessage(value,github_com_metaprov_modeldapi_services_common_v1_common_pb.DatasetProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_services_common_v1_common_pb.DatasetProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse.prototype.setUri = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional github.com.metaprov.modeldapi.services.common.v1.DatasetProfile profile = 2;
 * @return {?proto.github.com.metaprov.modeldapi.services.common.v1.DatasetProfile}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse.prototype.getProfile = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.services.common.v1.DatasetProfile} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_services_common_v1_common_pb.DatasetProfile, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.services.common.v1.DatasetProfile|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse.prototype.setProfile = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse.prototype.clearProfile = function() {
  this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateDatasetProfileResponse.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 9:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study study = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.setStudy = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.clearStudy = function() {
  this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model model = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.setModel = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.clearModel = function() {
  this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 10;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 10));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateModelProfileResponse.prototype.setUri = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    forecastsList: jspb.Message.toObjectList(msg.getForecastsList(),
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 9:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 11:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj.deserializeBinaryFromReader);
      msg.addForecasts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getForecastsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study study = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setStudy = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearStudy = function() {
  this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model model = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setModel = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearModel = function() {
  this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 10;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 10));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj forecasts = 11;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj>}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.getForecastsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ForecastObj, 11));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj>} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.setForecastsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.addForecasts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ForecastObj, opt_index);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesRequest.prototype.clearForecastsList = function() {
  this.setForecastsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    partitionsList: jspb.Message.toObjectList(msg.getPartitionsList(),
    proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeld.services.data.v1.PartitionValues;
      reader.readMessage(value,proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.deserializeBinaryFromReader);
      msg.addPartitions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPartitionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.serializeBinaryToWriter
    );
  }
};


/**
 * repeated PartitionValues partitions = 1;
 * @return {!Array<!proto.github.com.metaprov.modeld.services.data.v1.PartitionValues>}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse.prototype.getPartitionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeld.services.data.v1.PartitionValues>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeld.services.data.v1.PartitionValues, 1));
};


/** @param {!Array<!proto.github.com.metaprov.modeld.services.data.v1.PartitionValues>} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse.prototype.setPartitionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.PartitionValues=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.PartitionValues}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse.prototype.addPartitions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeld.services.data.v1.PartitionValues, opt_index);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateForecastPartitionFilesResponse.prototype.clearPartitionsList = function() {
  this.setPartitionsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.PartitionValues = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.PartitionValues, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.PartitionValues';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.PartitionValues} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    valuesList: jspb.Message.getRepeatedField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.PartitionValues}
 */
proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.PartitionValues;
  return proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.PartitionValues} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.PartitionValues}
 */
proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addValues(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.PartitionValues} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValuesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string values = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.prototype.getValuesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.prototype.setValuesList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.prototype.addValues = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.github.com.metaprov.modeld.services.data.v1.PartitionValues.prototype.clearValuesList = function() {
  this.setValuesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 9:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study study = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.setStudy = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.clearStudy = function() {
  this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model model = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.setModel = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.clearModel = function() {
  this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 10;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 10));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.DsMergeForecastFileResponse.prototype.setUri = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    modelsList: jspb.Message.toObjectList(msg.getModelsList(),
    github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject, includeInstance),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.addModels(value);
      break;
    case 9:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getModelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study study = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.setStudy = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.clearStudy = function() {
  this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 7));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model models = 8;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model>}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.getModelsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model>} */ (
    jspb.Message.getRepeatedWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, 8));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model>} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.setModelsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.addModels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model, opt_index);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.clearModelsList = function() {
  this.setModelsList([]);
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 9;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 9));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 9) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    uri: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUri();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string uri = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateStudyProfileResponse.prototype.setUri = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    errorsList: jspb.Message.getRepeatedField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addErrors(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getErrorsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string errors = 1;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse.prototype.getErrorsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse.prototype.setErrorsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse.prototype.addErrors = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.github.com.metaprov.modeld.services.data.v1.DsValidateDatasetResponse.prototype.clearErrorsList = function() {
  this.setErrorsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    rows: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 6:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRows(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getRows();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 6;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 6));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int32 rows = 7;
 * @return {number}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.getRows = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetRequest.prototype.setRows = function(value) {
  jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGenerateDatasetResponse.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 7:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 8:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study study = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.setStudy = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.clearStudy = function() {
  this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 7));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 8;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 8));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    rungs: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRungs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getRungs();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 rungs = 8;
 * @return {number}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.getRungs = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsRequest.prototype.setRungs = function(value) {
  jspb.Message.setProto3IntField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetToRungsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsSplitDatasetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    columntype: jspb.Message.getFieldWithDefault(msg, 8, ""),
    columnname: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumntype(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnname(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getColumntype();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getColumnname();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string columnType = 8;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.getColumntype = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.setColumntype = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string columnName = 9;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.getColumnname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileRequest.prototype.setColumnname = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    plot: (f = msg.getPlot()) && github_com_metaprov_modeldapi_services_common_v1_common_pb.Plot.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_services_common_v1_common_pb.Plot;
      reader.readMessage(value,github_com_metaprov_modeldapi_services_common_v1_common_pb.Plot.deserializeBinaryFromReader);
      msg.setPlot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlot();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_services_common_v1_common_pb.Plot.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional github.com.metaprov.modeldapi.services.common.v1.Plot plot = 2;
 * @return {?proto.github.com.metaprov.modeldapi.services.common.v1.Plot}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse.prototype.getPlot = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.services.common.v1.Plot} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_services_common_v1_common_pb.Plot, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.services.common.v1.Plot|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse.prototype.setPlot = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse.prototype.clearPlot = function() {
  this.setPlot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsCreateColumnProfileResponse.prototype.hasPlot = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    quick: jspb.Message.getFieldWithDefault(msg, 8, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setQuick(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getQuick();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool quick = 8;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.getQuick = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 8, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileRequest.prototype.setQuick = function(value) {
  jspb.Message.setProto3BooleanField(this, 8, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    profile: (f = msg.getProfile()) && github_com_metaprov_modeldapi_services_common_v1_common_pb.DatasetProfile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_services_common_v1_common_pb.DatasetProfile;
      reader.readMessage(value,github_com_metaprov_modeldapi_services_common_v1_common_pb.DatasetProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_services_common_v1_common_pb.DatasetProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.services.common.v1.DatasetProfile profile = 1;
 * @return {?proto.github.com.metaprov.modeldapi.services.common.v1.DatasetProfile}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse.prototype.getProfile = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.services.common.v1.DatasetProfile} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_services_common_v1_common_pb.DatasetProfile, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.services.common.v1.DatasetProfile|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse.prototype.setProfile = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse.prototype.clearProfile = function() {
  this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsDatasetProfileResponse.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    key: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 4;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 4));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string key = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaRequest.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    profile: (f = msg.getProfile()) && github_com_metaprov_modeldapi_services_common_v1_common_pb.DatasetProfile.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_services_common_v1_common_pb.DatasetProfile;
      reader.readMessage(value,github_com_metaprov_modeldapi_services_common_v1_common_pb.DatasetProfile.deserializeBinaryFromReader);
      msg.setProfile(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_services_common_v1_common_pb.DatasetProfile.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.services.common.v1.DatasetProfile profile = 1;
 * @return {?proto.github.com.metaprov.modeldapi.services.common.v1.DatasetProfile}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse.prototype.getProfile = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.services.common.v1.DatasetProfile} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_services_common_v1_common_pb.DatasetProfile, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.services.common.v1.DatasetProfile|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse.prototype.setProfile = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse.prototype.clearProfile = function() {
  this.setProfile(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsInferSchemaResponse.prototype.hasProfile = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    key: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 4;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 4));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string key = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewRequest.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableview: (f = msg.getTableview()) && github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView;
      reader.readMessage(value,github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView.deserializeBinaryFromReader);
      msg.setTableview(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableview();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.services.common.v1.TableView tableview = 1;
 * @return {?proto.github.com.metaprov.modeldapi.services.common.v1.TableView}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse.prototype.getTableview = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.services.common.v1.TableView} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.services.common.v1.TableView|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse.prototype.setTableview = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse.prototype.clearTableview = function() {
  this.setTableview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetTableViewResponse.prototype.hasTableview = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    key: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 3:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 3;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 3));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string key = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewRequest.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableview: (f = msg.getTableview()) && github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView;
      reader.readMessage(value,github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView.deserializeBinaryFromReader);
      msg.setTableview(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableview();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.services.common.v1.TableView tableview = 1;
 * @return {?proto.github.com.metaprov.modeldapi.services.common.v1.TableView}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse.prototype.getTableview = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.services.common.v1.TableView} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_services_common_v1_common_pb.TableView, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.services.common.v1.TableView|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse.prototype.setTableview = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse.prototype.clearTableview = function() {
  this.setTableview(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsGetMisclassTableViewResponse.prototype.hasTableview = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    model: (f = msg.getModel()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    report: (f = msg.getReport()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    case 7:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 8:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 9:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study study = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.setStudy = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.clearStudy = function() {
  this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model model = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.setModel = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.clearModel = function() {
  this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 7));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 8;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 8));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report report = 10;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.getReport = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report, 10));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.setReport = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.clearReport = function() {
  this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateModelReportRequest.prototype.hasReport = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    forecast: (f = msg.getForecast()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    report: (f = msg.getReport()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setForecast(value);
      break;
    case 7:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 8:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 9:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 10:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getForecast();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study study = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.setStudy = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.clearStudy = function() {
  this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model forecast = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.getForecast = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.setForecast = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.clearForecast = function() {
  this.setForecast(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.hasForecast = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 7));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 8;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 8));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 9;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 9));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report report = 10;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.getReport = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report, 10));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.setReport = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.clearReport = function() {
  this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateForecastReportRequest.prototype.hasReport = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    pdf: msg.getPdf_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setPdf(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPdf_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes pdf = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse.prototype.getPdf = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes pdf = 1;
 * This is a type-conversion wrapper around `getPdf()`
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse.prototype.getPdf_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getPdf()));
};


/**
 * optional bytes pdf = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getPdf()`
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse.prototype.getPdf_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getPdf()));
};


/** @param {!(string|Uint8Array)} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateReportResponse.prototype.setPdf = function(value) {
  jspb.Message.setProto3BytesField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    report: (f = msg.getReport()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 7:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 7;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 7));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report report = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.getReport = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.setReport = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.clearReport = function() {
  this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateDatasetReportRequest.prototype.hasReport = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    study: (f = msg.getStudy()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.toObject(includeInstance, f),
    dataset: (f = msg.getDataset()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.toObject(includeInstance, f),
    datasource: (f = msg.getDatasource()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.toObject(includeInstance, f),
    models: (f = msg.getModels()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelList.toObject(includeInstance, f),
    bucket: (f = msg.getBucket()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.toObject(includeInstance, f),
    connection: (f = msg.getConnection()) && github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.toObject(includeInstance, f),
    secret: (f = msg.getSecret()) && k8s_io_api_core_v1_generated_pb.Secret.toObject(includeInstance, f),
    report: (f = msg.getReport()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.deserializeBinaryFromReader);
      msg.setStudy(value);
      break;
    case 4:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.deserializeBinaryFromReader);
      msg.setDataset(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.deserializeBinaryFromReader);
      msg.setDatasource(value);
      break;
    case 6:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelList;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelList.deserializeBinaryFromReader);
      msg.setModels(value);
      break;
    case 7:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.deserializeBinaryFromReader);
      msg.setBucket(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.deserializeBinaryFromReader);
      msg.setConnection(value);
      break;
    case 9:
      var value = new k8s_io_api_core_v1_generated_pb.Secret;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.Secret.deserializeBinaryFromReader);
      msg.setSecret(value);
      break;
    case 10:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.deserializeBinaryFromReader);
      msg.setReport(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getStudy();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study.serializeBinaryToWriter
    );
  }
  f = message.getDataset();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset.serializeBinaryToWriter
    );
  }
  f = message.getDatasource();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource.serializeBinaryToWriter
    );
  }
  f = message.getModels();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelList.serializeBinaryToWriter
    );
  }
  f = message.getBucket();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket.serializeBinaryToWriter
    );
  }
  f = message.getConnection();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      k8s_io_api_core_v1_generated_pb.Secret.serializeBinaryToWriter
    );
  }
  f = message.getReport();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study study = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.getStudy = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Study, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Study|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.setStudy = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.clearStudy = function() {
  this.setStudy(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.hasStudy = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset dataset = 4;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.getDataset = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.Dataset, 4));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.Dataset|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.setDataset = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.clearDataset = function() {
  this.setDataset(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.hasDataset = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource datasource = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.getDatasource = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSource, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSource|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.setDatasource = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.clearDatasource = function() {
  this.setDatasource(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.hasDatasource = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList models = 6;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.getModels = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelList, 6));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelList|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.setModels = function(value) {
  jspb.Message.setWrapperField(this, 6, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.clearModels = function() {
  this.setModels(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.hasModels = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket bucket = 7;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.getBucket = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.VirtualBucket, 7));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.VirtualBucket|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.setBucket = function(value) {
  jspb.Message.setWrapperField(this, 7, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.clearBucket = function() {
  this.setBucket(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.hasBucket = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection connection = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.getConnection = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_infra_v1alpha1_generated_pb.Connection, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.infra.v1alpha1.Connection|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.setConnection = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.clearConnection = function() {
  this.setConnection(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.hasConnection = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional k8s.io.api.core.v1.Secret secret = 9;
 * @return {?proto.k8s.io.api.core.v1.Secret}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.getSecret = function() {
  return /** @type{?proto.k8s.io.api.core.v1.Secret} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.Secret, 9));
};


/** @param {?proto.k8s.io.api.core.v1.Secret|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.setSecret = function(value) {
  jspb.Message.setWrapperField(this, 9, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.clearSecret = function() {
  this.setSecret(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.hasSecret = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report report = 10;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.getReport = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Report, 10));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Report|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.setReport = function(value) {
  jspb.Message.setWrapperField(this, 10, value);
};


proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.clearReport = function() {
  this.setReport(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.CreateStudyReportRequest.prototype.hasReport = function() {
  return jspb.Message.getField(this, 10) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    product: (f = msg.getProduct()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.toObject(includeInstance, f),
    version: (f = msg.getVersion()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.toObject(includeInstance, f),
    studyname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    studynamespace: jspb.Message.getFieldWithDefault(msg, 4, ""),
    studyspec: (f = msg.getStudyspec()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.StudySpec.toObject(includeInstance, f),
    datasourcename: jspb.Message.getFieldWithDefault(msg, 6, ""),
    datasourcenamespace: jspb.Message.getFieldWithDefault(msg, 7, ""),
    datasourcespec: (f = msg.getDatasourcespec()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.toObject(includeInstance, f),
    datasetname: jspb.Message.getFieldWithDefault(msg, 9, ""),
    datasetnamespace: jspb.Message.getFieldWithDefault(msg, 10, ""),
    datasetspec: (f = msg.getDatasetspec()) && github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSpec.toObject(includeInstance, f),
    budget: jspb.Message.getFieldWithDefault(msg, 12, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.deserializeBinaryFromReader);
      msg.setProduct(value);
      break;
    case 2:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.deserializeBinaryFromReader);
      msg.setVersion(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setStudyname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setStudynamespace(value);
      break;
    case 5:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.StudySpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.StudySpec.deserializeBinaryFromReader);
      msg.setStudyspec(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasourcename(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasourcenamespace(value);
      break;
    case 8:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.deserializeBinaryFromReader);
      msg.setDatasourcespec(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetname(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDatasetnamespace(value);
      break;
    case 11:
      var value = new github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSpec.deserializeBinaryFromReader);
      msg.setDatasetspec(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBudget(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProduct();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct.serializeBinaryToWriter
    );
  }
  f = message.getVersion();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion.serializeBinaryToWriter
    );
  }
  f = message.getStudyname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getStudynamespace();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStudyspec();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.StudySpec.serializeBinaryToWriter
    );
  }
  f = message.getDatasourcename();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getDatasourcenamespace();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDatasourcespec();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec.serializeBinaryToWriter
    );
  }
  f = message.getDatasetname();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDatasetnamespace();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getDatasetspec();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSpec.serializeBinaryToWriter
    );
  }
  f = message.getBudget();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct product = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.getProduct = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProduct, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProduct|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.setProduct = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.clearProduct = function() {
  this.setProduct(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.hasProduct = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion version = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.getVersion = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataProductVersion, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataProductVersion|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.setVersion = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.clearVersion = function() {
  this.setVersion(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string studyName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.getStudyname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.setStudyname = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string studyNamespace = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.getStudynamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.setStudynamespace = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec studySpec = 5;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.getStudyspec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.StudySpec, 5));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.StudySpec|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.setStudyspec = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.clearStudyspec = function() {
  this.setStudyspec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.hasStudyspec = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string datasourceName = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.getDatasourcename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.setDatasourcename = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string datasourceNamespace = 7;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.getDatasourcenamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.setDatasourcenamespace = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec datasourceSpec = 8;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.getDatasourcespec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DataSourceSpec, 8));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DataSourceSpec|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.setDatasourcespec = function(value) {
  jspb.Message.setWrapperField(this, 8, value);
};


proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.clearDatasourcespec = function() {
  this.setDatasourcespec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.hasDatasourcespec = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string datasetName = 9;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.getDatasetname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.setDatasetname = function(value) {
  jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string datasetNamespace = 10;
 * @return {string}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.getDatasetnamespace = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.setDatasetnamespace = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DatasetSpec datasetSpec = 11;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DatasetSpec}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.getDatasetspec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DatasetSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_data_v1alpha1_generated_pb.DatasetSpec, 11));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.data.v1alpha1.DatasetSpec|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.setDatasetspec = function(value) {
  jspb.Message.setWrapperField(this, 11, value);
};


proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.clearDatasetspec = function() {
  this.setDatasetspec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.hasDatasetspec = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 budget = 12;
 * @return {number}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.getBudget = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeld.services.data.v1.AskModelRequest.prototype.setBudget = function(value) {
  jspb.Message.setProto3IntField(this, 12, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    spec: (f = msg.getSpec()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelSpec.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelSpec;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec spec = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.ModelSpec, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.ModelSpec|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.AskModelResponse.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    model: (f = msg.getModel()) && github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model;
      reader.readMessage(value,github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.deserializeBinaryFromReader);
      msg.setModel(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getModel();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model.serializeBinaryToWriter
    );
  }
};


/**
 * optional github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model model = 1;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model}
 */
proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest.prototype.getModel = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model} */ (
    jspb.Message.getWrapperField(this, github_com_metaprov_modeldapi_pkg_apis_training_v1alpha1_generated_pb.Model, 1));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.training.v1alpha1.Model|undefined} value */
proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest.prototype.setModel = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest.prototype.clearModel = function() {
  this.setModel(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeld.services.data.v1.TellModelRequest.prototype.hasModel = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.TellModelResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest;
  return proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsShutdownRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse.displayName = 'proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse;
  return proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeld.services.data.v1.DsShutdownResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};


goog.object.extend(exports, proto.github.com.metaprov.modeld.services.data.v1);