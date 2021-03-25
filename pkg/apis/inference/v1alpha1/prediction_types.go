package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	data "github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// PredictionConditionType is the condition type of the prediction pipeline
type PredictionConditionType string

/// PredictionTemplate Condition
const (
	PredictionCompleted PredictionConditionType = "Completed"
	PredictionArchived  PredictionConditionType = "Archived"
)

// PredictionCondition describes the state of PredictionTemplate
type PredictionCondition struct {
	// Type of  condition.
	Type PredictionConditionType `json:"type" protobuf:"bytes,1,opt,name=type,casttype=PredictionConditionType"`
	// Status of the condition, one of True, False, Unknown.
	Status v1.ConditionStatus `json:"status" protobuf:"bytes,2,opt,name=status,casttype=k8s.io/api/core/v1.ConditionStatus"`
	// Last time the condition transitioned from one status to another.
	LastTransitionTime *metav1.Time `json:"lastTransitionTime,omitempty" protobuf:"bytes,3,opt,name=lastTransitionTime"`
	// The reason for the condition's last transition.
	Reason string `json:"reason,omitempty" protobuf:"bytes,4,opt,name=reason"`
	// A human readable message indicating details about the transition.
	Message string `json:"message,omitempty" protobuf:"bytes,5,opt,name=message"`
}

// PredictionTemplate represents a prediction object
// +kubebuilder:printcolumn:name="Ready",type="string",JSONPath=".status.conditions[?(@.type==\"Ready\")].status"
// +kubebuilder:printcolumn:name="Predictor",type="string",JSONPath=".spec.predictorName"
// +kubebuilder:printcolumn:name="Bucket",type="string",JSONPath=".spec.datasetName"
// +kubebuilder:printcolumn:name="File",type="string",JSONPath=".spec.datasetName"
// +kubebuilder:printcolumn:name="Labeled",type="string",JSONPath=".spec.datasetName"
// +kubebuilder:printcolumn:name="Score",type="string",JSONPath=".status.score"
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=predictions,singular=prediction,categories={inference,modeld}
type Prediction struct {
	metav1.TypeMeta   `json:",inline"`
	metav1.ObjectMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Spec              PredictionSpec   `json:"spec" protobuf:"bytes,2,opt,name=spec"`
	Status            PredictionStatus `json:"status,omitempty" protobuf:"bytes,3,opt,name=status"`
}

// +kubebuilder:object:root=true
// PredictionList is a list of Prediction
type PredictionList struct {
	metav1.TypeMeta `json:",inline" `
	metav1.ListMeta `json:"metadata,omitempty" protobuf:"bytes,1,opt,name=metadata"`
	Items           []Prediction `json:"items" protobuf:"bytes,2,rep,name=items"`
}

// PredictionSpec represent the desired state of Prediction
type PredictionSpec struct {
	// PredictorName refer to the predictor which would predict the dataset of this prediction.
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:MinLength=1
	PredictorName *string `json:"predictorName,omitempty" protobuf:"bytes,1,opt,name=predictorName"`
	// Labeled , true if this is labeled prediction request.
	// +kubebuilder:default:=false
	// Used usally for unit testing
	Labeled *bool `json:"labeled,omitempty" protobuf:"bytes,2,opt,name=labeled"`
	// The objective metric used to score
	Objective *catalog.Metric `json:"objective,omitempty" protobuf:"bytes,3,opt,name=objective"`
	// DatasetName is where we are using a dataset name. This can be dataset name
	// +kubebuilder:validation:Optional
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,4,opt,name=datasetName"`
	// Input is the location of the input file if not using a dataset
	Input *data.DataLocation `json:"input,omitempty" protobuf:"bytes,5,opt,name=input"`
	// Output is the location of the output file.
	// +kubebuilder:validation:Optional
	Output *data.DataLocation `json:"output,omitempty" protobuf:"bytes,6,opt,name=output"`
	// The owner account name
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,7,opt,name=owner"`
	// A reference to the workload class that is used for training
	// +kubebuilder:default:="default-prediction-workload-class"
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,8,opt,name=workloadClassName"`
	// Schedule for running the pipeline
	// +kubebuilder:validation:Optional
	Schedule catalog.RunSchedule `json:"schedule,omitempty" protobuf:"bytes,9,opt,name=schedule"`
}

// PredictionStatus is the observed state of a PredictionTemplate
type PredictionStatus struct {
	//+optional
	Conditions []PredictionCondition `json:"conditions,omitempty" protobuf:"bytes,2,rep,name=conditions"`
}