/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by client-gen. DO NOT EDIT.

package fake

import (
	v1alpha1 "github.com/metaprov/modeld-api/pkg/apis/data/v1alpha1"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	labels "k8s.io/apimachinery/pkg/labels"
	schema "k8s.io/apimachinery/pkg/runtime/schema"
	types "k8s.io/apimachinery/pkg/types"
	watch "k8s.io/apimachinery/pkg/watch"
	testing "k8s.io/client-go/testing"
)

// FakeDataPipelines implements DataPipelineInterface
type FakeDataPipelines struct {
	Fake *FakeDataV1alpha1
	ns   string
}

var datapipelinesResource = schema.GroupVersionResource{Group: "data.modeld.io", Version: "v1alpha1", Resource: "datapipelines"}

var datapipelinesKind = schema.GroupVersionKind{Group: "data.modeld.io", Version: "v1alpha1", Kind: "DataPipeline"}

// Get takes name of the dataPipeline, and returns the corresponding dataPipeline object, and an error if there is any.
func (c *FakeDataPipelines) Get(name string, options v1.GetOptions) (result *v1alpha1.DataPipeline, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewGetAction(datapipelinesResource, c.ns, name), &v1alpha1.DataPipeline{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.DataPipeline), err
}

// List takes label and field selectors, and returns the list of DataPipelines that match those selectors.
func (c *FakeDataPipelines) List(opts v1.ListOptions) (result *v1alpha1.DataPipelineList, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewListAction(datapipelinesResource, datapipelinesKind, c.ns, opts), &v1alpha1.DataPipelineList{})

	if obj == nil {
		return nil, err
	}

	label, _, _ := testing.ExtractFromListOptions(opts)
	if label == nil {
		label = labels.Everything()
	}
	list := &v1alpha1.DataPipelineList{ListMeta: obj.(*v1alpha1.DataPipelineList).ListMeta}
	for _, item := range obj.(*v1alpha1.DataPipelineList).Items {
		if label.Matches(labels.Set(item.Labels)) {
			list.Items = append(list.Items, item)
		}
	}
	return list, err
}

// Watch returns a watch.Interface that watches the requested dataPipelines.
func (c *FakeDataPipelines) Watch(opts v1.ListOptions) (watch.Interface, error) {
	return c.Fake.
		InvokesWatch(testing.NewWatchAction(datapipelinesResource, c.ns, opts))

}

// Create takes the representation of a dataPipeline and creates it.  Returns the server's representation of the dataPipeline, and an error, if there is any.
func (c *FakeDataPipelines) Create(dataPipeline *v1alpha1.DataPipeline) (result *v1alpha1.DataPipeline, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewCreateAction(datapipelinesResource, c.ns, dataPipeline), &v1alpha1.DataPipeline{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.DataPipeline), err
}

// Update takes the representation of a dataPipeline and updates it. Returns the server's representation of the dataPipeline, and an error, if there is any.
func (c *FakeDataPipelines) Update(dataPipeline *v1alpha1.DataPipeline) (result *v1alpha1.DataPipeline, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewUpdateAction(datapipelinesResource, c.ns, dataPipeline), &v1alpha1.DataPipeline{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.DataPipeline), err
}

// Delete takes name of the dataPipeline and deletes it. Returns an error if one occurs.
func (c *FakeDataPipelines) Delete(name string, options *v1.DeleteOptions) error {
	_, err := c.Fake.
		Invokes(testing.NewDeleteAction(datapipelinesResource, c.ns, name), &v1alpha1.DataPipeline{})

	return err
}

// DeleteCollection deletes a collection of objects.
func (c *FakeDataPipelines) DeleteCollection(options *v1.DeleteOptions, listOptions v1.ListOptions) error {
	action := testing.NewDeleteCollectionAction(datapipelinesResource, c.ns, listOptions)

	_, err := c.Fake.Invokes(action, &v1alpha1.DataPipelineList{})
	return err
}

// Patch applies the patch and returns the patched dataPipeline.
func (c *FakeDataPipelines) Patch(name string, pt types.PatchType, data []byte, subresources ...string) (result *v1alpha1.DataPipeline, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewPatchSubresourceAction(datapipelinesResource, c.ns, name, pt, data, subresources...), &v1alpha1.DataPipeline{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.DataPipeline), err
}
