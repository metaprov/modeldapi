/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by informer-gen. DO NOT EDIT.

package v1alpha1

import (
	time "time"

	versioned "github.com/metaprov/modeld-api/pkg/apis/gen/infra/clientset/versioned"
	internalinterfaces "github.com/metaprov/modeld-api/pkg/apis/gen/infra/informers/externalversions/internalinterfaces"
	v1alpha1 "github.com/metaprov/modeld-api/pkg/apis/gen/infra/listers/infra/v1alpha1"
	infrav1alpha1 "github.com/metaprov/modeld-api/pkg/apis/infra/v1alpha1"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	runtime "k8s.io/apimachinery/pkg/runtime"
	watch "k8s.io/apimachinery/pkg/watch"
	cache "k8s.io/client-go/tools/cache"
)

// ServingSiteInformer provides access to a shared informer and lister for
// ServingSites.
type ServingSiteInformer interface {
	Informer() cache.SharedIndexInformer
	Lister() v1alpha1.ServingSiteLister
}

type servingSiteInformer struct {
	factory          internalinterfaces.SharedInformerFactory
	tweakListOptions internalinterfaces.TweakListOptionsFunc
	namespace        string
}

// NewServingSiteInformer constructs a new informer for ServingSite type.
// Always prefer using an informer factory to get a shared informer instead of getting an independent
// one. This reduces memory footprint and number of connections to the server.
func NewServingSiteInformer(client versioned.Interface, namespace string, resyncPeriod time.Duration, indexers cache.Indexers) cache.SharedIndexInformer {
	return NewFilteredServingSiteInformer(client, namespace, resyncPeriod, indexers, nil)
}

// NewFilteredServingSiteInformer constructs a new informer for ServingSite type.
// Always prefer using an informer factory to get a shared informer instead of getting an independent
// one. This reduces memory footprint and number of connections to the server.
func NewFilteredServingSiteInformer(client versioned.Interface, namespace string, resyncPeriod time.Duration, indexers cache.Indexers, tweakListOptions internalinterfaces.TweakListOptionsFunc) cache.SharedIndexInformer {
	return cache.NewSharedIndexInformer(
		&cache.ListWatch{
			ListFunc: func(options v1.ListOptions) (runtime.Object, error) {
				if tweakListOptions != nil {
					tweakListOptions(&options)
				}
				return client.InfraV1alpha1().ServingSites(namespace).List(options)
			},
			WatchFunc: func(options v1.ListOptions) (watch.Interface, error) {
				if tweakListOptions != nil {
					tweakListOptions(&options)
				}
				return client.InfraV1alpha1().ServingSites(namespace).Watch(options)
			},
		},
		&infrav1alpha1.ServingSite{},
		resyncPeriod,
		indexers,
	)
}

func (f *servingSiteInformer) defaultInformer(client versioned.Interface, resyncPeriod time.Duration) cache.SharedIndexInformer {
	return NewFilteredServingSiteInformer(client, f.namespace, resyncPeriod, cache.Indexers{cache.NamespaceIndex: cache.MetaNamespaceIndexFunc}, f.tweakListOptions)
}

func (f *servingSiteInformer) Informer() cache.SharedIndexInformer {
	return f.factory.InformerFor(&infrav1alpha1.ServingSite{}, f.defaultInformer)
}

func (f *servingSiteInformer) Lister() v1alpha1.ServingSiteLister {
	return v1alpha1.NewServingSiteLister(f.Informer().GetIndexer())
}
