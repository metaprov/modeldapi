package v1alpha1

import (
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

//==============================================================================
// ServingSite
//==============================================================================

/// ServingSiteConditionType site condition
type ServingSiteConditionType string

/// ServingSite Condition
const (
	ServingSiteReady ServingSiteConditionType = "Ready"
	ServingSiteSaved ServingSiteConditionType = "Saved"
)

// ServingSiteCondition describes the state of a servingsite at a certain point.
type ServingSiteCondition struct {
	// Type of  condition.
	Type ServingSiteConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=ServingSiteConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// ServingSite is a namespace used for serving
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status",description=""
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",description="owner"
// +kubebuilder:printcolumn:name="FDQN",type="string",JSONPath=".spec.fdqn",description=""
// +kubebuilder:printcolumn:name="Ingress",type="string",JSONPath=".spec.ingressName",description=""
// +kubebuilder:printcolumn:name="Predictors",type="number",JSONPath=".status.activePredictors",description=""
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp",description=""
// +kubebuilder:resource:path=servingsites,singular=servingsite,categories={infra,modeld}
type ServingSite struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              ServingSiteSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            ServingSiteStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// ServingSiteList is a list of ServingSite
type ServingSiteList struct {
	metav1.TypeMeta `json:",inline"`
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`

	Items []ServingSite `json:"items" protobuf:"bytes,2,rep,name=items"`
}

type ServingSiteSpec struct {
	// Description is user provided description
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	Description *string `json:"description,omitempty" protobuf:"bytes,1,opt,name=description"`
	// Reference to the tenant owning this serving site.
	// Default to default tenant.
	// +kubebuilder:validation:Optional
	TenantRef *v1.ObjectReference `json:"tenantRef,omitempty" protobuf:"bytes,2,opt,name=tenantRef"`
	// QuotaSpec is  resource quota for the serving site
	// By default, not quota is applied
	// +kubebuilder:validation:Optional
	QuotaSpec *v1.ResourceQuotaSpec `json:"quotaSpec,omitempty" protobuf:"bytes,3,opt,name=quotaSpec"`
	// LimitRangeSpec limit range for the serving site
	// By default, no limit range apply
	// +kubebuilder:validation:Optional
	LimitRangeSpec *v1.LimitRangeSpec `json:"limitRangeSpec,omitempty" protobuf:"bytes,4,opt,name=limitRangeSpec"`
	// IngressName denote the name of the ingress object where the serving site
	// places the external points used to access the predictors
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	IngressName *string `json:"ingressName,omitempty" protobuf:"bytes,5,opt,name=ingressName"`
	// The FDQN for this site. This will register with ingress.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	FDQN *string `json:"fdqn,omitempty" protobuf:"bytes,6,opt,name=fdqn"`
	// ClusterName is  the virtual cluster name in case that the lab is not on the same cluster
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	ClusterName *string `json:"clusterName,omitempty" protobuf:"bytes,7,opt,name=clusterName"`
	// Owner is the owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,8,opt,name=owner"`
}

type ServingSiteStatus struct {
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,1,opt,name=observedGeneration"`
	// Last time the object was updated
	//+kubebuilder:validation:Optional
	LastUpdated *metav1.Time `json:"lastUpdated,omitempty" protobuf:"bytes,2,opt,name=lastUpdated"`
	// active predictors
	ActivePredictors int32 `json:"activePredictors,omitempty" protobuf:"varint,3,rep,name=activePredictors"`
	// inactive predictors
	InactivePredictors int32 `json:"inactivePredictors,omitempty" protobuf:"varint,4,rep,name=inactivePredictors"`
	// total predictors service failed
	TotalPredictorServiceFailed int32 `json:"totalPredictorServiceFailed,omitempty" protobuf:"varint,5,rep,name=totalPredictorServiceFailed"`
	// total predictors with data drift failed
	TotalPredictorDataDriftFailed int32 `json:"totalPredictorDataDriftFailed,omitempty" protobuf:"varint,6,rep,name=totalPredictorDataDriftFailed"`
	// total predictors accuracy failed
	TotalPredictorAccuracyFailed int32 `json:"totalPredictorAccuracyFailed,omitempty" protobuf:"varint,7,rep,name=totalPredictorAccuracyFailed"`
	// Last 7 days predictions
	LastDailyPredictions []int32 `json:"lastDailyPredictions,omitempty" protobuf:"bytes,8,rep,name=lastDailyPredictions"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []ServingSiteCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,9,rep,name=conditions"`
}
