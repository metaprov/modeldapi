/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by informer-gen. DO NOT EDIT.

package externalversions

import (
	"fmt"

	v1alpha1 "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	datav1alpha1 "github.com/metaprov/modeldapi/pkg/apis/data/v1alpha1"
	inferencev1alpha1 "github.com/metaprov/modeldapi/pkg/apis/inference/v1alpha1"
	infrav1alpha1 "github.com/metaprov/modeldapi/pkg/apis/infra/v1alpha1"
	teamv1alpha1 "github.com/metaprov/modeldapi/pkg/apis/team/v1alpha1"
	trainingv1alpha1 "github.com/metaprov/modeldapi/pkg/apis/training/v1alpha1"
	schema "k8s.io/apimachinery/pkg/runtime/schema"
	cache "k8s.io/client-go/tools/cache"
)

// GenericInformer is type of SharedIndexInformer which will locate and delegate to other
// sharedInformers based on type
type GenericInformer interface {
	Informer() cache.SharedIndexInformer
	Lister() cache.GenericLister
}

type genericInformer struct {
	informer cache.SharedIndexInformer
	resource schema.GroupResource
}

// Informer returns the SharedIndexInformer.
func (f *genericInformer) Informer() cache.SharedIndexInformer {
	return f.informer
}

// Lister returns the GenericLister.
func (f *genericInformer) Lister() cache.GenericLister {
	return cache.NewGenericLister(f.Informer().GetIndexer(), f.resource)
}

// ForResource gives generic access to a shared informer of the matching type
// TODO extend this to unknown resources with a client pool
func (f *sharedInformerFactory) ForResource(resource schema.GroupVersionResource) (GenericInformer, error) {
	switch resource {
	// Group=catalog.modeld.io, Version=v1alpha1
	case v1alpha1.SchemeGroupVersion.WithResource("algorithms"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Catalog().V1alpha1().Algorithms().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("clouds"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Catalog().V1alpha1().Clouds().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("mlframeworks"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Catalog().V1alpha1().MLFrameworks().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("pretrainedmodels"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Catalog().V1alpha1().PretrainedModels().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("userroleclasses"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Catalog().V1alpha1().UserRoleClasses().Informer()}, nil
	case v1alpha1.SchemeGroupVersion.WithResource("workloadclasses"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Catalog().V1alpha1().WorkloadClasses().Informer()}, nil

		// Group=data.modeld.io, Version=v1alpha1
	case datav1alpha1.SchemeGroupVersion.WithResource("datapipelines"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Data().V1alpha1().DataPipelines().Informer()}, nil
	case datav1alpha1.SchemeGroupVersion.WithResource("datapipelineruns"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Data().V1alpha1().DataPipelineRuns().Informer()}, nil
	case datav1alpha1.SchemeGroupVersion.WithResource("dataproducts"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Data().V1alpha1().DataProducts().Informer()}, nil
	case datav1alpha1.SchemeGroupVersion.WithResource("dataproductversions"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Data().V1alpha1().DataProductVersions().Informer()}, nil
	case datav1alpha1.SchemeGroupVersion.WithResource("datasources"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Data().V1alpha1().DataSources().Informer()}, nil
	case datav1alpha1.SchemeGroupVersion.WithResource("datasets"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Data().V1alpha1().Datasets().Informer()}, nil
	case datav1alpha1.SchemeGroupVersion.WithResource("entities"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Data().V1alpha1().Entities().Informer()}, nil
	case datav1alpha1.SchemeGroupVersion.WithResource("features"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Data().V1alpha1().Features().Informer()}, nil
	case datav1alpha1.SchemeGroupVersion.WithResource("featurepipelines"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Data().V1alpha1().FeaturePipelines().Informer()}, nil
	case datav1alpha1.SchemeGroupVersion.WithResource("featurepipelineruns"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Data().V1alpha1().FeaturePipelineRuns().Informer()}, nil
	case datav1alpha1.SchemeGroupVersion.WithResource("featuresets"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Data().V1alpha1().Featuresets().Informer()}, nil
	case datav1alpha1.SchemeGroupVersion.WithResource("labelingpipelines"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Data().V1alpha1().LabelingPipelines().Informer()}, nil
	case datav1alpha1.SchemeGroupVersion.WithResource("labelingpipelineruns"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Data().V1alpha1().LabelingPipelineRuns().Informer()}, nil
	case datav1alpha1.SchemeGroupVersion.WithResource("recipes"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Data().V1alpha1().Recipes().Informer()}, nil
	case datav1alpha1.SchemeGroupVersion.WithResource("reciperuns"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Data().V1alpha1().RecipeRuns().Informer()}, nil

		// Group=inference.modeld.io, Version=v1alpha1
	case inferencev1alpha1.SchemeGroupVersion.WithResource("curtains"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Inference().V1alpha1().Curtains().Informer()}, nil
	case inferencev1alpha1.SchemeGroupVersion.WithResource("predictionpipelines"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Inference().V1alpha1().PredictionPipelines().Informer()}, nil
	case inferencev1alpha1.SchemeGroupVersion.WithResource("predictionpipelineruns"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Inference().V1alpha1().PredictionPipelineRuns().Informer()}, nil
	case inferencev1alpha1.SchemeGroupVersion.WithResource("predictors"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Inference().V1alpha1().Predictors().Informer()}, nil
	case inferencev1alpha1.SchemeGroupVersion.WithResource("predictortemplates"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Inference().V1alpha1().PredictorTemplates().Informer()}, nil

		// Group=infra.modeld.io, Version=v1alpha1
	case infrav1alpha1.SchemeGroupVersion.WithResource("accounts"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Infra().V1alpha1().Accounts().Informer()}, nil
	case infrav1alpha1.SchemeGroupVersion.WithResource("connections"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Infra().V1alpha1().Connections().Informer()}, nil
	case infrav1alpha1.SchemeGroupVersion.WithResource("labs"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Infra().V1alpha1().Labs().Informer()}, nil
	case infrav1alpha1.SchemeGroupVersion.WithResource("licenses"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Infra().V1alpha1().Licenses().Informer()}, nil
	case infrav1alpha1.SchemeGroupVersion.WithResource("machineimages"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Infra().V1alpha1().MachineImages().Informer()}, nil
	case infrav1alpha1.SchemeGroupVersion.WithResource("notifiers"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Infra().V1alpha1().Notifiers().Informer()}, nil
	case infrav1alpha1.SchemeGroupVersion.WithResource("servingsites"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Infra().V1alpha1().ServingSites().Informer()}, nil
	case infrav1alpha1.SchemeGroupVersion.WithResource("tenants"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Infra().V1alpha1().Tenants().Informer()}, nil
	case infrav1alpha1.SchemeGroupVersion.WithResource("virtualbuckets"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Infra().V1alpha1().VirtualBuckets().Informer()}, nil
	case infrav1alpha1.SchemeGroupVersion.WithResource("virtualclusters"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Infra().V1alpha1().VirtualClusters().Informer()}, nil
	case infrav1alpha1.SchemeGroupVersion.WithResource("virtualvolumes"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Infra().V1alpha1().VirtualVolumes().Informer()}, nil

		// Group=team.modeld.io, Version=v1alpha1
	case teamv1alpha1.SchemeGroupVersion.WithResource("conversations"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Team().V1alpha1().Conversations().Informer()}, nil
	case teamv1alpha1.SchemeGroupVersion.WithResource("postmortems"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Team().V1alpha1().PostMortems().Informer()}, nil
	case teamv1alpha1.SchemeGroupVersion.WithResource("runbooks"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Team().V1alpha1().RunBooks().Informer()}, nil

		// Group=training.modeld.io, Version=v1alpha1
	case trainingv1alpha1.SchemeGroupVersion.WithResource("models"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Training().V1alpha1().Models().Informer()}, nil
	case trainingv1alpha1.SchemeGroupVersion.WithResource("modelautobuilders"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Training().V1alpha1().ModelAutobuilders().Informer()}, nil
	case trainingv1alpha1.SchemeGroupVersion.WithResource("modelpipelines"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Training().V1alpha1().ModelPipelines().Informer()}, nil
	case trainingv1alpha1.SchemeGroupVersion.WithResource("modelpipelineruns"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Training().V1alpha1().ModelPipelineRuns().Informer()}, nil
	case trainingv1alpha1.SchemeGroupVersion.WithResource("notebooks"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Training().V1alpha1().Notebooks().Informer()}, nil
	case trainingv1alpha1.SchemeGroupVersion.WithResource("notebookruns"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Training().V1alpha1().NotebookRuns().Informer()}, nil
	case trainingv1alpha1.SchemeGroupVersion.WithResource("reports"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Training().V1alpha1().Reports().Informer()}, nil
	case trainingv1alpha1.SchemeGroupVersion.WithResource("studies"):
		return &genericInformer{resource: resource.GroupResource(), informer: f.Training().V1alpha1().Studies().Informer()}, nil

	}

	return nil, fmt.Errorf("no informer found for %v", resource)
}