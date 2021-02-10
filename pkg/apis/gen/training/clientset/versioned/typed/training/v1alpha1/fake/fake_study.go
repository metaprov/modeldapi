/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by client-gen. DO NOT EDIT.

package fake

import (
	v1alpha1 "github.com/metaprov/modeld-api/pkg/apis/training/v1alpha1"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	labels "k8s.io/apimachinery/pkg/labels"
	schema "k8s.io/apimachinery/pkg/runtime/schema"
	types "k8s.io/apimachinery/pkg/types"
	watch "k8s.io/apimachinery/pkg/watch"
	testing "k8s.io/client-go/testing"
)

// FakeStudies implements StudyInterface
type FakeStudies struct {
	Fake *FakeTrainingV1alpha1
	ns   string
}

var studiesResource = schema.GroupVersionResource{Group: "training.modeld.io", Version: "v1alpha1", Resource: "studies"}

var studiesKind = schema.GroupVersionKind{Group: "training.modeld.io", Version: "v1alpha1", Kind: "Study"}

// Get takes name of the study, and returns the corresponding study object, and an error if there is any.
func (c *FakeStudies) Get(name string, options v1.GetOptions) (result *v1alpha1.Study, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewGetAction(studiesResource, c.ns, name), &v1alpha1.Study{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.Study), err
}

// List takes label and field selectors, and returns the list of Studies that match those selectors.
func (c *FakeStudies) List(opts v1.ListOptions) (result *v1alpha1.StudyList, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewListAction(studiesResource, studiesKind, c.ns, opts), &v1alpha1.StudyList{})

	if obj == nil {
		return nil, err
	}

	label, _, _ := testing.ExtractFromListOptions(opts)
	if label == nil {
		label = labels.Everything()
	}
	list := &v1alpha1.StudyList{ListMeta: obj.(*v1alpha1.StudyList).ListMeta}
	for _, item := range obj.(*v1alpha1.StudyList).Items {
		if label.Matches(labels.Set(item.Labels)) {
			list.Items = append(list.Items, item)
		}
	}
	return list, err
}

// Watch returns a watch.Interface that watches the requested studies.
func (c *FakeStudies) Watch(opts v1.ListOptions) (watch.Interface, error) {
	return c.Fake.
		InvokesWatch(testing.NewWatchAction(studiesResource, c.ns, opts))

}

// Create takes the representation of a study and creates it.  Returns the server's representation of the study, and an error, if there is any.
func (c *FakeStudies) Create(study *v1alpha1.Study) (result *v1alpha1.Study, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewCreateAction(studiesResource, c.ns, study), &v1alpha1.Study{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.Study), err
}

// Update takes the representation of a study and updates it. Returns the server's representation of the study, and an error, if there is any.
func (c *FakeStudies) Update(study *v1alpha1.Study) (result *v1alpha1.Study, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewUpdateAction(studiesResource, c.ns, study), &v1alpha1.Study{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.Study), err
}

// UpdateStatus was generated because the type contains a Status member.
// Add a +genclient:noStatus comment above the type to avoid generating UpdateStatus().
func (c *FakeStudies) UpdateStatus(study *v1alpha1.Study) (*v1alpha1.Study, error) {
	obj, err := c.Fake.
		Invokes(testing.NewUpdateSubresourceAction(studiesResource, "status", c.ns, study), &v1alpha1.Study{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.Study), err
}

// Delete takes name of the study and deletes it. Returns an error if one occurs.
func (c *FakeStudies) Delete(name string, options *v1.DeleteOptions) error {
	_, err := c.Fake.
		Invokes(testing.NewDeleteAction(studiesResource, c.ns, name), &v1alpha1.Study{})

	return err
}

// DeleteCollection deletes a collection of objects.
func (c *FakeStudies) DeleteCollection(options *v1.DeleteOptions, listOptions v1.ListOptions) error {
	action := testing.NewDeleteCollectionAction(studiesResource, c.ns, listOptions)

	_, err := c.Fake.Invokes(action, &v1alpha1.StudyList{})
	return err
}

// Patch applies the patch and returns the patched study.
func (c *FakeStudies) Patch(name string, pt types.PatchType, data []byte, subresources ...string) (result *v1alpha1.Study, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewPatchSubresourceAction(studiesResource, c.ns, name, pt, data, subresources...), &v1alpha1.Study{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.Study), err
}
