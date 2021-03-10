// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: k8s.io/apimachinery/pkg/runtime/generated.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace K8S.Io.Apimachinery.Pkg.Runtime {

  /// <summary>Holder for reflection information generated from k8s.io/apimachinery/pkg/runtime/generated.proto</summary>
  public static partial class GeneratedReflection {

    #region Descriptor
    /// <summary>File descriptor for k8s.io/apimachinery/pkg/runtime/generated.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static GeneratedReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Ci9rOHMuaW8vYXBpbWFjaGluZXJ5L3BrZy9ydW50aW1lL2dlbmVyYXRlZC5w",
            "cm90bxIfazhzLmlvLmFwaW1hY2hpbmVyeS5wa2cucnVudGltZSIbCgxSYXdF",
            "eHRlbnNpb24SCwoDcmF3GAEgASgMIiwKCFR5cGVNZXRhEhIKCmFwaVZlcnNp",
            "b24YASABKAkSDAoEa2luZBgCIAEoCSKBAQoHVW5rbm93bhI7Cgh0eXBlTWV0",
            "YRgBIAEoCzIpLms4cy5pby5hcGltYWNoaW5lcnkucGtnLnJ1bnRpbWUuVHlw",
            "ZU1ldGESCwoDcmF3GAIgASgMEhcKD2NvbnRlbnRFbmNvZGluZxgDIAEoCRIT",
            "Cgtjb250ZW50VHlwZRgEIAEoCUIJWgdydW50aW1l"));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::K8S.Io.Apimachinery.Pkg.Runtime.RawExtension), global::K8S.Io.Apimachinery.Pkg.Runtime.RawExtension.Parser, new[]{ "Raw" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::K8S.Io.Apimachinery.Pkg.Runtime.TypeMeta), global::K8S.Io.Apimachinery.Pkg.Runtime.TypeMeta.Parser, new[]{ "ApiVersion", "Kind" }, null, null, null, null),
            new pbr::GeneratedClrTypeInfo(typeof(global::K8S.Io.Apimachinery.Pkg.Runtime.Unknown), global::K8S.Io.Apimachinery.Pkg.Runtime.Unknown.Parser, new[]{ "TypeMeta", "Raw", "ContentEncoding", "ContentType" }, null, null, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  /// <summary>
  /// RawExtension is used to hold extensions in external versions.
  ///
  /// To use this, make a field which has RawExtension as its type in your external, versioned
  /// struct, and Object in your internal struct. You also need to register your
  /// various plugin types.
  ///
  /// // Internal package:
  /// type MyAPIObject struct {
  /// 	runtime.TypeMeta `json:",inline"`
  /// 	MyPlugin runtime.Object `json:"myPlugin"`
  /// }
  /// type PluginA struct {
  /// 	AOption string `json:"aOption"`
  /// }
  ///
  /// // External package:
  /// type MyAPIObject struct {
  /// 	runtime.TypeMeta `json:",inline"`
  /// 	MyPlugin runtime.RawExtension `json:"myPlugin"`
  /// }
  /// type PluginA struct {
  /// 	AOption string `json:"aOption"`
  /// }
  ///
  /// // On the wire, the JSON will look something like this:
  /// {
  /// 	"kind":"MyAPIObject",
  /// 	"apiVersion":"v1",
  /// 	"myPlugin": {
  /// 		"kind":"PluginA",
  /// 		"aOption":"foo",
  /// 	},
  /// }
  ///
  /// So what happens? Decode first uses json or yaml to unmarshal the serialized data into
  /// your external MyAPIObject. That causes the raw JSON to be stored, but not unpacked.
  /// The next step is to copy (using pkg/conversion) into the internal struct. The runtime
  /// package's DefaultScheme has conversion functions installed which will unpack the
  /// JSON stored in RawExtension, turning it into the correct object type, and storing it
  /// in the Object. (TODO: In the case where the object is of an unknown type, a
  /// runtime.Unknown object will be created and stored.)
  ///
  /// +k8s:deepcopy-gen=true
  /// +protobuf=true
  /// +k8s:openapi-gen=true
  /// </summary>
  public sealed partial class RawExtension : pb::IMessage<RawExtension>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<RawExtension> _parser = new pb::MessageParser<RawExtension>(() => new RawExtension());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<RawExtension> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::K8S.Io.Apimachinery.Pkg.Runtime.GeneratedReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RawExtension() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RawExtension(RawExtension other) : this() {
      raw_ = other.raw_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public RawExtension Clone() {
      return new RawExtension(this);
    }

    /// <summary>Field number for the "raw" field.</summary>
    public const int RawFieldNumber = 1;
    private readonly static pb::ByteString RawDefaultValue = pb::ByteString.Empty;

    private pb::ByteString raw_;
    /// <summary>
    /// Raw is the underlying serialization of this object.
    ///
    /// TODO: Determine how to detect ContentType and ContentEncoding of 'Raw' data.
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pb::ByteString Raw {
      get { return raw_ ?? RawDefaultValue; }
      set {
        raw_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }
    /// <summary>Gets whether the "raw" field is set</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool HasRaw {
      get { return raw_ != null; }
    }
    /// <summary>Clears the value of the "raw" field</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void ClearRaw() {
      raw_ = null;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as RawExtension);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(RawExtension other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Raw != other.Raw) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (HasRaw) hash ^= Raw.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (HasRaw) {
        output.WriteRawTag(10);
        output.WriteBytes(Raw);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (HasRaw) {
        output.WriteRawTag(10);
        output.WriteBytes(Raw);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (HasRaw) {
        size += 1 + pb::CodedOutputStream.ComputeBytesSize(Raw);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(RawExtension other) {
      if (other == null) {
        return;
      }
      if (other.HasRaw) {
        Raw = other.Raw;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            Raw = input.ReadBytes();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            Raw = input.ReadBytes();
            break;
          }
        }
      }
    }
    #endif

  }

  /// <summary>
  /// TypeMeta is shared by all top level objects. The proper way to use it is to inline it in your type,
  /// like this:
  /// type MyAwesomeAPIObject struct {
  ///      runtime.TypeMeta    `json:",inline"`
  ///      ... // other fields
  /// }
  /// func (obj *MyAwesomeAPIObject) SetGroupVersionKind(gvk *metav1.GroupVersionKind) { metav1.UpdateTypeMeta(obj,gvk) }; GroupVersionKind() *GroupVersionKind
  ///
  /// TypeMeta is provided here for convenience. You may use it directly from this package or define
  /// your own with the same fields.
  ///
  /// +k8s:deepcopy-gen=false
  /// +protobuf=true
  /// +k8s:openapi-gen=true
  /// </summary>
  public sealed partial class TypeMeta : pb::IMessage<TypeMeta>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<TypeMeta> _parser = new pb::MessageParser<TypeMeta>(() => new TypeMeta());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<TypeMeta> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::K8S.Io.Apimachinery.Pkg.Runtime.GeneratedReflection.Descriptor.MessageTypes[1]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TypeMeta() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TypeMeta(TypeMeta other) : this() {
      apiVersion_ = other.apiVersion_;
      kind_ = other.kind_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public TypeMeta Clone() {
      return new TypeMeta(this);
    }

    /// <summary>Field number for the "apiVersion" field.</summary>
    public const int ApiVersionFieldNumber = 1;
    private readonly static string ApiVersionDefaultValue = "";

    private string apiVersion_;
    /// <summary>
    /// +optional
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string ApiVersion {
      get { return apiVersion_ ?? ApiVersionDefaultValue; }
      set {
        apiVersion_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }
    /// <summary>Gets whether the "apiVersion" field is set</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool HasApiVersion {
      get { return apiVersion_ != null; }
    }
    /// <summary>Clears the value of the "apiVersion" field</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void ClearApiVersion() {
      apiVersion_ = null;
    }

    /// <summary>Field number for the "kind" field.</summary>
    public const int KindFieldNumber = 2;
    private readonly static string KindDefaultValue = "";

    private string kind_;
    /// <summary>
    /// +optional
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string Kind {
      get { return kind_ ?? KindDefaultValue; }
      set {
        kind_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }
    /// <summary>Gets whether the "kind" field is set</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool HasKind {
      get { return kind_ != null; }
    }
    /// <summary>Clears the value of the "kind" field</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void ClearKind() {
      kind_ = null;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as TypeMeta);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(TypeMeta other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (ApiVersion != other.ApiVersion) return false;
      if (Kind != other.Kind) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (HasApiVersion) hash ^= ApiVersion.GetHashCode();
      if (HasKind) hash ^= Kind.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (HasApiVersion) {
        output.WriteRawTag(10);
        output.WriteString(ApiVersion);
      }
      if (HasKind) {
        output.WriteRawTag(18);
        output.WriteString(Kind);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (HasApiVersion) {
        output.WriteRawTag(10);
        output.WriteString(ApiVersion);
      }
      if (HasKind) {
        output.WriteRawTag(18);
        output.WriteString(Kind);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (HasApiVersion) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ApiVersion);
      }
      if (HasKind) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(Kind);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(TypeMeta other) {
      if (other == null) {
        return;
      }
      if (other.HasApiVersion) {
        ApiVersion = other.ApiVersion;
      }
      if (other.HasKind) {
        Kind = other.Kind;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            ApiVersion = input.ReadString();
            break;
          }
          case 18: {
            Kind = input.ReadString();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            ApiVersion = input.ReadString();
            break;
          }
          case 18: {
            Kind = input.ReadString();
            break;
          }
        }
      }
    }
    #endif

  }

  /// <summary>
  /// Unknown allows api objects with unknown types to be passed-through. This can be used
  /// to deal with the API objects from a plug-in. Unknown objects still have functioning
  /// TypeMeta features-- kind, version, etc.
  /// TODO: Make this object have easy access to field based accessors and settors for
  /// metadata and field mutatation.
  ///
  /// +k8s:deepcopy-gen=true
  /// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
  /// +protobuf=true
  /// +k8s:openapi-gen=true
  /// </summary>
  public sealed partial class Unknown : pb::IMessage<Unknown>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<Unknown> _parser = new pb::MessageParser<Unknown>(() => new Unknown());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<Unknown> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::K8S.Io.Apimachinery.Pkg.Runtime.GeneratedReflection.Descriptor.MessageTypes[2]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Unknown() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Unknown(Unknown other) : this() {
      typeMeta_ = other.typeMeta_ != null ? other.typeMeta_.Clone() : null;
      raw_ = other.raw_;
      contentEncoding_ = other.contentEncoding_;
      contentType_ = other.contentType_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public Unknown Clone() {
      return new Unknown(this);
    }

    /// <summary>Field number for the "typeMeta" field.</summary>
    public const int TypeMetaFieldNumber = 1;
    private global::K8S.Io.Apimachinery.Pkg.Runtime.TypeMeta typeMeta_;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::K8S.Io.Apimachinery.Pkg.Runtime.TypeMeta TypeMeta {
      get { return typeMeta_; }
      set {
        typeMeta_ = value;
      }
    }

    /// <summary>Field number for the "raw" field.</summary>
    public const int RawFieldNumber = 2;
    private readonly static pb::ByteString RawDefaultValue = pb::ByteString.Empty;

    private pb::ByteString raw_;
    /// <summary>
    /// Raw will hold the complete serialized object which couldn't be matched
    /// with a registered type. Most likely, nothing should be done with this
    /// except for passing it through the system.
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public pb::ByteString Raw {
      get { return raw_ ?? RawDefaultValue; }
      set {
        raw_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }
    /// <summary>Gets whether the "raw" field is set</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool HasRaw {
      get { return raw_ != null; }
    }
    /// <summary>Clears the value of the "raw" field</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void ClearRaw() {
      raw_ = null;
    }

    /// <summary>Field number for the "contentEncoding" field.</summary>
    public const int ContentEncodingFieldNumber = 3;
    private readonly static string ContentEncodingDefaultValue = "";

    private string contentEncoding_;
    /// <summary>
    /// ContentEncoding is encoding used to encode 'Raw' data.
    /// Unspecified means no encoding.
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string ContentEncoding {
      get { return contentEncoding_ ?? ContentEncodingDefaultValue; }
      set {
        contentEncoding_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }
    /// <summary>Gets whether the "contentEncoding" field is set</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool HasContentEncoding {
      get { return contentEncoding_ != null; }
    }
    /// <summary>Clears the value of the "contentEncoding" field</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void ClearContentEncoding() {
      contentEncoding_ = null;
    }

    /// <summary>Field number for the "contentType" field.</summary>
    public const int ContentTypeFieldNumber = 4;
    private readonly static string ContentTypeDefaultValue = "";

    private string contentType_;
    /// <summary>
    /// ContentType  is serialization method used to serialize 'Raw'.
    /// Unspecified means ContentTypeJSON.
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public string ContentType {
      get { return contentType_ ?? ContentTypeDefaultValue; }
      set {
        contentType_ = pb::ProtoPreconditions.CheckNotNull(value, "value");
      }
    }
    /// <summary>Gets whether the "contentType" field is set</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool HasContentType {
      get { return contentType_ != null; }
    }
    /// <summary>Clears the value of the "contentType" field</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void ClearContentType() {
      contentType_ = null;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as Unknown);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(Unknown other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (!object.Equals(TypeMeta, other.TypeMeta)) return false;
      if (Raw != other.Raw) return false;
      if (ContentEncoding != other.ContentEncoding) return false;
      if (ContentType != other.ContentType) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (typeMeta_ != null) hash ^= TypeMeta.GetHashCode();
      if (HasRaw) hash ^= Raw.GetHashCode();
      if (HasContentEncoding) hash ^= ContentEncoding.GetHashCode();
      if (HasContentType) hash ^= ContentType.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (typeMeta_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(TypeMeta);
      }
      if (HasRaw) {
        output.WriteRawTag(18);
        output.WriteBytes(Raw);
      }
      if (HasContentEncoding) {
        output.WriteRawTag(26);
        output.WriteString(ContentEncoding);
      }
      if (HasContentType) {
        output.WriteRawTag(34);
        output.WriteString(ContentType);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (typeMeta_ != null) {
        output.WriteRawTag(10);
        output.WriteMessage(TypeMeta);
      }
      if (HasRaw) {
        output.WriteRawTag(18);
        output.WriteBytes(Raw);
      }
      if (HasContentEncoding) {
        output.WriteRawTag(26);
        output.WriteString(ContentEncoding);
      }
      if (HasContentType) {
        output.WriteRawTag(34);
        output.WriteString(ContentType);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (typeMeta_ != null) {
        size += 1 + pb::CodedOutputStream.ComputeMessageSize(TypeMeta);
      }
      if (HasRaw) {
        size += 1 + pb::CodedOutputStream.ComputeBytesSize(Raw);
      }
      if (HasContentEncoding) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ContentEncoding);
      }
      if (HasContentType) {
        size += 1 + pb::CodedOutputStream.ComputeStringSize(ContentType);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(Unknown other) {
      if (other == null) {
        return;
      }
      if (other.typeMeta_ != null) {
        if (typeMeta_ == null) {
          TypeMeta = new global::K8S.Io.Apimachinery.Pkg.Runtime.TypeMeta();
        }
        TypeMeta.MergeFrom(other.TypeMeta);
      }
      if (other.HasRaw) {
        Raw = other.Raw;
      }
      if (other.HasContentEncoding) {
        ContentEncoding = other.ContentEncoding;
      }
      if (other.HasContentType) {
        ContentType = other.ContentType;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 10: {
            if (typeMeta_ == null) {
              TypeMeta = new global::K8S.Io.Apimachinery.Pkg.Runtime.TypeMeta();
            }
            input.ReadMessage(TypeMeta);
            break;
          }
          case 18: {
            Raw = input.ReadBytes();
            break;
          }
          case 26: {
            ContentEncoding = input.ReadString();
            break;
          }
          case 34: {
            ContentType = input.ReadString();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 10: {
            if (typeMeta_ == null) {
              TypeMeta = new global::K8S.Io.Apimachinery.Pkg.Runtime.TypeMeta();
            }
            input.ReadMessage(TypeMeta);
            break;
          }
          case 18: {
            Raw = input.ReadBytes();
            break;
          }
          case 26: {
            ContentEncoding = input.ReadString();
            break;
          }
          case 34: {
            ContentType = input.ReadString();
            break;
          }
        }
      }
    }
    #endif

  }

  #endregion

}

#endregion Designer generated code