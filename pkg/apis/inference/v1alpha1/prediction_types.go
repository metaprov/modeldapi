package v1alpha1

import (
	catalog "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	v1 "k8s.io/api/core/v1"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
)

// ModelPhase is the current phase of a model
type PredictionPhase string

const (
	PredictionPhasePending   PredictionPhase = "Pending"
	PredictionPhaseRunning   PredictionPhase = "Running"
	PredictionPhaseFailed    PredictionPhase = "Failed"
	PredictionPhaseCompleted PredictionPhase = "Completed"
)

// PredictionConditionType is the condition type of the prediction pipeline
type PredictionConditionType string

/// PredictionTemplate Condition
const (
	PredictionCompleted PredictionConditionType = "Completed"
	PredictionSaved     PredictionConditionType = "Saved"
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
// +kubebuilder:printcolumn:name="Owner",type="string",JSONPath=".spec.owner",priority=1
// +kubebuilder:printcolumn:name="Predictor",type="string",JSONPath=".spec.predictorName"
// +kubebuilder:printcolumn:name="Dataset",type="string",JSONPath=".spec.datasetName"
// +kubebuilder:printcolumn:name="Labeled",type="string",JSONPath=".spec.labeled"
// +kubebuilder:printcolumn:name="Bucket",type="string",JSONPath=".spec.output.bucketName",priority=1
// +kubebuilder:printcolumn:name="Key",type="string",JSONPath=".spec.output.path",priority=1
// +kubebuilder:printcolumn:name="Score",type="string",JSONPath=".status.score"
// +kubebuilder:printcolumn:name="Status",type="string",JSONPath=".status.phase"
// +kubebuilder:printcolumn:name="Rows",type="string",JSONPath=".status.rows"
// +kubebuilder:printcolumn:name="Age",type="date",JSONPath=".metadata.creationTimestamp"
// +kubebuilder:object:root=true
// +kubebuilder:subresource:status
// +kubebuilder:resource:path=predictions,shortName=pred,singular=prediction,categories={inference,modeld}
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
	// VersionName is the data product version of the data pipeline
	// +kubebuilder:default:=""
	// +kubebuilder:validation:Optional
	VersionName *string `json:"versionName,omitempty" protobuf:"bytes,1,opt,name=versionName"`
	// PredictorName refer to the predictor which would predict the dataset of this prediction.
	// +kubebuilder:default:=""
	// +kubebuilder:validation:MaxLength=63
	// +kubebuilder:validation:Required
	PredictorName *string `json:"predictorName,omitempty" protobuf:"bytes,2,opt,name=predictorName"`
	// Labeled , true if this is labeled prediction request.
	// +kubebuilder:default:=false
	// Used usally for unit testing
	Labeled *bool `json:"labeled,omitempty" protobuf:"varint,3,opt,name=labeled"`
	// +kubebuilder:validation:Optional
	// +kubebuilder:default:=""
	DatasetName *string `json:"datasetName,omitempty" protobuf:"bytes,4,opt,name=datasetName"`
	// Input is the location of the input file if not using a dataset
	Input *PredictionChannel `json:"input,omitempty" protobuf:"bytes,5,opt,name=input"`
	// Output is the location of the output file.
	// +kubebuilder:validation:Optional
	Output *PredictionChannel `json:"output,omitempty" protobuf:"bytes,6,opt,name=output"`
	// Tests is the list of metrics that we need to measure if we are running a labeled prediction
	Tests []catalog.Metric `json:"tests,omitempty" protobuf:"bytes,7,rep,name=tests"`
	// The owner account name
	// +kubebuilder:default:="no-one"
	// +kubebuilder:validation:Optional
	Owner *string `json:"owner,omitempty" protobuf:"bytes,8,opt,name=owner"`
	// A reference to the workload class that is used for training
	// +kubebuilder:default:="default-prediction-workload-class"
	// +kubebuilder:validation:Optional
	WorkloadClassName *string `json:"workloadClassName,omitempty" protobuf:"bytes,9,opt,name=workloadClassName"`
	// ActiveDeadlineSeconds is the deadline of a job for this dataset.
	// +kubebuilder:default:=600
	// +kubebuilder:validation:Minimum=0
	// +kubebuilder:validation:Optional
	ActiveDeadlineSeconds *int64 `json:"activeDeadlineSeconds,omitempty" protobuf:"varint,10,opt,name=activeDeadlineSeconds"`
	// Include the features in the results
	// +kubebuilder:validation:Optional
	IncludeFeatures *bool `json:"includeFeatures,omitempty" protobuf:"varint,11,opt,name=includeFeatures"`
	// Generate XAI
	// +kubebuilder:default:=false
	// +kubebuilder:validation:Optional
	XAI *bool `json:"xai,omitempty" protobuf:"varint,12,opt,name=xai"`
	// Update strategy
	// +kubebuilder:validation:Optional
	UpdateStrategy *catalog.UpdateStrategy `json:"updateStrategy,omitempty" protobuf:"bytes,13,opt,name=updateStrategy"`
	// Create the data source table on the target, if not exist.
	// +kubebuilder:validation:Optional
	CreateTableIfNotExist *bool `json:"createTableIfNotExist,omitempty" protobuf:"varint,14,opt,name=createTableIfNotExist"`
	// The priority of this prediction. The defualt is medium.
	// +kubebuilder:default:=medium
	// +kubebuilder:validation:Optional
	Priority *catalog.PriorityLevel `json:"priority,omitempty" protobuf:"bytes,15,opt,name=priority"`
}

// PredictionStatus is the observed state of a PredictionTemplate
type PredictionStatus struct {
	// StartTime is the start time of the prediction.
	StartTime *metav1.Time `json:"startTime,omitempty" protobuf:"bytes,1,opt,name=startTime"`
	// EndTime is the end time of the prediction.
	EndTime *metav1.Time `json:"endTime,omitempty" protobuf:"bytes,2,opt,name=endTime"`
	// Phase is the current phase of the prediction
	Phase PredictionPhase `json:"phase,omitempty" protobuf:"bytes,3,rep,name=phase"`
	// Results is the results of running the prediction with a labeled dataset
	// +kubebuilder:validation:Optional
	Results []catalog.Measurement `json:"results,omitempty" protobuf:"bytes,4,rep,name=results"`
	// ObservedGeneration is the Last generation that was acted on
	//+kubebuilder:validation:Optional
	ObservedGeneration int64 `json:"observedGeneration,omitempty" protobuf:"varint,5,opt,name=observedGeneration"`
	// The number of rows in the predictions
	//+kubebuilder:validation:Optional
	Rows int32 `json:"rows,omitempty" protobuf:"varint,6,opt,name=rows"`
	// +patchMergeKey=type
	// +patchStrategy=merge
	// +kubebuilder:validation:Optional
	Conditions []PredictionCondition `json:"conditions,omitempty" patchStrategy:"merge" patchMergeKey:"type" protobuf:"bytes,7,rep,name=conditions"`
}

// The specific of a prediction channel
type PredictionChannel struct {
	// Table is a channel that uses RDBMS for input and output
	// +kubebuilder:validation:Optional
	Table *TableChannelSpec `json:"table,omitempty" protobuf:"bytes,1,opt,name=table"`
	// Bot is a channel that uses chats for input and output
	// +kubebuilder:validation:Optional
	Bot *BotChannelSpec `json:"bot,omitempty" protobuf:"bytes,2,opt,name=bot"`
	// Bucket is a channel where predictions are placed in a bucket folder and results are placed in another folder
	// +kubebuilder:validation:Optional
	FlatFile *FlatFileChannelSpec `json:"flatfile,omitempty" protobuf:"bytes,3,opt,name=flatfile"`
	// Define a streaming channel for the predictor
	// +kubebuilder:validation:Optional
	Streaming *StreamingChannelSpec `json:"streaming,omitempty" protobuf:"bytes,4,opt,name=streaming"`
}

type StreamingChannelSpec struct {
	// StorageConnection name to the streaming provider
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,1,opt,name=connectionName"`
	// the streaming topic (input or output)
	// +kubebuilder:default:=""
	Topic *string `json:"inputKey,omitempty" protobuf:"bytes,2,opt,name=inputKey"`
}

// A prediction table describes a dataset and a table that will be used to enter unseen data, and get prediction
type TableChannelSpec struct {
	// connection to the database provider
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,1,opt,name=connectionName"`
	// Options, this is the datasource containing the table schema
	// +kubebuilder:default:=""
	DataSourceName *string `json:"datasourceName,omitempty" protobuf:"bytes,2,opt,name=datasourceName"`
	// The table name. Optional
	// Default to the predictor name
	// +kubebuilder:default:=""
	TableName *string `json:"tableName,omitempty" protobuf:"bytes,3,opt,name=tableName"`
}

type BotChannelSpec struct {
	// the connection to the messaging provider
	// Required,
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,1,opt,name=connectionName"`
	// The name of the notifier that will be used by the prediction bot.
	// Required
	NotifierName string `json:"notifierName,omitempty" protobuf:"bytes,2,opt,name=notifierName"`
}

// Look for prediction in a flat file key.
// Request for prediction will be placed in the key.
// Result will be placed in the output bucket
type FlatFileChannelSpec struct {
	// the connection to the cloud provider
	// Required,
	ConnectionName string `json:"connectionName,omitempty" protobuf:"bytes,1,opt,name=connectionName"`
	// Required,
	BucketName string `json:"bucketName,omitempty" protobuf:"bytes,2,opt,name=bucketName"`
	// The location of the input or the output
	// Required,
	Key string `json:"key,omitempty" protobuf:"bytes,3,opt,name=key"`
}
