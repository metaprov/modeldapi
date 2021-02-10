/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by informer-gen. DO NOT EDIT.

package v1alpha1

import (
	internalinterfaces "github.com/metaprov/modeld-api/pkg/apis/gen/catalog/informers/externalversions/internalinterfaces"
)

// Interface provides access to all the informers in this group version.
type Interface interface {
	// Algorithms returns a AlgorithmInformer.
	Algorithms() AlgorithmInformer
	// Clouds returns a CloudInformer.
	Clouds() CloudInformer
	// MLFrameworks returns a MLFrameworkInformer.
	MLFrameworks() MLFrameworkInformer
	// PretrainedModels returns a PretrainedModelInformer.
	PretrainedModels() PretrainedModelInformer
	// UserRoleClasses returns a UserRoleClassInformer.
	UserRoleClasses() UserRoleClassInformer
	// WorkloadClasses returns a WorkloadClassInformer.
	WorkloadClasses() WorkloadClassInformer
}

type version struct {
	factory          internalinterfaces.SharedInformerFactory
	namespace        string
	tweakListOptions internalinterfaces.TweakListOptionsFunc
}

// New returns a new Interface.
func New(f internalinterfaces.SharedInformerFactory, namespace string, tweakListOptions internalinterfaces.TweakListOptionsFunc) Interface {
	return &version{factory: f, namespace: namespace, tweakListOptions: tweakListOptions}
}

// Algorithms returns a AlgorithmInformer.
func (v *version) Algorithms() AlgorithmInformer {
	return &algorithmInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// Clouds returns a CloudInformer.
func (v *version) Clouds() CloudInformer {
	return &cloudInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// MLFrameworks returns a MLFrameworkInformer.
func (v *version) MLFrameworks() MLFrameworkInformer {
	return &mLFrameworkInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// PretrainedModels returns a PretrainedModelInformer.
func (v *version) PretrainedModels() PretrainedModelInformer {
	return &pretrainedModelInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// UserRoleClasses returns a UserRoleClassInformer.
func (v *version) UserRoleClasses() UserRoleClassInformer {
	return &userRoleClassInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// WorkloadClasses returns a WorkloadClassInformer.
func (v *version) WorkloadClasses() WorkloadClassInformer {
	return &workloadClassInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}
