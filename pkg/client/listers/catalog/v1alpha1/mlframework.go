/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by lister-gen. DO NOT EDIT.

package v1alpha1

import (
	v1alpha1 "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	"k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/client-go/tools/cache"
)

// MLFrameworkLister helps list MLFrameworks.
// All objects returned here must be treated as read-only.
type MLFrameworkLister interface {
	// List lists all MLFrameworks in the indexer.
	// Objects returned here must be treated as read-only.
	List(selector labels.Selector) (ret []*v1alpha1.MLFramework, err error)
	// MLFrameworks returns an object that can list and get MLFrameworks.
	MLFrameworks(namespace string) MLFrameworkNamespaceLister
	MLFrameworkListerExpansion
}

// mLFrameworkLister implements the MLFrameworkLister interface.
type mLFrameworkLister struct {
	indexer cache.Indexer
}

// NewMLFrameworkLister returns a new MLFrameworkLister.
func NewMLFrameworkLister(indexer cache.Indexer) MLFrameworkLister {
	return &mLFrameworkLister{indexer: indexer}
}

// List lists all MLFrameworks in the indexer.
func (s *mLFrameworkLister) List(selector labels.Selector) (ret []*v1alpha1.MLFramework, err error) {
	err = cache.ListAll(s.indexer, selector, func(m interface{}) {
		ret = append(ret, m.(*v1alpha1.MLFramework))
	})
	return ret, err
}

// MLFrameworks returns an object that can list and get MLFrameworks.
func (s *mLFrameworkLister) MLFrameworks(namespace string) MLFrameworkNamespaceLister {
	return mLFrameworkNamespaceLister{indexer: s.indexer, namespace: namespace}
}

// MLFrameworkNamespaceLister helps list and get MLFrameworks.
// All objects returned here must be treated as read-only.
type MLFrameworkNamespaceLister interface {
	// List lists all MLFrameworks in the indexer for a given namespace.
	// Objects returned here must be treated as read-only.
	List(selector labels.Selector) (ret []*v1alpha1.MLFramework, err error)
	// Get retrieves the MLFramework from the indexer for a given namespace and name.
	// Objects returned here must be treated as read-only.
	Get(name string) (*v1alpha1.MLFramework, error)
	MLFrameworkNamespaceListerExpansion
}

// mLFrameworkNamespaceLister implements the MLFrameworkNamespaceLister
// interface.
type mLFrameworkNamespaceLister struct {
	indexer   cache.Indexer
	namespace string
}

// List lists all MLFrameworks in the indexer for a given namespace.
func (s mLFrameworkNamespaceLister) List(selector labels.Selector) (ret []*v1alpha1.MLFramework, err error) {
	err = cache.ListAllByNamespace(s.indexer, s.namespace, selector, func(m interface{}) {
		ret = append(ret, m.(*v1alpha1.MLFramework))
	})
	return ret, err
}

// Get retrieves the MLFramework from the indexer for a given namespace and name.
func (s mLFrameworkNamespaceLister) Get(name string) (*v1alpha1.MLFramework, error) {
	obj, exists, err := s.indexer.GetByKey(s.namespace + "/" + name)
	if err != nil {
		return nil, err
	}
	if !exists {
		return nil, errors.NewNotFound(v1alpha1.Resource("mlframework"), name)
	}
	return obj.(*v1alpha1.MLFramework), nil
}