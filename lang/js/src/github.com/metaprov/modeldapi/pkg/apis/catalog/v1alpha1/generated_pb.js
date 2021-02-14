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

var k8s_io_api_core_v1_generated_pb = require('../../../../../../../k8s.io/api/core/v1/generated_pb.js');
var k8s_io_api_rbac_v1_generated_pb = require('../../../../../../../k8s.io/api/rbac/v1/generated_pb.js');
var k8s_io_apimachinery_pkg_api_resource_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/api/resource/generated_pb.js');
var k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb.js');
var k8s_io_apimachinery_pkg_runtime_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb.js');
var k8s_io_apimachinery_pkg_runtime_schema_generated_pb = require('../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb.js');
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList', null, global);
goog.exportSymbol('proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec', null, global);

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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional AlgorithmSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional AlgorithmStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Algorithm items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Algorithm, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmList.prototype.clearItemsList = function() {
  this.setItemsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.repeatedFields_ = [6,7,8];



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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    frameworkname: jspb.Message.getField(msg, 1),
    description: jspb.Message.getField(msg, 2),
    url: jspb.Message.getField(msg, 3),
    task: jspb.Message.getField(msg, 4),
    sparse: jspb.Message.getField(msg, 5),
    integerparametersList: jspb.Message.toObjectList(msg.getIntegerparametersList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.toObject, includeInstance),
    floatparametersList: jspb.Message.toObjectList(msg.getFloatparametersList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.toObject, includeInstance),
    categoricalparametersList: jspb.Message.toObjectList(msg.getCategoricalparametersList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setFrameworkname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTask(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSparse(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.deserializeBinaryFromReader);
      msg.addIntegerparameters(value);
      break;
    case 7:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.deserializeBinaryFromReader);
      msg.addFloatparameters(value);
      break;
    case 8:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.deserializeBinaryFromReader);
      msg.addCategoricalparameters(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIntegerparametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.serializeBinaryToWriter
    );
  }
  f = message.getFloatparametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.serializeBinaryToWriter
    );
  }
  f = message.getCategoricalparametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string frameworkName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.getFrameworkname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.setFrameworkname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.clearFrameworkname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.hasFrameworkname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.clearDescription = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string url = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.setUrl = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.clearUrl = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string task = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.getTask = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.setTask = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.clearTask = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.hasTask = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool sparse = 5;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.getSparse = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 5, false));
};


/** @param {boolean} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.setSparse = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.clearSparse = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.hasSparse = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated IntParameter integerParameters = 6;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.getIntegerparametersList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter, 6));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.setIntegerparametersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.addIntegerparameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.clearIntegerparametersList = function() {
  this.setIntegerparametersList([]);
};


/**
 * repeated FloatParameter floatParameters = 7;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.getFloatparametersList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter, 7));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.setFloatparametersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.addFloatparameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.clearFloatparametersList = function() {
  this.setFloatparametersList([]);
};


/**
 * repeated CategoricalParameter categoricalParameters = 8;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.getCategoricalparametersList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter, 8));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.setCategoricalparametersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.addCategoricalparameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmSpec.prototype.clearCategoricalparametersList = function() {
  this.setCategoricalparametersList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.AlgorithmStatus.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.repeatedFields_ = [10];



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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    defaultvalue: jspb.Message.getField(msg, 8),
    enumsList: jspb.Message.getRepeatedField(msg, 10)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.deserializeBinaryFromReader = function(msg, reader) {
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
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultvalue(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.addEnums(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getEnumsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      10,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string defaultValue = 8;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.getDefaultvalue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.setDefaultvalue = function(value) {
  jspb.Message.setField(this, 8, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.clearDefaultvalue = function() {
  jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.hasDefaultvalue = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * repeated string enums = 10;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.getEnumsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 10));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.setEnumsList = function(value) {
  jspb.Message.setField(this, 10, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.addEnums = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 10, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CategoricalParameter.prototype.clearEnumsList = function() {
  this.setEnumsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional CloudSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional CloudStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated Cloud items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Cloud, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudList.prototype.clearItemsList = function() {
  this.setItemsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.repeatedFields_ = [4,5,6];



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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    defaultregionname: jspb.Message.getField(msg, 1),
    defaultmachineclassname: jspb.Message.getField(msg, 2),
    defaultgpuclassname: jspb.Message.getField(msg, 3),
    machineclassesList: jspb.Message.toObjectList(msg.getMachineclassesList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.toObject, includeInstance),
    gpuclassesList: jspb.Message.toObjectList(msg.getGpuclassesList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.toObject, includeInstance),
    regionsList: jspb.Message.toObjectList(msg.getRegionsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultregionname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultmachineclassname(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultgpuclassname(value);
      break;
    case 4:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.deserializeBinaryFromReader);
      msg.addMachineclasses(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.deserializeBinaryFromReader);
      msg.addGpuclasses(value);
      break;
    case 6:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.deserializeBinaryFromReader);
      msg.addRegions(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMachineclassesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.serializeBinaryToWriter
    );
  }
  f = message.getGpuclassesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.serializeBinaryToWriter
    );
  }
  f = message.getRegionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.serializeBinaryToWriter
    );
  }
};


/**
 * optional string defaultRegionName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.getDefaultregionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.setDefaultregionname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.clearDefaultregionname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.hasDefaultregionname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string defaultMachineClassName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.getDefaultmachineclassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.setDefaultmachineclassname = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.clearDefaultmachineclassname = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.hasDefaultmachineclassname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string defaultGpuClassName = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.getDefaultgpuclassname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.setDefaultgpuclassname = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.clearDefaultgpuclassname = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.hasDefaultgpuclassname = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated MachineClass machineClasses = 4;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.getMachineclassesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass, 4));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.setMachineclassesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.addMachineclasses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.clearMachineclassesList = function() {
  this.setMachineclassesList([]);
};


/**
 * repeated GpuClass gpuClasses = 5;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.getGpuclassesList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass, 5));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.setGpuclassesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.addGpuclasses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.clearGpuclassesList = function() {
  this.setGpuclassesList([]);
};


/**
 * repeated Region regions = 6;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.getRegionsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region, 6));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.setRegionsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.addRegions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudSpec.prototype.clearRegionsList = function() {
  this.setRegionsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.repeatedFields_ = [1,2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    machinecostsList: jspb.Message.toObjectList(msg.getMachinecostsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.toObject, includeInstance),
    gpucostsList: jspb.Message.toObjectList(msg.getGpucostsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.deserializeBinaryFromReader);
      msg.addMachinecosts(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.deserializeBinaryFromReader);
      msg.addGpucosts(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMachinecostsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.serializeBinaryToWriter
    );
  }
  f = message.getGpucostsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.serializeBinaryToWriter
    );
  }
};


/**
 * repeated MachineClassCost machineCosts = 1;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.getMachinecostsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost, 1));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.setMachinecostsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.addMachinecosts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.clearMachinecostsList = function() {
  this.setMachinecostsList([]);
};


/**
 * repeated GpuClassCost gpuCosts = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.getGpucostsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.setGpucostsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.addGpucosts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CloudStatus.prototype.clearGpucostsList = function() {
  this.setGpucostsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.toObject = function(includeInstance, msg) {
  var f, obj = {
    occurredat: (f = msg.getOccurredat()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.toObject(includeInstance, f),
    message: jspb.Message.getField(msg, 2)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.deserializeBinaryFromReader);
      msg.setOccurredat(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOccurredat();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.Time occurredAt = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.prototype.getOccurredat = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.Time|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.prototype.setOccurredat = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.prototype.clearOccurredat = function() {
  this.setOccurredat(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.prototype.hasOccurredat = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.prototype.setMessage = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.prototype.clearMessage = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.CustomResourceError.prototype.hasMessage = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    code: jspb.Message.getField(msg, 2)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setCode(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.setCode = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.clearCode = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.prototype.hasCode = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    minimum: jspb.Message.getOptionalFloatingPointField(msg, 3),
    maximum: jspb.Message.getOptionalFloatingPointField(msg, 4),
    defaultvalue: jspb.Message.getOptionalFloatingPointField(msg, 5)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.deserializeBinaryFromReader = function(msg, reader) {
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
    case 3:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMinimum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setMaximum(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setDefaultvalue(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeDouble(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeDouble(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeDouble(
      5,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional double minimum = 3;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.getMinimum = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.setMinimum = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.clearMinimum = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.hasMinimum = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional double maximum = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.getMaximum = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.setMaximum = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.clearMaximum = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.hasMaximum = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional double defaultValue = 5;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.getDefaultvalue = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 5, 0.0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.setDefaultvalue = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.clearDefaultvalue = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.FloatParameter.prototype.hasDefaultvalue = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.toObject = function(includeInstance, msg) {
  var f, obj = {
    cloudname: jspb.Message.getField(msg, 1),
    regionname: jspb.Message.getField(msg, 2),
    mem: (f = msg.getMem()) && k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.toObject(includeInstance, f),
    vcpu: jspb.Message.getField(msg, 4),
    gpumem: (f = msg.getGpumem()) && k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.toObject(includeInstance, f),
    storage: jspb.Message.getField(msg, 6)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCloudname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionname(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity;
      reader.readMessage(value,k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.deserializeBinaryFromReader);
      msg.setMem(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVcpu(value);
      break;
    case 5:
      var value = new k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity;
      reader.readMessage(value,k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.deserializeBinaryFromReader);
      msg.setGpumem(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setStorage(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMem();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getGpumem();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string cloudName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.getCloudname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.setCloudname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.clearCloudname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.hasCloudname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string regionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.getRegionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.setRegionname = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.clearRegionname = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.hasRegionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.api.resource.Quantity mem = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.getMem = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.api.resource.Quantity} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity, 3));
};


/** @param {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.setMem = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.clearMem = function() {
  this.setMem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.hasMem = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 vcpu = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.getVcpu = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.setVcpu = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.clearVcpu = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.hasVcpu = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.api.resource.Quantity gpumem = 5;
 * @return {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.getGpumem = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.api.resource.Quantity} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity, 5));
};


/** @param {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.setGpumem = function(value) {
  jspb.Message.setWrapperField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.clearGpumem = function() {
  this.setGpumem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.hasGpumem = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string storage = 6;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.getStorage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.setStorage = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.clearStorage = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClass.prototype.hasStorage = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.toObject = function(includeInstance, msg) {
  var f, obj = {
    region: jspb.Message.getField(msg, 1),
    costperminute: (f = msg.getCostperminute()) && k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.toObject(includeInstance, f),
    costspot: (f = msg.getCostspot()) && k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 2:
      var value = new k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity;
      reader.readMessage(value,k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.deserializeBinaryFromReader);
      msg.setCostperminute(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity;
      reader.readMessage(value,k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.deserializeBinaryFromReader);
      msg.setCostspot(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCostperminute();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.serializeBinaryToWriter
    );
  }
  f = message.getCostspot();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.serializeBinaryToWriter
    );
  }
};


/**
 * optional string region = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.setRegion = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.clearRegion = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.hasRegion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.api.resource.Quantity costPerMinute = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.getCostperminute = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.api.resource.Quantity} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity, 2));
};


/** @param {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.setCostperminute = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.clearCostperminute = function() {
  this.setCostperminute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.hasCostperminute = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.api.resource.Quantity costSpot = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.getCostspot = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.api.resource.Quantity} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity, 3));
};


/** @param {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.setCostspot = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.clearCostspot = function() {
  this.setCostspot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.GpuClassCost.prototype.hasCostspot = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    type: jspb.Message.getField(msg, 2),
    minimum: jspb.Message.getField(msg, 3),
    maximum: jspb.Message.getField(msg, 4),
    defaultvalue: jspb.Message.getField(msg, 6)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinimum(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaximum(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDefaultvalue(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.setType = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.clearType = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.hasType = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 minimum = 3;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.getMinimum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.setMinimum = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.clearMinimum = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.hasMinimum = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 maximum = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.getMaximum = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.setMaximum = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.clearMaximum = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.hasMaximum = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 defaultValue = 6;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.getDefaultvalue = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.setDefaultvalue = function(value) {
  jspb.Message.setField(this, 6, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.clearDefaultvalue = function() {
  jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.IntParameter.prototype.hasDefaultvalue = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional MLFrameworkSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional MLFrameworkStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated MLFramework items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFramework, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.prototype.clearItemsList = function() {
  this.setItemsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    url: jspb.Message.getField(msg, 1),
    description: jspb.Message.getField(msg, 2),
    version: jspb.Message.getField(msg, 3)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUrl(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.setUrl = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.clearUrl = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.hasUrl = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.setDescription = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.clearDescription = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string version = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.setVersion = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.clearVersion = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkSpec.prototype.hasVersion = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkStatus.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.toObject = function(includeInstance, msg) {
  var f, obj = {
    cloudname: jspb.Message.getField(msg, 1),
    regionname: jspb.Message.getField(msg, 2),
    mem: (f = msg.getMem()) && k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.toObject(includeInstance, f),
    vcpu: jspb.Message.getField(msg, 4),
    storage: jspb.Message.getField(msg, 5)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCloudname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegionname(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity;
      reader.readMessage(value,k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.deserializeBinaryFromReader);
      msg.setMem(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVcpu(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setStorage(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMem();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string cloudName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.getCloudname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.setCloudname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.clearCloudname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.hasCloudname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string regionName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.getRegionname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.setRegionname = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.clearRegionname = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.hasRegionname = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.api.resource.Quantity mem = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.getMem = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.api.resource.Quantity} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity, 3));
};


/** @param {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.setMem = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.clearMem = function() {
  this.setMem(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.hasMem = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 vcpu = 4;
 * @return {number}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.getVcpu = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.setVcpu = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.clearVcpu = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.hasVcpu = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string storage = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.getStorage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.setStorage = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.clearStorage = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClass.prototype.hasStorage = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.toObject = function(includeInstance, msg) {
  var f, obj = {
    region: jspb.Message.getField(msg, 1),
    costperminute: (f = msg.getCostperminute()) && k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.toObject(includeInstance, f),
    costspot: (f = msg.getCostspot()) && k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setRegion(value);
      break;
    case 2:
      var value = new k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity;
      reader.readMessage(value,k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.deserializeBinaryFromReader);
      msg.setCostperminute(value);
      break;
    case 3:
      var value = new k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity;
      reader.readMessage(value,k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.deserializeBinaryFromReader);
      msg.setCostspot(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCostperminute();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.serializeBinaryToWriter
    );
  }
  f = message.getCostspot();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.serializeBinaryToWriter
    );
  }
};


/**
 * optional string region = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.getRegion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.setRegion = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.clearRegion = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.hasRegion = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.api.resource.Quantity costPerMinute = 2;
 * @return {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.getCostperminute = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.api.resource.Quantity} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity, 2));
};


/** @param {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.setCostperminute = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.clearCostperminute = function() {
  this.setCostperminute(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.hasCostperminute = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional k8s.io.apimachinery.pkg.api.resource.Quantity costSpot = 3;
 * @return {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.getCostspot = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.api.resource.Quantity} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity, 3));
};


/** @param {?proto.k8s.io.apimachinery.pkg.api.resource.Quantity|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.setCostspot = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.clearCostspot = function() {
  this.setCostspot(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MachineClassCost.prototype.hasCostspot = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.toObject(includeInstance, f),
    status: (f = msg.getStatus()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.deserializeBinaryFromReader);
      msg.setSpec(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus.deserializeBinaryFromReader);
      msg.setStatus(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.serializeBinaryToWriter
    );
  }
  f = message.getStatus();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PretrainedModelSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.hasSpec = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional PretrainedModelStatus status = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.getStatus = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.setStatus = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.clearStatus = function() {
  this.setStatus(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PretrainedModel items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModel, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelList.prototype.clearItemsList = function() {
  this.setItemsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: jspb.Message.getField(msg, 1)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string image = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.prototype.setImage = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.prototype.clearImage = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelSpec.prototype.hasImage = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus.toObject = function(includeInstance, msg) {
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PretrainedModelStatus.serializeBinaryToWriter = function(message, writer) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PublicDatasetSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.prototype.hasSpec = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated PublicDataset items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDataset, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetList.prototype.clearItemsList = function() {
  this.setItemsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: jspb.Message.getField(msg, 1),
    task: jspb.Message.getField(msg, 2),
    id: jspb.Message.getField(msg, 3),
    externalname: jspb.Message.getField(msg, 4),
    dataurl: jspb.Message.getField(msg, 5)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTask(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExternalname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDataurl(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string image = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.setImage = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.clearImage = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.hasImage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string task = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.getTask = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.setTask = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.clearTask = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.hasTask = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.setId = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.clearId = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.hasId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string externalName = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.getExternalname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.setExternalname = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.clearExternalname = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.hasExternalname = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string dataUrl = 5;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.getDataurl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.setDataurl = function(value) {
  jspb.Message.setField(this, 5, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.clearDataurl = function() {
  jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.PublicDatasetSpec.prototype.hasDataurl = function() {
  return jspb.Message.getField(this, 5) != null;
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.repeatedFields_ = [5];



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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.toObject = function(includeInstance, msg) {
  var f, obj = {
    cloudname: jspb.Message.getField(msg, 1),
    defaultdatacentername: jspb.Message.getField(msg, 2),
    location: jspb.Message.getField(msg, 3),
    billingcode: jspb.Message.getField(msg, 4),
    datacentersList: jspb.Message.toObjectList(msg.getDatacentersList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setCloudname(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDefaultdatacentername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setLocation(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBillingcode(value);
      break;
    case 5:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.deserializeBinaryFromReader);
      msg.addDatacenters(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDatacentersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter.serializeBinaryToWriter
    );
  }
};


/**
 * optional string cloudName = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.getCloudname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.setCloudname = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.clearCloudname = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.hasCloudname = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string defaultDatacenterName = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.getDefaultdatacentername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.setDefaultdatacentername = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.clearDefaultdatacentername = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.hasDefaultdatacentername = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string location = 3;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.getLocation = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.setLocation = function(value) {
  jspb.Message.setField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.clearLocation = function() {
  jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.hasLocation = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string billingCode = 4;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.getBillingcode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.setBillingcode = function(value) {
  jspb.Message.setField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.clearBillingcode = function() {
  jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.hasBillingcode = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated DataCenter datacenters = 5;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.getDatacentersList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter, 5));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.setDatacentersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.addDatacenters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.DataCenter, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.Region.prototype.clearDatacentersList = function() {
  this.setDatacentersList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional UserRoleClassSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.prototype.hasSpec = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated UserRoleClass items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClass, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassList.prototype.clearItemsList = function() {
  this.setItemsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.repeatedFields_ = [1];



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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    rulesList: jspb.Message.toObjectList(msg.getRulesList(),
    k8s_io_api_rbac_v1_generated_pb.PolicyRule.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_api_rbac_v1_generated_pb.PolicyRule;
      reader.readMessage(value,k8s_io_api_rbac_v1_generated_pb.PolicyRule.deserializeBinaryFromReader);
      msg.addRules(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRulesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      k8s_io_api_rbac_v1_generated_pb.PolicyRule.serializeBinaryToWriter
    );
  }
};


/**
 * repeated k8s.io.api.rbac.v1.PolicyRule rules = 1;
 * @return {!Array<!proto.k8s.io.api.rbac.v1.PolicyRule>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.prototype.getRulesList = function() {
  return /** @type{!Array<!proto.k8s.io.api.rbac.v1.PolicyRule>} */ (
    jspb.Message.getRepeatedWrapperField(this, k8s_io_api_rbac_v1_generated_pb.PolicyRule, 1));
};


/** @param {!Array<!proto.k8s.io.api.rbac.v1.PolicyRule>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.prototype.setRulesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.k8s.io.api.rbac.v1.PolicyRule=} opt_value
 * @param {number=} opt_index
 * @return {!proto.k8s.io.api.rbac.v1.PolicyRule}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.prototype.addRules = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.k8s.io.api.rbac.v1.PolicyRule, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.UserRoleClassSpec.prototype.clearRulesList = function() {
  this.setRulesList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getField(msg, 1),
    uri: jspb.Message.getField(msg, 2)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.deserializeBinaryFromReader = function(msg, reader) {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.setName = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.clearName = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.hasName = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string uri = 2;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.setUri = function(value) {
  jspb.Message.setField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.clearUri = function() {
  jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.VizUri.prototype.hasUri = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass';
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.toObject(includeInstance, f),
    spec: (f = msg.getSpec()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.deserializeBinaryFromReader);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.serializeBinaryToWriter
    );
  }
  f = message.getSpec();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ObjectMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional WorkloadClassSpec spec = 2;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.getSpec = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec, 2));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.setSpec = function(value) {
  jspb.Message.setWrapperField(this, 2, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.clearSpec = function() {
  this.setSpec(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.prototype.hasSpec = function() {
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.toObject = function(includeInstance, msg) {
  var f, obj = {
    metadata: (f = msg.getMetadata()) && k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.toObject(includeInstance, f),
    itemsList: jspb.Message.toObjectList(msg.getItemsList(),
    proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.toObject, includeInstance)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta;
      reader.readMessage(value,k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.deserializeBinaryFromReader);
      msg.setMetadata(value);
      break;
    case 2:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.deserializeBinaryFromReader);
      msg.addItems(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMetadata();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.serializeBinaryToWriter
    );
  }
  f = message.getItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass.serializeBinaryToWriter
    );
  }
};


/**
 * optional k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta metadata = 1;
 * @return {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.getMetadata = function() {
  return /** @type{?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta} */ (
    jspb.Message.getWrapperField(this, k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta, 1));
};


/** @param {?proto.k8s.io.apimachinery.pkg.apis.meta.v1.ListMeta|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.setMetadata = function(value) {
  jspb.Message.setWrapperField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.clearMetadata = function() {
  this.setMetadata(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.hasMetadata = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated WorkloadClass items = 2;
 * @return {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.getItemsList = function() {
  return /** @type{!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass, 2));
};


/** @param {!Array<!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.setItemsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass=} opt_value
 * @param {number=} opt_index
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.addItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClass, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassList.prototype.clearItemsList = function() {
  this.setItemsList([]);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.repeatedFields_, null);
};
goog.inherits(proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.displayName = 'proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.repeatedFields_ = [2];



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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.toObject = function(opt_includeInstance) {
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: jspb.Message.getField(msg, 1),
    tasksList: jspb.Message.getRepeatedField(msg, 2),
    frameworks: (f = msg.getFrameworks()) && proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.toObject(includeInstance, f),
    podtemplate: (f = msg.getPodtemplate()) && k8s_io_api_core_v1_generated_pb.PodTemplateSpec.toObject(includeInstance, f)
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
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec;
  return proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addTasks(value);
      break;
    case 3:
      var value = new proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList;
      reader.readMessage(value,proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.deserializeBinaryFromReader);
      msg.setFrameworks(value);
      break;
    case 4:
      var value = new k8s_io_api_core_v1_generated_pb.PodTemplateSpec;
      reader.readMessage(value,k8s_io_api_core_v1_generated_pb.PodTemplateSpec.deserializeBinaryFromReader);
      msg.setPodtemplate(value);
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
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTasksList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getFrameworks();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList.serializeBinaryToWriter
    );
  }
  f = message.getPodtemplate();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      k8s_io_api_core_v1_generated_pb.PodTemplateSpec.serializeBinaryToWriter
    );
  }
};


/**
 * optional string image = 1;
 * @return {string}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.setImage = function(value) {
  jspb.Message.setField(this, 1, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.clearImage = function() {
  jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.hasImage = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated string tasks = 2;
 * @return {!Array<string>}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.getTasksList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.setTasksList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.addTasks = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.clearTasksList = function() {
  this.setTasksList([]);
};


/**
 * optional MLFrameworkList frameworks = 3;
 * @return {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.getFrameworks = function() {
  return /** @type{?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList} */ (
    jspb.Message.getWrapperField(this, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList, 3));
};


/** @param {?proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.MLFrameworkList|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.setFrameworks = function(value) {
  jspb.Message.setWrapperField(this, 3, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.clearFrameworks = function() {
  this.setFrameworks(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.hasFrameworks = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional k8s.io.api.core.v1.PodTemplateSpec podTemplate = 4;
 * @return {?proto.k8s.io.api.core.v1.PodTemplateSpec}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.getPodtemplate = function() {
  return /** @type{?proto.k8s.io.api.core.v1.PodTemplateSpec} */ (
    jspb.Message.getWrapperField(this, k8s_io_api_core_v1_generated_pb.PodTemplateSpec, 4));
};


/** @param {?proto.k8s.io.api.core.v1.PodTemplateSpec|undefined} value */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.setPodtemplate = function(value) {
  jspb.Message.setWrapperField(this, 4, value);
};


proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.clearPodtemplate = function() {
  this.setPodtemplate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {!boolean}
 */
proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1.WorkloadClassSpec.prototype.hasPodtemplate = function() {
  return jspb.Message.getField(this, 4) != null;
};


goog.object.extend(exports, proto.github.com.metaprov.modeldapi.pkg.apis.catalog.v1alpha1);