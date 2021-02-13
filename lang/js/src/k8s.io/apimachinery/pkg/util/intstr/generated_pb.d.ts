import * as jspb from 'google-protobuf'



export class IntOrString extends jspb.Message {
  getType(): number;
  setType(value: number): IntOrString;

  getIntval(): number;
  setIntval(value: number): IntOrString;

  getStrval(): string;
  setStrval(value: string): IntOrString;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IntOrString.AsObject;
  static toObject(includeInstance: boolean, msg: IntOrString): IntOrString.AsObject;
  static serializeBinaryToWriter(message: IntOrString, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IntOrString;
  static deserializeBinaryFromReader(message: IntOrString, reader: jspb.BinaryReader): IntOrString;
}

export namespace IntOrString {
  export type AsObject = {
    type: number,
    intval: number,
    strval: string,
  }
}

