/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by client-gen. DO NOT EDIT.

package v1alpha1

import (
	"time"

	v1alpha1 "github.com/metaprov/modeld-api/pkg/apis/data/v1alpha1"
	scheme "github.com/metaprov/modeld-api/pkg/apis/gen/data/clientset/versioned/scheme"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	types "k8s.io/apimachinery/pkg/types"
	watch "k8s.io/apimachinery/pkg/watch"
	rest "k8s.io/client-go/rest"
)

// DataPipelinesGetter has a method to return a DataPipelineInterface.
// A group's client should implement this interface.
type DataPipelinesGetter interface {
	DataPipelines(namespace string) DataPipelineInterface
}

// DataPipelineInterface has methods to work with DataPipeline resources.
type DataPipelineInterface interface {
	Create(*v1alpha1.DataPipeline) (*v1alpha1.DataPipeline, error)
	Update(*v1alpha1.DataPipeline) (*v1alpha1.DataPipeline, error)
	Delete(name string, options *v1.DeleteOptions) error
	DeleteCollection(options *v1.DeleteOptions, listOptions v1.ListOptions) error
	Get(name string, options v1.GetOptions) (*v1alpha1.DataPipeline, error)
	List(opts v1.ListOptions) (*v1alpha1.DataPipelineList, error)
	Watch(opts v1.ListOptions) (watch.Interface, error)
	Patch(name string, pt types.PatchType, data []byte, subresources ...string) (result *v1alpha1.DataPipeline, err error)
	DataPipelineExpansion
}

// dataPipelines implements DataPipelineInterface
type dataPipelines struct {
	client rest.Interface
	ns     string
}

// newDataPipelines returns a DataPipelines
func newDataPipelines(c *DataV1alpha1Client, namespace string) *dataPipelines {
	return &dataPipelines{
		client: c.RESTClient(),
		ns:     namespace,
	}
}

// Get takes name of the dataPipeline, and returns the corresponding dataPipeline object, and an error if there is any.
func (c *dataPipelines) Get(name string, options v1.GetOptions) (result *v1alpha1.DataPipeline, err error) {
	result = &v1alpha1.DataPipeline{}
	err = c.client.Get().
		Namespace(c.ns).
		Resource("datapipelines").
		Name(name).
		VersionedParams(&options, scheme.ParameterCodec).
		Do().
		Into(result)
	return
}

// List takes label and field selectors, and returns the list of DataPipelines that match those selectors.
func (c *dataPipelines) List(opts v1.ListOptions) (result *v1alpha1.DataPipelineList, err error) {
	var timeout time.Duration
	if opts.TimeoutSeconds != nil {
		timeout = time.Duration(*opts.TimeoutSeconds) * time.Second
	}
	result = &v1alpha1.DataPipelineList{}
	err = c.client.Get().
		Namespace(c.ns).
		Resource("datapipelines").
		VersionedParams(&opts, scheme.ParameterCodec).
		Timeout(timeout).
		Do().
		Into(result)
	return
}

// Watch returns a watch.Interface that watches the requested dataPipelines.
func (c *dataPipelines) Watch(opts v1.ListOptions) (watch.Interface, error) {
	var timeout time.Duration
	if opts.TimeoutSeconds != nil {
		timeout = time.Duration(*opts.TimeoutSeconds) * time.Second
	}
	opts.Watch = true
	return c.client.Get().
		Namespace(c.ns).
		Resource("datapipelines").
		VersionedParams(&opts, scheme.ParameterCodec).
		Timeout(timeout).
		Watch()
}

// Create takes the representation of a dataPipeline and creates it.  Returns the server's representation of the dataPipeline, and an error, if there is any.
func (c *dataPipelines) Create(dataPipeline *v1alpha1.DataPipeline) (result *v1alpha1.DataPipeline, err error) {
	result = &v1alpha1.DataPipeline{}
	err = c.client.Post().
		Namespace(c.ns).
		Resource("datapipelines").
		Body(dataPipeline).
		Do().
		Into(result)
	return
}

// Update takes the representation of a dataPipeline and updates it. Returns the server's representation of the dataPipeline, and an error, if there is any.
func (c *dataPipelines) Update(dataPipeline *v1alpha1.DataPipeline) (result *v1alpha1.DataPipeline, err error) {
	result = &v1alpha1.DataPipeline{}
	err = c.client.Put().
		Namespace(c.ns).
		Resource("datapipelines").
		Name(dataPipeline.Name).
		Body(dataPipeline).
		Do().
		Into(result)
	return
}

// Delete takes name of the dataPipeline and deletes it. Returns an error if one occurs.
func (c *dataPipelines) Delete(name string, options *v1.DeleteOptions) error {
	return c.client.Delete().
		Namespace(c.ns).
		Resource("datapipelines").
		Name(name).
		Body(options).
		Do().
		Error()
}

// DeleteCollection deletes a collection of objects.
func (c *dataPipelines) DeleteCollection(options *v1.DeleteOptions, listOptions v1.ListOptions) error {
	var timeout time.Duration
	if listOptions.TimeoutSeconds != nil {
		timeout = time.Duration(*listOptions.TimeoutSeconds) * time.Second
	}
	return c.client.Delete().
		Namespace(c.ns).
		Resource("datapipelines").
		VersionedParams(&listOptions, scheme.ParameterCodec).
		Timeout(timeout).
		Body(options).
		Do().
		Error()
}

// Patch applies the patch and returns the patched dataPipeline.
func (c *dataPipelines) Patch(name string, pt types.PatchType, data []byte, subresources ...string) (result *v1alpha1.DataPipeline, err error) {
	result = &v1alpha1.DataPipeline{}
	err = c.client.Patch(pt).
		Namespace(c.ns).
		Resource("datapipelines").
		SubResource(subresources...).
		Name(name).
		Body(data).
		Do().
		Into(result)
	return
}
