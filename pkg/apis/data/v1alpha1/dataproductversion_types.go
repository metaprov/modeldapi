/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// Condition on the dataset
type DataProductVersionConditionType string

/// DataProductVersion Condition
const (
	DataProductVersionReady DataProductVersionConditionType = "Ready"
	// There is an active model ready to serve
	DataProductVersionPublished DataProductVersionConditionType = "Published"
	// The system collected all the parent of this product version
	DataProductVersionBaselined DataProductVersionConditionType = "Baselined"
	// A model from this version is serving predictions
	DataProductVersionServing DataProductVersionConditionType = "ServingSiteName"
	// A model from this version is serving predictions
	DataProductVersionArchived DataProductVersionConditionType = "Archived"
)

// DataProductVersionCondition describes the state of a DataProductVersion at a certain point.
type DataProductVersionCondition struct {
	// Type of condition.
	Type DataProductVersionConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=DataProductVersionConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,4,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,5,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,6,opt,name=message"`
}

// +genclient
// +genclient:noStatus
// +k8s:openapi-gen=true
// +kubebuilder:object:root=true
// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Entity",type="string",JSONPath=".spec.productRef.name",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=dataproductversions,shortName=dpv,singular=dataproductversion,categories={data,modeld,all}
// DataProductVersion represent a version of the data product. A version is usually created when a new
// data was gathered for the same product.
type DataProductVersion struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata" protobuf:"bytes,1,opt,name=metadata"`
	Spec              DataProductVersionSpec `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	//+optional
	Status DataProductVersionStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +k8s:deepcopy-gen:interfaces=k8s.io/apimachinery/pkg/runtime.Object
// +kubebuilder:object:root=true
// DataProductVersionList contains a list of DataProductVersion
type DataProductVersionList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []DataProductVersion `json:"items" protobuf:"bytes,2,rep,name=items"`
}

//DataProductVersionSpec defines the desired state of a data product version
type DataProductVersionSpec struct {
	ProductRef v1.ObjectReference `json:"productRef,omitempty" protobuf:"bytes,1,opt,name=productRef"`
	// Description is user provided description
	// +optional
	// +kubebuilder:default = ""
	// +kubebuilder:validation:MaxLength=512
	Description *string `json:"description,omitempty" protobuf:"bytes,2,opt,name=description"`
	// PrevVersionName is a pointer to the version that we derived from
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:default=""
	// +optional
	PrevVersionName *string `json:"prevVersionName,omitempty" protobuf:"bytes,3,opt,name=prevVersionName"`
	// Baseline denote if this product version a baseline. If a product version is a baseline, we can garbage
	// collect all the parents' product versions
	// +kubebuilder:default = false
	// +optional
	Baseline *bool `json:"baseline,omitempty" protobuf:"bytes,4,opt,name=baseline"`
	// The owner account name
	// +kubebuilder:default="no-one"
	// +optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,5,opt,name=owner"`
}

// DataProductVersionStatus defines the observed state of DataProductVersion
type DataProductVersionStatus struct {
	// Represents the latest available observations of a dataset state.
	//+optional
	Conditions []DataProductVersionCondition `json:"conditions,omitempty" protobuf:"bytes,1,rep,name=conditions"`
}
