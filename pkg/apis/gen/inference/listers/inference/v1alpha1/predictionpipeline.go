/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by lister-gen. DO NOT EDIT.

package v1alpha1

import (
	v1alpha1 "github.com/metaprov/modeld-api/pkg/apis/inference/v1alpha1"
	"k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/client-go/tools/cache"
)

// PredictionPipelineLister helps list PredictionPipelines.
type PredictionPipelineLister interface {
	// List lists all PredictionPipelines in the indexer.
	List(selector labels.Selector) (ret []*v1alpha1.PredictionPipeline, err error)
	// PredictionPipelines returns an object that can list and get PredictionPipelines.
	PredictionPipelines(namespace string) PredictionPipelineNamespaceLister
	PredictionPipelineListerExpansion
}

// predictionPipelineLister implements the PredictionPipelineLister interface.
type predictionPipelineLister struct {
	indexer cache.Indexer
}

// NewPredictionPipelineLister returns a new PredictionPipelineLister.
func NewPredictionPipelineLister(indexer cache.Indexer) PredictionPipelineLister {
	return &predictionPipelineLister{indexer: indexer}
}

// List lists all PredictionPipelines in the indexer.
func (s *predictionPipelineLister) List(selector labels.Selector) (ret []*v1alpha1.PredictionPipeline, err error) {
	err = cache.ListAll(s.indexer, selector, func(m interface{}) {
		ret = append(ret, m.(*v1alpha1.PredictionPipeline))
	})
	return ret, err
}

// PredictionPipelines returns an object that can list and get PredictionPipelines.
func (s *predictionPipelineLister) PredictionPipelines(namespace string) PredictionPipelineNamespaceLister {
	return predictionPipelineNamespaceLister{indexer: s.indexer, namespace: namespace}
}

// PredictionPipelineNamespaceLister helps list and get PredictionPipelines.
type PredictionPipelineNamespaceLister interface {
	// List lists all PredictionPipelines in the indexer for a given namespace.
	List(selector labels.Selector) (ret []*v1alpha1.PredictionPipeline, err error)
	// Get retrieves the PredictionPipeline from the indexer for a given namespace and name.
	Get(name string) (*v1alpha1.PredictionPipeline, error)
	PredictionPipelineNamespaceListerExpansion
}

// predictionPipelineNamespaceLister implements the PredictionPipelineNamespaceLister
// interface.
type predictionPipelineNamespaceLister struct {
	indexer   cache.Indexer
	namespace string
}

// List lists all PredictionPipelines in the indexer for a given namespace.
func (s predictionPipelineNamespaceLister) List(selector labels.Selector) (ret []*v1alpha1.PredictionPipeline, err error) {
	err = cache.ListAllByNamespace(s.indexer, s.namespace, selector, func(m interface{}) {
		ret = append(ret, m.(*v1alpha1.PredictionPipeline))
	})
	return ret, err
}

// Get retrieves the PredictionPipeline from the indexer for a given namespace and name.
func (s predictionPipelineNamespaceLister) Get(name string) (*v1alpha1.PredictionPipeline, error) {
	obj, exists, err := s.indexer.GetByKey(s.namespace + "/" + name)
	if err != nil {
		return nil, err
	}
	if !exists {
		return nil, errors.NewNotFound(v1alpha1.Resource("predictionpipeline"), name)
	}
	return obj.(*v1alpha1.PredictionPipeline), nil
}
