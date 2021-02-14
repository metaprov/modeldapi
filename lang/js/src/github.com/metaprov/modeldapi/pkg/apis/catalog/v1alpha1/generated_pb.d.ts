import * as jspb from 'google-protobuf'

import * as k8s_io_api_core_v1_generated_pb from '../../../../../../../k8s.io/api/core/v1/generated_pb';
import * as k8s_io_api_rbac_v1_generated_pb from '../../../../../../../k8s.io/api/rbac/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_api_resource_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/api/resource/generated_pb';
import * as k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/apis/meta/v1/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/generated_pb';
import * as k8s_io_apimachinery_pkg_runtime_schema_generated_pb from '../../../../../../../k8s.io/apimachinery/pkg/runtime/schema/generated_pb';


export class Algorithm extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Algorithm;
  hasMetadata(): boolean;
  clearMetadata(): Algorithm;

  getSpec(): AlgorithmSpec | undefined;
  setSpec(value?: AlgorithmSpec): Algorithm;
  hasSpec(): boolean;
  clearSpec(): Algorithm;

  getStatus(): AlgorithmStatus | undefined;
  setStatus(value?: AlgorithmStatus): Algorithm;
  hasStatus(): boolean;
  clearStatus(): Algorithm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Algorithm.AsObject;
  static toObject(includeInstance: boolean, msg: Algorithm): Algorithm.AsObject;
  static serializeBinaryToWriter(message: Algorithm, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Algorithm;
  static deserializeBinaryFromReader(message: Algorithm, reader: jspb.BinaryReader): Algorithm;
}

export namespace Algorithm {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: AlgorithmSpec.AsObject,
    status?: AlgorithmStatus.AsObject,
  }
}

export class AlgorithmList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): AlgorithmList;
  hasMetadata(): boolean;
  clearMetadata(): AlgorithmList;

  getItemsList(): Array<Algorithm>;
  setItemsList(value: Array<Algorithm>): AlgorithmList;
  clearItemsList(): AlgorithmList;
  addItems(value?: Algorithm, index?: number): Algorithm;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlgorithmList.AsObject;
  static toObject(includeInstance: boolean, msg: AlgorithmList): AlgorithmList.AsObject;
  static serializeBinaryToWriter(message: AlgorithmList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlgorithmList;
  static deserializeBinaryFromReader(message: AlgorithmList, reader: jspb.BinaryReader): AlgorithmList;
}

export namespace AlgorithmList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Algorithm.AsObject>,
  }
}

export class AlgorithmSpec extends jspb.Message {
  getFrameworkname(): string;
  setFrameworkname(value: string): AlgorithmSpec;

  getDescription(): string;
  setDescription(value: string): AlgorithmSpec;

  getUrl(): string;
  setUrl(value: string): AlgorithmSpec;

  getTask(): string;
  setTask(value: string): AlgorithmSpec;

  getSparse(): boolean;
  setSparse(value: boolean): AlgorithmSpec;

  getIntegerparametersList(): Array<IntParameter>;
  setIntegerparametersList(value: Array<IntParameter>): AlgorithmSpec;
  clearIntegerparametersList(): AlgorithmSpec;
  addIntegerparameters(value?: IntParameter, index?: number): IntParameter;

  getFloatparametersList(): Array<FloatParameter>;
  setFloatparametersList(value: Array<FloatParameter>): AlgorithmSpec;
  clearFloatparametersList(): AlgorithmSpec;
  addFloatparameters(value?: FloatParameter, index?: number): FloatParameter;

  getCategoricalparametersList(): Array<CategoricalParameter>;
  setCategoricalparametersList(value: Array<CategoricalParameter>): AlgorithmSpec;
  clearCategoricalparametersList(): AlgorithmSpec;
  addCategoricalparameters(value?: CategoricalParameter, index?: number): CategoricalParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlgorithmSpec.AsObject;
  static toObject(includeInstance: boolean, msg: AlgorithmSpec): AlgorithmSpec.AsObject;
  static serializeBinaryToWriter(message: AlgorithmSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlgorithmSpec;
  static deserializeBinaryFromReader(message: AlgorithmSpec, reader: jspb.BinaryReader): AlgorithmSpec;
}

export namespace AlgorithmSpec {
  export type AsObject = {
    frameworkname: string,
    description: string,
    url: string,
    task: string,
    sparse: boolean,
    integerparametersList: Array<IntParameter.AsObject>,
    floatparametersList: Array<FloatParameter.AsObject>,
    categoricalparametersList: Array<CategoricalParameter.AsObject>,
  }
}

export class AlgorithmStatus extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AlgorithmStatus.AsObject;
  static toObject(includeInstance: boolean, msg: AlgorithmStatus): AlgorithmStatus.AsObject;
  static serializeBinaryToWriter(message: AlgorithmStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AlgorithmStatus;
  static deserializeBinaryFromReader(message: AlgorithmStatus, reader: jspb.BinaryReader): AlgorithmStatus;
}

export namespace AlgorithmStatus {
  export type AsObject = {
  }
}

export class CategoricalParameter extends jspb.Message {
  getName(): string;
  setName(value: string): CategoricalParameter;

  getDefaultvalue(): string;
  setDefaultvalue(value: string): CategoricalParameter;

  getEnumsList(): Array<string>;
  setEnumsList(value: Array<string>): CategoricalParameter;
  clearEnumsList(): CategoricalParameter;
  addEnums(value: string, index?: number): CategoricalParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoricalParameter.AsObject;
  static toObject(includeInstance: boolean, msg: CategoricalParameter): CategoricalParameter.AsObject;
  static serializeBinaryToWriter(message: CategoricalParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoricalParameter;
  static deserializeBinaryFromReader(message: CategoricalParameter, reader: jspb.BinaryReader): CategoricalParameter;
}

export namespace CategoricalParameter {
  export type AsObject = {
    name: string,
    defaultvalue: string,
    enumsList: Array<string>,
  }
}

export class Cloud extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): Cloud;
  hasMetadata(): boolean;
  clearMetadata(): Cloud;

  getSpec(): CloudSpec | undefined;
  setSpec(value?: CloudSpec): Cloud;
  hasSpec(): boolean;
  clearSpec(): Cloud;

  getStatus(): CloudStatus | undefined;
  setStatus(value?: CloudStatus): Cloud;
  hasStatus(): boolean;
  clearStatus(): Cloud;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Cloud.AsObject;
  static toObject(includeInstance: boolean, msg: Cloud): Cloud.AsObject;
  static serializeBinaryToWriter(message: Cloud, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Cloud;
  static deserializeBinaryFromReader(message: Cloud, reader: jspb.BinaryReader): Cloud;
}

export namespace Cloud {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: CloudSpec.AsObject,
    status?: CloudStatus.AsObject,
  }
}

export class CloudList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): CloudList;
  hasMetadata(): boolean;
  clearMetadata(): CloudList;

  getItemsList(): Array<Cloud>;
  setItemsList(value: Array<Cloud>): CloudList;
  clearItemsList(): CloudList;
  addItems(value?: Cloud, index?: number): Cloud;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudList.AsObject;
  static toObject(includeInstance: boolean, msg: CloudList): CloudList.AsObject;
  static serializeBinaryToWriter(message: CloudList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudList;
  static deserializeBinaryFromReader(message: CloudList, reader: jspb.BinaryReader): CloudList;
}

export namespace CloudList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<Cloud.AsObject>,
  }
}

export class CloudSpec extends jspb.Message {
  getDefaultregionname(): string;
  setDefaultregionname(value: string): CloudSpec;

  getDefaultmachineclassname(): string;
  setDefaultmachineclassname(value: string): CloudSpec;

  getDefaultgpuclassname(): string;
  setDefaultgpuclassname(value: string): CloudSpec;

  getMachineclassesList(): Array<MachineClass>;
  setMachineclassesList(value: Array<MachineClass>): CloudSpec;
  clearMachineclassesList(): CloudSpec;
  addMachineclasses(value?: MachineClass, index?: number): MachineClass;

  getGpuclassesList(): Array<GpuClass>;
  setGpuclassesList(value: Array<GpuClass>): CloudSpec;
  clearGpuclassesList(): CloudSpec;
  addGpuclasses(value?: GpuClass, index?: number): GpuClass;

  getRegionsList(): Array<Region>;
  setRegionsList(value: Array<Region>): CloudSpec;
  clearRegionsList(): CloudSpec;
  addRegions(value?: Region, index?: number): Region;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudSpec.AsObject;
  static toObject(includeInstance: boolean, msg: CloudSpec): CloudSpec.AsObject;
  static serializeBinaryToWriter(message: CloudSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudSpec;
  static deserializeBinaryFromReader(message: CloudSpec, reader: jspb.BinaryReader): CloudSpec;
}

export namespace CloudSpec {
  export type AsObject = {
    defaultregionname: string,
    defaultmachineclassname: string,
    defaultgpuclassname: string,
    machineclassesList: Array<MachineClass.AsObject>,
    gpuclassesList: Array<GpuClass.AsObject>,
    regionsList: Array<Region.AsObject>,
  }
}

export class CloudStatus extends jspb.Message {
  getMachinecostsList(): Array<MachineClassCost>;
  setMachinecostsList(value: Array<MachineClassCost>): CloudStatus;
  clearMachinecostsList(): CloudStatus;
  addMachinecosts(value?: MachineClassCost, index?: number): MachineClassCost;

  getGpucostsList(): Array<GpuClassCost>;
  setGpucostsList(value: Array<GpuClassCost>): CloudStatus;
  clearGpucostsList(): CloudStatus;
  addGpucosts(value?: GpuClassCost, index?: number): GpuClassCost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CloudStatus.AsObject;
  static toObject(includeInstance: boolean, msg: CloudStatus): CloudStatus.AsObject;
  static serializeBinaryToWriter(message: CloudStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CloudStatus;
  static deserializeBinaryFromReader(message: CloudStatus, reader: jspb.BinaryReader): CloudStatus;
}

export namespace CloudStatus {
  export type AsObject = {
    machinecostsList: Array<MachineClassCost.AsObject>,
    gpucostsList: Array<GpuClassCost.AsObject>,
  }
}

export class CustomResourceError extends jspb.Message {
  getOccurredat(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time | undefined;
  setOccurredat(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time): CustomResourceError;
  hasOccurredat(): boolean;
  clearOccurredat(): CustomResourceError;

  getMessage(): string;
  setMessage(value: string): CustomResourceError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CustomResourceError.AsObject;
  static toObject(includeInstance: boolean, msg: CustomResourceError): CustomResourceError.AsObject;
  static serializeBinaryToWriter(message: CustomResourceError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CustomResourceError;
  static deserializeBinaryFromReader(message: CustomResourceError, reader: jspb.BinaryReader): CustomResourceError;
}

export namespace CustomResourceError {
  export type AsObject = {
    occurredat?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.Time.AsObject,
    message: string,
  }
}

export class DataCenter extends jspb.Message {
  getName(): string;
  setName(value: string): DataCenter;

  getCode(): string;
  setCode(value: string): DataCenter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DataCenter.AsObject;
  static toObject(includeInstance: boolean, msg: DataCenter): DataCenter.AsObject;
  static serializeBinaryToWriter(message: DataCenter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DataCenter;
  static deserializeBinaryFromReader(message: DataCenter, reader: jspb.BinaryReader): DataCenter;
}

export namespace DataCenter {
  export type AsObject = {
    name: string,
    code: string,
  }
}

export class FloatParameter extends jspb.Message {
  getName(): string;
  setName(value: string): FloatParameter;

  getMinimum(): number;
  setMinimum(value: number): FloatParameter;

  getMaximum(): number;
  setMaximum(value: number): FloatParameter;

  getDefaultvalue(): number;
  setDefaultvalue(value: number): FloatParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FloatParameter.AsObject;
  static toObject(includeInstance: boolean, msg: FloatParameter): FloatParameter.AsObject;
  static serializeBinaryToWriter(message: FloatParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FloatParameter;
  static deserializeBinaryFromReader(message: FloatParameter, reader: jspb.BinaryReader): FloatParameter;
}

export namespace FloatParameter {
  export type AsObject = {
    name: string,
    minimum: number,
    maximum: number,
    defaultvalue: number,
  }
}

export class GpuClass extends jspb.Message {
  getCloudname(): string;
  setCloudname(value: string): GpuClass;

  getRegionname(): string;
  setRegionname(value: string): GpuClass;

  getMem(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setMem(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): GpuClass;
  hasMem(): boolean;
  clearMem(): GpuClass;

  getVcpu(): number;
  setVcpu(value: number): GpuClass;

  getGpumem(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setGpumem(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): GpuClass;
  hasGpumem(): boolean;
  clearGpumem(): GpuClass;

  getStorage(): string;
  setStorage(value: string): GpuClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GpuClass.AsObject;
  static toObject(includeInstance: boolean, msg: GpuClass): GpuClass.AsObject;
  static serializeBinaryToWriter(message: GpuClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GpuClass;
  static deserializeBinaryFromReader(message: GpuClass, reader: jspb.BinaryReader): GpuClass;
}

export namespace GpuClass {
  export type AsObject = {
    cloudname: string,
    regionname: string,
    mem?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
    vcpu: number,
    gpumem?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
    storage: string,
  }
}

export class GpuClassCost extends jspb.Message {
  getRegion(): string;
  setRegion(value: string): GpuClassCost;

  getCostperminute(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setCostperminute(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): GpuClassCost;
  hasCostperminute(): boolean;
  clearCostperminute(): GpuClassCost;

  getCostspot(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setCostspot(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): GpuClassCost;
  hasCostspot(): boolean;
  clearCostspot(): GpuClassCost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GpuClassCost.AsObject;
  static toObject(includeInstance: boolean, msg: GpuClassCost): GpuClassCost.AsObject;
  static serializeBinaryToWriter(message: GpuClassCost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GpuClassCost;
  static deserializeBinaryFromReader(message: GpuClassCost, reader: jspb.BinaryReader): GpuClassCost;
}

export namespace GpuClassCost {
  export type AsObject = {
    region: string,
    costperminute?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
    costspot?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
  }
}

export class IntParameter extends jspb.Message {
  getName(): string;
  setName(value: string): IntParameter;

  getType(): string;
  setType(value: string): IntParameter;

  getMinimum(): number;
  setMinimum(value: number): IntParameter;

  getMaximum(): number;
  setMaximum(value: number): IntParameter;

  getDefaultvalue(): number;
  setDefaultvalue(value: number): IntParameter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntParameter.AsObject;
  static toObject(includeInstance: boolean, msg: IntParameter): IntParameter.AsObject;
  static serializeBinaryToWriter(message: IntParameter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntParameter;
  static deserializeBinaryFromReader(message: IntParameter, reader: jspb.BinaryReader): IntParameter;
}

export namespace IntParameter {
  export type AsObject = {
    name: string,
    type: string,
    minimum: number,
    maximum: number,
    defaultvalue: number,
  }
}

export class MLFramework extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): MLFramework;
  hasMetadata(): boolean;
  clearMetadata(): MLFramework;

  getSpec(): MLFrameworkSpec | undefined;
  setSpec(value?: MLFrameworkSpec): MLFramework;
  hasSpec(): boolean;
  clearSpec(): MLFramework;

  getStatus(): MLFrameworkStatus | undefined;
  setStatus(value?: MLFrameworkStatus): MLFramework;
  hasStatus(): boolean;
  clearStatus(): MLFramework;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MLFramework.AsObject;
  static toObject(includeInstance: boolean, msg: MLFramework): MLFramework.AsObject;
  static serializeBinaryToWriter(message: MLFramework, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MLFramework;
  static deserializeBinaryFromReader(message: MLFramework, reader: jspb.BinaryReader): MLFramework;
}

export namespace MLFramework {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: MLFrameworkSpec.AsObject,
    status?: MLFrameworkStatus.AsObject,
  }
}

export class MLFrameworkList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): MLFrameworkList;
  hasMetadata(): boolean;
  clearMetadata(): MLFrameworkList;

  getItemsList(): Array<MLFramework>;
  setItemsList(value: Array<MLFramework>): MLFrameworkList;
  clearItemsList(): MLFrameworkList;
  addItems(value?: MLFramework, index?: number): MLFramework;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MLFrameworkList.AsObject;
  static toObject(includeInstance: boolean, msg: MLFrameworkList): MLFrameworkList.AsObject;
  static serializeBinaryToWriter(message: MLFrameworkList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MLFrameworkList;
  static deserializeBinaryFromReader(message: MLFrameworkList, reader: jspb.BinaryReader): MLFrameworkList;
}

export namespace MLFrameworkList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<MLFramework.AsObject>,
  }
}

export class MLFrameworkSpec extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): MLFrameworkSpec;

  getDescription(): string;
  setDescription(value: string): MLFrameworkSpec;

  getVersion(): string;
  setVersion(value: string): MLFrameworkSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MLFrameworkSpec.AsObject;
  static toObject(includeInstance: boolean, msg: MLFrameworkSpec): MLFrameworkSpec.AsObject;
  static serializeBinaryToWriter(message: MLFrameworkSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MLFrameworkSpec;
  static deserializeBinaryFromReader(message: MLFrameworkSpec, reader: jspb.BinaryReader): MLFrameworkSpec;
}

export namespace MLFrameworkSpec {
  export type AsObject = {
    url: string,
    description: string,
    version: string,
  }
}

export class MLFrameworkStatus extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MLFrameworkStatus.AsObject;
  static toObject(includeInstance: boolean, msg: MLFrameworkStatus): MLFrameworkStatus.AsObject;
  static serializeBinaryToWriter(message: MLFrameworkStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MLFrameworkStatus;
  static deserializeBinaryFromReader(message: MLFrameworkStatus, reader: jspb.BinaryReader): MLFrameworkStatus;
}

export namespace MLFrameworkStatus {
  export type AsObject = {
  }
}

export class MachineClass extends jspb.Message {
  getCloudname(): string;
  setCloudname(value: string): MachineClass;

  getRegionname(): string;
  setRegionname(value: string): MachineClass;

  getMem(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setMem(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): MachineClass;
  hasMem(): boolean;
  clearMem(): MachineClass;

  getVcpu(): number;
  setVcpu(value: number): MachineClass;

  getStorage(): string;
  setStorage(value: string): MachineClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MachineClass.AsObject;
  static toObject(includeInstance: boolean, msg: MachineClass): MachineClass.AsObject;
  static serializeBinaryToWriter(message: MachineClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MachineClass;
  static deserializeBinaryFromReader(message: MachineClass, reader: jspb.BinaryReader): MachineClass;
}

export namespace MachineClass {
  export type AsObject = {
    cloudname: string,
    regionname: string,
    mem?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
    vcpu: number,
    storage: string,
  }
}

export class MachineClassCost extends jspb.Message {
  getRegion(): string;
  setRegion(value: string): MachineClassCost;

  getCostperminute(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setCostperminute(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): MachineClassCost;
  hasCostperminute(): boolean;
  clearCostperminute(): MachineClassCost;

  getCostspot(): k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity | undefined;
  setCostspot(value?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity): MachineClassCost;
  hasCostspot(): boolean;
  clearCostspot(): MachineClassCost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MachineClassCost.AsObject;
  static toObject(includeInstance: boolean, msg: MachineClassCost): MachineClassCost.AsObject;
  static serializeBinaryToWriter(message: MachineClassCost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MachineClassCost;
  static deserializeBinaryFromReader(message: MachineClassCost, reader: jspb.BinaryReader): MachineClassCost;
}

export namespace MachineClassCost {
  export type AsObject = {
    region: string,
    costperminute?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
    costspot?: k8s_io_apimachinery_pkg_api_resource_generated_pb.Quantity.AsObject,
  }
}

export class PretrainedModel extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): PretrainedModel;
  hasMetadata(): boolean;
  clearMetadata(): PretrainedModel;

  getSpec(): PretrainedModelSpec | undefined;
  setSpec(value?: PretrainedModelSpec): PretrainedModel;
  hasSpec(): boolean;
  clearSpec(): PretrainedModel;

  getStatus(): PretrainedModelStatus | undefined;
  setStatus(value?: PretrainedModelStatus): PretrainedModel;
  hasStatus(): boolean;
  clearStatus(): PretrainedModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PretrainedModel.AsObject;
  static toObject(includeInstance: boolean, msg: PretrainedModel): PretrainedModel.AsObject;
  static serializeBinaryToWriter(message: PretrainedModel, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PretrainedModel;
  static deserializeBinaryFromReader(message: PretrainedModel, reader: jspb.BinaryReader): PretrainedModel;
}

export namespace PretrainedModel {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: PretrainedModelSpec.AsObject,
    status?: PretrainedModelStatus.AsObject,
  }
}

export class PretrainedModelList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): PretrainedModelList;
  hasMetadata(): boolean;
  clearMetadata(): PretrainedModelList;

  getItemsList(): Array<PretrainedModel>;
  setItemsList(value: Array<PretrainedModel>): PretrainedModelList;
  clearItemsList(): PretrainedModelList;
  addItems(value?: PretrainedModel, index?: number): PretrainedModel;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PretrainedModelList.AsObject;
  static toObject(includeInstance: boolean, msg: PretrainedModelList): PretrainedModelList.AsObject;
  static serializeBinaryToWriter(message: PretrainedModelList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PretrainedModelList;
  static deserializeBinaryFromReader(message: PretrainedModelList, reader: jspb.BinaryReader): PretrainedModelList;
}

export namespace PretrainedModelList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<PretrainedModel.AsObject>,
  }
}

export class PretrainedModelSpec extends jspb.Message {
  getImage(): string;
  setImage(value: string): PretrainedModelSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PretrainedModelSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PretrainedModelSpec): PretrainedModelSpec.AsObject;
  static serializeBinaryToWriter(message: PretrainedModelSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PretrainedModelSpec;
  static deserializeBinaryFromReader(message: PretrainedModelSpec, reader: jspb.BinaryReader): PretrainedModelSpec;
}

export namespace PretrainedModelSpec {
  export type AsObject = {
    image: string,
  }
}

export class PretrainedModelStatus extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PretrainedModelStatus.AsObject;
  static toObject(includeInstance: boolean, msg: PretrainedModelStatus): PretrainedModelStatus.AsObject;
  static serializeBinaryToWriter(message: PretrainedModelStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PretrainedModelStatus;
  static deserializeBinaryFromReader(message: PretrainedModelStatus, reader: jspb.BinaryReader): PretrainedModelStatus;
}

export namespace PretrainedModelStatus {
  export type AsObject = {
  }
}

export class PublicDataset extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): PublicDataset;
  hasMetadata(): boolean;
  clearMetadata(): PublicDataset;

  getSpec(): PublicDatasetSpec | undefined;
  setSpec(value?: PublicDatasetSpec): PublicDataset;
  hasSpec(): boolean;
  clearSpec(): PublicDataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicDataset.AsObject;
  static toObject(includeInstance: boolean, msg: PublicDataset): PublicDataset.AsObject;
  static serializeBinaryToWriter(message: PublicDataset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicDataset;
  static deserializeBinaryFromReader(message: PublicDataset, reader: jspb.BinaryReader): PublicDataset;
}

export namespace PublicDataset {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: PublicDatasetSpec.AsObject,
  }
}

export class PublicDatasetList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): PublicDatasetList;
  hasMetadata(): boolean;
  clearMetadata(): PublicDatasetList;

  getItemsList(): Array<PublicDataset>;
  setItemsList(value: Array<PublicDataset>): PublicDatasetList;
  clearItemsList(): PublicDatasetList;
  addItems(value?: PublicDataset, index?: number): PublicDataset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicDatasetList.AsObject;
  static toObject(includeInstance: boolean, msg: PublicDatasetList): PublicDatasetList.AsObject;
  static serializeBinaryToWriter(message: PublicDatasetList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicDatasetList;
  static deserializeBinaryFromReader(message: PublicDatasetList, reader: jspb.BinaryReader): PublicDatasetList;
}

export namespace PublicDatasetList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<PublicDataset.AsObject>,
  }
}

export class PublicDatasetSpec extends jspb.Message {
  getImage(): string;
  setImage(value: string): PublicDatasetSpec;

  getTask(): string;
  setTask(value: string): PublicDatasetSpec;

  getId(): string;
  setId(value: string): PublicDatasetSpec;

  getExternalname(): string;
  setExternalname(value: string): PublicDatasetSpec;

  getDataurl(): string;
  setDataurl(value: string): PublicDatasetSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicDatasetSpec.AsObject;
  static toObject(includeInstance: boolean, msg: PublicDatasetSpec): PublicDatasetSpec.AsObject;
  static serializeBinaryToWriter(message: PublicDatasetSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicDatasetSpec;
  static deserializeBinaryFromReader(message: PublicDatasetSpec, reader: jspb.BinaryReader): PublicDatasetSpec;
}

export namespace PublicDatasetSpec {
  export type AsObject = {
    image: string,
    task: string,
    id: string,
    externalname: string,
    dataurl: string,
  }
}

export class Region extends jspb.Message {
  getCloudname(): string;
  setCloudname(value: string): Region;

  getDefaultdatacentername(): string;
  setDefaultdatacentername(value: string): Region;

  getLocation(): string;
  setLocation(value: string): Region;

  getBillingcode(): string;
  setBillingcode(value: string): Region;

  getDatacentersList(): Array<DataCenter>;
  setDatacentersList(value: Array<DataCenter>): Region;
  clearDatacentersList(): Region;
  addDatacenters(value?: DataCenter, index?: number): DataCenter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Region.AsObject;
  static toObject(includeInstance: boolean, msg: Region): Region.AsObject;
  static serializeBinaryToWriter(message: Region, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Region;
  static deserializeBinaryFromReader(message: Region, reader: jspb.BinaryReader): Region;
}

export namespace Region {
  export type AsObject = {
    cloudname: string,
    defaultdatacentername: string,
    location: string,
    billingcode: string,
    datacentersList: Array<DataCenter.AsObject>,
  }
}

export class UserRoleClass extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): UserRoleClass;
  hasMetadata(): boolean;
  clearMetadata(): UserRoleClass;

  getSpec(): UserRoleClassSpec | undefined;
  setSpec(value?: UserRoleClassSpec): UserRoleClass;
  hasSpec(): boolean;
  clearSpec(): UserRoleClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRoleClass.AsObject;
  static toObject(includeInstance: boolean, msg: UserRoleClass): UserRoleClass.AsObject;
  static serializeBinaryToWriter(message: UserRoleClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRoleClass;
  static deserializeBinaryFromReader(message: UserRoleClass, reader: jspb.BinaryReader): UserRoleClass;
}

export namespace UserRoleClass {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: UserRoleClassSpec.AsObject,
  }
}

export class UserRoleClassList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): UserRoleClassList;
  hasMetadata(): boolean;
  clearMetadata(): UserRoleClassList;

  getItemsList(): Array<UserRoleClass>;
  setItemsList(value: Array<UserRoleClass>): UserRoleClassList;
  clearItemsList(): UserRoleClassList;
  addItems(value?: UserRoleClass, index?: number): UserRoleClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRoleClassList.AsObject;
  static toObject(includeInstance: boolean, msg: UserRoleClassList): UserRoleClassList.AsObject;
  static serializeBinaryToWriter(message: UserRoleClassList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRoleClassList;
  static deserializeBinaryFromReader(message: UserRoleClassList, reader: jspb.BinaryReader): UserRoleClassList;
}

export namespace UserRoleClassList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<UserRoleClass.AsObject>,
  }
}

export class UserRoleClassSpec extends jspb.Message {
  getRulesList(): Array<k8s_io_api_rbac_v1_generated_pb.PolicyRule>;
  setRulesList(value: Array<k8s_io_api_rbac_v1_generated_pb.PolicyRule>): UserRoleClassSpec;
  clearRulesList(): UserRoleClassSpec;
  addRules(value?: k8s_io_api_rbac_v1_generated_pb.PolicyRule, index?: number): k8s_io_api_rbac_v1_generated_pb.PolicyRule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserRoleClassSpec.AsObject;
  static toObject(includeInstance: boolean, msg: UserRoleClassSpec): UserRoleClassSpec.AsObject;
  static serializeBinaryToWriter(message: UserRoleClassSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserRoleClassSpec;
  static deserializeBinaryFromReader(message: UserRoleClassSpec, reader: jspb.BinaryReader): UserRoleClassSpec;
}

export namespace UserRoleClassSpec {
  export type AsObject = {
    rulesList: Array<k8s_io_api_rbac_v1_generated_pb.PolicyRule.AsObject>,
  }
}

export class VizUri extends jspb.Message {
  getName(): string;
  setName(value: string): VizUri;

  getUri(): string;
  setUri(value: string): VizUri;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VizUri.AsObject;
  static toObject(includeInstance: boolean, msg: VizUri): VizUri.AsObject;
  static serializeBinaryToWriter(message: VizUri, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VizUri;
  static deserializeBinaryFromReader(message: VizUri, reader: jspb.BinaryReader): VizUri;
}

export namespace VizUri {
  export type AsObject = {
    name: string,
    uri: string,
  }
}

export class WorkloadClass extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta): WorkloadClass;
  hasMetadata(): boolean;
  clearMetadata(): WorkloadClass;

  getSpec(): WorkloadClassSpec | undefined;
  setSpec(value?: WorkloadClassSpec): WorkloadClass;
  hasSpec(): boolean;
  clearSpec(): WorkloadClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkloadClass.AsObject;
  static toObject(includeInstance: boolean, msg: WorkloadClass): WorkloadClass.AsObject;
  static serializeBinaryToWriter(message: WorkloadClass, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkloadClass;
  static deserializeBinaryFromReader(message: WorkloadClass, reader: jspb.BinaryReader): WorkloadClass;
}

export namespace WorkloadClass {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ObjectMeta.AsObject,
    spec?: WorkloadClassSpec.AsObject,
  }
}

export class WorkloadClassList extends jspb.Message {
  getMetadata(): k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta | undefined;
  setMetadata(value?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta): WorkloadClassList;
  hasMetadata(): boolean;
  clearMetadata(): WorkloadClassList;

  getItemsList(): Array<WorkloadClass>;
  setItemsList(value: Array<WorkloadClass>): WorkloadClassList;
  clearItemsList(): WorkloadClassList;
  addItems(value?: WorkloadClass, index?: number): WorkloadClass;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkloadClassList.AsObject;
  static toObject(includeInstance: boolean, msg: WorkloadClassList): WorkloadClassList.AsObject;
  static serializeBinaryToWriter(message: WorkloadClassList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkloadClassList;
  static deserializeBinaryFromReader(message: WorkloadClassList, reader: jspb.BinaryReader): WorkloadClassList;
}

export namespace WorkloadClassList {
  export type AsObject = {
    metadata?: k8s_io_apimachinery_pkg_apis_meta_v1_generated_pb.ListMeta.AsObject,
    itemsList: Array<WorkloadClass.AsObject>,
  }
}

export class WorkloadClassSpec extends jspb.Message {
  getImage(): string;
  setImage(value: string): WorkloadClassSpec;

  getTasksList(): Array<string>;
  setTasksList(value: Array<string>): WorkloadClassSpec;
  clearTasksList(): WorkloadClassSpec;
  addTasks(value: string, index?: number): WorkloadClassSpec;

  getFrameworks(): MLFrameworkList | undefined;
  setFrameworks(value?: MLFrameworkList): WorkloadClassSpec;
  hasFrameworks(): boolean;
  clearFrameworks(): WorkloadClassSpec;

  getPodtemplate(): k8s_io_api_core_v1_generated_pb.PodTemplateSpec | undefined;
  setPodtemplate(value?: k8s_io_api_core_v1_generated_pb.PodTemplateSpec): WorkloadClassSpec;
  hasPodtemplate(): boolean;
  clearPodtemplate(): WorkloadClassSpec;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkloadClassSpec.AsObject;
  static toObject(includeInstance: boolean, msg: WorkloadClassSpec): WorkloadClassSpec.AsObject;
  static serializeBinaryToWriter(message: WorkloadClassSpec, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkloadClassSpec;
  static deserializeBinaryFromReader(message: WorkloadClassSpec, reader: jspb.BinaryReader): WorkloadClassSpec;
}

export namespace WorkloadClassSpec {
  export type AsObject = {
    image: string,
    tasksList: Array<string>,
    frameworks?: MLFrameworkList.AsObject,
    podtemplate?: k8s_io_api_core_v1_generated_pb.PodTemplateSpec.AsObject,
  }
}
