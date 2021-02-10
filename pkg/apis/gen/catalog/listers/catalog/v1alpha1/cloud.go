/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by lister-gen. DO NOT EDIT.

package v1alpha1

import (
	v1alpha1 "github.com/metaprov/modeld-api/pkg/apis/catalog/v1alpha1"
	"k8s.io/apimachinery/pkg/api/errors"
	"k8s.io/apimachinery/pkg/labels"
	"k8s.io/client-go/tools/cache"
)

// CloudLister helps list Clouds.
type CloudLister interface {
	// List lists all Clouds in the indexer.
	List(selector labels.Selector) (ret []*v1alpha1.Cloud, err error)
	// Clouds returns an object that can list and get Clouds.
	Clouds(namespace string) CloudNamespaceLister
	CloudListerExpansion
}

// cloudLister implements the CloudLister interface.
type cloudLister struct {
	indexer cache.Indexer
}

// NewCloudLister returns a new CloudLister.
func NewCloudLister(indexer cache.Indexer) CloudLister {
	return &cloudLister{indexer: indexer}
}

// List lists all Clouds in the indexer.
func (s *cloudLister) List(selector labels.Selector) (ret []*v1alpha1.Cloud, err error) {
	err = cache.ListAll(s.indexer, selector, func(m interface{}) {
		ret = append(ret, m.(*v1alpha1.Cloud))
	})
	return ret, err
}

// Clouds returns an object that can list and get Clouds.
func (s *cloudLister) Clouds(namespace string) CloudNamespaceLister {
	return cloudNamespaceLister{indexer: s.indexer, namespace: namespace}
}

// CloudNamespaceLister helps list and get Clouds.
type CloudNamespaceLister interface {
	// List lists all Clouds in the indexer for a given namespace.
	List(selector labels.Selector) (ret []*v1alpha1.Cloud, err error)
	// Get retrieves the Cloud from the indexer for a given namespace and name.
	Get(name string) (*v1alpha1.Cloud, error)
	CloudNamespaceListerExpansion
}

// cloudNamespaceLister implements the CloudNamespaceLister
// interface.
type cloudNamespaceLister struct {
	indexer   cache.Indexer
	namespace string
}

// List lists all Clouds in the indexer for a given namespace.
func (s cloudNamespaceLister) List(selector labels.Selector) (ret []*v1alpha1.Cloud, err error) {
	err = cache.ListAllByNamespace(s.indexer, s.namespace, selector, func(m interface{}) {
		ret = append(ret, m.(*v1alpha1.Cloud))
	})
	return ret, err
}

// Get retrieves the Cloud from the indexer for a given namespace and name.
func (s cloudNamespaceLister) Get(name string) (*v1alpha1.Cloud, error) {
	obj, exists, err := s.indexer.GetByKey(s.namespace + "/" + name)
	if err != nil {
		return nil, err
	}
	if !exists {
		return nil, errors.NewNotFound(v1alpha1.Resource("cloud"), name)
	}
	return obj.(*v1alpha1.Cloud), nil
}
