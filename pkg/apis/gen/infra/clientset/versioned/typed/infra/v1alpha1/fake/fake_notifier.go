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

// FakeNotifiers implements NotifierInterface
type FakeNotifiers struct {
	Fake *FakeInfraV1alpha1
	ns   string
}

var notifiersResource = schema.GroupVersionResource{Group: "infra.modeld.io", Version: "v1alpha1", Resource: "notifiers"}

var notifiersKind = schema.GroupVersionKind{Group: "infra.modeld.io", Version: "v1alpha1", Kind: "Notifier"}

// Get takes name of the notifier, and returns the corresponding notifier object, and an error if there is any.
func (c *FakeNotifiers) Get(name string, options v1.GetOptions) (result *v1alpha1.Notifier, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewGetAction(notifiersResource, c.ns, name), &v1alpha1.Notifier{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.Notifier), err
}

// List takes label and field selectors, and returns the list of Notifiers that match those selectors.
func (c *FakeNotifiers) List(opts v1.ListOptions) (result *v1alpha1.NotifierList, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewListAction(notifiersResource, notifiersKind, c.ns, opts), &v1alpha1.NotifierList{})

	if obj == nil {
		return nil, err
	}

	label, _, _ := testing.ExtractFromListOptions(opts)
	if label == nil {
		label = labels.Everything()
	}
	list := &v1alpha1.NotifierList{ListMeta: obj.(*v1alpha1.NotifierList).ListMeta}
	for _, item := range obj.(*v1alpha1.NotifierList).Items {
		if label.Matches(labels.Set(item.Labels)) {
			list.Items = append(list.Items, item)
		}
	}
	return list, err
}

// Watch returns a watch.Interface that watches the requested notifiers.
func (c *FakeNotifiers) Watch(opts v1.ListOptions) (watch.Interface, error) {
	return c.Fake.
		InvokesWatch(testing.NewWatchAction(notifiersResource, c.ns, opts))

}

// Create takes the representation of a notifier and creates it.  Returns the server's representation of the notifier, and an error, if there is any.
func (c *FakeNotifiers) Create(notifier *v1alpha1.Notifier) (result *v1alpha1.Notifier, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewCreateAction(notifiersResource, c.ns, notifier), &v1alpha1.Notifier{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.Notifier), err
}

// Update takes the representation of a notifier and updates it. Returns the server's representation of the notifier, and an error, if there is any.
func (c *FakeNotifiers) Update(notifier *v1alpha1.Notifier) (result *v1alpha1.Notifier, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewUpdateAction(notifiersResource, c.ns, notifier), &v1alpha1.Notifier{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.Notifier), err
}

// UpdateStatus was generated because the type contains a Status member.
// Add a +genclient:noStatus comment above the type to avoid generating UpdateStatus().
func (c *FakeNotifiers) UpdateStatus(notifier *v1alpha1.Notifier) (*v1alpha1.Notifier, error) {
	obj, err := c.Fake.
		Invokes(testing.NewUpdateSubresourceAction(notifiersResource, "status", c.ns, notifier), &v1alpha1.Notifier{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.Notifier), err
}

// Delete takes name of the notifier and deletes it. Returns an error if one occurs.
func (c *FakeNotifiers) Delete(name string, options *v1.DeleteOptions) error {
	_, err := c.Fake.
		Invokes(testing.NewDeleteAction(notifiersResource, c.ns, name), &v1alpha1.Notifier{})

	return err
}

// DeleteCollection deletes a collection of objects.
func (c *FakeNotifiers) DeleteCollection(options *v1.DeleteOptions, listOptions v1.ListOptions) error {
	action := testing.NewDeleteCollectionAction(notifiersResource, c.ns, listOptions)

	_, err := c.Fake.Invokes(action, &v1alpha1.NotifierList{})
	return err
}

// Patch applies the patch and returns the patched notifier.
func (c *FakeNotifiers) Patch(name string, pt types.PatchType, data []byte, subresources ...string) (result *v1alpha1.Notifier, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewPatchSubresourceAction(notifiersResource, c.ns, name, pt, data, subresources...), &v1alpha1.Notifier{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.Notifier), err
}
