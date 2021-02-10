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

// DataProductVersionLister helps list DataProductVersions.
type DataProductVersionLister interface {
	// List lists all DataProductVersions in the indexer.
	List(selector labels.Selector) (ret []*v1alpha1.DataProductVersion, err error)
	// DataProductVersions returns an object that can list and get DataProductVersions.
	DataProductVersions(namespace string) DataProductVersionNamespaceLister
	DataProductVersionListerExpansion
}

// dataProductVersionLister implements the DataProductVersionLister interface.
type dataProductVersionLister struct {
	indexer cache.Indexer
}

// NewDataProductVersionLister returns a new DataProductVersionLister.
func NewDataProductVersionLister(indexer cache.Indexer) DataProductVersionLister {
	return &dataProductVersionLister{indexer: indexer}
}

// List lists all DataProductVersions in the indexer.
func (s *dataProductVersionLister) List(selector labels.Selector) (ret []*v1alpha1.DataProductVersion, err error) {
	err = cache.ListAll(s.indexer, selector, func(m interface{}) {
		ret = append(ret, m.(*v1alpha1.DataProductVersion))
	})
	return ret, err
}

// DataProductVersions returns an object that can list and get DataProductVersions.
func (s *dataProductVersionLister) DataProductVersions(namespace string) DataProductVersionNamespaceLister {
	return dataProductVersionNamespaceLister{indexer: s.indexer, namespace: namespace}
}

// DataProductVersionNamespaceLister helps list and get DataProductVersions.
type DataProductVersionNamespaceLister interface {
	// List lists all DataProductVersions in the indexer for a given namespace.
	List(selector labels.Selector) (ret []*v1alpha1.DataProductVersion, err error)
	// Get retrieves the DataProductVersion from the indexer for a given namespace and name.
	Get(name string) (*v1alpha1.DataProductVersion, error)
	DataProductVersionNamespaceListerExpansion
}

// dataProductVersionNamespaceLister implements the DataProductVersionNamespaceLister
// interface.
type dataProductVersionNamespaceLister struct {
	indexer   cache.Indexer
	namespace string
}

// List lists all DataProductVersions in the indexer for a given namespace.
func (s dataProductVersionNamespaceLister) List(selector labels.Selector) (ret []*v1alpha1.DataProductVersion, err error) {
	err = cache.ListAllByNamespace(s.indexer, s.namespace, selector, func(m interface{}) {
		ret = append(ret, m.(*v1alpha1.DataProductVersion))
	})
	return ret, err
}

// Get retrieves the DataProductVersion from the indexer for a given namespace and name.
func (s dataProductVersionNamespaceLister) Get(name string) (*v1alpha1.DataProductVersion, error) {
	obj, exists, err := s.indexer.GetByKey(s.namespace + "/" + name)
	if err != nil {
		return nil, err
	}
	if !exists {
		return nil, errors.NewNotFound(v1alpha1.Resource("dataproductversion"), name)
	}
	return obj.(*v1alpha1.DataProductVersion), nil
}
