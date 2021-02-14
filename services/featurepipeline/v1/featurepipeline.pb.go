// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: services/featurepipeline/v1/featurepipeline.proto

package v1

import (
	context "context"
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	v1alpha1 "github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"
	_ "google.golang.org/genproto/googleapis/api/annotations"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type ListFeaturePipelineRequest struct {
	Namespace            string            `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Labels               map[string]string `protobuf:"bytes,2,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *ListFeaturePipelineRequest) Reset()         { *m = ListFeaturePipelineRequest{} }
func (m *ListFeaturePipelineRequest) String() string { return proto.CompactTextString(m) }
func (*ListFeaturePipelineRequest) ProtoMessage()    {}
func (*ListFeaturePipelineRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_489c82caa82b4db5, []int{0}
}
func (m *ListFeaturePipelineRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListFeaturePipelineRequest.Unmarshal(m, b)
}
func (m *ListFeaturePipelineRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListFeaturePipelineRequest.Marshal(b, m, deterministic)
}
func (m *ListFeaturePipelineRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListFeaturePipelineRequest.Merge(m, src)
}
func (m *ListFeaturePipelineRequest) XXX_Size() int {
	return xxx_messageInfo_ListFeaturePipelineRequest.Size(m)
}
func (m *ListFeaturePipelineRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListFeaturePipelineRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListFeaturePipelineRequest proto.InternalMessageInfo

func (m *ListFeaturePipelineRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *ListFeaturePipelineRequest) GetLabels() map[string]string {
	if m != nil {
		return m.Labels
	}
	return nil
}

type ListFeaturePipelineResponse struct {
	Items                *v1alpha1.FeaturePipelineList `protobuf:"bytes,1,opt,name=items,proto3" json:"items,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                      `json:"-"`
	XXX_unrecognized     []byte                        `json:"-"`
	XXX_sizecache        int32                         `json:"-"`
}

func (m *ListFeaturePipelineResponse) Reset()         { *m = ListFeaturePipelineResponse{} }
func (m *ListFeaturePipelineResponse) String() string { return proto.CompactTextString(m) }
func (*ListFeaturePipelineResponse) ProtoMessage()    {}
func (*ListFeaturePipelineResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_489c82caa82b4db5, []int{1}
}
func (m *ListFeaturePipelineResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListFeaturePipelineResponse.Unmarshal(m, b)
}
func (m *ListFeaturePipelineResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListFeaturePipelineResponse.Marshal(b, m, deterministic)
}
func (m *ListFeaturePipelineResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListFeaturePipelineResponse.Merge(m, src)
}
func (m *ListFeaturePipelineResponse) XXX_Size() int {
	return xxx_messageInfo_ListFeaturePipelineResponse.Size(m)
}
func (m *ListFeaturePipelineResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ListFeaturePipelineResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ListFeaturePipelineResponse proto.InternalMessageInfo

func (m *ListFeaturePipelineResponse) GetItems() *v1alpha1.FeaturePipelineList {
	if m != nil {
		return m.Items
	}
	return nil
}

type CreateFeaturePipelineRequest struct {
	Namespace            string                        `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string                        `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Labels               map[string]string             `protobuf:"bytes,3,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Spec                 *v1alpha1.FeaturePipelineSpec `protobuf:"bytes,4,opt,name=spec,proto3" json:"spec,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                      `json:"-"`
	XXX_unrecognized     []byte                        `json:"-"`
	XXX_sizecache        int32                         `json:"-"`
}

func (m *CreateFeaturePipelineRequest) Reset()         { *m = CreateFeaturePipelineRequest{} }
func (m *CreateFeaturePipelineRequest) String() string { return proto.CompactTextString(m) }
func (*CreateFeaturePipelineRequest) ProtoMessage()    {}
func (*CreateFeaturePipelineRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_489c82caa82b4db5, []int{2}
}
func (m *CreateFeaturePipelineRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateFeaturePipelineRequest.Unmarshal(m, b)
}
func (m *CreateFeaturePipelineRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateFeaturePipelineRequest.Marshal(b, m, deterministic)
}
func (m *CreateFeaturePipelineRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateFeaturePipelineRequest.Merge(m, src)
}
func (m *CreateFeaturePipelineRequest) XXX_Size() int {
	return xxx_messageInfo_CreateFeaturePipelineRequest.Size(m)
}
func (m *CreateFeaturePipelineRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateFeaturePipelineRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateFeaturePipelineRequest proto.InternalMessageInfo

func (m *CreateFeaturePipelineRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *CreateFeaturePipelineRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *CreateFeaturePipelineRequest) GetLabels() map[string]string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *CreateFeaturePipelineRequest) GetSpec() *v1alpha1.FeaturePipelineSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

type CreateFeaturePipelineResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreateFeaturePipelineResponse) Reset()         { *m = CreateFeaturePipelineResponse{} }
func (m *CreateFeaturePipelineResponse) String() string { return proto.CompactTextString(m) }
func (*CreateFeaturePipelineResponse) ProtoMessage()    {}
func (*CreateFeaturePipelineResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_489c82caa82b4db5, []int{3}
}
func (m *CreateFeaturePipelineResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateFeaturePipelineResponse.Unmarshal(m, b)
}
func (m *CreateFeaturePipelineResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateFeaturePipelineResponse.Marshal(b, m, deterministic)
}
func (m *CreateFeaturePipelineResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateFeaturePipelineResponse.Merge(m, src)
}
func (m *CreateFeaturePipelineResponse) XXX_Size() int {
	return xxx_messageInfo_CreateFeaturePipelineResponse.Size(m)
}
func (m *CreateFeaturePipelineResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateFeaturePipelineResponse.DiscardUnknown(m)
}

var xxx_messageInfo_CreateFeaturePipelineResponse proto.InternalMessageInfo

type UpdateFeaturePipelineRequest struct {
	Namespace            string                        `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string                        `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Labels               map[string]string             `protobuf:"bytes,3,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Spec                 *v1alpha1.FeaturePipelineSpec `protobuf:"bytes,5,opt,name=spec,proto3" json:"spec,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                      `json:"-"`
	XXX_unrecognized     []byte                        `json:"-"`
	XXX_sizecache        int32                         `json:"-"`
}

func (m *UpdateFeaturePipelineRequest) Reset()         { *m = UpdateFeaturePipelineRequest{} }
func (m *UpdateFeaturePipelineRequest) String() string { return proto.CompactTextString(m) }
func (*UpdateFeaturePipelineRequest) ProtoMessage()    {}
func (*UpdateFeaturePipelineRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_489c82caa82b4db5, []int{4}
}
func (m *UpdateFeaturePipelineRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateFeaturePipelineRequest.Unmarshal(m, b)
}
func (m *UpdateFeaturePipelineRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateFeaturePipelineRequest.Marshal(b, m, deterministic)
}
func (m *UpdateFeaturePipelineRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateFeaturePipelineRequest.Merge(m, src)
}
func (m *UpdateFeaturePipelineRequest) XXX_Size() int {
	return xxx_messageInfo_UpdateFeaturePipelineRequest.Size(m)
}
func (m *UpdateFeaturePipelineRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateFeaturePipelineRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateFeaturePipelineRequest proto.InternalMessageInfo

func (m *UpdateFeaturePipelineRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *UpdateFeaturePipelineRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *UpdateFeaturePipelineRequest) GetLabels() map[string]string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *UpdateFeaturePipelineRequest) GetSpec() *v1alpha1.FeaturePipelineSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

type UpdateFeaturePipelineResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UpdateFeaturePipelineResponse) Reset()         { *m = UpdateFeaturePipelineResponse{} }
func (m *UpdateFeaturePipelineResponse) String() string { return proto.CompactTextString(m) }
func (*UpdateFeaturePipelineResponse) ProtoMessage()    {}
func (*UpdateFeaturePipelineResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_489c82caa82b4db5, []int{5}
}
func (m *UpdateFeaturePipelineResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateFeaturePipelineResponse.Unmarshal(m, b)
}
func (m *UpdateFeaturePipelineResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateFeaturePipelineResponse.Marshal(b, m, deterministic)
}
func (m *UpdateFeaturePipelineResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateFeaturePipelineResponse.Merge(m, src)
}
func (m *UpdateFeaturePipelineResponse) XXX_Size() int {
	return xxx_messageInfo_UpdateFeaturePipelineResponse.Size(m)
}
func (m *UpdateFeaturePipelineResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateFeaturePipelineResponse.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateFeaturePipelineResponse proto.InternalMessageInfo

type GetFeaturePipelineRequest struct {
	Namespace            string   `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetFeaturePipelineRequest) Reset()         { *m = GetFeaturePipelineRequest{} }
func (m *GetFeaturePipelineRequest) String() string { return proto.CompactTextString(m) }
func (*GetFeaturePipelineRequest) ProtoMessage()    {}
func (*GetFeaturePipelineRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_489c82caa82b4db5, []int{6}
}
func (m *GetFeaturePipelineRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetFeaturePipelineRequest.Unmarshal(m, b)
}
func (m *GetFeaturePipelineRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetFeaturePipelineRequest.Marshal(b, m, deterministic)
}
func (m *GetFeaturePipelineRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetFeaturePipelineRequest.Merge(m, src)
}
func (m *GetFeaturePipelineRequest) XXX_Size() int {
	return xxx_messageInfo_GetFeaturePipelineRequest.Size(m)
}
func (m *GetFeaturePipelineRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetFeaturePipelineRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetFeaturePipelineRequest proto.InternalMessageInfo

func (m *GetFeaturePipelineRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *GetFeaturePipelineRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type GetFeaturePipelineResponse struct {
	Item                 *v1alpha1.FeaturePipeline `protobuf:"bytes,1,opt,name=item,proto3" json:"item,omitempty"`
	Yaml                 string                    `protobuf:"bytes,2,opt,name=yaml,proto3" json:"yaml,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                  `json:"-"`
	XXX_unrecognized     []byte                    `json:"-"`
	XXX_sizecache        int32                     `json:"-"`
}

func (m *GetFeaturePipelineResponse) Reset()         { *m = GetFeaturePipelineResponse{} }
func (m *GetFeaturePipelineResponse) String() string { return proto.CompactTextString(m) }
func (*GetFeaturePipelineResponse) ProtoMessage()    {}
func (*GetFeaturePipelineResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_489c82caa82b4db5, []int{7}
}
func (m *GetFeaturePipelineResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetFeaturePipelineResponse.Unmarshal(m, b)
}
func (m *GetFeaturePipelineResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetFeaturePipelineResponse.Marshal(b, m, deterministic)
}
func (m *GetFeaturePipelineResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetFeaturePipelineResponse.Merge(m, src)
}
func (m *GetFeaturePipelineResponse) XXX_Size() int {
	return xxx_messageInfo_GetFeaturePipelineResponse.Size(m)
}
func (m *GetFeaturePipelineResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetFeaturePipelineResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetFeaturePipelineResponse proto.InternalMessageInfo

func (m *GetFeaturePipelineResponse) GetItem() *v1alpha1.FeaturePipeline {
	if m != nil {
		return m.Item
	}
	return nil
}

func (m *GetFeaturePipelineResponse) GetYaml() string {
	if m != nil {
		return m.Yaml
	}
	return ""
}

type DeleteFeaturePipelineRequest struct {
	Namespace            string   `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteFeaturePipelineRequest) Reset()         { *m = DeleteFeaturePipelineRequest{} }
func (m *DeleteFeaturePipelineRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteFeaturePipelineRequest) ProtoMessage()    {}
func (*DeleteFeaturePipelineRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_489c82caa82b4db5, []int{8}
}
func (m *DeleteFeaturePipelineRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteFeaturePipelineRequest.Unmarshal(m, b)
}
func (m *DeleteFeaturePipelineRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteFeaturePipelineRequest.Marshal(b, m, deterministic)
}
func (m *DeleteFeaturePipelineRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteFeaturePipelineRequest.Merge(m, src)
}
func (m *DeleteFeaturePipelineRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteFeaturePipelineRequest.Size(m)
}
func (m *DeleteFeaturePipelineRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteFeaturePipelineRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteFeaturePipelineRequest proto.InternalMessageInfo

func (m *DeleteFeaturePipelineRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *DeleteFeaturePipelineRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type DeleteFeaturePipelineResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteFeaturePipelineResponse) Reset()         { *m = DeleteFeaturePipelineResponse{} }
func (m *DeleteFeaturePipelineResponse) String() string { return proto.CompactTextString(m) }
func (*DeleteFeaturePipelineResponse) ProtoMessage()    {}
func (*DeleteFeaturePipelineResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_489c82caa82b4db5, []int{9}
}
func (m *DeleteFeaturePipelineResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteFeaturePipelineResponse.Unmarshal(m, b)
}
func (m *DeleteFeaturePipelineResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteFeaturePipelineResponse.Marshal(b, m, deterministic)
}
func (m *DeleteFeaturePipelineResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteFeaturePipelineResponse.Merge(m, src)
}
func (m *DeleteFeaturePipelineResponse) XXX_Size() int {
	return xxx_messageInfo_DeleteFeaturePipelineResponse.Size(m)
}
func (m *DeleteFeaturePipelineResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteFeaturePipelineResponse.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteFeaturePipelineResponse proto.InternalMessageInfo

func init() {
	proto.RegisterType((*ListFeaturePipelineRequest)(nil), "github.com.metaprov.modeld.services.featurepipeline.v1.ListFeaturePipelineRequest")
	proto.RegisterMapType((map[string]string)(nil), "github.com.metaprov.modeld.services.featurepipeline.v1.ListFeaturePipelineRequest.LabelsEntry")
	proto.RegisterType((*ListFeaturePipelineResponse)(nil), "github.com.metaprov.modeld.services.featurepipeline.v1.ListFeaturePipelineResponse")
	proto.RegisterType((*CreateFeaturePipelineRequest)(nil), "github.com.metaprov.modeld.services.featurepipeline.v1.CreateFeaturePipelineRequest")
	proto.RegisterMapType((map[string]string)(nil), "github.com.metaprov.modeld.services.featurepipeline.v1.CreateFeaturePipelineRequest.LabelsEntry")
	proto.RegisterType((*CreateFeaturePipelineResponse)(nil), "github.com.metaprov.modeld.services.featurepipeline.v1.CreateFeaturePipelineResponse")
	proto.RegisterType((*UpdateFeaturePipelineRequest)(nil), "github.com.metaprov.modeld.services.featurepipeline.v1.UpdateFeaturePipelineRequest")
	proto.RegisterMapType((map[string]string)(nil), "github.com.metaprov.modeld.services.featurepipeline.v1.UpdateFeaturePipelineRequest.LabelsEntry")
	proto.RegisterType((*UpdateFeaturePipelineResponse)(nil), "github.com.metaprov.modeld.services.featurepipeline.v1.UpdateFeaturePipelineResponse")
	proto.RegisterType((*GetFeaturePipelineRequest)(nil), "github.com.metaprov.modeld.services.featurepipeline.v1.GetFeaturePipelineRequest")
	proto.RegisterType((*GetFeaturePipelineResponse)(nil), "github.com.metaprov.modeld.services.featurepipeline.v1.GetFeaturePipelineResponse")
	proto.RegisterType((*DeleteFeaturePipelineRequest)(nil), "github.com.metaprov.modeld.services.featurepipeline.v1.DeleteFeaturePipelineRequest")
	proto.RegisterType((*DeleteFeaturePipelineResponse)(nil), "github.com.metaprov.modeld.services.featurepipeline.v1.DeleteFeaturePipelineResponse")
}

func init() {
	proto.RegisterFile("services/featurepipeline/v1/featurepipeline.proto", fileDescriptor_489c82caa82b4db5)
}

var fileDescriptor_489c82caa82b4db5 = []byte{
	// 646 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xcc, 0x56, 0xcd, 0x6e, 0xd3, 0x40,
	0x10, 0xc6, 0x6e, 0x5a, 0xa9, 0xd3, 0x03, 0x68, 0xd5, 0x54, 0xc1, 0x4d, 0x45, 0x65, 0x0e, 0xf4,
	0x00, 0x6b, 0x25, 0x48, 0x88, 0x96, 0x03, 0x12, 0x34, 0x20, 0xa4, 0x22, 0x15, 0x97, 0x1e, 0x40,
	0xe2, 0x67, 0x93, 0x0c, 0xae, 0x15, 0xff, 0x2c, 0xde, 0x8d, 0x45, 0x84, 0xe0, 0xc0, 0xb5, 0x47,
	0x5e, 0x82, 0x27, 0xe1, 0x05, 0x38, 0x23, 0x71, 0xe8, 0x95, 0x13, 0x2f, 0x80, 0x76, 0xed, 0x50,
	0x94, 0x3a, 0x3e, 0x18, 0x23, 0xf5, 0xb6, 0x1e, 0x69, 0xbf, 0x99, 0x6f, 0xbe, 0x99, 0xcf, 0x0b,
	0x1d, 0x81, 0x49, 0xea, 0x0f, 0x50, 0x38, 0x6f, 0x90, 0xc9, 0x71, 0x82, 0xdc, 0xe7, 0x18, 0xf8,
	0x11, 0x3a, 0x69, 0x67, 0x36, 0x44, 0x79, 0x12, 0xcb, 0x98, 0xdc, 0xf2, 0x7c, 0x79, 0x34, 0xee,
	0xd3, 0x41, 0x1c, 0xd2, 0x10, 0x25, 0xe3, 0x49, 0x9c, 0xd2, 0x30, 0x1e, 0x62, 0x30, 0xa4, 0x53,
	0x34, 0x3a, 0x7b, 0x35, 0xed, 0x58, 0x6d, 0x2f, 0x8e, 0xbd, 0x00, 0x1d, 0xc6, 0x7d, 0x87, 0x45,
	0x51, 0x2c, 0x99, 0xf4, 0xe3, 0x48, 0x64, 0xa8, 0xd6, 0xee, 0x29, 0xaa, 0x33, 0x45, 0x75, 0x32,
	0x54, 0x75, 0x81, 0x8f, 0x3c, 0x75, 0x51, 0x38, 0x43, 0x26, 0x99, 0x93, 0x76, 0x58, 0xc0, 0x8f,
	0x58, 0xc7, 0xf1, 0x30, 0xc2, 0x84, 0x49, 0x1c, 0x66, 0x28, 0xf6, 0x4f, 0x03, 0xac, 0x3d, 0x5f,
	0xc8, 0x07, 0x59, 0xfa, 0xfd, 0x3c, 0xbd, 0x8b, 0x6f, 0xc7, 0x28, 0x24, 0x69, 0xc3, 0x72, 0xc4,
	0x42, 0x14, 0x9c, 0x0d, 0xb0, 0x65, 0x6c, 0x1a, 0x5b, 0xcb, 0xee, 0x69, 0x80, 0xa4, 0xb0, 0x14,
	0xb0, 0x3e, 0x06, 0xa2, 0x65, 0x6e, 0x2e, 0x6c, 0xad, 0x74, 0x5f, 0xd2, 0x6a, 0x4c, 0xe9, 0xfc,
	0x0a, 0xe8, 0x9e, 0x4e, 0xd0, 0x8b, 0x64, 0x32, 0x71, 0xf3, 0x6c, 0xd6, 0x36, 0xac, 0xfc, 0x15,
	0x26, 0x97, 0x60, 0x61, 0x84, 0x93, 0xbc, 0x3c, 0x75, 0x24, 0xab, 0xb0, 0x98, 0xb2, 0x60, 0x8c,
	0x2d, 0x53, 0xc7, 0xb2, 0x8f, 0x1d, 0xf3, 0xb6, 0x61, 0x7f, 0x84, 0xf5, 0xc2, 0x64, 0x82, 0xc7,
	0x91, 0x40, 0xf2, 0x0a, 0x16, 0x7d, 0x89, 0xa1, 0xd0, 0x60, 0x2b, 0xdd, 0x47, 0x25, 0x84, 0x18,
	0xf7, 0x29, 0x1f, 0x79, 0x54, 0x35, 0x99, 0xaa, 0x26, 0xd3, 0x69, 0x93, 0xe9, 0x0c, 0xba, 0x4a,
	0xe8, 0x66, 0xb8, 0xf6, 0x89, 0x09, 0xed, 0xfb, 0x09, 0x32, 0x89, 0x95, 0x3a, 0x4e, 0xa0, 0xa1,
	0x3e, 0x72, 0x5e, 0xfa, 0x4c, 0xde, 0xfd, 0x51, 0x61, 0x41, 0xab, 0xf0, 0xba, 0xaa, 0x0a, 0x65,
	0x75, 0x15, 0xe9, 0x40, 0x5e, 0x40, 0x43, 0x70, 0x1c, 0xb4, 0x1a, 0x35, 0x36, 0xeb, 0x80, 0xe3,
	0xc0, 0xd5, 0xb0, 0xff, 0x22, 0xf3, 0x15, 0xd8, 0x98, 0xc3, 0x26, 0x13, 0x5a, 0xeb, 0x70, 0xc8,
	0x87, 0xe7, 0x52, 0x87, 0xb2, 0xba, 0x4a, 0x75, 0x58, 0x3c, 0x8f, 0x3a, 0xcc, 0x61, 0x93, 0xeb,
	0xf0, 0x18, 0x2e, 0x3f, 0x44, 0x59, 0x97, 0x06, 0xf6, 0xb1, 0x01, 0x56, 0x11, 0x5e, 0xbe, 0xde,
	0xcf, 0xa0, 0xa1, 0xd6, 0x30, 0xdf, 0xee, 0x5e, 0x2d, 0x8d, 0x72, 0x35, 0xa4, 0xaa, 0x66, 0xc2,
	0xc2, 0x60, 0x5a, 0x8d, 0x3a, 0xdb, 0xfb, 0xd0, 0xde, 0xc5, 0x00, 0xeb, 0x9b, 0x31, 0xd5, 0xcf,
	0x39, 0x88, 0x19, 0xc3, 0xee, 0x97, 0x65, 0x58, 0x9b, 0x55, 0x32, 0x1b, 0x35, 0xf2, 0xdd, 0x80,
	0xd5, 0x02, 0xef, 0x13, 0xc4, 0xad, 0xdf, 0xb6, 0xad, 0x83, 0x5a, 0x31, 0xf3, 0x61, 0x69, 0x7f,
	0xfa, 0x76, 0xf2, 0xd9, 0x5c, 0x23, 0xab, 0x05, 0xff, 0x5a, 0x41, 0x7e, 0x19, 0xd0, 0x2c, 0x5c,
	0x7a, 0xf2, 0xf4, 0x7f, 0x38, 0xa2, 0x75, 0x58, 0x33, 0x6a, 0x4e, 0xf2, 0x86, 0x26, 0x79, 0xcd,
	0x2e, 0x24, 0xb9, 0x73, 0x71, 0x26, 0x42, 0x7e, 0x18, 0x40, 0xce, 0x4e, 0x3c, 0x79, 0x52, 0xb5,
	0xb8, 0xb9, 0xdb, 0x68, 0xb9, 0x75, 0x42, 0xe6, 0x64, 0xaf, 0x6a, 0xb2, 0x1b, 0x64, 0xbd, 0x88,
	0xac, 0xf3, 0x5e, 0xcd, 0xfc, 0x07, 0x72, 0x6c, 0x42, 0xb3, 0xd0, 0x45, 0xaa, 0x0b, 0x5b, 0x66,
	0xb1, 0xd5, 0x85, 0x2d, 0xb7, 0xba, 0x9e, 0xe6, 0x7a, 0xd7, 0xba, 0x5e, 0xcc, 0x35, 0x8f, 0xe8,
	0x84, 0xda, 0x70, 0x34, 0xf9, 0xb3, 0x82, 0x7f, 0x35, 0xa0, 0x59, 0xe8, 0x01, 0xd5, 0xbb, 0x51,
	0x66, 0x52, 0xd5, 0xbb, 0x51, 0x6a, 0x54, 0xf6, 0x85, 0x7b, 0x77, 0x9e, 0x6f, 0x97, 0x3f, 0x61,
	0x4b, 0x5e, 0xda, 0xfd, 0x25, 0xfd, 0x7c, 0xbd, 0xf9, 0x3b, 0x00, 0x00, 0xff, 0xff, 0x59, 0x52,
	0xd7, 0x37, 0x8f, 0x0b, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// FeaturePipelineServiceClient is the client API for FeaturePipelineService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type FeaturePipelineServiceClient interface {
	ListFeaturePipelines(ctx context.Context, in *ListFeaturePipelineRequest, opts ...grpc.CallOption) (*ListFeaturePipelineResponse, error)
	CreateFeaturePipeline(ctx context.Context, in *CreateFeaturePipelineRequest, opts ...grpc.CallOption) (*CreateFeaturePipelineResponse, error)
	GetFeaturePipeline(ctx context.Context, in *GetFeaturePipelineRequest, opts ...grpc.CallOption) (*GetFeaturePipelineResponse, error)
	UpdateFeaturePipeline(ctx context.Context, in *UpdateFeaturePipelineRequest, opts ...grpc.CallOption) (*UpdateFeaturePipelineResponse, error)
	DeleteFeaturePipeline(ctx context.Context, in *DeleteFeaturePipelineRequest, opts ...grpc.CallOption) (*DeleteFeaturePipelineResponse, error)
}

type featurePipelineServiceClient struct {
	cc *grpc.ClientConn
}

func NewFeaturePipelineServiceClient(cc *grpc.ClientConn) FeaturePipelineServiceClient {
	return &featurePipelineServiceClient{cc}
}

func (c *featurePipelineServiceClient) ListFeaturePipelines(ctx context.Context, in *ListFeaturePipelineRequest, opts ...grpc.CallOption) (*ListFeaturePipelineResponse, error) {
	out := new(ListFeaturePipelineResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.featurepipeline.v1.FeaturePipelineService/ListFeaturePipelines", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *featurePipelineServiceClient) CreateFeaturePipeline(ctx context.Context, in *CreateFeaturePipelineRequest, opts ...grpc.CallOption) (*CreateFeaturePipelineResponse, error) {
	out := new(CreateFeaturePipelineResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.featurepipeline.v1.FeaturePipelineService/CreateFeaturePipeline", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *featurePipelineServiceClient) GetFeaturePipeline(ctx context.Context, in *GetFeaturePipelineRequest, opts ...grpc.CallOption) (*GetFeaturePipelineResponse, error) {
	out := new(GetFeaturePipelineResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.featurepipeline.v1.FeaturePipelineService/GetFeaturePipeline", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *featurePipelineServiceClient) UpdateFeaturePipeline(ctx context.Context, in *UpdateFeaturePipelineRequest, opts ...grpc.CallOption) (*UpdateFeaturePipelineResponse, error) {
	out := new(UpdateFeaturePipelineResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.featurepipeline.v1.FeaturePipelineService/UpdateFeaturePipeline", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *featurePipelineServiceClient) DeleteFeaturePipeline(ctx context.Context, in *DeleteFeaturePipelineRequest, opts ...grpc.CallOption) (*DeleteFeaturePipelineResponse, error) {
	out := new(DeleteFeaturePipelineResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.featurepipeline.v1.FeaturePipelineService/DeleteFeaturePipeline", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FeaturePipelineServiceServer is the server API for FeaturePipelineService service.
type FeaturePipelineServiceServer interface {
	ListFeaturePipelines(context.Context, *ListFeaturePipelineRequest) (*ListFeaturePipelineResponse, error)
	CreateFeaturePipeline(context.Context, *CreateFeaturePipelineRequest) (*CreateFeaturePipelineResponse, error)
	GetFeaturePipeline(context.Context, *GetFeaturePipelineRequest) (*GetFeaturePipelineResponse, error)
	UpdateFeaturePipeline(context.Context, *UpdateFeaturePipelineRequest) (*UpdateFeaturePipelineResponse, error)
	DeleteFeaturePipeline(context.Context, *DeleteFeaturePipelineRequest) (*DeleteFeaturePipelineResponse, error)
}

// UnimplementedFeaturePipelineServiceServer can be embedded to have forward compatible implementations.
type UnimplementedFeaturePipelineServiceServer struct {
}

func (*UnimplementedFeaturePipelineServiceServer) ListFeaturePipelines(ctx context.Context, req *ListFeaturePipelineRequest) (*ListFeaturePipelineResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListFeaturePipelines not implemented")
}
func (*UnimplementedFeaturePipelineServiceServer) CreateFeaturePipeline(ctx context.Context, req *CreateFeaturePipelineRequest) (*CreateFeaturePipelineResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateFeaturePipeline not implemented")
}
func (*UnimplementedFeaturePipelineServiceServer) GetFeaturePipeline(ctx context.Context, req *GetFeaturePipelineRequest) (*GetFeaturePipelineResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFeaturePipeline not implemented")
}
func (*UnimplementedFeaturePipelineServiceServer) UpdateFeaturePipeline(ctx context.Context, req *UpdateFeaturePipelineRequest) (*UpdateFeaturePipelineResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateFeaturePipeline not implemented")
}
func (*UnimplementedFeaturePipelineServiceServer) DeleteFeaturePipeline(ctx context.Context, req *DeleteFeaturePipelineRequest) (*DeleteFeaturePipelineResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteFeaturePipeline not implemented")
}

func RegisterFeaturePipelineServiceServer(s *grpc.Server, srv FeaturePipelineServiceServer) {
	s.RegisterService(&_FeaturePipelineService_serviceDesc, srv)
}

func _FeaturePipelineService_ListFeaturePipelines_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListFeaturePipelineRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeaturePipelineServiceServer).ListFeaturePipelines(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.featurepipeline.v1.FeaturePipelineService/ListFeaturePipelines",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeaturePipelineServiceServer).ListFeaturePipelines(ctx, req.(*ListFeaturePipelineRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FeaturePipelineService_CreateFeaturePipeline_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateFeaturePipelineRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeaturePipelineServiceServer).CreateFeaturePipeline(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.featurepipeline.v1.FeaturePipelineService/CreateFeaturePipeline",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeaturePipelineServiceServer).CreateFeaturePipeline(ctx, req.(*CreateFeaturePipelineRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FeaturePipelineService_GetFeaturePipeline_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetFeaturePipelineRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeaturePipelineServiceServer).GetFeaturePipeline(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.featurepipeline.v1.FeaturePipelineService/GetFeaturePipeline",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeaturePipelineServiceServer).GetFeaturePipeline(ctx, req.(*GetFeaturePipelineRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FeaturePipelineService_UpdateFeaturePipeline_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateFeaturePipelineRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeaturePipelineServiceServer).UpdateFeaturePipeline(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.featurepipeline.v1.FeaturePipelineService/UpdateFeaturePipeline",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeaturePipelineServiceServer).UpdateFeaturePipeline(ctx, req.(*UpdateFeaturePipelineRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FeaturePipelineService_DeleteFeaturePipeline_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteFeaturePipelineRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeaturePipelineServiceServer).DeleteFeaturePipeline(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.featurepipeline.v1.FeaturePipelineService/DeleteFeaturePipeline",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeaturePipelineServiceServer).DeleteFeaturePipeline(ctx, req.(*DeleteFeaturePipelineRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _FeaturePipelineService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modeld.services.featurepipeline.v1.FeaturePipelineService",
	HandlerType: (*FeaturePipelineServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListFeaturePipelines",
			Handler:    _FeaturePipelineService_ListFeaturePipelines_Handler,
		},
		{
			MethodName: "CreateFeaturePipeline",
			Handler:    _FeaturePipelineService_CreateFeaturePipeline_Handler,
		},
		{
			MethodName: "GetFeaturePipeline",
			Handler:    _FeaturePipelineService_GetFeaturePipeline_Handler,
		},
		{
			MethodName: "UpdateFeaturePipeline",
			Handler:    _FeaturePipelineService_UpdateFeaturePipeline_Handler,
		},
		{
			MethodName: "DeleteFeaturePipeline",
			Handler:    _FeaturePipelineService_DeleteFeaturePipeline_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "services/featurepipeline/v1/featurepipeline.proto",
}