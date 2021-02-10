/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by lister-gen. DO NOT EDIT.

package v1alpha1

import (
	v1alpha1 "github.com/metaprov/modeld-api/pkg/apis/data/v1alpha1"
	"k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/client-go/tools/cache"
)

// DatasetLister helps list Datasets.
type DatasetLister interface {
	// List lists all Datasets in the indexer.
	List(selector labels.Selector) (ret []*v1alpha1.Dataset, err error)
	// Datasets returns an object that can list and get Datasets.
	Datasets(namespace string) DatasetNamespaceLister
	DatasetListerExpansion
}

// datasetLister implements the DatasetLister interface.
type datasetLister struct {
	indexer cache.Indexer
}

// NewDatasetLister returns a new DatasetLister.
func NewDatasetLister(indexer cache.Indexer) DatasetLister {
	return &datasetLister{indexer: indexer}
}

// List lists all Datasets in the indexer.
func (s *datasetLister) List(selector labels.Selector) (ret []*v1alpha1.Dataset, err error) {
	err = cache.ListAll(s.indexer, selector, func(m interface{}) {
		ret = append(ret, m.(*v1alpha1.Dataset))
	})
	return ret, err
}

// Datasets returns an object that can list and get Datasets.
func (s *datasetLister) Datasets(namespace string) DatasetNamespaceLister {
	return datasetNamespaceLister{indexer: s.indexer, namespace: namespace}
}

// DatasetNamespaceLister helps list and get Datasets.
type DatasetNamespaceLister interface {
	// List lists all Datasets in the indexer for a given namespace.
	List(selector labels.Selector) (ret []*v1alpha1.Dataset, err error)
	// Get retrieves the Dataset from the indexer for a given namespace and name.
	Get(name string) (*v1alpha1.Dataset, error)
	DatasetNamespaceListerExpansion
}

// datasetNamespaceLister implements the DatasetNamespaceLister
// interface.
type datasetNamespaceLister struct {
	indexer   cache.Indexer
	namespace string
}

// List lists all Datasets in the indexer for a given namespace.
func (s datasetNamespaceLister) List(selector labels.Selector) (ret []*v1alpha1.Dataset, err error) {
	err = cache.ListAllByNamespace(s.indexer, s.namespace, selector, func(m interface{}) {
		ret = append(ret, m.(*v1alpha1.Dataset))
	})
	return ret, err
}

// Get retrieves the Dataset from the indexer for a given namespace and name.
func (s datasetNamespaceLister) Get(name string) (*v1alpha1.Dataset, error) {
	obj, exists, err := s.indexer.GetByKey(s.namespace + "/" + name)
	if err != nil {
		return nil, err
	}
	if !exists {
		return nil, errors.NewNotFound(v1alpha1.Resource("dataset"), name)
	}
	return obj.(*v1alpha1.Dataset), nil
}
