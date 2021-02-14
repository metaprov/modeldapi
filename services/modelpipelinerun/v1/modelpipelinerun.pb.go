// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: services/modelpipelinerun/v1/modelpipelinerun.proto

package v1

import (
	context "context"
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	v1alpha1 "github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1"
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

type ListModelPipelineRunsRequest struct {
	Namespace            string            `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Labels               map[string]string `protobuf:"bytes,3,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *ListModelPipelineRunsRequest) Reset()         { *m = ListModelPipelineRunsRequest{} }
func (m *ListModelPipelineRunsRequest) String() string { return proto.CompactTextString(m) }
func (*ListModelPipelineRunsRequest) ProtoMessage()    {}
func (*ListModelPipelineRunsRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_62b458d04358f2b7, []int{0}
}
func (m *ListModelPipelineRunsRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListModelPipelineRunsRequest.Unmarshal(m, b)
}
func (m *ListModelPipelineRunsRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListModelPipelineRunsRequest.Marshal(b, m, deterministic)
}
func (m *ListModelPipelineRunsRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListModelPipelineRunsRequest.Merge(m, src)
}
func (m *ListModelPipelineRunsRequest) XXX_Size() int {
	return xxx_messageInfo_ListModelPipelineRunsRequest.Size(m)
}
func (m *ListModelPipelineRunsRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListModelPipelineRunsRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListModelPipelineRunsRequest proto.InternalMessageInfo

func (m *ListModelPipelineRunsRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *ListModelPipelineRunsRequest) GetLabels() map[string]string {
	if m != nil {
		return m.Labels
	}
	return nil
}

type ListModelPipelineRunsResponse struct {
	Items                *v1alpha1.ModelPipelineRunList `protobuf:"bytes,1,opt,name=items,proto3" json:"items,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                       `json:"-"`
	XXX_unrecognized     []byte                         `json:"-"`
	XXX_sizecache        int32                          `json:"-"`
}

func (m *ListModelPipelineRunsResponse) Reset()         { *m = ListModelPipelineRunsResponse{} }
func (m *ListModelPipelineRunsResponse) String() string { return proto.CompactTextString(m) }
func (*ListModelPipelineRunsResponse) ProtoMessage()    {}
func (*ListModelPipelineRunsResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_62b458d04358f2b7, []int{1}
}
func (m *ListModelPipelineRunsResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListModelPipelineRunsResponse.Unmarshal(m, b)
}
func (m *ListModelPipelineRunsResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListModelPipelineRunsResponse.Marshal(b, m, deterministic)
}
func (m *ListModelPipelineRunsResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListModelPipelineRunsResponse.Merge(m, src)
}
func (m *ListModelPipelineRunsResponse) XXX_Size() int {
	return xxx_messageInfo_ListModelPipelineRunsResponse.Size(m)
}
func (m *ListModelPipelineRunsResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ListModelPipelineRunsResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ListModelPipelineRunsResponse proto.InternalMessageInfo

func (m *ListModelPipelineRunsResponse) GetItems() *v1alpha1.ModelPipelineRunList {
	if m != nil {
		return m.Items
	}
	return nil
}

type ModelPipelineRunResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ModelPipelineRunResponse) Reset()         { *m = ModelPipelineRunResponse{} }
func (m *ModelPipelineRunResponse) String() string { return proto.CompactTextString(m) }
func (*ModelPipelineRunResponse) ProtoMessage()    {}
func (*ModelPipelineRunResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_62b458d04358f2b7, []int{2}
}
func (m *ModelPipelineRunResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ModelPipelineRunResponse.Unmarshal(m, b)
}
func (m *ModelPipelineRunResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ModelPipelineRunResponse.Marshal(b, m, deterministic)
}
func (m *ModelPipelineRunResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ModelPipelineRunResponse.Merge(m, src)
}
func (m *ModelPipelineRunResponse) XXX_Size() int {
	return xxx_messageInfo_ModelPipelineRunResponse.Size(m)
}
func (m *ModelPipelineRunResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ModelPipelineRunResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ModelPipelineRunResponse proto.InternalMessageInfo

type CreateModelPipelineRunRequest struct {
	Namespace            string                         `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string                         `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Labels               map[string]string              `protobuf:"bytes,3,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Spec                 *v1alpha1.ModelPipelineRunSpec `protobuf:"bytes,4,opt,name=spec,proto3" json:"spec,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                       `json:"-"`
	XXX_unrecognized     []byte                         `json:"-"`
	XXX_sizecache        int32                          `json:"-"`
}

func (m *CreateModelPipelineRunRequest) Reset()         { *m = CreateModelPipelineRunRequest{} }
func (m *CreateModelPipelineRunRequest) String() string { return proto.CompactTextString(m) }
func (*CreateModelPipelineRunRequest) ProtoMessage()    {}
func (*CreateModelPipelineRunRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_62b458d04358f2b7, []int{3}
}
func (m *CreateModelPipelineRunRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateModelPipelineRunRequest.Unmarshal(m, b)
}
func (m *CreateModelPipelineRunRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateModelPipelineRunRequest.Marshal(b, m, deterministic)
}
func (m *CreateModelPipelineRunRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateModelPipelineRunRequest.Merge(m, src)
}
func (m *CreateModelPipelineRunRequest) XXX_Size() int {
	return xxx_messageInfo_CreateModelPipelineRunRequest.Size(m)
}
func (m *CreateModelPipelineRunRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateModelPipelineRunRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateModelPipelineRunRequest proto.InternalMessageInfo

func (m *CreateModelPipelineRunRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *CreateModelPipelineRunRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *CreateModelPipelineRunRequest) GetLabels() map[string]string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *CreateModelPipelineRunRequest) GetSpec() *v1alpha1.ModelPipelineRunSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

type CreateModelPipelineRunResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreateModelPipelineRunResponse) Reset()         { *m = CreateModelPipelineRunResponse{} }
func (m *CreateModelPipelineRunResponse) String() string { return proto.CompactTextString(m) }
func (*CreateModelPipelineRunResponse) ProtoMessage()    {}
func (*CreateModelPipelineRunResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_62b458d04358f2b7, []int{4}
}
func (m *CreateModelPipelineRunResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateModelPipelineRunResponse.Unmarshal(m, b)
}
func (m *CreateModelPipelineRunResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateModelPipelineRunResponse.Marshal(b, m, deterministic)
}
func (m *CreateModelPipelineRunResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateModelPipelineRunResponse.Merge(m, src)
}
func (m *CreateModelPipelineRunResponse) XXX_Size() int {
	return xxx_messageInfo_CreateModelPipelineRunResponse.Size(m)
}
func (m *CreateModelPipelineRunResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateModelPipelineRunResponse.DiscardUnknown(m)
}

var xxx_messageInfo_CreateModelPipelineRunResponse proto.InternalMessageInfo

type UpdateModelPipelineRunRequest struct {
	Namespace            string                         `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string                         `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Labels               map[string]string              `protobuf:"bytes,3,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Spec                 *v1alpha1.ModelPipelineRunSpec `protobuf:"bytes,5,opt,name=spec,proto3" json:"spec,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                       `json:"-"`
	XXX_unrecognized     []byte                         `json:"-"`
	XXX_sizecache        int32                          `json:"-"`
}

func (m *UpdateModelPipelineRunRequest) Reset()         { *m = UpdateModelPipelineRunRequest{} }
func (m *UpdateModelPipelineRunRequest) String() string { return proto.CompactTextString(m) }
func (*UpdateModelPipelineRunRequest) ProtoMessage()    {}
func (*UpdateModelPipelineRunRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_62b458d04358f2b7, []int{5}
}
func (m *UpdateModelPipelineRunRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateModelPipelineRunRequest.Unmarshal(m, b)
}
func (m *UpdateModelPipelineRunRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateModelPipelineRunRequest.Marshal(b, m, deterministic)
}
func (m *UpdateModelPipelineRunRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateModelPipelineRunRequest.Merge(m, src)
}
func (m *UpdateModelPipelineRunRequest) XXX_Size() int {
	return xxx_messageInfo_UpdateModelPipelineRunRequest.Size(m)
}
func (m *UpdateModelPipelineRunRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateModelPipelineRunRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateModelPipelineRunRequest proto.InternalMessageInfo

func (m *UpdateModelPipelineRunRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *UpdateModelPipelineRunRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *UpdateModelPipelineRunRequest) GetLabels() map[string]string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *UpdateModelPipelineRunRequest) GetSpec() *v1alpha1.ModelPipelineRunSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

type UpdateModelPipelineRunResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UpdateModelPipelineRunResponse) Reset()         { *m = UpdateModelPipelineRunResponse{} }
func (m *UpdateModelPipelineRunResponse) String() string { return proto.CompactTextString(m) }
func (*UpdateModelPipelineRunResponse) ProtoMessage()    {}
func (*UpdateModelPipelineRunResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_62b458d04358f2b7, []int{6}
}
func (m *UpdateModelPipelineRunResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateModelPipelineRunResponse.Unmarshal(m, b)
}
func (m *UpdateModelPipelineRunResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateModelPipelineRunResponse.Marshal(b, m, deterministic)
}
func (m *UpdateModelPipelineRunResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateModelPipelineRunResponse.Merge(m, src)
}
func (m *UpdateModelPipelineRunResponse) XXX_Size() int {
	return xxx_messageInfo_UpdateModelPipelineRunResponse.Size(m)
}
func (m *UpdateModelPipelineRunResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateModelPipelineRunResponse.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateModelPipelineRunResponse proto.InternalMessageInfo

type GetModelPipelineRunRequest struct {
	Namespace            string   `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetModelPipelineRunRequest) Reset()         { *m = GetModelPipelineRunRequest{} }
func (m *GetModelPipelineRunRequest) String() string { return proto.CompactTextString(m) }
func (*GetModelPipelineRunRequest) ProtoMessage()    {}
func (*GetModelPipelineRunRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_62b458d04358f2b7, []int{7}
}
func (m *GetModelPipelineRunRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetModelPipelineRunRequest.Unmarshal(m, b)
}
func (m *GetModelPipelineRunRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetModelPipelineRunRequest.Marshal(b, m, deterministic)
}
func (m *GetModelPipelineRunRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetModelPipelineRunRequest.Merge(m, src)
}
func (m *GetModelPipelineRunRequest) XXX_Size() int {
	return xxx_messageInfo_GetModelPipelineRunRequest.Size(m)
}
func (m *GetModelPipelineRunRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetModelPipelineRunRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetModelPipelineRunRequest proto.InternalMessageInfo

func (m *GetModelPipelineRunRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *GetModelPipelineRunRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type GetModelPipelineRunResponse struct {
	Item                 *v1alpha1.ModelPipelineRun `protobuf:"bytes,1,opt,name=item,proto3" json:"item,omitempty"`
	Yaml                 string                     `protobuf:"bytes,2,opt,name=yaml,proto3" json:"yaml,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                   `json:"-"`
	XXX_unrecognized     []byte                     `json:"-"`
	XXX_sizecache        int32                      `json:"-"`
}

func (m *GetModelPipelineRunResponse) Reset()         { *m = GetModelPipelineRunResponse{} }
func (m *GetModelPipelineRunResponse) String() string { return proto.CompactTextString(m) }
func (*GetModelPipelineRunResponse) ProtoMessage()    {}
func (*GetModelPipelineRunResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_62b458d04358f2b7, []int{8}
}
func (m *GetModelPipelineRunResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetModelPipelineRunResponse.Unmarshal(m, b)
}
func (m *GetModelPipelineRunResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetModelPipelineRunResponse.Marshal(b, m, deterministic)
}
func (m *GetModelPipelineRunResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetModelPipelineRunResponse.Merge(m, src)
}
func (m *GetModelPipelineRunResponse) XXX_Size() int {
	return xxx_messageInfo_GetModelPipelineRunResponse.Size(m)
}
func (m *GetModelPipelineRunResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetModelPipelineRunResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetModelPipelineRunResponse proto.InternalMessageInfo

func (m *GetModelPipelineRunResponse) GetItem() *v1alpha1.ModelPipelineRun {
	if m != nil {
		return m.Item
	}
	return nil
}

func (m *GetModelPipelineRunResponse) GetYaml() string {
	if m != nil {
		return m.Yaml
	}
	return ""
}

type DeleteModelPipelineRunRequest struct {
	Namespace            string   `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteModelPipelineRunRequest) Reset()         { *m = DeleteModelPipelineRunRequest{} }
func (m *DeleteModelPipelineRunRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteModelPipelineRunRequest) ProtoMessage()    {}
func (*DeleteModelPipelineRunRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_62b458d04358f2b7, []int{9}
}
func (m *DeleteModelPipelineRunRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteModelPipelineRunRequest.Unmarshal(m, b)
}
func (m *DeleteModelPipelineRunRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteModelPipelineRunRequest.Marshal(b, m, deterministic)
}
func (m *DeleteModelPipelineRunRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteModelPipelineRunRequest.Merge(m, src)
}
func (m *DeleteModelPipelineRunRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteModelPipelineRunRequest.Size(m)
}
func (m *DeleteModelPipelineRunRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteModelPipelineRunRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteModelPipelineRunRequest proto.InternalMessageInfo

func (m *DeleteModelPipelineRunRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *DeleteModelPipelineRunRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type DeleteModelPipelineRunResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteModelPipelineRunResponse) Reset()         { *m = DeleteModelPipelineRunResponse{} }
func (m *DeleteModelPipelineRunResponse) String() string { return proto.CompactTextString(m) }
func (*DeleteModelPipelineRunResponse) ProtoMessage()    {}
func (*DeleteModelPipelineRunResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_62b458d04358f2b7, []int{10}
}
func (m *DeleteModelPipelineRunResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteModelPipelineRunResponse.Unmarshal(m, b)
}
func (m *DeleteModelPipelineRunResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteModelPipelineRunResponse.Marshal(b, m, deterministic)
}
func (m *DeleteModelPipelineRunResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteModelPipelineRunResponse.Merge(m, src)
}
func (m *DeleteModelPipelineRunResponse) XXX_Size() int {
	return xxx_messageInfo_DeleteModelPipelineRunResponse.Size(m)
}
func (m *DeleteModelPipelineRunResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteModelPipelineRunResponse.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteModelPipelineRunResponse proto.InternalMessageInfo

func init() {
	proto.RegisterType((*ListModelPipelineRunsRequest)(nil), "github.com.metaprov.modeld.services.modelpipelinerun.v1.ListModelPipelineRunsRequest")
	proto.RegisterMapType((map[string]string)(nil), "github.com.metaprov.modeld.services.modelpipelinerun.v1.ListModelPipelineRunsRequest.LabelsEntry")
	proto.RegisterType((*ListModelPipelineRunsResponse)(nil), "github.com.metaprov.modeld.services.modelpipelinerun.v1.ListModelPipelineRunsResponse")
	proto.RegisterType((*ModelPipelineRunResponse)(nil), "github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunResponse")
	proto.RegisterType((*CreateModelPipelineRunRequest)(nil), "github.com.metaprov.modeld.services.modelpipelinerun.v1.CreateModelPipelineRunRequest")
	proto.RegisterMapType((map[string]string)(nil), "github.com.metaprov.modeld.services.modelpipelinerun.v1.CreateModelPipelineRunRequest.LabelsEntry")
	proto.RegisterType((*CreateModelPipelineRunResponse)(nil), "github.com.metaprov.modeld.services.modelpipelinerun.v1.CreateModelPipelineRunResponse")
	proto.RegisterType((*UpdateModelPipelineRunRequest)(nil), "github.com.metaprov.modeld.services.modelpipelinerun.v1.UpdateModelPipelineRunRequest")
	proto.RegisterMapType((map[string]string)(nil), "github.com.metaprov.modeld.services.modelpipelinerun.v1.UpdateModelPipelineRunRequest.LabelsEntry")
	proto.RegisterType((*UpdateModelPipelineRunResponse)(nil), "github.com.metaprov.modeld.services.modelpipelinerun.v1.UpdateModelPipelineRunResponse")
	proto.RegisterType((*GetModelPipelineRunRequest)(nil), "github.com.metaprov.modeld.services.modelpipelinerun.v1.GetModelPipelineRunRequest")
	proto.RegisterType((*GetModelPipelineRunResponse)(nil), "github.com.metaprov.modeld.services.modelpipelinerun.v1.GetModelPipelineRunResponse")
	proto.RegisterType((*DeleteModelPipelineRunRequest)(nil), "github.com.metaprov.modeld.services.modelpipelinerun.v1.DeleteModelPipelineRunRequest")
	proto.RegisterType((*DeleteModelPipelineRunResponse)(nil), "github.com.metaprov.modeld.services.modelpipelinerun.v1.DeleteModelPipelineRunResponse")
}

func init() {
	proto.RegisterFile("services/modelpipelinerun/v1/modelpipelinerun.proto", fileDescriptor_62b458d04358f2b7)
}

var fileDescriptor_62b458d04358f2b7 = []byte{
	// 668 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xcc, 0x57, 0xcb, 0x6e, 0xd3, 0x40,
	0x14, 0xc5, 0x69, 0x5a, 0xa9, 0xb7, 0x9b, 0x6a, 0x80, 0x12, 0x99, 0x16, 0x8a, 0x17, 0xd0, 0xd5,
	0x58, 0x69, 0x17, 0xd0, 0x8a, 0x05, 0xe2, 0x21, 0x10, 0x2a, 0x15, 0xb8, 0x0f, 0xa4, 0x2e, 0x90,
	0x26, 0xf1, 0x95, 0x6b, 0xd5, 0x19, 0x0f, 0x9e, 0x49, 0xa4, 0x80, 0xd8, 0x20, 0xf8, 0x00, 0xc4,
	0x37, 0xf0, 0x35, 0x2c, 0xf9, 0x05, 0x96, 0x48, 0x20, 0xb6, 0x6c, 0xd0, 0x8c, 0x6d, 0x5a, 0x25,
	0x8e, 0x83, 0x12, 0x57, 0xea, 0xce, 0x9e, 0x78, 0xce, 0x3d, 0xe7, 0x9e, 0x3b, 0xc7, 0x0e, 0x6c,
	0x48, 0x4c, 0x7a, 0x61, 0x1b, 0xa5, 0xdb, 0x89, 0x7d, 0x8c, 0x44, 0x28, 0x30, 0x0a, 0x39, 0x26,
	0x5d, 0xee, 0xf6, 0x9a, 0x43, 0x6b, 0x54, 0x24, 0xb1, 0x8a, 0xc9, 0xed, 0x20, 0x54, 0x47, 0xdd,
	0x16, 0x6d, 0xc7, 0x1d, 0xda, 0x41, 0xc5, 0x44, 0x12, 0xf7, 0xa8, 0x79, 0xd6, 0xa7, 0x39, 0x1e,
	0x1d, 0xda, 0xdb, 0x6b, 0xda, 0xcb, 0x41, 0x1c, 0x07, 0x11, 0xba, 0x4c, 0x84, 0x2e, 0xe3, 0x3c,
	0x56, 0x4c, 0x85, 0x31, 0x97, 0x29, 0xac, 0xfd, 0xe4, 0x04, 0xd6, 0xcd, 0x61, 0x53, 0x0a, 0xbe,
	0xde, 0x20, 0x8e, 0x03, 0xbd, 0x51, 0xba, 0x2a, 0x61, 0x21, 0x0f, 0x79, 0xe0, 0xf6, 0x9a, 0x2c,
	0x12, 0x47, 0xac, 0xe9, 0x06, 0xc8, 0x31, 0x61, 0x0a, 0xfd, 0x14, 0xc9, 0xf9, 0x6d, 0xc1, 0xf2,
	0x76, 0x28, 0xd5, 0x33, 0xbd, 0xf9, 0x79, 0xc6, 0xc1, 0xeb, 0x72, 0xe9, 0xe1, 0xeb, 0x2e, 0x4a,
	0x45, 0x96, 0x61, 0x9e, 0xb3, 0x0e, 0x4a, 0xc1, 0xda, 0xd8, 0xb0, 0x56, 0xad, 0xb5, 0x79, 0xef,
	0x64, 0x81, 0xf4, 0x61, 0x2e, 0x62, 0x2d, 0x8c, 0x64, 0x63, 0x66, 0x75, 0x66, 0x6d, 0x61, 0x9d,
	0xd1, 0x09, 0x05, 0xd3, 0x32, 0x12, 0x74, 0xdb, 0xd4, 0x78, 0xc4, 0x55, 0xd2, 0xf7, 0xb2, 0x82,
	0xf6, 0x26, 0x2c, 0x9c, 0x5a, 0x26, 0x8b, 0x30, 0x73, 0x8c, 0xfd, 0x8c, 0xa1, 0xbe, 0x24, 0x97,
	0x60, 0xb6, 0xc7, 0xa2, 0x2e, 0x36, 0x6a, 0x66, 0x2d, 0xbd, 0xd9, 0xaa, 0xdd, 0xb1, 0x9c, 0x8f,
	0x16, 0xac, 0x8c, 0xa8, 0x27, 0x45, 0xcc, 0x25, 0x12, 0x1f, 0x66, 0x43, 0x85, 0x1d, 0x69, 0xf0,
	0x16, 0xd6, 0x77, 0x4a, 0x64, 0x31, 0x11, 0x52, 0x71, 0x1c, 0x50, 0xdd, 0x70, 0x9a, 0x37, 0x9c,
	0xe6, 0x0d, 0xa7, 0x83, 0x35, 0x74, 0x5d, 0x2f, 0x05, 0x77, 0x6c, 0x68, 0x0c, 0xfe, 0x9c, 0x33,
	0x70, 0x7e, 0xd4, 0x60, 0xe5, 0x41, 0x82, 0x4c, 0xe1, 0xf0, 0x23, 0xff, 0xe3, 0x0c, 0x81, 0xba,
	0xbe, 0xc9, 0xc4, 0x9b, 0x6b, 0xf2, 0x66, 0xc0, 0xad, 0xd6, 0xc4, 0x6e, 0x95, 0x32, 0x2b, 0xb2,
	0x8b, 0xb4, 0xa0, 0x2e, 0x05, 0xb6, 0x1b, 0xf5, 0xaa, 0x1b, 0xba, 0x2b, 0xb0, 0xed, 0x19, 0xec,
	0x69, 0x46, 0x62, 0x15, 0xae, 0x8d, 0xd2, 0x74, 0xca, 0x90, 0x7d, 0xe1, 0x9f, 0x53, 0x43, 0x4a,
	0x99, 0x95, 0x1a, 0x32, 0x7b, 0x6e, 0x0d, 0x19, 0xa5, 0x29, 0x33, 0x64, 0x07, 0xec, 0xc7, 0xa8,
	0x2a, 0x33, 0xc3, 0xf9, 0x64, 0xc1, 0xd5, 0x42, 0xc0, 0x2c, 0x13, 0x5e, 0x41, 0x5d, 0x1f, 0xdb,
	0x2c, 0x12, 0x9e, 0x56, 0xd7, 0x30, 0xcf, 0xe0, 0x6a, 0x4e, 0x7d, 0xd6, 0x89, 0x72, 0x4e, 0xfa,
	0xda, 0x79, 0x01, 0x2b, 0x0f, 0x31, 0xc2, 0x0a, 0x67, 0x4e, 0x37, 0x76, 0x14, 0x64, 0x2a, 0x74,
	0xfd, 0xcf, 0x3c, 0x5c, 0x19, 0x32, 0x35, 0x1d, 0x3e, 0xf2, 0xd3, 0x82, 0xcb, 0x85, 0xd1, 0x49,
	0xf6, 0xcf, 0x24, 0xfa, 0xed, 0x83, 0xaa, 0x61, 0xb3, 0xe9, 0xb9, 0xf5, 0xfe, 0xdb, 0xf7, 0xcf,
	0xb5, 0x1b, 0xe4, 0xba, 0x79, 0xc5, 0xfe, 0x7b, 0x3f, 0x0e, 0x02, 0x49, 0xf2, 0xa1, 0x06, 0x4b,
	0xc5, 0xd1, 0x40, 0x0e, 0xce, 0x26, 0x3f, 0xed, 0x97, 0x95, 0xe3, 0x66, 0xa2, 0x37, 0x8d, 0xe8,
	0x0d, 0x67, 0x9c, 0xe8, 0xad, 0xc5, 0xc1, 0x25, 0xf2, 0xcb, 0x82, 0x8b, 0x05, 0xa7, 0x83, 0xec,
	0x4e, 0xcc, 0x75, 0xf4, 0xe1, 0xb5, 0xf7, 0xaa, 0x05, 0xcd, 0xd4, 0x53, 0xa3, 0x7e, 0x8d, 0xdc,
	0x1c, 0xa3, 0xde, 0x7d, 0xab, 0x0f, 0xca, 0x3b, 0xf2, 0xa5, 0x06, 0x4b, 0xc5, 0x19, 0x34, 0x85,
	0xf3, 0xa5, 0x41, 0x3d, 0x85, 0xf3, 0x63, 0xc2, 0xf2, 0xd0, 0x68, 0xdf, 0xb3, 0xef, 0x8d, 0xd5,
	0x3e, 0x04, 0xae, 0x69, 0xf8, 0x4c, 0x31, 0x6a, 0xba, 0x52, 0x30, 0x1a, 0x5f, 0x2d, 0x58, 0x2a,
	0x8e, 0x94, 0x29, 0xfa, 0x54, 0x1a, 0x7b, 0x53, 0xf4, 0xa9, 0x3c, 0xfb, 0x9c, 0x0b, 0xf7, 0xef,
	0x1e, 0x6e, 0x95, 0x7f, 0x5d, 0x97, 0xfd, 0x0f, 0x68, 0xcd, 0x99, 0xcf, 0xea, 0x8d, 0xbf, 0x01,
	0x00, 0x00, 0xff, 0xff, 0xd0, 0x0c, 0x1a, 0x4f, 0x2e, 0x0c, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// ModelPipelineRunServiceClient is the client API for ModelPipelineRunService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type ModelPipelineRunServiceClient interface {
	ListModelPipelineRuns(ctx context.Context, in *ListModelPipelineRunsRequest, opts ...grpc.CallOption) (*ListModelPipelineRunsResponse, error)
	CreateModelPipelineRun(ctx context.Context, in *CreateModelPipelineRunRequest, opts ...grpc.CallOption) (*CreateModelPipelineRunResponse, error)
	GetModelPipelineRun(ctx context.Context, in *GetModelPipelineRunRequest, opts ...grpc.CallOption) (*GetModelPipelineRunResponse, error)
	UpdateModelPipelineRun(ctx context.Context, in *UpdateModelPipelineRunRequest, opts ...grpc.CallOption) (*UpdateModelPipelineRunResponse, error)
	DeleteModelPipelineRun(ctx context.Context, in *DeleteModelPipelineRunRequest, opts ...grpc.CallOption) (*DeleteModelPipelineRunResponse, error)
}

type modelPipelineRunServiceClient struct {
	cc *grpc.ClientConn
}

func NewModelPipelineRunServiceClient(cc *grpc.ClientConn) ModelPipelineRunServiceClient {
	return &modelPipelineRunServiceClient{cc}
}

func (c *modelPipelineRunServiceClient) ListModelPipelineRuns(ctx context.Context, in *ListModelPipelineRunsRequest, opts ...grpc.CallOption) (*ListModelPipelineRunsResponse, error) {
	out := new(ListModelPipelineRunsResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/ListModelPipelineRuns", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelPipelineRunServiceClient) CreateModelPipelineRun(ctx context.Context, in *CreateModelPipelineRunRequest, opts ...grpc.CallOption) (*CreateModelPipelineRunResponse, error) {
	out := new(CreateModelPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/CreateModelPipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelPipelineRunServiceClient) GetModelPipelineRun(ctx context.Context, in *GetModelPipelineRunRequest, opts ...grpc.CallOption) (*GetModelPipelineRunResponse, error) {
	out := new(GetModelPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/GetModelPipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelPipelineRunServiceClient) UpdateModelPipelineRun(ctx context.Context, in *UpdateModelPipelineRunRequest, opts ...grpc.CallOption) (*UpdateModelPipelineRunResponse, error) {
	out := new(UpdateModelPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/UpdateModelPipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *modelPipelineRunServiceClient) DeleteModelPipelineRun(ctx context.Context, in *DeleteModelPipelineRunRequest, opts ...grpc.CallOption) (*DeleteModelPipelineRunResponse, error) {
	out := new(DeleteModelPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/DeleteModelPipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ModelPipelineRunServiceServer is the server API for ModelPipelineRunService service.
type ModelPipelineRunServiceServer interface {
	ListModelPipelineRuns(context.Context, *ListModelPipelineRunsRequest) (*ListModelPipelineRunsResponse, error)
	CreateModelPipelineRun(context.Context, *CreateModelPipelineRunRequest) (*CreateModelPipelineRunResponse, error)
	GetModelPipelineRun(context.Context, *GetModelPipelineRunRequest) (*GetModelPipelineRunResponse, error)
	UpdateModelPipelineRun(context.Context, *UpdateModelPipelineRunRequest) (*UpdateModelPipelineRunResponse, error)
	DeleteModelPipelineRun(context.Context, *DeleteModelPipelineRunRequest) (*DeleteModelPipelineRunResponse, error)
}

// UnimplementedModelPipelineRunServiceServer can be embedded to have forward compatible implementations.
type UnimplementedModelPipelineRunServiceServer struct {
}

func (*UnimplementedModelPipelineRunServiceServer) ListModelPipelineRuns(ctx context.Context, req *ListModelPipelineRunsRequest) (*ListModelPipelineRunsResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListModelPipelineRuns not implemented")
}
func (*UnimplementedModelPipelineRunServiceServer) CreateModelPipelineRun(ctx context.Context, req *CreateModelPipelineRunRequest) (*CreateModelPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateModelPipelineRun not implemented")
}
func (*UnimplementedModelPipelineRunServiceServer) GetModelPipelineRun(ctx context.Context, req *GetModelPipelineRunRequest) (*GetModelPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetModelPipelineRun not implemented")
}
func (*UnimplementedModelPipelineRunServiceServer) UpdateModelPipelineRun(ctx context.Context, req *UpdateModelPipelineRunRequest) (*UpdateModelPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateModelPipelineRun not implemented")
}
func (*UnimplementedModelPipelineRunServiceServer) DeleteModelPipelineRun(ctx context.Context, req *DeleteModelPipelineRunRequest) (*DeleteModelPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteModelPipelineRun not implemented")
}

func RegisterModelPipelineRunServiceServer(s *grpc.Server, srv ModelPipelineRunServiceServer) {
	s.RegisterService(&_ModelPipelineRunService_serviceDesc, srv)
}

func _ModelPipelineRunService_ListModelPipelineRuns_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListModelPipelineRunsRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelPipelineRunServiceServer).ListModelPipelineRuns(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/ListModelPipelineRuns",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelPipelineRunServiceServer).ListModelPipelineRuns(ctx, req.(*ListModelPipelineRunsRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelPipelineRunService_CreateModelPipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateModelPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelPipelineRunServiceServer).CreateModelPipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/CreateModelPipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelPipelineRunServiceServer).CreateModelPipelineRun(ctx, req.(*CreateModelPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelPipelineRunService_GetModelPipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetModelPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelPipelineRunServiceServer).GetModelPipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/GetModelPipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelPipelineRunServiceServer).GetModelPipelineRun(ctx, req.(*GetModelPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelPipelineRunService_UpdateModelPipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateModelPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelPipelineRunServiceServer).UpdateModelPipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/UpdateModelPipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelPipelineRunServiceServer).UpdateModelPipelineRun(ctx, req.(*UpdateModelPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _ModelPipelineRunService_DeleteModelPipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteModelPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ModelPipelineRunServiceServer).DeleteModelPipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService/DeleteModelPipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ModelPipelineRunServiceServer).DeleteModelPipelineRun(ctx, req.(*DeleteModelPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _ModelPipelineRunService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modeld.services.modelpipelinerun.v1.ModelPipelineRunService",
	HandlerType: (*ModelPipelineRunServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListModelPipelineRuns",
			Handler:    _ModelPipelineRunService_ListModelPipelineRuns_Handler,
		},
		{
			MethodName: "CreateModelPipelineRun",
			Handler:    _ModelPipelineRunService_CreateModelPipelineRun_Handler,
		},
		{
			MethodName: "GetModelPipelineRun",
			Handler:    _ModelPipelineRunService_GetModelPipelineRun_Handler,
		},
		{
			MethodName: "UpdateModelPipelineRun",
			Handler:    _ModelPipelineRunService_UpdateModelPipelineRun_Handler,
		},
		{
			MethodName: "DeleteModelPipelineRun",
			Handler:    _ModelPipelineRunService_DeleteModelPipelineRun_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "services/modelpipelinerun/v1/modelpipelinerun.proto",
}