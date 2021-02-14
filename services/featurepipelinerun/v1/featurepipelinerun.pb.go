// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: services/featurepipelinerun/v1/featurepipelinerun.proto

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

type ListFeaturePipelineRunRequest struct {
	Namespace            string            `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Labels               map[string]string `protobuf:"bytes,2,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *ListFeaturePipelineRunRequest) Reset()         { *m = ListFeaturePipelineRunRequest{} }
func (m *ListFeaturePipelineRunRequest) String() string { return proto.CompactTextString(m) }
func (*ListFeaturePipelineRunRequest) ProtoMessage()    {}
func (*ListFeaturePipelineRunRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_827d30f9424b5f28, []int{0}
}
func (m *ListFeaturePipelineRunRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListFeaturePipelineRunRequest.Unmarshal(m, b)
}
func (m *ListFeaturePipelineRunRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListFeaturePipelineRunRequest.Marshal(b, m, deterministic)
}
func (m *ListFeaturePipelineRunRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListFeaturePipelineRunRequest.Merge(m, src)
}
func (m *ListFeaturePipelineRunRequest) XXX_Size() int {
	return xxx_messageInfo_ListFeaturePipelineRunRequest.Size(m)
}
func (m *ListFeaturePipelineRunRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListFeaturePipelineRunRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListFeaturePipelineRunRequest proto.InternalMessageInfo

func (m *ListFeaturePipelineRunRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *ListFeaturePipelineRunRequest) GetLabels() map[string]string {
	if m != nil {
		return m.Labels
	}
	return nil
}

type ListFeaturePipelineRunResponse struct {
	Items                *v1alpha1.FeaturePipelineRunList `protobuf:"bytes,1,opt,name=items,proto3" json:"items,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                         `json:"-"`
	XXX_unrecognized     []byte                           `json:"-"`
	XXX_sizecache        int32                            `json:"-"`
}

func (m *ListFeaturePipelineRunResponse) Reset()         { *m = ListFeaturePipelineRunResponse{} }
func (m *ListFeaturePipelineRunResponse) String() string { return proto.CompactTextString(m) }
func (*ListFeaturePipelineRunResponse) ProtoMessage()    {}
func (*ListFeaturePipelineRunResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_827d30f9424b5f28, []int{1}
}
func (m *ListFeaturePipelineRunResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListFeaturePipelineRunResponse.Unmarshal(m, b)
}
func (m *ListFeaturePipelineRunResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListFeaturePipelineRunResponse.Marshal(b, m, deterministic)
}
func (m *ListFeaturePipelineRunResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListFeaturePipelineRunResponse.Merge(m, src)
}
func (m *ListFeaturePipelineRunResponse) XXX_Size() int {
	return xxx_messageInfo_ListFeaturePipelineRunResponse.Size(m)
}
func (m *ListFeaturePipelineRunResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_ListFeaturePipelineRunResponse.DiscardUnknown(m)
}

var xxx_messageInfo_ListFeaturePipelineRunResponse proto.InternalMessageInfo

func (m *ListFeaturePipelineRunResponse) GetItems() *v1alpha1.FeaturePipelineRunList {
	if m != nil {
		return m.Items
	}
	return nil
}

type CreateFeaturePipelineRunRequest struct {
	Namespace            string                           `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string                           `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Labels               map[string]string                `protobuf:"bytes,3,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Spec                 *v1alpha1.FeaturePipelineRunSpec `protobuf:"bytes,4,opt,name=spec,proto3" json:"spec,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                         `json:"-"`
	XXX_unrecognized     []byte                           `json:"-"`
	XXX_sizecache        int32                            `json:"-"`
}

func (m *CreateFeaturePipelineRunRequest) Reset()         { *m = CreateFeaturePipelineRunRequest{} }
func (m *CreateFeaturePipelineRunRequest) String() string { return proto.CompactTextString(m) }
func (*CreateFeaturePipelineRunRequest) ProtoMessage()    {}
func (*CreateFeaturePipelineRunRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_827d30f9424b5f28, []int{2}
}
func (m *CreateFeaturePipelineRunRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateFeaturePipelineRunRequest.Unmarshal(m, b)
}
func (m *CreateFeaturePipelineRunRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateFeaturePipelineRunRequest.Marshal(b, m, deterministic)
}
func (m *CreateFeaturePipelineRunRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateFeaturePipelineRunRequest.Merge(m, src)
}
func (m *CreateFeaturePipelineRunRequest) XXX_Size() int {
	return xxx_messageInfo_CreateFeaturePipelineRunRequest.Size(m)
}
func (m *CreateFeaturePipelineRunRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateFeaturePipelineRunRequest.DiscardUnknown(m)
}

var xxx_messageInfo_CreateFeaturePipelineRunRequest proto.InternalMessageInfo

func (m *CreateFeaturePipelineRunRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *CreateFeaturePipelineRunRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *CreateFeaturePipelineRunRequest) GetLabels() map[string]string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *CreateFeaturePipelineRunRequest) GetSpec() *v1alpha1.FeaturePipelineRunSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

type CreateFeaturePipelineRunResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CreateFeaturePipelineRunResponse) Reset()         { *m = CreateFeaturePipelineRunResponse{} }
func (m *CreateFeaturePipelineRunResponse) String() string { return proto.CompactTextString(m) }
func (*CreateFeaturePipelineRunResponse) ProtoMessage()    {}
func (*CreateFeaturePipelineRunResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_827d30f9424b5f28, []int{3}
}
func (m *CreateFeaturePipelineRunResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CreateFeaturePipelineRunResponse.Unmarshal(m, b)
}
func (m *CreateFeaturePipelineRunResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CreateFeaturePipelineRunResponse.Marshal(b, m, deterministic)
}
func (m *CreateFeaturePipelineRunResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CreateFeaturePipelineRunResponse.Merge(m, src)
}
func (m *CreateFeaturePipelineRunResponse) XXX_Size() int {
	return xxx_messageInfo_CreateFeaturePipelineRunResponse.Size(m)
}
func (m *CreateFeaturePipelineRunResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_CreateFeaturePipelineRunResponse.DiscardUnknown(m)
}

var xxx_messageInfo_CreateFeaturePipelineRunResponse proto.InternalMessageInfo

type UpdateFeaturePipelineRunRequest struct {
	Namespace            string                           `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string                           `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Labels               map[string]string                `protobuf:"bytes,3,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Spec                 *v1alpha1.FeaturePipelineRunSpec `protobuf:"bytes,5,opt,name=spec,proto3" json:"spec,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                         `json:"-"`
	XXX_unrecognized     []byte                           `json:"-"`
	XXX_sizecache        int32                            `json:"-"`
}

func (m *UpdateFeaturePipelineRunRequest) Reset()         { *m = UpdateFeaturePipelineRunRequest{} }
func (m *UpdateFeaturePipelineRunRequest) String() string { return proto.CompactTextString(m) }
func (*UpdateFeaturePipelineRunRequest) ProtoMessage()    {}
func (*UpdateFeaturePipelineRunRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_827d30f9424b5f28, []int{4}
}
func (m *UpdateFeaturePipelineRunRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateFeaturePipelineRunRequest.Unmarshal(m, b)
}
func (m *UpdateFeaturePipelineRunRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateFeaturePipelineRunRequest.Marshal(b, m, deterministic)
}
func (m *UpdateFeaturePipelineRunRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateFeaturePipelineRunRequest.Merge(m, src)
}
func (m *UpdateFeaturePipelineRunRequest) XXX_Size() int {
	return xxx_messageInfo_UpdateFeaturePipelineRunRequest.Size(m)
}
func (m *UpdateFeaturePipelineRunRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateFeaturePipelineRunRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateFeaturePipelineRunRequest proto.InternalMessageInfo

func (m *UpdateFeaturePipelineRunRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *UpdateFeaturePipelineRunRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *UpdateFeaturePipelineRunRequest) GetLabels() map[string]string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *UpdateFeaturePipelineRunRequest) GetSpec() *v1alpha1.FeaturePipelineRunSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

type UpdateFeaturePipelineRunResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UpdateFeaturePipelineRunResponse) Reset()         { *m = UpdateFeaturePipelineRunResponse{} }
func (m *UpdateFeaturePipelineRunResponse) String() string { return proto.CompactTextString(m) }
func (*UpdateFeaturePipelineRunResponse) ProtoMessage()    {}
func (*UpdateFeaturePipelineRunResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_827d30f9424b5f28, []int{5}
}
func (m *UpdateFeaturePipelineRunResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateFeaturePipelineRunResponse.Unmarshal(m, b)
}
func (m *UpdateFeaturePipelineRunResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateFeaturePipelineRunResponse.Marshal(b, m, deterministic)
}
func (m *UpdateFeaturePipelineRunResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateFeaturePipelineRunResponse.Merge(m, src)
}
func (m *UpdateFeaturePipelineRunResponse) XXX_Size() int {
	return xxx_messageInfo_UpdateFeaturePipelineRunResponse.Size(m)
}
func (m *UpdateFeaturePipelineRunResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateFeaturePipelineRunResponse.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateFeaturePipelineRunResponse proto.InternalMessageInfo

type GetFeaturePipelineRunRequest struct {
	Namespace            string   `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GetFeaturePipelineRunRequest) Reset()         { *m = GetFeaturePipelineRunRequest{} }
func (m *GetFeaturePipelineRunRequest) String() string { return proto.CompactTextString(m) }
func (*GetFeaturePipelineRunRequest) ProtoMessage()    {}
func (*GetFeaturePipelineRunRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_827d30f9424b5f28, []int{6}
}
func (m *GetFeaturePipelineRunRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetFeaturePipelineRunRequest.Unmarshal(m, b)
}
func (m *GetFeaturePipelineRunRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetFeaturePipelineRunRequest.Marshal(b, m, deterministic)
}
func (m *GetFeaturePipelineRunRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetFeaturePipelineRunRequest.Merge(m, src)
}
func (m *GetFeaturePipelineRunRequest) XXX_Size() int {
	return xxx_messageInfo_GetFeaturePipelineRunRequest.Size(m)
}
func (m *GetFeaturePipelineRunRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_GetFeaturePipelineRunRequest.DiscardUnknown(m)
}

var xxx_messageInfo_GetFeaturePipelineRunRequest proto.InternalMessageInfo

func (m *GetFeaturePipelineRunRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *GetFeaturePipelineRunRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type GetFeaturePipelineRunResponse struct {
	Item                 *v1alpha1.FeaturePipelineRun `protobuf:"bytes,1,opt,name=item,proto3" json:"item,omitempty"`
	Yaml                 string                       `protobuf:"bytes,2,opt,name=yaml,proto3" json:"yaml,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                     `json:"-"`
	XXX_unrecognized     []byte                       `json:"-"`
	XXX_sizecache        int32                        `json:"-"`
}

func (m *GetFeaturePipelineRunResponse) Reset()         { *m = GetFeaturePipelineRunResponse{} }
func (m *GetFeaturePipelineRunResponse) String() string { return proto.CompactTextString(m) }
func (*GetFeaturePipelineRunResponse) ProtoMessage()    {}
func (*GetFeaturePipelineRunResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_827d30f9424b5f28, []int{7}
}
func (m *GetFeaturePipelineRunResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GetFeaturePipelineRunResponse.Unmarshal(m, b)
}
func (m *GetFeaturePipelineRunResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GetFeaturePipelineRunResponse.Marshal(b, m, deterministic)
}
func (m *GetFeaturePipelineRunResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GetFeaturePipelineRunResponse.Merge(m, src)
}
func (m *GetFeaturePipelineRunResponse) XXX_Size() int {
	return xxx_messageInfo_GetFeaturePipelineRunResponse.Size(m)
}
func (m *GetFeaturePipelineRunResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_GetFeaturePipelineRunResponse.DiscardUnknown(m)
}

var xxx_messageInfo_GetFeaturePipelineRunResponse proto.InternalMessageInfo

func (m *GetFeaturePipelineRunResponse) GetItem() *v1alpha1.FeaturePipelineRun {
	if m != nil {
		return m.Item
	}
	return nil
}

func (m *GetFeaturePipelineRunResponse) GetYaml() string {
	if m != nil {
		return m.Yaml
	}
	return ""
}

type DeleteFeaturePipelineRunRequest struct {
	Namespace            string   `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteFeaturePipelineRunRequest) Reset()         { *m = DeleteFeaturePipelineRunRequest{} }
func (m *DeleteFeaturePipelineRunRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteFeaturePipelineRunRequest) ProtoMessage()    {}
func (*DeleteFeaturePipelineRunRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_827d30f9424b5f28, []int{8}
}
func (m *DeleteFeaturePipelineRunRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteFeaturePipelineRunRequest.Unmarshal(m, b)
}
func (m *DeleteFeaturePipelineRunRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteFeaturePipelineRunRequest.Marshal(b, m, deterministic)
}
func (m *DeleteFeaturePipelineRunRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteFeaturePipelineRunRequest.Merge(m, src)
}
func (m *DeleteFeaturePipelineRunRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteFeaturePipelineRunRequest.Size(m)
}
func (m *DeleteFeaturePipelineRunRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteFeaturePipelineRunRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteFeaturePipelineRunRequest proto.InternalMessageInfo

func (m *DeleteFeaturePipelineRunRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *DeleteFeaturePipelineRunRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type DeleteFeaturePipelineRunResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteFeaturePipelineRunResponse) Reset()         { *m = DeleteFeaturePipelineRunResponse{} }
func (m *DeleteFeaturePipelineRunResponse) String() string { return proto.CompactTextString(m) }
func (*DeleteFeaturePipelineRunResponse) ProtoMessage()    {}
func (*DeleteFeaturePipelineRunResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_827d30f9424b5f28, []int{9}
}
func (m *DeleteFeaturePipelineRunResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteFeaturePipelineRunResponse.Unmarshal(m, b)
}
func (m *DeleteFeaturePipelineRunResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteFeaturePipelineRunResponse.Marshal(b, m, deterministic)
}
func (m *DeleteFeaturePipelineRunResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteFeaturePipelineRunResponse.Merge(m, src)
}
func (m *DeleteFeaturePipelineRunResponse) XXX_Size() int {
	return xxx_messageInfo_DeleteFeaturePipelineRunResponse.Size(m)
}
func (m *DeleteFeaturePipelineRunResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteFeaturePipelineRunResponse.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteFeaturePipelineRunResponse proto.InternalMessageInfo

func init() {
	proto.RegisterType((*ListFeaturePipelineRunRequest)(nil), "github.com.metaprov.modeld.services.featurepipelinerun.v1.ListFeaturePipelineRunRequest")
	proto.RegisterMapType((map[string]string)(nil), "github.com.metaprov.modeld.services.featurepipelinerun.v1.ListFeaturePipelineRunRequest.LabelsEntry")
	proto.RegisterType((*ListFeaturePipelineRunResponse)(nil), "github.com.metaprov.modeld.services.featurepipelinerun.v1.ListFeaturePipelineRunResponse")
	proto.RegisterType((*CreateFeaturePipelineRunRequest)(nil), "github.com.metaprov.modeld.services.featurepipelinerun.v1.CreateFeaturePipelineRunRequest")
	proto.RegisterMapType((map[string]string)(nil), "github.com.metaprov.modeld.services.featurepipelinerun.v1.CreateFeaturePipelineRunRequest.LabelsEntry")
	proto.RegisterType((*CreateFeaturePipelineRunResponse)(nil), "github.com.metaprov.modeld.services.featurepipelinerun.v1.CreateFeaturePipelineRunResponse")
	proto.RegisterType((*UpdateFeaturePipelineRunRequest)(nil), "github.com.metaprov.modeld.services.featurepipelinerun.v1.UpdateFeaturePipelineRunRequest")
	proto.RegisterMapType((map[string]string)(nil), "github.com.metaprov.modeld.services.featurepipelinerun.v1.UpdateFeaturePipelineRunRequest.LabelsEntry")
	proto.RegisterType((*UpdateFeaturePipelineRunResponse)(nil), "github.com.metaprov.modeld.services.featurepipelinerun.v1.UpdateFeaturePipelineRunResponse")
	proto.RegisterType((*GetFeaturePipelineRunRequest)(nil), "github.com.metaprov.modeld.services.featurepipelinerun.v1.GetFeaturePipelineRunRequest")
	proto.RegisterType((*GetFeaturePipelineRunResponse)(nil), "github.com.metaprov.modeld.services.featurepipelinerun.v1.GetFeaturePipelineRunResponse")
	proto.RegisterType((*DeleteFeaturePipelineRunRequest)(nil), "github.com.metaprov.modeld.services.featurepipelinerun.v1.DeleteFeaturePipelineRunRequest")
	proto.RegisterType((*DeleteFeaturePipelineRunResponse)(nil), "github.com.metaprov.modeld.services.featurepipelinerun.v1.DeleteFeaturePipelineRunResponse")
}

func init() {
	proto.RegisterFile("services/featurepipelinerun/v1/featurepipelinerun.proto", fileDescriptor_827d30f9424b5f28)
}

var fileDescriptor_827d30f9424b5f28 = []byte{
	// 655 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xcc, 0x57, 0xcf, 0x6b, 0xd4, 0x40,
	0x14, 0x36, 0xe9, 0xb6, 0xd0, 0xd7, 0x8b, 0x0c, 0x4a, 0xd3, 0xd0, 0x1f, 0x4b, 0x0e, 0xd2, 0x83,
	0x4e, 0xd8, 0xf6, 0xa0, 0x2d, 0xe2, 0xa1, 0x56, 0xed, 0xa1, 0x87, 0x92, 0x22, 0xd6, 0xea, 0xc1,
	0xd9, 0xdd, 0xd7, 0x6d, 0x68, 0x36, 0x19, 0x33, 0x93, 0x40, 0xa9, 0x7a, 0x10, 0x05, 0xaf, 0xe2,
	0xd9, 0xbf, 0x4a, 0xfc, 0x0f, 0xbc, 0x2b, 0x1e, 0x3c, 0xcb, 0x4c, 0xb2, 0x56, 0x68, 0x7e, 0x40,
	0xb3, 0x0b, 0xbd, 0x4d, 0x1e, 0xcc, 0xf7, 0xde, 0xf7, 0x7d, 0x33, 0xdf, 0xce, 0xc2, 0x5d, 0x81,
	0x71, 0xea, 0xf7, 0x50, 0xb8, 0x47, 0xc8, 0x64, 0x12, 0x23, 0xf7, 0x39, 0x06, 0x7e, 0x88, 0x71,
	0x12, 0xba, 0x69, 0xa7, 0xa0, 0x4a, 0x79, 0x1c, 0xc9, 0x88, 0x6c, 0x0c, 0x7c, 0x79, 0x9c, 0x74,
	0x69, 0x2f, 0x1a, 0xd2, 0x21, 0x4a, 0xc6, 0xe3, 0x28, 0xa5, 0xc3, 0xa8, 0x8f, 0x41, 0x9f, 0x8e,
	0x30, 0x69, 0xc1, 0xee, 0xb4, 0x63, 0x2f, 0x0e, 0xa2, 0x68, 0x10, 0xa0, 0xcb, 0xb8, 0xef, 0xb2,
	0x30, 0x8c, 0x24, 0x93, 0x7e, 0x14, 0x8a, 0x0c, 0xd8, 0xde, 0x3e, 0x07, 0x76, 0x47, 0xc0, 0x6e,
	0x06, 0xac, 0x36, 0xf0, 0x93, 0x81, 0xda, 0x28, 0xdc, 0x3e, 0x93, 0xcc, 0x4d, 0x3b, 0x2c, 0xe0,
	0xc7, 0xac, 0xe3, 0x0e, 0x30, 0xc4, 0x98, 0x49, 0xec, 0x67, 0x28, 0xce, 0x1f, 0x03, 0x96, 0x76,
	0x7d, 0x21, 0x1f, 0x67, 0x13, 0xec, 0xe5, 0x13, 0x78, 0x49, 0xe8, 0xe1, 0xeb, 0x04, 0x85, 0x24,
	0x8b, 0x30, 0x1b, 0xb2, 0x21, 0x0a, 0xce, 0x7a, 0x68, 0x19, 0x6d, 0x63, 0x75, 0xd6, 0x3b, 0x2f,
	0x90, 0x37, 0x30, 0x13, 0xb0, 0x2e, 0x06, 0xc2, 0x32, 0xdb, 0x53, 0xab, 0x73, 0x6b, 0x7d, 0x7a,
	0x69, 0xbe, 0xb4, 0x72, 0x0e, 0xba, 0xab, 0xdb, 0x3c, 0x0a, 0x65, 0x7c, 0xea, 0xe5, 0x3d, 0xed,
	0x0d, 0x98, 0xfb, 0xaf, 0x4c, 0xae, 0xc3, 0xd4, 0x09, 0x9e, 0xe6, 0x43, 0xaa, 0x25, 0xb9, 0x01,
	0xd3, 0x29, 0x0b, 0x12, 0xb4, 0x4c, 0x5d, 0xcb, 0x3e, 0x36, 0xcd, 0x7b, 0x86, 0xf3, 0xc1, 0x80,
	0xe5, 0xb2, 0x86, 0x82, 0x47, 0xa1, 0x40, 0xd2, 0x85, 0x69, 0x5f, 0xe2, 0x50, 0x68, 0xc0, 0xb9,
	0xb5, 0xdd, 0x0a, 0x6a, 0x8c, 0xfb, 0x94, 0x9f, 0x0c, 0xa8, 0x52, 0x9c, 0x2a, 0xc5, 0xe9, 0x48,
	0x71, 0x7a, 0xb1, 0x81, 0x6a, 0xeb, 0x65, 0xd0, 0xce, 0x2f, 0x13, 0x56, 0x1e, 0xc6, 0xc8, 0x24,
	0x5e, 0xd6, 0x01, 0x02, 0x2d, 0xf5, 0x91, 0x33, 0xd4, 0x6b, 0xf2, 0xee, 0x9f, 0x2b, 0x53, 0xda,
	0x95, 0xa3, 0x06, 0xae, 0xd4, 0x4c, 0x57, 0xe4, 0x0b, 0x79, 0x05, 0x2d, 0xc1, 0xb1, 0x67, 0xb5,
	0xc6, 0x2b, 0xdc, 0x3e, 0xc7, 0x9e, 0xa7, 0x91, 0x9b, 0x38, 0xef, 0x40, 0xbb, 0x9c, 0x53, 0x66,
	0xbd, 0xb6, 0xe5, 0x29, 0xef, 0x5f, 0x61, 0x5b, 0x6a, 0xa6, 0xab, 0xb4, 0x65, 0xfa, 0x8a, 0xda,
	0x52, 0xce, 0x29, 0xb7, 0x65, 0x0f, 0x16, 0x9f, 0xa0, 0x1c, 0xa3, 0x25, 0xce, 0x67, 0x03, 0x96,
	0x4a, 0x20, 0xf3, 0x14, 0x78, 0x09, 0x2d, 0x75, 0x55, 0xf3, 0x10, 0xd8, 0x19, 0x97, 0x68, 0x9e,
	0x46, 0x55, 0x33, 0x9d, 0xb2, 0x61, 0x30, 0x9a, 0x49, 0xad, 0x9d, 0x7d, 0x58, 0xd9, 0xc6, 0x00,
	0xc7, 0x7a, 0xf6, 0x94, 0xbc, 0xe5, 0xa0, 0x19, 0xd5, 0xb5, 0x8f, 0x00, 0x0b, 0x05, 0xf6, 0x66,
	0x07, 0x91, 0xfc, 0x34, 0x60, 0xbe, 0x38, 0x31, 0x05, 0x39, 0x98, 0x54, 0xec, 0xdb, 0xcf, 0x27,
	0x80, 0x9c, 0x9f, 0xa6, 0x95, 0xf7, 0xdf, 0x7e, 0x7c, 0x31, 0x17, 0xc8, 0x7c, 0xf1, 0x0f, 0xb8,
	0x20, 0x9f, 0x4c, 0xb0, 0xca, 0xa2, 0x82, 0x1c, 0x4e, 0x2e, 0x53, 0xed, 0x17, 0x13, 0xc1, 0xce,
	0x69, 0xaf, 0x6b, 0xda, 0x77, 0x9c, 0x32, 0xda, 0x9b, 0xe4, 0x62, 0x91, 0xfc, 0x36, 0xe0, 0x66,
	0xe1, 0x3d, 0x21, 0xcf, 0x1a, 0xcc, 0x5a, 0x75, 0x99, 0xed, 0x83, 0xf1, 0x03, 0xe7, 0x0a, 0xdc,
	0xd2, 0x0a, 0xb4, 0xc9, 0x72, 0x89, 0x02, 0xee, 0x99, 0xba, 0x32, 0x6f, 0xc9, 0x57, 0x13, 0xac,
	0xb2, 0x4c, 0x6a, 0xe4, 0x7f, 0x4d, 0x78, 0x37, 0xf2, 0xbf, 0x36, 0x44, 0x77, 0x34, 0xfb, 0x2d,
	0xfb, 0x76, 0x01, 0x7b, 0xe1, 0x9e, 0xe5, 0x15, 0xdd, 0x56, 0x87, 0x98, 0xd6, 0xa2, 0xf0, 0x50,
	0x7c, 0x37, 0xc0, 0x2a, 0x0b, 0x95, 0x46, 0xfa, 0xd4, 0xc4, 0x5f, 0x23, 0x7d, 0xea, 0x52, 0xd0,
	0xb9, 0xb6, 0xf5, 0xe0, 0xf0, 0x7e, 0xf5, 0xe3, 0xba, 0xfa, 0xcf, 0x40, 0x77, 0x46, 0xbf, 0xad,
	0xd7, 0xff, 0x06, 0x00, 0x00, 0xff, 0xff, 0x27, 0x4c, 0x82, 0xaa, 0x35, 0x0c, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// FeaturePipelineRunServiceClient is the client API for FeaturePipelineRunService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type FeaturePipelineRunServiceClient interface {
	ListFeaturePipelineRuns(ctx context.Context, in *ListFeaturePipelineRunRequest, opts ...grpc.CallOption) (*ListFeaturePipelineRunResponse, error)
	CreateFeaturePipelineRun(ctx context.Context, in *CreateFeaturePipelineRunRequest, opts ...grpc.CallOption) (*CreateFeaturePipelineRunResponse, error)
	GetFeaturePipelineRun(ctx context.Context, in *GetFeaturePipelineRunRequest, opts ...grpc.CallOption) (*GetFeaturePipelineRunResponse, error)
	UpdateFeaturePipelineRun(ctx context.Context, in *UpdateFeaturePipelineRunRequest, opts ...grpc.CallOption) (*UpdateFeaturePipelineRunResponse, error)
	DeleteFeaturePipelineRun(ctx context.Context, in *DeleteFeaturePipelineRunRequest, opts ...grpc.CallOption) (*DeleteFeaturePipelineRunResponse, error)
}

type featurePipelineRunServiceClient struct {
	cc *grpc.ClientConn
}

func NewFeaturePipelineRunServiceClient(cc *grpc.ClientConn) FeaturePipelineRunServiceClient {
	return &featurePipelineRunServiceClient{cc}
}

func (c *featurePipelineRunServiceClient) ListFeaturePipelineRuns(ctx context.Context, in *ListFeaturePipelineRunRequest, opts ...grpc.CallOption) (*ListFeaturePipelineRunResponse, error) {
	out := new(ListFeaturePipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.featurepipelinerun.v1.FeaturePipelineRunService/ListFeaturePipelineRuns", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *featurePipelineRunServiceClient) CreateFeaturePipelineRun(ctx context.Context, in *CreateFeaturePipelineRunRequest, opts ...grpc.CallOption) (*CreateFeaturePipelineRunResponse, error) {
	out := new(CreateFeaturePipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.featurepipelinerun.v1.FeaturePipelineRunService/CreateFeaturePipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *featurePipelineRunServiceClient) GetFeaturePipelineRun(ctx context.Context, in *GetFeaturePipelineRunRequest, opts ...grpc.CallOption) (*GetFeaturePipelineRunResponse, error) {
	out := new(GetFeaturePipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.featurepipelinerun.v1.FeaturePipelineRunService/GetFeaturePipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *featurePipelineRunServiceClient) UpdateFeaturePipelineRun(ctx context.Context, in *UpdateFeaturePipelineRunRequest, opts ...grpc.CallOption) (*UpdateFeaturePipelineRunResponse, error) {
	out := new(UpdateFeaturePipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.featurepipelinerun.v1.FeaturePipelineRunService/UpdateFeaturePipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *featurePipelineRunServiceClient) DeleteFeaturePipelineRun(ctx context.Context, in *DeleteFeaturePipelineRunRequest, opts ...grpc.CallOption) (*DeleteFeaturePipelineRunResponse, error) {
	out := new(DeleteFeaturePipelineRunResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.featurepipelinerun.v1.FeaturePipelineRunService/DeleteFeaturePipelineRun", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FeaturePipelineRunServiceServer is the server API for FeaturePipelineRunService service.
type FeaturePipelineRunServiceServer interface {
	ListFeaturePipelineRuns(context.Context, *ListFeaturePipelineRunRequest) (*ListFeaturePipelineRunResponse, error)
	CreateFeaturePipelineRun(context.Context, *CreateFeaturePipelineRunRequest) (*CreateFeaturePipelineRunResponse, error)
	GetFeaturePipelineRun(context.Context, *GetFeaturePipelineRunRequest) (*GetFeaturePipelineRunResponse, error)
	UpdateFeaturePipelineRun(context.Context, *UpdateFeaturePipelineRunRequest) (*UpdateFeaturePipelineRunResponse, error)
	DeleteFeaturePipelineRun(context.Context, *DeleteFeaturePipelineRunRequest) (*DeleteFeaturePipelineRunResponse, error)
}

// UnimplementedFeaturePipelineRunServiceServer can be embedded to have forward compatible implementations.
type UnimplementedFeaturePipelineRunServiceServer struct {
}

func (*UnimplementedFeaturePipelineRunServiceServer) ListFeaturePipelineRuns(ctx context.Context, req *ListFeaturePipelineRunRequest) (*ListFeaturePipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListFeaturePipelineRuns not implemented")
}
func (*UnimplementedFeaturePipelineRunServiceServer) CreateFeaturePipelineRun(ctx context.Context, req *CreateFeaturePipelineRunRequest) (*CreateFeaturePipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateFeaturePipelineRun not implemented")
}
func (*UnimplementedFeaturePipelineRunServiceServer) GetFeaturePipelineRun(ctx context.Context, req *GetFeaturePipelineRunRequest) (*GetFeaturePipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFeaturePipelineRun not implemented")
}
func (*UnimplementedFeaturePipelineRunServiceServer) UpdateFeaturePipelineRun(ctx context.Context, req *UpdateFeaturePipelineRunRequest) (*UpdateFeaturePipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateFeaturePipelineRun not implemented")
}
func (*UnimplementedFeaturePipelineRunServiceServer) DeleteFeaturePipelineRun(ctx context.Context, req *DeleteFeaturePipelineRunRequest) (*DeleteFeaturePipelineRunResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteFeaturePipelineRun not implemented")
}

func RegisterFeaturePipelineRunServiceServer(s *grpc.Server, srv FeaturePipelineRunServiceServer) {
	s.RegisterService(&_FeaturePipelineRunService_serviceDesc, srv)
}

func _FeaturePipelineRunService_ListFeaturePipelineRuns_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListFeaturePipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeaturePipelineRunServiceServer).ListFeaturePipelineRuns(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.featurepipelinerun.v1.FeaturePipelineRunService/ListFeaturePipelineRuns",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeaturePipelineRunServiceServer).ListFeaturePipelineRuns(ctx, req.(*ListFeaturePipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FeaturePipelineRunService_CreateFeaturePipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CreateFeaturePipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeaturePipelineRunServiceServer).CreateFeaturePipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.featurepipelinerun.v1.FeaturePipelineRunService/CreateFeaturePipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeaturePipelineRunServiceServer).CreateFeaturePipelineRun(ctx, req.(*CreateFeaturePipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FeaturePipelineRunService_GetFeaturePipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetFeaturePipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeaturePipelineRunServiceServer).GetFeaturePipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.featurepipelinerun.v1.FeaturePipelineRunService/GetFeaturePipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeaturePipelineRunServiceServer).GetFeaturePipelineRun(ctx, req.(*GetFeaturePipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FeaturePipelineRunService_UpdateFeaturePipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateFeaturePipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeaturePipelineRunServiceServer).UpdateFeaturePipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.featurepipelinerun.v1.FeaturePipelineRunService/UpdateFeaturePipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeaturePipelineRunServiceServer).UpdateFeaturePipelineRun(ctx, req.(*UpdateFeaturePipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FeaturePipelineRunService_DeleteFeaturePipelineRun_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteFeaturePipelineRunRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FeaturePipelineRunServiceServer).DeleteFeaturePipelineRun(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.featurepipelinerun.v1.FeaturePipelineRunService/DeleteFeaturePipelineRun",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FeaturePipelineRunServiceServer).DeleteFeaturePipelineRun(ctx, req.(*DeleteFeaturePipelineRunRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _FeaturePipelineRunService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modeld.services.featurepipelinerun.v1.FeaturePipelineRunService",
	HandlerType: (*FeaturePipelineRunServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "ListFeaturePipelineRuns",
			Handler:    _FeaturePipelineRunService_ListFeaturePipelineRuns_Handler,
		},
		{
			MethodName: "CreateFeaturePipelineRun",
			Handler:    _FeaturePipelineRunService_CreateFeaturePipelineRun_Handler,
		},
		{
			MethodName: "GetFeaturePipelineRun",
			Handler:    _FeaturePipelineRunService_GetFeaturePipelineRun_Handler,
		},
		{
			MethodName: "UpdateFeaturePipelineRun",
			Handler:    _FeaturePipelineRunService_UpdateFeaturePipelineRun_Handler,
		},
		{
			MethodName: "DeleteFeaturePipelineRun",
			Handler:    _FeaturePipelineRunService_DeleteFeaturePipelineRun_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "services/featurepipelinerun/v1/featurepipelinerun.proto",
}