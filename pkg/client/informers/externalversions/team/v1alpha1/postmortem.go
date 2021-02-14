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

	teamv1alpha1 "github.com/metaprov/modeldapi/pkg/apis/team/v1alpha1"
	versioned "github.com/metaprov/modeldapi/pkg/client/clientset/versioned"
	internalinterfaces "github.com/metaprov/modeldapi/pkg/client/informers/externalversions/internalinterfaces"
	v1alpha1 "github.com/metaprov/modeldapi/pkg/client/listers/team/v1alpha1"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	runtime "k8s.io/apimachinery/pkg/runtime"
	watch "k8s.io/apimachinery/pkg/watch"
	cache "k8s.io/client-go/tools/cache"
)

// PostMortemInformer provides access to a shared informer and lister for
// PostMortems.
type PostMortemInformer interface {
	Informer() cache.SharedIndexInformer
	Lister() v1alpha1.PostMortemLister
}

type postMortemInformer struct {
	factory          internalinterfaces.SharedInformerFactory
	tweakListOptions internalinterfaces.TweakListOptionsFunc
	namespace        string
}

// NewPostMortemInformer constructs a new informer for PostMortem type.
// Always prefer using an informer factory to get a shared informer instead of getting an independent
// one. This reduces memory footprint and number of connections to the server.
func NewPostMortemInformer(client versioned.Interface, namespace string, resyncPeriod time.Duration, indexers cache.Indexers) cache.SharedIndexInformer {
	return NewFilteredPostMortemInformer(client, namespace, resyncPeriod, indexers, nil)
}

// NewFilteredPostMortemInformer constructs a new informer for PostMortem type.
// Always prefer using an informer factory to get a shared informer instead of getting an independent
// one. This reduces memory footprint and number of connections to the server.
func NewFilteredPostMortemInformer(client versioned.Interface, namespace string, resyncPeriod time.Duration, indexers cache.Indexers, tweakListOptions internalinterfaces.TweakListOptionsFunc) cache.SharedIndexInformer {
	return cache.NewSharedIndexInformer(
		&cache.ListWatch{
			ListFunc: func(options v1.ListOptions) (runtime.Object, error) {
				if tweakListOptions != nil {
					tweakListOptions(&options)
				}
				return client.TeamV1alpha1().PostMortems(namespace).List(context.TODO(), options)
			},
			WatchFunc: func(options v1.ListOptions) (watch.Interface, error) {
				if tweakListOptions != nil {
					tweakListOptions(&options)
				}
				return client.TeamV1alpha1().PostMortems(namespace).Watch(context.TODO(), options)
			},
		},
		&teamv1alpha1.PostMortem{},
		resyncPeriod,
		indexers,
	)
}

func (f *postMortemInformer) defaultInformer(client versioned.Interface, resyncPeriod time.Duration) cache.SharedIndexInformer {
	return NewFilteredPostMortemInformer(client, f.namespace, resyncPeriod, cache.Indexers{cache.NamespaceIndex: cache.MetaNamespaceIndexFunc}, f.tweakListOptions)
}

func (f *postMortemInformer) Informer() cache.SharedIndexInformer {
	return f.factory.InformerFor(&teamv1alpha1.PostMortem{}, f.defaultInformer)
}

func (f *postMortemInformer) Lister() v1alpha1.PostMortemLister {
	return v1alpha1.NewPostMortemLister(f.Informer().GetIndexer())
}