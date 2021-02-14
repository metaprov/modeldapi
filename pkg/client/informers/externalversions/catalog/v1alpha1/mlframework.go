/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by informer-gen. DO NOT EDIT.

package v1alpha1

import (
	"context"
	time "time"

	catalogv1alpha1 "github.com/metaprov/modeldapi/pkg/apis/catalog/v1alpha1"
	versioned "github.com/metaprov/modeldapi/pkg/client/clientset/versioned"
	internalinterfaces "github.com/metaprov/modeldapi/pkg/client/informers/externalversions/internalinterfaces"
	v1alpha1 "github.com/metaprov/modeldapi/pkg/client/listers/catalog/v1alpha1"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	runtime "k8s.io/apimachinery/pkg/runtime"
	watch "k8s.io/apimachinery/pkg/watch"
	cache "k8s.io/client-go/tools/cache"
)

// MLFrameworkInformer provides access to a shared informer and lister for
// MLFrameworks.
type MLFrameworkInformer interface {
	Informer() cache.SharedIndexInformer
	Lister() v1alpha1.MLFrameworkLister
}

type mLFrameworkInformer struct {
	factory          internalinterfaces.SharedInformerFactory
	tweakListOptions internalinterfaces.TweakListOptionsFunc
	namespace        string
}

// NewMLFrameworkInformer constructs a new informer for MLFramework type.
// Always prefer using an informer factory to get a shared informer instead of getting an independent
// one. This reduces memory footprint and number of connections to the server.
func NewMLFrameworkInformer(client versioned.Interface, namespace string, resyncPeriod time.Duration, indexers cache.Indexers) cache.SharedIndexInformer {
	return NewFilteredMLFrameworkInformer(client, namespace, resyncPeriod, indexers, nil)
}

// NewFilteredMLFrameworkInformer constructs a new informer for MLFramework type.
// Always prefer using an informer factory to get a shared informer instead of getting an independent
// one. This reduces memory footprint and number of connections to the server.
func NewFilteredMLFrameworkInformer(client versioned.Interface, namespace string, resyncPeriod time.Duration, indexers cache.Indexers, tweakListOptions internalinterfaces.TweakListOptionsFunc) cache.SharedIndexInformer {
	return cache.NewSharedIndexInformer(
		&cache.ListWatch{
			ListFunc: func(options v1.ListOptions) (runtime.Object, error) {
				if tweakListOptions != nil {
					tweakListOptions(&options)
				}
				return client.CatalogV1alpha1().MLFrameworks(namespace).List(context.TODO(), options)
			},
			WatchFunc: func(options v1.ListOptions) (watch.Interface, error) {
				if tweakListOptions != nil {
					tweakListOptions(&options)
				}
				return client.CatalogV1alpha1().MLFrameworks(namespace).Watch(context.TODO(), options)
			},
		},
		&catalogv1alpha1.MLFramework{},
		resyncPeriod,
		indexers,
	)
}

func (f *mLFrameworkInformer) defaultInformer(client versioned.Interface, resyncPeriod time.Duration) cache.SharedIndexInformer {
	return NewFilteredMLFrameworkInformer(client, f.namespace, resyncPeriod, cache.Indexers{cache.NamespaceIndex: cache.MetaNamespaceIndexFunc}, f.tweakListOptions)
}

func (f *mLFrameworkInformer) Informer() cache.SharedIndexInformer {
	return f.factory.InformerFor(&catalogv1alpha1.MLFramework{}, f.defaultInformer)
}

func (f *mLFrameworkInformer) Lister() v1alpha1.MLFrameworkLister {
	return v1alpha1.NewMLFrameworkLister(f.Informer().GetIndexer())
}