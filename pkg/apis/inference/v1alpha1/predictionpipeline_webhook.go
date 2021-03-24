package v1alpha1

import (
	data "github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"
	apierrors "k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/runtime/schema"
	"k8s.io/apimachinery/pkg/util/validation/field"
	"sigs.k8s.io/controller-runtime/pkg/webhook"
)

// defaulting
var _ webhook.Defaulter = &PredictionPipeline{}

func (pre *PredictionPipeline) Default() {
	// if no input bucket defined,
	if pre.Spec.Output == nil {
		pre.Spec.Output = &data.DataLocation{}
	}
	if pre.Spec.Output.BucketName == "" {
		pre.Spec.Output.BucketName = pre.Spec.Input.BucketName
	}
	if pre.Spec.Output.Path == "" { // place the output at the same location as the input
		pre.Spec.Output.Path = pre.Spec.Input.Path + ".out.json"
	}
}

// validation
var _ webhook.Validator = &PredictionPipeline{}

// ValidateCreate implements webhook.Validator so a webhook will be registered for the type
func (prediction *PredictionPipeline) ValidateCreate() error {
	return prediction.validate()
}

// ValidateUpdate implements webhook.Validator so a webhook will be registered for the type
func (prediction *PredictionPipeline) ValidateUpdate(old runtime.Object) error {
	return prediction.validate()
}

func (prediction *PredictionPipeline) validate() error {
	var allErrs field.ErrorList
	if len(allErrs) == 0 {
		return nil
	}

	return apierrors.NewInvalid(
		schema.GroupKind{Group: "inference.modeld.io", Kind: "PredictionPipeline"},
		prediction.Name, allErrs)
}

func (prediction *PredictionPipeline) ValidateDelete() error {
	return nil
}

// defaulting
var _ webhook.Defaulter = &PredictionPipelineRun{}

func (run *PredictionPipelineRun) Default() {
	// if no input bucket defined,
	if run.Spec.Output == nil {
		run.Spec.Output = &data.DataLocation{}
	}
	if run.Spec.Output.BucketName == "" {
		run.Spec.Output.BucketName = run.Spec.Input.BucketName
	}
	if run.Spec.Output.Path == "" { // place the output at the same location as the input
		run.Spec.Output.Path = run.Spec.Input.Path + ".out.json"
	}
}
