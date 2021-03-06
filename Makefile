.PHONY: generate-proto
generate-proto:
	cd hack && ./generate-proto.sh

.PHONY: generate-go
generate-go:
	hack/generate-go.sh

.PHONY: update-codegen
update-codegen:
	hack/update-codegen.sh

.PHONY: generate-gateway
generate-gateway:
	hack/generate-gw.sh

.PHONY: generate-swagger
generate-swagger:
	hack/generate-swagger.sh

.PHONY: generate-api-docs
generate-api-docs:
	hack/generate-api-docs.sh

.PHONY: generate-js
generate-js:
	hack/generate-js.sh

.PHONY: generate-py
generate-py:
	hack/generate-py.sh

.PHONY: generate-java
generate-java:
	hack/generate-java.sh

.PHONY: generate-csharp
generate-csharp:
	hack/generate-csharp.sh

release: build


.PHONY: test
test:
	go test ./pkg/... $(COVERAGE_OPTS)
	go test ./tests/...

.PHONY: lint
lint:
	$(GOLANGCI_LINT) run --timeout=20m	

.PHONY: modtidy
modtidy:
	go mod tidy


.PHONY: generate-deepcopy
generate-deepcopy:
	$(CONTROLLER_GEN) object:headerFile=./hack/custom-boilerplate.go.txt paths=./pkg/apis/...

.PHONY: generate-crd
generate-crd:
	$(CONTROLLER_GEN) crd:trivialVersions=true,allowDangerousTypes=true,crdVersions=v1 paths=./pkg/apis/catalog/v1alpha1 output:crd:artifacts:config=manifests/base/crd
	$(CONTROLLER_GEN) crd:trivialVersions=true,allowDangerousTypes=true,crdVersions=v1 paths=./pkg/apis/infra/v1alpha1 output:crd:artifacts:config=manifests/base/crd
	$(CONTROLLER_GEN) crd:trivialVersions=true,allowDangerousTypes=true,crdVersions=v1 paths=./pkg/apis/data/v1alpha1 output:crd:artifacts:config=manifests/base/crd
	$(CONTROLLER_GEN) crd:trivialVersions=true,allowDangerousTypes=true,crdVersions=v1 paths=./pkg/apis/training/v1alpha1 output:crd:artifacts:config=manifests/base/crd
	$(CONTROLLER_GEN) crd:trivialVersions=true,allowDangerousTypes=true,crdVersions=v1 paths=./pkg/apis/inference/v1alpha1 output:crd:artifacts:config=manifests/base/crd
	$(CONTROLLER_GEN) crd:trivialVersions=true,allowDangerousTypes=true,crdVersions=v1 paths=./pkg/apis/team/v1alpha1 output:crd:artifacts:config=manifests/base/crd


.PHONY: controller-gen
controller-gen:
ifeq (, $(shell which controller-gen))
	@{ \
	set -e ;\
	CONTROLLER_GEN_TMP_DIR=$$(mktemp -d) ;\
	cd $$CONTROLLER_GEN_TMP_DIR ;\
	go mod init tmp ;\
	go get sigs.k8s.io/controller-tools/cmd/controller-gen@v0.6.0 ;\
	rm -rf $$CONTROLLER_GEN_TMP_DIR ;\
	}
CONTROLLER_GEN=$(GOBIN)/controller-gen
else
CONTROLLER_GEN=$(shell which controller-gen)
endif	


.PHONY: install-gen
install-gen: 
	go install k8s.io/code-generator/cmd/deepcopy-gen	
	go install k8s.io/code-generator/cmd/client-gen      
	go install k8s.io/code-generator/cmd/deepcopy-gen   
	go install k8s.io/code-generator/cmd/go-to-protobuf  
	go install k8s.io/code-generator/cmd/informer-gen  
	go install k8s.io/code-generator/cmd/openapi-gen   
	go install k8s.io/code-generator/cmd/set-gen
	go install k8s.io/code-generator/cmd/conversion-gen  
	go install k8s.io/code-generator/cmd/defaulter-gen  
	go install k8s.io/code-generator/cmd/import-boss     
	go install k8s.io/code-generator/cmd/lister-gen    
	go install k8s.io/code-generator/cmd/register-gen
	GO111MODULE=on go get sigs.k8s.io/controller-tools/cmd/controller-gen@v0.6.0 
	

.PHONY: generate
generate: install-gen generate-proto generate-go generate-js generate-py generate-crd generate-deepcopy 


.PHONY: install-crd
install-crd:
	kustomize build ./manifests/base/crd | kubectl replace --force --save-config=false -f -	


generated-reference-docs: update-licenses
	SKIP_CHANGELOG_GENERATION=true go run codegen/docs/docsgen.go


.PHONY: update-licenses
update-licenses:
	# check for GPL licenses, if there are any, this will fail
	cd hack/oss; GO111MODULE=on go run main.go osagen -c "GNU General Public License v2.0,GNU General Public License v3.0,GNU Lesser General Public License v2.1,GNU Lesser General Public License v3.0,GNU Affero General Public License v3.0"
	cd hack/oss; GO111MODULE=on go run main.go osagen -s "Mozilla Public License 2.0,GNU General Public License v2.0,GNU General Public License v3.0,GNU Lesser General Public License v2.1,GNU Lesser General Public License v3.0,GNU Affero General Public License v3.0"> ../../docs/content/static/content/osa_provided.md
	cd hack/oss; GO111MODULE=on go run main.go osagen -i "Mozilla Public License 2.0,GNU General Public License v2.0,GNU General Public License v3.0,GNU Lesser General Public License v2.1,GNU Lesser General Public License v3.0,GNU Affero General Public License v3.0"> ../../docs/content/static/content/osa_included.md


.PHONY: install-protoc
install-protoc:	 
	 wget https://github.com/protocolbuffers/protobuf/releases/download/v3.15.5/protoc-3.15.5-linux-x86_64.zip 
	 mv protoc-3.15.5-linux-x86_64.zip /tmp/protoc-3.15.5-linux-x86_64.zip
	 unzip /tmp/protoc-3.15.5-linux-x86_64.zip -d $(HOME)/.local
	 export PATH="$PATH:$HOME/.local/bin"


.PHONY: set-default
set-default:
	kubectl config set-context --current --namespace=iris-product
