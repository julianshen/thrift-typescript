/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v{{VERSION}}
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "test-lib";
import * as SharedServiceBase from "./SharedServiceBase";
import * as SharedUnion from "./SharedUnion";
import * as SharedEnum from "./SharedEnum";
export const serviceName: string = "SharedService";
export const annotations: thrift.IThriftAnnotations = {};
export const methodAnnotations: thrift.IMethodAnnotations = {
    getStruct: {
        annotations: {},
        fieldAnnotations: {}
    },
    getUnion: {
        annotations: {},
        fieldAnnotations: {}
    },
    getEnum: {
        annotations: {},
        fieldAnnotations: {}
    }
};
export const methodNames: Array<string> = ["getStruct", "getUnion", "getEnum"];
export const methodParameters: {
    [methodName: string]: number;
} = {
    getStruct: 2,
    getUnion: 2,
    getEnum: 1
};
export interface IGetUnion__Args {
    __name: "GetUnion__Args";
    index: number;
}
export interface IGetUnion__ArgsArgs {
    index: number;
}
export const GetUnion__ArgsCodec: thrift.IStructCodec<IGetUnion__ArgsArgs, IGetUnion__Args> = {
    encode(args: IGetUnion__ArgsArgs, output: thrift.TProtocol): void {
        const obj: IGetUnion__ArgsArgs = {
            index: args.index
        };
        output.writeStructBegin("GetUnion__Args");
        if (obj.index != null) {
            output.writeFieldBegin("index", thrift.TType.I32, 1);
            output.writeI32(obj.index);
            output.writeFieldEnd();
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[index] is unset!");
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGetUnion__Args {
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
                    if (fieldType === thrift.TType.I32) {
                        const value_1: number = input.readI32();
                        _args.index = value_1;
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
        if (_args.index !== undefined) {
            return {
                __name: "GetUnion__Args",
                index: _args.index
            };
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Unable to read GetUnion__Args from input");
        }
    }
};
export class GetUnion__Args extends thrift.StructLike implements IGetUnion__Args {
    public index: number;
    public readonly __name = "GetUnion__Args";
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IGetUnion__ArgsArgs) {
        super();
        if (args.index != null) {
            const value_2: number = args.index;
            this.index = value_2;
        }
        else {
            throw new thrift.TProtocolException(thrift.TProtocolExceptionType.UNKNOWN, "Required field[index] is unset!");
        }
    }
    public static read(input: thrift.TProtocol): GetUnion__Args {
        return new GetUnion__Args(GetUnion__ArgsCodec.decode(input));
    }
    public static write(args: IGetUnion__ArgsArgs, output: thrift.TProtocol): void {
        return GetUnion__ArgsCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GetUnion__ArgsCodec.encode(this, output);
    }
}
export interface IGetEnum__Args {
    __name: "GetEnum__Args";
}
export interface IGetEnum__ArgsArgs {
}
export const GetEnum__ArgsCodec: thrift.IStructCodec<IGetEnum__ArgsArgs, IGetEnum__Args> = {
    encode(args: IGetEnum__ArgsArgs, output: thrift.TProtocol): void {
        output.writeStructBegin("GetEnum__Args");
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGetEnum__Args {
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return {
            __name: "GetEnum__Args"
        };
    }
};
export class GetEnum__Args extends thrift.StructLike implements IGetEnum__Args {
    public readonly __name = "GetEnum__Args";
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IGetEnum__ArgsArgs = {}) {
        super();
    }
    public static read(input: thrift.TProtocol): GetEnum__Args {
        return new GetEnum__Args(GetEnum__ArgsCodec.decode(input));
    }
    public static write(args: IGetEnum__ArgsArgs, output: thrift.TProtocol): void {
        return GetEnum__ArgsCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GetEnum__ArgsCodec.encode(this, output);
    }
}
export interface IGetUnion__Result {
    __name: "GetUnion__Result";
    success?: SharedUnion.ISharedUnion;
}
export interface IGetUnion__ResultArgs {
    success?: SharedUnion.ISharedUnionArgs;
}
export const GetUnion__ResultCodec: thrift.IStructCodec<IGetUnion__ResultArgs, IGetUnion__Result> = {
    encode(args: IGetUnion__ResultArgs, output: thrift.TProtocol): void {
        const obj: IGetUnion__ResultArgs = {
            success: args.success
        };
        output.writeStructBegin("GetUnion__Result");
        if (obj.success != null) {
            output.writeFieldBegin("success", thrift.TType.STRUCT, 0);
            SharedUnion.SharedUnionCodec.encode(obj.success, output);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGetUnion__Result {
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
                case 0:
                    if (fieldType === thrift.TType.STRUCT) {
                        const value_3: SharedUnion.ISharedUnion = SharedUnion.SharedUnionCodec.decode(input);
                        _args.success = value_3;
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
            __name: "GetUnion__Result",
            success: _args.success
        };
    }
};
export class GetUnion__Result extends thrift.StructLike implements IGetUnion__Result {
    public success?: SharedUnion.ISharedUnion;
    public readonly __name = "GetUnion__Result";
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IGetUnion__ResultArgs = {}) {
        super();
        if (args.success != null) {
            const value_4: SharedUnion.ISharedUnion = new SharedUnion.SharedUnion(args.success);
            this.success = value_4;
        }
    }
    public static read(input: thrift.TProtocol): GetUnion__Result {
        return new GetUnion__Result(GetUnion__ResultCodec.decode(input));
    }
    public static write(args: IGetUnion__ResultArgs, output: thrift.TProtocol): void {
        return GetUnion__ResultCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GetUnion__ResultCodec.encode(this, output);
    }
}
export interface IGetEnum__Result {
    __name: "GetEnum__Result";
    success?: SharedEnum.SharedEnum;
}
export interface IGetEnum__ResultArgs {
    success?: SharedEnum.SharedEnum;
}
export const GetEnum__ResultCodec: thrift.IStructCodec<IGetEnum__ResultArgs, IGetEnum__Result> = {
    encode(args: IGetEnum__ResultArgs, output: thrift.TProtocol): void {
        const obj: IGetEnum__ResultArgs = {
            success: args.success
        };
        output.writeStructBegin("GetEnum__Result");
        if (obj.success != null) {
            output.writeFieldBegin("success", thrift.TType.I32, 0);
            output.writeI32(obj.success);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IGetEnum__Result {
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
                case 0:
                    if (fieldType === thrift.TType.I32) {
                        const value_5: SharedEnum.SharedEnum = input.readI32();
                        _args.success = value_5;
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
            __name: "GetEnum__Result",
            success: _args.success
        };
    }
};
export class GetEnum__Result extends thrift.StructLike implements IGetEnum__Result {
    public success?: SharedEnum.SharedEnum;
    public readonly __name = "GetEnum__Result";
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IGetEnum__ResultArgs = {}) {
        super();
        if (args.success != null) {
            const value_6: SharedEnum.SharedEnum = args.success;
            this.success = value_6;
        }
    }
    public static read(input: thrift.TProtocol): GetEnum__Result {
        return new GetEnum__Result(GetEnum__ResultCodec.decode(input));
    }
    public static write(args: IGetEnum__ResultArgs, output: thrift.TProtocol): void {
        return GetEnum__ResultCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return GetEnum__ResultCodec.encode(this, output);
    }
}
export class Client<Context = any> extends SharedServiceBase.Client<Context> {
    public static readonly serviceName: string = serviceName;
    public static readonly annotations: thrift.IThriftAnnotations = annotations;
    public static readonly methodAnnotations: thrift.IMethodAnnotations = methodAnnotations;
    public static readonly methodNames: Array<string> = methodNames;
    public readonly _serviceName: string = serviceName;
    public readonly _annotations: thrift.IThriftAnnotations = annotations;
    public readonly _methodAnnotations: thrift.IMethodAnnotations = methodAnnotations;
    public readonly _methodNames: Array<string> = methodNames;
    public readonly _methodParameters?: {
        [methodName: string]: number;
    } = methodParameters;
    constructor(connection: thrift.IThriftConnection<Context>) {
        super(connection);
    }
    public getUnion(index: number, context?: Context): Promise<SharedUnion.ISharedUnion> {
        const writer: thrift.TTransport = new this.transport();
        const output: thrift.TProtocol = new this.protocol(writer);
        output.writeMessageBegin("getUnion", thrift.MessageType.CALL, this.incrementRequestId());
        const args: IGetUnion__ArgsArgs = { index };
        GetUnion__ArgsCodec.encode(args, output);
        output.writeMessageEnd();
        return this.connection.send(writer.flush(), context).then((data: Buffer) => {
            const reader: thrift.TTransport = this.transport.receiver(data);
            const input: thrift.TProtocol = new this.protocol(reader);
            try {
                const { fieldName: fieldName, messageType: messageType }: thrift.IThriftMessage = input.readMessageBegin();
                if (fieldName === "getUnion") {
                    if (messageType === thrift.MessageType.EXCEPTION) {
                        const err: thrift.TApplicationException = thrift.TApplicationExceptionCodec.decode(input);
                        input.readMessageEnd();
                        return Promise.reject(err);
                    }
                    else {
                        const result: IGetUnion__Result = GetUnion__ResultCodec.decode(input);
                        input.readMessageEnd();
                        if (result.success != null) {
                            return Promise.resolve(result.success);
                        }
                        else {
                            return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, "getUnion failed: unknown result"));
                        }
                    }
                }
                else {
                    return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.WRONG_METHOD_NAME, "Received a response to an unknown RPC function: " + fieldName));
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
    public getEnum(context?: Context): Promise<SharedEnum.SharedEnum> {
        const writer: thrift.TTransport = new this.transport();
        const output: thrift.TProtocol = new this.protocol(writer);
        output.writeMessageBegin("getEnum", thrift.MessageType.CALL, this.incrementRequestId());
        const args: IGetEnum__ArgsArgs = {};
        GetEnum__ArgsCodec.encode(args, output);
        output.writeMessageEnd();
        return this.connection.send(writer.flush(), context).then((data: Buffer) => {
            const reader: thrift.TTransport = this.transport.receiver(data);
            const input: thrift.TProtocol = new this.protocol(reader);
            try {
                const { fieldName: fieldName, messageType: messageType }: thrift.IThriftMessage = input.readMessageBegin();
                if (fieldName === "getEnum") {
                    if (messageType === thrift.MessageType.EXCEPTION) {
                        const err: thrift.TApplicationException = thrift.TApplicationExceptionCodec.decode(input);
                        input.readMessageEnd();
                        return Promise.reject(err);
                    }
                    else {
                        const result: IGetEnum__Result = GetEnum__ResultCodec.decode(input);
                        input.readMessageEnd();
                        if (result.success != null) {
                            return Promise.resolve(result.success);
                        }
                        else {
                            return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, "getEnum failed: unknown result"));
                        }
                    }
                }
                else {
                    return Promise.reject(new thrift.TApplicationException(thrift.TApplicationExceptionType.WRONG_METHOD_NAME, "Received a response to an unknown RPC function: " + fieldName));
                }
            }
            catch (err) {
                return Promise.reject(err);
            }
        });
    }
}
export interface ILocalHandler<Context = any> {
    getUnion(index: number, context?: Context): SharedUnion.ISharedUnionArgs | Promise<SharedUnion.ISharedUnionArgs>;
    getEnum(context?: Context): SharedEnum.SharedEnum | Promise<SharedEnum.SharedEnum>;
}
export type IHandler<Context = any> = ILocalHandler<Context> & SharedServiceBase.IHandler<Context>;
export class Processor<Context = any> extends SharedServiceBase.Processor<Context> {
    protected readonly _handler: IHandler<Context>;
    public static readonly serviceName: string = serviceName;
    public static readonly annotations: thrift.IThriftAnnotations = annotations;
    public static readonly methodAnnotations: thrift.IMethodAnnotations = methodAnnotations;
    public static readonly methodNames: Array<string> = methodNames;
    public readonly _serviceName: string = serviceName;
    public readonly _annotations: thrift.IThriftAnnotations = annotations;
    public readonly _methodAnnotations: thrift.IMethodAnnotations = methodAnnotations;
    public readonly _methodNames: Array<string> = methodNames;
    constructor(handler: IHandler<Context>) {
        super({
            getStruct: handler.getStruct
        });
        this._handler = handler;
    }
    public process(input: thrift.TProtocol, output: thrift.TProtocol, context: Context): Promise<Buffer> {
        return new Promise<Buffer>((resolve, reject): void => {
            const metadata: thrift.IThriftMessage = input.readMessageBegin();
            const fieldName: string = metadata.fieldName;
            const requestId: number = metadata.requestId;
            const methodName: string = "process_" + fieldName;
            switch (methodName) {
                case "process_getStruct": {
                    resolve(this.process_getStruct(requestId, input, output, context));
                    break;
                }
                case "process_getUnion": {
                    resolve(this.process_getUnion(requestId, input, output, context));
                    break;
                }
                case "process_getEnum": {
                    resolve(this.process_getEnum(requestId, input, output, context));
                    break;
                }
                default: {
                    input.skip(thrift.TType.STRUCT);
                    input.readMessageEnd();
                    const errMessage = "Unknown function " + fieldName;
                    const err = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN_METHOD, errMessage);
                    output.writeMessageBegin(fieldName, thrift.MessageType.EXCEPTION, requestId);
                    thrift.TApplicationExceptionCodec.encode(err, output);
                    output.writeMessageEnd();
                    resolve(output.flush());
                    break;
                }
            }
        });
    }
    public process_getUnion(requestId: number, input: thrift.TProtocol, output: thrift.TProtocol, context: Context): Promise<Buffer> {
        return new Promise<SharedUnion.ISharedUnionArgs>((resolve, reject): void => {
            try {
                const args: IGetUnion__Args = GetUnion__ArgsCodec.decode(input);
                input.readMessageEnd();
                resolve(this._handler.getUnion(args.index, context));
            }
            catch (err) {
                reject(err);
            }
        }).then((data: SharedUnion.ISharedUnionArgs): Buffer => {
            const result: IGetUnion__ResultArgs = { success: data };
            output.writeMessageBegin("getUnion", thrift.MessageType.REPLY, requestId);
            GetUnion__ResultCodec.encode(result, output);
            output.writeMessageEnd();
            return output.flush();
        }).catch((err: Error): Buffer => {
            const result: thrift.TApplicationException = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, err.message);
            output.writeMessageBegin("getUnion", thrift.MessageType.EXCEPTION, requestId);
            thrift.TApplicationExceptionCodec.encode(result, output);
            output.writeMessageEnd();
            return output.flush();
        });
    }
    public process_getEnum(requestId: number, input: thrift.TProtocol, output: thrift.TProtocol, context: Context): Promise<Buffer> {
        return new Promise<SharedEnum.SharedEnum>((resolve, reject): void => {
            try {
                input.readMessageEnd();
                resolve(this._handler.getEnum(context));
            }
            catch (err) {
                reject(err);
            }
        }).then((data: SharedEnum.SharedEnum): Buffer => {
            const result: IGetEnum__ResultArgs = { success: data };
            output.writeMessageBegin("getEnum", thrift.MessageType.REPLY, requestId);
            GetEnum__ResultCodec.encode(result, output);
            output.writeMessageEnd();
            return output.flush();
        }).catch((err: Error): Buffer => {
            const result: thrift.TApplicationException = new thrift.TApplicationException(thrift.TApplicationExceptionType.UNKNOWN, err.message);
            output.writeMessageBegin("getEnum", thrift.MessageType.EXCEPTION, requestId);
            thrift.TApplicationExceptionCodec.encode(result, output);
            output.writeMessageEnd();
            return output.flush();
        });
    }
}
