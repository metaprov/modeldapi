/*
 * Copyright (c) 2019.
 *
 * Metaprov.com
 */

package v1alpha1

import (
	"fmt"

	"github.com/metaprov/modeldapi/pkg/apis/data"
	"github.com/metaprov/modeldapi/pkg/util"
	"gopkg.in/yaml.v2"
	v1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	ctrl "sigs.k8s.io/controller-runtime"
)

func (r *RecipeRun) SetupWebhookWithManager(mgr ctrl.Manager) error {
	return ctrl.NewWebhookManagedBy(mgr).
		For(r).
		Complete()
}

func (r *RecipeRun) ReportName() string {
	return "report-" + r.Name
}

func (r *RecipeRun) HasFinalizer() bool { return util.HasFin(&r.ObjectMeta, data.GroupName) }
func (r *RecipeRun) AddFinalizer()      { util.AddFin(&r.ObjectMeta, data.GroupName) }
func (r *RecipeRun) RemoveFinalizer()   { util.RemoveFin(&r.ObjectMeta, data.GroupName) }

//==============================================================================
// Validate
//==============================================================================

// Merge or update condition
func (r *RecipeRun) CreateOrUpdateCond(cond RecipeCondition) {
	i := r.GetCondIdx(cond.Type)
	now := metav1.Now()
	if i == -1 { // not found
		cond.LastTransitionTime = &now
		r.Status.Conditions = append(r.Status.Conditions, cond)
		return
	}
	// else we already have the condition, update it
	current := r.Status.Conditions[i]
	current.Message = cond.Message
	current.Reason = cond.Reason
	current.LastTransitionTime = &now
	if current.Status != cond.Status {
		current.Status = cond.Status
	}
	r.Status.Conditions[i] = current
}

func (r *RecipeRun) GetCondIdx(t RecipeConditionType) int {
	for i, v := range r.Status.Conditions {
		if v.Type == t {
			return i
		}
	}
	return -1
}

func (r *RecipeRun) GetCond(t RecipeConditionType) RecipeCondition {
	for _, v := range r.Status.Conditions {
		if v.Type == t {
			return v
		}
	}
	// if we did not find the condition, we return an unknown object
	return RecipeCondition{
		Type:    t,
		Status:  v1.ConditionUnknown,
		Reason:  "",
		Message: "",
	}

}

func (r *RecipeRun) IsReady() bool {
	return r.GetCond(RecipeReady).Status == v1.ConditionTrue
}

func (r *RecipeRun) StatusString() string {
	return string(r.Status.Phase)
}

func (r *RecipeRun) RootUri() string {
	return fmt.Sprintf("dataproducts/%s/versions/%s/reciperuns/%s", r.Namespace, *r.Spec.VersionName, r.Name)
}

func (r *RecipeRun) ManifestUri() string {
	return fmt.Sprintf("%s/%s-r.yaml", r.RootUri(), r.Name)
}

func (r *RecipeRun) ToYamlFile() ([]byte, error) {
	return yaml.Marshal(r)
}

func (r *RecipeRun) IsInCond(ct RecipeConditionType) bool {
	current := r.GetCond(ct)
	return current.Status == v1.ConditionTrue
}

func (r *RecipeRun) PrintConditions() {
	for _, v := range r.Status.Conditions {
		fmt.Println(v)
	}
}

func (r *RecipeRun) MarkCompleted() {
	r.Status.Phase = RecipeRunPhaseSucceed
	r.CreateOrUpdateCond(RecipeCondition{
		Type:   RecipeReady,
		Status: v1.ConditionTrue,
	})
}

func (r *RecipeRun) MarkSaved() {
	r.CreateOrUpdateCond(RecipeCondition{
		Type:   RecipeSaved,
		Status: v1.ConditionTrue,
	})
}

func (r *RecipeRun) MarkFailed(error string) {
	r.Status.Phase = RecipeRunPhaseFailed
	r.CreateOrUpdateCond(RecipeCondition{
		Type:    RecipeReady,
		Status:  v1.ConditionFalse,
		Reason:  error,
		Message: error,
	})
}

func (r *RecipeRun) MarkRunning() {
	now := metav1.Now()
	r.Status.StartTime = &now
	r.Status.Phase = RecipeRunPhaseRunning
	r.CreateOrUpdateCond(RecipeCondition{
		Type:    RecipeReady,
		Status:  v1.ConditionFalse,
		Message: string(RecipeRunPhaseRunning),
	})
}

func (r *RecipeRun) Deleted() bool {
	return !r.ObjectMeta.DeletionTimestamp.IsZero()
}

func (in *RecipeRun) IsRunning() bool {
	cond := in.GetCond(RecipeRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(RecipeRunPhaseRunning)
}

func (in *RecipeRun) IsFailed() bool {
	cond := in.GetCond(RecipeRunCompleted)
	return cond.Status == v1.ConditionFalse && cond.Reason == string(RecipeRunPhaseFailed)
}

func (in *RecipeRun) IsSaved() bool {
	cond := in.GetCond(RecipeRunSaved)
	return cond.Status == v1.ConditionTrue
}
