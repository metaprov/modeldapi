package v1alpha1

import (
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// Algorithm
//==============================================================================
// +genclient
// +genclient:noStatus
// +k8s:openapi-gen=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// +kubebuilder:resource:path=algorithms,singular=algorithm,categories={catalog,modeld,all}
// +kubebuilder:printcolumn:name="Framework",type="string",JSONPath=".spec.frameworkName",description=""
// +kubebuilder:printcolumn:name="Repository",type="string",JSONPath=".spec.url",description=""
// +kubebuilder:printcolumn:name="Task",type="string",JSONPath=".spec.task",description=""
type Algorithm struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              AlgorithmSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status AlgorithmStatus `json:"status" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// AlgorithmList contains a list of Algorithm
type AlgorithmList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Algorithm `json:"items" protobuf:"bytes,2,rep,name=items"`
}

//AlgorithmSpec is the desired state of Algorithm.
type AlgorithmSpec struct {
	// FrameworkName is a reference to library
	// +optional
	FrameworkName string `json:"frameworkName,omitempty" protobuf:"bytes,1,opt,name=frameworkName"`
	// +kubebuilder:default = ""
	// +optional
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// The Url for the algorithm information
	// +optional
	Url string `json:"url,omitempty" protobuf:"bytes,3,opt,name=url"`
	// The Algorithm Task (binary classification / regression)
	// +optional
	Task MLTask `json:"task" protobuf:"bytes,4,opt,name=task"`
	// The Algorithm Task (binary classification / regression)
	// +optional
	Sparse bool `json:"sparse,omitempty" protobuf:"bytes,5,opt,name=sparse"`
	// Integer hyper parameters
	// +optional
	IntegerParameters []IntParameter `json:"integerParameters,omitempty" protobuf:"bytes,6,rep,name=integerParameters"`
	// Float hyper parameters
	// +optional
	FloatParameters []FloatParameter `json:"floatParameters,omitempty" protobuf:"bytes,7,rep,name=floatParameters"`
	// Categorical hyper parameters
	// +optional
	CategoricalParameters []CategoricalParameter `json:"categoricalParameters,omitempty" protobuf:"bytes,8,rep,name=categoricalParameters"`
}

// IntParameter contain the specification of an integer hyper parameter
type IntParameter struct {
	// Name is the name of the hyper parameter
	// +optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Type is the datatype of the parameter
	// +optional
	Type DataType `json:"type,omitempty" protobuf:"bytes,2,opt,name=type"`
	// Min is the minimum value
	// +optional
	Min int32 `json:"min,omitempty" protobuf:"varint,3,opt,name=min"`
	// Max is the maximum value
	// +optional
	Max int32 `json:"max,omitempty" protobuf:"varint,4,opt,name=max"`
	// Default parameter value
	DefaultValue int32 `json:"defaultValue,omitempty" protobuf:"varint,6,opt,name=defaultValue"`
}

// FloatParameter contain the specification of an float hyper parameter
type FloatParameter struct {
	// Name is the name of the hyper parameter
	// +optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Min is the minimum value
	// +optional
	Min float64 `json:"min,omitempty" protobuf:"bytes,3,opt,name=min"`
	// Max is the maximum value
	// +optional
	Max float64 `json:"max,omitempty" protobuf:"bytes,4,opt,name=max"`
	// Default float value
	// +optional
	DefaultValue float64 `json:"defaultValue,omitempty" protobuf:"bytes,5,opt,name=defaultValue"`
	// Sample from a log parameter
	// +optional
	Log bool `json:"log,omitempty" protobuf:"bytes,6,opt,name=log"`
}

// CategoricalParameter contain the specification of an categorical hyper parameter
type CategoricalParameter struct {
	// Name is the name of the hyper parameter
	// +optional
	Name string `json:"name,omitempty" protobuf:"bytes,1,opt,name=name"`
	// Default value
	DefaultValue string `json:"defaultValue,omitempty" protobuf:"bytes,8,opt,name=defaultValue"`
	// Enums defines the list of values
	// +optional
	Enums []string `json:"enums,omitempty" protobuf:"bytes,10,rep,name=enums"`
}

// AlgorithmStatus defines the observed state of Datacenter.
type AlgorithmStatus struct {
}
