/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by client-gen. DO NOT EDIT.

package fake

import (
	v1alpha1 "github.com/metaprov/modeld-api/pkg/apis/infra/v1alpha1"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	labels "k8s.io/apimachinery/pkg/labels"
	schema "k8s.io/apimachinery/pkg/runtime/schema"
	types "k8s.io/apimachinery/pkg/types"
	watch "k8s.io/apimachinery/pkg/watch"
	testing "k8s.io/client-go/testing"
)

// FakeMachineImages implements MachineImageInterface
type FakeMachineImages struct {
	Fake *FakeInfraV1alpha1
	ns   string
}

var machineimagesResource = schema.GroupVersionResource{Group: "infra.modeld.io", Version: "v1alpha1", Resource: "machineimages"}

var machineimagesKind = schema.GroupVersionKind{Group: "infra.modeld.io", Version: "v1alpha1", Kind: "MachineImage"}

// Get takes name of the machineImage, and returns the corresponding machineImage object, and an error if there is any.
func (c *FakeMachineImages) Get(name string, options v1.GetOptions) (result *v1alpha1.MachineImage, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewGetAction(machineimagesResource, c.ns, name), &v1alpha1.MachineImage{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.MachineImage), err
}

// List takes label and field selectors, and returns the list of MachineImages that match those selectors.
func (c *FakeMachineImages) List(opts v1.ListOptions) (result *v1alpha1.MachineImageList, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewListAction(machineimagesResource, machineimagesKind, c.ns, opts), &v1alpha1.MachineImageList{})

	if obj == nil {
		return nil, err
	}

	label, _, _ := testing.ExtractFromListOptions(opts)
	if label == nil {
		label = labels.Everything()
	}
	list := &v1alpha1.MachineImageList{ListMeta: obj.(*v1alpha1.MachineImageList).ListMeta}
	for _, item := range obj.(*v1alpha1.MachineImageList).Items {
		if label.Matches(labels.Set(item.Labels)) {
			list.Items = append(list.Items, item)
		}
	}
	return list, err
}

// Watch returns a watch.Interface that watches the requested machineImages.
func (c *FakeMachineImages) Watch(opts v1.ListOptions) (watch.Interface, error) {
	return c.Fake.
		InvokesWatch(testing.NewWatchAction(machineimagesResource, c.ns, opts))

}

// Create takes the representation of a machineImage and creates it.  Returns the server's representation of the machineImage, and an error, if there is any.
func (c *FakeMachineImages) Create(machineImage *v1alpha1.MachineImage) (result *v1alpha1.MachineImage, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewCreateAction(machineimagesResource, c.ns, machineImage), &v1alpha1.MachineImage{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.MachineImage), err
}

// Update takes the representation of a machineImage and updates it. Returns the server's representation of the machineImage, and an error, if there is any.
func (c *FakeMachineImages) Update(machineImage *v1alpha1.MachineImage) (result *v1alpha1.MachineImage, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewUpdateAction(machineimagesResource, c.ns, machineImage), &v1alpha1.MachineImage{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.MachineImage), err
}

// Delete takes name of the machineImage and deletes it. Returns an error if one occurs.
func (c *FakeMachineImages) Delete(name string, options *v1.DeleteOptions) error {
	_, err := c.Fake.
		Invokes(testing.NewDeleteAction(machineimagesResource, c.ns, name), &v1alpha1.MachineImage{})

	return err
}

// DeleteCollection deletes a collection of objects.
func (c *FakeMachineImages) DeleteCollection(options *v1.DeleteOptions, listOptions v1.ListOptions) error {
	action := testing.NewDeleteCollectionAction(machineimagesResource, c.ns, listOptions)

	_, err := c.Fake.Invokes(action, &v1alpha1.MachineImageList{})
	return err
}

// Patch applies the patch and returns the patched machineImage.
func (c *FakeMachineImages) Patch(name string, pt types.PatchType, data []byte, subresources ...string) (result *v1alpha1.MachineImage, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewPatchSubresourceAction(machineimagesResource, c.ns, name, pt, data, subresources...), &v1alpha1.MachineImage{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.MachineImage), err
}
