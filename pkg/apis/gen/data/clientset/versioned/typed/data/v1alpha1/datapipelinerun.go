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

// DataPipelineRunsGetter has a method to return a DataPipelineRunInterface.
// A group's client should implement this interface.
type DataPipelineRunsGetter interface {
	DataPipelineRuns(namespace string) DataPipelineRunInterface
}

// DataPipelineRunInterface has methods to work with DataPipelineRun resources.
type DataPipelineRunInterface interface {
	Create(*v1alpha1.DataPipelineRun) (*v1alpha1.DataPipelineRun, error)
	Update(*v1alpha1.DataPipelineRun) (*v1alpha1.DataPipelineRun, error)
	UpdateStatus(*v1alpha1.DataPipelineRun) (*v1alpha1.DataPipelineRun, error)
	Delete(name string, options *v1.DeleteOptions) error
	DeleteCollection(options *v1.DeleteOptions, listOptions v1.ListOptions) error
	Get(name string, options v1.GetOptions) (*v1alpha1.DataPipelineRun, error)
	List(opts v1.ListOptions) (*v1alpha1.DataPipelineRunList, error)
	Watch(opts v1.ListOptions) (watch.Interface, error)
	Patch(name string, pt types.PatchType, data []byte, subresources ...string) (result *v1alpha1.DataPipelineRun, err error)
	DataPipelineRunExpansion
}

// dataPipelineRuns implements DataPipelineRunInterface
type dataPipelineRuns struct {
	client rest.Interface
	ns     string
}

// newDataPipelineRuns returns a DataPipelineRuns
func newDataPipelineRuns(c *DataV1alpha1Client, namespace string) *dataPipelineRuns {
	return &dataPipelineRuns{
		client: c.RESTClient(),
		ns:     namespace,
	}
}

// Get takes name of the dataPipelineRun, and returns the corresponding dataPipelineRun object, and an error if there is any.
func (c *dataPipelineRuns) Get(name string, options v1.GetOptions) (result *v1alpha1.DataPipelineRun, err error) {
	result = &v1alpha1.DataPipelineRun{}
	err = c.client.Get().
		Namespace(c.ns).
		Resource("datapipelineruns").
		Name(name).
		VersionedParams(&options, scheme.ParameterCodec).
		Do().
		Into(result)
	return
}

// List takes label and field selectors, and returns the list of DataPipelineRuns that match those selectors.
func (c *dataPipelineRuns) List(opts v1.ListOptions) (result *v1alpha1.DataPipelineRunList, err error) {
	var timeout time.Duration
	if opts.TimeoutSeconds != nil {
		timeout = time.Duration(*opts.TimeoutSeconds) * time.Second
	}
	result = &v1alpha1.DataPipelineRunList{}
	err = c.client.Get().
		Namespace(c.ns).
		Resource("datapipelineruns").
		VersionedParams(&opts, scheme.ParameterCodec).
		Timeout(timeout).
		Do().
		Into(result)
	return
}

// Watch returns a watch.Interface that watches the requested dataPipelineRuns.
func (c *dataPipelineRuns) Watch(opts v1.ListOptions) (watch.Interface, error) {
	var timeout time.Duration
	if opts.TimeoutSeconds != nil {
		timeout = time.Duration(*opts.TimeoutSeconds) * time.Second
	}
	opts.Watch = true
	return c.client.Get().
		Namespace(c.ns).
		Resource("datapipelineruns").
		VersionedParams(&opts, scheme.ParameterCodec).
		Timeout(timeout).
		Watch()
}

// Create takes the representation of a dataPipelineRun and creates it.  Returns the server's representation of the dataPipelineRun, and an error, if there is any.
func (c *dataPipelineRuns) Create(dataPipelineRun *v1alpha1.DataPipelineRun) (result *v1alpha1.DataPipelineRun, err error) {
	result = &v1alpha1.DataPipelineRun{}
	err = c.client.Post().
		Namespace(c.ns).
		Resource("datapipelineruns").
		Body(dataPipelineRun).
		Do().
		Into(result)
	return
}

// Update takes the representation of a dataPipelineRun and updates it. Returns the server's representation of the dataPipelineRun, and an error, if there is any.
func (c *dataPipelineRuns) Update(dataPipelineRun *v1alpha1.DataPipelineRun) (result *v1alpha1.DataPipelineRun, err error) {
	result = &v1alpha1.DataPipelineRun{}
	err = c.client.Put().
		Namespace(c.ns).
		Resource("datapipelineruns").
		Name(dataPipelineRun.Name).
		Body(dataPipelineRun).
		Do().
		Into(result)
	return
}

// UpdateStatus was generated because the type contains a Status member.
// Add a +genclient:noStatus comment above the type to avoid generating UpdateStatus().

func (c *dataPipelineRuns) UpdateStatus(dataPipelineRun *v1alpha1.DataPipelineRun) (result *v1alpha1.DataPipelineRun, err error) {
	result = &v1alpha1.DataPipelineRun{}
	err = c.client.Put().
		Namespace(c.ns).
		Resource("datapipelineruns").
		Name(dataPipelineRun.Name).
		SubResource("status").
		Body(dataPipelineRun).
		Do().
		Into(result)
	return
}

// Delete takes name of the dataPipelineRun and deletes it. Returns an error if one occurs.
func (c *dataPipelineRuns) Delete(name string, options *v1.DeleteOptions) error {
	return c.client.Delete().
		Namespace(c.ns).
		Resource("datapipelineruns").
		Name(name).
		Body(options).
		Do().
		Error()
}

// DeleteCollection deletes a collection of objects.
func (c *dataPipelineRuns) DeleteCollection(options *v1.DeleteOptions, listOptions v1.ListOptions) error {
	var timeout time.Duration
	if listOptions.TimeoutSeconds != nil {
		timeout = time.Duration(*listOptions.TimeoutSeconds) * time.Second
	}
	return c.client.Delete().
		Namespace(c.ns).
		Resource("datapipelineruns").
		VersionedParams(&listOptions, scheme.ParameterCodec).
		Timeout(timeout).
		Body(options).
		Do().
		Error()
}

// Patch applies the patch and returns the patched dataPipelineRun.
func (c *dataPipelineRuns) Patch(name string, pt types.PatchType, data []byte, subresources ...string) (result *v1alpha1.DataPipelineRun, err error) {
	result = &v1alpha1.DataPipelineRun{}
	err = c.client.Patch(pt).
		Namespace(c.ns).
		Resource("datapipelineruns").
		SubResource(subresources...).
		Name(name).
		Body(data).
		Do().
		Into(result)
	return
}
