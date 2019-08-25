/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v{{VERSION}}
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "test-lib";
export interface ILastName {
    __name: "LastName";
    name?: string;
}
export interface ILastNameArgs {
    name?: string;
}
export const LastNameCodec: thrift.IStructCodec<ILastNameArgs, ILastName> = {
    encode(args: ILastNameArgs, output: thrift.TProtocol): void {
        const obj: ILastNameArgs = {
            name: args.name
        };
        output.writeStructBegin("LastName");
        if (obj.name != null) {
            output.writeFieldBegin("name", thrift.TType.STRING, 1);
            output.writeString(obj.name);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): ILastName {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.STRING) {
                        const value_1: string = input.readString();
                        _args.name = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return {
            __name: "LastName",
            name: _args.name
        };
    }
};
export class LastName extends thrift.StructLike implements ILastName {
    public name?: string;
    public readonly __name = "LastName";
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: ILastNameArgs = {}) {
        super();
        if (args.name != null) {
            const value_2: string = args.name;
            this.name = value_2;
        }
    }
    public static read(input: thrift.TProtocol): LastName {
        return new LastName(LastNameCodec.decode(input));
    }
    public static write(args: ILastNameArgs, output: thrift.TProtocol): void {
        return LastNameCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return LastNameCodec.encode(this, output);
    }
}
