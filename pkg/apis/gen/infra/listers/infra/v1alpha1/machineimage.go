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

// MachineImageLister helps list MachineImages.
type MachineImageLister interface {
	// List lists all MachineImages in the indexer.
	List(selector labels.Selector) (ret []*v1alpha1.MachineImage, err error)
	// MachineImages returns an object that can list and get MachineImages.
	MachineImages(namespace string) MachineImageNamespaceLister
	MachineImageListerExpansion
}

// machineImageLister implements the MachineImageLister interface.
type machineImageLister struct {
	indexer cache.Indexer
}

// NewMachineImageLister returns a new MachineImageLister.
func NewMachineImageLister(indexer cache.Indexer) MachineImageLister {
	return &machineImageLister{indexer: indexer}
}

// List lists all MachineImages in the indexer.
func (s *machineImageLister) List(selector labels.Selector) (ret []*v1alpha1.MachineImage, err error) {
	err = cache.ListAll(s.indexer, selector, func(m interface{}) {
		ret = append(ret, m.(*v1alpha1.MachineImage))
	})
	return ret, err
}

// MachineImages returns an object that can list and get MachineImages.
func (s *machineImageLister) MachineImages(namespace string) MachineImageNamespaceLister {
	return machineImageNamespaceLister{indexer: s.indexer, namespace: namespace}
}

// MachineImageNamespaceLister helps list and get MachineImages.
type MachineImageNamespaceLister interface {
	// List lists all MachineImages in the indexer for a given namespace.
	List(selector labels.Selector) (ret []*v1alpha1.MachineImage, err error)
	// Get retrieves the MachineImage from the indexer for a given namespace and name.
	Get(name string) (*v1alpha1.MachineImage, error)
	MachineImageNamespaceListerExpansion
}

// machineImageNamespaceLister implements the MachineImageNamespaceLister
// interface.
type machineImageNamespaceLister struct {
	indexer   cache.Indexer
	namespace string
}

// List lists all MachineImages in the indexer for a given namespace.
func (s machineImageNamespaceLister) List(selector labels.Selector) (ret []*v1alpha1.MachineImage, err error) {
	err = cache.ListAllByNamespace(s.indexer, s.namespace, selector, func(m interface{}) {
		ret = append(ret, m.(*v1alpha1.MachineImage))
	})
	return ret, err
}

// Get retrieves the MachineImage from the indexer for a given namespace and name.
func (s machineImageNamespaceLister) Get(name string) (*v1alpha1.MachineImage, error) {
	obj, exists, err := s.indexer.GetByKey(s.namespace + "/" + name)
	if err != nil {
		return nil, err
	}
	if !exists {
		return nil, errors.NewNotFound(v1alpha1.Resource("machineimage"), name)
	}
	return obj.(*v1alpha1.MachineImage), nil
}
