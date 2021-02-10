/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by client-gen. DO NOT EDIT.

package v1alpha1

import (
	"time"

	scheme "github.com/metaprov/modeld-api/pkg/apis/gen/inference/clientset/versioned/scheme"
	v1alpha1 "github.com/metaprov/modeld-api/pkg/apis/inference/v1alpha1"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	types "k8s.io/apimachinery/pkg/types"
	watch "k8s.io/apimachinery/pkg/watch"
	rest "k8s.io/client-go/rest"
)

// PredictorsGetter has a method to return a PredictorInterface.
// A group's client should implement this interface.
type PredictorsGetter interface {
	Predictors(namespace string) PredictorInterface
}

// PredictorInterface has methods to work with Predictor resources.
type PredictorInterface interface {
	Create(*v1alpha1.Predictor) (*v1alpha1.Predictor, error)
	Update(*v1alpha1.Predictor) (*v1alpha1.Predictor, error)
	UpdateStatus(*v1alpha1.Predictor) (*v1alpha1.Predictor, error)
	Delete(name string, options *v1.DeleteOptions) error
	DeleteCollection(options *v1.DeleteOptions, listOptions v1.ListOptions) error
	Get(name string, options v1.GetOptions) (*v1alpha1.Predictor, error)
	List(opts v1.ListOptions) (*v1alpha1.PredictorList, error)
	Watch(opts v1.ListOptions) (watch.Interface, error)
	Patch(name string, pt types.PatchType, data []byte, subresources ...string) (result *v1alpha1.Predictor, err error)
	PredictorExpansion
}

// predictors implements PredictorInterface
type predictors struct {
	client rest.Interface
	ns     string
}

// newPredictors returns a Predictors
func newPredictors(c *InferenceV1alpha1Client, namespace string) *predictors {
	return &predictors{
		client: c.RESTClient(),
		ns:     namespace,
	}
}

// Get takes name of the predictor, and returns the corresponding predictor object, and an error if there is any.
func (c *predictors) Get(name string, options v1.GetOptions) (result *v1alpha1.Predictor, err error) {
	result = &v1alpha1.Predictor{}
	err = c.client.Get().
		Namespace(c.ns).
		Resource("predictors").
		Name(name).
		VersionedParams(&options, scheme.ParameterCodec).
		Do().
		Into(result)
	return
}

// List takes label and field selectors, and returns the list of Predictors that match those selectors.
func (c *predictors) List(opts v1.ListOptions) (result *v1alpha1.PredictorList, err error) {
	var timeout time.Duration
	if opts.TimeoutSeconds != nil {
		timeout = time.Duration(*opts.TimeoutSeconds) * time.Second
	}
	result = &v1alpha1.PredictorList{}
	err = c.client.Get().
		Namespace(c.ns).
		Resource("predictors").
		VersionedParams(&opts, scheme.ParameterCodec).
		Timeout(timeout).
		Do().
		Into(result)
	return
}

// Watch returns a watch.Interface that watches the requested predictors.
func (c *predictors) Watch(opts v1.ListOptions) (watch.Interface, error) {
	var timeout time.Duration
	if opts.TimeoutSeconds != nil {
		timeout = time.Duration(*opts.TimeoutSeconds) * time.Second
	}
	opts.Watch = true
	return c.client.Get().
		Namespace(c.ns).
		Resource("predictors").
		VersionedParams(&opts, scheme.ParameterCodec).
		Timeout(timeout).
		Watch()
}

// Create takes the representation of a predictor and creates it.  Returns the server's representation of the predictor, and an error, if there is any.
func (c *predictors) Create(predictor *v1alpha1.Predictor) (result *v1alpha1.Predictor, err error) {
	result = &v1alpha1.Predictor{}
	err = c.client.Post().
		Namespace(c.ns).
		Resource("predictors").
		Body(predictor).
		Do().
		Into(result)
	return
}

// Update takes the representation of a predictor and updates it. Returns the server's representation of the predictor, and an error, if there is any.
func (c *predictors) Update(predictor *v1alpha1.Predictor) (result *v1alpha1.Predictor, err error) {
	result = &v1alpha1.Predictor{}
	err = c.client.Put().
		Namespace(c.ns).
		Resource("predictors").
		Name(predictor.Name).
		Body(predictor).
		Do().
		Into(result)
	return
}

// UpdateStatus was generated because the type contains a Status member.
// Add a +genclient:noStatus comment above the type to avoid generating UpdateStatus().

func (c *predictors) UpdateStatus(predictor *v1alpha1.Predictor) (result *v1alpha1.Predictor, err error) {
	result = &v1alpha1.Predictor{}
	err = c.client.Put().
		Namespace(c.ns).
		Resource("predictors").
		Name(predictor.Name).
		SubResource("status").
		Body(predictor).
		Do().
		Into(result)
	return
}

// Delete takes name of the predictor and deletes it. Returns an error if one occurs.
func (c *predictors) Delete(name string, options *v1.DeleteOptions) error {
	return c.client.Delete().
		Namespace(c.ns).
		Resource("predictors").
		Name(name).
		Body(options).
		Do().
		Error()
}

// DeleteCollection deletes a collection of objects.
func (c *predictors) DeleteCollection(options *v1.DeleteOptions, listOptions v1.ListOptions) error {
	var timeout time.Duration
	if listOptions.TimeoutSeconds != nil {
		timeout = time.Duration(*listOptions.TimeoutSeconds) * time.Second
	}
	return c.client.Delete().
		Namespace(c.ns).
		Resource("predictors").
		VersionedParams(&listOptions, scheme.ParameterCodec).
		Timeout(timeout).
		Body(options).
		Do().
		Error()
}

// Patch applies the patch and returns the patched predictor.
func (c *predictors) Patch(name string, pt types.PatchType, data []byte, subresources ...string) (result *v1alpha1.Predictor, err error) {
	result = &v1alpha1.Predictor{}
	err = c.client.Patch(pt).
		Namespace(c.ns).
		Resource("predictors").
		SubResource(subresources...).
		Name(name).
		Body(data).
		Do().
		Into(result)
	return
}
