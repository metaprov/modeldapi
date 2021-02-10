/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by informer-gen. DO NOT EDIT.

package v1alpha1

import (
	internalinterfaces "github.com/metaprov/modeld-api/pkg/apis/gen/data/informers/externalversions/internalinterfaces"
)

// Interface provides access to all the informers in this group version.
type Interface interface {
	// DataPipelines returns a DataPipelineInformer.
	DataPipelines() DataPipelineInformer
	// DataPipelineRuns returns a DataPipelineRunInformer.
	DataPipelineRuns() DataPipelineRunInformer
	// DataProducts returns a DataProductInformer.
	DataProducts() DataProductInformer
	// DataProductVersions returns a DataProductVersionInformer.
	DataProductVersions() DataProductVersionInformer
	// DataSources returns a DataSourceInformer.
	DataSources() DataSourceInformer
	// Datasets returns a DatasetInformer.
	Datasets() DatasetInformer
	// Entities returns a EntityInformer.
	Entities() EntityInformer
	// Features returns a FeatureInformer.
	Features() FeatureInformer
	// FeaturePipelines returns a FeaturePipelineInformer.
	FeaturePipelines() FeaturePipelineInformer
	// FeaturePipelineRuns returns a FeaturePipelineRunInformer.
	FeaturePipelineRuns() FeaturePipelineRunInformer
	// Featuresets returns a FeaturesetInformer.
	Featuresets() FeaturesetInformer
	// LabelingPipelines returns a LabelingPipelineInformer.
	LabelingPipelines() LabelingPipelineInformer
	// LabelingPipelineRuns returns a LabelingPipelineRunInformer.
	LabelingPipelineRuns() LabelingPipelineRunInformer
	// Recipes returns a RecipeInformer.
	Recipes() RecipeInformer
	// RecipeRuns returns a RecipeRunInformer.
	RecipeRuns() RecipeRunInformer
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

// DataPipelines returns a DataPipelineInformer.
func (v *version) DataPipelines() DataPipelineInformer {
	return &dataPipelineInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// DataPipelineRuns returns a DataPipelineRunInformer.
func (v *version) DataPipelineRuns() DataPipelineRunInformer {
	return &dataPipelineRunInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// DataProducts returns a DataProductInformer.
func (v *version) DataProducts() DataProductInformer {
	return &dataProductInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// DataProductVersions returns a DataProductVersionInformer.
func (v *version) DataProductVersions() DataProductVersionInformer {
	return &dataProductVersionInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// DataSources returns a DataSourceInformer.
func (v *version) DataSources() DataSourceInformer {
	return &dataSourceInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// Datasets returns a DatasetInformer.
func (v *version) Datasets() DatasetInformer {
	return &datasetInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// Entities returns a EntityInformer.
func (v *version) Entities() EntityInformer {
	return &entityInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// Features returns a FeatureInformer.
func (v *version) Features() FeatureInformer {
	return &featureInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// FeaturePipelines returns a FeaturePipelineInformer.
func (v *version) FeaturePipelines() FeaturePipelineInformer {
	return &featurePipelineInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// FeaturePipelineRuns returns a FeaturePipelineRunInformer.
func (v *version) FeaturePipelineRuns() FeaturePipelineRunInformer {
	return &featurePipelineRunInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// Featuresets returns a FeaturesetInformer.
func (v *version) Featuresets() FeaturesetInformer {
	return &featuresetInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// LabelingPipelines returns a LabelingPipelineInformer.
func (v *version) LabelingPipelines() LabelingPipelineInformer {
	return &labelingPipelineInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// LabelingPipelineRuns returns a LabelingPipelineRunInformer.
func (v *version) LabelingPipelineRuns() LabelingPipelineRunInformer {
	return &labelingPipelineRunInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// Recipes returns a RecipeInformer.
func (v *version) Recipes() RecipeInformer {
	return &recipeInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}

// RecipeRuns returns a RecipeRunInformer.
func (v *version) RecipeRuns() RecipeRunInformer {
	return &recipeRunInformer{factory: v.factory, namespace: v.namespace, tweakListOptions: v.tweakListOptions}
}
