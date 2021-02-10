/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by client-gen. DO NOT EDIT.

package fake

import (
	v1alpha1 "github.com/metaprov/modeld-api/pkg/apis/inference/v1alpha1"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	labels "k8s.io/apimachinery/pkg/labels"
	schema "k8s.io/apimachinery/pkg/runtime/schema"
	types "k8s.io/apimachinery/pkg/types"
	watch "k8s.io/apimachinery/pkg/watch"
	testing "k8s.io/client-go/testing"
)

// FakePredictionPipelineRuns implements PredictionPipelineRunInterface
type FakePredictionPipelineRuns struct {
	Fake *FakeInferenceV1alpha1
	ns   string
}

var predictionpipelinerunsResource = schema.GroupVersionResource{Group: "inference.modeld.io", Version: "v1alpha1", Resource: "predictionpipelineruns"}

var predictionpipelinerunsKind = schema.GroupVersionKind{Group: "inference.modeld.io", Version: "v1alpha1", Kind: "PredictionPipelineRun"}

// Get takes name of the predictionPipelineRun, and returns the corresponding predictionPipelineRun object, and an error if there is any.
func (c *FakePredictionPipelineRuns) Get(name string, options v1.GetOptions) (result *v1alpha1.PredictionPipelineRun, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewGetAction(predictionpipelinerunsResource, c.ns, name), &v1alpha1.PredictionPipelineRun{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.PredictionPipelineRun), err
}

// List takes label and field selectors, and returns the list of PredictionPipelineRuns that match those selectors.
func (c *FakePredictionPipelineRuns) List(opts v1.ListOptions) (result *v1alpha1.PredictionPipelineRunList, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewListAction(predictionpipelinerunsResource, predictionpipelinerunsKind, c.ns, opts), &v1alpha1.PredictionPipelineRunList{})

	if obj == nil {
		return nil, err
	}

	label, _, _ := testing.ExtractFromListOptions(opts)
	if label == nil {
		label = labels.Everything()
	}
	list := &v1alpha1.PredictionPipelineRunList{ListMeta: obj.(*v1alpha1.PredictionPipelineRunList).ListMeta}
	for _, item := range obj.(*v1alpha1.PredictionPipelineRunList).Items {
		if label.Matches(labels.Set(item.Labels)) {
			list.Items = append(list.Items, item)
		}
	}
	return list, err
}

// Watch returns a watch.Interface that watches the requested predictionPipelineRuns.
func (c *FakePredictionPipelineRuns) Watch(opts v1.ListOptions) (watch.Interface, error) {
	return c.Fake.
		InvokesWatch(testing.NewWatchAction(predictionpipelinerunsResource, c.ns, opts))

}

// Create takes the representation of a predictionPipelineRun and creates it.  Returns the server's representation of the predictionPipelineRun, and an error, if there is any.
func (c *FakePredictionPipelineRuns) Create(predictionPipelineRun *v1alpha1.PredictionPipelineRun) (result *v1alpha1.PredictionPipelineRun, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewCreateAction(predictionpipelinerunsResource, c.ns, predictionPipelineRun), &v1alpha1.PredictionPipelineRun{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.PredictionPipelineRun), err
}

// Update takes the representation of a predictionPipelineRun and updates it. Returns the server's representation of the predictionPipelineRun, and an error, if there is any.
func (c *FakePredictionPipelineRuns) Update(predictionPipelineRun *v1alpha1.PredictionPipelineRun) (result *v1alpha1.PredictionPipelineRun, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewUpdateAction(predictionpipelinerunsResource, c.ns, predictionPipelineRun), &v1alpha1.PredictionPipelineRun{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.PredictionPipelineRun), err
}

// UpdateStatus was generated because the type contains a Status member.
// Add a +genclient:noStatus comment above the type to avoid generating UpdateStatus().
func (c *FakePredictionPipelineRuns) UpdateStatus(predictionPipelineRun *v1alpha1.PredictionPipelineRun) (*v1alpha1.PredictionPipelineRun, error) {
	obj, err := c.Fake.
		Invokes(testing.NewUpdateSubresourceAction(predictionpipelinerunsResource, "status", c.ns, predictionPipelineRun), &v1alpha1.PredictionPipelineRun{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.PredictionPipelineRun), err
}

// Delete takes name of the predictionPipelineRun and deletes it. Returns an error if one occurs.
func (c *FakePredictionPipelineRuns) Delete(name string, options *v1.DeleteOptions) error {
	_, err := c.Fake.
		Invokes(testing.NewDeleteAction(predictionpipelinerunsResource, c.ns, name), &v1alpha1.PredictionPipelineRun{})

	return err
}

// DeleteCollection deletes a collection of objects.
func (c *FakePredictionPipelineRuns) DeleteCollection(options *v1.DeleteOptions, listOptions v1.ListOptions) error {
	action := testing.NewDeleteCollectionAction(predictionpipelinerunsResource, c.ns, listOptions)

	_, err := c.Fake.Invokes(action, &v1alpha1.PredictionPipelineRunList{})
	return err
}

// Patch applies the patch and returns the patched predictionPipelineRun.
func (c *FakePredictionPipelineRuns) Patch(name string, pt types.PatchType, data []byte, subresources ...string) (result *v1alpha1.PredictionPipelineRun, err error) {
	obj, err := c.Fake.
		Invokes(testing.NewPatchSubresourceAction(predictionpipelinerunsResource, c.ns, name, pt, data, subresources...), &v1alpha1.PredictionPipelineRun{})

	if obj == nil {
		return nil, err
	}
	return obj.(*v1alpha1.PredictionPipelineRun), err
}
