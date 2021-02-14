// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: services/virtualvolume/v1/virtualvolume.proto

package v1

import (
	context "context"
	fmt "fmt"
	proto "github.com/gogo/protobuf/proto"
	empty "github.com/golang/protobuf/ptypes/empty"
	v1alpha1 "github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1"
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

type VirtualVolumeQuery struct {
	Namespace            string            `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string            `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Labels               map[string]string `protobuf:"bytes,3,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	XXX_NoUnkeyedLiteral struct{}          `json:"-"`
	XXX_unrecognized     []byte            `json:"-"`
	XXX_sizecache        int32             `json:"-"`
}

func (m *VirtualVolumeQuery) Reset()         { *m = VirtualVolumeQuery{} }
func (m *VirtualVolumeQuery) String() string { return proto.CompactTextString(m) }
func (*VirtualVolumeQuery) ProtoMessage()    {}
func (*VirtualVolumeQuery) Descriptor() ([]byte, []int) {
	return fileDescriptor_622613b6f1604578, []int{0}
}
func (m *VirtualVolumeQuery) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_VirtualVolumeQuery.Unmarshal(m, b)
}
func (m *VirtualVolumeQuery) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_VirtualVolumeQuery.Marshal(b, m, deterministic)
}
func (m *VirtualVolumeQuery) XXX_Merge(src proto.Message) {
	xxx_messageInfo_VirtualVolumeQuery.Merge(m, src)
}
func (m *VirtualVolumeQuery) XXX_Size() int {
	return xxx_messageInfo_VirtualVolumeQuery.Size(m)
}
func (m *VirtualVolumeQuery) XXX_DiscardUnknown() {
	xxx_messageInfo_VirtualVolumeQuery.DiscardUnknown(m)
}

var xxx_messageInfo_VirtualVolumeQuery proto.InternalMessageInfo

func (m *VirtualVolumeQuery) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *VirtualVolumeQuery) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *VirtualVolumeQuery) GetLabels() map[string]string {
	if m != nil {
		return m.Labels
	}
	return nil
}

type VirtualVolumeResponse struct {
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *VirtualVolumeResponse) Reset()         { *m = VirtualVolumeResponse{} }
func (m *VirtualVolumeResponse) String() string { return proto.CompactTextString(m) }
func (*VirtualVolumeResponse) ProtoMessage()    {}
func (*VirtualVolumeResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_622613b6f1604578, []int{1}
}
func (m *VirtualVolumeResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_VirtualVolumeResponse.Unmarshal(m, b)
}
func (m *VirtualVolumeResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_VirtualVolumeResponse.Marshal(b, m, deterministic)
}
func (m *VirtualVolumeResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_VirtualVolumeResponse.Merge(m, src)
}
func (m *VirtualVolumeResponse) XXX_Size() int {
	return xxx_messageInfo_VirtualVolumeResponse.Size(m)
}
func (m *VirtualVolumeResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_VirtualVolumeResponse.DiscardUnknown(m)
}

var xxx_messageInfo_VirtualVolumeResponse proto.InternalMessageInfo

type VirtualVolumeCreateRequest struct {
	Namespace            string                      `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string                      `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Labels               map[string]string           `protobuf:"bytes,3,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Spec                 *v1alpha1.VirtualVolumeSpec `protobuf:"bytes,5,opt,name=spec,proto3" json:"spec,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                    `json:"-"`
	XXX_unrecognized     []byte                      `json:"-"`
	XXX_sizecache        int32                       `json:"-"`
}

func (m *VirtualVolumeCreateRequest) Reset()         { *m = VirtualVolumeCreateRequest{} }
func (m *VirtualVolumeCreateRequest) String() string { return proto.CompactTextString(m) }
func (*VirtualVolumeCreateRequest) ProtoMessage()    {}
func (*VirtualVolumeCreateRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_622613b6f1604578, []int{2}
}
func (m *VirtualVolumeCreateRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_VirtualVolumeCreateRequest.Unmarshal(m, b)
}
func (m *VirtualVolumeCreateRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_VirtualVolumeCreateRequest.Marshal(b, m, deterministic)
}
func (m *VirtualVolumeCreateRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_VirtualVolumeCreateRequest.Merge(m, src)
}
func (m *VirtualVolumeCreateRequest) XXX_Size() int {
	return xxx_messageInfo_VirtualVolumeCreateRequest.Size(m)
}
func (m *VirtualVolumeCreateRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_VirtualVolumeCreateRequest.DiscardUnknown(m)
}

var xxx_messageInfo_VirtualVolumeCreateRequest proto.InternalMessageInfo

func (m *VirtualVolumeCreateRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *VirtualVolumeCreateRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *VirtualVolumeCreateRequest) GetLabels() map[string]string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *VirtualVolumeCreateRequest) GetSpec() *v1alpha1.VirtualVolumeSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

type VirtualVolumeUpdateRequest struct {
	Namespace            string                      `protobuf:"bytes,1,opt,name=namespace,proto3" json:"namespace,omitempty"`
	Name                 string                      `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Labels               map[string]string           `protobuf:"bytes,3,rep,name=labels,proto3" json:"labels,omitempty" protobuf_key:"bytes,1,opt,name=key,proto3" protobuf_val:"bytes,2,opt,name=value,proto3"`
	Spec                 *v1alpha1.VirtualVolumeSpec `protobuf:"bytes,5,opt,name=spec,proto3" json:"spec,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                    `json:"-"`
	XXX_unrecognized     []byte                      `json:"-"`
	XXX_sizecache        int32                       `json:"-"`
}

func (m *VirtualVolumeUpdateRequest) Reset()         { *m = VirtualVolumeUpdateRequest{} }
func (m *VirtualVolumeUpdateRequest) String() string { return proto.CompactTextString(m) }
func (*VirtualVolumeUpdateRequest) ProtoMessage()    {}
func (*VirtualVolumeUpdateRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_622613b6f1604578, []int{3}
}
func (m *VirtualVolumeUpdateRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_VirtualVolumeUpdateRequest.Unmarshal(m, b)
}
func (m *VirtualVolumeUpdateRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_VirtualVolumeUpdateRequest.Marshal(b, m, deterministic)
}
func (m *VirtualVolumeUpdateRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_VirtualVolumeUpdateRequest.Merge(m, src)
}
func (m *VirtualVolumeUpdateRequest) XXX_Size() int {
	return xxx_messageInfo_VirtualVolumeUpdateRequest.Size(m)
}
func (m *VirtualVolumeUpdateRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_VirtualVolumeUpdateRequest.DiscardUnknown(m)
}

var xxx_messageInfo_VirtualVolumeUpdateRequest proto.InternalMessageInfo

func (m *VirtualVolumeUpdateRequest) GetNamespace() string {
	if m != nil {
		return m.Namespace
	}
	return ""
}

func (m *VirtualVolumeUpdateRequest) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *VirtualVolumeUpdateRequest) GetLabels() map[string]string {
	if m != nil {
		return m.Labels
	}
	return nil
}

func (m *VirtualVolumeUpdateRequest) GetSpec() *v1alpha1.VirtualVolumeSpec {
	if m != nil {
		return m.Spec
	}
	return nil
}

type VirtualVolumeGetResponse struct {
	Item                 *v1alpha1.VirtualVolume `protobuf:"bytes,1,opt,name=item,proto3" json:"item,omitempty"`
	Yaml                 string                  `protobuf:"bytes,2,opt,name=yaml,proto3" json:"yaml,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                `json:"-"`
	XXX_unrecognized     []byte                  `json:"-"`
	XXX_sizecache        int32                   `json:"-"`
}

func (m *VirtualVolumeGetResponse) Reset()         { *m = VirtualVolumeGetResponse{} }
func (m *VirtualVolumeGetResponse) String() string { return proto.CompactTextString(m) }
func (*VirtualVolumeGetResponse) ProtoMessage()    {}
func (*VirtualVolumeGetResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_622613b6f1604578, []int{4}
}
func (m *VirtualVolumeGetResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_VirtualVolumeGetResponse.Unmarshal(m, b)
}
func (m *VirtualVolumeGetResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_VirtualVolumeGetResponse.Marshal(b, m, deterministic)
}
func (m *VirtualVolumeGetResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_VirtualVolumeGetResponse.Merge(m, src)
}
func (m *VirtualVolumeGetResponse) XXX_Size() int {
	return xxx_messageInfo_VirtualVolumeGetResponse.Size(m)
}
func (m *VirtualVolumeGetResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_VirtualVolumeGetResponse.DiscardUnknown(m)
}

var xxx_messageInfo_VirtualVolumeGetResponse proto.InternalMessageInfo

func (m *VirtualVolumeGetResponse) GetItem() *v1alpha1.VirtualVolume {
	if m != nil {
		return m.Item
	}
	return nil
}

func (m *VirtualVolumeGetResponse) GetYaml() string {
	if m != nil {
		return m.Yaml
	}
	return ""
}

func init() {
	proto.RegisterType((*VirtualVolumeQuery)(nil), "github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeQuery")
	proto.RegisterMapType((map[string]string)(nil), "github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeQuery.LabelsEntry")
	proto.RegisterType((*VirtualVolumeResponse)(nil), "github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeResponse")
	proto.RegisterType((*VirtualVolumeCreateRequest)(nil), "github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeCreateRequest")
	proto.RegisterMapType((map[string]string)(nil), "github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeCreateRequest.LabelsEntry")
	proto.RegisterType((*VirtualVolumeUpdateRequest)(nil), "github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeUpdateRequest")
	proto.RegisterMapType((map[string]string)(nil), "github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeUpdateRequest.LabelsEntry")
	proto.RegisterType((*VirtualVolumeGetResponse)(nil), "github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeGetResponse")
}

func init() {
	proto.RegisterFile("services/virtualvolume/v1/virtualvolume.proto", fileDescriptor_622613b6f1604578)
}

var fileDescriptor_622613b6f1604578 = []byte{
	// 618 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xd4, 0x96, 0xcf, 0x6b, 0x13, 0x41,
	0x14, 0xc7, 0xd9, 0x24, 0x8d, 0x74, 0x82, 0x20, 0x43, 0xd5, 0xb0, 0x16, 0x29, 0xab, 0x42, 0x50,
	0x3a, 0x43, 0x52, 0x41, 0x5b, 0x6f, 0xda, 0xd0, 0x1e, 0x82, 0xe8, 0xaa, 0x45, 0xa4, 0x97, 0x49,
	0xf2, 0xba, 0x5d, 0x32, 0xbb, 0x33, 0xee, 0xcc, 0x2e, 0x04, 0xf1, 0xe2, 0xc9, 0xbb, 0x07, 0xff,
	0x04, 0xff, 0x02, 0xef, 0x9e, 0x3c, 0x79, 0xf3, 0xec, 0xcd, 0xbb, 0xff, 0x82, 0xec, 0x6c, 0xd6,
	0x76, 0x5a, 0x13, 0xa4, 0xee, 0x41, 0x6f, 0xf3, 0x83, 0xf9, 0xbe, 0xcf, 0x7c, 0xdf, 0x7b, 0xb3,
	0x8b, 0xd6, 0x15, 0x24, 0x59, 0x38, 0x02, 0x45, 0xb3, 0x30, 0xd1, 0x29, 0xe3, 0x99, 0xe0, 0x69,
	0x04, 0x34, 0xeb, 0xda, 0x0b, 0x44, 0x26, 0x42, 0x0b, 0x7c, 0x3b, 0x08, 0xf5, 0x61, 0x3a, 0x24,
	0x23, 0x11, 0x91, 0x08, 0x34, 0x93, 0x89, 0xc8, 0x48, 0x24, 0xc6, 0xc0, 0xc7, 0xa4, 0x54, 0x22,
	0xf6, 0xc1, 0xac, 0xeb, 0x5e, 0x09, 0x84, 0x08, 0x38, 0x50, 0xa3, 0x31, 0x4c, 0x0f, 0x28, 0x44,
	0x52, 0x4f, 0x0b, 0x49, 0x77, 0x75, 0xb6, 0xc9, 0x64, 0x48, 0x59, 0x1c, 0x0b, 0xcd, 0x74, 0x28,
	0x62, 0x35, 0xdb, 0xed, 0x1f, 0x05, 0xa4, 0x65, 0x40, 0x5a, 0x04, 0xcc, 0x0f, 0xc8, 0x49, 0x90,
	0x1f, 0x54, 0x34, 0x8c, 0x0f, 0x12, 0x46, 0xb3, 0x2e, 0xe3, 0xf2, 0x90, 0x75, 0x69, 0x00, 0x31,
	0x24, 0x4c, 0xc3, 0xb8, 0x90, 0xf1, 0x7e, 0x38, 0x08, 0xef, 0x15, 0x58, 0x7b, 0x06, 0xeb, 0x71,
	0x0a, 0xc9, 0x14, 0xaf, 0xa2, 0xe5, 0x98, 0x45, 0xa0, 0x24, 0x1b, 0x41, 0xdb, 0x59, 0x73, 0x3a,
	0xcb, 0xfe, 0xd1, 0x02, 0xc6, 0xa8, 0x91, 0x4f, 0xda, 0x35, 0xb3, 0x61, 0xc6, 0x98, 0xa3, 0x26,
	0x67, 0x43, 0xe0, 0xaa, 0x5d, 0x5f, 0xab, 0x77, 0x5a, 0xbd, 0xa7, 0xe4, 0x2c, 0x8e, 0x90, 0xd3,
	0x2c, 0x64, 0x60, 0x64, 0xfb, 0xb1, 0x4e, 0xa6, 0xfe, 0x2c, 0x86, 0xbb, 0x89, 0x5a, 0xc7, 0x96,
	0xf1, 0x05, 0x54, 0x9f, 0xc0, 0x74, 0x06, 0x9a, 0x0f, 0xf1, 0x0a, 0x5a, 0xca, 0x18, 0x4f, 0x4b,
	0xc6, 0x62, 0xb2, 0x55, 0xbb, 0xeb, 0x78, 0x97, 0xd1, 0x45, 0x2b, 0x88, 0x0f, 0x4a, 0x8a, 0x58,
	0x81, 0xf7, 0xad, 0x86, 0x5c, 0x6b, 0xe7, 0x41, 0x02, 0x4c, 0x83, 0x0f, 0x2f, 0x53, 0x50, 0xfa,
	0x0c, 0x96, 0xe8, 0x13, 0x96, 0xec, 0x57, 0x60, 0x89, 0xc5, 0xf4, 0x3b, 0x6b, 0xf0, 0x3e, 0x6a,
	0x28, 0x09, 0xa3, 0xf6, 0xd2, 0x9a, 0xd3, 0x69, 0xf5, 0x76, 0x17, 0xc4, 0x64, 0x32, 0x24, 0x72,
	0x12, 0x90, 0xbc, 0x4e, 0x88, 0xa9, 0x13, 0x52, 0xd6, 0x89, 0x1d, 0xf4, 0x89, 0x84, 0x91, 0x6f,
	0x54, 0xff, 0xc6, 0xf8, 0x53, 0xfe, 0x3e, 0x93, 0xe3, 0x7f, 0xce, 0x5f, 0x8b, 0xe9, 0xff, 0xf2,
	0xf7, 0xad, 0x83, 0xda, 0x96, 0xec, 0x0e, 0xe8, 0xb2, 0xb8, 0xf1, 0x73, 0xd4, 0x08, 0x35, 0x44,
	0x46, 0xa9, 0xd5, 0xdb, 0xae, 0x82, 0xda, 0x37, 0x8a, 0x79, 0x66, 0xa6, 0x2c, 0xe2, 0x65, 0x66,
	0xf2, 0x71, 0xef, 0xe3, 0x39, 0xb4, 0x62, 0xdf, 0xb0, 0x70, 0x1f, 0x7f, 0x72, 0x50, 0x63, 0x10,
	0x2a, 0x8d, 0x77, 0xab, 0x7a, 0x1e, 0xdc, 0x4a, 0x32, 0x90, 0x33, 0x79, 0xd7, 0xdf, 0x7c, 0xfd,
	0xfe, 0xae, 0x76, 0x15, 0xaf, 0x9a, 0x27, 0xf7, 0xd7, 0x93, 0x69, 0x41, 0x28, 0xfc, 0xc1, 0x41,
	0xcd, 0xa2, 0x0b, 0xf1, 0xa3, 0xaa, 0x1b, 0xda, 0xbd, 0x44, 0x8a, 0x47, 0x9f, 0x94, 0x5f, 0x04,
	0xd2, 0xcf, 0xbf, 0x08, 0xde, 0x86, 0x41, 0x5b, 0xf7, 0x16, 0xa2, 0x6d, 0x9d, 0xb7, 0xe6, 0xf8,
	0x8b, 0x83, 0xea, 0x3b, 0x50, 0xa5, 0xd7, 0x0f, 0x2b, 0x50, 0x3a, 0x56, 0x95, 0xde, 0x2d, 0x73,
	0xad, 0x1b, 0xf8, 0xda, 0xa2, 0x6b, 0xd1, 0x57, 0x79, 0xb7, 0xbf, 0xc6, 0x9f, 0x1d, 0xd4, 0x2c,
	0xda, 0xb3, 0x12, 0xe3, 0xad, 0x4e, 0x9f, 0x6b, 0xbc, 0x6f, 0x08, 0x07, 0xee, 0xbd, 0xc5, 0x84,
	0xf6, 0xdc, 0x20, 0x8d, 0x99, 0x66, 0xc4, 0x90, 0x9f, 0xcc, 0xcb, 0x7b, 0x07, 0x35, 0xb7, 0x81,
	0x83, 0x86, 0x0a, 0x53, 0x33, 0xef, 0x02, 0x33, 0x8b, 0x6f, 0xfe, 0x89, 0xc5, 0xf7, 0x37, 0x5f,
	0xdc, 0x59, 0xfc, 0x5b, 0x31, 0xf7, 0xa7, 0x68, 0xd8, 0x34, 0x71, 0x37, 0x7e, 0x06, 0x00, 0x00,
	0xff, 0xff, 0x60, 0xdc, 0x10, 0x6e, 0x38, 0x09, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// VirtualVolumeServiceClient is the client API for VirtualVolumeService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type VirtualVolumeServiceClient interface {
	List(ctx context.Context, in *VirtualVolumeQuery, opts ...grpc.CallOption) (*v1alpha1.VirtualVolumeList, error)
	Create(ctx context.Context, in *VirtualVolumeCreateRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	Get(ctx context.Context, in *VirtualVolumeQuery, opts ...grpc.CallOption) (*VirtualVolumeGetResponse, error)
	Update(ctx context.Context, in *VirtualVolumeUpdateRequest, opts ...grpc.CallOption) (*empty.Empty, error)
	Delete(ctx context.Context, in *VirtualVolumeQuery, opts ...grpc.CallOption) (*empty.Empty, error)
}

type virtualVolumeServiceClient struct {
	cc *grpc.ClientConn
}

func NewVirtualVolumeServiceClient(cc *grpc.ClientConn) VirtualVolumeServiceClient {
	return &virtualVolumeServiceClient{cc}
}

func (c *virtualVolumeServiceClient) List(ctx context.Context, in *VirtualVolumeQuery, opts ...grpc.CallOption) (*v1alpha1.VirtualVolumeList, error) {
	out := new(v1alpha1.VirtualVolumeList)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *virtualVolumeServiceClient) Create(ctx context.Context, in *VirtualVolumeCreateRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *virtualVolumeServiceClient) Get(ctx context.Context, in *VirtualVolumeQuery, opts ...grpc.CallOption) (*VirtualVolumeGetResponse, error) {
	out := new(VirtualVolumeGetResponse)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *virtualVolumeServiceClient) Update(ctx context.Context, in *VirtualVolumeUpdateRequest, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *virtualVolumeServiceClient) Delete(ctx context.Context, in *VirtualVolumeQuery, opts ...grpc.CallOption) (*empty.Empty, error) {
	out := new(empty.Empty)
	err := c.cc.Invoke(ctx, "/github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// VirtualVolumeServiceServer is the server API for VirtualVolumeService service.
type VirtualVolumeServiceServer interface {
	List(context.Context, *VirtualVolumeQuery) (*v1alpha1.VirtualVolumeList, error)
	Create(context.Context, *VirtualVolumeCreateRequest) (*empty.Empty, error)
	Get(context.Context, *VirtualVolumeQuery) (*VirtualVolumeGetResponse, error)
	Update(context.Context, *VirtualVolumeUpdateRequest) (*empty.Empty, error)
	Delete(context.Context, *VirtualVolumeQuery) (*empty.Empty, error)
}

// UnimplementedVirtualVolumeServiceServer can be embedded to have forward compatible implementations.
type UnimplementedVirtualVolumeServiceServer struct {
}

func (*UnimplementedVirtualVolumeServiceServer) List(ctx context.Context, req *VirtualVolumeQuery) (*v1alpha1.VirtualVolumeList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (*UnimplementedVirtualVolumeServiceServer) Create(ctx context.Context, req *VirtualVolumeCreateRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedVirtualVolumeServiceServer) Get(ctx context.Context, req *VirtualVolumeQuery) (*VirtualVolumeGetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (*UnimplementedVirtualVolumeServiceServer) Update(ctx context.Context, req *VirtualVolumeUpdateRequest) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (*UnimplementedVirtualVolumeServiceServer) Delete(ctx context.Context, req *VirtualVolumeQuery) (*empty.Empty, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}

func RegisterVirtualVolumeServiceServer(s *grpc.Server, srv VirtualVolumeServiceServer) {
	s.RegisterService(&_VirtualVolumeService_serviceDesc, srv)
}

func _VirtualVolumeService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VirtualVolumeQuery)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VirtualVolumeServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VirtualVolumeServiceServer).List(ctx, req.(*VirtualVolumeQuery))
	}
	return interceptor(ctx, in, info, handler)
}

func _VirtualVolumeService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VirtualVolumeCreateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VirtualVolumeServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VirtualVolumeServiceServer).Create(ctx, req.(*VirtualVolumeCreateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _VirtualVolumeService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VirtualVolumeQuery)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VirtualVolumeServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VirtualVolumeServiceServer).Get(ctx, req.(*VirtualVolumeQuery))
	}
	return interceptor(ctx, in, info, handler)
}

func _VirtualVolumeService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VirtualVolumeUpdateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VirtualVolumeServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VirtualVolumeServiceServer).Update(ctx, req.(*VirtualVolumeUpdateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _VirtualVolumeService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VirtualVolumeQuery)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VirtualVolumeServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VirtualVolumeServiceServer).Delete(ctx, req.(*VirtualVolumeQuery))
	}
	return interceptor(ctx, in, info, handler)
}

var _VirtualVolumeService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "github.com.metaprov.modeld.services.virtualvolume.v1.VirtualVolumeService",
	HandlerType: (*VirtualVolumeServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "List",
			Handler:    _VirtualVolumeService_List_Handler,
		},
		{
			MethodName: "Create",
			Handler:    _VirtualVolumeService_Create_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _VirtualVolumeService_Get_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _VirtualVolumeService_Update_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _VirtualVolumeService_Delete_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "services/virtualvolume/v1/virtualvolume.proto",
}