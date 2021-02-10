/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by lister-gen. DO NOT EDIT.

package v1alpha1

import (
	v1alpha1 "github.com/metaprov/modeld-api/pkg/apis/infra/v1alpha1"
	"k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/client-go/tools/cache"
)

// ServingSiteLister helps list ServingSites.
type ServingSiteLister interface {
	// List lists all ServingSites in the indexer.
	List(selector labels.Selector) (ret []*v1alpha1.ServingSite, err error)
	// ServingSites returns an object that can list and get ServingSites.
	ServingSites(namespace string) ServingSiteNamespaceLister
	ServingSiteListerExpansion
}

// servingSiteLister implements the ServingSiteLister interface.
type servingSiteLister struct {
	indexer cache.Indexer
}

// NewServingSiteLister returns a new ServingSiteLister.
func NewServingSiteLister(indexer cache.Indexer) ServingSiteLister {
	return &servingSiteLister{indexer: indexer}
}

// List lists all ServingSites in the indexer.
func (s *servingSiteLister) List(selector labels.Selector) (ret []*v1alpha1.ServingSite, err error) {
	err = cache.ListAll(s.indexer, selector, func(m interface{}) {
		ret = append(ret, m.(*v1alpha1.ServingSite))
	})
	return ret, err
}

// ServingSites returns an object that can list and get ServingSites.
func (s *servingSiteLister) ServingSites(namespace string) ServingSiteNamespaceLister {
	return servingSiteNamespaceLister{indexer: s.indexer, namespace: namespace}
}

// ServingSiteNamespaceLister helps list and get ServingSites.
type ServingSiteNamespaceLister interface {
	// List lists all ServingSites in the indexer for a given namespace.
	List(selector labels.Selector) (ret []*v1alpha1.ServingSite, err error)
	// Get retrieves the ServingSite from the indexer for a given namespace and name.
	Get(name string) (*v1alpha1.ServingSite, error)
	ServingSiteNamespaceListerExpansion
}

// servingSiteNamespaceLister implements the ServingSiteNamespaceLister
// interface.
type servingSiteNamespaceLister struct {
	indexer   cache.Indexer
	namespace string
}

// List lists all ServingSites in the indexer for a given namespace.
func (s servingSiteNamespaceLister) List(selector labels.Selector) (ret []*v1alpha1.ServingSite, err error) {
	err = cache.ListAllByNamespace(s.indexer, s.namespace, selector, func(m interface{}) {
		ret = append(ret, m.(*v1alpha1.ServingSite))
	})
	return ret, err
}

// Get retrieves the ServingSite from the indexer for a given namespace and name.
func (s servingSiteNamespaceLister) Get(name string) (*v1alpha1.ServingSite, error) {
	obj, exists, err := s.indexer.GetByKey(s.namespace + "/" + name)
	if err != nil {
		return nil, err
	}
	if !exists {
		return nil, errors.NewNotFound(v1alpha1.Resource("servingsite"), name)
	}
	return obj.(*v1alpha1.ServingSite), nil
}
