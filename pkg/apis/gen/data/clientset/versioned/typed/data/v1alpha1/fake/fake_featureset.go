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

// FakeFeaturesets implements FeaturesetInterface
type FakeFeaturesets struct {
	Fake *FakeDataV1alpha1
	ns   string
}

var featuresetsResource = schema.GroupVersionResource{Group: "data.modeld.io", Version: "v1alpha1", Resource: "featuresets"}

var featuresetsKind = schema.GroupVersionKind{Group: "data.modeld.io", Version: "v1alpha1", Kind: "Featureset"}

// Get takes name of the featureset, and returns the corresponding featureset object, and an error if there is any.
func (c *FakeFeaturesets) Get(name string, options v1.GetOptions) (result *v1alpha1.Featureset, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewGetAction(featuresetsResource, c.ns, name), &v1alpha1.Featureset{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.Featureset), err
}

// List takes label and field selectors, and returns the list of Featuresets that match those selectors.
func (c *FakeFeaturesets) List(opts v1.ListOptions) (result *v1alpha1.FeaturesetList, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewListAction(featuresetsResource, featuresetsKind, c.ns, opts), &v1alpha1.FeaturesetList{})

	if obj == nil {
		return nil, err
	}

	label, _, _ := testing.ExtractFromListOptions(opts)
	if label == nil {
		label = labels.Everything()
	}
	list := &v1alpha1.FeaturesetList{ListMeta: obj.(*v1alpha1.FeaturesetList).ListMeta}
	for _, item := range obj.(*v1alpha1.FeaturesetList).Items {
		if label.Matches(labels.Set(item.Labels)) {
			list.Items = append(list.Items, item)
		}
	}
	return list, err
}

// Watch returns a watch.Interface that watches the requested featuresets.
func (c *FakeFeaturesets) Watch(opts v1.ListOptions) (watch.Interface, error) {
	return c.Fake.
		InvokesWatch(testing.NewWatchAction(featuresetsResource, c.ns, opts))

}

// Create takes the representation of a featureset and creates it.  Returns the server's representation of the featureset, and an error, if there is any.
func (c *FakeFeaturesets) Create(featureset *v1alpha1.Featureset) (result *v1alpha1.Featureset, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewCreateAction(featuresetsResource, c.ns, featureset), &v1alpha1.Featureset{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.Featureset), err
}

// Update takes the representation of a featureset and updates it. Returns the server's representation of the featureset, and an error, if there is any.
func (c *FakeFeaturesets) Update(featureset *v1alpha1.Featureset) (result *v1alpha1.Featureset, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewUpdateAction(featuresetsResource, c.ns, featureset), &v1alpha1.Featureset{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.Featureset), err
}

// Delete takes name of the featureset and deletes it. Returns an error if one occurs.
func (c *FakeFeaturesets) Delete(name string, options *v1.DeleteOptions) error {
	_, err := c.Fake.
		Invokes(testing.NewDeleteAction(featuresetsResource, c.ns, name), &v1alpha1.Featureset{})

	return err
}

// DeleteCollection deletes a collection of objects.
func (c *FakeFeaturesets) DeleteCollection(options *v1.DeleteOptions, listOptions v1.ListOptions) error {
	action := testing.NewDeleteCollectionAction(featuresetsResource, c.ns, listOptions)

	_, err := c.Fake.Invokes(action, &v1alpha1.FeaturesetList{})
	return err
}

// Patch applies the patch and returns the patched featureset.
func (c *FakeFeaturesets) Patch(name string, pt types.PatchType, data []byte, subresources ...string) (result *v1alpha1.Featureset, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewPatchSubresourceAction(featuresetsResource, c.ns, name, pt, data, subresources...), &v1alpha1.Featureset{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.Featureset), err
}
