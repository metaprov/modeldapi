// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: services/labelingpipelinerun/v1/labelingpipelinerun.proto

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

type ListLabelingPipelineRunRequest struct {
	Namespace            string            `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Labels               map[string]string `protobuf:"bytes,2,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *ListLabelingPipelineRunRequest) Reset()         { *m = ListLabelingPipelineRunRequest{} }
func (m *ListLabelingPipelineRunRequest) String() string { return proto.CompactTextString(m) }
func (*ListLabelingPipelineRunRequest) ProtoMessage()    {}
func (*ListLabelingPipelineRunRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_99e32ff9424aa020, []int{0}
}
func (m *ListLabelingPipelineRunRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListLabelingPipelineRunRequest.Unmarshal(m, b)
}
func (m *ListLabelingPipelineRunRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListLabelingPipelineRunRequest.Marshal(b, m, deterministic)
}
func (m *ListLabelingPipelineRunRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListLabelingPipelineRunRequest.Merge(m, src)
}
func (m *ListLabelingPipelineRunRequest) XXX_Size() int {
	return xxx_messageInfo_ListLabelingPipelineRunRequest.Size(m)
}
func (m *ListLabelingPipelineRunRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListLabelingPipelineRunRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListLabelingPipelineRunRequest proto.InternalMessageInfo

func (m *ListLabelingPipelineRunRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *ListLabelingPipelineRunRequest) GetLabels() map[string]string {
	if m != nil {
		return m.Labels
	}
	return nil
}

type ListLabelingPipelineRunResponse struct {
	Items                *v1alpha1.LabelingPipelineRunList `protobuf:"bytes,1,opt,name=items,proto3" json:"items,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                          `json:"-"`
	XXX_unrecognized     []byte                            `json:"-"`
	XXX_sizecache        int32                             `json:"-"`
}

func (m *ListLabelingPipelineRunResponse) Reset()         { *m = ListLabelingPipelineRunResponse{} }
func (m *ListLabelingPipelineRunResponse) String() string { return proto.CompactTextString(m) }
func (*ListLabelingPipelineRunResponse) ProtoMessage()    {}
func (*ListLabelingPipelineRunResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_99e32ff9424aa020, []int{1}
}
func (m *ListLabelingPipelineRunResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListLabelingPipelineRunResponse.Unmarshal(m, b)
}
func (m *ListLabelingPipelineRunResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListLabelingPipelineRunResponse.Marshal(b, m, deterministic)
}
func (m *ListLabelingPipelineRunResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListLabelingPipelineRunResponse.Merge(m, src)
}
func (m *ListLabelingPipelineRunResponse) XXX_Size() int {
	return xxx_messageInfo_ListLabelingPipelineRunResponse.Size(m)
}
func (m *ListLabelingPipelineRunResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ListLabelingPipelineRunResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ListLabelingPipelineRunResponse proto.InternalMessageInfo

func (m *ListLabelingPipelineRunResponse) GetItems() *v1alpha1.LabelingPipelineRunList {
	if m != nil {
		return m.Items
	}
	return nil
}

type CreateLabelingPipelineRunRequest struct {
	Namespace            string                            `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string                            `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Labels               map[string]string                 `protobuf:"bytes,3,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Spec                 *v1alpha1.LabelingPipelineRunSpec `protobuf:"bytes,4,opt,name=spec,proto3" json:"spec,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                          `json:"-"`
	XXX_unrecognized     []byte                            `json:"-"`
	XXX_sizecache        int32                             `json:"-"`
}

func (m *CreateLabelingPipelineRunRequest) Reset()         { *m = CreateLabelingPipelineRunRequest{} }
func (m *CreateLabelingPipelineRunRequest) String() string { return proto.CompactTextString(m) }
func (*CreateLabelingPipelineRunRequest) ProtoMessage()    {}
func (*CreateLabelingPipelineRunRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_99e32ff9424aa020, []int{2}
}
func (m *CreateLabelingPipelineRunRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateLabelingPipelineRunRequest.Unmarshal(m, b)
}
func (m *CreateLabelingPipelineRunRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateLabelingPipelineRunRequest.Marshal(b, m, deterministic)
}
func (m *CreateLabelingPipelineRunRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateLabelingPipelineRunRequest.Merge(m, src)
}
func (m *CreateLabelingPipelineRunRequest) XXX_Size() int {
	return xxx_messageInfo_CreateLabelingPipelineRunRequest.Size(m)
}
func (m *CreateLabelingPipelineRunRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateLabelingPipelineRunRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateLabelingPipelineRunRequest proto.InternalMessageInfo

func (m *CreateLabelingPipelineRunRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *CreateLabelingPipelineRunRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *CreateLabelingPipelineRunRequest) GetLabels() map[string]string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *CreateLabelingPipelineRunRequest) GetSpec() *v1alpha1.LabelingPipelineRunSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

type CreateLabelingPipelineRunResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreateLabelingPipelineRunResponse) Reset()         { *m = CreateLabelingPipelineRunResponse{} }
func (m *CreateLabelingPipelineRunResponse) String() string { return proto.CompactTextString(m) }
func (*CreateLabelingPipelineRunResponse) ProtoMessage()    {}
func (*CreateLabelingPipelineRunResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_99e32ff9424aa020, []int{3}
}
func (m *CreateLabelingPipelineRunResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateLabelingPipelineRunResponse.Unmarshal(m, b)
}
func (m *CreateLabelingPipelineRunResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateLabelingPipelineRunResponse.Marshal(b, m, deterministic)
}
func (m *CreateLabelingPipelineRunResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateLabelingPipelineRunResponse.Merge(m, src)
}
func (m *CreateLabelingPipelineRunResponse) XXX_Size() int {
	return xxx_messageInfo_CreateLabelingPipelineRunResponse.Size(m)
}
func (m *CreateLabelingPipelineRunResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateLabelingPipelineRunResponse.DiscardUnknown(m)
}

var xxx_messageInfo_CreateLabelingPipelineRunResponse proto.InternalMessageInfo

type UpdateLabelingPipelineRunRequest struct {
	Namespace            string                            `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string                            `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Labels               map[string]string                 `protobuf:"bytes,3,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Spec                 *v1alpha1.LabelingPipelineRunSpec `protobuf:"bytes,5,opt,name=spec,proto3" json:"spec,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                          `json:"-"`
	XXX_unrecognized     []byte                            `json:"-"`
	XXX_sizecache        int32                             `json:"-"`
}

func (m *UpdateLabelingPipelineRunRequest) Reset()         { *m = UpdateLabelingPipelineRunRequest{} }
func (m *UpdateLabelingPipelineRunRequest) String() string { return proto.CompactTextString(m) }
func (*UpdateLabelingPipelineRunRequest) ProtoMessage()    {}
func (*UpdateLabelingPipelineRunRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_99e32ff9424aa020, []int{4}
}
func (m *UpdateLabelingPipelineRunRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateLabelingPipelineRunRequest.Unmarshal(m, b)
}
func (m *UpdateLabelingPipelineRunRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateLabelingPipelineRunRequest.Marshal(b, m, deterministic)
}
func (m *UpdateLabelingPipelineRunRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateLabelingPipelineRunRequest.Merge(m, src)
}
func (m *UpdateLabelingPipelineRunRequest) XXX_Size() int {
	return xxx_messageInfo_UpdateLabelingPipelineRunRequest.Size(m)
}
func (m *UpdateLabelingPipelineRunRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateLabelingPipelineRunRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateLabelingPipelineRunRequest proto.InternalMessageInfo

func (m *UpdateLabelingPipelineRunRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *UpdateLabelingPipelineRunRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *UpdateLabelingPipelineRunRequest) GetLabels() map[string]string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *UpdateLabelingPipelineRunRequest) GetSpec() *v1alpha1.LabelingPipelineRunSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

type UpdateLabelingPipelineRunResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UpdateLabelingPipelineRunResponse) Reset()         { *m = UpdateLabelingPipelineRunResponse{} }
func (m *UpdateLabelingPipelineRunResponse) String() string { return proto.CompactTextString(m) }
func (*UpdateLabelingPipelineRunResponse) ProtoMessage()    {}
func (*UpdateLabelingPipelineRunResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_99e32ff9424aa020, []int{5}
}
func (m *UpdateLabelingPipelineRunResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateLabelingPipelineRunResponse.Unmarshal(m, b)
}
func (m *UpdateLabelingPipelineRunResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateLabelingPipelineRunResponse.Marshal(b, m, deterministic)
}
func (m *UpdateLabelingPipelineRunResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateLabelingPipelineRunResponse.Merge(m, src)
}
func (m *UpdateLabelingPipelineRunResponse) XXX_Size() int {
	return xxx_messageInfo_UpdateLabelingPipelineRunResponse.Size(m)
}
func (m *UpdateLabelingPipelineRunResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateLabelingPipelineRunResponse.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateLabelingPipelineRunResponse proto.InternalMessageInfo

type GetLabelingPipelineRunRequest struct {
	Namespace            string   `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetLabelingPipelineRunRequest) Reset()         { *m = GetLabelingPipelineRunRequest{} }
func (m *GetLabelingPipelineRunRequest) String() string { return proto.CompactTextString(m) }
func (*GetLabelingPipelineRunRequest) ProtoMessage()    {}
func (*GetLabelingPipelineRunRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_99e32ff9424aa020, []int{6}
}
func (m *GetLabelingPipelineRunRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetLabelingPipelineRunRequest.Unmarshal(m, b)
}
func (m *GetLabelingPipelineRunRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetLabelingPipelineRunRequest.Marshal(b, m, deterministic)
}
func (m *GetLabelingPipelineRunRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetLabelingPipelineRunRequest.Merge(m, src)
}
func (m *GetLabelingPipelineRunRequest) XXX_Size() int {
	return xxx_messageInfo_GetLabelingPipelineRunRequest.Size(m)
}
func (m *GetLabelingPipelineRunRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetLabelingPipelineRunRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetLabelingPipelineRunRequest proto.InternalMessageInfo

func (m *GetLabelingPipelineRunRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *GetLabelingPipelineRunRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type GetLabelingPipelineRunResponse struct {
	Item                 *v1alpha1.LabelingPipelineRun `protobuf:"bytes,1,opt,name=item,proto3" json:"item,omitempty"`
	Yaml                 string                        `protobuf:"bytes,2,opt,name=yaml,proto3" json:"yaml,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                      `json:"-"`
	XXX_unrecognized     []byte                        `json:"-"`
	XXX_sizecache        int32                         `json:"-"`
}

func (m *GetLabelingPipelineRunResponse) Reset()         { *m = GetLabelingPipelineRunResponse{} }
func (m *GetLabelingPipelineRunResponse) String() string { return proto.CompactTextString(m) }
func (*GetLabelingPipelineRunResponse) ProtoMessage()    {}
func (*GetLabelingPipelineRunResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_99e32ff9424aa020, []int{7}
}
func (m *GetLabelingPipelineRunResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetLabelingPipelineRunResponse.Unmarshal(m, b)
}
func (m *GetLabelingPipelineRunResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetLabelingPipelineRunResponse.Marshal(b, m, deterministic)
}
func (m *GetLabelingPipelineRunResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetLabelingPipelineRunResponse.Merge(m, src)
}
func (m *GetLabelingPipelineRunResponse) XXX_Size() int {
	return xxx_messageInfo_GetLabelingPipelineRunResponse.Size(m)
}
func (m *GetLabelingPipelineRunResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetLabelingPipelineRunResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetLabelingPipelineRunResponse proto.InternalMessageInfo

func (m *GetLabelingPipelineRunResponse) GetItem() *v1alpha1.LabelingPipelineRun {
	if m != nil {
		return m.Item
	}
	return nil
}

func (m *GetLabelingPipelineRunResponse) GetYaml() string {
	if m != nil {
		return m.Yaml
	}
	return ""
}

type DeleteLabelingPipelineRunRequest struct {
	Namespace            string   `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteLabelingPipelineRunRequest) Reset()         { *m = DeleteLabelingPipelineRunRequest{} }
func (m *DeleteLabelingPipelineRunRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteLabelingPipelineRunRequest) ProtoMessage()    {}
func (*DeleteLabelingPipelineRunRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_99e32ff9424aa020, []int{8}
}
func (m *DeleteLabelingPipelineRunRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteLabelingPipelineRunRequest.Unmarshal(m, b)
}
func (m *DeleteLabelingPipelineRunRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteLabelingPipelineRunRequest.Marshal(b, m, deterministic)
}
func (m *DeleteLabelingPipelineRunRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteLabelingPipelineRunRequest.Merge(m, src)
}
func (m *DeleteLabelingPipelineRunRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteLabelingPipelineRunRequest.Size(m)
}
func (m *DeleteLabelingPipelineRunRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteLabelingPipelineRunRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteLabelingPipelineRunRequest proto.InternalMessageInfo

func (m *DeleteLabelingPipelineRunRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *DeleteLabelingPipelineRunRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type DeleteLabelingPipelineRunResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteLabelingPipelineRunResponse) Reset()         { *m = DeleteLabelingPipelineRunResponse{} }
func (m *DeleteLabelingPipelineRunResponse) String() string { return proto.CompactTextString(m) }
func (*DeleteLabelingPipelineRunResponse) ProtoMessage()    {}
func (*DeleteLabelingPipelineRunResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_99e32ff9424aa020, []int{9}
}
func (m *DeleteLabelingPipelineRunResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteLabelingPipelineRunResponse.Unmarshal(m, b)
}
func (m *DeleteLabelingPipelineRunResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteLabelingPipelineRunResponse.Marshal(b, m, deterministic)
}
func (m *DeleteLabelingPipelineRunResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteLabelingPipelineRunResponse.Merge(m, src)
}
func (m *DeleteLabelingPipelineRunResponse) XXX_Size() int {
	return xxx_messageInfo_DeleteLabelingPipelineRunResponse.Size(m)
}
func (m *DeleteLabelingPipelineRunResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteLabelingPipelineRunResponse.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteLabelingPipelineRunResponse proto.InternalMessageInfo

func init() {
	proto.RegisterType((*ListLabelingPipelineRunRequest)(nil), "github.com.metaprov.modeld.services.labelingpipelinerun.v1.ListLabelingPipelineRunRequest")
	proto.RegisterMapType((map[string]string)(nil), "github.com.metaprov.modeld.services.labelingpipelinerun.v1.ListLabelingPipelineRunRequest.LabelsEntry")
	proto.RegisterType((*ListLabelingPipelineRunResponse)(nil), "github.com.metaprov.modeld.services.labelingpipelinerun.v1.ListLabelingPipelineRunResponse")
	proto.RegisterType((*CreateLabelingPipelineRunRequest)(nil), "github.com.metaprov.modeld.services.labelingpipelinerun.v1.CreateLabelingPipelineRunRequest")
	proto.RegisterMapType((map[string]string)(nil), "github.com.metaprov.modeld.services.labelingpipelinerun.v1.CreateLabelingPipelineRunRequest.LabelsEntry")
	proto.RegisterType((*CreateLabelingPipelineRunResponse)(nil), "github.com.metaprov.modeld.services.labelingpipelinerun.v1.CreateLabelingPipelineRunResponse")
	proto.RegisterType((*UpdateLabelingPipelineRunRequest)(nil), "github.com.metaprov.modeld.services.labelingpipelinerun.v1.UpdateLabelingPipelineRunRequest")
	proto.RegisterMapType((map[string]string)(nil), "github.com.metaprov.modeld.services.labelingpipelinerun.v1.UpdateLabelingPipelineRunRequest.LabelsEntry")
	proto.RegisterType((*UpdateLabelingPipelineRunResponse)(nil), "github.com.metaprov.modeld.services.labelingpipelinerun.v1.UpdateLabelingPipelineRunResponse")
	proto.RegisterType((*GetLabelingPipelineRunRequest)(nil), "github.com.metaprov.modeld.services.labelingpipelinerun.v1.GetLabelingPipelineRunRequest")
	proto.RegisterType((*GetLabelingPipelineRunResponse)(nil), "github.com.metaprov.modeld.services.labelingpipelinerun.v1.GetLabelingPipelineRunResponse")
	proto.RegisterType((*DeleteLabelingPipelineRunRequest)(nil), "github.com.metaprov.modeld.services.labelingpipelinerun.v1.DeleteLabelingPipelineRunRequest")
	proto.RegisterType((*DeleteLabelingPipelineRunResponse)(nil), "github.com.metaprov.modeld.services.labelingpipelinerun.v1.DeleteLabelingPipelineRunResponse")
}

func init() {
	proto.RegisterFile("services/labelingpipelinerun/v1/labelingpipelinerun.proto", fileDescriptor_99e32ff9424aa020)
}

var fileDescriptor_99e32ff9424aa020 = []byte{
	// 655 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xcc, 0x57, 0xcf, 0x6b, 0xd4, 0x40,
	0x14, 0x36, 0xe9, 0xb6, 0xd0, 0xd7, 0x8b, 0x8c, 0x22, 0xdb, 0x50, 0xdb, 0x6d, 0x3c, 0x58, 0x10,
	0x66, 0xd8, 0x8a, 0x60, 0x0b, 0x22, 0xd4, 0x8a, 0x0a, 0x15, 0x34, 0xea, 0xc1, 0x6a, 0x0f, 0xd3,
	0xdd, 0x67, 0x1a, 0x9a, 0x1f, 0x63, 0x66, 0x36, 0x50, 0x8a, 0x22, 0x1e, 0xbc, 0x7a, 0xe8, 0x7f,
	0xa0, 0x7f, 0x92, 0x37, 0xcf, 0xfe, 0x0b, 0x05, 0xbd, 0xc9, 0x4c, 0xb2, 0xd6, 0x43, 0x7e, 0x40,
	0xb3, 0x0b, 0x3d, 0x75, 0xf2, 0xca, 0x7c, 0xf3, 0xbd, 0xef, 0x7b, 0xf3, 0x25, 0x0b, 0x1b, 0x12,
	0xd3, 0x2c, 0x18, 0xa0, 0x64, 0x21, 0xdf, 0xc7, 0x30, 0x88, 0x7d, 0x11, 0x08, 0xfd, 0x17, 0xd3,
	0x51, 0xcc, 0xb2, 0x7e, 0x59, 0x99, 0x8a, 0x34, 0x51, 0x09, 0xd9, 0xf4, 0x03, 0x75, 0x30, 0xda,
	0xa7, 0x83, 0x24, 0xa2, 0x11, 0x2a, 0x2e, 0xd2, 0x24, 0xa3, 0x51, 0x32, 0xc4, 0x70, 0x48, 0xc7,
	0xa8, 0xb4, 0x6c, 0x7b, 0xd6, 0x77, 0x96, 0xfc, 0x24, 0xf1, 0x43, 0x64, 0x5c, 0x04, 0x8c, 0xc7,
	0x71, 0xa2, 0xb8, 0x0a, 0x92, 0x58, 0xe6, 0xc8, 0xce, 0xf6, 0x19, 0x32, 0x1b, 0x23, 0xb3, 0x1c,
	0x59, 0x6f, 0x10, 0x87, 0xbe, 0xde, 0x28, 0xd9, 0x90, 0x2b, 0xce, 0xb2, 0x3e, 0x0f, 0xc5, 0x01,
	0xef, 0x33, 0x1f, 0x63, 0x4c, 0xb9, 0xc2, 0x61, 0x8e, 0xe2, 0xfe, 0xb1, 0x60, 0x79, 0x27, 0x90,
	0x6a, 0xa7, 0xa0, 0xf0, 0xac, 0xa0, 0xe0, 0x8d, 0x62, 0x0f, 0xdf, 0x8f, 0x50, 0x2a, 0xb2, 0x04,
	0xf3, 0x31, 0x8f, 0x50, 0x0a, 0x3e, 0xc0, 0xae, 0xd5, 0xb3, 0xd6, 0xe6, 0xbd, 0xb3, 0x02, 0xf9,
	0x08, 0x73, 0x86, 0xbe, 0xec, 0xda, 0xbd, 0x99, 0xb5, 0x85, 0xf5, 0x77, 0xf4, 0xfc, 0x1d, 0xd3,
	0x7a, 0x26, 0xd4, 0xfc, 0x4b, 0x3e, 0x8c, 0x55, 0x7a, 0xe4, 0x15, 0xa7, 0x3a, 0x1b, 0xb0, 0xf0,
	0x5f, 0x99, 0x5c, 0x86, 0x99, 0x43, 0x3c, 0x2a, 0x68, 0xea, 0x25, 0xb9, 0x0a, 0xb3, 0x19, 0x0f,
	0x47, 0xd8, 0xb5, 0x4d, 0x2d, 0x7f, 0xd8, 0xb4, 0xef, 0x5a, 0xee, 0x17, 0x0b, 0x56, 0x2a, 0x4f,
	0x94, 0x22, 0x89, 0x25, 0x92, 0x01, 0xcc, 0x06, 0x0a, 0x23, 0x69, 0x10, 0x17, 0xd6, 0x9f, 0xd6,
	0x74, 0xc7, 0x45, 0x40, 0xc5, 0xa1, 0x4f, 0xb5, 0xea, 0x54, 0xab, 0x4e, 0xc7, 0xaa, 0xd3, 0x92,
	0x13, 0xf4, 0xc1, 0x5e, 0x8e, 0xed, 0x9e, 0xda, 0xd0, 0x7b, 0x90, 0x22, 0x57, 0x78, 0x6e, 0x1b,
	0x08, 0x74, 0xf4, 0x43, 0xd1, 0xa4, 0x59, 0x93, 0x4f, 0xd6, 0x3f, 0x6f, 0x66, 0x8c, 0x37, 0x07,
	0x6d, 0xbc, 0x69, 0x22, 0x58, 0xe6, 0x0e, 0xe1, 0xd0, 0x91, 0x02, 0x07, 0xdd, 0xce, 0x84, 0xd5,
	0x7b, 0x21, 0x70, 0xe0, 0x19, 0xe8, 0x36, 0x03, 0x70, 0x03, 0x56, 0x6b, 0xba, 0xca, 0x27, 0xc0,
	0x98, 0xf3, 0x4a, 0x0c, 0x2f, 0xb6, 0x39, 0x4d, 0x04, 0x6b, 0xcd, 0x99, 0xbd, 0xa8, 0xe6, 0xd4,
	0x74, 0x55, 0x98, 0xf3, 0x1c, 0xae, 0x3f, 0x42, 0x35, 0x49, 0x63, 0xdc, 0x13, 0x0b, 0x96, 0xab,
	0x30, 0x8b, 0x50, 0xd8, 0x83, 0x8e, 0xbe, 0xb8, 0x45, 0x26, 0x3c, 0x99, 0x98, 0x70, 0x9e, 0x81,
	0xd5, 0xac, 0x8e, 0x78, 0x14, 0x8e, 0x59, 0xe9, 0xb5, 0xfb, 0x12, 0x7a, 0xdb, 0x18, 0xe2, 0x64,
	0x87, 0x50, 0x6b, 0x5c, 0x83, 0x9a, 0x77, 0xbb, 0xfe, 0x1d, 0xc0, 0x29, 0x73, 0x39, 0x1f, 0x49,
	0x72, 0x6a, 0x41, 0xb7, 0x22, 0x45, 0x25, 0xd9, 0x9d, 0xde, 0xdb, 0xc0, 0x79, 0x33, 0x15, 0xec,
	0x62, 0xb0, 0x7a, 0x9f, 0x7f, 0xfc, 0x3a, 0xb1, 0x1d, 0xd2, 0xad, 0x78, 0xbd, 0x4b, 0xf2, 0xd5,
	0x86, 0xc5, 0xca, 0xf4, 0x20, 0x6f, 0xa7, 0x19, 0xb5, 0xce, 0xde, 0x94, 0xd0, 0x8b, 0xe6, 0xef,
	0x98, 0xe6, 0x99, 0x5b, 0xd9, 0xfc, 0xe6, 0x95, 0x92, 0x2a, 0xf9, 0x6d, 0xc1, 0xb5, 0xf2, 0x9b,
	0x43, 0x5e, 0xb7, 0x21, 0x5c, 0x7b, 0xc3, 0x9d, 0xdd, 0x69, 0x40, 0x17, 0x42, 0xdc, 0x34, 0x42,
	0xac, 0x92, 0x95, 0x2a, 0x21, 0xd8, 0xb1, 0xbe, 0x47, 0x1f, 0xc8, 0x37, 0x1b, 0x16, 0x2b, 0xd3,
	0xaa, 0xdd, 0x30, 0x34, 0x45, 0x7b, 0xbb, 0x61, 0x68, 0x8e, 0xd8, 0xc7, 0x46, 0x83, 0x2d, 0xe7,
	0x56, 0x99, 0x06, 0x92, 0x1d, 0x9b, 0x92, 0x39, 0xd7, 0xe4, 0x9b, 0xd1, 0xa3, 0x7c, 0x3e, 0x7e,
	0x5a, 0xb0, 0x58, 0x19, 0x37, 0xed, 0x44, 0x6a, 0xca, 0xc6, 0x76, 0x22, 0x35, 0x66, 0xa4, 0x7b,
	0x69, 0xeb, 0xfe, 0xee, 0xbd, 0xfa, 0x0f, 0xf2, 0x86, 0xdf, 0x10, 0xfb, 0x73, 0xe6, 0x83, 0xfc,
	0xf6, 0xdf, 0x00, 0x00, 0x00, 0xff, 0xff, 0xaf, 0x9a, 0xa3, 0x31, 0x6d, 0x0c, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// LabelingPipelineRunServiceClient is the client API for LabelingPipelineRunService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type LabelingPipelineRunServiceClient interface {
	ListLabelingPipelineRuns(ctx context.Context, in *ListLabelingPipelineRunRequest, opts ...grpc.CallOption) (*ListLabelingPipelineRunResponse, error)
	CreateLabelingPipelineRun(ctx context.Context, in *CreateLabelingPipelineRunRequest, opts ...grpc.CallOption) (*CreateLabelingPipelineRunResponse, error)
	GetLabelingPipelineRun(ctx context.Context, in *GetLabelingPipelineRunRequest, opts ...grpc.CallOption) (*GetLabelingPipelineRunResponse, error)
	UpdateLabelingPipelineRun(ctx context.Context, in *UpdateLabelingPipelineRunRequest, opts ...grpc.CallOption) (*UpdateLabelingPipelineRunResponse, error)
	DeleteLabelingPipelineRun(ctx context.Context, in *DeleteLabelingPipelineRunRequest, opts ...grpc.CallOption) (*DeleteLabelingPipelineRunResponse, error)
}

type labelingPipelineRunServiceClient struct {
	cc *grpc.ClientConn
}

func NewLabelingPipelineRunServiceClient(cc *grpc.ClientConn) LabelingPipelineRunServiceClient {
	return &labelingPipelineRunServiceClient{cc}
}

func (c *labelingPipelineRunServiceClient) ListLabelingPipelineRuns(ctx context.Context, in *ListLabelingPipelineRunRequest, opts ...grpc.CallOption) (*ListLabelingPipelineRunResponse, error) {
	out := new(ListLabelingPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.labelingpipelinerun.v1.LabelingPipelineRunService/ListLabelingPipelineRuns", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *labelingPipelineRunServiceClient) CreateLabelingPipelineRun(ctx context.Context, in *CreateLabelingPipelineRunRequest, opts ...grpc.CallOption) (*CreateLabelingPipelineRunResponse, error) {
	out := new(CreateLabelingPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.labelingpipelinerun.v1.LabelingPipelineRunService/CreateLabelingPipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *labelingPipelineRunServiceClient) GetLabelingPipelineRun(ctx context.Context, in *GetLabelingPipelineRunRequest, opts ...grpc.CallOption) (*GetLabelingPipelineRunResponse, error) {
	out := new(GetLabelingPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.labelingpipelinerun.v1.LabelingPipelineRunService/GetLabelingPipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *labelingPipelineRunServiceClient) UpdateLabelingPipelineRun(ctx context.Context, in *UpdateLabelingPipelineRunRequest, opts ...grpc.CallOption) (*UpdateLabelingPipelineRunResponse, error) {
	out := new(UpdateLabelingPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.labelingpipelinerun.v1.LabelingPipelineRunService/UpdateLabelingPipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *labelingPipelineRunServiceClient) DeleteLabelingPipelineRun(ctx context.Context, in *DeleteLabelingPipelineRunRequest, opts ...grpc.CallOption) (*DeleteLabelingPipelineRunResponse, error) {
	out := new(DeleteLabelingPipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.labelingpipelinerun.v1.LabelingPipelineRunService/DeleteLabelingPipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// LabelingPipelineRunServiceServer is the server API for LabelingPipelineRunService service.
type LabelingPipelineRunServiceServer interface {
	ListLabelingPipelineRuns(context.Context, *ListLabelingPipelineRunRequest) (*ListLabelingPipelineRunResponse, error)
	CreateLabelingPipelineRun(context.Context, *CreateLabelingPipelineRunRequest) (*CreateLabelingPipelineRunResponse, error)
	GetLabelingPipelineRun(context.Context, *GetLabelingPipelineRunRequest) (*GetLabelingPipelineRunResponse, error)
	UpdateLabelingPipelineRun(context.Context, *UpdateLabelingPipelineRunRequest) (*UpdateLabelingPipelineRunResponse, error)
	DeleteLabelingPipelineRun(context.Context, *DeleteLabelingPipelineRunRequest) (*DeleteLabelingPipelineRunResponse, error)
}

// UnimplementedLabelingPipelineRunServiceServer can be embedded to have forward compatible implementations.
type UnimplementedLabelingPipelineRunServiceServer struct {
}

func (*UnimplementedLabelingPipelineRunServiceServer) ListLabelingPipelineRuns(ctx context.Context, req *ListLabelingPipelineRunRequest) (*ListLabelingPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListLabelingPipelineRuns not implemented")
}
func (*UnimplementedLabelingPipelineRunServiceServer) CreateLabelingPipelineRun(ctx context.Context, req *CreateLabelingPipelineRunRequest) (*CreateLabelingPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateLabelingPipelineRun not implemented")
}
func (*UnimplementedLabelingPipelineRunServiceServer) GetLabelingPipelineRun(ctx context.Context, req *GetLabelingPipelineRunRequest) (*GetLabelingPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetLabelingPipelineRun not implemented")
}
func (*UnimplementedLabelingPipelineRunServiceServer) UpdateLabelingPipelineRun(ctx context.Context, req *UpdateLabelingPipelineRunRequest) (*UpdateLabelingPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateLabelingPipelineRun not implemented")
}
func (*UnimplementedLabelingPipelineRunServiceServer) DeleteLabelingPipelineRun(ctx context.Context, req *DeleteLabelingPipelineRunRequest) (*DeleteLabelingPipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteLabelingPipelineRun not implemented")
}

func RegisterLabelingPipelineRunServiceServer(s *grpc.Server, srv LabelingPipelineRunServiceServer) {
	s.RegisterService(&_LabelingPipelineRunService_serviceDesc, srv)
}

func _LabelingPipelineRunService_ListLabelingPipelineRuns_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListLabelingPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LabelingPipelineRunServiceServer).ListLabelingPipelineRuns(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.labelingpipelinerun.v1.LabelingPipelineRunService/ListLabelingPipelineRuns",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LabelingPipelineRunServiceServer).ListLabelingPipelineRuns(ctx, req.(*ListLabelingPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LabelingPipelineRunService_CreateLabelingPipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateLabelingPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LabelingPipelineRunServiceServer).CreateLabelingPipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.labelingpipelinerun.v1.LabelingPipelineRunService/CreateLabelingPipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LabelingPipelineRunServiceServer).CreateLabelingPipelineRun(ctx, req.(*CreateLabelingPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LabelingPipelineRunService_GetLabelingPipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetLabelingPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LabelingPipelineRunServiceServer).GetLabelingPipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.labelingpipelinerun.v1.LabelingPipelineRunService/GetLabelingPipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LabelingPipelineRunServiceServer).GetLabelingPipelineRun(ctx, req.(*GetLabelingPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LabelingPipelineRunService_UpdateLabelingPipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateLabelingPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LabelingPipelineRunServiceServer).UpdateLabelingPipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.labelingpipelinerun.v1.LabelingPipelineRunService/UpdateLabelingPipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LabelingPipelineRunServiceServer).UpdateLabelingPipelineRun(ctx, req.(*UpdateLabelingPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LabelingPipelineRunService_DeleteLabelingPipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteLabelingPipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LabelingPipelineRunServiceServer).DeleteLabelingPipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.labelingpipelinerun.v1.LabelingPipelineRunService/DeleteLabelingPipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LabelingPipelineRunServiceServer).DeleteLabelingPipelineRun(ctx, req.(*DeleteLabelingPipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _LabelingPipelineRunService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modeld.services.labelingpipelinerun.v1.LabelingPipelineRunService",
	HandlerType: (*LabelingPipelineRunServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListLabelingPipelineRuns",
			Handler:    _LabelingPipelineRunService_ListLabelingPipelineRuns_Handler,
		},
		{
			MethodName: "CreateLabelingPipelineRun",
			Handler:    _LabelingPipelineRunService_CreateLabelingPipelineRun_Handler,
		},
		{
			MethodName: "GetLabelingPipelineRun",
			Handler:    _LabelingPipelineRunService_GetLabelingPipelineRun_Handler,
		},
		{
			MethodName: "UpdateLabelingPipelineRun",
			Handler:    _LabelingPipelineRunService_UpdateLabelingPipelineRun_Handler,
		},
		{
			MethodName: "DeleteLabelingPipelineRun",
			Handler:    _LabelingPipelineRunService_DeleteLabelingPipelineRun_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "services/labelingpipelinerun/v1/labelingpipelinerun.proto",
}