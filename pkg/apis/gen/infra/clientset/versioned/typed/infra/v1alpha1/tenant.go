/**
*
* Copyright (C) 2017 modeld authors
* For license information, see LICENSE.txt
 */
// Code generated by client-gen. DO NOT EDIT.

package v1alpha1

import (
	"time"

	scheme "github.com/metaprov/modeld-api/pkg/apis/gen/infra/clientset/versioned/scheme"
	v1alpha1 "github.com/metaprov/modeld-api/pkg/apis/infra/v1alpha1"
	v1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	types "k8s.io/apimachinery/pkg/types"
	watch "k8s.io/apimachinery/pkg/watch"
	rest "k8s.io/client-go/rest"
)

// TenantsGetter has a method to return a TenantInterface.
// A group's client should implement this interface.
type TenantsGetter interface {
	Tenants(namespace string) TenantInterface
}

// TenantInterface has methods to work with Tenant resources.
type TenantInterface interface {
	Create(*v1alpha1.Tenant) (*v1alpha1.Tenant, error)
	Update(*v1alpha1.Tenant) (*v1alpha1.Tenant, error)
	UpdateStatus(*v1alpha1.Tenant) (*v1alpha1.Tenant, error)
	Delete(name string, options *v1.DeleteOptions) error
	DeleteCollection(options *v1.DeleteOptions, listOptions v1.ListOptions) error
	Get(name string, options v1.GetOptions) (*v1alpha1.Tenant, error)
	List(opts v1.ListOptions) (*v1alpha1.TenantList, error)
	Watch(opts v1.ListOptions) (watch.Interface, error)
	Patch(name string, pt types.PatchType, data []byte, subresources ...string) (result *v1alpha1.Tenant, err error)
	TenantExpansion
}

// tenants implements TenantInterface
type tenants struct {
	client rest.Interface
	ns     string
}

// newTenants returns a Tenants
func newTenants(c *InfraV1alpha1Client, namespace string) *tenants {
	return &tenants{
		client: c.RESTClient(),
		ns:     namespace,
	}
}

// Get takes name of the tenant, and returns the corresponding tenant object, and an error if there is any.
func (c *tenants) Get(name string, options v1.GetOptions) (result *v1alpha1.Tenant, err error) {
	result = &v1alpha1.Tenant{}
	err = c.client.Get().
		Namespace(c.ns).
		Resource("tenants").
		Name(name).
		VersionedParams(&options, scheme.ParameterCodec).
		Do().
		Into(result)
	return
}

// List takes label and field selectors, and returns the list of Tenants that match those selectors.
func (c *tenants) List(opts v1.ListOptions) (result *v1alpha1.TenantList, err error) {
	var timeout time.Duration
	if opts.TimeoutSeconds != nil {
		timeout = time.Duration(*opts.TimeoutSeconds) * time.Second
	}
	result = &v1alpha1.TenantList{}
	err = c.client.Get().
		Namespace(c.ns).
		Resource("tenants").
		VersionedParams(&opts, scheme.ParameterCodec).
		Timeout(timeout).
		Do().
		Into(result)
	return
}

// Watch returns a watch.Interface that watches the requested tenants.
func (c *tenants) Watch(opts v1.ListOptions) (watch.Interface, error) {
	var timeout time.Duration
	if opts.TimeoutSeconds != nil {
		timeout = time.Duration(*opts.TimeoutSeconds) * time.Second
	}
	opts.Watch = true
	return c.client.Get().
		Namespace(c.ns).
		Resource("tenants").
		VersionedParams(&opts, scheme.ParameterCodec).
		Timeout(timeout).
		Watch()
}

// Create takes the representation of a tenant and creates it.  Returns the server's representation of the tenant, and an error, if there is any.
func (c *tenants) Create(tenant *v1alpha1.Tenant) (result *v1alpha1.Tenant, err error) {
	result = &v1alpha1.Tenant{}
	err = c.client.Post().
		Namespace(c.ns).
		Resource("tenants").
		Body(tenant).
		Do().
		Into(result)
	return
}

// Update takes the representation of a tenant and updates it. Returns the server's representation of the tenant, and an error, if there is any.
func (c *tenants) Update(tenant *v1alpha1.Tenant) (result *v1alpha1.Tenant, err error) {
	result = &v1alpha1.Tenant{}
	err = c.client.Put().
		Namespace(c.ns).
		Resource("tenants").
		Name(tenant.Name).
		Body(tenant).
		Do().
		Into(result)
	return
}

// UpdateStatus was generated because the type contains a Status member.
// Add a +genclient:noStatus comment above the type to avoid generating UpdateStatus().

func (c *tenants) UpdateStatus(tenant *v1alpha1.Tenant) (result *v1alpha1.Tenant, err error) {
	result = &v1alpha1.Tenant{}
	err = c.client.Put().
		Namespace(c.ns).
		Resource("tenants").
		Name(tenant.Name).
		SubResource("status").
		Body(tenant).
		Do().
		Into(result)
	return
}

// Delete takes name of the tenant and deletes it. Returns an error if one occurs.
func (c *tenants) Delete(name string, options *v1.DeleteOptions) error {
	return c.client.Delete().
		Namespace(c.ns).
		Resource("tenants").
		Name(name).
		Body(options).
		Do().
		Error()
}

// DeleteCollection deletes a collection of objects.
func (c *tenants) DeleteCollection(options *v1.DeleteOptions, listOptions v1.ListOptions) error {
	var timeout time.Duration
	if listOptions.TimeoutSeconds != nil {
		timeout = time.Duration(*listOptions.TimeoutSeconds) * time.Second
	}
	return c.client.Delete().
		Namespace(c.ns).
		Resource("tenants").
		VersionedParams(&listOptions, scheme.ParameterCodec).
		Timeout(timeout).
		Body(options).
		Do().
		Error()
}

// Patch applies the patch and returns the patched tenant.
func (c *tenants) Patch(name string, pt types.PatchType, data []byte, subresources ...string) (result *v1alpha1.Tenant, err error) {
	result = &v1alpha1.Tenant{}
	err = c.client.Patch(pt).
		Namespace(c.ns).
		Resource("tenants").
		SubResource(subresources...).
		Name(name).
		Body(data).
		Do().
		Into(result)
	return
}
