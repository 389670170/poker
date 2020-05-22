export as namespace Protocol;

import * as $protobuf from "protobufjs";
/** Namespace CVP. */
export namespace CVP {

    /** LuckyWheelType enum. */
    enum LuckyWheelType {
        SMALL = 1,
        BIG = 2
    }

    /** RequestPoint enum. */
    enum RequestPoint {
        AD = 1,
        BONUS = 2
    }

    /** Properties of a RequestLuckyWheel. */
    interface IRequestLuckyWheel {

        /** RequestLuckyWheel commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestLuckyWheel. */
    class RequestLuckyWheel implements IRequestLuckyWheel {

        /**
         * Constructs a new RequestLuckyWheel.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestLuckyWheel);

        /** RequestLuckyWheel commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestLuckyWheel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestLuckyWheel instance
         */
        public static create(properties?: CVP.IRequestLuckyWheel): CVP.RequestLuckyWheel;

        /**
         * Encodes the specified RequestLuckyWheel message. Does not implicitly {@link CVP.RequestLuckyWheel.verify|verify} messages.
         * @param message RequestLuckyWheel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestLuckyWheel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestLuckyWheel message, length delimited. Does not implicitly {@link CVP.RequestLuckyWheel.verify|verify} messages.
         * @param message RequestLuckyWheel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestLuckyWheel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestLuckyWheel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestLuckyWheel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestLuckyWheel;

        /**
         * Decodes a RequestLuckyWheel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestLuckyWheel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestLuckyWheel;

        /**
         * Verifies a RequestLuckyWheel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestLuckyWheel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestLuckyWheel
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestLuckyWheel;

        /**
         * Creates a plain object from a RequestLuckyWheel message. Also converts values to other types if specified.
         * @param message RequestLuckyWheel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestLuckyWheel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestLuckyWheel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestLuckyWheelResult. */
    interface IRequestLuckyWheelResult {

        /** RequestLuckyWheelResult coins */
        coins?: (number[]|null);

        /** RequestLuckyWheelResult luckyWheelType */
        luckyWheelType?: (CVP.LuckyWheelType|null);
    }

    /** Represents a RequestLuckyWheelResult. */
    class RequestLuckyWheelResult implements IRequestLuckyWheelResult {

        /**
         * Constructs a new RequestLuckyWheelResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestLuckyWheelResult);

        /** RequestLuckyWheelResult coins. */
        public coins: number[];

        /** RequestLuckyWheelResult luckyWheelType. */
        public luckyWheelType: CVP.LuckyWheelType;

        /**
         * Creates a new RequestLuckyWheelResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestLuckyWheelResult instance
         */
        public static create(properties?: CVP.IRequestLuckyWheelResult): CVP.RequestLuckyWheelResult;

        /**
         * Encodes the specified RequestLuckyWheelResult message. Does not implicitly {@link CVP.RequestLuckyWheelResult.verify|verify} messages.
         * @param message RequestLuckyWheelResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestLuckyWheelResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestLuckyWheelResult message, length delimited. Does not implicitly {@link CVP.RequestLuckyWheelResult.verify|verify} messages.
         * @param message RequestLuckyWheelResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestLuckyWheelResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestLuckyWheelResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestLuckyWheelResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestLuckyWheelResult;

        /**
         * Decodes a RequestLuckyWheelResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestLuckyWheelResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestLuckyWheelResult;

        /**
         * Verifies a RequestLuckyWheelResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestLuckyWheelResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestLuckyWheelResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestLuckyWheelResult;

        /**
         * Creates a plain object from a RequestLuckyWheelResult message. Also converts values to other types if specified.
         * @param message RequestLuckyWheelResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestLuckyWheelResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestLuckyWheelResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestLuckyWheelSpin. */
    interface IRequestLuckyWheelSpin {

        /** RequestLuckyWheelSpin commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestLuckyWheelSpin. */
    class RequestLuckyWheelSpin implements IRequestLuckyWheelSpin {

        /**
         * Constructs a new RequestLuckyWheelSpin.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestLuckyWheelSpin);

        /** RequestLuckyWheelSpin commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestLuckyWheelSpin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestLuckyWheelSpin instance
         */
        public static create(properties?: CVP.IRequestLuckyWheelSpin): CVP.RequestLuckyWheelSpin;

        /**
         * Encodes the specified RequestLuckyWheelSpin message. Does not implicitly {@link CVP.RequestLuckyWheelSpin.verify|verify} messages.
         * @param message RequestLuckyWheelSpin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestLuckyWheelSpin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestLuckyWheelSpin message, length delimited. Does not implicitly {@link CVP.RequestLuckyWheelSpin.verify|verify} messages.
         * @param message RequestLuckyWheelSpin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestLuckyWheelSpin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestLuckyWheelSpin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestLuckyWheelSpin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestLuckyWheelSpin;

        /**
         * Decodes a RequestLuckyWheelSpin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestLuckyWheelSpin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestLuckyWheelSpin;

        /**
         * Verifies a RequestLuckyWheelSpin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestLuckyWheelSpin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestLuckyWheelSpin
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestLuckyWheelSpin;

        /**
         * Creates a plain object from a RequestLuckyWheelSpin message. Also converts values to other types if specified.
         * @param message RequestLuckyWheelSpin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestLuckyWheelSpin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestLuckyWheelSpin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestLuckyWheelSpinResult. */
    interface IRequestLuckyWheelSpinResult {

        /** RequestLuckyWheelSpinResult coins */
        coins?: (number|null);

        /** RequestLuckyWheelSpinResult level */
        level?: (number|null);
    }

    /** Represents a RequestLuckyWheelSpinResult. */
    class RequestLuckyWheelSpinResult implements IRequestLuckyWheelSpinResult {

        /**
         * Constructs a new RequestLuckyWheelSpinResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestLuckyWheelSpinResult);

        /** RequestLuckyWheelSpinResult coins. */
        public coins: number;

        /** RequestLuckyWheelSpinResult level. */
        public level: number;

        /**
         * Creates a new RequestLuckyWheelSpinResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestLuckyWheelSpinResult instance
         */
        public static create(properties?: CVP.IRequestLuckyWheelSpinResult): CVP.RequestLuckyWheelSpinResult;

        /**
         * Encodes the specified RequestLuckyWheelSpinResult message. Does not implicitly {@link CVP.RequestLuckyWheelSpinResult.verify|verify} messages.
         * @param message RequestLuckyWheelSpinResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestLuckyWheelSpinResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestLuckyWheelSpinResult message, length delimited. Does not implicitly {@link CVP.RequestLuckyWheelSpinResult.verify|verify} messages.
         * @param message RequestLuckyWheelSpinResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestLuckyWheelSpinResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestLuckyWheelSpinResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestLuckyWheelSpinResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestLuckyWheelSpinResult;

        /**
         * Decodes a RequestLuckyWheelSpinResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestLuckyWheelSpinResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestLuckyWheelSpinResult;

        /**
         * Verifies a RequestLuckyWheelSpinResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestLuckyWheelSpinResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestLuckyWheelSpinResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestLuckyWheelSpinResult;

        /**
         * Creates a plain object from a RequestLuckyWheelSpinResult message. Also converts values to other types if specified.
         * @param message RequestLuckyWheelSpinResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestLuckyWheelSpinResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestLuckyWheelSpinResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BonusInfo. */
    interface IBonusInfo {

        /** BonusInfo residueTime */
        residueTime?: (number|null);

        /** BonusInfo getCoinsTime */
        getCoinsTime?: (number|null);

        /** BonusInfo getWheelTime */
        getWheelTime?: (number|null);

        /** BonusInfo baseTime */
        baseTime?: (number|null);

        /** BonusInfo reduceTime */
        reduceTime?: (number|null);
    }

    /** Represents a BonusInfo. */
    class BonusInfo implements IBonusInfo {

        /**
         * Constructs a new BonusInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IBonusInfo);

        /** BonusInfo residueTime. */
        public residueTime: number;

        /** BonusInfo getCoinsTime. */
        public getCoinsTime: number;

        /** BonusInfo getWheelTime. */
        public getWheelTime: number;

        /** BonusInfo baseTime. */
        public baseTime: number;

        /** BonusInfo reduceTime. */
        public reduceTime: number;

        /**
         * Creates a new BonusInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BonusInfo instance
         */
        public static create(properties?: CVP.IBonusInfo): CVP.BonusInfo;

        /**
         * Encodes the specified BonusInfo message. Does not implicitly {@link CVP.BonusInfo.verify|verify} messages.
         * @param message BonusInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IBonusInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BonusInfo message, length delimited. Does not implicitly {@link CVP.BonusInfo.verify|verify} messages.
         * @param message BonusInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IBonusInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BonusInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BonusInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.BonusInfo;

        /**
         * Decodes a BonusInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BonusInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.BonusInfo;

        /**
         * Verifies a BonusInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BonusInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BonusInfo
         */
        public static fromObject(object: { [k: string]: any }): CVP.BonusInfo;

        /**
         * Creates a plain object from a BonusInfo message. Also converts values to other types if specified.
         * @param message BonusInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.BonusInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BonusInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestBonus. */
    interface IRequestBonus {

        /** RequestBonus commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestBonus requestPoint */
        requestPoint?: (CVP.RequestPoint|null);
    }

    /** Represents a RequestBonus. */
    class RequestBonus implements IRequestBonus {

        /**
         * Constructs a new RequestBonus.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestBonus);

        /** RequestBonus commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestBonus requestPoint. */
        public requestPoint: CVP.RequestPoint;

        /**
         * Creates a new RequestBonus instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestBonus instance
         */
        public static create(properties?: CVP.IRequestBonus): CVP.RequestBonus;

        /**
         * Encodes the specified RequestBonus message. Does not implicitly {@link CVP.RequestBonus.verify|verify} messages.
         * @param message RequestBonus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestBonus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestBonus message, length delimited. Does not implicitly {@link CVP.RequestBonus.verify|verify} messages.
         * @param message RequestBonus message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestBonus, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestBonus message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestBonus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestBonus;

        /**
         * Decodes a RequestBonus message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestBonus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestBonus;

        /**
         * Verifies a RequestBonus message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestBonus message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestBonus
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestBonus;

        /**
         * Creates a plain object from a RequestBonus message. Also converts values to other types if specified.
         * @param message RequestBonus
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestBonus, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestBonus to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestBonusResult. */
    interface IRequestBonusResult {

        /** RequestBonusResult coins */
        coins?: (number|null);

        /** RequestBonusResult nextCoins */
        nextCoins?: (number|null);

        /** RequestBonusResult requestPoint */
        requestPoint?: (CVP.RequestPoint|null);
    }

    /** Represents a RequestBonusResult. */
    class RequestBonusResult implements IRequestBonusResult {

        /**
         * Constructs a new RequestBonusResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestBonusResult);

        /** RequestBonusResult coins. */
        public coins: number;

        /** RequestBonusResult nextCoins. */
        public nextCoins: number;

        /** RequestBonusResult requestPoint. */
        public requestPoint: CVP.RequestPoint;

        /**
         * Creates a new RequestBonusResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestBonusResult instance
         */
        public static create(properties?: CVP.IRequestBonusResult): CVP.RequestBonusResult;

        /**
         * Encodes the specified RequestBonusResult message. Does not implicitly {@link CVP.RequestBonusResult.verify|verify} messages.
         * @param message RequestBonusResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestBonusResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestBonusResult message, length delimited. Does not implicitly {@link CVP.RequestBonusResult.verify|verify} messages.
         * @param message RequestBonusResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestBonusResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestBonusResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestBonusResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestBonusResult;

        /**
         * Decodes a RequestBonusResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestBonusResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestBonusResult;

        /**
         * Verifies a RequestBonusResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestBonusResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestBonusResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestBonusResult;

        /**
         * Creates a plain object from a RequestBonusResult message. Also converts values to other types if specified.
         * @param message RequestBonusResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestBonusResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestBonusResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestGoldenWheel. */
    interface IRequestGoldenWheel {

        /** RequestGoldenWheel commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestGoldenWheel. */
    class RequestGoldenWheel implements IRequestGoldenWheel {

        /**
         * Constructs a new RequestGoldenWheel.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestGoldenWheel);

        /** RequestGoldenWheel commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestGoldenWheel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestGoldenWheel instance
         */
        public static create(properties?: CVP.IRequestGoldenWheel): CVP.RequestGoldenWheel;

        /**
         * Encodes the specified RequestGoldenWheel message. Does not implicitly {@link CVP.RequestGoldenWheel.verify|verify} messages.
         * @param message RequestGoldenWheel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestGoldenWheel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestGoldenWheel message, length delimited. Does not implicitly {@link CVP.RequestGoldenWheel.verify|verify} messages.
         * @param message RequestGoldenWheel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestGoldenWheel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestGoldenWheel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestGoldenWheel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestGoldenWheel;

        /**
         * Decodes a RequestGoldenWheel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestGoldenWheel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestGoldenWheel;

        /**
         * Verifies a RequestGoldenWheel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestGoldenWheel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestGoldenWheel
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestGoldenWheel;

        /**
         * Creates a plain object from a RequestGoldenWheel message. Also converts values to other types if specified.
         * @param message RequestGoldenWheel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestGoldenWheel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestGoldenWheel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestGoldenWheelResult. */
    interface IRequestGoldenWheelResult {

        /** RequestGoldenWheelResult goldenwheelitem */
        goldenwheelitem?: (CVP.IGoldenWheelItem|null);

        /** RequestGoldenWheelResult rewardList */
        rewardList?: (number[]|null);

        /** RequestGoldenWheelResult addition */
        addition?: (number|null);
    }

    /** Represents a RequestGoldenWheelResult. */
    class RequestGoldenWheelResult implements IRequestGoldenWheelResult {

        /**
         * Constructs a new RequestGoldenWheelResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestGoldenWheelResult);

        /** RequestGoldenWheelResult goldenwheelitem. */
        public goldenwheelitem?: (CVP.IGoldenWheelItem|null);

        /** RequestGoldenWheelResult rewardList. */
        public rewardList: number[];

        /** RequestGoldenWheelResult addition. */
        public addition: number;

        /**
         * Creates a new RequestGoldenWheelResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestGoldenWheelResult instance
         */
        public static create(properties?: CVP.IRequestGoldenWheelResult): CVP.RequestGoldenWheelResult;

        /**
         * Encodes the specified RequestGoldenWheelResult message. Does not implicitly {@link CVP.RequestGoldenWheelResult.verify|verify} messages.
         * @param message RequestGoldenWheelResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestGoldenWheelResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestGoldenWheelResult message, length delimited. Does not implicitly {@link CVP.RequestGoldenWheelResult.verify|verify} messages.
         * @param message RequestGoldenWheelResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestGoldenWheelResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestGoldenWheelResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestGoldenWheelResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestGoldenWheelResult;

        /**
         * Decodes a RequestGoldenWheelResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestGoldenWheelResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestGoldenWheelResult;

        /**
         * Verifies a RequestGoldenWheelResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestGoldenWheelResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestGoldenWheelResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestGoldenWheelResult;

        /**
         * Creates a plain object from a RequestGoldenWheelResult message. Also converts values to other types if specified.
         * @param message RequestGoldenWheelResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestGoldenWheelResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestGoldenWheelResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestGoldenWheelSpin. */
    interface IRequestGoldenWheelSpin {

        /** RequestGoldenWheelSpin commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestGoldenWheelSpin. */
    class RequestGoldenWheelSpin implements IRequestGoldenWheelSpin {

        /**
         * Constructs a new RequestGoldenWheelSpin.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestGoldenWheelSpin);

        /** RequestGoldenWheelSpin commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestGoldenWheelSpin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestGoldenWheelSpin instance
         */
        public static create(properties?: CVP.IRequestGoldenWheelSpin): CVP.RequestGoldenWheelSpin;

        /**
         * Encodes the specified RequestGoldenWheelSpin message. Does not implicitly {@link CVP.RequestGoldenWheelSpin.verify|verify} messages.
         * @param message RequestGoldenWheelSpin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestGoldenWheelSpin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestGoldenWheelSpin message, length delimited. Does not implicitly {@link CVP.RequestGoldenWheelSpin.verify|verify} messages.
         * @param message RequestGoldenWheelSpin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestGoldenWheelSpin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestGoldenWheelSpin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestGoldenWheelSpin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestGoldenWheelSpin;

        /**
         * Decodes a RequestGoldenWheelSpin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestGoldenWheelSpin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestGoldenWheelSpin;

        /**
         * Verifies a RequestGoldenWheelSpin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestGoldenWheelSpin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestGoldenWheelSpin
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestGoldenWheelSpin;

        /**
         * Creates a plain object from a RequestGoldenWheelSpin message. Also converts values to other types if specified.
         * @param message RequestGoldenWheelSpin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestGoldenWheelSpin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestGoldenWheelSpin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestGoldenWheelSpinResult. */
    interface IRequestGoldenWheelSpinResult {

        /** RequestGoldenWheelSpinResult coins */
        coins?: (number|null);

        /** RequestGoldenWheelSpinResult level */
        level?: (number|null);
    }

    /** Represents a RequestGoldenWheelSpinResult. */
    class RequestGoldenWheelSpinResult implements IRequestGoldenWheelSpinResult {

        /**
         * Constructs a new RequestGoldenWheelSpinResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestGoldenWheelSpinResult);

        /** RequestGoldenWheelSpinResult coins. */
        public coins: number;

        /** RequestGoldenWheelSpinResult level. */
        public level: number;

        /**
         * Creates a new RequestGoldenWheelSpinResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestGoldenWheelSpinResult instance
         */
        public static create(properties?: CVP.IRequestGoldenWheelSpinResult): CVP.RequestGoldenWheelSpinResult;

        /**
         * Encodes the specified RequestGoldenWheelSpinResult message. Does not implicitly {@link CVP.RequestGoldenWheelSpinResult.verify|verify} messages.
         * @param message RequestGoldenWheelSpinResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestGoldenWheelSpinResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestGoldenWheelSpinResult message, length delimited. Does not implicitly {@link CVP.RequestGoldenWheelSpinResult.verify|verify} messages.
         * @param message RequestGoldenWheelSpinResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestGoldenWheelSpinResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestGoldenWheelSpinResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestGoldenWheelSpinResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestGoldenWheelSpinResult;

        /**
         * Decodes a RequestGoldenWheelSpinResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestGoldenWheelSpinResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestGoldenWheelSpinResult;

        /**
         * Verifies a RequestGoldenWheelSpinResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestGoldenWheelSpinResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestGoldenWheelSpinResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestGoldenWheelSpinResult;

        /**
         * Creates a plain object from a RequestGoldenWheelSpinResult message. Also converts values to other types if specified.
         * @param message RequestGoldenWheelSpinResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestGoldenWheelSpinResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestGoldenWheelSpinResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MsgCommonParams. */
    interface IMsgCommonParams {

        /** MsgCommonParams sequentialId */
        sequentialId: (number|Long);
    }

    /** Represents a MsgCommonParams. */
    class MsgCommonParams implements IMsgCommonParams {

        /**
         * Constructs a new MsgCommonParams.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IMsgCommonParams);

        /** MsgCommonParams sequentialId. */
        public sequentialId: (number|Long);

        /**
         * Creates a new MsgCommonParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MsgCommonParams instance
         */
        public static create(properties?: CVP.IMsgCommonParams): CVP.MsgCommonParams;

        /**
         * Encodes the specified MsgCommonParams message. Does not implicitly {@link CVP.MsgCommonParams.verify|verify} messages.
         * @param message MsgCommonParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IMsgCommonParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MsgCommonParams message, length delimited. Does not implicitly {@link CVP.MsgCommonParams.verify|verify} messages.
         * @param message MsgCommonParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IMsgCommonParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MsgCommonParams message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MsgCommonParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.MsgCommonParams;

        /**
         * Decodes a MsgCommonParams message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MsgCommonParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.MsgCommonParams;

        /**
         * Verifies a MsgCommonParams message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MsgCommonParams message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MsgCommonParams
         */
        public static fromObject(object: { [k: string]: any }): CVP.MsgCommonParams;

        /**
         * Creates a plain object from a MsgCommonParams message. Also converts values to other types if specified.
         * @param message MsgCommonParams
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.MsgCommonParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MsgCommonParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ItemType enum. */
    enum ItemType {
        SHOP_COIN_PACKAGE = 1,
        PIG_SILVER = 2,
        PIG_GOLD = 3,
        PIG_DIAMOND = 4,
        SCRATCH_CARD_PACKAGE = 5,
        DEAL_COIN_PACKAGE = 6,
        AVATAR = 7,
        VAULT_KEY_PACKAGE = 8,
        DOUBLE_GAME = 9,
        WHEEL = 10,
        MASTER_CLUB = 11,
        REMOVE_AD = 12
    }

    /** ValueType enum. */
    enum ValueType {
        COIN = 0,
        DIAMOND = 1,
        VAULT_KEY = 2,
        SCRATCH_CARD = 3,
        MOMENTS = 4,
        VIP_EXP = 5,
        MASTER_LICENCE = 6
    }

    /** Properties of an ItemValueInfo. */
    interface IItemValueInfo {

        /** ItemValueInfo valueType */
        valueType?: (CVP.ValueType|null);

        /** ItemValueInfo finalValue */
        finalValue?: (number|null);

        /** ItemValueInfo originValue */
        originValue?: (number|null);
    }

    /** Represents an ItemValueInfo. */
    class ItemValueInfo implements IItemValueInfo {

        /**
         * Constructs a new ItemValueInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IItemValueInfo);

        /** ItemValueInfo valueType. */
        public valueType: CVP.ValueType;

        /** ItemValueInfo finalValue. */
        public finalValue: number;

        /** ItemValueInfo originValue. */
        public originValue: number;

        /**
         * Creates a new ItemValueInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemValueInfo instance
         */
        public static create(properties?: CVP.IItemValueInfo): CVP.ItemValueInfo;

        /**
         * Encodes the specified ItemValueInfo message. Does not implicitly {@link CVP.ItemValueInfo.verify|verify} messages.
         * @param message ItemValueInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IItemValueInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemValueInfo message, length delimited. Does not implicitly {@link CVP.ItemValueInfo.verify|verify} messages.
         * @param message ItemValueInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IItemValueInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemValueInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemValueInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.ItemValueInfo;

        /**
         * Decodes an ItemValueInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemValueInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.ItemValueInfo;

        /**
         * Verifies an ItemValueInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemValueInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemValueInfo
         */
        public static fromObject(object: { [k: string]: any }): CVP.ItemValueInfo;

        /**
         * Creates a plain object from an ItemValueInfo message. Also converts values to other types if specified.
         * @param message ItemValueInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.ItemValueInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemValueInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an ItemInfo. */
    interface IItemInfo {

        /** ItemInfo itemType */
        itemType?: (CVP.ItemType|null);

        /** ItemInfo valueInfoList */
        valueInfoList?: (CVP.IItemValueInfo[]|null);

        /** ItemInfo itemId */
        itemId?: (string|null);

        /** ItemInfo finalSku */
        finalSku?: (string|null);

        /** ItemInfo originSku */
        originSku?: (string|null);
    }

    /** Represents an ItemInfo. */
    class ItemInfo implements IItemInfo {

        /**
         * Constructs a new ItemInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IItemInfo);

        /** ItemInfo itemType. */
        public itemType: CVP.ItemType;

        /** ItemInfo valueInfoList. */
        public valueInfoList: CVP.IItemValueInfo[];

        /** ItemInfo itemId. */
        public itemId: string;

        /** ItemInfo finalSku. */
        public finalSku: string;

        /** ItemInfo originSku. */
        public originSku: string;

        /**
         * Creates a new ItemInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemInfo instance
         */
        public static create(properties?: CVP.IItemInfo): CVP.ItemInfo;

        /**
         * Encodes the specified ItemInfo message. Does not implicitly {@link CVP.ItemInfo.verify|verify} messages.
         * @param message ItemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemInfo message, length delimited. Does not implicitly {@link CVP.ItemInfo.verify|verify} messages.
         * @param message ItemInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IItemInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.ItemInfo;

        /**
         * Decodes an ItemInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.ItemInfo;

        /**
         * Verifies an ItemInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemInfo
         */
        public static fromObject(object: { [k: string]: any }): CVP.ItemInfo;

        /**
         * Creates a plain object from an ItemInfo message. Also converts values to other types if specified.
         * @param message ItemInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.ItemInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ShopItem. */
    interface IShopItem {

        /** ShopItem itemInfo */
        itemInfo?: (CVP.IItemInfo|null);

        /** ShopItem isBestValue */
        isBestValue?: (boolean|null);

        /** ShopItem isMostPopular */
        isMostPopular?: (boolean|null);

        /** ShopItem freePercent */
        freePercent?: (number|null);

        /** ShopItem isFirstPay */
        isFirstPay?: (boolean|null);

        /** ShopItem leftTime */
        leftTime?: (string|null);

        /** ShopItem firstItemInfo */
        firstItemInfo?: (CVP.IItemInfo|null);
    }

    /** Represents a ShopItem. */
    class ShopItem implements IShopItem {

        /**
         * Constructs a new ShopItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IShopItem);

        /** ShopItem itemInfo. */
        public itemInfo?: (CVP.IItemInfo|null);

        /** ShopItem isBestValue. */
        public isBestValue: boolean;

        /** ShopItem isMostPopular. */
        public isMostPopular: boolean;

        /** ShopItem freePercent. */
        public freePercent: number;

        /** ShopItem isFirstPay. */
        public isFirstPay: boolean;

        /** ShopItem leftTime. */
        public leftTime: string;

        /** ShopItem firstItemInfo. */
        public firstItemInfo?: (CVP.IItemInfo|null);

        /**
         * Creates a new ShopItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ShopItem instance
         */
        public static create(properties?: CVP.IShopItem): CVP.ShopItem;

        /**
         * Encodes the specified ShopItem message. Does not implicitly {@link CVP.ShopItem.verify|verify} messages.
         * @param message ShopItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IShopItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ShopItem message, length delimited. Does not implicitly {@link CVP.ShopItem.verify|verify} messages.
         * @param message ShopItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IShopItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShopItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ShopItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.ShopItem;

        /**
         * Decodes a ShopItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ShopItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.ShopItem;

        /**
         * Verifies a ShopItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ShopItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ShopItem
         */
        public static fromObject(object: { [k: string]: any }): CVP.ShopItem;

        /**
         * Creates a plain object from a ShopItem message. Also converts values to other types if specified.
         * @param message ShopItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.ShopItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ShopItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PigItem. */
    interface IPigItem {

        /** PigItem itemInfo */
        itemInfo?: (CVP.IItemInfo|null);

        /** PigItem isFull */
        isFull?: (boolean|null);
    }

    /** Represents a PigItem. */
    class PigItem implements IPigItem {

        /**
         * Constructs a new PigItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IPigItem);

        /** PigItem itemInfo. */
        public itemInfo?: (CVP.IItemInfo|null);

        /** PigItem isFull. */
        public isFull: boolean;

        /**
         * Creates a new PigItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PigItem instance
         */
        public static create(properties?: CVP.IPigItem): CVP.PigItem;

        /**
         * Encodes the specified PigItem message. Does not implicitly {@link CVP.PigItem.verify|verify} messages.
         * @param message PigItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IPigItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PigItem message, length delimited. Does not implicitly {@link CVP.PigItem.verify|verify} messages.
         * @param message PigItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IPigItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PigItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PigItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.PigItem;

        /**
         * Decodes a PigItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PigItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.PigItem;

        /**
         * Verifies a PigItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PigItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PigItem
         */
        public static fromObject(object: { [k: string]: any }): CVP.PigItem;

        /**
         * Creates a plain object from a PigItem message. Also converts values to other types if specified.
         * @param message PigItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.PigItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PigItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KeyItem. */
    interface IKeyItem {

        /** KeyItem itemInfo */
        itemInfo?: (CVP.IItemInfo|null);
    }

    /** Represents a KeyItem. */
    class KeyItem implements IKeyItem {

        /**
         * Constructs a new KeyItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IKeyItem);

        /** KeyItem itemInfo. */
        public itemInfo?: (CVP.IItemInfo|null);

        /**
         * Creates a new KeyItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KeyItem instance
         */
        public static create(properties?: CVP.IKeyItem): CVP.KeyItem;

        /**
         * Encodes the specified KeyItem message. Does not implicitly {@link CVP.KeyItem.verify|verify} messages.
         * @param message KeyItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IKeyItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KeyItem message, length delimited. Does not implicitly {@link CVP.KeyItem.verify|verify} messages.
         * @param message KeyItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IKeyItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KeyItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KeyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.KeyItem;

        /**
         * Decodes a KeyItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KeyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.KeyItem;

        /**
         * Verifies a KeyItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KeyItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KeyItem
         */
        public static fromObject(object: { [k: string]: any }): CVP.KeyItem;

        /**
         * Creates a plain object from a KeyItem message. Also converts values to other types if specified.
         * @param message KeyItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.KeyItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KeyItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GoldenWheelItem. */
    interface IGoldenWheelItem {

        /** GoldenWheelItem vipLevel */
        vipLevel?: (number|null);

        /** GoldenWheelItem itemInfo */
        itemInfo?: (CVP.IItemInfo|null);
    }

    /** Represents a GoldenWheelItem. */
    class GoldenWheelItem implements IGoldenWheelItem {

        /**
         * Constructs a new GoldenWheelItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IGoldenWheelItem);

        /** GoldenWheelItem vipLevel. */
        public vipLevel: number;

        /** GoldenWheelItem itemInfo. */
        public itemInfo?: (CVP.IItemInfo|null);

        /**
         * Creates a new GoldenWheelItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GoldenWheelItem instance
         */
        public static create(properties?: CVP.IGoldenWheelItem): CVP.GoldenWheelItem;

        /**
         * Encodes the specified GoldenWheelItem message. Does not implicitly {@link CVP.GoldenWheelItem.verify|verify} messages.
         * @param message GoldenWheelItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IGoldenWheelItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GoldenWheelItem message, length delimited. Does not implicitly {@link CVP.GoldenWheelItem.verify|verify} messages.
         * @param message GoldenWheelItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IGoldenWheelItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GoldenWheelItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GoldenWheelItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.GoldenWheelItem;

        /**
         * Decodes a GoldenWheelItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GoldenWheelItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.GoldenWheelItem;

        /**
         * Verifies a GoldenWheelItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GoldenWheelItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GoldenWheelItem
         */
        public static fromObject(object: { [k: string]: any }): CVP.GoldenWheelItem;

        /**
         * Creates a plain object from a GoldenWheelItem message. Also converts values to other types if specified.
         * @param message GoldenWheelItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.GoldenWheelItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GoldenWheelItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** RewardType enum. */
    enum RewardType {
        COINS = 1,
        CARD = 2
    }

    /** Properties of a RequestAchievement. */
    interface IRequestAchievement {

        /** RequestAchievement commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestAchievement. */
    class RequestAchievement implements IRequestAchievement {

        /**
         * Constructs a new RequestAchievement.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestAchievement);

        /** RequestAchievement commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestAchievement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestAchievement instance
         */
        public static create(properties?: CVP.IRequestAchievement): CVP.RequestAchievement;

        /**
         * Encodes the specified RequestAchievement message. Does not implicitly {@link CVP.RequestAchievement.verify|verify} messages.
         * @param message RequestAchievement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestAchievement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestAchievement message, length delimited. Does not implicitly {@link CVP.RequestAchievement.verify|verify} messages.
         * @param message RequestAchievement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestAchievement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestAchievement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestAchievement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestAchievement;

        /**
         * Decodes a RequestAchievement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestAchievement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestAchievement;

        /**
         * Verifies a RequestAchievement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestAchievement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestAchievement
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestAchievement;

        /**
         * Creates a plain object from a RequestAchievement message. Also converts values to other types if specified.
         * @param message RequestAchievement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestAchievement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestAchievement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestAchievementResult. */
    interface IRequestAchievementResult {

        /** RequestAchievementResult AchievementPoints */
        AchievementPoints?: (number|null);

        /** RequestAchievementResult AchievementList */
        AchievementList?: (CVP.IAchievementInfo[]|null);
    }

    /** Represents a RequestAchievementResult. */
    class RequestAchievementResult implements IRequestAchievementResult {

        /**
         * Constructs a new RequestAchievementResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestAchievementResult);

        /** RequestAchievementResult AchievementPoints. */
        public AchievementPoints: number;

        /** RequestAchievementResult AchievementList. */
        public AchievementList: CVP.IAchievementInfo[];

        /**
         * Creates a new RequestAchievementResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestAchievementResult instance
         */
        public static create(properties?: CVP.IRequestAchievementResult): CVP.RequestAchievementResult;

        /**
         * Encodes the specified RequestAchievementResult message. Does not implicitly {@link CVP.RequestAchievementResult.verify|verify} messages.
         * @param message RequestAchievementResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestAchievementResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestAchievementResult message, length delimited. Does not implicitly {@link CVP.RequestAchievementResult.verify|verify} messages.
         * @param message RequestAchievementResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestAchievementResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestAchievementResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestAchievementResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestAchievementResult;

        /**
         * Decodes a RequestAchievementResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestAchievementResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestAchievementResult;

        /**
         * Verifies a RequestAchievementResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestAchievementResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestAchievementResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestAchievementResult;

        /**
         * Creates a plain object from a RequestAchievementResult message. Also converts values to other types if specified.
         * @param message RequestAchievementResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestAchievementResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestAchievementResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AchievementInfo. */
    interface IAchievementInfo {

        /** AchievementInfo achievementId */
        achievementId?: (number|null);

        /** AchievementInfo title */
        title?: (string|null);

        /** AchievementInfo description */
        description?: (string|null);

        /** AchievementInfo achievementPoints */
        achievementPoints?: (number|null);

        /** AchievementInfo achievementReward */
        achievementReward?: (CVP.IAchievementReward|null);

        /** AchievementInfo nowProgress */
        nowProgress?: (number|null);

        /** AchievementInfo progress */
        progress?: (number|null);
    }

    /** Represents an AchievementInfo. */
    class AchievementInfo implements IAchievementInfo {

        /**
         * Constructs a new AchievementInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IAchievementInfo);

        /** AchievementInfo achievementId. */
        public achievementId: number;

        /** AchievementInfo title. */
        public title: string;

        /** AchievementInfo description. */
        public description: string;

        /** AchievementInfo achievementPoints. */
        public achievementPoints: number;

        /** AchievementInfo achievementReward. */
        public achievementReward?: (CVP.IAchievementReward|null);

        /** AchievementInfo nowProgress. */
        public nowProgress: number;

        /** AchievementInfo progress. */
        public progress: number;

        /**
         * Creates a new AchievementInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AchievementInfo instance
         */
        public static create(properties?: CVP.IAchievementInfo): CVP.AchievementInfo;

        /**
         * Encodes the specified AchievementInfo message. Does not implicitly {@link CVP.AchievementInfo.verify|verify} messages.
         * @param message AchievementInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IAchievementInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AchievementInfo message, length delimited. Does not implicitly {@link CVP.AchievementInfo.verify|verify} messages.
         * @param message AchievementInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IAchievementInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AchievementInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AchievementInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.AchievementInfo;

        /**
         * Decodes an AchievementInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AchievementInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.AchievementInfo;

        /**
         * Verifies an AchievementInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AchievementInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AchievementInfo
         */
        public static fromObject(object: { [k: string]: any }): CVP.AchievementInfo;

        /**
         * Creates a plain object from an AchievementInfo message. Also converts values to other types if specified.
         * @param message AchievementInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.AchievementInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AchievementInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestFinishAchievement. */
    interface IRequestFinishAchievement {

        /** RequestFinishAchievement achievementId */
        achievementId?: (number|null);
    }

    /** Represents a RequestFinishAchievement. */
    class RequestFinishAchievement implements IRequestFinishAchievement {

        /**
         * Constructs a new RequestFinishAchievement.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestFinishAchievement);

        /** RequestFinishAchievement achievementId. */
        public achievementId: number;

        /**
         * Creates a new RequestFinishAchievement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestFinishAchievement instance
         */
        public static create(properties?: CVP.IRequestFinishAchievement): CVP.RequestFinishAchievement;

        /**
         * Encodes the specified RequestFinishAchievement message. Does not implicitly {@link CVP.RequestFinishAchievement.verify|verify} messages.
         * @param message RequestFinishAchievement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestFinishAchievement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestFinishAchievement message, length delimited. Does not implicitly {@link CVP.RequestFinishAchievement.verify|verify} messages.
         * @param message RequestFinishAchievement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestFinishAchievement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestFinishAchievement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestFinishAchievement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestFinishAchievement;

        /**
         * Decodes a RequestFinishAchievement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestFinishAchievement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestFinishAchievement;

        /**
         * Verifies a RequestFinishAchievement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestFinishAchievement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestFinishAchievement
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestFinishAchievement;

        /**
         * Creates a plain object from a RequestFinishAchievement message. Also converts values to other types if specified.
         * @param message RequestFinishAchievement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestFinishAchievement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestFinishAchievement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestFinishAchievementResult. */
    interface IRequestFinishAchievementResult {

        /** RequestFinishAchievementResult achievement */
        achievement?: (CVP.IAchievementInfo|null);

        /** RequestFinishAchievementResult achievementReward */
        achievementReward?: (CVP.IAchievementReward|null);

        /** RequestFinishAchievementResult finishAchievementNumber */
        finishAchievementNumber?: (number|null);
    }

    /** Represents a RequestFinishAchievementResult. */
    class RequestFinishAchievementResult implements IRequestFinishAchievementResult {

        /**
         * Constructs a new RequestFinishAchievementResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestFinishAchievementResult);

        /** RequestFinishAchievementResult achievement. */
        public achievement?: (CVP.IAchievementInfo|null);

        /** RequestFinishAchievementResult achievementReward. */
        public achievementReward?: (CVP.IAchievementReward|null);

        /** RequestFinishAchievementResult finishAchievementNumber. */
        public finishAchievementNumber: number;

        /**
         * Creates a new RequestFinishAchievementResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestFinishAchievementResult instance
         */
        public static create(properties?: CVP.IRequestFinishAchievementResult): CVP.RequestFinishAchievementResult;

        /**
         * Encodes the specified RequestFinishAchievementResult message. Does not implicitly {@link CVP.RequestFinishAchievementResult.verify|verify} messages.
         * @param message RequestFinishAchievementResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestFinishAchievementResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestFinishAchievementResult message, length delimited. Does not implicitly {@link CVP.RequestFinishAchievementResult.verify|verify} messages.
         * @param message RequestFinishAchievementResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestFinishAchievementResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestFinishAchievementResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestFinishAchievementResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestFinishAchievementResult;

        /**
         * Decodes a RequestFinishAchievementResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestFinishAchievementResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestFinishAchievementResult;

        /**
         * Verifies a RequestFinishAchievementResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestFinishAchievementResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestFinishAchievementResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestFinishAchievementResult;

        /**
         * Creates a plain object from a RequestFinishAchievementResult message. Also converts values to other types if specified.
         * @param message RequestFinishAchievementResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestFinishAchievementResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestFinishAchievementResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AchievementReward. */
    interface IAchievementReward {

        /** AchievementReward rewardType */
        rewardType?: (CVP.RewardType|null);

        /** AchievementReward rewardNum */
        rewardNum?: (number|null);

        /** AchievementReward achievementPoints */
        achievementPoints?: (number|null);
    }

    /** Represents an AchievementReward. */
    class AchievementReward implements IAchievementReward {

        /**
         * Constructs a new AchievementReward.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IAchievementReward);

        /** AchievementReward rewardType. */
        public rewardType: CVP.RewardType;

        /** AchievementReward rewardNum. */
        public rewardNum: number;

        /** AchievementReward achievementPoints. */
        public achievementPoints: number;

        /**
         * Creates a new AchievementReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AchievementReward instance
         */
        public static create(properties?: CVP.IAchievementReward): CVP.AchievementReward;

        /**
         * Encodes the specified AchievementReward message. Does not implicitly {@link CVP.AchievementReward.verify|verify} messages.
         * @param message AchievementReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IAchievementReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AchievementReward message, length delimited. Does not implicitly {@link CVP.AchievementReward.verify|verify} messages.
         * @param message AchievementReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IAchievementReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AchievementReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AchievementReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.AchievementReward;

        /**
         * Decodes an AchievementReward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AchievementReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.AchievementReward;

        /**
         * Verifies an AchievementReward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AchievementReward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AchievementReward
         */
        public static fromObject(object: { [k: string]: any }): CVP.AchievementReward;

        /**
         * Creates a plain object from an AchievementReward message. Also converts values to other types if specified.
         * @param message AchievementReward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.AchievementReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AchievementReward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestMission. */
    interface IRequestMission {

        /** RequestMission commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestMission. */
    class RequestMission implements IRequestMission {

        /**
         * Constructs a new RequestMission.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestMission);

        /** RequestMission commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestMission instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestMission instance
         */
        public static create(properties?: CVP.IRequestMission): CVP.RequestMission;

        /**
         * Encodes the specified RequestMission message. Does not implicitly {@link CVP.RequestMission.verify|verify} messages.
         * @param message RequestMission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestMission, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestMission message, length delimited. Does not implicitly {@link CVP.RequestMission.verify|verify} messages.
         * @param message RequestMission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestMission, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestMission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestMission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestMission;

        /**
         * Decodes a RequestMission message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestMission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestMission;

        /**
         * Verifies a RequestMission message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestMission message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestMission
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestMission;

        /**
         * Creates a plain object from a RequestMission message. Also converts values to other types if specified.
         * @param message RequestMission
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestMission, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestMission to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestMissionResult. */
    interface IRequestMissionResult {

        /** RequestMissionResult missionList */
        missionList?: (CVP.IMissionInfo[]|null);

        /** RequestMissionResult missionWaitInfo */
        missionWaitInfo?: (CVP.IMissionWaitInfo[]|null);

        /** RequestMissionResult freeChance */
        freeChance?: (boolean|null);
    }

    /** Represents a RequestMissionResult. */
    class RequestMissionResult implements IRequestMissionResult {

        /**
         * Constructs a new RequestMissionResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestMissionResult);

        /** RequestMissionResult missionList. */
        public missionList: CVP.IMissionInfo[];

        /** RequestMissionResult missionWaitInfo. */
        public missionWaitInfo: CVP.IMissionWaitInfo[];

        /** RequestMissionResult freeChance. */
        public freeChance: boolean;

        /**
         * Creates a new RequestMissionResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestMissionResult instance
         */
        public static create(properties?: CVP.IRequestMissionResult): CVP.RequestMissionResult;

        /**
         * Encodes the specified RequestMissionResult message. Does not implicitly {@link CVP.RequestMissionResult.verify|verify} messages.
         * @param message RequestMissionResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestMissionResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestMissionResult message, length delimited. Does not implicitly {@link CVP.RequestMissionResult.verify|verify} messages.
         * @param message RequestMissionResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestMissionResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestMissionResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestMissionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestMissionResult;

        /**
         * Decodes a RequestMissionResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestMissionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestMissionResult;

        /**
         * Verifies a RequestMissionResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestMissionResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestMissionResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestMissionResult;

        /**
         * Creates a plain object from a RequestMissionResult message. Also converts values to other types if specified.
         * @param message RequestMissionResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestMissionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestMissionResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MissionInfo. */
    interface IMissionInfo {

        /** MissionInfo title */
        title?: (string|null);

        /** MissionInfo description */
        description?: (string|null);

        /** MissionInfo coins */
        coins?: (number|null);

        /** MissionInfo nowProgress */
        nowProgress?: (number|null);

        /** MissionInfo progress */
        progress?: (number|null);

        /** MissionInfo missionId */
        missionId?: (number|null);

        /** MissionInfo missionType */
        missionType?: (number|null);
    }

    /** Represents a MissionInfo. */
    class MissionInfo implements IMissionInfo {

        /**
         * Constructs a new MissionInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IMissionInfo);

        /** MissionInfo title. */
        public title: string;

        /** MissionInfo description. */
        public description: string;

        /** MissionInfo coins. */
        public coins: number;

        /** MissionInfo nowProgress. */
        public nowProgress: number;

        /** MissionInfo progress. */
        public progress: number;

        /** MissionInfo missionId. */
        public missionId: number;

        /** MissionInfo missionType. */
        public missionType: number;

        /**
         * Creates a new MissionInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MissionInfo instance
         */
        public static create(properties?: CVP.IMissionInfo): CVP.MissionInfo;

        /**
         * Encodes the specified MissionInfo message. Does not implicitly {@link CVP.MissionInfo.verify|verify} messages.
         * @param message MissionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IMissionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MissionInfo message, length delimited. Does not implicitly {@link CVP.MissionInfo.verify|verify} messages.
         * @param message MissionInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IMissionInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MissionInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MissionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.MissionInfo;

        /**
         * Decodes a MissionInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MissionInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.MissionInfo;

        /**
         * Verifies a MissionInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MissionInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MissionInfo
         */
        public static fromObject(object: { [k: string]: any }): CVP.MissionInfo;

        /**
         * Creates a plain object from a MissionInfo message. Also converts values to other types if specified.
         * @param message MissionInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.MissionInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MissionInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MissionWaitInfo. */
    interface IMissionWaitInfo {

        /** MissionWaitInfo time */
        time?: (number|null);

        /** MissionWaitInfo missionId */
        missionId?: (number|null);
    }

    /** Represents a MissionWaitInfo. */
    class MissionWaitInfo implements IMissionWaitInfo {

        /**
         * Constructs a new MissionWaitInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IMissionWaitInfo);

        /** MissionWaitInfo time. */
        public time: number;

        /** MissionWaitInfo missionId. */
        public missionId: number;

        /**
         * Creates a new MissionWaitInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MissionWaitInfo instance
         */
        public static create(properties?: CVP.IMissionWaitInfo): CVP.MissionWaitInfo;

        /**
         * Encodes the specified MissionWaitInfo message. Does not implicitly {@link CVP.MissionWaitInfo.verify|verify} messages.
         * @param message MissionWaitInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IMissionWaitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MissionWaitInfo message, length delimited. Does not implicitly {@link CVP.MissionWaitInfo.verify|verify} messages.
         * @param message MissionWaitInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IMissionWaitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MissionWaitInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MissionWaitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.MissionWaitInfo;

        /**
         * Decodes a MissionWaitInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MissionWaitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.MissionWaitInfo;

        /**
         * Verifies a MissionWaitInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MissionWaitInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MissionWaitInfo
         */
        public static fromObject(object: { [k: string]: any }): CVP.MissionWaitInfo;

        /**
         * Creates a plain object from a MissionWaitInfo message. Also converts values to other types if specified.
         * @param message MissionWaitInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.MissionWaitInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MissionWaitInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestRefreshMission. */
    interface IRequestRefreshMission {

        /** RequestRefreshMission commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestRefreshMission isAD */
        isAD?: (boolean|null);

        /** RequestRefreshMission missionId */
        missionId?: (number|null);
    }

    /** Represents a RequestRefreshMission. */
    class RequestRefreshMission implements IRequestRefreshMission {

        /**
         * Constructs a new RequestRefreshMission.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestRefreshMission);

        /** RequestRefreshMission commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestRefreshMission isAD. */
        public isAD: boolean;

        /** RequestRefreshMission missionId. */
        public missionId: number;

        /**
         * Creates a new RequestRefreshMission instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestRefreshMission instance
         */
        public static create(properties?: CVP.IRequestRefreshMission): CVP.RequestRefreshMission;

        /**
         * Encodes the specified RequestRefreshMission message. Does not implicitly {@link CVP.RequestRefreshMission.verify|verify} messages.
         * @param message RequestRefreshMission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestRefreshMission, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestRefreshMission message, length delimited. Does not implicitly {@link CVP.RequestRefreshMission.verify|verify} messages.
         * @param message RequestRefreshMission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestRefreshMission, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestRefreshMission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestRefreshMission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestRefreshMission;

        /**
         * Decodes a RequestRefreshMission message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestRefreshMission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestRefreshMission;

        /**
         * Verifies a RequestRefreshMission message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestRefreshMission message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestRefreshMission
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestRefreshMission;

        /**
         * Creates a plain object from a RequestRefreshMission message. Also converts values to other types if specified.
         * @param message RequestRefreshMission
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestRefreshMission, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestRefreshMission to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestRefreshMissionResult. */
    interface IRequestRefreshMissionResult {

        /** RequestRefreshMissionResult missionId */
        missionId?: (number|null);

        /** RequestRefreshMissionResult mission */
        mission?: (CVP.IMissionInfo|null);
    }

    /** Represents a RequestRefreshMissionResult. */
    class RequestRefreshMissionResult implements IRequestRefreshMissionResult {

        /**
         * Constructs a new RequestRefreshMissionResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestRefreshMissionResult);

        /** RequestRefreshMissionResult missionId. */
        public missionId: number;

        /** RequestRefreshMissionResult mission. */
        public mission?: (CVP.IMissionInfo|null);

        /**
         * Creates a new RequestRefreshMissionResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestRefreshMissionResult instance
         */
        public static create(properties?: CVP.IRequestRefreshMissionResult): CVP.RequestRefreshMissionResult;

        /**
         * Encodes the specified RequestRefreshMissionResult message. Does not implicitly {@link CVP.RequestRefreshMissionResult.verify|verify} messages.
         * @param message RequestRefreshMissionResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestRefreshMissionResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestRefreshMissionResult message, length delimited. Does not implicitly {@link CVP.RequestRefreshMissionResult.verify|verify} messages.
         * @param message RequestRefreshMissionResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestRefreshMissionResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestRefreshMissionResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestRefreshMissionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestRefreshMissionResult;

        /**
         * Decodes a RequestRefreshMissionResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestRefreshMissionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestRefreshMissionResult;

        /**
         * Verifies a RequestRefreshMissionResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestRefreshMissionResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestRefreshMissionResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestRefreshMissionResult;

        /**
         * Creates a plain object from a RequestRefreshMissionResult message. Also converts values to other types if specified.
         * @param message RequestRefreshMissionResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestRefreshMissionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestRefreshMissionResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestOneMission. */
    interface IRequestOneMission {

        /** RequestOneMission commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestOneMission missionId */
        missionId?: (number|null);
    }

    /** Represents a RequestOneMission. */
    class RequestOneMission implements IRequestOneMission {

        /**
         * Constructs a new RequestOneMission.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestOneMission);

        /** RequestOneMission commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestOneMission missionId. */
        public missionId: number;

        /**
         * Creates a new RequestOneMission instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestOneMission instance
         */
        public static create(properties?: CVP.IRequestOneMission): CVP.RequestOneMission;

        /**
         * Encodes the specified RequestOneMission message. Does not implicitly {@link CVP.RequestOneMission.verify|verify} messages.
         * @param message RequestOneMission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestOneMission, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestOneMission message, length delimited. Does not implicitly {@link CVP.RequestOneMission.verify|verify} messages.
         * @param message RequestOneMission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestOneMission, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestOneMission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestOneMission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestOneMission;

        /**
         * Decodes a RequestOneMission message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestOneMission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestOneMission;

        /**
         * Verifies a RequestOneMission message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestOneMission message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestOneMission
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestOneMission;

        /**
         * Creates a plain object from a RequestOneMission message. Also converts values to other types if specified.
         * @param message RequestOneMission
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestOneMission, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestOneMission to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestOneMissionResult. */
    interface IRequestOneMissionResult {

        /** RequestOneMissionResult mission */
        mission?: (CVP.IMissionInfo|null);
    }

    /** Represents a RequestOneMissionResult. */
    class RequestOneMissionResult implements IRequestOneMissionResult {

        /**
         * Constructs a new RequestOneMissionResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestOneMissionResult);

        /** RequestOneMissionResult mission. */
        public mission?: (CVP.IMissionInfo|null);

        /**
         * Creates a new RequestOneMissionResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestOneMissionResult instance
         */
        public static create(properties?: CVP.IRequestOneMissionResult): CVP.RequestOneMissionResult;

        /**
         * Encodes the specified RequestOneMissionResult message. Does not implicitly {@link CVP.RequestOneMissionResult.verify|verify} messages.
         * @param message RequestOneMissionResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestOneMissionResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestOneMissionResult message, length delimited. Does not implicitly {@link CVP.RequestOneMissionResult.verify|verify} messages.
         * @param message RequestOneMissionResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestOneMissionResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestOneMissionResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestOneMissionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestOneMissionResult;

        /**
         * Decodes a RequestOneMissionResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestOneMissionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestOneMissionResult;

        /**
         * Verifies a RequestOneMissionResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestOneMissionResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestOneMissionResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestOneMissionResult;

        /**
         * Creates a plain object from a RequestOneMissionResult message. Also converts values to other types if specified.
         * @param message RequestOneMissionResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestOneMissionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestOneMissionResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestFinishMission. */
    interface IRequestFinishMission {

        /** RequestFinishMission commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestFinishMission missionId */
        missionId?: (number|null);
    }

    /** Represents a RequestFinishMission. */
    class RequestFinishMission implements IRequestFinishMission {

        /**
         * Constructs a new RequestFinishMission.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestFinishMission);

        /** RequestFinishMission commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestFinishMission missionId. */
        public missionId: number;

        /**
         * Creates a new RequestFinishMission instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestFinishMission instance
         */
        public static create(properties?: CVP.IRequestFinishMission): CVP.RequestFinishMission;

        /**
         * Encodes the specified RequestFinishMission message. Does not implicitly {@link CVP.RequestFinishMission.verify|verify} messages.
         * @param message RequestFinishMission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestFinishMission, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestFinishMission message, length delimited. Does not implicitly {@link CVP.RequestFinishMission.verify|verify} messages.
         * @param message RequestFinishMission message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestFinishMission, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestFinishMission message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestFinishMission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestFinishMission;

        /**
         * Decodes a RequestFinishMission message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestFinishMission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestFinishMission;

        /**
         * Verifies a RequestFinishMission message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestFinishMission message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestFinishMission
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestFinishMission;

        /**
         * Creates a plain object from a RequestFinishMission message. Also converts values to other types if specified.
         * @param message RequestFinishMission
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestFinishMission, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestFinishMission to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestFinishMissionResult. */
    interface IRequestFinishMissionResult {

        /** RequestFinishMissionResult reward */
        reward?: (number|null);

        /** RequestFinishMissionResult time */
        time?: (number|null);
    }

    /** Represents a RequestFinishMissionResult. */
    class RequestFinishMissionResult implements IRequestFinishMissionResult {

        /**
         * Constructs a new RequestFinishMissionResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestFinishMissionResult);

        /** RequestFinishMissionResult reward. */
        public reward: number;

        /** RequestFinishMissionResult time. */
        public time: number;

        /**
         * Creates a new RequestFinishMissionResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestFinishMissionResult instance
         */
        public static create(properties?: CVP.IRequestFinishMissionResult): CVP.RequestFinishMissionResult;

        /**
         * Encodes the specified RequestFinishMissionResult message. Does not implicitly {@link CVP.RequestFinishMissionResult.verify|verify} messages.
         * @param message RequestFinishMissionResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestFinishMissionResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestFinishMissionResult message, length delimited. Does not implicitly {@link CVP.RequestFinishMissionResult.verify|verify} messages.
         * @param message RequestFinishMissionResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestFinishMissionResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestFinishMissionResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestFinishMissionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestFinishMissionResult;

        /**
         * Decodes a RequestFinishMissionResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestFinishMissionResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestFinishMissionResult;

        /**
         * Verifies a RequestFinishMissionResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestFinishMissionResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestFinishMissionResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestFinishMissionResult;

        /**
         * Creates a plain object from a RequestFinishMissionResult message. Also converts values to other types if specified.
         * @param message RequestFinishMissionResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestFinishMissionResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestFinishMissionResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateAchievementPush. */
    interface IUpdateAchievementPush {

        /** UpdateAchievementPush pushType */
        pushType?: (number|null);

        /** UpdateAchievementPush text */
        text?: (string|null);

        /** UpdateAchievementPush target */
        target?: (number|null);
    }

    /** Represents an UpdateAchievementPush. */
    class UpdateAchievementPush implements IUpdateAchievementPush {

        /**
         * Constructs a new UpdateAchievementPush.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IUpdateAchievementPush);

        /** UpdateAchievementPush pushType. */
        public pushType: number;

        /** UpdateAchievementPush text. */
        public text: string;

        /** UpdateAchievementPush target. */
        public target: number;

        /**
         * Creates a new UpdateAchievementPush instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateAchievementPush instance
         */
        public static create(properties?: CVP.IUpdateAchievementPush): CVP.UpdateAchievementPush;

        /**
         * Encodes the specified UpdateAchievementPush message. Does not implicitly {@link CVP.UpdateAchievementPush.verify|verify} messages.
         * @param message UpdateAchievementPush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IUpdateAchievementPush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateAchievementPush message, length delimited. Does not implicitly {@link CVP.UpdateAchievementPush.verify|verify} messages.
         * @param message UpdateAchievementPush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IUpdateAchievementPush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateAchievementPush message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateAchievementPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.UpdateAchievementPush;

        /**
         * Decodes an UpdateAchievementPush message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateAchievementPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.UpdateAchievementPush;

        /**
         * Verifies an UpdateAchievementPush message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateAchievementPush message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateAchievementPush
         */
        public static fromObject(object: { [k: string]: any }): CVP.UpdateAchievementPush;

        /**
         * Creates a plain object from an UpdateAchievementPush message. Also converts values to other types if specified.
         * @param message UpdateAchievementPush
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.UpdateAchievementPush, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateAchievementPush to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** ADPoint enum. */
    enum ADPoint {
        SHOP = 1,
        BOUNS = 2,
        LEVEL = 3,
        TABLEPLAQUE1 = 4,
        TABLEPLAQUE2 = 5,
        TABLEPLAQUE3 = 6,
        QUEST = 7
    }

    /** AdShopItmeState enum. */
    enum AdShopItmeState {
        COLLECTED = 1,
        UNLOCK = 2,
        LOCK = 3
    }

    /** Properties of a RequestAD. */
    interface IRequestAD {

        /** RequestAD commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestAD adPoint */
        adPoint?: (CVP.ADPoint|null);
    }

    /** Represents a RequestAD. */
    class RequestAD implements IRequestAD {

        /**
         * Constructs a new RequestAD.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestAD);

        /** RequestAD commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestAD adPoint. */
        public adPoint: CVP.ADPoint;

        /**
         * Creates a new RequestAD instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestAD instance
         */
        public static create(properties?: CVP.IRequestAD): CVP.RequestAD;

        /**
         * Encodes the specified RequestAD message. Does not implicitly {@link CVP.RequestAD.verify|verify} messages.
         * @param message RequestAD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestAD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestAD message, length delimited. Does not implicitly {@link CVP.RequestAD.verify|verify} messages.
         * @param message RequestAD message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestAD, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestAD message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestAD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestAD;

        /**
         * Decodes a RequestAD message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestAD
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestAD;

        /**
         * Verifies a RequestAD message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestAD message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestAD
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestAD;

        /**
         * Creates a plain object from a RequestAD message. Also converts values to other types if specified.
         * @param message RequestAD
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestAD, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestAD to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestADResult. */
    interface IRequestADResult {

        /** RequestADResult playAD */
        playAD?: (boolean|null);

        /** RequestADResult adPoint */
        adPoint?: (CVP.ADPoint|null);

        /** RequestADResult adTime */
        adTime?: (number|null);

        /** RequestADResult adCoins */
        adCoins?: (number|null);
    }

    /** Represents a RequestADResult. */
    class RequestADResult implements IRequestADResult {

        /**
         * Constructs a new RequestADResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestADResult);

        /** RequestADResult playAD. */
        public playAD: boolean;

        /** RequestADResult adPoint. */
        public adPoint: CVP.ADPoint;

        /** RequestADResult adTime. */
        public adTime: number;

        /** RequestADResult adCoins. */
        public adCoins: number;

        /**
         * Creates a new RequestADResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestADResult instance
         */
        public static create(properties?: CVP.IRequestADResult): CVP.RequestADResult;

        /**
         * Encodes the specified RequestADResult message. Does not implicitly {@link CVP.RequestADResult.verify|verify} messages.
         * @param message RequestADResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestADResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestADResult message, length delimited. Does not implicitly {@link CVP.RequestADResult.verify|verify} messages.
         * @param message RequestADResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestADResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestADResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestADResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestADResult;

        /**
         * Decodes a RequestADResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestADResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestADResult;

        /**
         * Verifies a RequestADResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestADResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestADResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestADResult;

        /**
         * Creates a plain object from a RequestADResult message. Also converts values to other types if specified.
         * @param message RequestADResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestADResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestADResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestADReward. */
    interface IRequestADReward {

        /** RequestADReward commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestADReward adPoint */
        adPoint?: (CVP.ADPoint|null);
    }

    /** Represents a RequestADReward. */
    class RequestADReward implements IRequestADReward {

        /**
         * Constructs a new RequestADReward.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestADReward);

        /** RequestADReward commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestADReward adPoint. */
        public adPoint: CVP.ADPoint;

        /**
         * Creates a new RequestADReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestADReward instance
         */
        public static create(properties?: CVP.IRequestADReward): CVP.RequestADReward;

        /**
         * Encodes the specified RequestADReward message. Does not implicitly {@link CVP.RequestADReward.verify|verify} messages.
         * @param message RequestADReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestADReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestADReward message, length delimited. Does not implicitly {@link CVP.RequestADReward.verify|verify} messages.
         * @param message RequestADReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestADReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestADReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestADReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestADReward;

        /**
         * Decodes a RequestADReward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestADReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestADReward;

        /**
         * Verifies a RequestADReward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestADReward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestADReward
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestADReward;

        /**
         * Creates a plain object from a RequestADReward message. Also converts values to other types if specified.
         * @param message RequestADReward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestADReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestADReward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestADRewardResult. */
    interface IRequestADRewardResult {

        /** RequestADRewardResult coins */
        coins?: (number|null);

        /** RequestADRewardResult nextCoins */
        nextCoins?: (number|null);

        /** RequestADRewardResult vipExp */
        vipExp?: (number|null);
    }

    /** Represents a RequestADRewardResult. */
    class RequestADRewardResult implements IRequestADRewardResult {

        /**
         * Constructs a new RequestADRewardResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestADRewardResult);

        /** RequestADRewardResult coins. */
        public coins: number;

        /** RequestADRewardResult nextCoins. */
        public nextCoins: number;

        /** RequestADRewardResult vipExp. */
        public vipExp: number;

        /**
         * Creates a new RequestADRewardResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestADRewardResult instance
         */
        public static create(properties?: CVP.IRequestADRewardResult): CVP.RequestADRewardResult;

        /**
         * Encodes the specified RequestADRewardResult message. Does not implicitly {@link CVP.RequestADRewardResult.verify|verify} messages.
         * @param message RequestADRewardResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestADRewardResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestADRewardResult message, length delimited. Does not implicitly {@link CVP.RequestADRewardResult.verify|verify} messages.
         * @param message RequestADRewardResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestADRewardResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestADRewardResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestADRewardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestADRewardResult;

        /**
         * Decodes a RequestADRewardResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestADRewardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestADRewardResult;

        /**
         * Verifies a RequestADRewardResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestADRewardResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestADRewardResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestADRewardResult;

        /**
         * Creates a plain object from a RequestADRewardResult message. Also converts values to other types if specified.
         * @param message RequestADRewardResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestADRewardResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestADRewardResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestAllAd. */
    interface IRequestAllAd {

        /** RequestAllAd commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestAllAd. */
    class RequestAllAd implements IRequestAllAd {

        /**
         * Constructs a new RequestAllAd.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestAllAd);

        /** RequestAllAd commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestAllAd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestAllAd instance
         */
        public static create(properties?: CVP.IRequestAllAd): CVP.RequestAllAd;

        /**
         * Encodes the specified RequestAllAd message. Does not implicitly {@link CVP.RequestAllAd.verify|verify} messages.
         * @param message RequestAllAd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestAllAd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestAllAd message, length delimited. Does not implicitly {@link CVP.RequestAllAd.verify|verify} messages.
         * @param message RequestAllAd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestAllAd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestAllAd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestAllAd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestAllAd;

        /**
         * Decodes a RequestAllAd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestAllAd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestAllAd;

        /**
         * Verifies a RequestAllAd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestAllAd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestAllAd
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestAllAd;

        /**
         * Creates a plain object from a RequestAllAd message. Also converts values to other types if specified.
         * @param message RequestAllAd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestAllAd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestAllAd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestAllAdResult. */
    interface IRequestAllAdResult {

        /** RequestAllAdResult adInfo */
        adInfo?: (CVP.IAdInfo[]|null);

        /** RequestAllAdResult freeCoins */
        freeCoins?: (number|null);
    }

    /** Represents a RequestAllAdResult. */
    class RequestAllAdResult implements IRequestAllAdResult {

        /**
         * Constructs a new RequestAllAdResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestAllAdResult);

        /** RequestAllAdResult adInfo. */
        public adInfo: CVP.IAdInfo[];

        /** RequestAllAdResult freeCoins. */
        public freeCoins: number;

        /**
         * Creates a new RequestAllAdResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestAllAdResult instance
         */
        public static create(properties?: CVP.IRequestAllAdResult): CVP.RequestAllAdResult;

        /**
         * Encodes the specified RequestAllAdResult message. Does not implicitly {@link CVP.RequestAllAdResult.verify|verify} messages.
         * @param message RequestAllAdResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestAllAdResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestAllAdResult message, length delimited. Does not implicitly {@link CVP.RequestAllAdResult.verify|verify} messages.
         * @param message RequestAllAdResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestAllAdResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestAllAdResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestAllAdResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestAllAdResult;

        /**
         * Decodes a RequestAllAdResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestAllAdResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestAllAdResult;

        /**
         * Verifies a RequestAllAdResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestAllAdResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestAllAdResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestAllAdResult;

        /**
         * Creates a plain object from a RequestAllAdResult message. Also converts values to other types if specified.
         * @param message RequestAllAdResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestAllAdResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestAllAdResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdInfo. */
    interface IAdInfo {

        /** AdInfo adPoint */
        adPoint?: (CVP.ADPoint|null);

        /** AdInfo adTime */
        adTime?: (number|null);

        /** AdInfo adCoins */
        adCoins?: (number|null);

        /** AdInfo playAD */
        playAD?: (boolean|null);
    }

    /** Represents an AdInfo. */
    class AdInfo implements IAdInfo {

        /**
         * Constructs a new AdInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IAdInfo);

        /** AdInfo adPoint. */
        public adPoint: CVP.ADPoint;

        /** AdInfo adTime. */
        public adTime: number;

        /** AdInfo adCoins. */
        public adCoins: number;

        /** AdInfo playAD. */
        public playAD: boolean;

        /**
         * Creates a new AdInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdInfo instance
         */
        public static create(properties?: CVP.IAdInfo): CVP.AdInfo;

        /**
         * Encodes the specified AdInfo message. Does not implicitly {@link CVP.AdInfo.verify|verify} messages.
         * @param message AdInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IAdInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdInfo message, length delimited. Does not implicitly {@link CVP.AdInfo.verify|verify} messages.
         * @param message AdInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IAdInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.AdInfo;

        /**
         * Decodes an AdInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.AdInfo;

        /**
         * Verifies an AdInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdInfo
         */
        public static fromObject(object: { [k: string]: any }): CVP.AdInfo;

        /**
         * Creates a plain object from an AdInfo message. Also converts values to other types if specified.
         * @param message AdInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.AdInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendCloseAd. */
    interface ISendCloseAd {

        /** SendCloseAd adPoint */
        adPoint?: (CVP.ADPoint|null);
    }

    /** Represents a SendCloseAd. */
    class SendCloseAd implements ISendCloseAd {

        /**
         * Constructs a new SendCloseAd.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.ISendCloseAd);

        /** SendCloseAd adPoint. */
        public adPoint: CVP.ADPoint;

        /**
         * Creates a new SendCloseAd instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendCloseAd instance
         */
        public static create(properties?: CVP.ISendCloseAd): CVP.SendCloseAd;

        /**
         * Encodes the specified SendCloseAd message. Does not implicitly {@link CVP.SendCloseAd.verify|verify} messages.
         * @param message SendCloseAd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.ISendCloseAd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendCloseAd message, length delimited. Does not implicitly {@link CVP.SendCloseAd.verify|verify} messages.
         * @param message SendCloseAd message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.ISendCloseAd, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendCloseAd message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendCloseAd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.SendCloseAd;

        /**
         * Decodes a SendCloseAd message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendCloseAd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.SendCloseAd;

        /**
         * Verifies a SendCloseAd message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendCloseAd message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendCloseAd
         */
        public static fromObject(object: { [k: string]: any }): CVP.SendCloseAd;

        /**
         * Creates a plain object from a SendCloseAd message. Also converts values to other types if specified.
         * @param message SendCloseAd
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.SendCloseAd, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendCloseAd to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestADShop. */
    interface IRequestADShop {

        /** RequestADShop commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestADShop. */
    class RequestADShop implements IRequestADShop {

        /**
         * Constructs a new RequestADShop.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestADShop);

        /** RequestADShop commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestADShop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestADShop instance
         */
        public static create(properties?: CVP.IRequestADShop): CVP.RequestADShop;

        /**
         * Encodes the specified RequestADShop message. Does not implicitly {@link CVP.RequestADShop.verify|verify} messages.
         * @param message RequestADShop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestADShop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestADShop message, length delimited. Does not implicitly {@link CVP.RequestADShop.verify|verify} messages.
         * @param message RequestADShop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestADShop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestADShop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestADShop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestADShop;

        /**
         * Decodes a RequestADShop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestADShop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestADShop;

        /**
         * Verifies a RequestADShop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestADShop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestADShop
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestADShop;

        /**
         * Creates a plain object from a RequestADShop message. Also converts values to other types if specified.
         * @param message RequestADShop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestADShop, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestADShop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestADShopResult. */
    interface IRequestADShopResult {

        /** RequestADShopResult newAdShopItem */
        newAdShopItem?: (CVP.IADShopItem[]|null);

        /** RequestADShopResult reduseTime */
        reduseTime?: (number|null);
    }

    /** Represents a RequestADShopResult. */
    class RequestADShopResult implements IRequestADShopResult {

        /**
         * Constructs a new RequestADShopResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestADShopResult);

        /** RequestADShopResult newAdShopItem. */
        public newAdShopItem: CVP.IADShopItem[];

        /** RequestADShopResult reduseTime. */
        public reduseTime: number;

        /**
         * Creates a new RequestADShopResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestADShopResult instance
         */
        public static create(properties?: CVP.IRequestADShopResult): CVP.RequestADShopResult;

        /**
         * Encodes the specified RequestADShopResult message. Does not implicitly {@link CVP.RequestADShopResult.verify|verify} messages.
         * @param message RequestADShopResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestADShopResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestADShopResult message, length delimited. Does not implicitly {@link CVP.RequestADShopResult.verify|verify} messages.
         * @param message RequestADShopResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestADShopResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestADShopResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestADShopResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestADShopResult;

        /**
         * Decodes a RequestADShopResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestADShopResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestADShopResult;

        /**
         * Verifies a RequestADShopResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestADShopResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestADShopResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestADShopResult;

        /**
         * Creates a plain object from a RequestADShopResult message. Also converts values to other types if specified.
         * @param message RequestADShopResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestADShopResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestADShopResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ADShopItem. */
    interface IADShopItem {

        /** ADShopItem coins */
        coins?: (number|null);

        /** ADShopItem adShopItmeState */
        adShopItmeState?: (CVP.AdShopItmeState|null);

        /** ADShopItem itemId */
        itemId?: (string|null);
    }

    /** Represents a ADShopItem. */
    class ADShopItem implements IADShopItem {

        /**
         * Constructs a new ADShopItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IADShopItem);

        /** ADShopItem coins. */
        public coins: number;

        /** ADShopItem adShopItmeState. */
        public adShopItmeState: CVP.AdShopItmeState;

        /** ADShopItem itemId. */
        public itemId: string;

        /**
         * Creates a new ADShopItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ADShopItem instance
         */
        public static create(properties?: CVP.IADShopItem): CVP.ADShopItem;

        /**
         * Encodes the specified ADShopItem message. Does not implicitly {@link CVP.ADShopItem.verify|verify} messages.
         * @param message ADShopItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IADShopItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ADShopItem message, length delimited. Does not implicitly {@link CVP.ADShopItem.verify|verify} messages.
         * @param message ADShopItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IADShopItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ADShopItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ADShopItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.ADShopItem;

        /**
         * Decodes a ADShopItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ADShopItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.ADShopItem;

        /**
         * Verifies a ADShopItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ADShopItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ADShopItem
         */
        public static fromObject(object: { [k: string]: any }): CVP.ADShopItem;

        /**
         * Creates a plain object from a ADShopItem message. Also converts values to other types if specified.
         * @param message ADShopItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.ADShopItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ADShopItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCollectADShopItme. */
    interface IRequestCollectADShopItme {

        /** RequestCollectADShopItme commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestCollectADShopItme itemId */
        itemId?: (string|null);
    }

    /** Represents a RequestCollectADShopItme. */
    class RequestCollectADShopItme implements IRequestCollectADShopItme {

        /**
         * Constructs a new RequestCollectADShopItme.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestCollectADShopItme);

        /** RequestCollectADShopItme commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestCollectADShopItme itemId. */
        public itemId: string;

        /**
         * Creates a new RequestCollectADShopItme instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCollectADShopItme instance
         */
        public static create(properties?: CVP.IRequestCollectADShopItme): CVP.RequestCollectADShopItme;

        /**
         * Encodes the specified RequestCollectADShopItme message. Does not implicitly {@link CVP.RequestCollectADShopItme.verify|verify} messages.
         * @param message RequestCollectADShopItme message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestCollectADShopItme, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCollectADShopItme message, length delimited. Does not implicitly {@link CVP.RequestCollectADShopItme.verify|verify} messages.
         * @param message RequestCollectADShopItme message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestCollectADShopItme, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCollectADShopItme message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCollectADShopItme
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestCollectADShopItme;

        /**
         * Decodes a RequestCollectADShopItme message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCollectADShopItme
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestCollectADShopItme;

        /**
         * Verifies a RequestCollectADShopItme message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCollectADShopItme message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCollectADShopItme
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestCollectADShopItme;

        /**
         * Creates a plain object from a RequestCollectADShopItme message. Also converts values to other types if specified.
         * @param message RequestCollectADShopItme
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestCollectADShopItme, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCollectADShopItme to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCollectADShopItmeResult. */
    interface IRequestCollectADShopItmeResult {

        /** RequestCollectADShopItmeResult coins */
        coins?: (number|null);

        /** RequestCollectADShopItmeResult itemId */
        itemId?: (string|null);

        /** RequestCollectADShopItmeResult unlockItemId */
        unlockItemId?: (string|null);
    }

    /** Represents a RequestCollectADShopItmeResult. */
    class RequestCollectADShopItmeResult implements IRequestCollectADShopItmeResult {

        /**
         * Constructs a new RequestCollectADShopItmeResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestCollectADShopItmeResult);

        /** RequestCollectADShopItmeResult coins. */
        public coins: number;

        /** RequestCollectADShopItmeResult itemId. */
        public itemId: string;

        /** RequestCollectADShopItmeResult unlockItemId. */
        public unlockItemId: string;

        /**
         * Creates a new RequestCollectADShopItmeResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCollectADShopItmeResult instance
         */
        public static create(properties?: CVP.IRequestCollectADShopItmeResult): CVP.RequestCollectADShopItmeResult;

        /**
         * Encodes the specified RequestCollectADShopItmeResult message. Does not implicitly {@link CVP.RequestCollectADShopItmeResult.verify|verify} messages.
         * @param message RequestCollectADShopItmeResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestCollectADShopItmeResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCollectADShopItmeResult message, length delimited. Does not implicitly {@link CVP.RequestCollectADShopItmeResult.verify|verify} messages.
         * @param message RequestCollectADShopItmeResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestCollectADShopItmeResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCollectADShopItmeResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCollectADShopItmeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestCollectADShopItmeResult;

        /**
         * Decodes a RequestCollectADShopItmeResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCollectADShopItmeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestCollectADShopItmeResult;

        /**
         * Verifies a RequestCollectADShopItmeResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCollectADShopItmeResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCollectADShopItmeResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestCollectADShopItmeResult;

        /**
         * Creates a plain object from a RequestCollectADShopItmeResult message. Also converts values to other types if specified.
         * @param message RequestCollectADShopItmeResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestCollectADShopItmeResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCollectADShopItmeResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestAddMail. */
    interface IRequestAddMail {

        /** RequestAddMail inbox */
        inbox?: (CVP.IInbox|null);
    }

    /** Represents a RequestAddMail. */
    class RequestAddMail implements IRequestAddMail {

        /**
         * Constructs a new RequestAddMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestAddMail);

        /** RequestAddMail inbox. */
        public inbox?: (CVP.IInbox|null);

        /**
         * Creates a new RequestAddMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestAddMail instance
         */
        public static create(properties?: CVP.IRequestAddMail): CVP.RequestAddMail;

        /**
         * Encodes the specified RequestAddMail message. Does not implicitly {@link CVP.RequestAddMail.verify|verify} messages.
         * @param message RequestAddMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestAddMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestAddMail message, length delimited. Does not implicitly {@link CVP.RequestAddMail.verify|verify} messages.
         * @param message RequestAddMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestAddMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestAddMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestAddMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestAddMail;

        /**
         * Decodes a RequestAddMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestAddMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestAddMail;

        /**
         * Verifies a RequestAddMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestAddMail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestAddMail
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestAddMail;

        /**
         * Creates a plain object from a RequestAddMail message. Also converts values to other types if specified.
         * @param message RequestAddMail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestAddMail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestAddMail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Inbox. */
    interface IInbox {

        /** Inbox send_name */
        send_name?: (string|null);

        /** Inbox mail_type */
        mail_type?: (CVP.MailType|null);

        /** Inbox receive_id */
        receive_id?: (number|null);

        /** Inbox is_read */
        is_read?: (boolean|null);

        /** Inbox mail_text */
        mail_text?: (string|null);

        /** Inbox attachment */
        attachment?: (CVP.IAttachment[]|null);

        /** Inbox is_collect */
        is_collect?: (boolean|null);
    }

    /** Represents an Inbox. */
    class Inbox implements IInbox {

        /**
         * Constructs a new Inbox.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IInbox);

        /** Inbox send_name. */
        public send_name: string;

        /** Inbox mail_type. */
        public mail_type: CVP.MailType;

        /** Inbox receive_id. */
        public receive_id: number;

        /** Inbox is_read. */
        public is_read: boolean;

        /** Inbox mail_text. */
        public mail_text: string;

        /** Inbox attachment. */
        public attachment: CVP.IAttachment[];

        /** Inbox is_collect. */
        public is_collect: boolean;

        /**
         * Creates a new Inbox instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Inbox instance
         */
        public static create(properties?: CVP.IInbox): CVP.Inbox;

        /**
         * Encodes the specified Inbox message. Does not implicitly {@link CVP.Inbox.verify|verify} messages.
         * @param message Inbox message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IInbox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Inbox message, length delimited. Does not implicitly {@link CVP.Inbox.verify|verify} messages.
         * @param message Inbox message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IInbox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Inbox message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Inbox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.Inbox;

        /**
         * Decodes an Inbox message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Inbox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.Inbox;

        /**
         * Verifies an Inbox message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Inbox message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Inbox
         */
        public static fromObject(object: { [k: string]: any }): CVP.Inbox;

        /**
         * Creates a plain object from an Inbox message. Also converts values to other types if specified.
         * @param message Inbox
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.Inbox, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Inbox to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendAnalysisInfo. */
    interface ISendAnalysisInfo {

        /** SendAnalysisInfo eventId */
        eventId?: (string|null);

        /** SendAnalysisInfo eventInfo */
        eventInfo?: (string|null);
    }

    /** Represents a SendAnalysisInfo. */
    class SendAnalysisInfo implements ISendAnalysisInfo {

        /**
         * Constructs a new SendAnalysisInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.ISendAnalysisInfo);

        /** SendAnalysisInfo eventId. */
        public eventId: string;

        /** SendAnalysisInfo eventInfo. */
        public eventInfo: string;

        /**
         * Creates a new SendAnalysisInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendAnalysisInfo instance
         */
        public static create(properties?: CVP.ISendAnalysisInfo): CVP.SendAnalysisInfo;

        /**
         * Encodes the specified SendAnalysisInfo message. Does not implicitly {@link CVP.SendAnalysisInfo.verify|verify} messages.
         * @param message SendAnalysisInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.ISendAnalysisInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendAnalysisInfo message, length delimited. Does not implicitly {@link CVP.SendAnalysisInfo.verify|verify} messages.
         * @param message SendAnalysisInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.ISendAnalysisInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendAnalysisInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendAnalysisInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.SendAnalysisInfo;

        /**
         * Decodes a SendAnalysisInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendAnalysisInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.SendAnalysisInfo;

        /**
         * Verifies a SendAnalysisInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendAnalysisInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendAnalysisInfo
         */
        public static fromObject(object: { [k: string]: any }): CVP.SendAnalysisInfo;

        /**
         * Creates a plain object from a SendAnalysisInfo message. Also converts values to other types if specified.
         * @param message SendAnalysisInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.SendAnalysisInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendAnalysisInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendAnalysisInfoResult. */
    interface ISendAnalysisInfoResult {

        /** SendAnalysisInfoResult eventId */
        eventId?: (string|null);

        /** SendAnalysisInfoResult eventInfo */
        eventInfo?: (string|null);
    }

    /** Represents a SendAnalysisInfoResult. */
    class SendAnalysisInfoResult implements ISendAnalysisInfoResult {

        /**
         * Constructs a new SendAnalysisInfoResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.ISendAnalysisInfoResult);

        /** SendAnalysisInfoResult eventId. */
        public eventId: string;

        /** SendAnalysisInfoResult eventInfo. */
        public eventInfo: string;

        /**
         * Creates a new SendAnalysisInfoResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendAnalysisInfoResult instance
         */
        public static create(properties?: CVP.ISendAnalysisInfoResult): CVP.SendAnalysisInfoResult;

        /**
         * Encodes the specified SendAnalysisInfoResult message. Does not implicitly {@link CVP.SendAnalysisInfoResult.verify|verify} messages.
         * @param message SendAnalysisInfoResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.ISendAnalysisInfoResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendAnalysisInfoResult message, length delimited. Does not implicitly {@link CVP.SendAnalysisInfoResult.verify|verify} messages.
         * @param message SendAnalysisInfoResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.ISendAnalysisInfoResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendAnalysisInfoResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendAnalysisInfoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.SendAnalysisInfoResult;

        /**
         * Decodes a SendAnalysisInfoResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendAnalysisInfoResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.SendAnalysisInfoResult;

        /**
         * Verifies a SendAnalysisInfoResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendAnalysisInfoResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendAnalysisInfoResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.SendAnalysisInfoResult;

        /**
         * Creates a plain object from a SendAnalysisInfoResult message. Also converts values to other types if specified.
         * @param message SendAnalysisInfoResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.SendAnalysisInfoResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendAnalysisInfoResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** BindType enum. */
    enum BindType {
        TRY = 0,
        COVER = 1,
        MERGE = 2
    }

    /** BindResultState enum. */
    enum BindResultState {
        SUCCEED = 0,
        NEEDMERGE = 1,
        NEEDCOVER = 2
    }

    /** Properties of a RequestBind. */
    interface IRequestBind {

        /** RequestBind commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestBind facebookId */
        facebookId?: (string|null);

        /** RequestBind emailId */
        emailId?: (string|null);

        /** RequestBind bindType */
        bindType?: (CVP.BindType|null);

        /** RequestBind facebookInfo */
        facebookInfo?: (CVP.IFacebookInfo|null);

        /** RequestBind emailInfo */
        emailInfo?: (string|null);
    }

    /** Represents a RequestBind. */
    class RequestBind implements IRequestBind {

        /**
         * Constructs a new RequestBind.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestBind);

        /** RequestBind commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestBind facebookId. */
        public facebookId: string;

        /** RequestBind emailId. */
        public emailId: string;

        /** RequestBind bindType. */
        public bindType: CVP.BindType;

        /** RequestBind facebookInfo. */
        public facebookInfo?: (CVP.IFacebookInfo|null);

        /** RequestBind emailInfo. */
        public emailInfo: string;

        /**
         * Creates a new RequestBind instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestBind instance
         */
        public static create(properties?: CVP.IRequestBind): CVP.RequestBind;

        /**
         * Encodes the specified RequestBind message. Does not implicitly {@link CVP.RequestBind.verify|verify} messages.
         * @param message RequestBind message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestBind, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestBind message, length delimited. Does not implicitly {@link CVP.RequestBind.verify|verify} messages.
         * @param message RequestBind message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestBind, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestBind message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestBind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestBind;

        /**
         * Decodes a RequestBind message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestBind
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestBind;

        /**
         * Verifies a RequestBind message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestBind message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestBind
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestBind;

        /**
         * Creates a plain object from a RequestBind message. Also converts values to other types if specified.
         * @param message RequestBind
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestBind, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestBind to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestBindResult. */
    interface IRequestBindResult {

        /** RequestBindResult bindCash */
        bindCash?: (number|null);

        /** RequestBindResult userData */
        userData?: (CVP.IUserData|null);

        /** RequestBindResult bindState */
        bindState?: (CVP.BindResultState|null);
    }

    /** Represents a RequestBindResult. */
    class RequestBindResult implements IRequestBindResult {

        /**
         * Constructs a new RequestBindResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestBindResult);

        /** RequestBindResult bindCash. */
        public bindCash: number;

        /** RequestBindResult userData. */
        public userData?: (CVP.IUserData|null);

        /** RequestBindResult bindState. */
        public bindState: CVP.BindResultState;

        /**
         * Creates a new RequestBindResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestBindResult instance
         */
        public static create(properties?: CVP.IRequestBindResult): CVP.RequestBindResult;

        /**
         * Encodes the specified RequestBindResult message. Does not implicitly {@link CVP.RequestBindResult.verify|verify} messages.
         * @param message RequestBindResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestBindResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestBindResult message, length delimited. Does not implicitly {@link CVP.RequestBindResult.verify|verify} messages.
         * @param message RequestBindResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestBindResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestBindResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestBindResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestBindResult;

        /**
         * Decodes a RequestBindResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestBindResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestBindResult;

        /**
         * Verifies a RequestBindResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestBindResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestBindResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestBindResult;

        /**
         * Creates a plain object from a RequestBindResult message. Also converts values to other types if specified.
         * @param message RequestBindResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestBindResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestBindResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** TutorialState enum. */
    enum TutorialState {
        NEWUSER = 1,
        PROGERSS = 2,
        FINISH = 3
    }

    /** Properties of a RequestVersionData. */
    interface IRequestVersionData {

        /** RequestVersionData commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestVersionData baseVersion */
        baseVersion?: (string|null);

        /** RequestVersionData resVersion */
        resVersion?: (string|null);

        /** RequestVersionData platformName */
        platformName?: (string|null);

        /** RequestVersionData packageName */
        packageName?: (string|null);

        /** RequestVersionData udid */
        udid?: (string|null);
    }

    /** Represents a RequestVersionData. */
    class RequestVersionData implements IRequestVersionData {

        /**
         * Constructs a new RequestVersionData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestVersionData);

        /** RequestVersionData commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestVersionData baseVersion. */
        public baseVersion: string;

        /** RequestVersionData resVersion. */
        public resVersion: string;

        /** RequestVersionData platformName. */
        public platformName: string;

        /** RequestVersionData packageName. */
        public packageName: string;

        /** RequestVersionData udid. */
        public udid: string;

        /**
         * Creates a new RequestVersionData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestVersionData instance
         */
        public static create(properties?: CVP.IRequestVersionData): CVP.RequestVersionData;

        /**
         * Encodes the specified RequestVersionData message. Does not implicitly {@link CVP.RequestVersionData.verify|verify} messages.
         * @param message RequestVersionData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestVersionData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestVersionData message, length delimited. Does not implicitly {@link CVP.RequestVersionData.verify|verify} messages.
         * @param message RequestVersionData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestVersionData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestVersionData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestVersionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestVersionData;

        /**
         * Decodes a RequestVersionData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestVersionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestVersionData;

        /**
         * Verifies a RequestVersionData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestVersionData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestVersionData
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestVersionData;

        /**
         * Creates a plain object from a RequestVersionData message. Also converts values to other types if specified.
         * @param message RequestVersionData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestVersionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestVersionData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestVersionDataResult. */
    interface IRequestVersionDataResult {

        /** RequestVersionDataResult needUpdate */
        needUpdate?: (boolean|null);

        /** RequestVersionDataResult updateMsg */
        updateMsg?: (string|null);

        /** RequestVersionDataResult updateCash */
        updateCash?: (number|null);

        /** RequestVersionDataResult resVersion */
        resVersion?: (string|null);

        /** RequestVersionDataResult bundleVersion */
        bundleVersion?: (string|null);

        /** RequestVersionDataResult serverVersion */
        serverVersion?: (string|null);

        /** RequestVersionDataResult serverState */
        serverState?: (string|null);

        /** RequestVersionDataResult resUrl */
        resUrl?: (string|null);

        /** RequestVersionDataResult resMd5 */
        resMd5?: (string|null);
    }

    /** Represents a RequestVersionDataResult. */
    class RequestVersionDataResult implements IRequestVersionDataResult {

        /**
         * Constructs a new RequestVersionDataResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestVersionDataResult);

        /** RequestVersionDataResult needUpdate. */
        public needUpdate: boolean;

        /** RequestVersionDataResult updateMsg. */
        public updateMsg: string;

        /** RequestVersionDataResult updateCash. */
        public updateCash: number;

        /** RequestVersionDataResult resVersion. */
        public resVersion: string;

        /** RequestVersionDataResult bundleVersion. */
        public bundleVersion: string;

        /** RequestVersionDataResult serverVersion. */
        public serverVersion: string;

        /** RequestVersionDataResult serverState. */
        public serverState: string;

        /** RequestVersionDataResult resUrl. */
        public resUrl: string;

        /** RequestVersionDataResult resMd5. */
        public resMd5: string;

        /**
         * Creates a new RequestVersionDataResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestVersionDataResult instance
         */
        public static create(properties?: CVP.IRequestVersionDataResult): CVP.RequestVersionDataResult;

        /**
         * Encodes the specified RequestVersionDataResult message. Does not implicitly {@link CVP.RequestVersionDataResult.verify|verify} messages.
         * @param message RequestVersionDataResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestVersionDataResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestVersionDataResult message, length delimited. Does not implicitly {@link CVP.RequestVersionDataResult.verify|verify} messages.
         * @param message RequestVersionDataResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestVersionDataResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestVersionDataResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestVersionDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestVersionDataResult;

        /**
         * Decodes a RequestVersionDataResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestVersionDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestVersionDataResult;

        /**
         * Verifies a RequestVersionDataResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestVersionDataResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestVersionDataResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestVersionDataResult;

        /**
         * Creates a plain object from a RequestVersionDataResult message. Also converts values to other types if specified.
         * @param message RequestVersionDataResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestVersionDataResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestVersionDataResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestLogin. */
    interface IRequestLogin {

        /** RequestLogin commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestLogin emailId */
        emailId?: (string|null);

        /** RequestLogin facebookId */
        facebookId?: (string|null);

        /** RequestLogin deviceId */
        deviceId?: (string|null);

        /** RequestLogin channel */
        channel?: (string|null);

        /** RequestLogin loginClientToken */
        loginClientToken?: (CVP.ILoginClientToken|null);

        /** RequestLogin facebookInfo */
        facebookInfo?: (CVP.IFacebookInfo|null);

        /** RequestLogin emailInfo */
        emailInfo?: (string|null);
    }

    /** Represents a RequestLogin. */
    class RequestLogin implements IRequestLogin {

        /**
         * Constructs a new RequestLogin.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestLogin);

        /** RequestLogin commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestLogin emailId. */
        public emailId: string;

        /** RequestLogin facebookId. */
        public facebookId: string;

        /** RequestLogin deviceId. */
        public deviceId: string;

        /** RequestLogin channel. */
        public channel: string;

        /** RequestLogin loginClientToken. */
        public loginClientToken?: (CVP.ILoginClientToken|null);

        /** RequestLogin facebookInfo. */
        public facebookInfo?: (CVP.IFacebookInfo|null);

        /** RequestLogin emailInfo. */
        public emailInfo: string;

        /**
         * Creates a new RequestLogin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestLogin instance
         */
        public static create(properties?: CVP.IRequestLogin): CVP.RequestLogin;

        /**
         * Encodes the specified RequestLogin message. Does not implicitly {@link CVP.RequestLogin.verify|verify} messages.
         * @param message RequestLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestLogin message, length delimited. Does not implicitly {@link CVP.RequestLogin.verify|verify} messages.
         * @param message RequestLogin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestLogin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestLogin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestLogin;

        /**
         * Decodes a RequestLogin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestLogin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestLogin;

        /**
         * Verifies a RequestLogin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestLogin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestLogin
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestLogin;

        /**
         * Creates a plain object from a RequestLogin message. Also converts values to other types if specified.
         * @param message RequestLogin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestLogin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestLogin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FacebookInfo. */
    interface IFacebookInfo {

        /** FacebookInfo avatarUrl */
        avatarUrl?: (string|null);

        /** FacebookInfo name */
        name?: (string|null);
    }

    /** Represents a FacebookInfo. */
    class FacebookInfo implements IFacebookInfo {

        /**
         * Constructs a new FacebookInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IFacebookInfo);

        /** FacebookInfo avatarUrl. */
        public avatarUrl: string;

        /** FacebookInfo name. */
        public name: string;

        /**
         * Creates a new FacebookInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FacebookInfo instance
         */
        public static create(properties?: CVP.IFacebookInfo): CVP.FacebookInfo;

        /**
         * Encodes the specified FacebookInfo message. Does not implicitly {@link CVP.FacebookInfo.verify|verify} messages.
         * @param message FacebookInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IFacebookInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FacebookInfo message, length delimited. Does not implicitly {@link CVP.FacebookInfo.verify|verify} messages.
         * @param message FacebookInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IFacebookInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FacebookInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FacebookInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.FacebookInfo;

        /**
         * Decodes a FacebookInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FacebookInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.FacebookInfo;

        /**
         * Verifies a FacebookInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FacebookInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FacebookInfo
         */
        public static fromObject(object: { [k: string]: any }): CVP.FacebookInfo;

        /**
         * Creates a plain object from a FacebookInfo message. Also converts values to other types if specified.
         * @param message FacebookInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.FacebookInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FacebookInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LoginClientToken. */
    interface ILoginClientToken {

        /** LoginClientToken adjustAdid */
        adjustAdid?: (string|null);

        /** LoginClientToken adjustIdfa */
        adjustIdfa?: (string|null);

        /** LoginClientToken adjustGpsAdid */
        adjustGpsAdid?: (string|null);

        /** LoginClientToken fbSource */
        fbSource?: (string|null);

        /** LoginClientToken fbQuery */
        fbQuery?: (string|null);

        /** LoginClientToken installChannel */
        installChannel?: (string|null);

        /** LoginClientToken pushUserId */
        pushUserId?: (string|null);

        /** LoginClientToken clientVersion */
        clientVersion?: (string|null);

        /** LoginClientToken systemLanguage */
        systemLanguage?: (string|null);
    }

    /** Represents a LoginClientToken. */
    class LoginClientToken implements ILoginClientToken {

        /**
         * Constructs a new LoginClientToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.ILoginClientToken);

        /** LoginClientToken adjustAdid. */
        public adjustAdid: string;

        /** LoginClientToken adjustIdfa. */
        public adjustIdfa: string;

        /** LoginClientToken adjustGpsAdid. */
        public adjustGpsAdid: string;

        /** LoginClientToken fbSource. */
        public fbSource: string;

        /** LoginClientToken fbQuery. */
        public fbQuery: string;

        /** LoginClientToken installChannel. */
        public installChannel: string;

        /** LoginClientToken pushUserId. */
        public pushUserId: string;

        /** LoginClientToken clientVersion. */
        public clientVersion: string;

        /** LoginClientToken systemLanguage. */
        public systemLanguage: string;

        /**
         * Creates a new LoginClientToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginClientToken instance
         */
        public static create(properties?: CVP.ILoginClientToken): CVP.LoginClientToken;

        /**
         * Encodes the specified LoginClientToken message. Does not implicitly {@link CVP.LoginClientToken.verify|verify} messages.
         * @param message LoginClientToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.ILoginClientToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LoginClientToken message, length delimited. Does not implicitly {@link CVP.LoginClientToken.verify|verify} messages.
         * @param message LoginClientToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.ILoginClientToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LoginClientToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginClientToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.LoginClientToken;

        /**
         * Decodes a LoginClientToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginClientToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.LoginClientToken;

        /**
         * Verifies a LoginClientToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginClientToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginClientToken
         */
        public static fromObject(object: { [k: string]: any }): CVP.LoginClientToken;

        /**
         * Creates a plain object from a LoginClientToken message. Also converts values to other types if specified.
         * @param message LoginClientToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.LoginClientToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginClientToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestLoginResult. */
    interface IRequestLoginResult {

        /** RequestLoginResult userData */
        userData: CVP.IUserData;
    }

    /** Represents a RequestLoginResult. */
    class RequestLoginResult implements IRequestLoginResult {

        /**
         * Constructs a new RequestLoginResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestLoginResult);

        /** RequestLoginResult userData. */
        public userData: CVP.IUserData;

        /**
         * Creates a new RequestLoginResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestLoginResult instance
         */
        public static create(properties?: CVP.IRequestLoginResult): CVP.RequestLoginResult;

        /**
         * Encodes the specified RequestLoginResult message. Does not implicitly {@link CVP.RequestLoginResult.verify|verify} messages.
         * @param message RequestLoginResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestLoginResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestLoginResult message, length delimited. Does not implicitly {@link CVP.RequestLoginResult.verify|verify} messages.
         * @param message RequestLoginResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestLoginResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestLoginResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestLoginResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestLoginResult;

        /**
         * Decodes a RequestLoginResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestLoginResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestLoginResult;

        /**
         * Verifies a RequestLoginResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestLoginResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestLoginResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestLoginResult;

        /**
         * Creates a plain object from a RequestLoginResult message. Also converts values to other types if specified.
         * @param message RequestLoginResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestLoginResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestLoginResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BindData. */
    interface IBindData {

        /** BindData facebookId */
        facebookId?: (string|null);

        /** BindData emailId */
        emailId?: (string|null);
    }

    /** Represents a BindData. */
    class BindData implements IBindData {

        /**
         * Constructs a new BindData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IBindData);

        /** BindData facebookId. */
        public facebookId: string;

        /** BindData emailId. */
        public emailId: string;

        /**
         * Creates a new BindData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BindData instance
         */
        public static create(properties?: CVP.IBindData): CVP.BindData;

        /**
         * Encodes the specified BindData message. Does not implicitly {@link CVP.BindData.verify|verify} messages.
         * @param message BindData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IBindData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BindData message, length delimited. Does not implicitly {@link CVP.BindData.verify|verify} messages.
         * @param message BindData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IBindData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BindData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BindData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.BindData;

        /**
         * Decodes a BindData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BindData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.BindData;

        /**
         * Verifies a BindData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BindData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BindData
         */
        public static fromObject(object: { [k: string]: any }): CVP.BindData;

        /**
         * Creates a plain object from a BindData message. Also converts values to other types if specified.
         * @param message BindData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.BindData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BindData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserData. */
    interface IUserData {

        /** UserData name */
        name?: (string|null);

        /** UserData level */
        level?: (number|null);

        /** UserData curExp */
        curExp?: (number|null);

        /** UserData nextExp */
        nextExp?: (number|Long|null);

        /** UserData monentsCoin */
        monentsCoin?: (number|Long|null);

        /** UserData cash */
        cash?: (number|null);

        /** UserData vipExp */
        vipExp?: (number|Long|null);

        /** UserData vipNextExp */
        vipNextExp?: (number|Long|null);

        /** UserData vipLevel */
        vipLevel?: (number|null);

        /** UserData iconId */
        iconId?: (number|null);

        /** UserData userId */
        userId?: (number|Long|null);

        /** UserData bindData */
        bindData?: (CVP.IBindData|null);

        /** UserData vaultKey */
        vaultKey?: (number|null);

        /** UserData headSp */
        headSp?: (string|null);

        /** UserData sex */
        sex?: (CVP.SexType|null);

        /** UserData scratchCards */
        scratchCards?: (number|null);

        /** UserData facebbookInfo */
        facebbookInfo?: (CVP.IFacebookInfo|null);

        /** UserData isDebugUser */
        isDebugUser?: (boolean|null);

        /** UserData tutorialState */
        tutorialState?: (CVP.TutorialState|null);

        /** UserData isPaid */
        isPaid?: (boolean|null);

        /** UserData registerDate */
        registerDate?: (string|null);

        /** UserData country */
        country?: (string|null);

        /** UserData isSubscribe */
        isSubscribe?: (boolean|null);

        /** UserData loginDays */
        loginDays?: (number|null);
    }

    /** Represents a UserData. */
    class UserData implements IUserData {

        /**
         * Constructs a new UserData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IUserData);

        /** UserData name. */
        public name: string;

        /** UserData level. */
        public level: number;

        /** UserData curExp. */
        public curExp: number;

        /** UserData nextExp. */
        public nextExp: (number|Long);

        /** UserData monentsCoin. */
        public monentsCoin: (number|Long);

        /** UserData cash. */
        public cash: number;

        /** UserData vipExp. */
        public vipExp: (number|Long);

        /** UserData vipNextExp. */
        public vipNextExp: (number|Long);

        /** UserData vipLevel. */
        public vipLevel: number;

        /** UserData iconId. */
        public iconId: number;

        /** UserData userId. */
        public userId: (number|Long);

        /** UserData bindData. */
        public bindData?: (CVP.IBindData|null);

        /** UserData vaultKey. */
        public vaultKey: number;

        /** UserData headSp. */
        public headSp: string;

        /** UserData sex. */
        public sex: CVP.SexType;

        /** UserData scratchCards. */
        public scratchCards: number;

        /** UserData facebbookInfo. */
        public facebbookInfo?: (CVP.IFacebookInfo|null);

        /** UserData isDebugUser. */
        public isDebugUser: boolean;

        /** UserData tutorialState. */
        public tutorialState: CVP.TutorialState;

        /** UserData isPaid. */
        public isPaid: boolean;

        /** UserData registerDate. */
        public registerDate: string;

        /** UserData country. */
        public country: string;

        /** UserData isSubscribe. */
        public isSubscribe: boolean;

        /** UserData loginDays. */
        public loginDays: number;

        /**
         * Creates a new UserData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserData instance
         */
        public static create(properties?: CVP.IUserData): CVP.UserData;

        /**
         * Encodes the specified UserData message. Does not implicitly {@link CVP.UserData.verify|verify} messages.
         * @param message UserData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IUserData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserData message, length delimited. Does not implicitly {@link CVP.UserData.verify|verify} messages.
         * @param message UserData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IUserData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.UserData;

        /**
         * Decodes a UserData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.UserData;

        /**
         * Verifies a UserData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserData
         */
        public static fromObject(object: { [k: string]: any }): CVP.UserData;

        /**
         * Creates a plain object from a UserData message. Also converts values to other types if specified.
         * @param message UserData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.UserData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** OfflineType enum. */
    enum OfflineType {
        CHANGEBIND = 1,
        REPEATLOGIN = 2
    }

    /** Properties of an UpdataMakeOffline. */
    interface IUpdataMakeOffline {

        /** UpdataMakeOffline offlineType */
        offlineType?: (CVP.OfflineType|null);
    }

    /** Represents an UpdataMakeOffline. */
    class UpdataMakeOffline implements IUpdataMakeOffline {

        /**
         * Constructs a new UpdataMakeOffline.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IUpdataMakeOffline);

        /** UpdataMakeOffline offlineType. */
        public offlineType: CVP.OfflineType;

        /**
         * Creates a new UpdataMakeOffline instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdataMakeOffline instance
         */
        public static create(properties?: CVP.IUpdataMakeOffline): CVP.UpdataMakeOffline;

        /**
         * Encodes the specified UpdataMakeOffline message. Does not implicitly {@link CVP.UpdataMakeOffline.verify|verify} messages.
         * @param message UpdataMakeOffline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IUpdataMakeOffline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdataMakeOffline message, length delimited. Does not implicitly {@link CVP.UpdataMakeOffline.verify|verify} messages.
         * @param message UpdataMakeOffline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IUpdataMakeOffline, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdataMakeOffline message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdataMakeOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.UpdataMakeOffline;

        /**
         * Decodes an UpdataMakeOffline message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdataMakeOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.UpdataMakeOffline;

        /**
         * Verifies an UpdataMakeOffline message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdataMakeOffline message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdataMakeOffline
         */
        public static fromObject(object: { [k: string]: any }): CVP.UpdataMakeOffline;

        /**
         * Creates a plain object from an UpdataMakeOffline message. Also converts values to other types if specified.
         * @param message UpdataMakeOffline
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.UpdataMakeOffline, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdataMakeOffline to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ping. */
    interface Iping {
    }

    /** Represents a ping. */
    class ping implements Iping {

        /**
         * Constructs a new ping.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.Iping);

        /**
         * Creates a new ping instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ping instance
         */
        public static create(properties?: CVP.Iping): CVP.ping;

        /**
         * Encodes the specified ping message. Does not implicitly {@link CVP.ping.verify|verify} messages.
         * @param message ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.Iping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ping message, length delimited. Does not implicitly {@link CVP.ping.verify|verify} messages.
         * @param message ping message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.Iping, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ping message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.ping;

        /**
         * Decodes a ping message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.ping;

        /**
         * Verifies a ping message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ping message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ping
         */
        public static fromObject(object: { [k: string]: any }): CVP.ping;

        /**
         * Creates a plain object from a ping message. Also converts values to other types if specified.
         * @param message ping
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.ping, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ping to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a pong. */
    interface Ipong {
    }

    /** Represents a pong. */
    class pong implements Ipong {

        /**
         * Constructs a new pong.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.Ipong);

        /**
         * Creates a new pong instance using the specified properties.
         * @param [properties] Properties to set
         * @returns pong instance
         */
        public static create(properties?: CVP.Ipong): CVP.pong;

        /**
         * Encodes the specified pong message. Does not implicitly {@link CVP.pong.verify|verify} messages.
         * @param message pong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.Ipong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified pong message, length delimited. Does not implicitly {@link CVP.pong.verify|verify} messages.
         * @param message pong message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.Ipong, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a pong message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.pong;

        /**
         * Decodes a pong message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.pong;

        /**
         * Verifies a pong message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a pong message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns pong
         */
        public static fromObject(object: { [k: string]: any }): CVP.pong;

        /**
         * Creates a plain object from a pong message. Also converts values to other types if specified.
         * @param message pong
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.pong, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this pong to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestProfileData. */
    interface IRequestProfileData {

        /** RequestProfileData commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestProfileData. */
    class RequestProfileData implements IRequestProfileData {

        /**
         * Constructs a new RequestProfileData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestProfileData);

        /** RequestProfileData commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestProfileData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestProfileData instance
         */
        public static create(properties?: CVP.IRequestProfileData): CVP.RequestProfileData;

        /**
         * Encodes the specified RequestProfileData message. Does not implicitly {@link CVP.RequestProfileData.verify|verify} messages.
         * @param message RequestProfileData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestProfileData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestProfileData message, length delimited. Does not implicitly {@link CVP.RequestProfileData.verify|verify} messages.
         * @param message RequestProfileData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestProfileData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestProfileData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestProfileData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestProfileData;

        /**
         * Decodes a RequestProfileData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestProfileData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestProfileData;

        /**
         * Verifies a RequestProfileData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestProfileData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestProfileData
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestProfileData;

        /**
         * Creates a plain object from a RequestProfileData message. Also converts values to other types if specified.
         * @param message RequestProfileData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestProfileData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestProfileData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** AvatarState enum. */
    enum AvatarState {
        USING = 1,
        OWNED = 2,
        NOHAVE = 3
    }

    /** NationState enum. */
    enum NationState {
        USING = 1,
        OWNED = 2
    }

    /** SexType enum. */
    enum SexType {
        male = 1,
        female = 2,
        hide = 3
    }

    /** Properties of a RequestProfileDataResult. */
    interface IRequestProfileDataResult {

        /** RequestProfileDataResult spinNum */
        spinNum?: (number|null);

        /** RequestProfileDataResult winNum */
        winNum?: (number|null);

        /** RequestProfileDataResult gameTime */
        gameTime?: (number|null);

        /** RequestProfileDataResult winCoins */
        winCoins?: (number|null);

        /** RequestProfileDataResult nationList */
        nationList?: (CVP.INation[]|null);

        /** RequestProfileDataResult avatarList */
        avatarList?: (CVP.IAvatar[]|null);

        /** RequestProfileDataResult myNation */
        myNation?: (CVP.INation|null);

        /** RequestProfileDataResult myAvatar */
        myAvatar?: (CVP.IAvatar|null);

        /** RequestProfileDataResult records */
        records?: (CVP.IRecords[]|null);

        /** RequestProfileDataResult sex */
        sex?: (CVP.SexType|null);

        /** RequestProfileDataResult VipDataList */
        VipDataList?: (CVP.IVipData[]|null);
    }

    /** Represents a RequestProfileDataResult. */
    class RequestProfileDataResult implements IRequestProfileDataResult {

        /**
         * Constructs a new RequestProfileDataResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestProfileDataResult);

        /** RequestProfileDataResult spinNum. */
        public spinNum: number;

        /** RequestProfileDataResult winNum. */
        public winNum: number;

        /** RequestProfileDataResult gameTime. */
        public gameTime: number;

        /** RequestProfileDataResult winCoins. */
        public winCoins: number;

        /** RequestProfileDataResult nationList. */
        public nationList: CVP.INation[];

        /** RequestProfileDataResult avatarList. */
        public avatarList: CVP.IAvatar[];

        /** RequestProfileDataResult myNation. */
        public myNation?: (CVP.INation|null);

        /** RequestProfileDataResult myAvatar. */
        public myAvatar?: (CVP.IAvatar|null);

        /** RequestProfileDataResult records. */
        public records: CVP.IRecords[];

        /** RequestProfileDataResult sex. */
        public sex: CVP.SexType;

        /** RequestProfileDataResult VipDataList. */
        public VipDataList: CVP.IVipData[];

        /**
         * Creates a new RequestProfileDataResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestProfileDataResult instance
         */
        public static create(properties?: CVP.IRequestProfileDataResult): CVP.RequestProfileDataResult;

        /**
         * Encodes the specified RequestProfileDataResult message. Does not implicitly {@link CVP.RequestProfileDataResult.verify|verify} messages.
         * @param message RequestProfileDataResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestProfileDataResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestProfileDataResult message, length delimited. Does not implicitly {@link CVP.RequestProfileDataResult.verify|verify} messages.
         * @param message RequestProfileDataResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestProfileDataResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestProfileDataResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestProfileDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestProfileDataResult;

        /**
         * Decodes a RequestProfileDataResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestProfileDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestProfileDataResult;

        /**
         * Verifies a RequestProfileDataResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestProfileDataResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestProfileDataResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestProfileDataResult;

        /**
         * Creates a plain object from a RequestProfileDataResult message. Also converts values to other types if specified.
         * @param message RequestProfileDataResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestProfileDataResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestProfileDataResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Records. */
    interface IRecords {

        /** Records pokerList */
        pokerList?: (string[]|null);

        /** Records winNum */
        winNum?: (number|null);

        /** Records stage */
        stage?: (number|null);

        /** Records name */
        name?: (string|null);

        /** Records time */
        time?: (string|null);
    }

    /** Represents a Records. */
    class Records implements IRecords {

        /**
         * Constructs a new Records.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRecords);

        /** Records pokerList. */
        public pokerList: string[];

        /** Records winNum. */
        public winNum: number;

        /** Records stage. */
        public stage: number;

        /** Records name. */
        public name: string;

        /** Records time. */
        public time: string;

        /**
         * Creates a new Records instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Records instance
         */
        public static create(properties?: CVP.IRecords): CVP.Records;

        /**
         * Encodes the specified Records message. Does not implicitly {@link CVP.Records.verify|verify} messages.
         * @param message Records message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRecords, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Records message, length delimited. Does not implicitly {@link CVP.Records.verify|verify} messages.
         * @param message Records message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRecords, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Records message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Records
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.Records;

        /**
         * Decodes a Records message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Records
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.Records;

        /**
         * Verifies a Records message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Records message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Records
         */
        public static fromObject(object: { [k: string]: any }): CVP.Records;

        /**
         * Creates a plain object from a Records message. Also converts values to other types if specified.
         * @param message Records
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.Records, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Records to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Nation. */
    interface INation {

        /** Nation id */
        id?: (number|null);

        /** Nation state */
        state?: (CVP.NationState|null);
    }

    /** Represents a Nation. */
    class Nation implements INation {

        /**
         * Constructs a new Nation.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.INation);

        /** Nation id. */
        public id: number;

        /** Nation state. */
        public state: CVP.NationState;

        /**
         * Creates a new Nation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Nation instance
         */
        public static create(properties?: CVP.INation): CVP.Nation;

        /**
         * Encodes the specified Nation message. Does not implicitly {@link CVP.Nation.verify|verify} messages.
         * @param message Nation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.INation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Nation message, length delimited. Does not implicitly {@link CVP.Nation.verify|verify} messages.
         * @param message Nation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.INation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Nation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Nation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.Nation;

        /**
         * Decodes a Nation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Nation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.Nation;

        /**
         * Verifies a Nation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Nation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Nation
         */
        public static fromObject(object: { [k: string]: any }): CVP.Nation;

        /**
         * Creates a plain object from a Nation message. Also converts values to other types if specified.
         * @param message Nation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.Nation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Nation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Avatar. */
    interface IAvatar {

        /** Avatar id */
        id?: (number|null);

        /** Avatar state */
        state?: (CVP.AvatarState|null);

        /** Avatar coins */
        coins?: (number|null);

        /** Avatar level */
        level?: (number|null);
    }

    /** Represents an Avatar. */
    class Avatar implements IAvatar {

        /**
         * Constructs a new Avatar.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IAvatar);

        /** Avatar id. */
        public id: number;

        /** Avatar state. */
        public state: CVP.AvatarState;

        /** Avatar coins. */
        public coins: number;

        /** Avatar level. */
        public level: number;

        /**
         * Creates a new Avatar instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Avatar instance
         */
        public static create(properties?: CVP.IAvatar): CVP.Avatar;

        /**
         * Encodes the specified Avatar message. Does not implicitly {@link CVP.Avatar.verify|verify} messages.
         * @param message Avatar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IAvatar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Avatar message, length delimited. Does not implicitly {@link CVP.Avatar.verify|verify} messages.
         * @param message Avatar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IAvatar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Avatar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Avatar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.Avatar;

        /**
         * Decodes an Avatar message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Avatar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.Avatar;

        /**
         * Verifies an Avatar message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Avatar message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Avatar
         */
        public static fromObject(object: { [k: string]: any }): CVP.Avatar;

        /**
         * Creates a plain object from an Avatar message. Also converts values to other types if specified.
         * @param message Avatar
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.Avatar, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Avatar to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestChangeAvatar. */
    interface IRequestChangeAvatar {

        /** RequestChangeAvatar commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestChangeAvatar id */
        id?: (number|null);
    }

    /** Represents a RequestChangeAvatar. */
    class RequestChangeAvatar implements IRequestChangeAvatar {

        /**
         * Constructs a new RequestChangeAvatar.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestChangeAvatar);

        /** RequestChangeAvatar commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestChangeAvatar id. */
        public id: number;

        /**
         * Creates a new RequestChangeAvatar instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestChangeAvatar instance
         */
        public static create(properties?: CVP.IRequestChangeAvatar): CVP.RequestChangeAvatar;

        /**
         * Encodes the specified RequestChangeAvatar message. Does not implicitly {@link CVP.RequestChangeAvatar.verify|verify} messages.
         * @param message RequestChangeAvatar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestChangeAvatar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestChangeAvatar message, length delimited. Does not implicitly {@link CVP.RequestChangeAvatar.verify|verify} messages.
         * @param message RequestChangeAvatar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestChangeAvatar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestChangeAvatar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestChangeAvatar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestChangeAvatar;

        /**
         * Decodes a RequestChangeAvatar message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestChangeAvatar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestChangeAvatar;

        /**
         * Verifies a RequestChangeAvatar message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestChangeAvatar message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestChangeAvatar
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestChangeAvatar;

        /**
         * Creates a plain object from a RequestChangeAvatar message. Also converts values to other types if specified.
         * @param message RequestChangeAvatar
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestChangeAvatar, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestChangeAvatar to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestChangeAvatarResult. */
    interface IRequestChangeAvatarResult {

        /** RequestChangeAvatarResult id */
        id?: (number|null);

        /** RequestChangeAvatarResult avatarList */
        avatarList?: (CVP.IAvatar[]|null);
    }

    /** Represents a RequestChangeAvatarResult. */
    class RequestChangeAvatarResult implements IRequestChangeAvatarResult {

        /**
         * Constructs a new RequestChangeAvatarResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestChangeAvatarResult);

        /** RequestChangeAvatarResult id. */
        public id: number;

        /** RequestChangeAvatarResult avatarList. */
        public avatarList: CVP.IAvatar[];

        /**
         * Creates a new RequestChangeAvatarResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestChangeAvatarResult instance
         */
        public static create(properties?: CVP.IRequestChangeAvatarResult): CVP.RequestChangeAvatarResult;

        /**
         * Encodes the specified RequestChangeAvatarResult message. Does not implicitly {@link CVP.RequestChangeAvatarResult.verify|verify} messages.
         * @param message RequestChangeAvatarResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestChangeAvatarResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestChangeAvatarResult message, length delimited. Does not implicitly {@link CVP.RequestChangeAvatarResult.verify|verify} messages.
         * @param message RequestChangeAvatarResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestChangeAvatarResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestChangeAvatarResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestChangeAvatarResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestChangeAvatarResult;

        /**
         * Decodes a RequestChangeAvatarResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestChangeAvatarResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestChangeAvatarResult;

        /**
         * Verifies a RequestChangeAvatarResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestChangeAvatarResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestChangeAvatarResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestChangeAvatarResult;

        /**
         * Creates a plain object from a RequestChangeAvatarResult message. Also converts values to other types if specified.
         * @param message RequestChangeAvatarResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestChangeAvatarResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestChangeAvatarResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestChangeNation. */
    interface IRequestChangeNation {

        /** RequestChangeNation commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestChangeNation id */
        id?: (number|null);
    }

    /** Represents a RequestChangeNation. */
    class RequestChangeNation implements IRequestChangeNation {

        /**
         * Constructs a new RequestChangeNation.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestChangeNation);

        /** RequestChangeNation commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestChangeNation id. */
        public id: number;

        /**
         * Creates a new RequestChangeNation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestChangeNation instance
         */
        public static create(properties?: CVP.IRequestChangeNation): CVP.RequestChangeNation;

        /**
         * Encodes the specified RequestChangeNation message. Does not implicitly {@link CVP.RequestChangeNation.verify|verify} messages.
         * @param message RequestChangeNation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestChangeNation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestChangeNation message, length delimited. Does not implicitly {@link CVP.RequestChangeNation.verify|verify} messages.
         * @param message RequestChangeNation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestChangeNation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestChangeNation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestChangeNation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestChangeNation;

        /**
         * Decodes a RequestChangeNation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestChangeNation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestChangeNation;

        /**
         * Verifies a RequestChangeNation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestChangeNation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestChangeNation
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestChangeNation;

        /**
         * Creates a plain object from a RequestChangeNation message. Also converts values to other types if specified.
         * @param message RequestChangeNation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestChangeNation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestChangeNation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestChangeNationResult. */
    interface IRequestChangeNationResult {

        /** RequestChangeNationResult id */
        id?: (number|null);

        /** RequestChangeNationResult nationList */
        nationList?: (CVP.INation[]|null);
    }

    /** Represents a RequestChangeNationResult. */
    class RequestChangeNationResult implements IRequestChangeNationResult {

        /**
         * Constructs a new RequestChangeNationResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestChangeNationResult);

        /** RequestChangeNationResult id. */
        public id: number;

        /** RequestChangeNationResult nationList. */
        public nationList: CVP.INation[];

        /**
         * Creates a new RequestChangeNationResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestChangeNationResult instance
         */
        public static create(properties?: CVP.IRequestChangeNationResult): CVP.RequestChangeNationResult;

        /**
         * Encodes the specified RequestChangeNationResult message. Does not implicitly {@link CVP.RequestChangeNationResult.verify|verify} messages.
         * @param message RequestChangeNationResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestChangeNationResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestChangeNationResult message, length delimited. Does not implicitly {@link CVP.RequestChangeNationResult.verify|verify} messages.
         * @param message RequestChangeNationResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestChangeNationResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestChangeNationResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestChangeNationResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestChangeNationResult;

        /**
         * Decodes a RequestChangeNationResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestChangeNationResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestChangeNationResult;

        /**
         * Verifies a RequestChangeNationResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestChangeNationResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestChangeNationResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestChangeNationResult;

        /**
         * Creates a plain object from a RequestChangeNationResult message. Also converts values to other types if specified.
         * @param message RequestChangeNationResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestChangeNationResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestChangeNationResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestChangeMyName. */
    interface IRequestChangeMyName {

        /** RequestChangeMyName commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestChangeMyName name */
        name?: (string|null);
    }

    /** Represents a RequestChangeMyName. */
    class RequestChangeMyName implements IRequestChangeMyName {

        /**
         * Constructs a new RequestChangeMyName.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestChangeMyName);

        /** RequestChangeMyName commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestChangeMyName name. */
        public name: string;

        /**
         * Creates a new RequestChangeMyName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestChangeMyName instance
         */
        public static create(properties?: CVP.IRequestChangeMyName): CVP.RequestChangeMyName;

        /**
         * Encodes the specified RequestChangeMyName message. Does not implicitly {@link CVP.RequestChangeMyName.verify|verify} messages.
         * @param message RequestChangeMyName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestChangeMyName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestChangeMyName message, length delimited. Does not implicitly {@link CVP.RequestChangeMyName.verify|verify} messages.
         * @param message RequestChangeMyName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestChangeMyName, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestChangeMyName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestChangeMyName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestChangeMyName;

        /**
         * Decodes a RequestChangeMyName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestChangeMyName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestChangeMyName;

        /**
         * Verifies a RequestChangeMyName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestChangeMyName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestChangeMyName
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestChangeMyName;

        /**
         * Creates a plain object from a RequestChangeMyName message. Also converts values to other types if specified.
         * @param message RequestChangeMyName
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestChangeMyName, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestChangeMyName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestChangeMyNameResult. */
    interface IRequestChangeMyNameResult {

        /** RequestChangeMyNameResult name */
        name?: (string|null);
    }

    /** Represents a RequestChangeMyNameResult. */
    class RequestChangeMyNameResult implements IRequestChangeMyNameResult {

        /**
         * Constructs a new RequestChangeMyNameResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestChangeMyNameResult);

        /** RequestChangeMyNameResult name. */
        public name: string;

        /**
         * Creates a new RequestChangeMyNameResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestChangeMyNameResult instance
         */
        public static create(properties?: CVP.IRequestChangeMyNameResult): CVP.RequestChangeMyNameResult;

        /**
         * Encodes the specified RequestChangeMyNameResult message. Does not implicitly {@link CVP.RequestChangeMyNameResult.verify|verify} messages.
         * @param message RequestChangeMyNameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestChangeMyNameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestChangeMyNameResult message, length delimited. Does not implicitly {@link CVP.RequestChangeMyNameResult.verify|verify} messages.
         * @param message RequestChangeMyNameResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestChangeMyNameResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestChangeMyNameResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestChangeMyNameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestChangeMyNameResult;

        /**
         * Decodes a RequestChangeMyNameResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestChangeMyNameResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestChangeMyNameResult;

        /**
         * Verifies a RequestChangeMyNameResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestChangeMyNameResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestChangeMyNameResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestChangeMyNameResult;

        /**
         * Creates a plain object from a RequestChangeMyNameResult message. Also converts values to other types if specified.
         * @param message RequestChangeMyNameResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestChangeMyNameResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestChangeMyNameResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestChangeSex. */
    interface IRequestChangeSex {

        /** RequestChangeSex commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestChangeSex sex */
        sex?: (CVP.SexType|null);
    }

    /** Represents a RequestChangeSex. */
    class RequestChangeSex implements IRequestChangeSex {

        /**
         * Constructs a new RequestChangeSex.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestChangeSex);

        /** RequestChangeSex commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestChangeSex sex. */
        public sex: CVP.SexType;

        /**
         * Creates a new RequestChangeSex instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestChangeSex instance
         */
        public static create(properties?: CVP.IRequestChangeSex): CVP.RequestChangeSex;

        /**
         * Encodes the specified RequestChangeSex message. Does not implicitly {@link CVP.RequestChangeSex.verify|verify} messages.
         * @param message RequestChangeSex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestChangeSex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestChangeSex message, length delimited. Does not implicitly {@link CVP.RequestChangeSex.verify|verify} messages.
         * @param message RequestChangeSex message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestChangeSex, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestChangeSex message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestChangeSex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestChangeSex;

        /**
         * Decodes a RequestChangeSex message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestChangeSex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestChangeSex;

        /**
         * Verifies a RequestChangeSex message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestChangeSex message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestChangeSex
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestChangeSex;

        /**
         * Creates a plain object from a RequestChangeSex message. Also converts values to other types if specified.
         * @param message RequestChangeSex
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestChangeSex, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestChangeSex to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestChangeSexResult. */
    interface IRequestChangeSexResult {

        /** RequestChangeSexResult sex */
        sex?: (CVP.SexType|null);
    }

    /** Represents a RequestChangeSexResult. */
    class RequestChangeSexResult implements IRequestChangeSexResult {

        /**
         * Constructs a new RequestChangeSexResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestChangeSexResult);

        /** RequestChangeSexResult sex. */
        public sex: CVP.SexType;

        /**
         * Creates a new RequestChangeSexResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestChangeSexResult instance
         */
        public static create(properties?: CVP.IRequestChangeSexResult): CVP.RequestChangeSexResult;

        /**
         * Encodes the specified RequestChangeSexResult message. Does not implicitly {@link CVP.RequestChangeSexResult.verify|verify} messages.
         * @param message RequestChangeSexResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestChangeSexResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestChangeSexResult message, length delimited. Does not implicitly {@link CVP.RequestChangeSexResult.verify|verify} messages.
         * @param message RequestChangeSexResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestChangeSexResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestChangeSexResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestChangeSexResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestChangeSexResult;

        /**
         * Decodes a RequestChangeSexResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestChangeSexResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestChangeSexResult;

        /**
         * Verifies a RequestChangeSexResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestChangeSexResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestChangeSexResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestChangeSexResult;

        /**
         * Creates a plain object from a RequestChangeSexResult message. Also converts values to other types if specified.
         * @param message RequestChangeSexResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestChangeSexResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestChangeSexResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestBuyAvatar. */
    interface IRequestBuyAvatar {

        /** RequestBuyAvatar commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestBuyAvatar id */
        id?: (number|null);
    }

    /** Represents a RequestBuyAvatar. */
    class RequestBuyAvatar implements IRequestBuyAvatar {

        /**
         * Constructs a new RequestBuyAvatar.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestBuyAvatar);

        /** RequestBuyAvatar commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestBuyAvatar id. */
        public id: number;

        /**
         * Creates a new RequestBuyAvatar instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestBuyAvatar instance
         */
        public static create(properties?: CVP.IRequestBuyAvatar): CVP.RequestBuyAvatar;

        /**
         * Encodes the specified RequestBuyAvatar message. Does not implicitly {@link CVP.RequestBuyAvatar.verify|verify} messages.
         * @param message RequestBuyAvatar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestBuyAvatar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestBuyAvatar message, length delimited. Does not implicitly {@link CVP.RequestBuyAvatar.verify|verify} messages.
         * @param message RequestBuyAvatar message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestBuyAvatar, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestBuyAvatar message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestBuyAvatar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestBuyAvatar;

        /**
         * Decodes a RequestBuyAvatar message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestBuyAvatar
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestBuyAvatar;

        /**
         * Verifies a RequestBuyAvatar message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestBuyAvatar message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestBuyAvatar
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestBuyAvatar;

        /**
         * Creates a plain object from a RequestBuyAvatar message. Also converts values to other types if specified.
         * @param message RequestBuyAvatar
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestBuyAvatar, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestBuyAvatar to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestBuyAvatarResult. */
    interface IRequestBuyAvatarResult {

        /** RequestBuyAvatarResult id */
        id?: (number|null);

        /** RequestBuyAvatarResult avatarList */
        avatarList?: (CVP.IAvatar[]|null);
    }

    /** Represents a RequestBuyAvatarResult. */
    class RequestBuyAvatarResult implements IRequestBuyAvatarResult {

        /**
         * Constructs a new RequestBuyAvatarResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestBuyAvatarResult);

        /** RequestBuyAvatarResult id. */
        public id: number;

        /** RequestBuyAvatarResult avatarList. */
        public avatarList: CVP.IAvatar[];

        /**
         * Creates a new RequestBuyAvatarResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestBuyAvatarResult instance
         */
        public static create(properties?: CVP.IRequestBuyAvatarResult): CVP.RequestBuyAvatarResult;

        /**
         * Encodes the specified RequestBuyAvatarResult message. Does not implicitly {@link CVP.RequestBuyAvatarResult.verify|verify} messages.
         * @param message RequestBuyAvatarResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestBuyAvatarResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestBuyAvatarResult message, length delimited. Does not implicitly {@link CVP.RequestBuyAvatarResult.verify|verify} messages.
         * @param message RequestBuyAvatarResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestBuyAvatarResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestBuyAvatarResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestBuyAvatarResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestBuyAvatarResult;

        /**
         * Decodes a RequestBuyAvatarResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestBuyAvatarResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestBuyAvatarResult;

        /**
         * Verifies a RequestBuyAvatarResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestBuyAvatarResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestBuyAvatarResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestBuyAvatarResult;

        /**
         * Creates a plain object from a RequestBuyAvatarResult message. Also converts values to other types if specified.
         * @param message RequestBuyAvatarResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestBuyAvatarResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestBuyAvatarResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VipData. */
    interface IVipData {

        /** VipData levelUpGifts */
        levelUpGifts?: (number|null);

        /** VipData casinoGifts */
        casinoGifts?: (number|null);

        /** VipData dailyGifts */
        dailyGifts?: (number|null);

        /** VipData bonusGifts */
        bonusGifts?: (number|null);

        /** VipData doubleOrNothing */
        doubleOrNothing?: (number|null);

        /** VipData purchaseGifts */
        purchaseGifts?: (number|null);
    }

    /** Represents a VipData. */
    class VipData implements IVipData {

        /**
         * Constructs a new VipData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IVipData);

        /** VipData levelUpGifts. */
        public levelUpGifts: number;

        /** VipData casinoGifts. */
        public casinoGifts: number;

        /** VipData dailyGifts. */
        public dailyGifts: number;

        /** VipData bonusGifts. */
        public bonusGifts: number;

        /** VipData doubleOrNothing. */
        public doubleOrNothing: number;

        /** VipData purchaseGifts. */
        public purchaseGifts: number;

        /**
         * Creates a new VipData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VipData instance
         */
        public static create(properties?: CVP.IVipData): CVP.VipData;

        /**
         * Encodes the specified VipData message. Does not implicitly {@link CVP.VipData.verify|verify} messages.
         * @param message VipData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IVipData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VipData message, length delimited. Does not implicitly {@link CVP.VipData.verify|verify} messages.
         * @param message VipData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IVipData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VipData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VipData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.VipData;

        /**
         * Decodes a VipData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VipData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.VipData;

        /**
         * Verifies a VipData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VipData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VipData
         */
        public static fromObject(object: { [k: string]: any }): CVP.VipData;

        /**
         * Creates a plain object from a VipData message. Also converts values to other types if specified.
         * @param message VipData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.VipData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VipData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateVipLevel. */
    interface IUpdateVipLevel {

        /** UpdateVipLevel vipLevel */
        vipLevel?: (number|null);

        /** UpdateVipLevel vipExp */
        vipExp?: (number|Long|null);

        /** UpdateVipLevel vipNextExp */
        vipNextExp?: (number|Long|null);
    }

    /** Represents an UpdateVipLevel. */
    class UpdateVipLevel implements IUpdateVipLevel {

        /**
         * Constructs a new UpdateVipLevel.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IUpdateVipLevel);

        /** UpdateVipLevel vipLevel. */
        public vipLevel: number;

        /** UpdateVipLevel vipExp. */
        public vipExp: (number|Long);

        /** UpdateVipLevel vipNextExp. */
        public vipNextExp: (number|Long);

        /**
         * Creates a new UpdateVipLevel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateVipLevel instance
         */
        public static create(properties?: CVP.IUpdateVipLevel): CVP.UpdateVipLevel;

        /**
         * Encodes the specified UpdateVipLevel message. Does not implicitly {@link CVP.UpdateVipLevel.verify|verify} messages.
         * @param message UpdateVipLevel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IUpdateVipLevel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateVipLevel message, length delimited. Does not implicitly {@link CVP.UpdateVipLevel.verify|verify} messages.
         * @param message UpdateVipLevel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IUpdateVipLevel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateVipLevel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateVipLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.UpdateVipLevel;

        /**
         * Decodes an UpdateVipLevel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateVipLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.UpdateVipLevel;

        /**
         * Verifies an UpdateVipLevel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateVipLevel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateVipLevel
         */
        public static fromObject(object: { [k: string]: any }): CVP.UpdateVipLevel;

        /**
         * Creates a plain object from an UpdateVipLevel message. Also converts values to other types if specified.
         * @param message UpdateVipLevel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.UpdateVipLevel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateVipLevel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** DealType enum. */
    enum DealType {
        SPECIAL_DEAL = 1,
        PERSONAL_DEAL = 2,
        INVITATION_DEAL = 3
    }

    /** Properties of a RequestHotDeal. */
    interface IRequestHotDeal {

        /** RequestHotDeal commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestHotDeal dealType */
        dealType?: (CVP.DealType|null);
    }

    /** Represents a RequestHotDeal. */
    class RequestHotDeal implements IRequestHotDeal {

        /**
         * Constructs a new RequestHotDeal.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestHotDeal);

        /** RequestHotDeal commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestHotDeal dealType. */
        public dealType: CVP.DealType;

        /**
         * Creates a new RequestHotDeal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestHotDeal instance
         */
        public static create(properties?: CVP.IRequestHotDeal): CVP.RequestHotDeal;

        /**
         * Encodes the specified RequestHotDeal message. Does not implicitly {@link CVP.RequestHotDeal.verify|verify} messages.
         * @param message RequestHotDeal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestHotDeal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestHotDeal message, length delimited. Does not implicitly {@link CVP.RequestHotDeal.verify|verify} messages.
         * @param message RequestHotDeal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestHotDeal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestHotDeal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestHotDeal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestHotDeal;

        /**
         * Decodes a RequestHotDeal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestHotDeal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestHotDeal;

        /**
         * Verifies a RequestHotDeal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestHotDeal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestHotDeal
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestHotDeal;

        /**
         * Creates a plain object from a RequestHotDeal message. Also converts values to other types if specified.
         * @param message RequestHotDeal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestHotDeal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestHotDeal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestHotDealResult. */
    interface IRequestHotDealResult {

        /** RequestHotDealResult dealId */
        dealId?: (number|null);

        /** RequestHotDealResult time */
        time?: (number|null);

        /** RequestHotDealResult dealInfo */
        dealInfo?: (CVP.IItemInfo|null);

        /** RequestHotDealResult freePercent */
        freePercent?: (number|null);
    }

    /** Represents a RequestHotDealResult. */
    class RequestHotDealResult implements IRequestHotDealResult {

        /**
         * Constructs a new RequestHotDealResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestHotDealResult);

        /** RequestHotDealResult dealId. */
        public dealId: number;

        /** RequestHotDealResult time. */
        public time: number;

        /** RequestHotDealResult dealInfo. */
        public dealInfo?: (CVP.IItemInfo|null);

        /** RequestHotDealResult freePercent. */
        public freePercent: number;

        /**
         * Creates a new RequestHotDealResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestHotDealResult instance
         */
        public static create(properties?: CVP.IRequestHotDealResult): CVP.RequestHotDealResult;

        /**
         * Encodes the specified RequestHotDealResult message. Does not implicitly {@link CVP.RequestHotDealResult.verify|verify} messages.
         * @param message RequestHotDealResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestHotDealResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestHotDealResult message, length delimited. Does not implicitly {@link CVP.RequestHotDealResult.verify|verify} messages.
         * @param message RequestHotDealResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestHotDealResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestHotDealResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestHotDealResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestHotDealResult;

        /**
         * Decodes a RequestHotDealResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestHotDealResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestHotDealResult;

        /**
         * Verifies a RequestHotDealResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestHotDealResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestHotDealResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestHotDealResult;

        /**
         * Creates a plain object from a RequestHotDealResult message. Also converts values to other types if specified.
         * @param message RequestHotDealResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestHotDealResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestHotDealResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** DEEPLINKTYPE enum. */
    enum DEEPLINKTYPE {
        RECEIVE = 1,
        RECEIVED = 2,
        TIMEOUT = 3,
        NOPERMISSION = 4
    }

    /** Properties of a RequestDeepLinkType. */
    interface IRequestDeepLinkType {

        /** RequestDeepLinkType commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestDeepLinkType code */
        code?: (string|null);

        /** RequestDeepLinkType channel */
        channel?: (string|null);
    }

    /** Represents a RequestDeepLinkType. */
    class RequestDeepLinkType implements IRequestDeepLinkType {

        /**
         * Constructs a new RequestDeepLinkType.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestDeepLinkType);

        /** RequestDeepLinkType commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestDeepLinkType code. */
        public code: string;

        /** RequestDeepLinkType channel. */
        public channel: string;

        /**
         * Creates a new RequestDeepLinkType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestDeepLinkType instance
         */
        public static create(properties?: CVP.IRequestDeepLinkType): CVP.RequestDeepLinkType;

        /**
         * Encodes the specified RequestDeepLinkType message. Does not implicitly {@link CVP.RequestDeepLinkType.verify|verify} messages.
         * @param message RequestDeepLinkType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestDeepLinkType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestDeepLinkType message, length delimited. Does not implicitly {@link CVP.RequestDeepLinkType.verify|verify} messages.
         * @param message RequestDeepLinkType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestDeepLinkType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestDeepLinkType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestDeepLinkType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestDeepLinkType;

        /**
         * Decodes a RequestDeepLinkType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestDeepLinkType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestDeepLinkType;

        /**
         * Verifies a RequestDeepLinkType message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestDeepLinkType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestDeepLinkType
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestDeepLinkType;

        /**
         * Creates a plain object from a RequestDeepLinkType message. Also converts values to other types if specified.
         * @param message RequestDeepLinkType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestDeepLinkType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestDeepLinkType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestDeepLinkTypeResult. */
    interface IRequestDeepLinkTypeResult {

        /** RequestDeepLinkTypeResult result_type */
        result_type?: (CVP.DEEPLINKTYPE|null);

        /** RequestDeepLinkTypeResult rewardInfo */
        rewardInfo?: (CVP.IRewardInfo[]|null);
    }

    /** Represents a RequestDeepLinkTypeResult. */
    class RequestDeepLinkTypeResult implements IRequestDeepLinkTypeResult {

        /**
         * Constructs a new RequestDeepLinkTypeResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestDeepLinkTypeResult);

        /** RequestDeepLinkTypeResult result_type. */
        public result_type: CVP.DEEPLINKTYPE;

        /** RequestDeepLinkTypeResult rewardInfo. */
        public rewardInfo: CVP.IRewardInfo[];

        /**
         * Creates a new RequestDeepLinkTypeResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestDeepLinkTypeResult instance
         */
        public static create(properties?: CVP.IRequestDeepLinkTypeResult): CVP.RequestDeepLinkTypeResult;

        /**
         * Encodes the specified RequestDeepLinkTypeResult message. Does not implicitly {@link CVP.RequestDeepLinkTypeResult.verify|verify} messages.
         * @param message RequestDeepLinkTypeResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestDeepLinkTypeResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestDeepLinkTypeResult message, length delimited. Does not implicitly {@link CVP.RequestDeepLinkTypeResult.verify|verify} messages.
         * @param message RequestDeepLinkTypeResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestDeepLinkTypeResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestDeepLinkTypeResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestDeepLinkTypeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestDeepLinkTypeResult;

        /**
         * Decodes a RequestDeepLinkTypeResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestDeepLinkTypeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestDeepLinkTypeResult;

        /**
         * Verifies a RequestDeepLinkTypeResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestDeepLinkTypeResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestDeepLinkTypeResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestDeepLinkTypeResult;

        /**
         * Creates a plain object from a RequestDeepLinkTypeResult message. Also converts values to other types if specified.
         * @param message RequestDeepLinkTypeResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestDeepLinkTypeResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestDeepLinkTypeResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RewardInfo. */
    interface IRewardInfo {

        /** RewardInfo valueType */
        valueType?: (CVP.ValueType|null);

        /** RewardInfo finalValue */
        finalValue?: (number|null);
    }

    /** Represents a RewardInfo. */
    class RewardInfo implements IRewardInfo {

        /**
         * Constructs a new RewardInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRewardInfo);

        /** RewardInfo valueType. */
        public valueType: CVP.ValueType;

        /** RewardInfo finalValue. */
        public finalValue: number;

        /**
         * Creates a new RewardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RewardInfo instance
         */
        public static create(properties?: CVP.IRewardInfo): CVP.RewardInfo;

        /**
         * Encodes the specified RewardInfo message. Does not implicitly {@link CVP.RewardInfo.verify|verify} messages.
         * @param message RewardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRewardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RewardInfo message, length delimited. Does not implicitly {@link CVP.RewardInfo.verify|verify} messages.
         * @param message RewardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRewardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RewardInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RewardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RewardInfo;

        /**
         * Decodes a RewardInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RewardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RewardInfo;

        /**
         * Verifies a RewardInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RewardInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RewardInfo
         */
        public static fromObject(object: { [k: string]: any }): CVP.RewardInfo;

        /**
         * Creates a plain object from a RewardInfo message. Also converts values to other types if specified.
         * @param message RewardInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RewardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RewardInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestDeepLinkReward. */
    interface IRequestDeepLinkReward {

        /** RequestDeepLinkReward commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestDeepLinkReward code */
        code?: (string|null);

        /** RequestDeepLinkReward channel */
        channel?: (string|null);
    }

    /** Represents a RequestDeepLinkReward. */
    class RequestDeepLinkReward implements IRequestDeepLinkReward {

        /**
         * Constructs a new RequestDeepLinkReward.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestDeepLinkReward);

        /** RequestDeepLinkReward commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestDeepLinkReward code. */
        public code: string;

        /** RequestDeepLinkReward channel. */
        public channel: string;

        /**
         * Creates a new RequestDeepLinkReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestDeepLinkReward instance
         */
        public static create(properties?: CVP.IRequestDeepLinkReward): CVP.RequestDeepLinkReward;

        /**
         * Encodes the specified RequestDeepLinkReward message. Does not implicitly {@link CVP.RequestDeepLinkReward.verify|verify} messages.
         * @param message RequestDeepLinkReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestDeepLinkReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestDeepLinkReward message, length delimited. Does not implicitly {@link CVP.RequestDeepLinkReward.verify|verify} messages.
         * @param message RequestDeepLinkReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestDeepLinkReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestDeepLinkReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestDeepLinkReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestDeepLinkReward;

        /**
         * Decodes a RequestDeepLinkReward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestDeepLinkReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestDeepLinkReward;

        /**
         * Verifies a RequestDeepLinkReward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestDeepLinkReward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestDeepLinkReward
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestDeepLinkReward;

        /**
         * Creates a plain object from a RequestDeepLinkReward message. Also converts values to other types if specified.
         * @param message RequestDeepLinkReward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestDeepLinkReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestDeepLinkReward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestDeepLinkRewardResult. */
    interface IRequestDeepLinkRewardResult {

        /** RequestDeepLinkRewardResult rewardInfo */
        rewardInfo?: (CVP.IRewardInfo[]|null);
    }

    /** Represents a RequestDeepLinkRewardResult. */
    class RequestDeepLinkRewardResult implements IRequestDeepLinkRewardResult {

        /**
         * Constructs a new RequestDeepLinkRewardResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestDeepLinkRewardResult);

        /** RequestDeepLinkRewardResult rewardInfo. */
        public rewardInfo: CVP.IRewardInfo[];

        /**
         * Creates a new RequestDeepLinkRewardResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestDeepLinkRewardResult instance
         */
        public static create(properties?: CVP.IRequestDeepLinkRewardResult): CVP.RequestDeepLinkRewardResult;

        /**
         * Encodes the specified RequestDeepLinkRewardResult message. Does not implicitly {@link CVP.RequestDeepLinkRewardResult.verify|verify} messages.
         * @param message RequestDeepLinkRewardResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestDeepLinkRewardResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestDeepLinkRewardResult message, length delimited. Does not implicitly {@link CVP.RequestDeepLinkRewardResult.verify|verify} messages.
         * @param message RequestDeepLinkRewardResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestDeepLinkRewardResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestDeepLinkRewardResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestDeepLinkRewardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestDeepLinkRewardResult;

        /**
         * Decodes a RequestDeepLinkRewardResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestDeepLinkRewardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestDeepLinkRewardResult;

        /**
         * Verifies a RequestDeepLinkRewardResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestDeepLinkRewardResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestDeepLinkRewardResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestDeepLinkRewardResult;

        /**
         * Creates a plain object from a RequestDeepLinkRewardResult message. Also converts values to other types if specified.
         * @param message RequestDeepLinkRewardResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestDeepLinkRewardResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestDeepLinkRewardResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendFeedBack. */
    interface ISendFeedBack {

        /** SendFeedBack mailAddress */
        mailAddress?: (string|null);

        /** SendFeedBack info */
        info?: (string|null);

        /** SendFeedBack deviceId */
        deviceId?: (string|null);

        /** SendFeedBack fileData */
        fileData?: (Uint8Array[]|null);
    }

    /** Represents a SendFeedBack. */
    class SendFeedBack implements ISendFeedBack {

        /**
         * Constructs a new SendFeedBack.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.ISendFeedBack);

        /** SendFeedBack mailAddress. */
        public mailAddress: string;

        /** SendFeedBack info. */
        public info: string;

        /** SendFeedBack deviceId. */
        public deviceId: string;

        /** SendFeedBack fileData. */
        public fileData: Uint8Array[];

        /**
         * Creates a new SendFeedBack instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendFeedBack instance
         */
        public static create(properties?: CVP.ISendFeedBack): CVP.SendFeedBack;

        /**
         * Encodes the specified SendFeedBack message. Does not implicitly {@link CVP.SendFeedBack.verify|verify} messages.
         * @param message SendFeedBack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.ISendFeedBack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendFeedBack message, length delimited. Does not implicitly {@link CVP.SendFeedBack.verify|verify} messages.
         * @param message SendFeedBack message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.ISendFeedBack, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendFeedBack message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendFeedBack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.SendFeedBack;

        /**
         * Decodes a SendFeedBack message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendFeedBack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.SendFeedBack;

        /**
         * Verifies a SendFeedBack message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendFeedBack message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendFeedBack
         */
        public static fromObject(object: { [k: string]: any }): CVP.SendFeedBack;

        /**
         * Creates a plain object from a SendFeedBack message. Also converts values to other types if specified.
         * @param message SendFeedBack
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.SendFeedBack, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendFeedBack to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** VideoPokerDoubleSelectType enum. */
    enum VideoPokerDoubleSelectType {
        NON = 0,
        BLACK = 1,
        RED = 2,
        SPADE = 3,
        HEART = 4,
        CLUB = 5,
        DIAMOND = 6
    }

    /** Properties of a RequestEnterVideoPoker. */
    interface IRequestEnterVideoPoker {

        /** RequestEnterVideoPoker gameId */
        gameId?: (number|null);

        /** RequestEnterVideoPoker isPractice */
        isPractice?: (boolean|null);

        /** RequestEnterVideoPoker commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestEnterVideoPoker. */
    class RequestEnterVideoPoker implements IRequestEnterVideoPoker {

        /**
         * Constructs a new RequestEnterVideoPoker.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestEnterVideoPoker);

        /** RequestEnterVideoPoker gameId. */
        public gameId: number;

        /** RequestEnterVideoPoker isPractice. */
        public isPractice: boolean;

        /** RequestEnterVideoPoker commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestEnterVideoPoker instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestEnterVideoPoker instance
         */
        public static create(properties?: CVP.IRequestEnterVideoPoker): CVP.RequestEnterVideoPoker;

        /**
         * Encodes the specified RequestEnterVideoPoker message. Does not implicitly {@link CVP.RequestEnterVideoPoker.verify|verify} messages.
         * @param message RequestEnterVideoPoker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestEnterVideoPoker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestEnterVideoPoker message, length delimited. Does not implicitly {@link CVP.RequestEnterVideoPoker.verify|verify} messages.
         * @param message RequestEnterVideoPoker message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestEnterVideoPoker, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestEnterVideoPoker message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestEnterVideoPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestEnterVideoPoker;

        /**
         * Decodes a RequestEnterVideoPoker message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestEnterVideoPoker
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestEnterVideoPoker;

        /**
         * Verifies a RequestEnterVideoPoker message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestEnterVideoPoker message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestEnterVideoPoker
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestEnterVideoPoker;

        /**
         * Creates a plain object from a RequestEnterVideoPoker message. Also converts values to other types if specified.
         * @param message RequestEnterVideoPoker
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestEnterVideoPoker, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestEnterVideoPoker to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PayTable. */
    interface IPayTable {

        /** PayTable bet1List */
        bet1List?: (number[]|null);

        /** PayTable bet2List */
        bet2List?: (number[]|null);

        /** PayTable bet3List */
        bet3List?: (number[]|null);

        /** PayTable bet4List */
        bet4List?: (number[]|null);

        /** PayTable bet5List */
        bet5List?: (number[]|null);

        /** PayTable winData */
        winData?: (CVP.IWinData[]|null);

        /** PayTable jackPot */
        jackPot?: (CVP.IJackPot[]|null);
    }

    /** Represents a PayTable. */
    class PayTable implements IPayTable {

        /**
         * Constructs a new PayTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IPayTable);

        /** PayTable bet1List. */
        public bet1List: number[];

        /** PayTable bet2List. */
        public bet2List: number[];

        /** PayTable bet3List. */
        public bet3List: number[];

        /** PayTable bet4List. */
        public bet4List: number[];

        /** PayTable bet5List. */
        public bet5List: number[];

        /** PayTable winData. */
        public winData: CVP.IWinData[];

        /** PayTable jackPot. */
        public jackPot: CVP.IJackPot[];

        /**
         * Creates a new PayTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PayTable instance
         */
        public static create(properties?: CVP.IPayTable): CVP.PayTable;

        /**
         * Encodes the specified PayTable message. Does not implicitly {@link CVP.PayTable.verify|verify} messages.
         * @param message PayTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IPayTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PayTable message, length delimited. Does not implicitly {@link CVP.PayTable.verify|verify} messages.
         * @param message PayTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IPayTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PayTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PayTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.PayTable;

        /**
         * Decodes a PayTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PayTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.PayTable;

        /**
         * Verifies a PayTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PayTable message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PayTable
         */
        public static fromObject(object: { [k: string]: any }): CVP.PayTable;

        /**
         * Creates a plain object from a PayTable message. Also converts values to other types if specified.
         * @param message PayTable
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.PayTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PayTable to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WinData. */
    interface IWinData {

        /** WinData name */
        name?: (string|null);
    }

    /** Represents a WinData. */
    class WinData implements IWinData {

        /**
         * Constructs a new WinData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IWinData);

        /** WinData name. */
        public name: string;

        /**
         * Creates a new WinData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WinData instance
         */
        public static create(properties?: CVP.IWinData): CVP.WinData;

        /**
         * Encodes the specified WinData message. Does not implicitly {@link CVP.WinData.verify|verify} messages.
         * @param message WinData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IWinData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WinData message, length delimited. Does not implicitly {@link CVP.WinData.verify|verify} messages.
         * @param message WinData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IWinData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WinData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WinData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.WinData;

        /**
         * Decodes a WinData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WinData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.WinData;

        /**
         * Verifies a WinData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WinData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WinData
         */
        public static fromObject(object: { [k: string]: any }): CVP.WinData;

        /**
         * Creates a plain object from a WinData message. Also converts values to other types if specified.
         * @param message WinData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.WinData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WinData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a JackPot. */
    interface IJackPot {

        /** JackPot row */
        row?: (number|null);

        /** JackPot col */
        col?: (number|null);
    }

    /** Represents a JackPot. */
    class JackPot implements IJackPot {

        /**
         * Constructs a new JackPot.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IJackPot);

        /** JackPot row. */
        public row: number;

        /** JackPot col. */
        public col: number;

        /**
         * Creates a new JackPot instance using the specified properties.
         * @param [properties] Properties to set
         * @returns JackPot instance
         */
        public static create(properties?: CVP.IJackPot): CVP.JackPot;

        /**
         * Encodes the specified JackPot message. Does not implicitly {@link CVP.JackPot.verify|verify} messages.
         * @param message JackPot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IJackPot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified JackPot message, length delimited. Does not implicitly {@link CVP.JackPot.verify|verify} messages.
         * @param message JackPot message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IJackPot, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JackPot message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns JackPot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.JackPot;

        /**
         * Decodes a JackPot message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns JackPot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.JackPot;

        /**
         * Verifies a JackPot message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a JackPot message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns JackPot
         */
        public static fromObject(object: { [k: string]: any }): CVP.JackPot;

        /**
         * Creates a plain object from a JackPot message. Also converts values to other types if specified.
         * @param message JackPot
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.JackPot, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this JackPot to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestEnterVideoPokerResult. */
    interface IRequestEnterVideoPokerResult {

        /** RequestEnterVideoPokerResult curBetIdx */
        curBetIdx?: (number|null);

        /** RequestEnterVideoPokerResult payTable */
        payTable?: (CVP.IPayTable|null);

        /** RequestEnterVideoPokerResult creditAmount */
        creditAmount?: (number[]|null);

        /** RequestEnterVideoPokerResult jackpotAcc */
        jackpotAcc?: (number|null);

        /** RequestEnterVideoPokerResult jackpotBase */
        jackpotBase?: (number|null);

        /** RequestEnterVideoPokerResult creditAmountIdx */
        creditAmountIdx?: (number|null);

        /** RequestEnterVideoPokerResult isHaveInterstitial */
        isHaveInterstitial?: (boolean|null);

        /** RequestEnterVideoPokerResult isPractice */
        isPractice?: (boolean|null);

        /** RequestEnterVideoPokerResult creditAmountMax */
        creditAmountMax?: (number|null);

        /** RequestEnterVideoPokerResult jackpotAdd */
        jackpotAdd?: (number|null);

        /** RequestEnterVideoPokerResult gameId */
        gameId?: (number|null);
    }

    /** Represents a RequestEnterVideoPokerResult. */
    class RequestEnterVideoPokerResult implements IRequestEnterVideoPokerResult {

        /**
         * Constructs a new RequestEnterVideoPokerResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestEnterVideoPokerResult);

        /** RequestEnterVideoPokerResult curBetIdx. */
        public curBetIdx: number;

        /** RequestEnterVideoPokerResult payTable. */
        public payTable?: (CVP.IPayTable|null);

        /** RequestEnterVideoPokerResult creditAmount. */
        public creditAmount: number[];

        /** RequestEnterVideoPokerResult jackpotAcc. */
        public jackpotAcc: number;

        /** RequestEnterVideoPokerResult jackpotBase. */
        public jackpotBase: number;

        /** RequestEnterVideoPokerResult creditAmountIdx. */
        public creditAmountIdx: number;

        /** RequestEnterVideoPokerResult isHaveInterstitial. */
        public isHaveInterstitial: boolean;

        /** RequestEnterVideoPokerResult isPractice. */
        public isPractice: boolean;

        /** RequestEnterVideoPokerResult creditAmountMax. */
        public creditAmountMax: number;

        /** RequestEnterVideoPokerResult jackpotAdd. */
        public jackpotAdd: number;

        /** RequestEnterVideoPokerResult gameId. */
        public gameId: number;

        /**
         * Creates a new RequestEnterVideoPokerResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestEnterVideoPokerResult instance
         */
        public static create(properties?: CVP.IRequestEnterVideoPokerResult): CVP.RequestEnterVideoPokerResult;

        /**
         * Encodes the specified RequestEnterVideoPokerResult message. Does not implicitly {@link CVP.RequestEnterVideoPokerResult.verify|verify} messages.
         * @param message RequestEnterVideoPokerResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestEnterVideoPokerResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestEnterVideoPokerResult message, length delimited. Does not implicitly {@link CVP.RequestEnterVideoPokerResult.verify|verify} messages.
         * @param message RequestEnterVideoPokerResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestEnterVideoPokerResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestEnterVideoPokerResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestEnterVideoPokerResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestEnterVideoPokerResult;

        /**
         * Decodes a RequestEnterVideoPokerResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestEnterVideoPokerResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestEnterVideoPokerResult;

        /**
         * Verifies a RequestEnterVideoPokerResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestEnterVideoPokerResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestEnterVideoPokerResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestEnterVideoPokerResult;

        /**
         * Creates a plain object from a RequestEnterVideoPokerResult message. Also converts values to other types if specified.
         * @param message RequestEnterVideoPokerResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestEnterVideoPokerResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestEnterVideoPokerResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestDeal. */
    interface IRequestDeal {

        /** RequestDeal curBetIdx */
        curBetIdx?: (number|null);

        /** RequestDeal creditAmountIdx */
        creditAmountIdx?: (number|null);

        /** RequestDeal hand */
        hand?: (number|null);

        /** RequestDeal pokerList */
        pokerList?: (string[]|null);

        /** RequestDeal isPractice */
        isPractice?: (boolean|null);

        /** RequestDeal commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestDeal. */
    class RequestDeal implements IRequestDeal {

        /**
         * Constructs a new RequestDeal.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestDeal);

        /** RequestDeal curBetIdx. */
        public curBetIdx: number;

        /** RequestDeal creditAmountIdx. */
        public creditAmountIdx: number;

        /** RequestDeal hand. */
        public hand: number;

        /** RequestDeal pokerList. */
        public pokerList: string[];

        /** RequestDeal isPractice. */
        public isPractice: boolean;

        /** RequestDeal commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestDeal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestDeal instance
         */
        public static create(properties?: CVP.IRequestDeal): CVP.RequestDeal;

        /**
         * Encodes the specified RequestDeal message. Does not implicitly {@link CVP.RequestDeal.verify|verify} messages.
         * @param message RequestDeal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestDeal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestDeal message, length delimited. Does not implicitly {@link CVP.RequestDeal.verify|verify} messages.
         * @param message RequestDeal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestDeal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestDeal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestDeal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestDeal;

        /**
         * Decodes a RequestDeal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestDeal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestDeal;

        /**
         * Verifies a RequestDeal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestDeal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestDeal
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestDeal;

        /**
         * Creates a plain object from a RequestDeal message. Also converts values to other types if specified.
         * @param message RequestDeal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestDeal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestDeal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestDealResult. */
    interface IRequestDealResult {

        /** RequestDealResult pokerList */
        pokerList?: (string[]|null);

        /** RequestDealResult winTypeName */
        winTypeName?: (string|null);

        /** RequestDealResult jackpot */
        jackpot?: (number|null);
    }

    /** Represents a RequestDealResult. */
    class RequestDealResult implements IRequestDealResult {

        /**
         * Constructs a new RequestDealResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestDealResult);

        /** RequestDealResult pokerList. */
        public pokerList: string[];

        /** RequestDealResult winTypeName. */
        public winTypeName: string;

        /** RequestDealResult jackpot. */
        public jackpot: number;

        /**
         * Creates a new RequestDealResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestDealResult instance
         */
        public static create(properties?: CVP.IRequestDealResult): CVP.RequestDealResult;

        /**
         * Encodes the specified RequestDealResult message. Does not implicitly {@link CVP.RequestDealResult.verify|verify} messages.
         * @param message RequestDealResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestDealResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestDealResult message, length delimited. Does not implicitly {@link CVP.RequestDealResult.verify|verify} messages.
         * @param message RequestDealResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestDealResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestDealResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestDealResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestDealResult;

        /**
         * Decodes a RequestDealResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestDealResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestDealResult;

        /**
         * Verifies a RequestDealResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestDealResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestDealResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestDealResult;

        /**
         * Creates a plain object from a RequestDealResult message. Also converts values to other types if specified.
         * @param message RequestDealResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestDealResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestDealResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestDraw. */
    interface IRequestDraw {

        /** RequestDraw holdIdxList */
        holdIdxList?: (number[]|null);

        /** RequestDraw commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestDraw. */
    class RequestDraw implements IRequestDraw {

        /**
         * Constructs a new RequestDraw.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestDraw);

        /** RequestDraw holdIdxList. */
        public holdIdxList: number[];

        /** RequestDraw commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestDraw instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestDraw instance
         */
        public static create(properties?: CVP.IRequestDraw): CVP.RequestDraw;

        /**
         * Encodes the specified RequestDraw message. Does not implicitly {@link CVP.RequestDraw.verify|verify} messages.
         * @param message RequestDraw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestDraw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestDraw message, length delimited. Does not implicitly {@link CVP.RequestDraw.verify|verify} messages.
         * @param message RequestDraw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestDraw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestDraw message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestDraw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestDraw;

        /**
         * Decodes a RequestDraw message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestDraw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestDraw;

        /**
         * Verifies a RequestDraw message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestDraw message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestDraw
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestDraw;

        /**
         * Creates a plain object from a RequestDraw message. Also converts values to other types if specified.
         * @param message RequestDraw
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestDraw, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestDraw to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestDrawDebug. */
    interface IRequestDrawDebug {

        /** RequestDrawDebug commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestDrawDebug holdIdxList */
        holdIdxList?: (number[]|null);

        /** RequestDrawDebug pokerList */
        pokerList?: (string[]|null);

        /** RequestDrawDebug multiple */
        multiple?: (number|null);
    }

    /** Represents a RequestDrawDebug. */
    class RequestDrawDebug implements IRequestDrawDebug {

        /**
         * Constructs a new RequestDrawDebug.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestDrawDebug);

        /** RequestDrawDebug commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestDrawDebug holdIdxList. */
        public holdIdxList: number[];

        /** RequestDrawDebug pokerList. */
        public pokerList: string[];

        /** RequestDrawDebug multiple. */
        public multiple: number;

        /**
         * Creates a new RequestDrawDebug instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestDrawDebug instance
         */
        public static create(properties?: CVP.IRequestDrawDebug): CVP.RequestDrawDebug;

        /**
         * Encodes the specified RequestDrawDebug message. Does not implicitly {@link CVP.RequestDrawDebug.verify|verify} messages.
         * @param message RequestDrawDebug message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestDrawDebug, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestDrawDebug message, length delimited. Does not implicitly {@link CVP.RequestDrawDebug.verify|verify} messages.
         * @param message RequestDrawDebug message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestDrawDebug, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestDrawDebug message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestDrawDebug
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestDrawDebug;

        /**
         * Decodes a RequestDrawDebug message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestDrawDebug
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestDrawDebug;

        /**
         * Verifies a RequestDrawDebug message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestDrawDebug message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestDrawDebug
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestDrawDebug;

        /**
         * Creates a plain object from a RequestDrawDebug message. Also converts values to other types if specified.
         * @param message RequestDrawDebug
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestDrawDebug, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestDrawDebug to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestDrawDebugResult. */
    interface IRequestDrawDebugResult {

        /** RequestDrawDebugResult balance */
        balance?: (number|null);

        /** RequestDrawDebugResult pokerDataList */
        pokerDataList?: (CVP.IPokerData[]|null);

        /** RequestDrawDebugResult jackpotAcc */
        jackpotAcc?: (number|null);

        /** RequestDrawDebugResult isDoubleOrNothing */
        isDoubleOrNothing?: (boolean|null);

        /** RequestDrawDebugResult isRewardRoulette */
        isRewardRoulette?: (boolean|null);

        /** RequestDrawDebugResult upgrade */
        upgrade?: (number|null);

        /** RequestDrawDebugResult curExp */
        curExp?: (number|null);

        /** RequestDrawDebugResult nextExp */
        nextExp?: (number|Long|null);

        /** RequestDrawDebugResult levelUpReward */
        levelUpReward?: (CVP.ILevelUpReward|null);

        /** RequestDrawDebugResult bigWin */
        bigWin?: (CVP.IPokerData|null);

        /** RequestDrawDebugResult isFlash */
        isFlash?: (boolean|null);

        /** RequestDrawDebugResult jackPot */
        jackPot?: (CVP.IPokerData|null);

        /** RequestDrawDebugResult jackpot */
        jackpot?: (number|null);

        /** RequestDrawDebugResult pokerEvData */
        pokerEvData?: (CVP.IPokerEvData|null);
    }

    /** Represents a RequestDrawDebugResult. */
    class RequestDrawDebugResult implements IRequestDrawDebugResult {

        /**
         * Constructs a new RequestDrawDebugResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestDrawDebugResult);

        /** RequestDrawDebugResult balance. */
        public balance: number;

        /** RequestDrawDebugResult pokerDataList. */
        public pokerDataList: CVP.IPokerData[];

        /** RequestDrawDebugResult jackpotAcc. */
        public jackpotAcc: number;

        /** RequestDrawDebugResult isDoubleOrNothing. */
        public isDoubleOrNothing: boolean;

        /** RequestDrawDebugResult isRewardRoulette. */
        public isRewardRoulette: boolean;

        /** RequestDrawDebugResult upgrade. */
        public upgrade: number;

        /** RequestDrawDebugResult curExp. */
        public curExp: number;

        /** RequestDrawDebugResult nextExp. */
        public nextExp: (number|Long);

        /** RequestDrawDebugResult levelUpReward. */
        public levelUpReward?: (CVP.ILevelUpReward|null);

        /** RequestDrawDebugResult bigWin. */
        public bigWin?: (CVP.IPokerData|null);

        /** RequestDrawDebugResult isFlash. */
        public isFlash: boolean;

        /** RequestDrawDebugResult jackPot. */
        public jackPot?: (CVP.IPokerData|null);

        /** RequestDrawDebugResult jackpot. */
        public jackpot: number;

        /** RequestDrawDebugResult pokerEvData. */
        public pokerEvData?: (CVP.IPokerEvData|null);

        /**
         * Creates a new RequestDrawDebugResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestDrawDebugResult instance
         */
        public static create(properties?: CVP.IRequestDrawDebugResult): CVP.RequestDrawDebugResult;

        /**
         * Encodes the specified RequestDrawDebugResult message. Does not implicitly {@link CVP.RequestDrawDebugResult.verify|verify} messages.
         * @param message RequestDrawDebugResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestDrawDebugResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestDrawDebugResult message, length delimited. Does not implicitly {@link CVP.RequestDrawDebugResult.verify|verify} messages.
         * @param message RequestDrawDebugResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestDrawDebugResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestDrawDebugResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestDrawDebugResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestDrawDebugResult;

        /**
         * Decodes a RequestDrawDebugResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestDrawDebugResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestDrawDebugResult;

        /**
         * Verifies a RequestDrawDebugResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestDrawDebugResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestDrawDebugResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestDrawDebugResult;

        /**
         * Creates a plain object from a RequestDrawDebugResult message. Also converts values to other types if specified.
         * @param message RequestDrawDebugResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestDrawDebugResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestDrawDebugResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestDrawResult. */
    interface IRequestDrawResult {

        /** RequestDrawResult balance */
        balance?: (number|null);

        /** RequestDrawResult pokerDataList */
        pokerDataList?: (CVP.IPokerData[]|null);

        /** RequestDrawResult jackpotAcc */
        jackpotAcc?: (number|null);

        /** RequestDrawResult isDoubleOrNothing */
        isDoubleOrNothing?: (boolean|null);

        /** RequestDrawResult isRewardRoulette */
        isRewardRoulette?: (boolean|null);

        /** RequestDrawResult upgrade */
        upgrade?: (number|null);

        /** RequestDrawResult curExp */
        curExp?: (number|null);

        /** RequestDrawResult nextExp */
        nextExp?: (number|Long|null);

        /** RequestDrawResult levelUpReward */
        levelUpReward?: (CVP.ILevelUpReward|null);

        /** RequestDrawResult bigWin */
        bigWin?: (CVP.IPokerData|null);

        /** RequestDrawResult isFlash */
        isFlash?: (boolean|null);

        /** RequestDrawResult jackPot */
        jackPot?: (CVP.IPokerData|null);

        /** RequestDrawResult jackpot */
        jackpot?: (number|null);

        /** RequestDrawResult pokerEvData */
        pokerEvData?: (CVP.IPokerEvData|null);
    }

    /** Represents a RequestDrawResult. */
    class RequestDrawResult implements IRequestDrawResult {

        /**
         * Constructs a new RequestDrawResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestDrawResult);

        /** RequestDrawResult balance. */
        public balance: number;

        /** RequestDrawResult pokerDataList. */
        public pokerDataList: CVP.IPokerData[];

        /** RequestDrawResult jackpotAcc. */
        public jackpotAcc: number;

        /** RequestDrawResult isDoubleOrNothing. */
        public isDoubleOrNothing: boolean;

        /** RequestDrawResult isRewardRoulette. */
        public isRewardRoulette: boolean;

        /** RequestDrawResult upgrade. */
        public upgrade: number;

        /** RequestDrawResult curExp. */
        public curExp: number;

        /** RequestDrawResult nextExp. */
        public nextExp: (number|Long);

        /** RequestDrawResult levelUpReward. */
        public levelUpReward?: (CVP.ILevelUpReward|null);

        /** RequestDrawResult bigWin. */
        public bigWin?: (CVP.IPokerData|null);

        /** RequestDrawResult isFlash. */
        public isFlash: boolean;

        /** RequestDrawResult jackPot. */
        public jackPot?: (CVP.IPokerData|null);

        /** RequestDrawResult jackpot. */
        public jackpot: number;

        /** RequestDrawResult pokerEvData. */
        public pokerEvData?: (CVP.IPokerEvData|null);

        /**
         * Creates a new RequestDrawResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestDrawResult instance
         */
        public static create(properties?: CVP.IRequestDrawResult): CVP.RequestDrawResult;

        /**
         * Encodes the specified RequestDrawResult message. Does not implicitly {@link CVP.RequestDrawResult.verify|verify} messages.
         * @param message RequestDrawResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestDrawResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestDrawResult message, length delimited. Does not implicitly {@link CVP.RequestDrawResult.verify|verify} messages.
         * @param message RequestDrawResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestDrawResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestDrawResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestDrawResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestDrawResult;

        /**
         * Decodes a RequestDrawResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestDrawResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestDrawResult;

        /**
         * Verifies a RequestDrawResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestDrawResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestDrawResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestDrawResult;

        /**
         * Creates a plain object from a RequestDrawResult message. Also converts values to other types if specified.
         * @param message RequestDrawResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestDrawResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestDrawResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PokerData. */
    interface IPokerData {

        /** PokerData win */
        win?: (number|null);

        /** PokerData winTypeName */
        winTypeName?: (string|null);

        /** PokerData pokerList */
        pokerList?: (string[]|null);
    }

    /** Represents a PokerData. */
    class PokerData implements IPokerData {

        /**
         * Constructs a new PokerData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IPokerData);

        /** PokerData win. */
        public win: number;

        /** PokerData winTypeName. */
        public winTypeName: string;

        /** PokerData pokerList. */
        public pokerList: string[];

        /**
         * Creates a new PokerData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PokerData instance
         */
        public static create(properties?: CVP.IPokerData): CVP.PokerData;

        /**
         * Encodes the specified PokerData message. Does not implicitly {@link CVP.PokerData.verify|verify} messages.
         * @param message PokerData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IPokerData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PokerData message, length delimited. Does not implicitly {@link CVP.PokerData.verify|verify} messages.
         * @param message PokerData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IPokerData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PokerData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PokerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.PokerData;

        /**
         * Decodes a PokerData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PokerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.PokerData;

        /**
         * Verifies a PokerData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PokerData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PokerData
         */
        public static fromObject(object: { [k: string]: any }): CVP.PokerData;

        /**
         * Creates a plain object from a PokerData message. Also converts values to other types if specified.
         * @param message PokerData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.PokerData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PokerData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestVPDoubleSpin. */
    interface IRequestVPDoubleSpin {

        /** RequestVPDoubleSpin type */
        type?: (number|null);

        /** RequestVPDoubleSpin commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestVPDoubleSpin. */
    class RequestVPDoubleSpin implements IRequestVPDoubleSpin {

        /**
         * Constructs a new RequestVPDoubleSpin.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestVPDoubleSpin);

        /** RequestVPDoubleSpin type. */
        public type: number;

        /** RequestVPDoubleSpin commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestVPDoubleSpin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestVPDoubleSpin instance
         */
        public static create(properties?: CVP.IRequestVPDoubleSpin): CVP.RequestVPDoubleSpin;

        /**
         * Encodes the specified RequestVPDoubleSpin message. Does not implicitly {@link CVP.RequestVPDoubleSpin.verify|verify} messages.
         * @param message RequestVPDoubleSpin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestVPDoubleSpin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestVPDoubleSpin message, length delimited. Does not implicitly {@link CVP.RequestVPDoubleSpin.verify|verify} messages.
         * @param message RequestVPDoubleSpin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestVPDoubleSpin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestVPDoubleSpin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestVPDoubleSpin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestVPDoubleSpin;

        /**
         * Decodes a RequestVPDoubleSpin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestVPDoubleSpin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestVPDoubleSpin;

        /**
         * Verifies a RequestVPDoubleSpin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestVPDoubleSpin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestVPDoubleSpin
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestVPDoubleSpin;

        /**
         * Creates a plain object from a RequestVPDoubleSpin message. Also converts values to other types if specified.
         * @param message RequestVPDoubleSpin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestVPDoubleSpin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestVPDoubleSpin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestVPDoubleSpinResult. */
    interface IRequestVPDoubleSpinResult {

        /** RequestVPDoubleSpinResult balance */
        balance?: (number|null);

        /** RequestVPDoubleSpinResult reward */
        reward?: (number|null);

        /** RequestVPDoubleSpinResult poker */
        poker?: (string|null);

        /** RequestVPDoubleSpinResult doubleGameItem */
        doubleGameItem?: (CVP.IItemInfo|null);
    }

    /** Represents a RequestVPDoubleSpinResult. */
    class RequestVPDoubleSpinResult implements IRequestVPDoubleSpinResult {

        /**
         * Constructs a new RequestVPDoubleSpinResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestVPDoubleSpinResult);

        /** RequestVPDoubleSpinResult balance. */
        public balance: number;

        /** RequestVPDoubleSpinResult reward. */
        public reward: number;

        /** RequestVPDoubleSpinResult poker. */
        public poker: string;

        /** RequestVPDoubleSpinResult doubleGameItem. */
        public doubleGameItem?: (CVP.IItemInfo|null);

        /**
         * Creates a new RequestVPDoubleSpinResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestVPDoubleSpinResult instance
         */
        public static create(properties?: CVP.IRequestVPDoubleSpinResult): CVP.RequestVPDoubleSpinResult;

        /**
         * Encodes the specified RequestVPDoubleSpinResult message. Does not implicitly {@link CVP.RequestVPDoubleSpinResult.verify|verify} messages.
         * @param message RequestVPDoubleSpinResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestVPDoubleSpinResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestVPDoubleSpinResult message, length delimited. Does not implicitly {@link CVP.RequestVPDoubleSpinResult.verify|verify} messages.
         * @param message RequestVPDoubleSpinResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestVPDoubleSpinResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestVPDoubleSpinResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestVPDoubleSpinResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestVPDoubleSpinResult;

        /**
         * Decodes a RequestVPDoubleSpinResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestVPDoubleSpinResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestVPDoubleSpinResult;

        /**
         * Verifies a RequestVPDoubleSpinResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestVPDoubleSpinResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestVPDoubleSpinResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestVPDoubleSpinResult;

        /**
         * Creates a plain object from a RequestVPDoubleSpinResult message. Also converts values to other types if specified.
         * @param message RequestVPDoubleSpinResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestVPDoubleSpinResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestVPDoubleSpinResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestSendBuyDoubleGamePayment. */
    interface IRequestSendBuyDoubleGamePayment {

        /** RequestSendBuyDoubleGamePayment isBuy */
        isBuy?: (boolean|null);

        /** RequestSendBuyDoubleGamePayment commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestSendBuyDoubleGamePayment. */
    class RequestSendBuyDoubleGamePayment implements IRequestSendBuyDoubleGamePayment {

        /**
         * Constructs a new RequestSendBuyDoubleGamePayment.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestSendBuyDoubleGamePayment);

        /** RequestSendBuyDoubleGamePayment isBuy. */
        public isBuy: boolean;

        /** RequestSendBuyDoubleGamePayment commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestSendBuyDoubleGamePayment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestSendBuyDoubleGamePayment instance
         */
        public static create(properties?: CVP.IRequestSendBuyDoubleGamePayment): CVP.RequestSendBuyDoubleGamePayment;

        /**
         * Encodes the specified RequestSendBuyDoubleGamePayment message. Does not implicitly {@link CVP.RequestSendBuyDoubleGamePayment.verify|verify} messages.
         * @param message RequestSendBuyDoubleGamePayment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestSendBuyDoubleGamePayment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestSendBuyDoubleGamePayment message, length delimited. Does not implicitly {@link CVP.RequestSendBuyDoubleGamePayment.verify|verify} messages.
         * @param message RequestSendBuyDoubleGamePayment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestSendBuyDoubleGamePayment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestSendBuyDoubleGamePayment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestSendBuyDoubleGamePayment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestSendBuyDoubleGamePayment;

        /**
         * Decodes a RequestSendBuyDoubleGamePayment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestSendBuyDoubleGamePayment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestSendBuyDoubleGamePayment;

        /**
         * Verifies a RequestSendBuyDoubleGamePayment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestSendBuyDoubleGamePayment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestSendBuyDoubleGamePayment
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestSendBuyDoubleGamePayment;

        /**
         * Creates a plain object from a RequestSendBuyDoubleGamePayment message. Also converts values to other types if specified.
         * @param message RequestSendBuyDoubleGamePayment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestSendBuyDoubleGamePayment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestSendBuyDoubleGamePayment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestSendBuyDoubleGamePaymentResult. */
    interface IRequestSendBuyDoubleGamePaymentResult {

        /** RequestSendBuyDoubleGamePaymentResult lastCoin */
        lastCoin?: (number|null);
    }

    /** Represents a RequestSendBuyDoubleGamePaymentResult. */
    class RequestSendBuyDoubleGamePaymentResult implements IRequestSendBuyDoubleGamePaymentResult {

        /**
         * Constructs a new RequestSendBuyDoubleGamePaymentResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestSendBuyDoubleGamePaymentResult);

        /** RequestSendBuyDoubleGamePaymentResult lastCoin. */
        public lastCoin: number;

        /**
         * Creates a new RequestSendBuyDoubleGamePaymentResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestSendBuyDoubleGamePaymentResult instance
         */
        public static create(properties?: CVP.IRequestSendBuyDoubleGamePaymentResult): CVP.RequestSendBuyDoubleGamePaymentResult;

        /**
         * Encodes the specified RequestSendBuyDoubleGamePaymentResult message. Does not implicitly {@link CVP.RequestSendBuyDoubleGamePaymentResult.verify|verify} messages.
         * @param message RequestSendBuyDoubleGamePaymentResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestSendBuyDoubleGamePaymentResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestSendBuyDoubleGamePaymentResult message, length delimited. Does not implicitly {@link CVP.RequestSendBuyDoubleGamePaymentResult.verify|verify} messages.
         * @param message RequestSendBuyDoubleGamePaymentResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestSendBuyDoubleGamePaymentResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestSendBuyDoubleGamePaymentResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestSendBuyDoubleGamePaymentResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestSendBuyDoubleGamePaymentResult;

        /**
         * Decodes a RequestSendBuyDoubleGamePaymentResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestSendBuyDoubleGamePaymentResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestSendBuyDoubleGamePaymentResult;

        /**
         * Verifies a RequestSendBuyDoubleGamePaymentResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestSendBuyDoubleGamePaymentResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestSendBuyDoubleGamePaymentResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestSendBuyDoubleGamePaymentResult;

        /**
         * Creates a plain object from a RequestSendBuyDoubleGamePaymentResult message. Also converts values to other types if specified.
         * @param message RequestSendBuyDoubleGamePaymentResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestSendBuyDoubleGamePaymentResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestSendBuyDoubleGamePaymentResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LevelUpReward. */
    interface ILevelUpReward {

        /** LevelUpReward coins */
        coins?: (number|null);

        /** LevelUpReward vipExp */
        vipExp?: (number|null);

        /** LevelUpReward creditAmount */
        creditAmount?: (number[]|null);

        /** LevelUpReward pushAmount */
        pushAmount?: (number|null);

        /** LevelUpReward creditAmountMax */
        creditAmountMax?: (number|null);
    }

    /** Represents a LevelUpReward. */
    class LevelUpReward implements ILevelUpReward {

        /**
         * Constructs a new LevelUpReward.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.ILevelUpReward);

        /** LevelUpReward coins. */
        public coins: number;

        /** LevelUpReward vipExp. */
        public vipExp: number;

        /** LevelUpReward creditAmount. */
        public creditAmount: number[];

        /** LevelUpReward pushAmount. */
        public pushAmount: number;

        /** LevelUpReward creditAmountMax. */
        public creditAmountMax: number;

        /**
         * Creates a new LevelUpReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LevelUpReward instance
         */
        public static create(properties?: CVP.ILevelUpReward): CVP.LevelUpReward;

        /**
         * Encodes the specified LevelUpReward message. Does not implicitly {@link CVP.LevelUpReward.verify|verify} messages.
         * @param message LevelUpReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.ILevelUpReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LevelUpReward message, length delimited. Does not implicitly {@link CVP.LevelUpReward.verify|verify} messages.
         * @param message LevelUpReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.ILevelUpReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LevelUpReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LevelUpReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.LevelUpReward;

        /**
         * Decodes a LevelUpReward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LevelUpReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.LevelUpReward;

        /**
         * Verifies a LevelUpReward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LevelUpReward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LevelUpReward
         */
        public static fromObject(object: { [k: string]: any }): CVP.LevelUpReward;

        /**
         * Creates a plain object from a LevelUpReward message. Also converts values to other types if specified.
         * @param message LevelUpReward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.LevelUpReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LevelUpReward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PokerEvData. */
    interface IPokerEvData {

        /** PokerEvData pokerList */
        pokerList?: (string[]|null);

        /** PokerEvData pokerEvList */
        pokerEvList?: (CVP.IPokerEv[]|null);
    }

    /** Represents a PokerEvData. */
    class PokerEvData implements IPokerEvData {

        /**
         * Constructs a new PokerEvData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IPokerEvData);

        /** PokerEvData pokerList. */
        public pokerList: string[];

        /** PokerEvData pokerEvList. */
        public pokerEvList: CVP.IPokerEv[];

        /**
         * Creates a new PokerEvData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PokerEvData instance
         */
        public static create(properties?: CVP.IPokerEvData): CVP.PokerEvData;

        /**
         * Encodes the specified PokerEvData message. Does not implicitly {@link CVP.PokerEvData.verify|verify} messages.
         * @param message PokerEvData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IPokerEvData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PokerEvData message, length delimited. Does not implicitly {@link CVP.PokerEvData.verify|verify} messages.
         * @param message PokerEvData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IPokerEvData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PokerEvData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PokerEvData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.PokerEvData;

        /**
         * Decodes a PokerEvData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PokerEvData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.PokerEvData;

        /**
         * Verifies a PokerEvData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PokerEvData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PokerEvData
         */
        public static fromObject(object: { [k: string]: any }): CVP.PokerEvData;

        /**
         * Creates a plain object from a PokerEvData message. Also converts values to other types if specified.
         * @param message PokerEvData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.PokerEvData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PokerEvData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PokerEv. */
    interface IPokerEv {

        /** PokerEv holdPokerList */
        holdPokerList?: (string[]|null);

        /** PokerEv pokerTypeDataList */
        pokerTypeDataList?: (CVP.IPokerTypeData[]|null);

        /** PokerEv allNum */
        allNum?: (number|null);
    }

    /** Represents a PokerEv. */
    class PokerEv implements IPokerEv {

        /**
         * Constructs a new PokerEv.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IPokerEv);

        /** PokerEv holdPokerList. */
        public holdPokerList: string[];

        /** PokerEv pokerTypeDataList. */
        public pokerTypeDataList: CVP.IPokerTypeData[];

        /** PokerEv allNum. */
        public allNum: number;

        /**
         * Creates a new PokerEv instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PokerEv instance
         */
        public static create(properties?: CVP.IPokerEv): CVP.PokerEv;

        /**
         * Encodes the specified PokerEv message. Does not implicitly {@link CVP.PokerEv.verify|verify} messages.
         * @param message PokerEv message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IPokerEv, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PokerEv message, length delimited. Does not implicitly {@link CVP.PokerEv.verify|verify} messages.
         * @param message PokerEv message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IPokerEv, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PokerEv message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PokerEv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.PokerEv;

        /**
         * Decodes a PokerEv message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PokerEv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.PokerEv;

        /**
         * Verifies a PokerEv message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PokerEv message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PokerEv
         */
        public static fromObject(object: { [k: string]: any }): CVP.PokerEv;

        /**
         * Creates a plain object from a PokerEv message. Also converts values to other types if specified.
         * @param message PokerEv
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.PokerEv, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PokerEv to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PokerTypeData. */
    interface IPokerTypeData {

        /** PokerTypeData winTypeNameIndex */
        winTypeNameIndex?: (string|null);

        /** PokerTypeData num */
        num?: (number|null);
    }

    /** Represents a PokerTypeData. */
    class PokerTypeData implements IPokerTypeData {

        /**
         * Constructs a new PokerTypeData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IPokerTypeData);

        /** PokerTypeData winTypeNameIndex. */
        public winTypeNameIndex: string;

        /** PokerTypeData num. */
        public num: number;

        /**
         * Creates a new PokerTypeData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PokerTypeData instance
         */
        public static create(properties?: CVP.IPokerTypeData): CVP.PokerTypeData;

        /**
         * Encodes the specified PokerTypeData message. Does not implicitly {@link CVP.PokerTypeData.verify|verify} messages.
         * @param message PokerTypeData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IPokerTypeData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PokerTypeData message, length delimited. Does not implicitly {@link CVP.PokerTypeData.verify|verify} messages.
         * @param message PokerTypeData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IPokerTypeData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PokerTypeData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PokerTypeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.PokerTypeData;

        /**
         * Decodes a PokerTypeData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PokerTypeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.PokerTypeData;

        /**
         * Verifies a PokerTypeData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PokerTypeData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PokerTypeData
         */
        public static fromObject(object: { [k: string]: any }): CVP.PokerTypeData;

        /**
         * Creates a plain object from a PokerTypeData message. Also converts values to other types if specified.
         * @param message PokerTypeData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.PokerTypeData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PokerTypeData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestPokerEvData. */
    interface IRequestPokerEvData {

        /** RequestPokerEvData commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestPokerEvData. */
    class RequestPokerEvData implements IRequestPokerEvData {

        /**
         * Constructs a new RequestPokerEvData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestPokerEvData);

        /** RequestPokerEvData commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestPokerEvData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestPokerEvData instance
         */
        public static create(properties?: CVP.IRequestPokerEvData): CVP.RequestPokerEvData;

        /**
         * Encodes the specified RequestPokerEvData message. Does not implicitly {@link CVP.RequestPokerEvData.verify|verify} messages.
         * @param message RequestPokerEvData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestPokerEvData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestPokerEvData message, length delimited. Does not implicitly {@link CVP.RequestPokerEvData.verify|verify} messages.
         * @param message RequestPokerEvData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestPokerEvData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestPokerEvData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestPokerEvData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestPokerEvData;

        /**
         * Decodes a RequestPokerEvData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestPokerEvData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestPokerEvData;

        /**
         * Verifies a RequestPokerEvData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestPokerEvData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestPokerEvData
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestPokerEvData;

        /**
         * Creates a plain object from a RequestPokerEvData message. Also converts values to other types if specified.
         * @param message RequestPokerEvData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestPokerEvData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestPokerEvData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestPokerEvDataResult. */
    interface IRequestPokerEvDataResult {

        /** RequestPokerEvDataResult pokerEvData */
        pokerEvData?: (CVP.IPokerEvData|null);
    }

    /** Represents a RequestPokerEvDataResult. */
    class RequestPokerEvDataResult implements IRequestPokerEvDataResult {

        /**
         * Constructs a new RequestPokerEvDataResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestPokerEvDataResult);

        /** RequestPokerEvDataResult pokerEvData. */
        public pokerEvData?: (CVP.IPokerEvData|null);

        /**
         * Creates a new RequestPokerEvDataResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestPokerEvDataResult instance
         */
        public static create(properties?: CVP.IRequestPokerEvDataResult): CVP.RequestPokerEvDataResult;

        /**
         * Encodes the specified RequestPokerEvDataResult message. Does not implicitly {@link CVP.RequestPokerEvDataResult.verify|verify} messages.
         * @param message RequestPokerEvDataResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestPokerEvDataResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestPokerEvDataResult message, length delimited. Does not implicitly {@link CVP.RequestPokerEvDataResult.verify|verify} messages.
         * @param message RequestPokerEvDataResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestPokerEvDataResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestPokerEvDataResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestPokerEvDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestPokerEvDataResult;

        /**
         * Decodes a RequestPokerEvDataResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestPokerEvDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestPokerEvDataResult;

        /**
         * Verifies a RequestPokerEvDataResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestPokerEvDataResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestPokerEvDataResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestPokerEvDataResult;

        /**
         * Creates a plain object from a RequestPokerEvDataResult message. Also converts values to other types if specified.
         * @param message RequestPokerEvDataResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestPokerEvDataResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestPokerEvDataResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestPokerEvDataDebug. */
    interface IRequestPokerEvDataDebug {

        /** RequestPokerEvDataDebug commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestPokerEvDataDebug pokerList */
        pokerList?: (string[]|null);
    }

    /** Represents a RequestPokerEvDataDebug. */
    class RequestPokerEvDataDebug implements IRequestPokerEvDataDebug {

        /**
         * Constructs a new RequestPokerEvDataDebug.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestPokerEvDataDebug);

        /** RequestPokerEvDataDebug commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestPokerEvDataDebug pokerList. */
        public pokerList: string[];

        /**
         * Creates a new RequestPokerEvDataDebug instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestPokerEvDataDebug instance
         */
        public static create(properties?: CVP.IRequestPokerEvDataDebug): CVP.RequestPokerEvDataDebug;

        /**
         * Encodes the specified RequestPokerEvDataDebug message. Does not implicitly {@link CVP.RequestPokerEvDataDebug.verify|verify} messages.
         * @param message RequestPokerEvDataDebug message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestPokerEvDataDebug, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestPokerEvDataDebug message, length delimited. Does not implicitly {@link CVP.RequestPokerEvDataDebug.verify|verify} messages.
         * @param message RequestPokerEvDataDebug message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestPokerEvDataDebug, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestPokerEvDataDebug message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestPokerEvDataDebug
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestPokerEvDataDebug;

        /**
         * Decodes a RequestPokerEvDataDebug message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestPokerEvDataDebug
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestPokerEvDataDebug;

        /**
         * Verifies a RequestPokerEvDataDebug message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestPokerEvDataDebug message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestPokerEvDataDebug
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestPokerEvDataDebug;

        /**
         * Creates a plain object from a RequestPokerEvDataDebug message. Also converts values to other types if specified.
         * @param message RequestPokerEvDataDebug
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestPokerEvDataDebug, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestPokerEvDataDebug to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestPokerEvDataDebugResult. */
    interface IRequestPokerEvDataDebugResult {

        /** RequestPokerEvDataDebugResult pokerEvData */
        pokerEvData?: (CVP.IPokerEvData|null);
    }

    /** Represents a RequestPokerEvDataDebugResult. */
    class RequestPokerEvDataDebugResult implements IRequestPokerEvDataDebugResult {

        /**
         * Constructs a new RequestPokerEvDataDebugResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestPokerEvDataDebugResult);

        /** RequestPokerEvDataDebugResult pokerEvData. */
        public pokerEvData?: (CVP.IPokerEvData|null);

        /**
         * Creates a new RequestPokerEvDataDebugResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestPokerEvDataDebugResult instance
         */
        public static create(properties?: CVP.IRequestPokerEvDataDebugResult): CVP.RequestPokerEvDataDebugResult;

        /**
         * Encodes the specified RequestPokerEvDataDebugResult message. Does not implicitly {@link CVP.RequestPokerEvDataDebugResult.verify|verify} messages.
         * @param message RequestPokerEvDataDebugResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestPokerEvDataDebugResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestPokerEvDataDebugResult message, length delimited. Does not implicitly {@link CVP.RequestPokerEvDataDebugResult.verify|verify} messages.
         * @param message RequestPokerEvDataDebugResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestPokerEvDataDebugResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestPokerEvDataDebugResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestPokerEvDataDebugResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestPokerEvDataDebugResult;

        /**
         * Decodes a RequestPokerEvDataDebugResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestPokerEvDataDebugResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestPokerEvDataDebugResult;

        /**
         * Verifies a RequestPokerEvDataDebugResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestPokerEvDataDebugResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestPokerEvDataDebugResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestPokerEvDataDebugResult;

        /**
         * Creates a plain object from a RequestPokerEvDataDebugResult message. Also converts values to other types if specified.
         * @param message RequestPokerEvDataDebugResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestPokerEvDataDebugResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestPokerEvDataDebugResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a clientErrorServer. */
    interface IclientErrorServer {

        /** clientErrorServer commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** clientErrorServer error */
        error?: (string|null);

        /** clientErrorServer time */
        time?: (string|null);

        /** clientErrorServer userId */
        userId?: (number|Long|null);

        /** clientErrorServer platform */
        platform?: (string|null);

        /** clientErrorServer GameBaseVersion */
        GameBaseVersion?: (string|null);

        /** clientErrorServer GameResVersion */
        GameResVersion?: (string|null);

        /** clientErrorServer ProjectName */
        ProjectName?: (string|null);

        /** clientErrorServer package_name */
        package_name?: (string|null);

        /** clientErrorServer errorData */
        errorData?: (string|null);
    }

    /** Represents a clientErrorServer. */
    class clientErrorServer implements IclientErrorServer {

        /**
         * Constructs a new clientErrorServer.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IclientErrorServer);

        /** clientErrorServer commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** clientErrorServer error. */
        public error: string;

        /** clientErrorServer time. */
        public time: string;

        /** clientErrorServer userId. */
        public userId: (number|Long);

        /** clientErrorServer platform. */
        public platform: string;

        /** clientErrorServer GameBaseVersion. */
        public GameBaseVersion: string;

        /** clientErrorServer GameResVersion. */
        public GameResVersion: string;

        /** clientErrorServer ProjectName. */
        public ProjectName: string;

        /** clientErrorServer package_name. */
        public package_name: string;

        /** clientErrorServer errorData. */
        public errorData: string;

        /**
         * Creates a new clientErrorServer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns clientErrorServer instance
         */
        public static create(properties?: CVP.IclientErrorServer): CVP.clientErrorServer;

        /**
         * Encodes the specified clientErrorServer message. Does not implicitly {@link CVP.clientErrorServer.verify|verify} messages.
         * @param message clientErrorServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IclientErrorServer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified clientErrorServer message, length delimited. Does not implicitly {@link CVP.clientErrorServer.verify|verify} messages.
         * @param message clientErrorServer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IclientErrorServer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a clientErrorServer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns clientErrorServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.clientErrorServer;

        /**
         * Decodes a clientErrorServer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns clientErrorServer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.clientErrorServer;

        /**
         * Verifies a clientErrorServer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a clientErrorServer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns clientErrorServer
         */
        public static fromObject(object: { [k: string]: any }): CVP.clientErrorServer;

        /**
         * Creates a plain object from a clientErrorServer message. Also converts values to other types if specified.
         * @param message clientErrorServer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.clientErrorServer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this clientErrorServer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** MailType enum. */
    enum MailType {
        GIFT = 1,
        MSG = 2
    }

    /** Properties of a RequestInbox. */
    interface IRequestInbox {

        /** RequestInbox commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestInbox isNumber */
        isNumber?: (boolean|null);
    }

    /** Represents a RequestInbox. */
    class RequestInbox implements IRequestInbox {

        /**
         * Constructs a new RequestInbox.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestInbox);

        /** RequestInbox commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestInbox isNumber. */
        public isNumber: boolean;

        /**
         * Creates a new RequestInbox instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestInbox instance
         */
        public static create(properties?: CVP.IRequestInbox): CVP.RequestInbox;

        /**
         * Encodes the specified RequestInbox message. Does not implicitly {@link CVP.RequestInbox.verify|verify} messages.
         * @param message RequestInbox message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestInbox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestInbox message, length delimited. Does not implicitly {@link CVP.RequestInbox.verify|verify} messages.
         * @param message RequestInbox message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestInbox, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestInbox message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestInbox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestInbox;

        /**
         * Decodes a RequestInbox message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestInbox
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestInbox;

        /**
         * Verifies a RequestInbox message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestInbox message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestInbox
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestInbox;

        /**
         * Creates a plain object from a RequestInbox message. Also converts values to other types if specified.
         * @param message RequestInbox
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestInbox, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestInbox to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestInboxResult. */
    interface IRequestInboxResult {

        /** RequestInboxResult mailList */
        mailList?: (CVP.IMail[]|null);

        /** RequestInboxResult mailNumber */
        mailNumber?: (number|null);
    }

    /** Represents a RequestInboxResult. */
    class RequestInboxResult implements IRequestInboxResult {

        /**
         * Constructs a new RequestInboxResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestInboxResult);

        /** RequestInboxResult mailList. */
        public mailList: CVP.IMail[];

        /** RequestInboxResult mailNumber. */
        public mailNumber: number;

        /**
         * Creates a new RequestInboxResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestInboxResult instance
         */
        public static create(properties?: CVP.IRequestInboxResult): CVP.RequestInboxResult;

        /**
         * Encodes the specified RequestInboxResult message. Does not implicitly {@link CVP.RequestInboxResult.verify|verify} messages.
         * @param message RequestInboxResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestInboxResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestInboxResult message, length delimited. Does not implicitly {@link CVP.RequestInboxResult.verify|verify} messages.
         * @param message RequestInboxResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestInboxResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestInboxResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestInboxResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestInboxResult;

        /**
         * Decodes a RequestInboxResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestInboxResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestInboxResult;

        /**
         * Verifies a RequestInboxResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestInboxResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestInboxResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestInboxResult;

        /**
         * Creates a plain object from a RequestInboxResult message. Also converts values to other types if specified.
         * @param message RequestInboxResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestInboxResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestInboxResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Mail. */
    interface IMail {

        /** Mail name */
        name?: (string|null);

        /** Mail mailType */
        mailType?: (CVP.MailType|null);

        /** Mail time */
        time?: (string|null);

        /** Mail isRead */
        isRead?: (boolean|null);

        /** Mail mailID */
        mailID?: (number|null);

        /** Mail mailText */
        mailText?: (string|null);

        /** Mail attachment */
        attachment?: (CVP.IAttachment[]|null);

        /** Mail isCollect */
        isCollect?: (boolean|null);
    }

    /** Represents a Mail. */
    class Mail implements IMail {

        /**
         * Constructs a new Mail.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IMail);

        /** Mail name. */
        public name: string;

        /** Mail mailType. */
        public mailType: CVP.MailType;

        /** Mail time. */
        public time: string;

        /** Mail isRead. */
        public isRead: boolean;

        /** Mail mailID. */
        public mailID: number;

        /** Mail mailText. */
        public mailText: string;

        /** Mail attachment. */
        public attachment: CVP.IAttachment[];

        /** Mail isCollect. */
        public isCollect: boolean;

        /**
         * Creates a new Mail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Mail instance
         */
        public static create(properties?: CVP.IMail): CVP.Mail;

        /**
         * Encodes the specified Mail message. Does not implicitly {@link CVP.Mail.verify|verify} messages.
         * @param message Mail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Mail message, length delimited. Does not implicitly {@link CVP.Mail.verify|verify} messages.
         * @param message Mail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Mail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Mail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.Mail;

        /**
         * Decodes a Mail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Mail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.Mail;

        /**
         * Verifies a Mail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Mail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Mail
         */
        public static fromObject(object: { [k: string]: any }): CVP.Mail;

        /**
         * Creates a plain object from a Mail message. Also converts values to other types if specified.
         * @param message Mail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.Mail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Mail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Attachment. */
    interface IAttachment {

        /** Attachment giftInfo */
        giftInfo?: (CVP.IGiftInfo|null);

        /** Attachment baseCoins */
        baseCoins?: (number|null);

        /** Attachment HonorBonus */
        HonorBonus?: (number|null);

        /** Attachment vipBonus */
        vipBonus?: (number|null);
    }

    /** Represents an Attachment. */
    class Attachment implements IAttachment {

        /**
         * Constructs a new Attachment.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IAttachment);

        /** Attachment giftInfo. */
        public giftInfo?: (CVP.IGiftInfo|null);

        /** Attachment baseCoins. */
        public baseCoins: number;

        /** Attachment HonorBonus. */
        public HonorBonus: number;

        /** Attachment vipBonus. */
        public vipBonus: number;

        /**
         * Creates a new Attachment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Attachment instance
         */
        public static create(properties?: CVP.IAttachment): CVP.Attachment;

        /**
         * Encodes the specified Attachment message. Does not implicitly {@link CVP.Attachment.verify|verify} messages.
         * @param message Attachment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Attachment message, length delimited. Does not implicitly {@link CVP.Attachment.verify|verify} messages.
         * @param message Attachment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IAttachment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Attachment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Attachment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.Attachment;

        /**
         * Decodes an Attachment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Attachment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.Attachment;

        /**
         * Verifies an Attachment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Attachment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Attachment
         */
        public static fromObject(object: { [k: string]: any }): CVP.Attachment;

        /**
         * Creates a plain object from an Attachment message. Also converts values to other types if specified.
         * @param message Attachment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.Attachment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Attachment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCollectGift. */
    interface IRequestCollectGift {

        /** RequestCollectGift mailID */
        mailID?: (number[]|null);

        /** RequestCollectGift commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestCollectGift. */
    class RequestCollectGift implements IRequestCollectGift {

        /**
         * Constructs a new RequestCollectGift.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestCollectGift);

        /** RequestCollectGift mailID. */
        public mailID: number[];

        /** RequestCollectGift commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestCollectGift instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCollectGift instance
         */
        public static create(properties?: CVP.IRequestCollectGift): CVP.RequestCollectGift;

        /**
         * Encodes the specified RequestCollectGift message. Does not implicitly {@link CVP.RequestCollectGift.verify|verify} messages.
         * @param message RequestCollectGift message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestCollectGift, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCollectGift message, length delimited. Does not implicitly {@link CVP.RequestCollectGift.verify|verify} messages.
         * @param message RequestCollectGift message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestCollectGift, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCollectGift message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCollectGift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestCollectGift;

        /**
         * Decodes a RequestCollectGift message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCollectGift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestCollectGift;

        /**
         * Verifies a RequestCollectGift message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCollectGift message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCollectGift
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestCollectGift;

        /**
         * Creates a plain object from a RequestCollectGift message. Also converts values to other types if specified.
         * @param message RequestCollectGift
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestCollectGift, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCollectGift to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCollectGiftResult. */
    interface IRequestCollectGiftResult {

        /** RequestCollectGiftResult giftInfo */
        giftInfo?: (CVP.IGiftInfo[]|null);
    }

    /** Represents a RequestCollectGiftResult. */
    class RequestCollectGiftResult implements IRequestCollectGiftResult {

        /**
         * Constructs a new RequestCollectGiftResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestCollectGiftResult);

        /** RequestCollectGiftResult giftInfo. */
        public giftInfo: CVP.IGiftInfo[];

        /**
         * Creates a new RequestCollectGiftResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCollectGiftResult instance
         */
        public static create(properties?: CVP.IRequestCollectGiftResult): CVP.RequestCollectGiftResult;

        /**
         * Encodes the specified RequestCollectGiftResult message. Does not implicitly {@link CVP.RequestCollectGiftResult.verify|verify} messages.
         * @param message RequestCollectGiftResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestCollectGiftResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCollectGiftResult message, length delimited. Does not implicitly {@link CVP.RequestCollectGiftResult.verify|verify} messages.
         * @param message RequestCollectGiftResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestCollectGiftResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCollectGiftResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCollectGiftResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestCollectGiftResult;

        /**
         * Decodes a RequestCollectGiftResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCollectGiftResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestCollectGiftResult;

        /**
         * Verifies a RequestCollectGiftResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCollectGiftResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCollectGiftResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestCollectGiftResult;

        /**
         * Creates a plain object from a RequestCollectGiftResult message. Also converts values to other types if specified.
         * @param message RequestCollectGiftResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestCollectGiftResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCollectGiftResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GiftInfo. */
    interface IGiftInfo {

        /** GiftInfo valueType */
        valueType?: (CVP.ValueType|null);

        /** GiftInfo number */
        number?: (number|null);
    }

    /** Represents a GiftInfo. */
    class GiftInfo implements IGiftInfo {

        /**
         * Constructs a new GiftInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IGiftInfo);

        /** GiftInfo valueType. */
        public valueType: CVP.ValueType;

        /** GiftInfo number. */
        public number: number;

        /**
         * Creates a new GiftInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GiftInfo instance
         */
        public static create(properties?: CVP.IGiftInfo): CVP.GiftInfo;

        /**
         * Encodes the specified GiftInfo message. Does not implicitly {@link CVP.GiftInfo.verify|verify} messages.
         * @param message GiftInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IGiftInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GiftInfo message, length delimited. Does not implicitly {@link CVP.GiftInfo.verify|verify} messages.
         * @param message GiftInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IGiftInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GiftInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GiftInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.GiftInfo;

        /**
         * Decodes a GiftInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GiftInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.GiftInfo;

        /**
         * Verifies a GiftInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GiftInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GiftInfo
         */
        public static fromObject(object: { [k: string]: any }): CVP.GiftInfo;

        /**
         * Creates a plain object from a GiftInfo message. Also converts values to other types if specified.
         * @param message GiftInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.GiftInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GiftInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestDelleteAllMail. */
    interface IRequestDelleteAllMail {

        /** RequestDelleteAllMail commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestDelleteAllMail. */
    class RequestDelleteAllMail implements IRequestDelleteAllMail {

        /**
         * Constructs a new RequestDelleteAllMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestDelleteAllMail);

        /** RequestDelleteAllMail commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestDelleteAllMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestDelleteAllMail instance
         */
        public static create(properties?: CVP.IRequestDelleteAllMail): CVP.RequestDelleteAllMail;

        /**
         * Encodes the specified RequestDelleteAllMail message. Does not implicitly {@link CVP.RequestDelleteAllMail.verify|verify} messages.
         * @param message RequestDelleteAllMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestDelleteAllMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestDelleteAllMail message, length delimited. Does not implicitly {@link CVP.RequestDelleteAllMail.verify|verify} messages.
         * @param message RequestDelleteAllMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestDelleteAllMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestDelleteAllMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestDelleteAllMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestDelleteAllMail;

        /**
         * Decodes a RequestDelleteAllMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestDelleteAllMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestDelleteAllMail;

        /**
         * Verifies a RequestDelleteAllMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestDelleteAllMail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestDelleteAllMail
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestDelleteAllMail;

        /**
         * Creates a plain object from a RequestDelleteAllMail message. Also converts values to other types if specified.
         * @param message RequestDelleteAllMail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestDelleteAllMail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestDelleteAllMail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestDelleteAllMailResult. */
    interface IRequestDelleteAllMailResult {
    }

    /** Represents a RequestDelleteAllMailResult. */
    class RequestDelleteAllMailResult implements IRequestDelleteAllMailResult {

        /**
         * Constructs a new RequestDelleteAllMailResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestDelleteAllMailResult);

        /**
         * Creates a new RequestDelleteAllMailResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestDelleteAllMailResult instance
         */
        public static create(properties?: CVP.IRequestDelleteAllMailResult): CVP.RequestDelleteAllMailResult;

        /**
         * Encodes the specified RequestDelleteAllMailResult message. Does not implicitly {@link CVP.RequestDelleteAllMailResult.verify|verify} messages.
         * @param message RequestDelleteAllMailResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestDelleteAllMailResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestDelleteAllMailResult message, length delimited. Does not implicitly {@link CVP.RequestDelleteAllMailResult.verify|verify} messages.
         * @param message RequestDelleteAllMailResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestDelleteAllMailResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestDelleteAllMailResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestDelleteAllMailResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestDelleteAllMailResult;

        /**
         * Decodes a RequestDelleteAllMailResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestDelleteAllMailResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestDelleteAllMailResult;

        /**
         * Verifies a RequestDelleteAllMailResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestDelleteAllMailResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestDelleteAllMailResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestDelleteAllMailResult;

        /**
         * Creates a plain object from a RequestDelleteAllMailResult message. Also converts values to other types if specified.
         * @param message RequestDelleteAllMailResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestDelleteAllMailResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestDelleteAllMailResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendReadMail. */
    interface ISendReadMail {

        /** SendReadMail mailID */
        mailID?: (number|null);
    }

    /** Represents a SendReadMail. */
    class SendReadMail implements ISendReadMail {

        /**
         * Constructs a new SendReadMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.ISendReadMail);

        /** SendReadMail mailID. */
        public mailID: number;

        /**
         * Creates a new SendReadMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendReadMail instance
         */
        public static create(properties?: CVP.ISendReadMail): CVP.SendReadMail;

        /**
         * Encodes the specified SendReadMail message. Does not implicitly {@link CVP.SendReadMail.verify|verify} messages.
         * @param message SendReadMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.ISendReadMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendReadMail message, length delimited. Does not implicitly {@link CVP.SendReadMail.verify|verify} messages.
         * @param message SendReadMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.ISendReadMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendReadMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.SendReadMail;

        /**
         * Decodes a SendReadMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.SendReadMail;

        /**
         * Verifies a SendReadMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendReadMail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendReadMail
         */
        public static fromObject(object: { [k: string]: any }): CVP.SendReadMail;

        /**
         * Creates a plain object from a SendReadMail message. Also converts values to other types if specified.
         * @param message SendReadMail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.SendReadMail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendReadMail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateMail. */
    interface IUpdateMail {

        /** UpdateMail mailNumber */
        mailNumber?: (number|null);
    }

    /** Represents an UpdateMail. */
    class UpdateMail implements IUpdateMail {

        /**
         * Constructs a new UpdateMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IUpdateMail);

        /** UpdateMail mailNumber. */
        public mailNumber: number;

        /**
         * Creates a new UpdateMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateMail instance
         */
        public static create(properties?: CVP.IUpdateMail): CVP.UpdateMail;

        /**
         * Encodes the specified UpdateMail message. Does not implicitly {@link CVP.UpdateMail.verify|verify} messages.
         * @param message UpdateMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IUpdateMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateMail message, length delimited. Does not implicitly {@link CVP.UpdateMail.verify|verify} messages.
         * @param message UpdateMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IUpdateMail, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.UpdateMail;

        /**
         * Decodes an UpdateMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.UpdateMail;

        /**
         * Verifies an UpdateMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateMail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateMail
         */
        public static fromObject(object: { [k: string]: any }): CVP.UpdateMail;

        /**
         * Creates a plain object from an UpdateMail message. Also converts values to other types if specified.
         * @param message UpdateMail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.UpdateMail, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateMail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an addMailResult. */
    interface IaddMailResult {

        /** addMailResult inboxNumber */
        inboxNumber?: (number|null);

        /** addMailResult userId */
        userId?: (number|null);
    }

    /** Represents an addMailResult. */
    class addMailResult implements IaddMailResult {

        /**
         * Constructs a new addMailResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IaddMailResult);

        /** addMailResult inboxNumber. */
        public inboxNumber: number;

        /** addMailResult userId. */
        public userId: number;

        /**
         * Creates a new addMailResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns addMailResult instance
         */
        public static create(properties?: CVP.IaddMailResult): CVP.addMailResult;

        /**
         * Encodes the specified addMailResult message. Does not implicitly {@link CVP.addMailResult.verify|verify} messages.
         * @param message addMailResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IaddMailResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified addMailResult message, length delimited. Does not implicitly {@link CVP.addMailResult.verify|verify} messages.
         * @param message addMailResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IaddMailResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an addMailResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns addMailResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.addMailResult;

        /**
         * Decodes an addMailResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns addMailResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.addMailResult;

        /**
         * Verifies an addMailResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an addMailResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns addMailResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.addMailResult;

        /**
         * Creates a plain object from an addMailResult message. Also converts values to other types if specified.
         * @param message addMailResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.addMailResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this addMailResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a deeplink. */
    interface Ideeplink {

        /** deeplink stardUserID */
        stardUserID?: (number|null);

        /** deeplink endUserID */
        endUserID?: (number|null);

        /** deeplink coins */
        coins?: (number|null);

        /** deeplink scratchCards */
        scratchCards?: (number|null);

        /** deeplink subscriptionPeriod */
        subscriptionPeriod?: (number|null);

        /** deeplink startDate */
        startDate?: (string|null);

        /** deeplink endDate */
        endDate?: (string|null);

        /** deeplink claimRestriction */
        claimRestriction?: (number|null);

        /** deeplink generateNum */
        generateNum?: (number|null);

        /** deeplink period */
        period?: (number|null);
    }

    /** Represents a deeplink. */
    class deeplink implements Ideeplink {

        /**
         * Constructs a new deeplink.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.Ideeplink);

        /** deeplink stardUserID. */
        public stardUserID: number;

        /** deeplink endUserID. */
        public endUserID: number;

        /** deeplink coins. */
        public coins: number;

        /** deeplink scratchCards. */
        public scratchCards: number;

        /** deeplink subscriptionPeriod. */
        public subscriptionPeriod: number;

        /** deeplink startDate. */
        public startDate: string;

        /** deeplink endDate. */
        public endDate: string;

        /** deeplink claimRestriction. */
        public claimRestriction: number;

        /** deeplink generateNum. */
        public generateNum: number;

        /** deeplink period. */
        public period: number;

        /**
         * Creates a new deeplink instance using the specified properties.
         * @param [properties] Properties to set
         * @returns deeplink instance
         */
        public static create(properties?: CVP.Ideeplink): CVP.deeplink;

        /**
         * Encodes the specified deeplink message. Does not implicitly {@link CVP.deeplink.verify|verify} messages.
         * @param message deeplink message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.Ideeplink, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified deeplink message, length delimited. Does not implicitly {@link CVP.deeplink.verify|verify} messages.
         * @param message deeplink message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.Ideeplink, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a deeplink message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns deeplink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.deeplink;

        /**
         * Decodes a deeplink message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns deeplink
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.deeplink;

        /**
         * Verifies a deeplink message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a deeplink message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns deeplink
         */
        public static fromObject(object: { [k: string]: any }): CVP.deeplink;

        /**
         * Creates a plain object from a deeplink message. Also converts values to other types if specified.
         * @param message deeplink
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.deeplink, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this deeplink to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestLevelLeaderboard. */
    interface IRequestLevelLeaderboard {

        /** RequestLevelLeaderboard commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestLevelLeaderboard limit */
        limit?: (number|null);
    }

    /** Represents a RequestLevelLeaderboard. */
    class RequestLevelLeaderboard implements IRequestLevelLeaderboard {

        /**
         * Constructs a new RequestLevelLeaderboard.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestLevelLeaderboard);

        /** RequestLevelLeaderboard commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestLevelLeaderboard limit. */
        public limit: number;

        /**
         * Creates a new RequestLevelLeaderboard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestLevelLeaderboard instance
         */
        public static create(properties?: CVP.IRequestLevelLeaderboard): CVP.RequestLevelLeaderboard;

        /**
         * Encodes the specified RequestLevelLeaderboard message. Does not implicitly {@link CVP.RequestLevelLeaderboard.verify|verify} messages.
         * @param message RequestLevelLeaderboard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestLevelLeaderboard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestLevelLeaderboard message, length delimited. Does not implicitly {@link CVP.RequestLevelLeaderboard.verify|verify} messages.
         * @param message RequestLevelLeaderboard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestLevelLeaderboard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestLevelLeaderboard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestLevelLeaderboard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestLevelLeaderboard;

        /**
         * Decodes a RequestLevelLeaderboard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestLevelLeaderboard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestLevelLeaderboard;

        /**
         * Verifies a RequestLevelLeaderboard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestLevelLeaderboard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestLevelLeaderboard
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestLevelLeaderboard;

        /**
         * Creates a plain object from a RequestLevelLeaderboard message. Also converts values to other types if specified.
         * @param message RequestLevelLeaderboard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestLevelLeaderboard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestLevelLeaderboard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResultLevelLeaderboard. */
    interface IResultLevelLeaderboard {

        /** ResultLevelLeaderboard levelLeaderboardInfoList */
        levelLeaderboardInfoList?: (CVP.ILevelLeaderboardInfo[]|null);

        /** ResultLevelLeaderboard ownLevelInfo */
        ownLevelInfo?: (CVP.ILevelLeaderboardInfo|null);

        /** ResultLevelLeaderboard time */
        time?: (number|null);
    }

    /** Represents a ResultLevelLeaderboard. */
    class ResultLevelLeaderboard implements IResultLevelLeaderboard {

        /**
         * Constructs a new ResultLevelLeaderboard.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IResultLevelLeaderboard);

        /** ResultLevelLeaderboard levelLeaderboardInfoList. */
        public levelLeaderboardInfoList: CVP.ILevelLeaderboardInfo[];

        /** ResultLevelLeaderboard ownLevelInfo. */
        public ownLevelInfo?: (CVP.ILevelLeaderboardInfo|null);

        /** ResultLevelLeaderboard time. */
        public time: number;

        /**
         * Creates a new ResultLevelLeaderboard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResultLevelLeaderboard instance
         */
        public static create(properties?: CVP.IResultLevelLeaderboard): CVP.ResultLevelLeaderboard;

        /**
         * Encodes the specified ResultLevelLeaderboard message. Does not implicitly {@link CVP.ResultLevelLeaderboard.verify|verify} messages.
         * @param message ResultLevelLeaderboard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IResultLevelLeaderboard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResultLevelLeaderboard message, length delimited. Does not implicitly {@link CVP.ResultLevelLeaderboard.verify|verify} messages.
         * @param message ResultLevelLeaderboard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IResultLevelLeaderboard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResultLevelLeaderboard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResultLevelLeaderboard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.ResultLevelLeaderboard;

        /**
         * Decodes a ResultLevelLeaderboard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResultLevelLeaderboard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.ResultLevelLeaderboard;

        /**
         * Verifies a ResultLevelLeaderboard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResultLevelLeaderboard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResultLevelLeaderboard
         */
        public static fromObject(object: { [k: string]: any }): CVP.ResultLevelLeaderboard;

        /**
         * Creates a plain object from a ResultLevelLeaderboard message. Also converts values to other types if specified.
         * @param message ResultLevelLeaderboard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.ResultLevelLeaderboard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResultLevelLeaderboard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LevelLeaderboardInfo. */
    interface ILevelLeaderboardInfo {

        /** LevelLeaderboardInfo userInfo */
        userInfo?: (CVP.IUserInfo|null);
    }

    /** Represents a LevelLeaderboardInfo. */
    class LevelLeaderboardInfo implements ILevelLeaderboardInfo {

        /**
         * Constructs a new LevelLeaderboardInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.ILevelLeaderboardInfo);

        /** LevelLeaderboardInfo userInfo. */
        public userInfo?: (CVP.IUserInfo|null);

        /**
         * Creates a new LevelLeaderboardInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LevelLeaderboardInfo instance
         */
        public static create(properties?: CVP.ILevelLeaderboardInfo): CVP.LevelLeaderboardInfo;

        /**
         * Encodes the specified LevelLeaderboardInfo message. Does not implicitly {@link CVP.LevelLeaderboardInfo.verify|verify} messages.
         * @param message LevelLeaderboardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.ILevelLeaderboardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LevelLeaderboardInfo message, length delimited. Does not implicitly {@link CVP.LevelLeaderboardInfo.verify|verify} messages.
         * @param message LevelLeaderboardInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.ILevelLeaderboardInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LevelLeaderboardInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LevelLeaderboardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.LevelLeaderboardInfo;

        /**
         * Decodes a LevelLeaderboardInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LevelLeaderboardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.LevelLeaderboardInfo;

        /**
         * Verifies a LevelLeaderboardInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LevelLeaderboardInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LevelLeaderboardInfo
         */
        public static fromObject(object: { [k: string]: any }): CVP.LevelLeaderboardInfo;

        /**
         * Creates a plain object from a LevelLeaderboardInfo message. Also converts values to other types if specified.
         * @param message LevelLeaderboardInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.LevelLeaderboardInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LevelLeaderboardInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestDailyTopWinLeaderboard. */
    interface IRequestDailyTopWinLeaderboard {

        /** RequestDailyTopWinLeaderboard commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestDailyTopWinLeaderboard limit */
        limit?: (number|null);
    }

    /** Represents a RequestDailyTopWinLeaderboard. */
    class RequestDailyTopWinLeaderboard implements IRequestDailyTopWinLeaderboard {

        /**
         * Constructs a new RequestDailyTopWinLeaderboard.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestDailyTopWinLeaderboard);

        /** RequestDailyTopWinLeaderboard commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestDailyTopWinLeaderboard limit. */
        public limit: number;

        /**
         * Creates a new RequestDailyTopWinLeaderboard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestDailyTopWinLeaderboard instance
         */
        public static create(properties?: CVP.IRequestDailyTopWinLeaderboard): CVP.RequestDailyTopWinLeaderboard;

        /**
         * Encodes the specified RequestDailyTopWinLeaderboard message. Does not implicitly {@link CVP.RequestDailyTopWinLeaderboard.verify|verify} messages.
         * @param message RequestDailyTopWinLeaderboard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestDailyTopWinLeaderboard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestDailyTopWinLeaderboard message, length delimited. Does not implicitly {@link CVP.RequestDailyTopWinLeaderboard.verify|verify} messages.
         * @param message RequestDailyTopWinLeaderboard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestDailyTopWinLeaderboard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestDailyTopWinLeaderboard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestDailyTopWinLeaderboard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestDailyTopWinLeaderboard;

        /**
         * Decodes a RequestDailyTopWinLeaderboard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestDailyTopWinLeaderboard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestDailyTopWinLeaderboard;

        /**
         * Verifies a RequestDailyTopWinLeaderboard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestDailyTopWinLeaderboard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestDailyTopWinLeaderboard
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestDailyTopWinLeaderboard;

        /**
         * Creates a plain object from a RequestDailyTopWinLeaderboard message. Also converts values to other types if specified.
         * @param message RequestDailyTopWinLeaderboard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestDailyTopWinLeaderboard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestDailyTopWinLeaderboard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResultDailyTopWinLeaderboard. */
    interface IResultDailyTopWinLeaderboard {

        /** ResultDailyTopWinLeaderboard dailyTopWinInfoList */
        dailyTopWinInfoList?: (CVP.IDailyTopWinInfo[]|null);

        /** ResultDailyTopWinLeaderboard ownDailyTopWinInfo */
        ownDailyTopWinInfo?: (CVP.IDailyTopWinInfo|null);

        /** ResultDailyTopWinLeaderboard time */
        time?: (number|null);
    }

    /** Represents a ResultDailyTopWinLeaderboard. */
    class ResultDailyTopWinLeaderboard implements IResultDailyTopWinLeaderboard {

        /**
         * Constructs a new ResultDailyTopWinLeaderboard.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IResultDailyTopWinLeaderboard);

        /** ResultDailyTopWinLeaderboard dailyTopWinInfoList. */
        public dailyTopWinInfoList: CVP.IDailyTopWinInfo[];

        /** ResultDailyTopWinLeaderboard ownDailyTopWinInfo. */
        public ownDailyTopWinInfo?: (CVP.IDailyTopWinInfo|null);

        /** ResultDailyTopWinLeaderboard time. */
        public time: number;

        /**
         * Creates a new ResultDailyTopWinLeaderboard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResultDailyTopWinLeaderboard instance
         */
        public static create(properties?: CVP.IResultDailyTopWinLeaderboard): CVP.ResultDailyTopWinLeaderboard;

        /**
         * Encodes the specified ResultDailyTopWinLeaderboard message. Does not implicitly {@link CVP.ResultDailyTopWinLeaderboard.verify|verify} messages.
         * @param message ResultDailyTopWinLeaderboard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IResultDailyTopWinLeaderboard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResultDailyTopWinLeaderboard message, length delimited. Does not implicitly {@link CVP.ResultDailyTopWinLeaderboard.verify|verify} messages.
         * @param message ResultDailyTopWinLeaderboard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IResultDailyTopWinLeaderboard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResultDailyTopWinLeaderboard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResultDailyTopWinLeaderboard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.ResultDailyTopWinLeaderboard;

        /**
         * Decodes a ResultDailyTopWinLeaderboard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResultDailyTopWinLeaderboard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.ResultDailyTopWinLeaderboard;

        /**
         * Verifies a ResultDailyTopWinLeaderboard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResultDailyTopWinLeaderboard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResultDailyTopWinLeaderboard
         */
        public static fromObject(object: { [k: string]: any }): CVP.ResultDailyTopWinLeaderboard;

        /**
         * Creates a plain object from a ResultDailyTopWinLeaderboard message. Also converts values to other types if specified.
         * @param message ResultDailyTopWinLeaderboard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.ResultDailyTopWinLeaderboard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResultDailyTopWinLeaderboard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DailyTopWinInfo. */
    interface IDailyTopWinInfo {

        /** DailyTopWinInfo userInfo */
        userInfo?: (CVP.IUserInfo|null);

        /** DailyTopWinInfo coins */
        coins?: (number|null);
    }

    /** Represents a DailyTopWinInfo. */
    class DailyTopWinInfo implements IDailyTopWinInfo {

        /**
         * Constructs a new DailyTopWinInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IDailyTopWinInfo);

        /** DailyTopWinInfo userInfo. */
        public userInfo?: (CVP.IUserInfo|null);

        /** DailyTopWinInfo coins. */
        public coins: number;

        /**
         * Creates a new DailyTopWinInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DailyTopWinInfo instance
         */
        public static create(properties?: CVP.IDailyTopWinInfo): CVP.DailyTopWinInfo;

        /**
         * Encodes the specified DailyTopWinInfo message. Does not implicitly {@link CVP.DailyTopWinInfo.verify|verify} messages.
         * @param message DailyTopWinInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IDailyTopWinInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DailyTopWinInfo message, length delimited. Does not implicitly {@link CVP.DailyTopWinInfo.verify|verify} messages.
         * @param message DailyTopWinInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IDailyTopWinInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailyTopWinInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DailyTopWinInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.DailyTopWinInfo;

        /**
         * Decodes a DailyTopWinInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DailyTopWinInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.DailyTopWinInfo;

        /**
         * Verifies a DailyTopWinInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DailyTopWinInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DailyTopWinInfo
         */
        public static fromObject(object: { [k: string]: any }): CVP.DailyTopWinInfo;

        /**
         * Creates a plain object from a DailyTopWinInfo message. Also converts values to other types if specified.
         * @param message DailyTopWinInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.DailyTopWinInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DailyTopWinInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestBestHandLeaderdoard. */
    interface IRequestBestHandLeaderdoard {

        /** RequestBestHandLeaderdoard commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestBestHandLeaderdoard limit */
        limit?: (number|null);
    }

    /** Represents a RequestBestHandLeaderdoard. */
    class RequestBestHandLeaderdoard implements IRequestBestHandLeaderdoard {

        /**
         * Constructs a new RequestBestHandLeaderdoard.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestBestHandLeaderdoard);

        /** RequestBestHandLeaderdoard commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestBestHandLeaderdoard limit. */
        public limit: number;

        /**
         * Creates a new RequestBestHandLeaderdoard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestBestHandLeaderdoard instance
         */
        public static create(properties?: CVP.IRequestBestHandLeaderdoard): CVP.RequestBestHandLeaderdoard;

        /**
         * Encodes the specified RequestBestHandLeaderdoard message. Does not implicitly {@link CVP.RequestBestHandLeaderdoard.verify|verify} messages.
         * @param message RequestBestHandLeaderdoard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestBestHandLeaderdoard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestBestHandLeaderdoard message, length delimited. Does not implicitly {@link CVP.RequestBestHandLeaderdoard.verify|verify} messages.
         * @param message RequestBestHandLeaderdoard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestBestHandLeaderdoard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestBestHandLeaderdoard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestBestHandLeaderdoard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestBestHandLeaderdoard;

        /**
         * Decodes a RequestBestHandLeaderdoard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestBestHandLeaderdoard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestBestHandLeaderdoard;

        /**
         * Verifies a RequestBestHandLeaderdoard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestBestHandLeaderdoard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestBestHandLeaderdoard
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestBestHandLeaderdoard;

        /**
         * Creates a plain object from a RequestBestHandLeaderdoard message. Also converts values to other types if specified.
         * @param message RequestBestHandLeaderdoard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestBestHandLeaderdoard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestBestHandLeaderdoard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResultBestHandLeaderdoard. */
    interface IResultBestHandLeaderdoard {

        /** ResultBestHandLeaderdoard bestHandInfoList */
        bestHandInfoList?: (CVP.IBestHandInfo[]|null);

        /** ResultBestHandLeaderdoard ownBestHandInfo */
        ownBestHandInfo?: (CVP.IBestHandInfo|null);

        /** ResultBestHandLeaderdoard time */
        time?: (number|null);
    }

    /** Represents a ResultBestHandLeaderdoard. */
    class ResultBestHandLeaderdoard implements IResultBestHandLeaderdoard {

        /**
         * Constructs a new ResultBestHandLeaderdoard.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IResultBestHandLeaderdoard);

        /** ResultBestHandLeaderdoard bestHandInfoList. */
        public bestHandInfoList: CVP.IBestHandInfo[];

        /** ResultBestHandLeaderdoard ownBestHandInfo. */
        public ownBestHandInfo?: (CVP.IBestHandInfo|null);

        /** ResultBestHandLeaderdoard time. */
        public time: number;

        /**
         * Creates a new ResultBestHandLeaderdoard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResultBestHandLeaderdoard instance
         */
        public static create(properties?: CVP.IResultBestHandLeaderdoard): CVP.ResultBestHandLeaderdoard;

        /**
         * Encodes the specified ResultBestHandLeaderdoard message. Does not implicitly {@link CVP.ResultBestHandLeaderdoard.verify|verify} messages.
         * @param message ResultBestHandLeaderdoard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IResultBestHandLeaderdoard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResultBestHandLeaderdoard message, length delimited. Does not implicitly {@link CVP.ResultBestHandLeaderdoard.verify|verify} messages.
         * @param message ResultBestHandLeaderdoard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IResultBestHandLeaderdoard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResultBestHandLeaderdoard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResultBestHandLeaderdoard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.ResultBestHandLeaderdoard;

        /**
         * Decodes a ResultBestHandLeaderdoard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResultBestHandLeaderdoard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.ResultBestHandLeaderdoard;

        /**
         * Verifies a ResultBestHandLeaderdoard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResultBestHandLeaderdoard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResultBestHandLeaderdoard
         */
        public static fromObject(object: { [k: string]: any }): CVP.ResultBestHandLeaderdoard;

        /**
         * Creates a plain object from a ResultBestHandLeaderdoard message. Also converts values to other types if specified.
         * @param message ResultBestHandLeaderdoard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.ResultBestHandLeaderdoard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResultBestHandLeaderdoard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BestHandInfo. */
    interface IBestHandInfo {

        /** BestHandInfo userInfo */
        userInfo?: (CVP.IUserInfo|null);

        /** BestHandInfo machineId */
        machineId?: (number|null);

        /** BestHandInfo cardArray */
        cardArray?: (string[]|null);

        /** BestHandInfo coins */
        coins?: (number|null);
    }

    /** Represents a BestHandInfo. */
    class BestHandInfo implements IBestHandInfo {

        /**
         * Constructs a new BestHandInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IBestHandInfo);

        /** BestHandInfo userInfo. */
        public userInfo?: (CVP.IUserInfo|null);

        /** BestHandInfo machineId. */
        public machineId: number;

        /** BestHandInfo cardArray. */
        public cardArray: string[];

        /** BestHandInfo coins. */
        public coins: number;

        /**
         * Creates a new BestHandInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BestHandInfo instance
         */
        public static create(properties?: CVP.IBestHandInfo): CVP.BestHandInfo;

        /**
         * Encodes the specified BestHandInfo message. Does not implicitly {@link CVP.BestHandInfo.verify|verify} messages.
         * @param message BestHandInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IBestHandInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BestHandInfo message, length delimited. Does not implicitly {@link CVP.BestHandInfo.verify|verify} messages.
         * @param message BestHandInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IBestHandInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BestHandInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BestHandInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.BestHandInfo;

        /**
         * Decodes a BestHandInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BestHandInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.BestHandInfo;

        /**
         * Verifies a BestHandInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BestHandInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BestHandInfo
         */
        public static fromObject(object: { [k: string]: any }): CVP.BestHandInfo;

        /**
         * Creates a plain object from a BestHandInfo message. Also converts values to other types if specified.
         * @param message BestHandInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.BestHandInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BestHandInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserInfo. */
    interface IUserInfo {

        /** UserInfo rank */
        rank?: (number|null);

        /** UserInfo sex */
        sex?: (CVP.SexType|null);

        /** UserInfo name */
        name?: (string|null);

        /** UserInfo level */
        level?: (number|null);

        /** UserInfo country */
        country?: (number|null);

        /** UserInfo avatarInfo */
        avatarInfo?: (CVP.IAvatarInfo|null);
    }

    /** Represents a UserInfo. */
    class UserInfo implements IUserInfo {

        /**
         * Constructs a new UserInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IUserInfo);

        /** UserInfo rank. */
        public rank: number;

        /** UserInfo sex. */
        public sex: CVP.SexType;

        /** UserInfo name. */
        public name: string;

        /** UserInfo level. */
        public level: number;

        /** UserInfo country. */
        public country: number;

        /** UserInfo avatarInfo. */
        public avatarInfo?: (CVP.IAvatarInfo|null);

        /**
         * Creates a new UserInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserInfo instance
         */
        public static create(properties?: CVP.IUserInfo): CVP.UserInfo;

        /**
         * Encodes the specified UserInfo message. Does not implicitly {@link CVP.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserInfo message, length delimited. Does not implicitly {@link CVP.UserInfo.verify|verify} messages.
         * @param message UserInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IUserInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.UserInfo;

        /**
         * Decodes a UserInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.UserInfo;

        /**
         * Verifies a UserInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserInfo
         */
        public static fromObject(object: { [k: string]: any }): CVP.UserInfo;

        /**
         * Creates a plain object from a UserInfo message. Also converts values to other types if specified.
         * @param message UserInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.UserInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AvatarInfo. */
    interface IAvatarInfo {

        /** AvatarInfo avatarId */
        avatarId?: (number|null);

        /** AvatarInfo avatarType */
        avatarType?: (string|null);

        /** AvatarInfo avatarUrl */
        avatarUrl?: (string|null);
    }

    /** Represents an AvatarInfo. */
    class AvatarInfo implements IAvatarInfo {

        /**
         * Constructs a new AvatarInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IAvatarInfo);

        /** AvatarInfo avatarId. */
        public avatarId: number;

        /** AvatarInfo avatarType. */
        public avatarType: string;

        /** AvatarInfo avatarUrl. */
        public avatarUrl: string;

        /**
         * Creates a new AvatarInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AvatarInfo instance
         */
        public static create(properties?: CVP.IAvatarInfo): CVP.AvatarInfo;

        /**
         * Encodes the specified AvatarInfo message. Does not implicitly {@link CVP.AvatarInfo.verify|verify} messages.
         * @param message AvatarInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IAvatarInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AvatarInfo message, length delimited. Does not implicitly {@link CVP.AvatarInfo.verify|verify} messages.
         * @param message AvatarInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IAvatarInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AvatarInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AvatarInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.AvatarInfo;

        /**
         * Decodes an AvatarInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AvatarInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.AvatarInfo;

        /**
         * Verifies an AvatarInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AvatarInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AvatarInfo
         */
        public static fromObject(object: { [k: string]: any }): CVP.AvatarInfo;

        /**
         * Creates a plain object from an AvatarInfo message. Also converts values to other types if specified.
         * @param message AvatarInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.AvatarInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AvatarInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestLobbyData. */
    interface IRequestLobbyData {

        /** RequestLobbyData commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestLobbyData. */
    class RequestLobbyData implements IRequestLobbyData {

        /**
         * Constructs a new RequestLobbyData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestLobbyData);

        /** RequestLobbyData commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestLobbyData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestLobbyData instance
         */
        public static create(properties?: CVP.IRequestLobbyData): CVP.RequestLobbyData;

        /**
         * Encodes the specified RequestLobbyData message. Does not implicitly {@link CVP.RequestLobbyData.verify|verify} messages.
         * @param message RequestLobbyData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestLobbyData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestLobbyData message, length delimited. Does not implicitly {@link CVP.RequestLobbyData.verify|verify} messages.
         * @param message RequestLobbyData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestLobbyData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestLobbyData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestLobbyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestLobbyData;

        /**
         * Decodes a RequestLobbyData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestLobbyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestLobbyData;

        /**
         * Verifies a RequestLobbyData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestLobbyData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestLobbyData
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestLobbyData;

        /**
         * Creates a plain object from a RequestLobbyData message. Also converts values to other types if specified.
         * @param message RequestLobbyData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestLobbyData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestLobbyData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestLobbyDataResult. */
    interface IRequestLobbyDataResult {

        /** RequestLobbyDataResult RoomDataList */
        RoomDataList?: (CVP.IRoomData[]|null);

        /** RequestLobbyDataResult bonusInfo */
        bonusInfo?: (CVP.IBonusInfo|null);

        /** RequestLobbyDataResult pigIsFull */
        pigIsFull?: (boolean|null);

        /** RequestLobbyDataResult vaultIsOpen */
        vaultIsOpen?: (boolean|null);

        /** RequestLobbyDataResult isHaveInterstitial */
        isHaveInterstitial?: (boolean|null);

        /** RequestLobbyDataResult bindReward */
        bindReward?: (number|null);

        /** RequestLobbyDataResult inboxNumber */
        inboxNumber?: (number|null);

        /** RequestLobbyDataResult achievementNumber */
        achievementNumber?: (number|null);

        /** RequestLobbyDataResult isSignIn */
        isSignIn?: (boolean|null);

        /** RequestLobbyDataResult signType */
        signType?: (CVP.SignType|null);

        /** RequestLobbyDataResult VipDataList */
        VipDataList?: (CVP.IVipData[]|null);

        /** RequestLobbyDataResult gameAdIdList */
        gameAdIdList?: (string[]|null);

        /** RequestLobbyDataResult isClaim */
        isClaim?: (boolean|null);

        /** RequestLobbyDataResult isHaveFreeSubScribe */
        isHaveFreeSubScribe?: (boolean|null);

        /** RequestLobbyDataResult isBuyInvitation */
        isBuyInvitation?: (boolean|null);

        /** RequestLobbyDataResult isShowPersonalDeal */
        isShowPersonalDeal?: (boolean|null);

        /** RequestLobbyDataResult guideTipsKeepTime */
        guideTipsKeepTime?: (number|null);

        /** RequestLobbyDataResult guideTipsCoolDownTime */
        guideTipsCoolDownTime?: (number|null);

        /** RequestLobbyDataResult frequency */
        frequency?: (number|null);

        /** RequestLobbyDataResult removeAd */
        removeAd?: (number|null);

        /** RequestLobbyDataResult removeAdItem */
        removeAdItem?: (CVP.IShopItem|null);

        /** RequestLobbyDataResult changeProfileReward */
        changeProfileReward?: (number|null);

        /** RequestLobbyDataResult guideTipsInitialCooldownTime */
        guideTipsInitialCooldownTime?: (number|null);
    }

    /** Represents a RequestLobbyDataResult. */
    class RequestLobbyDataResult implements IRequestLobbyDataResult {

        /**
         * Constructs a new RequestLobbyDataResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestLobbyDataResult);

        /** RequestLobbyDataResult RoomDataList. */
        public RoomDataList: CVP.IRoomData[];

        /** RequestLobbyDataResult bonusInfo. */
        public bonusInfo?: (CVP.IBonusInfo|null);

        /** RequestLobbyDataResult pigIsFull. */
        public pigIsFull: boolean;

        /** RequestLobbyDataResult vaultIsOpen. */
        public vaultIsOpen: boolean;

        /** RequestLobbyDataResult isHaveInterstitial. */
        public isHaveInterstitial: boolean;

        /** RequestLobbyDataResult bindReward. */
        public bindReward: number;

        /** RequestLobbyDataResult inboxNumber. */
        public inboxNumber: number;

        /** RequestLobbyDataResult achievementNumber. */
        public achievementNumber: number;

        /** RequestLobbyDataResult isSignIn. */
        public isSignIn: boolean;

        /** RequestLobbyDataResult signType. */
        public signType: CVP.SignType;

        /** RequestLobbyDataResult VipDataList. */
        public VipDataList: CVP.IVipData[];

        /** RequestLobbyDataResult gameAdIdList. */
        public gameAdIdList: string[];

        /** RequestLobbyDataResult isClaim. */
        public isClaim: boolean;

        /** RequestLobbyDataResult isHaveFreeSubScribe. */
        public isHaveFreeSubScribe: boolean;

        /** RequestLobbyDataResult isBuyInvitation. */
        public isBuyInvitation: boolean;

        /** RequestLobbyDataResult isShowPersonalDeal. */
        public isShowPersonalDeal: boolean;

        /** RequestLobbyDataResult guideTipsKeepTime. */
        public guideTipsKeepTime: number;

        /** RequestLobbyDataResult guideTipsCoolDownTime. */
        public guideTipsCoolDownTime: number;

        /** RequestLobbyDataResult frequency. */
        public frequency: number;

        /** RequestLobbyDataResult removeAd. */
        public removeAd: number;

        /** RequestLobbyDataResult removeAdItem. */
        public removeAdItem?: (CVP.IShopItem|null);

        /** RequestLobbyDataResult changeProfileReward. */
        public changeProfileReward: number;

        /** RequestLobbyDataResult guideTipsInitialCooldownTime. */
        public guideTipsInitialCooldownTime: number;

        /**
         * Creates a new RequestLobbyDataResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestLobbyDataResult instance
         */
        public static create(properties?: CVP.IRequestLobbyDataResult): CVP.RequestLobbyDataResult;

        /**
         * Encodes the specified RequestLobbyDataResult message. Does not implicitly {@link CVP.RequestLobbyDataResult.verify|verify} messages.
         * @param message RequestLobbyDataResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestLobbyDataResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestLobbyDataResult message, length delimited. Does not implicitly {@link CVP.RequestLobbyDataResult.verify|verify} messages.
         * @param message RequestLobbyDataResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestLobbyDataResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestLobbyDataResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestLobbyDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestLobbyDataResult;

        /**
         * Decodes a RequestLobbyDataResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestLobbyDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestLobbyDataResult;

        /**
         * Verifies a RequestLobbyDataResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestLobbyDataResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestLobbyDataResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestLobbyDataResult;

        /**
         * Creates a plain object from a RequestLobbyDataResult message. Also converts values to other types if specified.
         * @param message RequestLobbyDataResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestLobbyDataResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestLobbyDataResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestGetAdIdList. */
    interface IRequestGetAdIdList {

        /** RequestGetAdIdList commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestGetAdIdList. */
    class RequestGetAdIdList implements IRequestGetAdIdList {

        /**
         * Constructs a new RequestGetAdIdList.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestGetAdIdList);

        /** RequestGetAdIdList commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestGetAdIdList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestGetAdIdList instance
         */
        public static create(properties?: CVP.IRequestGetAdIdList): CVP.RequestGetAdIdList;

        /**
         * Encodes the specified RequestGetAdIdList message. Does not implicitly {@link CVP.RequestGetAdIdList.verify|verify} messages.
         * @param message RequestGetAdIdList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestGetAdIdList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestGetAdIdList message, length delimited. Does not implicitly {@link CVP.RequestGetAdIdList.verify|verify} messages.
         * @param message RequestGetAdIdList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestGetAdIdList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestGetAdIdList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestGetAdIdList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestGetAdIdList;

        /**
         * Decodes a RequestGetAdIdList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestGetAdIdList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestGetAdIdList;

        /**
         * Verifies a RequestGetAdIdList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestGetAdIdList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestGetAdIdList
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestGetAdIdList;

        /**
         * Creates a plain object from a RequestGetAdIdList message. Also converts values to other types if specified.
         * @param message RequestGetAdIdList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestGetAdIdList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestGetAdIdList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestGetAdIdListResult. */
    interface IRequestGetAdIdListResult {

        /** RequestGetAdIdListResult gameAdIdList */
        gameAdIdList?: (string[]|null);
    }

    /** Represents a RequestGetAdIdListResult. */
    class RequestGetAdIdListResult implements IRequestGetAdIdListResult {

        /**
         * Constructs a new RequestGetAdIdListResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestGetAdIdListResult);

        /** RequestGetAdIdListResult gameAdIdList. */
        public gameAdIdList: string[];

        /**
         * Creates a new RequestGetAdIdListResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestGetAdIdListResult instance
         */
        public static create(properties?: CVP.IRequestGetAdIdListResult): CVP.RequestGetAdIdListResult;

        /**
         * Encodes the specified RequestGetAdIdListResult message. Does not implicitly {@link CVP.RequestGetAdIdListResult.verify|verify} messages.
         * @param message RequestGetAdIdListResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestGetAdIdListResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestGetAdIdListResult message, length delimited. Does not implicitly {@link CVP.RequestGetAdIdListResult.verify|verify} messages.
         * @param message RequestGetAdIdListResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestGetAdIdListResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestGetAdIdListResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestGetAdIdListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestGetAdIdListResult;

        /**
         * Decodes a RequestGetAdIdListResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestGetAdIdListResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestGetAdIdListResult;

        /**
         * Verifies a RequestGetAdIdListResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestGetAdIdListResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestGetAdIdListResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestGetAdIdListResult;

        /**
         * Creates a plain object from a RequestGetAdIdListResult message. Also converts values to other types if specified.
         * @param message RequestGetAdIdListResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestGetAdIdListResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestGetAdIdListResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** SignType enum. */
    enum SignType {
        NON = 0,
        NORMAL = 1,
        PURCHASE = 2,
        BOTH = 3
    }

    /** RoomType enum. */
    enum RoomType {
        NORMAL = 0,
        UPDATING = 1,
        COMINGSOON = 2,
        UKNOWNCOMINGSOON = 3
    }

    /** RoomTag enum. */
    enum RoomTag {
        NORMAL = 0,
        NEW = 1,
        HOT = 2
    }

    /** Properties of a RoomData. */
    interface IRoomData {

        /** RoomData id */
        id?: (number|null);

        /** RoomData name */
        name?: (string|null);

        /** RoomData handList */
        handList?: (number[]|null);

        /** RoomData roomType */
        roomType?: (CVP.RoomType|null);

        /** RoomData roomTypeList */
        roomTypeList?: (CVP.RoomType[]|null);

        /** RoomData roomTag */
        roomTag?: (CVP.RoomTag|null);

        /** RoomData peopleNum */
        peopleNum?: (number|null);
    }

    /** Represents a RoomData. */
    class RoomData implements IRoomData {

        /**
         * Constructs a new RoomData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRoomData);

        /** RoomData id. */
        public id: number;

        /** RoomData name. */
        public name: string;

        /** RoomData handList. */
        public handList: number[];

        /** RoomData roomType. */
        public roomType: CVP.RoomType;

        /** RoomData roomTypeList. */
        public roomTypeList: CVP.RoomType[];

        /** RoomData roomTag. */
        public roomTag: CVP.RoomTag;

        /** RoomData peopleNum. */
        public peopleNum: number;

        /**
         * Creates a new RoomData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoomData instance
         */
        public static create(properties?: CVP.IRoomData): CVP.RoomData;

        /**
         * Encodes the specified RoomData message. Does not implicitly {@link CVP.RoomData.verify|verify} messages.
         * @param message RoomData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRoomData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoomData message, length delimited. Does not implicitly {@link CVP.RoomData.verify|verify} messages.
         * @param message RoomData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRoomData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoomData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoomData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RoomData;

        /**
         * Decodes a RoomData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoomData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RoomData;

        /**
         * Verifies a RoomData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoomData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoomData
         */
        public static fromObject(object: { [k: string]: any }): CVP.RoomData;

        /**
         * Creates a plain object from a RoomData message. Also converts values to other types if specified.
         * @param message RoomData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RoomData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoomData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateSystemInforms. */
    interface IUpdateSystemInforms {

        /** UpdateSystemInforms systemInforms */
        systemInforms?: (CVP.ISysytemInforms[]|null);
    }

    /** Represents an UpdateSystemInforms. */
    class UpdateSystemInforms implements IUpdateSystemInforms {

        /**
         * Constructs a new UpdateSystemInforms.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IUpdateSystemInforms);

        /** UpdateSystemInforms systemInforms. */
        public systemInforms: CVP.ISysytemInforms[];

        /**
         * Creates a new UpdateSystemInforms instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateSystemInforms instance
         */
        public static create(properties?: CVP.IUpdateSystemInforms): CVP.UpdateSystemInforms;

        /**
         * Encodes the specified UpdateSystemInforms message. Does not implicitly {@link CVP.UpdateSystemInforms.verify|verify} messages.
         * @param message UpdateSystemInforms message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IUpdateSystemInforms, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateSystemInforms message, length delimited. Does not implicitly {@link CVP.UpdateSystemInforms.verify|verify} messages.
         * @param message UpdateSystemInforms message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IUpdateSystemInforms, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateSystemInforms message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateSystemInforms
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.UpdateSystemInforms;

        /**
         * Decodes an UpdateSystemInforms message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateSystemInforms
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.UpdateSystemInforms;

        /**
         * Verifies an UpdateSystemInforms message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateSystemInforms message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateSystemInforms
         */
        public static fromObject(object: { [k: string]: any }): CVP.UpdateSystemInforms;

        /**
         * Creates a plain object from an UpdateSystemInforms message. Also converts values to other types if specified.
         * @param message UpdateSystemInforms
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.UpdateSystemInforms, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateSystemInforms to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** WinType enum. */
    enum WinType {
        BIGWIN = 0,
        JACKPOT = 1
    }

    /** Properties of a SysytemInforms. */
    interface ISysytemInforms {

        /** SysytemInforms name */
        name?: (string|null);

        /** SysytemInforms winCoins */
        winCoins?: (number|null);

        /** SysytemInforms roomId */
        roomId?: (number|null);

        /** SysytemInforms type */
        type?: (CVP.WinType|null);

        /** SysytemInforms time */
        time?: (number|Long|null);
    }

    /** Represents a SysytemInforms. */
    class SysytemInforms implements ISysytemInforms {

        /**
         * Constructs a new SysytemInforms.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.ISysytemInforms);

        /** SysytemInforms name. */
        public name: string;

        /** SysytemInforms winCoins. */
        public winCoins: number;

        /** SysytemInforms roomId. */
        public roomId: number;

        /** SysytemInforms type. */
        public type: CVP.WinType;

        /** SysytemInforms time. */
        public time: (number|Long);

        /**
         * Creates a new SysytemInforms instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SysytemInforms instance
         */
        public static create(properties?: CVP.ISysytemInforms): CVP.SysytemInforms;

        /**
         * Encodes the specified SysytemInforms message. Does not implicitly {@link CVP.SysytemInforms.verify|verify} messages.
         * @param message SysytemInforms message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.ISysytemInforms, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SysytemInforms message, length delimited. Does not implicitly {@link CVP.SysytemInforms.verify|verify} messages.
         * @param message SysytemInforms message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.ISysytemInforms, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SysytemInforms message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SysytemInforms
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.SysytemInforms;

        /**
         * Decodes a SysytemInforms message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SysytemInforms
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.SysytemInforms;

        /**
         * Verifies a SysytemInforms message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SysytemInforms message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SysytemInforms
         */
        public static fromObject(object: { [k: string]: any }): CVP.SysytemInforms;

        /**
         * Creates a plain object from a SysytemInforms message. Also converts values to other types if specified.
         * @param message SysytemInforms
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.SysytemInforms, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SysytemInforms to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendUserPushToken. */
    interface ISendUserPushToken {

        /** SendUserPushToken pushtoken */
        pushtoken?: (string|null);
    }

    /** Represents a SendUserPushToken. */
    class SendUserPushToken implements ISendUserPushToken {

        /**
         * Constructs a new SendUserPushToken.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.ISendUserPushToken);

        /** SendUserPushToken pushtoken. */
        public pushtoken: string;

        /**
         * Creates a new SendUserPushToken instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendUserPushToken instance
         */
        public static create(properties?: CVP.ISendUserPushToken): CVP.SendUserPushToken;

        /**
         * Encodes the specified SendUserPushToken message. Does not implicitly {@link CVP.SendUserPushToken.verify|verify} messages.
         * @param message SendUserPushToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.ISendUserPushToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendUserPushToken message, length delimited. Does not implicitly {@link CVP.SendUserPushToken.verify|verify} messages.
         * @param message SendUserPushToken message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.ISendUserPushToken, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendUserPushToken message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendUserPushToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.SendUserPushToken;

        /**
         * Decodes a SendUserPushToken message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendUserPushToken
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.SendUserPushToken;

        /**
         * Verifies a SendUserPushToken message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendUserPushToken message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendUserPushToken
         */
        public static fromObject(object: { [k: string]: any }): CVP.SendUserPushToken;

        /**
         * Creates a plain object from a SendUserPushToken message. Also converts values to other types if specified.
         * @param message SendUserPushToken
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.SendUserPushToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendUserPushToken to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestGetChangeProfileReward. */
    interface IRequestGetChangeProfileReward {

        /** RequestGetChangeProfileReward commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestGetChangeProfileReward. */
    class RequestGetChangeProfileReward implements IRequestGetChangeProfileReward {

        /**
         * Constructs a new RequestGetChangeProfileReward.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestGetChangeProfileReward);

        /** RequestGetChangeProfileReward commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestGetChangeProfileReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestGetChangeProfileReward instance
         */
        public static create(properties?: CVP.IRequestGetChangeProfileReward): CVP.RequestGetChangeProfileReward;

        /**
         * Encodes the specified RequestGetChangeProfileReward message. Does not implicitly {@link CVP.RequestGetChangeProfileReward.verify|verify} messages.
         * @param message RequestGetChangeProfileReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestGetChangeProfileReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestGetChangeProfileReward message, length delimited. Does not implicitly {@link CVP.RequestGetChangeProfileReward.verify|verify} messages.
         * @param message RequestGetChangeProfileReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestGetChangeProfileReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestGetChangeProfileReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestGetChangeProfileReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestGetChangeProfileReward;

        /**
         * Decodes a RequestGetChangeProfileReward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestGetChangeProfileReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestGetChangeProfileReward;

        /**
         * Verifies a RequestGetChangeProfileReward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestGetChangeProfileReward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestGetChangeProfileReward
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestGetChangeProfileReward;

        /**
         * Creates a plain object from a RequestGetChangeProfileReward message. Also converts values to other types if specified.
         * @param message RequestGetChangeProfileReward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestGetChangeProfileReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestGetChangeProfileReward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestGetChangeProfileRewardResult. */
    interface IRequestGetChangeProfileRewardResult {

        /** RequestGetChangeProfileRewardResult coins */
        coins?: (number|null);
    }

    /** Represents a RequestGetChangeProfileRewardResult. */
    class RequestGetChangeProfileRewardResult implements IRequestGetChangeProfileRewardResult {

        /**
         * Constructs a new RequestGetChangeProfileRewardResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestGetChangeProfileRewardResult);

        /** RequestGetChangeProfileRewardResult coins. */
        public coins: number;

        /**
         * Creates a new RequestGetChangeProfileRewardResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestGetChangeProfileRewardResult instance
         */
        public static create(properties?: CVP.IRequestGetChangeProfileRewardResult): CVP.RequestGetChangeProfileRewardResult;

        /**
         * Encodes the specified RequestGetChangeProfileRewardResult message. Does not implicitly {@link CVP.RequestGetChangeProfileRewardResult.verify|verify} messages.
         * @param message RequestGetChangeProfileRewardResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestGetChangeProfileRewardResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestGetChangeProfileRewardResult message, length delimited. Does not implicitly {@link CVP.RequestGetChangeProfileRewardResult.verify|verify} messages.
         * @param message RequestGetChangeProfileRewardResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestGetChangeProfileRewardResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestGetChangeProfileRewardResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestGetChangeProfileRewardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestGetChangeProfileRewardResult;

        /**
         * Decodes a RequestGetChangeProfileRewardResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestGetChangeProfileRewardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestGetChangeProfileRewardResult;

        /**
         * Verifies a RequestGetChangeProfileRewardResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestGetChangeProfileRewardResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestGetChangeProfileRewardResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestGetChangeProfileRewardResult;

        /**
         * Creates a plain object from a RequestGetChangeProfileRewardResult message. Also converts values to other types if specified.
         * @param message RequestGetChangeProfileRewardResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestGetChangeProfileRewardResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestGetChangeProfileRewardResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestGetRoomPeopleNum. */
    interface IRequestGetRoomPeopleNum {

        /** RequestGetRoomPeopleNum commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestGetRoomPeopleNum. */
    class RequestGetRoomPeopleNum implements IRequestGetRoomPeopleNum {

        /**
         * Constructs a new RequestGetRoomPeopleNum.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestGetRoomPeopleNum);

        /** RequestGetRoomPeopleNum commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestGetRoomPeopleNum instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestGetRoomPeopleNum instance
         */
        public static create(properties?: CVP.IRequestGetRoomPeopleNum): CVP.RequestGetRoomPeopleNum;

        /**
         * Encodes the specified RequestGetRoomPeopleNum message. Does not implicitly {@link CVP.RequestGetRoomPeopleNum.verify|verify} messages.
         * @param message RequestGetRoomPeopleNum message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestGetRoomPeopleNum, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestGetRoomPeopleNum message, length delimited. Does not implicitly {@link CVP.RequestGetRoomPeopleNum.verify|verify} messages.
         * @param message RequestGetRoomPeopleNum message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestGetRoomPeopleNum, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestGetRoomPeopleNum message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestGetRoomPeopleNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestGetRoomPeopleNum;

        /**
         * Decodes a RequestGetRoomPeopleNum message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestGetRoomPeopleNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestGetRoomPeopleNum;

        /**
         * Verifies a RequestGetRoomPeopleNum message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestGetRoomPeopleNum message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestGetRoomPeopleNum
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestGetRoomPeopleNum;

        /**
         * Creates a plain object from a RequestGetRoomPeopleNum message. Also converts values to other types if specified.
         * @param message RequestGetRoomPeopleNum
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestGetRoomPeopleNum, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestGetRoomPeopleNum to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestGetRoomPeopleNumResult. */
    interface IRequestGetRoomPeopleNumResult {

        /** RequestGetRoomPeopleNumResult RoomDataList */
        RoomDataList?: (CVP.IRoomData[]|null);
    }

    /** Represents a RequestGetRoomPeopleNumResult. */
    class RequestGetRoomPeopleNumResult implements IRequestGetRoomPeopleNumResult {

        /**
         * Constructs a new RequestGetRoomPeopleNumResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestGetRoomPeopleNumResult);

        /** RequestGetRoomPeopleNumResult RoomDataList. */
        public RoomDataList: CVP.IRoomData[];

        /**
         * Creates a new RequestGetRoomPeopleNumResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestGetRoomPeopleNumResult instance
         */
        public static create(properties?: CVP.IRequestGetRoomPeopleNumResult): CVP.RequestGetRoomPeopleNumResult;

        /**
         * Encodes the specified RequestGetRoomPeopleNumResult message. Does not implicitly {@link CVP.RequestGetRoomPeopleNumResult.verify|verify} messages.
         * @param message RequestGetRoomPeopleNumResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestGetRoomPeopleNumResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestGetRoomPeopleNumResult message, length delimited. Does not implicitly {@link CVP.RequestGetRoomPeopleNumResult.verify|verify} messages.
         * @param message RequestGetRoomPeopleNumResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestGetRoomPeopleNumResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestGetRoomPeopleNumResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestGetRoomPeopleNumResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestGetRoomPeopleNumResult;

        /**
         * Decodes a RequestGetRoomPeopleNumResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestGetRoomPeopleNumResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestGetRoomPeopleNumResult;

        /**
         * Verifies a RequestGetRoomPeopleNumResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestGetRoomPeopleNumResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestGetRoomPeopleNumResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestGetRoomPeopleNumResult;

        /**
         * Creates a plain object from a RequestGetRoomPeopleNumResult message. Also converts values to other types if specified.
         * @param message RequestGetRoomPeopleNumResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestGetRoomPeopleNumResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestGetRoomPeopleNumResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestSystemInforms. */
    interface IRequestSystemInforms {

        /** RequestSystemInforms commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestSystemInforms. */
    class RequestSystemInforms implements IRequestSystemInforms {

        /**
         * Constructs a new RequestSystemInforms.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestSystemInforms);

        /** RequestSystemInforms commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestSystemInforms instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestSystemInforms instance
         */
        public static create(properties?: CVP.IRequestSystemInforms): CVP.RequestSystemInforms;

        /**
         * Encodes the specified RequestSystemInforms message. Does not implicitly {@link CVP.RequestSystemInforms.verify|verify} messages.
         * @param message RequestSystemInforms message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestSystemInforms, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestSystemInforms message, length delimited. Does not implicitly {@link CVP.RequestSystemInforms.verify|verify} messages.
         * @param message RequestSystemInforms message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestSystemInforms, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestSystemInforms message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestSystemInforms
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestSystemInforms;

        /**
         * Decodes a RequestSystemInforms message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestSystemInforms
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestSystemInforms;

        /**
         * Verifies a RequestSystemInforms message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestSystemInforms message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestSystemInforms
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestSystemInforms;

        /**
         * Creates a plain object from a RequestSystemInforms message. Also converts values to other types if specified.
         * @param message RequestSystemInforms
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestSystemInforms, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestSystemInforms to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestSystemInformsResult. */
    interface IRequestSystemInformsResult {

        /** RequestSystemInformsResult systemInforms */
        systemInforms?: (CVP.ISysytemInforms[]|null);
    }

    /** Represents a RequestSystemInformsResult. */
    class RequestSystemInformsResult implements IRequestSystemInformsResult {

        /**
         * Constructs a new RequestSystemInformsResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestSystemInformsResult);

        /** RequestSystemInformsResult systemInforms. */
        public systemInforms: CVP.ISysytemInforms[];

        /**
         * Creates a new RequestSystemInformsResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestSystemInformsResult instance
         */
        public static create(properties?: CVP.IRequestSystemInformsResult): CVP.RequestSystemInformsResult;

        /**
         * Encodes the specified RequestSystemInformsResult message. Does not implicitly {@link CVP.RequestSystemInformsResult.verify|verify} messages.
         * @param message RequestSystemInformsResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestSystemInformsResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestSystemInformsResult message, length delimited. Does not implicitly {@link CVP.RequestSystemInformsResult.verify|verify} messages.
         * @param message RequestSystemInformsResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestSystemInformsResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestSystemInformsResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestSystemInformsResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestSystemInformsResult;

        /**
         * Decodes a RequestSystemInformsResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestSystemInformsResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestSystemInformsResult;

        /**
         * Verifies a RequestSystemInformsResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestSystemInformsResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestSystemInformsResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestSystemInformsResult;

        /**
         * Creates a plain object from a RequestSystemInformsResult message. Also converts values to other types if specified.
         * @param message RequestSystemInformsResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestSystemInformsResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestSystemInformsResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestTestA. */
    interface IRequestTestA {

        /** RequestTestA commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestTestA. */
    class RequestTestA implements IRequestTestA {

        /**
         * Constructs a new RequestTestA.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestTestA);

        /** RequestTestA commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestTestA instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestTestA instance
         */
        public static create(properties?: CVP.IRequestTestA): CVP.RequestTestA;

        /**
         * Encodes the specified RequestTestA message. Does not implicitly {@link CVP.RequestTestA.verify|verify} messages.
         * @param message RequestTestA message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestTestA, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestTestA message, length delimited. Does not implicitly {@link CVP.RequestTestA.verify|verify} messages.
         * @param message RequestTestA message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestTestA, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestTestA message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestTestA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestTestA;

        /**
         * Decodes a RequestTestA message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestTestA
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestTestA;

        /**
         * Verifies a RequestTestA message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestTestA message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestTestA
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestTestA;

        /**
         * Creates a plain object from a RequestTestA message. Also converts values to other types if specified.
         * @param message RequestTestA
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestTestA, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestTestA to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestTestAResult. */
    interface IRequestTestAResult {
    }

    /** Represents a RequestTestAResult. */
    class RequestTestAResult implements IRequestTestAResult {

        /**
         * Constructs a new RequestTestAResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestTestAResult);

        /**
         * Creates a new RequestTestAResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestTestAResult instance
         */
        public static create(properties?: CVP.IRequestTestAResult): CVP.RequestTestAResult;

        /**
         * Encodes the specified RequestTestAResult message. Does not implicitly {@link CVP.RequestTestAResult.verify|verify} messages.
         * @param message RequestTestAResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestTestAResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestTestAResult message, length delimited. Does not implicitly {@link CVP.RequestTestAResult.verify|verify} messages.
         * @param message RequestTestAResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestTestAResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestTestAResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestTestAResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestTestAResult;

        /**
         * Decodes a RequestTestAResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestTestAResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestTestAResult;

        /**
         * Verifies a RequestTestAResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestTestAResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestTestAResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestTestAResult;

        /**
         * Creates a plain object from a RequestTestAResult message. Also converts values to other types if specified.
         * @param message RequestTestAResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestTestAResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestTestAResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestTestB. */
    interface IRequestTestB {

        /** RequestTestB commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestTestB. */
    class RequestTestB implements IRequestTestB {

        /**
         * Constructs a new RequestTestB.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestTestB);

        /** RequestTestB commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestTestB instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestTestB instance
         */
        public static create(properties?: CVP.IRequestTestB): CVP.RequestTestB;

        /**
         * Encodes the specified RequestTestB message. Does not implicitly {@link CVP.RequestTestB.verify|verify} messages.
         * @param message RequestTestB message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestTestB, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestTestB message, length delimited. Does not implicitly {@link CVP.RequestTestB.verify|verify} messages.
         * @param message RequestTestB message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestTestB, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestTestB message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestTestB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestTestB;

        /**
         * Decodes a RequestTestB message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestTestB
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestTestB;

        /**
         * Verifies a RequestTestB message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestTestB message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestTestB
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestTestB;

        /**
         * Creates a plain object from a RequestTestB message. Also converts values to other types if specified.
         * @param message RequestTestB
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestTestB, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestTestB to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestTestBResult. */
    interface IRequestTestBResult {
    }

    /** Represents a RequestTestBResult. */
    class RequestTestBResult implements IRequestTestBResult {

        /**
         * Constructs a new RequestTestBResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestTestBResult);

        /**
         * Creates a new RequestTestBResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestTestBResult instance
         */
        public static create(properties?: CVP.IRequestTestBResult): CVP.RequestTestBResult;

        /**
         * Encodes the specified RequestTestBResult message. Does not implicitly {@link CVP.RequestTestBResult.verify|verify} messages.
         * @param message RequestTestBResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestTestBResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestTestBResult message, length delimited. Does not implicitly {@link CVP.RequestTestBResult.verify|verify} messages.
         * @param message RequestTestBResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestTestBResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestTestBResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestTestBResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestTestBResult;

        /**
         * Decodes a RequestTestBResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestTestBResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestTestBResult;

        /**
         * Verifies a RequestTestBResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestTestBResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestTestBResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestTestBResult;

        /**
         * Creates a plain object from a RequestTestBResult message. Also converts values to other types if specified.
         * @param message RequestTestBResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestTestBResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestTestBResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestTestC. */
    interface IRequestTestC {

        /** RequestTestC commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestTestC. */
    class RequestTestC implements IRequestTestC {

        /**
         * Constructs a new RequestTestC.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestTestC);

        /** RequestTestC commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestTestC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestTestC instance
         */
        public static create(properties?: CVP.IRequestTestC): CVP.RequestTestC;

        /**
         * Encodes the specified RequestTestC message. Does not implicitly {@link CVP.RequestTestC.verify|verify} messages.
         * @param message RequestTestC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestTestC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestTestC message, length delimited. Does not implicitly {@link CVP.RequestTestC.verify|verify} messages.
         * @param message RequestTestC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestTestC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestTestC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestTestC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestTestC;

        /**
         * Decodes a RequestTestC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestTestC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestTestC;

        /**
         * Verifies a RequestTestC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestTestC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestTestC
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestTestC;

        /**
         * Creates a plain object from a RequestTestC message. Also converts values to other types if specified.
         * @param message RequestTestC
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestTestC, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestTestC to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestTestCResult. */
    interface IRequestTestCResult {
    }

    /** Represents a RequestTestCResult. */
    class RequestTestCResult implements IRequestTestCResult {

        /**
         * Constructs a new RequestTestCResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestTestCResult);

        /**
         * Creates a new RequestTestCResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestTestCResult instance
         */
        public static create(properties?: CVP.IRequestTestCResult): CVP.RequestTestCResult;

        /**
         * Encodes the specified RequestTestCResult message. Does not implicitly {@link CVP.RequestTestCResult.verify|verify} messages.
         * @param message RequestTestCResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestTestCResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestTestCResult message, length delimited. Does not implicitly {@link CVP.RequestTestCResult.verify|verify} messages.
         * @param message RequestTestCResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestTestCResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestTestCResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestTestCResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestTestCResult;

        /**
         * Decodes a RequestTestCResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestTestCResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestTestCResult;

        /**
         * Verifies a RequestTestCResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestTestCResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestTestCResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestTestCResult;

        /**
         * Creates a plain object from a RequestTestCResult message. Also converts values to other types if specified.
         * @param message RequestTestCResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestTestCResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestTestCResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestRecoverMsg. */
    interface IRequestRecoverMsg {

        /** RequestRecoverMsg lastMsgIdx */
        lastMsgIdx?: (number|Long|null);

        /** RequestRecoverMsg msgList */
        msgList?: (CVP.IReoveredMsg[]|null);
    }

    /** Represents a RequestRecoverMsg. */
    class RequestRecoverMsg implements IRequestRecoverMsg {

        /**
         * Constructs a new RequestRecoverMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestRecoverMsg);

        /** RequestRecoverMsg lastMsgIdx. */
        public lastMsgIdx: (number|Long);

        /** RequestRecoverMsg msgList. */
        public msgList: CVP.IReoveredMsg[];

        /**
         * Creates a new RequestRecoverMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestRecoverMsg instance
         */
        public static create(properties?: CVP.IRequestRecoverMsg): CVP.RequestRecoverMsg;

        /**
         * Encodes the specified RequestRecoverMsg message. Does not implicitly {@link CVP.RequestRecoverMsg.verify|verify} messages.
         * @param message RequestRecoverMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestRecoverMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestRecoverMsg message, length delimited. Does not implicitly {@link CVP.RequestRecoverMsg.verify|verify} messages.
         * @param message RequestRecoverMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestRecoverMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestRecoverMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestRecoverMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestRecoverMsg;

        /**
         * Decodes a RequestRecoverMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestRecoverMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestRecoverMsg;

        /**
         * Verifies a RequestRecoverMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestRecoverMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestRecoverMsg
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestRecoverMsg;

        /**
         * Creates a plain object from a RequestRecoverMsg message. Also converts values to other types if specified.
         * @param message RequestRecoverMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestRecoverMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestRecoverMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReoveredMsg. */
    interface IReoveredMsg {

        /** ReoveredMsg cmd */
        cmd?: (string|null);

        /** ReoveredMsg msg */
        msg?: (string|null);
    }

    /** Represents a ReoveredMsg. */
    class ReoveredMsg implements IReoveredMsg {

        /**
         * Constructs a new ReoveredMsg.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IReoveredMsg);

        /** ReoveredMsg cmd. */
        public cmd: string;

        /** ReoveredMsg msg. */
        public msg: string;

        /**
         * Creates a new ReoveredMsg instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReoveredMsg instance
         */
        public static create(properties?: CVP.IReoveredMsg): CVP.ReoveredMsg;

        /**
         * Encodes the specified ReoveredMsg message. Does not implicitly {@link CVP.ReoveredMsg.verify|verify} messages.
         * @param message ReoveredMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IReoveredMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReoveredMsg message, length delimited. Does not implicitly {@link CVP.ReoveredMsg.verify|verify} messages.
         * @param message ReoveredMsg message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IReoveredMsg, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReoveredMsg message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReoveredMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.ReoveredMsg;

        /**
         * Decodes a ReoveredMsg message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReoveredMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.ReoveredMsg;

        /**
         * Verifies a ReoveredMsg message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReoveredMsg message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReoveredMsg
         */
        public static fromObject(object: { [k: string]: any }): CVP.ReoveredMsg;

        /**
         * Creates a plain object from a ReoveredMsg message. Also converts values to other types if specified.
         * @param message ReoveredMsg
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.ReoveredMsg, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReoveredMsg to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestRecoverMsgResult. */
    interface IRequestRecoverMsgResult {

        /** RequestRecoverMsgResult msgList */
        msgList?: (CVP.IReoveredMsg[]|null);
    }

    /** Represents a RequestRecoverMsgResult. */
    class RequestRecoverMsgResult implements IRequestRecoverMsgResult {

        /**
         * Constructs a new RequestRecoverMsgResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestRecoverMsgResult);

        /** RequestRecoverMsgResult msgList. */
        public msgList: CVP.IReoveredMsg[];

        /**
         * Creates a new RequestRecoverMsgResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestRecoverMsgResult instance
         */
        public static create(properties?: CVP.IRequestRecoverMsgResult): CVP.RequestRecoverMsgResult;

        /**
         * Encodes the specified RequestRecoverMsgResult message. Does not implicitly {@link CVP.RequestRecoverMsgResult.verify|verify} messages.
         * @param message RequestRecoverMsgResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestRecoverMsgResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestRecoverMsgResult message, length delimited. Does not implicitly {@link CVP.RequestRecoverMsgResult.verify|verify} messages.
         * @param message RequestRecoverMsgResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestRecoverMsgResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestRecoverMsgResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestRecoverMsgResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestRecoverMsgResult;

        /**
         * Decodes a RequestRecoverMsgResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestRecoverMsgResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestRecoverMsgResult;

        /**
         * Verifies a RequestRecoverMsgResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestRecoverMsgResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestRecoverMsgResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestRecoverMsgResult;

        /**
         * Creates a plain object from a RequestRecoverMsgResult message. Also converts values to other types if specified.
         * @param message RequestRecoverMsgResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestRecoverMsgResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestRecoverMsgResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestStartPayment. */
    interface IRequestStartPayment {

        /** RequestStartPayment commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestStartPayment itemId */
        itemId?: (string|null);
    }

    /** Represents a RequestStartPayment. */
    class RequestStartPayment implements IRequestStartPayment {

        /**
         * Constructs a new RequestStartPayment.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestStartPayment);

        /** RequestStartPayment commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestStartPayment itemId. */
        public itemId: string;

        /**
         * Creates a new RequestStartPayment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestStartPayment instance
         */
        public static create(properties?: CVP.IRequestStartPayment): CVP.RequestStartPayment;

        /**
         * Encodes the specified RequestStartPayment message. Does not implicitly {@link CVP.RequestStartPayment.verify|verify} messages.
         * @param message RequestStartPayment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestStartPayment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestStartPayment message, length delimited. Does not implicitly {@link CVP.RequestStartPayment.verify|verify} messages.
         * @param message RequestStartPayment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestStartPayment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestStartPayment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestStartPayment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestStartPayment;

        /**
         * Decodes a RequestStartPayment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestStartPayment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestStartPayment;

        /**
         * Verifies a RequestStartPayment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestStartPayment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestStartPayment
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestStartPayment;

        /**
         * Creates a plain object from a RequestStartPayment message. Also converts values to other types if specified.
         * @param message RequestStartPayment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestStartPayment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestStartPayment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestStartPaymentResult. */
    interface IRequestStartPaymentResult {

        /** RequestStartPaymentResult paymentId */
        paymentId?: (string|null);
    }

    /** Represents a RequestStartPaymentResult. */
    class RequestStartPaymentResult implements IRequestStartPaymentResult {

        /**
         * Constructs a new RequestStartPaymentResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestStartPaymentResult);

        /** RequestStartPaymentResult paymentId. */
        public paymentId: string;

        /**
         * Creates a new RequestStartPaymentResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestStartPaymentResult instance
         */
        public static create(properties?: CVP.IRequestStartPaymentResult): CVP.RequestStartPaymentResult;

        /**
         * Encodes the specified RequestStartPaymentResult message. Does not implicitly {@link CVP.RequestStartPaymentResult.verify|verify} messages.
         * @param message RequestStartPaymentResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestStartPaymentResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestStartPaymentResult message, length delimited. Does not implicitly {@link CVP.RequestStartPaymentResult.verify|verify} messages.
         * @param message RequestStartPaymentResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestStartPaymentResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestStartPaymentResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestStartPaymentResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestStartPaymentResult;

        /**
         * Decodes a RequestStartPaymentResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestStartPaymentResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestStartPaymentResult;

        /**
         * Verifies a RequestStartPaymentResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestStartPaymentResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestStartPaymentResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestStartPaymentResult;

        /**
         * Creates a plain object from a RequestStartPaymentResult message. Also converts values to other types if specified.
         * @param message RequestStartPaymentResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestStartPaymentResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestStartPaymentResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** PaymentState enum. */
    enum PaymentState {
        FAILED = 0,
        SUCCESS = 1,
        CANCELED = 2,
        OWNED = 3,
        RECEIPT_EMPTY = 4,
        RECEIPT_REFRESH_ERROR = 5
    }

    /** Properties of a RequestVerifyPayment. */
    interface IRequestVerifyPayment {

        /** RequestVerifyPayment commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestVerifyPayment paymentId */
        paymentId?: (string|null);

        /** RequestVerifyPayment state */
        state?: (CVP.PaymentState|null);

        /** RequestVerifyPayment signature */
        signature?: (string|null);

        /** RequestVerifyPayment receipt */
        receipt?: (string|null);

        /** RequestVerifyPayment errorMsg */
        errorMsg?: (string|null);

        /** RequestVerifyPayment debug */
        debug?: (boolean|null);
    }

    /** Represents a RequestVerifyPayment. */
    class RequestVerifyPayment implements IRequestVerifyPayment {

        /**
         * Constructs a new RequestVerifyPayment.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestVerifyPayment);

        /** RequestVerifyPayment commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestVerifyPayment paymentId. */
        public paymentId: string;

        /** RequestVerifyPayment state. */
        public state: CVP.PaymentState;

        /** RequestVerifyPayment signature. */
        public signature: string;

        /** RequestVerifyPayment receipt. */
        public receipt: string;

        /** RequestVerifyPayment errorMsg. */
        public errorMsg: string;

        /** RequestVerifyPayment debug. */
        public debug: boolean;

        /**
         * Creates a new RequestVerifyPayment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestVerifyPayment instance
         */
        public static create(properties?: CVP.IRequestVerifyPayment): CVP.RequestVerifyPayment;

        /**
         * Encodes the specified RequestVerifyPayment message. Does not implicitly {@link CVP.RequestVerifyPayment.verify|verify} messages.
         * @param message RequestVerifyPayment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestVerifyPayment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestVerifyPayment message, length delimited. Does not implicitly {@link CVP.RequestVerifyPayment.verify|verify} messages.
         * @param message RequestVerifyPayment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestVerifyPayment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestVerifyPayment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestVerifyPayment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestVerifyPayment;

        /**
         * Decodes a RequestVerifyPayment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestVerifyPayment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestVerifyPayment;

        /**
         * Verifies a RequestVerifyPayment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestVerifyPayment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestVerifyPayment
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestVerifyPayment;

        /**
         * Creates a plain object from a RequestVerifyPayment message. Also converts values to other types if specified.
         * @param message RequestVerifyPayment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestVerifyPayment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestVerifyPayment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestVerifyPaymentResult. */
    interface IRequestVerifyPaymentResult {

        /** RequestVerifyPaymentResult state */
        state?: (CVP.PaymentState|null);

        /** RequestVerifyPaymentResult item */
        item?: (CVP.IItemInfo|null);

        /** RequestVerifyPaymentResult payNumnber */
        payNumnber?: (number|null);
    }

    /** Represents a RequestVerifyPaymentResult. */
    class RequestVerifyPaymentResult implements IRequestVerifyPaymentResult {

        /**
         * Constructs a new RequestVerifyPaymentResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestVerifyPaymentResult);

        /** RequestVerifyPaymentResult state. */
        public state: CVP.PaymentState;

        /** RequestVerifyPaymentResult item. */
        public item?: (CVP.IItemInfo|null);

        /** RequestVerifyPaymentResult payNumnber. */
        public payNumnber: number;

        /**
         * Creates a new RequestVerifyPaymentResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestVerifyPaymentResult instance
         */
        public static create(properties?: CVP.IRequestVerifyPaymentResult): CVP.RequestVerifyPaymentResult;

        /**
         * Encodes the specified RequestVerifyPaymentResult message. Does not implicitly {@link CVP.RequestVerifyPaymentResult.verify|verify} messages.
         * @param message RequestVerifyPaymentResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestVerifyPaymentResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestVerifyPaymentResult message, length delimited. Does not implicitly {@link CVP.RequestVerifyPaymentResult.verify|verify} messages.
         * @param message RequestVerifyPaymentResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestVerifyPaymentResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestVerifyPaymentResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestVerifyPaymentResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestVerifyPaymentResult;

        /**
         * Decodes a RequestVerifyPaymentResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestVerifyPaymentResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestVerifyPaymentResult;

        /**
         * Verifies a RequestVerifyPaymentResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestVerifyPaymentResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestVerifyPaymentResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestVerifyPaymentResult;

        /**
         * Creates a plain object from a RequestVerifyPaymentResult message. Also converts values to other types if specified.
         * @param message RequestVerifyPaymentResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestVerifyPaymentResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestVerifyPaymentResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a getPurchaseResult. */
    interface IgetPurchaseResult {

        /** getPurchaseResult orderNo */
        orderNo?: (string|null);

        /** getPurchaseResult purchaseData */
        purchaseData?: (string|null);

        /** getPurchaseResult signatureData */
        signatureData?: (string|null);

        /** getPurchaseResult packageName */
        packageName?: (string|null);
    }

    /** Represents a getPurchaseResult. */
    class getPurchaseResult implements IgetPurchaseResult {

        /**
         * Constructs a new getPurchaseResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IgetPurchaseResult);

        /** getPurchaseResult orderNo. */
        public orderNo: string;

        /** getPurchaseResult purchaseData. */
        public purchaseData: string;

        /** getPurchaseResult signatureData. */
        public signatureData: string;

        /** getPurchaseResult packageName. */
        public packageName: string;

        /**
         * Creates a new getPurchaseResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns getPurchaseResult instance
         */
        public static create(properties?: CVP.IgetPurchaseResult): CVP.getPurchaseResult;

        /**
         * Encodes the specified getPurchaseResult message. Does not implicitly {@link CVP.getPurchaseResult.verify|verify} messages.
         * @param message getPurchaseResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IgetPurchaseResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified getPurchaseResult message, length delimited. Does not implicitly {@link CVP.getPurchaseResult.verify|verify} messages.
         * @param message getPurchaseResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IgetPurchaseResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a getPurchaseResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns getPurchaseResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.getPurchaseResult;

        /**
         * Decodes a getPurchaseResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns getPurchaseResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.getPurchaseResult;

        /**
         * Verifies a getPurchaseResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a getPurchaseResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns getPurchaseResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.getPurchaseResult;

        /**
         * Creates a plain object from a getPurchaseResult message. Also converts values to other types if specified.
         * @param message getPurchaseResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.getPurchaseResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this getPurchaseResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestNewOrder. */
    interface IRequestNewOrder {

        /** RequestNewOrder billingCode */
        billingCode?: (string|null);

        /** RequestNewOrder paymentId */
        paymentId?: (number|null);

        /** RequestNewOrder sku */
        sku?: (string|null);

        /** RequestNewOrder extraInfo */
        extraInfo?: (string|null);
    }

    /** Represents a RequestNewOrder. */
    class RequestNewOrder implements IRequestNewOrder {

        /**
         * Constructs a new RequestNewOrder.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestNewOrder);

        /** RequestNewOrder billingCode. */
        public billingCode: string;

        /** RequestNewOrder paymentId. */
        public paymentId: number;

        /** RequestNewOrder sku. */
        public sku: string;

        /** RequestNewOrder extraInfo. */
        public extraInfo: string;

        /**
         * Creates a new RequestNewOrder instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestNewOrder instance
         */
        public static create(properties?: CVP.IRequestNewOrder): CVP.RequestNewOrder;

        /**
         * Encodes the specified RequestNewOrder message. Does not implicitly {@link CVP.RequestNewOrder.verify|verify} messages.
         * @param message RequestNewOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestNewOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestNewOrder message, length delimited. Does not implicitly {@link CVP.RequestNewOrder.verify|verify} messages.
         * @param message RequestNewOrder message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestNewOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestNewOrder message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestNewOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestNewOrder;

        /**
         * Decodes a RequestNewOrder message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestNewOrder
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestNewOrder;

        /**
         * Verifies a RequestNewOrder message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestNewOrder message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestNewOrder
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestNewOrder;

        /**
         * Creates a plain object from a RequestNewOrder message. Also converts values to other types if specified.
         * @param message RequestNewOrder
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestNewOrder, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestNewOrder to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestPurchaseResult. */
    interface IRequestPurchaseResult {

        /** RequestPurchaseResult debugUser */
        debugUser?: (boolean|null);

        /** RequestPurchaseResult goodsList */
        goodsList?: (CVP.IGoodsList[]|null);
    }

    /** Represents a RequestPurchaseResult. */
    class RequestPurchaseResult implements IRequestPurchaseResult {

        /**
         * Constructs a new RequestPurchaseResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestPurchaseResult);

        /** RequestPurchaseResult debugUser. */
        public debugUser: boolean;

        /** RequestPurchaseResult goodsList. */
        public goodsList: CVP.IGoodsList[];

        /**
         * Creates a new RequestPurchaseResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestPurchaseResult instance
         */
        public static create(properties?: CVP.IRequestPurchaseResult): CVP.RequestPurchaseResult;

        /**
         * Encodes the specified RequestPurchaseResult message. Does not implicitly {@link CVP.RequestPurchaseResult.verify|verify} messages.
         * @param message RequestPurchaseResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestPurchaseResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestPurchaseResult message, length delimited. Does not implicitly {@link CVP.RequestPurchaseResult.verify|verify} messages.
         * @param message RequestPurchaseResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestPurchaseResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestPurchaseResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestPurchaseResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestPurchaseResult;

        /**
         * Decodes a RequestPurchaseResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestPurchaseResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestPurchaseResult;

        /**
         * Verifies a RequestPurchaseResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestPurchaseResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestPurchaseResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestPurchaseResult;

        /**
         * Creates a plain object from a RequestPurchaseResult message. Also converts values to other types if specified.
         * @param message RequestPurchaseResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestPurchaseResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestPurchaseResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GoodsList. */
    interface IGoodsList {

        /** GoodsList goodsCode */
        goodsCode?: (string|null);

        /** GoodsList amount */
        amount?: (number|null);

        /** GoodsList extraInfo */
        extraInfo?: (string|null);

        /** GoodsList balance */
        balance?: (number|null);
    }

    /** Represents a GoodsList. */
    class GoodsList implements IGoodsList {

        /**
         * Constructs a new GoodsList.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IGoodsList);

        /** GoodsList goodsCode. */
        public goodsCode: string;

        /** GoodsList amount. */
        public amount: number;

        /** GoodsList extraInfo. */
        public extraInfo: string;

        /** GoodsList balance. */
        public balance: number;

        /**
         * Creates a new GoodsList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GoodsList instance
         */
        public static create(properties?: CVP.IGoodsList): CVP.GoodsList;

        /**
         * Encodes the specified GoodsList message. Does not implicitly {@link CVP.GoodsList.verify|verify} messages.
         * @param message GoodsList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IGoodsList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GoodsList message, length delimited. Does not implicitly {@link CVP.GoodsList.verify|verify} messages.
         * @param message GoodsList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IGoodsList, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GoodsList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GoodsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.GoodsList;

        /**
         * Decodes a GoodsList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GoodsList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.GoodsList;

        /**
         * Verifies a GoodsList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GoodsList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GoodsList
         */
        public static fromObject(object: { [k: string]: any }): CVP.GoodsList;

        /**
         * Creates a plain object from a GoodsList message. Also converts values to other types if specified.
         * @param message GoodsList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.GoodsList, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GoodsList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a sendGoods. */
    interface IsendGoods {

        /** sendGoods orderNo */
        orderNo?: (string|null);

        /** sendGoods packageName */
        packageName?: (string|null);

        /** sendGoods goodsList */
        goodsList?: (CVP.IGoodsList1[]|null);

        /** sendGoods billingCode */
        billingCode?: (string|null);
    }

    /** Represents a sendGoods. */
    class sendGoods implements IsendGoods {

        /**
         * Constructs a new sendGoods.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IsendGoods);

        /** sendGoods orderNo. */
        public orderNo: string;

        /** sendGoods packageName. */
        public packageName: string;

        /** sendGoods goodsList. */
        public goodsList: CVP.IGoodsList1[];

        /** sendGoods billingCode. */
        public billingCode: string;

        /**
         * Creates a new sendGoods instance using the specified properties.
         * @param [properties] Properties to set
         * @returns sendGoods instance
         */
        public static create(properties?: CVP.IsendGoods): CVP.sendGoods;

        /**
         * Encodes the specified sendGoods message. Does not implicitly {@link CVP.sendGoods.verify|verify} messages.
         * @param message sendGoods message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IsendGoods, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified sendGoods message, length delimited. Does not implicitly {@link CVP.sendGoods.verify|verify} messages.
         * @param message sendGoods message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IsendGoods, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a sendGoods message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns sendGoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.sendGoods;

        /**
         * Decodes a sendGoods message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns sendGoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.sendGoods;

        /**
         * Verifies a sendGoods message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a sendGoods message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns sendGoods
         */
        public static fromObject(object: { [k: string]: any }): CVP.sendGoods;

        /**
         * Creates a plain object from a sendGoods message. Also converts values to other types if specified.
         * @param message sendGoods
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.sendGoods, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this sendGoods to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GoodsList1. */
    interface IGoodsList1 {

        /** GoodsList1 goodsCode */
        goodsCode?: (string|null);

        /** GoodsList1 amount */
        amount?: (number|null);
    }

    /** Represents a GoodsList1. */
    class GoodsList1 implements IGoodsList1 {

        /**
         * Constructs a new GoodsList1.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IGoodsList1);

        /** GoodsList1 goodsCode. */
        public goodsCode: string;

        /** GoodsList1 amount. */
        public amount: number;

        /**
         * Creates a new GoodsList1 instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GoodsList1 instance
         */
        public static create(properties?: CVP.IGoodsList1): CVP.GoodsList1;

        /**
         * Encodes the specified GoodsList1 message. Does not implicitly {@link CVP.GoodsList1.verify|verify} messages.
         * @param message GoodsList1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IGoodsList1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GoodsList1 message, length delimited. Does not implicitly {@link CVP.GoodsList1.verify|verify} messages.
         * @param message GoodsList1 message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IGoodsList1, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GoodsList1 message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GoodsList1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.GoodsList1;

        /**
         * Decodes a GoodsList1 message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GoodsList1
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.GoodsList1;

        /**
         * Verifies a GoodsList1 message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GoodsList1 message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GoodsList1
         */
        public static fromObject(object: { [k: string]: any }): CVP.GoodsList1;

        /**
         * Creates a plain object from a GoodsList1 message. Also converts values to other types if specified.
         * @param message GoodsList1
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.GoodsList1, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GoodsList1 to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestPig. */
    interface IRequestPig {

        /** RequestPig commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestPig. */
    class RequestPig implements IRequestPig {

        /**
         * Constructs a new RequestPig.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestPig);

        /** RequestPig commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestPig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestPig instance
         */
        public static create(properties?: CVP.IRequestPig): CVP.RequestPig;

        /**
         * Encodes the specified RequestPig message. Does not implicitly {@link CVP.RequestPig.verify|verify} messages.
         * @param message RequestPig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestPig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestPig message, length delimited. Does not implicitly {@link CVP.RequestPig.verify|verify} messages.
         * @param message RequestPig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestPig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestPig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestPig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestPig;

        /**
         * Decodes a RequestPig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestPig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestPig;

        /**
         * Verifies a RequestPig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestPig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestPig
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestPig;

        /**
         * Creates a plain object from a RequestPig message. Also converts values to other types if specified.
         * @param message RequestPig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestPig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestPig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestPigResult. */
    interface IRequestPigResult {

        /** RequestPigResult pigInfoList */
        pigInfoList?: (CVP.IPigItem[]|null);
    }

    /** Represents a RequestPigResult. */
    class RequestPigResult implements IRequestPigResult {

        /**
         * Constructs a new RequestPigResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestPigResult);

        /** RequestPigResult pigInfoList. */
        public pigInfoList: CVP.IPigItem[];

        /**
         * Creates a new RequestPigResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestPigResult instance
         */
        public static create(properties?: CVP.IRequestPigResult): CVP.RequestPigResult;

        /**
         * Encodes the specified RequestPigResult message. Does not implicitly {@link CVP.RequestPigResult.verify|verify} messages.
         * @param message RequestPigResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestPigResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestPigResult message, length delimited. Does not implicitly {@link CVP.RequestPigResult.verify|verify} messages.
         * @param message RequestPigResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestPigResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestPigResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestPigResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestPigResult;

        /**
         * Decodes a RequestPigResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestPigResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestPigResult;

        /**
         * Verifies a RequestPigResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestPigResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestPigResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestPigResult;

        /**
         * Creates a plain object from a RequestPigResult message. Also converts values to other types if specified.
         * @param message RequestPigResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestPigResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestPigResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdatePig. */
    interface IUpdatePig {

        /** UpdatePig pig */
        pig?: (CVP.ItemType|null);
    }

    /** Represents an UpdatePig. */
    class UpdatePig implements IUpdatePig {

        /**
         * Constructs a new UpdatePig.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IUpdatePig);

        /** UpdatePig pig. */
        public pig: CVP.ItemType;

        /**
         * Creates a new UpdatePig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdatePig instance
         */
        public static create(properties?: CVP.IUpdatePig): CVP.UpdatePig;

        /**
         * Encodes the specified UpdatePig message. Does not implicitly {@link CVP.UpdatePig.verify|verify} messages.
         * @param message UpdatePig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IUpdatePig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdatePig message, length delimited. Does not implicitly {@link CVP.UpdatePig.verify|verify} messages.
         * @param message UpdatePig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IUpdatePig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdatePig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdatePig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.UpdatePig;

        /**
         * Decodes an UpdatePig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdatePig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.UpdatePig;

        /**
         * Verifies an UpdatePig message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdatePig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdatePig
         */
        public static fromObject(object: { [k: string]: any }): CVP.UpdatePig;

        /**
         * Creates a plain object from an UpdatePig message. Also converts values to other types if specified.
         * @param message UpdatePig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.UpdatePig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdatePig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** PrivateVaultType enum. */
    enum PrivateVaultType {
        YESTERDAY = 1,
        TODAY = 2
    }

    /** Properties of a RequestPrivateVault. */
    interface IRequestPrivateVault {

        /** RequestPrivateVault commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestPrivateVault. */
    class RequestPrivateVault implements IRequestPrivateVault {

        /**
         * Constructs a new RequestPrivateVault.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestPrivateVault);

        /** RequestPrivateVault commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestPrivateVault instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestPrivateVault instance
         */
        public static create(properties?: CVP.IRequestPrivateVault): CVP.RequestPrivateVault;

        /**
         * Encodes the specified RequestPrivateVault message. Does not implicitly {@link CVP.RequestPrivateVault.verify|verify} messages.
         * @param message RequestPrivateVault message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestPrivateVault, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestPrivateVault message, length delimited. Does not implicitly {@link CVP.RequestPrivateVault.verify|verify} messages.
         * @param message RequestPrivateVault message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestPrivateVault, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestPrivateVault message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestPrivateVault
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestPrivateVault;

        /**
         * Decodes a RequestPrivateVault message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestPrivateVault
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestPrivateVault;

        /**
         * Verifies a RequestPrivateVault message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestPrivateVault message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestPrivateVault
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestPrivateVault;

        /**
         * Creates a plain object from a RequestPrivateVault message. Also converts values to other types if specified.
         * @param message RequestPrivateVault
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestPrivateVault, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestPrivateVault to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestPrivateVaultResult. */
    interface IRequestPrivateVaultResult {

        /** RequestPrivateVaultResult yesterdayCoins */
        yesterdayCoins?: (number|null);

        /** RequestPrivateVaultResult todayCoins */
        todayCoins?: (number|null);

        /** RequestPrivateVaultResult keyInfoList */
        keyInfoList?: (CVP.IKeyItem[]|null);
    }

    /** Represents a RequestPrivateVaultResult. */
    class RequestPrivateVaultResult implements IRequestPrivateVaultResult {

        /**
         * Constructs a new RequestPrivateVaultResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestPrivateVaultResult);

        /** RequestPrivateVaultResult yesterdayCoins. */
        public yesterdayCoins: number;

        /** RequestPrivateVaultResult todayCoins. */
        public todayCoins: number;

        /** RequestPrivateVaultResult keyInfoList. */
        public keyInfoList: CVP.IKeyItem[];

        /**
         * Creates a new RequestPrivateVaultResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestPrivateVaultResult instance
         */
        public static create(properties?: CVP.IRequestPrivateVaultResult): CVP.RequestPrivateVaultResult;

        /**
         * Encodes the specified RequestPrivateVaultResult message. Does not implicitly {@link CVP.RequestPrivateVaultResult.verify|verify} messages.
         * @param message RequestPrivateVaultResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestPrivateVaultResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestPrivateVaultResult message, length delimited. Does not implicitly {@link CVP.RequestPrivateVaultResult.verify|verify} messages.
         * @param message RequestPrivateVaultResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestPrivateVaultResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestPrivateVaultResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestPrivateVaultResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestPrivateVaultResult;

        /**
         * Decodes a RequestPrivateVaultResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestPrivateVaultResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestPrivateVaultResult;

        /**
         * Verifies a RequestPrivateVaultResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestPrivateVaultResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestPrivateVaultResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestPrivateVaultResult;

        /**
         * Creates a plain object from a RequestPrivateVaultResult message. Also converts values to other types if specified.
         * @param message RequestPrivateVaultResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestPrivateVaultResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestPrivateVaultResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestOpenPrivateVault. */
    interface IRequestOpenPrivateVault {

        /** RequestOpenPrivateVault commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestOpenPrivateVault privateVaultType */
        privateVaultType?: (CVP.PrivateVaultType|null);
    }

    /** Represents a RequestOpenPrivateVault. */
    class RequestOpenPrivateVault implements IRequestOpenPrivateVault {

        /**
         * Constructs a new RequestOpenPrivateVault.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestOpenPrivateVault);

        /** RequestOpenPrivateVault commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestOpenPrivateVault privateVaultType. */
        public privateVaultType: CVP.PrivateVaultType;

        /**
         * Creates a new RequestOpenPrivateVault instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestOpenPrivateVault instance
         */
        public static create(properties?: CVP.IRequestOpenPrivateVault): CVP.RequestOpenPrivateVault;

        /**
         * Encodes the specified RequestOpenPrivateVault message. Does not implicitly {@link CVP.RequestOpenPrivateVault.verify|verify} messages.
         * @param message RequestOpenPrivateVault message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestOpenPrivateVault, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestOpenPrivateVault message, length delimited. Does not implicitly {@link CVP.RequestOpenPrivateVault.verify|verify} messages.
         * @param message RequestOpenPrivateVault message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestOpenPrivateVault, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestOpenPrivateVault message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestOpenPrivateVault
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestOpenPrivateVault;

        /**
         * Decodes a RequestOpenPrivateVault message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestOpenPrivateVault
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestOpenPrivateVault;

        /**
         * Verifies a RequestOpenPrivateVault message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestOpenPrivateVault message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestOpenPrivateVault
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestOpenPrivateVault;

        /**
         * Creates a plain object from a RequestOpenPrivateVault message. Also converts values to other types if specified.
         * @param message RequestOpenPrivateVault
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestOpenPrivateVault, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestOpenPrivateVault to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestOpenPrivateVaultResult. */
    interface IRequestOpenPrivateVaultResult {

        /** RequestOpenPrivateVaultResult getCoins */
        getCoins?: (number|null);
    }

    /** Represents a RequestOpenPrivateVaultResult. */
    class RequestOpenPrivateVaultResult implements IRequestOpenPrivateVaultResult {

        /**
         * Constructs a new RequestOpenPrivateVaultResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestOpenPrivateVaultResult);

        /** RequestOpenPrivateVaultResult getCoins. */
        public getCoins: number;

        /**
         * Creates a new RequestOpenPrivateVaultResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestOpenPrivateVaultResult instance
         */
        public static create(properties?: CVP.IRequestOpenPrivateVaultResult): CVP.RequestOpenPrivateVaultResult;

        /**
         * Encodes the specified RequestOpenPrivateVaultResult message. Does not implicitly {@link CVP.RequestOpenPrivateVaultResult.verify|verify} messages.
         * @param message RequestOpenPrivateVaultResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestOpenPrivateVaultResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestOpenPrivateVaultResult message, length delimited. Does not implicitly {@link CVP.RequestOpenPrivateVaultResult.verify|verify} messages.
         * @param message RequestOpenPrivateVaultResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestOpenPrivateVaultResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestOpenPrivateVaultResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestOpenPrivateVaultResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestOpenPrivateVaultResult;

        /**
         * Decodes a RequestOpenPrivateVaultResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestOpenPrivateVaultResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestOpenPrivateVaultResult;

        /**
         * Verifies a RequestOpenPrivateVaultResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestOpenPrivateVaultResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestOpenPrivateVaultResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestOpenPrivateVaultResult;

        /**
         * Creates a plain object from a RequestOpenPrivateVaultResult message. Also converts values to other types if specified.
         * @param message RequestOpenPrivateVaultResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestOpenPrivateVaultResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestOpenPrivateVaultResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdatePrivateVault. */
    interface IUpdatePrivateVault {

        /** UpdatePrivateVault canOpen */
        canOpen?: (boolean|null);
    }

    /** Represents an UpdatePrivateVault. */
    class UpdatePrivateVault implements IUpdatePrivateVault {

        /**
         * Constructs a new UpdatePrivateVault.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IUpdatePrivateVault);

        /** UpdatePrivateVault canOpen. */
        public canOpen: boolean;

        /**
         * Creates a new UpdatePrivateVault instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdatePrivateVault instance
         */
        public static create(properties?: CVP.IUpdatePrivateVault): CVP.UpdatePrivateVault;

        /**
         * Encodes the specified UpdatePrivateVault message. Does not implicitly {@link CVP.UpdatePrivateVault.verify|verify} messages.
         * @param message UpdatePrivateVault message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IUpdatePrivateVault, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdatePrivateVault message, length delimited. Does not implicitly {@link CVP.UpdatePrivateVault.verify|verify} messages.
         * @param message UpdatePrivateVault message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IUpdatePrivateVault, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdatePrivateVault message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdatePrivateVault
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.UpdatePrivateVault;

        /**
         * Decodes an UpdatePrivateVault message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdatePrivateVault
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.UpdatePrivateVault;

        /**
         * Verifies an UpdatePrivateVault message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdatePrivateVault message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdatePrivateVault
         */
        public static fromObject(object: { [k: string]: any }): CVP.UpdatePrivateVault;

        /**
         * Creates a plain object from an UpdatePrivateVault message. Also converts values to other types if specified.
         * @param message UpdatePrivateVault
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.UpdatePrivateVault, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdatePrivateVault to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendRateUs. */
    interface ISendRateUs {

        /** SendRateUs userId */
        userId?: (number|null);

        /** SendRateUs star */
        star?: (number|null);
    }

    /** Represents a SendRateUs. */
    class SendRateUs implements ISendRateUs {

        /**
         * Constructs a new SendRateUs.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.ISendRateUs);

        /** SendRateUs userId. */
        public userId: number;

        /** SendRateUs star. */
        public star: number;

        /**
         * Creates a new SendRateUs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendRateUs instance
         */
        public static create(properties?: CVP.ISendRateUs): CVP.SendRateUs;

        /**
         * Encodes the specified SendRateUs message. Does not implicitly {@link CVP.SendRateUs.verify|verify} messages.
         * @param message SendRateUs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.ISendRateUs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendRateUs message, length delimited. Does not implicitly {@link CVP.SendRateUs.verify|verify} messages.
         * @param message SendRateUs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.ISendRateUs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendRateUs message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendRateUs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.SendRateUs;

        /**
         * Decodes a SendRateUs message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendRateUs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.SendRateUs;

        /**
         * Verifies a SendRateUs message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendRateUs message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendRateUs
         */
        public static fromObject(object: { [k: string]: any }): CVP.SendRateUs;

        /**
         * Creates a plain object from a SendRateUs message. Also converts values to other types if specified.
         * @param message SendRateUs
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.SendRateUs, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendRateUs to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateRateUs. */
    interface IUpdateRateUs {
    }

    /** Represents an UpdateRateUs. */
    class UpdateRateUs implements IUpdateRateUs {

        /**
         * Constructs a new UpdateRateUs.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IUpdateRateUs);

        /**
         * Creates a new UpdateRateUs instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateRateUs instance
         */
        public static create(properties?: CVP.IUpdateRateUs): CVP.UpdateRateUs;

        /**
         * Encodes the specified UpdateRateUs message. Does not implicitly {@link CVP.UpdateRateUs.verify|verify} messages.
         * @param message UpdateRateUs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IUpdateRateUs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateRateUs message, length delimited. Does not implicitly {@link CVP.UpdateRateUs.verify|verify} messages.
         * @param message UpdateRateUs message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IUpdateRateUs, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateRateUs message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateRateUs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.UpdateRateUs;

        /**
         * Decodes an UpdateRateUs message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateRateUs
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.UpdateRateUs;

        /**
         * Verifies an UpdateRateUs message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateRateUs message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateRateUs
         */
        public static fromObject(object: { [k: string]: any }): CVP.UpdateRateUs;

        /**
         * Creates a plain object from an UpdateRateUs message. Also converts values to other types if specified.
         * @param message UpdateRateUs
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.UpdateRateUs, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateRateUs to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestScratchCard. */
    interface IRequestScratchCard {

        /** RequestScratchCard commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestScratchCard. */
    class RequestScratchCard implements IRequestScratchCard {

        /**
         * Constructs a new RequestScratchCard.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestScratchCard);

        /** RequestScratchCard commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestScratchCard instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestScratchCard instance
         */
        public static create(properties?: CVP.IRequestScratchCard): CVP.RequestScratchCard;

        /**
         * Encodes the specified RequestScratchCard message. Does not implicitly {@link CVP.RequestScratchCard.verify|verify} messages.
         * @param message RequestScratchCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestScratchCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestScratchCard message, length delimited. Does not implicitly {@link CVP.RequestScratchCard.verify|verify} messages.
         * @param message RequestScratchCard message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestScratchCard, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestScratchCard message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestScratchCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestScratchCard;

        /**
         * Decodes a RequestScratchCard message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestScratchCard
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestScratchCard;

        /**
         * Verifies a RequestScratchCard message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestScratchCard message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestScratchCard
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestScratchCard;

        /**
         * Creates a plain object from a RequestScratchCard message. Also converts values to other types if specified.
         * @param message RequestScratchCard
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestScratchCard, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestScratchCard to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestScratchCardResult. */
    interface IRequestScratchCardResult {

        /** RequestScratchCardResult cardRewards */
        cardRewards?: (number[]|null);

        /** RequestScratchCardResult cardInfos */
        cardInfos?: (CVP.IItemInfo[]|null);
    }

    /** Represents a RequestScratchCardResult. */
    class RequestScratchCardResult implements IRequestScratchCardResult {

        /**
         * Constructs a new RequestScratchCardResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestScratchCardResult);

        /** RequestScratchCardResult cardRewards. */
        public cardRewards: number[];

        /** RequestScratchCardResult cardInfos. */
        public cardInfos: CVP.IItemInfo[];

        /**
         * Creates a new RequestScratchCardResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestScratchCardResult instance
         */
        public static create(properties?: CVP.IRequestScratchCardResult): CVP.RequestScratchCardResult;

        /**
         * Encodes the specified RequestScratchCardResult message. Does not implicitly {@link CVP.RequestScratchCardResult.verify|verify} messages.
         * @param message RequestScratchCardResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestScratchCardResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestScratchCardResult message, length delimited. Does not implicitly {@link CVP.RequestScratchCardResult.verify|verify} messages.
         * @param message RequestScratchCardResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestScratchCardResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestScratchCardResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestScratchCardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestScratchCardResult;

        /**
         * Decodes a RequestScratchCardResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestScratchCardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestScratchCardResult;

        /**
         * Verifies a RequestScratchCardResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestScratchCardResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestScratchCardResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestScratchCardResult;

        /**
         * Creates a plain object from a RequestScratchCardResult message. Also converts values to other types if specified.
         * @param message RequestScratchCardResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestScratchCardResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestScratchCardResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestScratchCardItems. */
    interface IRequestScratchCardItems {

        /** RequestScratchCardItems commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestScratchCardItems. */
    class RequestScratchCardItems implements IRequestScratchCardItems {

        /**
         * Constructs a new RequestScratchCardItems.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestScratchCardItems);

        /** RequestScratchCardItems commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestScratchCardItems instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestScratchCardItems instance
         */
        public static create(properties?: CVP.IRequestScratchCardItems): CVP.RequestScratchCardItems;

        /**
         * Encodes the specified RequestScratchCardItems message. Does not implicitly {@link CVP.RequestScratchCardItems.verify|verify} messages.
         * @param message RequestScratchCardItems message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestScratchCardItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestScratchCardItems message, length delimited. Does not implicitly {@link CVP.RequestScratchCardItems.verify|verify} messages.
         * @param message RequestScratchCardItems message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestScratchCardItems, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestScratchCardItems message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestScratchCardItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestScratchCardItems;

        /**
         * Decodes a RequestScratchCardItems message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestScratchCardItems
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestScratchCardItems;

        /**
         * Verifies a RequestScratchCardItems message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestScratchCardItems message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestScratchCardItems
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestScratchCardItems;

        /**
         * Creates a plain object from a RequestScratchCardItems message. Also converts values to other types if specified.
         * @param message RequestScratchCardItems
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestScratchCardItems, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestScratchCardItems to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestScratchCardItemsResult. */
    interface IRequestScratchCardItemsResult {

        /** RequestScratchCardItemsResult cardInfos */
        cardInfos?: (CVP.IItemInfo[]|null);
    }

    /** Represents a RequestScratchCardItemsResult. */
    class RequestScratchCardItemsResult implements IRequestScratchCardItemsResult {

        /**
         * Constructs a new RequestScratchCardItemsResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestScratchCardItemsResult);

        /** RequestScratchCardItemsResult cardInfos. */
        public cardInfos: CVP.IItemInfo[];

        /**
         * Creates a new RequestScratchCardItemsResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestScratchCardItemsResult instance
         */
        public static create(properties?: CVP.IRequestScratchCardItemsResult): CVP.RequestScratchCardItemsResult;

        /**
         * Encodes the specified RequestScratchCardItemsResult message. Does not implicitly {@link CVP.RequestScratchCardItemsResult.verify|verify} messages.
         * @param message RequestScratchCardItemsResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestScratchCardItemsResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestScratchCardItemsResult message, length delimited. Does not implicitly {@link CVP.RequestScratchCardItemsResult.verify|verify} messages.
         * @param message RequestScratchCardItemsResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestScratchCardItemsResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestScratchCardItemsResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestScratchCardItemsResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestScratchCardItemsResult;

        /**
         * Decodes a RequestScratchCardItemsResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestScratchCardItemsResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestScratchCardItemsResult;

        /**
         * Verifies a RequestScratchCardItemsResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestScratchCardItemsResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestScratchCardItemsResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestScratchCardItemsResult;

        /**
         * Creates a plain object from a RequestScratchCardItemsResult message. Also converts values to other types if specified.
         * @param message RequestScratchCardItemsResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestScratchCardItemsResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestScratchCardItemsResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestScratch. */
    interface IRequestScratch {

        /** RequestScratch commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestScratch. */
    class RequestScratch implements IRequestScratch {

        /**
         * Constructs a new RequestScratch.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestScratch);

        /** RequestScratch commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestScratch instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestScratch instance
         */
        public static create(properties?: CVP.IRequestScratch): CVP.RequestScratch;

        /**
         * Encodes the specified RequestScratch message. Does not implicitly {@link CVP.RequestScratch.verify|verify} messages.
         * @param message RequestScratch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestScratch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestScratch message, length delimited. Does not implicitly {@link CVP.RequestScratch.verify|verify} messages.
         * @param message RequestScratch message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestScratch, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestScratch message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestScratch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestScratch;

        /**
         * Decodes a RequestScratch message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestScratch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestScratch;

        /**
         * Verifies a RequestScratch message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestScratch message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestScratch
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestScratch;

        /**
         * Creates a plain object from a RequestScratch message. Also converts values to other types if specified.
         * @param message RequestScratch
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestScratch, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestScratch to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestScratchResult. */
    interface IRequestScratchResult {

        /** RequestScratchResult cardNumber */
        cardNumber?: (number|null);
    }

    /** Represents a RequestScratchResult. */
    class RequestScratchResult implements IRequestScratchResult {

        /**
         * Constructs a new RequestScratchResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestScratchResult);

        /** RequestScratchResult cardNumber. */
        public cardNumber: number;

        /**
         * Creates a new RequestScratchResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestScratchResult instance
         */
        public static create(properties?: CVP.IRequestScratchResult): CVP.RequestScratchResult;

        /**
         * Encodes the specified RequestScratchResult message. Does not implicitly {@link CVP.RequestScratchResult.verify|verify} messages.
         * @param message RequestScratchResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestScratchResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestScratchResult message, length delimited. Does not implicitly {@link CVP.RequestScratchResult.verify|verify} messages.
         * @param message RequestScratchResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestScratchResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestScratchResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestScratchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestScratchResult;

        /**
         * Decodes a RequestScratchResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestScratchResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestScratchResult;

        /**
         * Verifies a RequestScratchResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestScratchResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestScratchResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestScratchResult;

        /**
         * Creates a plain object from a RequestScratchResult message. Also converts values to other types if specified.
         * @param message RequestScratchResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestScratchResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestScratchResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestScratchReward. */
    interface IRequestScratchReward {

        /** RequestScratchReward commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestScratchReward cardCounts */
        cardCounts?: (number|null);
    }

    /** Represents a RequestScratchReward. */
    class RequestScratchReward implements IRequestScratchReward {

        /**
         * Constructs a new RequestScratchReward.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestScratchReward);

        /** RequestScratchReward commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestScratchReward cardCounts. */
        public cardCounts: number;

        /**
         * Creates a new RequestScratchReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestScratchReward instance
         */
        public static create(properties?: CVP.IRequestScratchReward): CVP.RequestScratchReward;

        /**
         * Encodes the specified RequestScratchReward message. Does not implicitly {@link CVP.RequestScratchReward.verify|verify} messages.
         * @param message RequestScratchReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestScratchReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestScratchReward message, length delimited. Does not implicitly {@link CVP.RequestScratchReward.verify|verify} messages.
         * @param message RequestScratchReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestScratchReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestScratchReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestScratchReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestScratchReward;

        /**
         * Decodes a RequestScratchReward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestScratchReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestScratchReward;

        /**
         * Verifies a RequestScratchReward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestScratchReward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestScratchReward
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestScratchReward;

        /**
         * Creates a plain object from a RequestScratchReward message. Also converts values to other types if specified.
         * @param message RequestScratchReward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestScratchReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestScratchReward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestScratchRewardResult. */
    interface IRequestScratchRewardResult {

        /** RequestScratchRewardResult reward */
        reward?: (number|null);
    }

    /** Represents a RequestScratchRewardResult. */
    class RequestScratchRewardResult implements IRequestScratchRewardResult {

        /**
         * Constructs a new RequestScratchRewardResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestScratchRewardResult);

        /** RequestScratchRewardResult reward. */
        public reward: number;

        /**
         * Creates a new RequestScratchRewardResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestScratchRewardResult instance
         */
        public static create(properties?: CVP.IRequestScratchRewardResult): CVP.RequestScratchRewardResult;

        /**
         * Encodes the specified RequestScratchRewardResult message. Does not implicitly {@link CVP.RequestScratchRewardResult.verify|verify} messages.
         * @param message RequestScratchRewardResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestScratchRewardResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestScratchRewardResult message, length delimited. Does not implicitly {@link CVP.RequestScratchRewardResult.verify|verify} messages.
         * @param message RequestScratchRewardResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestScratchRewardResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestScratchRewardResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestScratchRewardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestScratchRewardResult;

        /**
         * Decodes a RequestScratchRewardResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestScratchRewardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestScratchRewardResult;

        /**
         * Verifies a RequestScratchRewardResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestScratchRewardResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestScratchRewardResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestScratchRewardResult;

        /**
         * Creates a plain object from a RequestScratchRewardResult message. Also converts values to other types if specified.
         * @param message RequestScratchRewardResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestScratchRewardResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestScratchRewardResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestShopData. */
    interface IRequestShopData {

        /** RequestShopData commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestShopData. */
    class RequestShopData implements IRequestShopData {

        /**
         * Constructs a new RequestShopData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestShopData);

        /** RequestShopData commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestShopData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestShopData instance
         */
        public static create(properties?: CVP.IRequestShopData): CVP.RequestShopData;

        /**
         * Encodes the specified RequestShopData message. Does not implicitly {@link CVP.RequestShopData.verify|verify} messages.
         * @param message RequestShopData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestShopData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestShopData message, length delimited. Does not implicitly {@link CVP.RequestShopData.verify|verify} messages.
         * @param message RequestShopData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestShopData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestShopData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestShopData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestShopData;

        /**
         * Decodes a RequestShopData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestShopData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestShopData;

        /**
         * Verifies a RequestShopData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestShopData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestShopData
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestShopData;

        /**
         * Creates a plain object from a RequestShopData message. Also converts values to other types if specified.
         * @param message RequestShopData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestShopData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestShopData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestShopDataResult. */
    interface IRequestShopDataResult {

        /** RequestShopDataResult coinsShopData */
        coinsShopData?: (CVP.ICoinsShopData|null);

        /** RequestShopDataResult buffShopData */
        buffShopData?: (CVP.IBuffShopData|null);
    }

    /** Represents a RequestShopDataResult. */
    class RequestShopDataResult implements IRequestShopDataResult {

        /**
         * Constructs a new RequestShopDataResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestShopDataResult);

        /** RequestShopDataResult coinsShopData. */
        public coinsShopData?: (CVP.ICoinsShopData|null);

        /** RequestShopDataResult buffShopData. */
        public buffShopData?: (CVP.IBuffShopData|null);

        /**
         * Creates a new RequestShopDataResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestShopDataResult instance
         */
        public static create(properties?: CVP.IRequestShopDataResult): CVP.RequestShopDataResult;

        /**
         * Encodes the specified RequestShopDataResult message. Does not implicitly {@link CVP.RequestShopDataResult.verify|verify} messages.
         * @param message RequestShopDataResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestShopDataResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestShopDataResult message, length delimited. Does not implicitly {@link CVP.RequestShopDataResult.verify|verify} messages.
         * @param message RequestShopDataResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestShopDataResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestShopDataResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestShopDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestShopDataResult;

        /**
         * Decodes a RequestShopDataResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestShopDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestShopDataResult;

        /**
         * Verifies a RequestShopDataResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestShopDataResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestShopDataResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestShopDataResult;

        /**
         * Creates a plain object from a RequestShopDataResult message. Also converts values to other types if specified.
         * @param message RequestShopDataResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestShopDataResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestShopDataResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestGameShopData. */
    interface IRequestGameShopData {

        /** RequestGameShopData commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestGameShopData. */
    class RequestGameShopData implements IRequestGameShopData {

        /**
         * Constructs a new RequestGameShopData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestGameShopData);

        /** RequestGameShopData commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestGameShopData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestGameShopData instance
         */
        public static create(properties?: CVP.IRequestGameShopData): CVP.RequestGameShopData;

        /**
         * Encodes the specified RequestGameShopData message. Does not implicitly {@link CVP.RequestGameShopData.verify|verify} messages.
         * @param message RequestGameShopData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestGameShopData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestGameShopData message, length delimited. Does not implicitly {@link CVP.RequestGameShopData.verify|verify} messages.
         * @param message RequestGameShopData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestGameShopData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestGameShopData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestGameShopData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestGameShopData;

        /**
         * Decodes a RequestGameShopData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestGameShopData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestGameShopData;

        /**
         * Verifies a RequestGameShopData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestGameShopData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestGameShopData
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestGameShopData;

        /**
         * Creates a plain object from a RequestGameShopData message. Also converts values to other types if specified.
         * @param message RequestGameShopData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestGameShopData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestGameShopData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestGameShopDataResult. */
    interface IRequestGameShopDataResult {

        /** RequestGameShopDataResult coinsShopData */
        coinsShopData?: (CVP.ICoinsShopData|null);

        /** RequestGameShopDataResult buffShopData */
        buffShopData?: (CVP.IBuffShopData|null);
    }

    /** Represents a RequestGameShopDataResult. */
    class RequestGameShopDataResult implements IRequestGameShopDataResult {

        /**
         * Constructs a new RequestGameShopDataResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestGameShopDataResult);

        /** RequestGameShopDataResult coinsShopData. */
        public coinsShopData?: (CVP.ICoinsShopData|null);

        /** RequestGameShopDataResult buffShopData. */
        public buffShopData?: (CVP.IBuffShopData|null);

        /**
         * Creates a new RequestGameShopDataResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestGameShopDataResult instance
         */
        public static create(properties?: CVP.IRequestGameShopDataResult): CVP.RequestGameShopDataResult;

        /**
         * Encodes the specified RequestGameShopDataResult message. Does not implicitly {@link CVP.RequestGameShopDataResult.verify|verify} messages.
         * @param message RequestGameShopDataResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestGameShopDataResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestGameShopDataResult message, length delimited. Does not implicitly {@link CVP.RequestGameShopDataResult.verify|verify} messages.
         * @param message RequestGameShopDataResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestGameShopDataResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestGameShopDataResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestGameShopDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestGameShopDataResult;

        /**
         * Decodes a RequestGameShopDataResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestGameShopDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestGameShopDataResult;

        /**
         * Verifies a RequestGameShopDataResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestGameShopDataResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestGameShopDataResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestGameShopDataResult;

        /**
         * Creates a plain object from a RequestGameShopDataResult message. Also converts values to other types if specified.
         * @param message RequestGameShopDataResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestGameShopDataResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestGameShopDataResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CoinsShopData. */
    interface ICoinsShopData {

        /** CoinsShopData shopItemList */
        shopItemList?: (CVP.IShopItem[]|null);
    }

    /** Represents a CoinsShopData. */
    class CoinsShopData implements ICoinsShopData {

        /**
         * Constructs a new CoinsShopData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.ICoinsShopData);

        /** CoinsShopData shopItemList. */
        public shopItemList: CVP.IShopItem[];

        /**
         * Creates a new CoinsShopData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CoinsShopData instance
         */
        public static create(properties?: CVP.ICoinsShopData): CVP.CoinsShopData;

        /**
         * Encodes the specified CoinsShopData message. Does not implicitly {@link CVP.CoinsShopData.verify|verify} messages.
         * @param message CoinsShopData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.ICoinsShopData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CoinsShopData message, length delimited. Does not implicitly {@link CVP.CoinsShopData.verify|verify} messages.
         * @param message CoinsShopData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.ICoinsShopData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CoinsShopData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CoinsShopData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.CoinsShopData;

        /**
         * Decodes a CoinsShopData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CoinsShopData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.CoinsShopData;

        /**
         * Verifies a CoinsShopData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CoinsShopData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CoinsShopData
         */
        public static fromObject(object: { [k: string]: any }): CVP.CoinsShopData;

        /**
         * Creates a plain object from a CoinsShopData message. Also converts values to other types if specified.
         * @param message CoinsShopData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.CoinsShopData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CoinsShopData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuffShopData. */
    interface IBuffShopData {

        /** BuffShopData buffGoodDataList */
        buffGoodDataList?: (CVP.IBuffGoodData[]|null);
    }

    /** Represents a BuffShopData. */
    class BuffShopData implements IBuffShopData {

        /**
         * Constructs a new BuffShopData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IBuffShopData);

        /** BuffShopData buffGoodDataList. */
        public buffGoodDataList: CVP.IBuffGoodData[];

        /**
         * Creates a new BuffShopData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuffShopData instance
         */
        public static create(properties?: CVP.IBuffShopData): CVP.BuffShopData;

        /**
         * Encodes the specified BuffShopData message. Does not implicitly {@link CVP.BuffShopData.verify|verify} messages.
         * @param message BuffShopData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IBuffShopData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BuffShopData message, length delimited. Does not implicitly {@link CVP.BuffShopData.verify|verify} messages.
         * @param message BuffShopData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IBuffShopData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuffShopData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuffShopData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.BuffShopData;

        /**
         * Decodes a BuffShopData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuffShopData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.BuffShopData;

        /**
         * Verifies a BuffShopData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BuffShopData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuffShopData
         */
        public static fromObject(object: { [k: string]: any }): CVP.BuffShopData;

        /**
         * Creates a plain object from a BuffShopData message. Also converts values to other types if specified.
         * @param message BuffShopData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.BuffShopData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuffShopData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BuffGoodData. */
    interface IBuffGoodData {

        /** BuffGoodData sku */
        sku?: (string|null);

        /** BuffGoodData speedPercent */
        speedPercent?: (number|null);

        /** BuffGoodData buffTime */
        buffTime?: (number[]|null);

        /** BuffGoodData guaCardsNum */
        guaCardsNum?: (number|null);

        /** BuffGoodData winningNum */
        winningNum?: (number|null);

        /** BuffGoodData vipEx */
        vipEx?: (number|null);

        /** BuffGoodData isCanBuy */
        isCanBuy?: (boolean|null);
    }

    /** Represents a BuffGoodData. */
    class BuffGoodData implements IBuffGoodData {

        /**
         * Constructs a new BuffGoodData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IBuffGoodData);

        /** BuffGoodData sku. */
        public sku: string;

        /** BuffGoodData speedPercent. */
        public speedPercent: number;

        /** BuffGoodData buffTime. */
        public buffTime: number[];

        /** BuffGoodData guaCardsNum. */
        public guaCardsNum: number;

        /** BuffGoodData winningNum. */
        public winningNum: number;

        /** BuffGoodData vipEx. */
        public vipEx: number;

        /** BuffGoodData isCanBuy. */
        public isCanBuy: boolean;

        /**
         * Creates a new BuffGoodData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BuffGoodData instance
         */
        public static create(properties?: CVP.IBuffGoodData): CVP.BuffGoodData;

        /**
         * Encodes the specified BuffGoodData message. Does not implicitly {@link CVP.BuffGoodData.verify|verify} messages.
         * @param message BuffGoodData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IBuffGoodData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BuffGoodData message, length delimited. Does not implicitly {@link CVP.BuffGoodData.verify|verify} messages.
         * @param message BuffGoodData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IBuffGoodData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuffGoodData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BuffGoodData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.BuffGoodData;

        /**
         * Decodes a BuffGoodData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BuffGoodData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.BuffGoodData;

        /**
         * Verifies a BuffGoodData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BuffGoodData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BuffGoodData
         */
        public static fromObject(object: { [k: string]: any }): CVP.BuffGoodData;

        /**
         * Creates a plain object from a BuffGoodData message. Also converts values to other types if specified.
         * @param message BuffGoodData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.BuffGoodData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BuffGoodData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetShopGoodsForCoins. */
    interface IGetShopGoodsForCoins {

        /** GetShopGoodsForCoins vipBalance */
        vipBalance?: (number|null);

        /** GetShopGoodsForCoins winningBalance */
        winningBalance?: (number|null);

        /** GetShopGoodsForCoins guaCardBalance */
        guaCardBalance?: (number|null);

        /** GetShopGoodsForCoins coinsBalance */
        coinsBalance?: (number|null);
    }

    /** Represents a GetShopGoodsForCoins. */
    class GetShopGoodsForCoins implements IGetShopGoodsForCoins {

        /**
         * Constructs a new GetShopGoodsForCoins.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IGetShopGoodsForCoins);

        /** GetShopGoodsForCoins vipBalance. */
        public vipBalance: number;

        /** GetShopGoodsForCoins winningBalance. */
        public winningBalance: number;

        /** GetShopGoodsForCoins guaCardBalance. */
        public guaCardBalance: number;

        /** GetShopGoodsForCoins coinsBalance. */
        public coinsBalance: number;

        /**
         * Creates a new GetShopGoodsForCoins instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetShopGoodsForCoins instance
         */
        public static create(properties?: CVP.IGetShopGoodsForCoins): CVP.GetShopGoodsForCoins;

        /**
         * Encodes the specified GetShopGoodsForCoins message. Does not implicitly {@link CVP.GetShopGoodsForCoins.verify|verify} messages.
         * @param message GetShopGoodsForCoins message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IGetShopGoodsForCoins, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetShopGoodsForCoins message, length delimited. Does not implicitly {@link CVP.GetShopGoodsForCoins.verify|verify} messages.
         * @param message GetShopGoodsForCoins message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IGetShopGoodsForCoins, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetShopGoodsForCoins message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetShopGoodsForCoins
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.GetShopGoodsForCoins;

        /**
         * Decodes a GetShopGoodsForCoins message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetShopGoodsForCoins
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.GetShopGoodsForCoins;

        /**
         * Verifies a GetShopGoodsForCoins message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetShopGoodsForCoins message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetShopGoodsForCoins
         */
        public static fromObject(object: { [k: string]: any }): CVP.GetShopGoodsForCoins;

        /**
         * Creates a plain object from a GetShopGoodsForCoins message. Also converts values to other types if specified.
         * @param message GetShopGoodsForCoins
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.GetShopGoodsForCoins, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetShopGoodsForCoins to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetShopGoodsForBuff. */
    interface IGetShopGoodsForBuff {

        /** GetShopGoodsForBuff vipBalance */
        vipBalance?: (number|null);

        /** GetShopGoodsForBuff winningBalance */
        winningBalance?: (number|null);

        /** GetShopGoodsForBuff guaCardBalance */
        guaCardBalance?: (number|null);

        /** GetShopGoodsForBuff buffTimeBalance */
        buffTimeBalance?: (number|null);
    }

    /** Represents a GetShopGoodsForBuff. */
    class GetShopGoodsForBuff implements IGetShopGoodsForBuff {

        /**
         * Constructs a new GetShopGoodsForBuff.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IGetShopGoodsForBuff);

        /** GetShopGoodsForBuff vipBalance. */
        public vipBalance: number;

        /** GetShopGoodsForBuff winningBalance. */
        public winningBalance: number;

        /** GetShopGoodsForBuff guaCardBalance. */
        public guaCardBalance: number;

        /** GetShopGoodsForBuff buffTimeBalance. */
        public buffTimeBalance: number;

        /**
         * Creates a new GetShopGoodsForBuff instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetShopGoodsForBuff instance
         */
        public static create(properties?: CVP.IGetShopGoodsForBuff): CVP.GetShopGoodsForBuff;

        /**
         * Encodes the specified GetShopGoodsForBuff message. Does not implicitly {@link CVP.GetShopGoodsForBuff.verify|verify} messages.
         * @param message GetShopGoodsForBuff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IGetShopGoodsForBuff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetShopGoodsForBuff message, length delimited. Does not implicitly {@link CVP.GetShopGoodsForBuff.verify|verify} messages.
         * @param message GetShopGoodsForBuff message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IGetShopGoodsForBuff, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetShopGoodsForBuff message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetShopGoodsForBuff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.GetShopGoodsForBuff;

        /**
         * Decodes a GetShopGoodsForBuff message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetShopGoodsForBuff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.GetShopGoodsForBuff;

        /**
         * Verifies a GetShopGoodsForBuff message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetShopGoodsForBuff message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetShopGoodsForBuff
         */
        public static fromObject(object: { [k: string]: any }): CVP.GetShopGoodsForBuff;

        /**
         * Creates a plain object from a GetShopGoodsForBuff message. Also converts values to other types if specified.
         * @param message GetShopGoodsForBuff
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.GetShopGoodsForBuff, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetShopGoodsForBuff to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** SigninRewardType enum. */
    enum SigninRewardType {
        NON = 0,
        COIN = 1,
        SCRATCH_CARD = 2,
        AVATAR = 3,
        VAULT_KEY = 4,
        M_COIN = 5,
        HONOR = 6
    }

    /** SigninType enum. */
    enum SigninType {
        NON = 0,
        NORMAL = 1,
        PURCHASE = 2
    }

    /** SigninState enum. */
    enum SigninState {
        NON = 0,
        EXPIRED = 1,
        COMPLETED = 2,
        UNOPEN = 3,
        OPENED = 4
    }

    /** Properties of a SingleReward. */
    interface ISingleReward {

        /** SingleReward rewardType */
        rewardType?: (CVP.SigninRewardType|null);

        /** SingleReward rewardValue */
        rewardValue?: (number|null);
    }

    /** Represents a SingleReward. */
    class SingleReward implements ISingleReward {

        /**
         * Constructs a new SingleReward.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.ISingleReward);

        /** SingleReward rewardType. */
        public rewardType: CVP.SigninRewardType;

        /** SingleReward rewardValue. */
        public rewardValue: number;

        /**
         * Creates a new SingleReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SingleReward instance
         */
        public static create(properties?: CVP.ISingleReward): CVP.SingleReward;

        /**
         * Encodes the specified SingleReward message. Does not implicitly {@link CVP.SingleReward.verify|verify} messages.
         * @param message SingleReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.ISingleReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SingleReward message, length delimited. Does not implicitly {@link CVP.SingleReward.verify|verify} messages.
         * @param message SingleReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.ISingleReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SingleReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SingleReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.SingleReward;

        /**
         * Decodes a SingleReward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SingleReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.SingleReward;

        /**
         * Verifies a SingleReward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SingleReward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SingleReward
         */
        public static fromObject(object: { [k: string]: any }): CVP.SingleReward;

        /**
         * Creates a plain object from a SingleReward message. Also converts values to other types if specified.
         * @param message SingleReward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.SingleReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SingleReward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SigninCumulativeReward. */
    interface ISigninCumulativeReward {

        /** SigninCumulativeReward idx */
        idx?: (number|null);

        /** SigninCumulativeReward singleRewardList */
        singleRewardList?: (CVP.ISingleReward[]|null);

        /** SigninCumulativeReward cumulativeRewardTarget */
        cumulativeRewardTarget?: (number|null);

        /** SigninCumulativeReward isCollected */
        isCollected?: (boolean|null);
    }

    /** Represents a SigninCumulativeReward. */
    class SigninCumulativeReward implements ISigninCumulativeReward {

        /**
         * Constructs a new SigninCumulativeReward.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.ISigninCumulativeReward);

        /** SigninCumulativeReward idx. */
        public idx: number;

        /** SigninCumulativeReward singleRewardList. */
        public singleRewardList: CVP.ISingleReward[];

        /** SigninCumulativeReward cumulativeRewardTarget. */
        public cumulativeRewardTarget: number;

        /** SigninCumulativeReward isCollected. */
        public isCollected: boolean;

        /**
         * Creates a new SigninCumulativeReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SigninCumulativeReward instance
         */
        public static create(properties?: CVP.ISigninCumulativeReward): CVP.SigninCumulativeReward;

        /**
         * Encodes the specified SigninCumulativeReward message. Does not implicitly {@link CVP.SigninCumulativeReward.verify|verify} messages.
         * @param message SigninCumulativeReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.ISigninCumulativeReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SigninCumulativeReward message, length delimited. Does not implicitly {@link CVP.SigninCumulativeReward.verify|verify} messages.
         * @param message SigninCumulativeReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.ISigninCumulativeReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SigninCumulativeReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SigninCumulativeReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.SigninCumulativeReward;

        /**
         * Decodes a SigninCumulativeReward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SigninCumulativeReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.SigninCumulativeReward;

        /**
         * Verifies a SigninCumulativeReward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SigninCumulativeReward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SigninCumulativeReward
         */
        public static fromObject(object: { [k: string]: any }): CVP.SigninCumulativeReward;

        /**
         * Creates a plain object from a SigninCumulativeReward message. Also converts values to other types if specified.
         * @param message SigninCumulativeReward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.SigninCumulativeReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SigninCumulativeReward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NormalSigninTable. */
    interface INormalSigninTable {

        /** NormalSigninTable normalSigninDailyList */
        normalSigninDailyList?: (CVP.INormalSigninDaily[]|null);

        /** NormalSigninTable signinCumulativeRewardList */
        signinCumulativeRewardList?: (CVP.ISigninCumulativeReward[]|null);

        /** NormalSigninTable cumulativeRewardProgress */
        cumulativeRewardProgress?: (number|null);
    }

    /** Represents a NormalSigninTable. */
    class NormalSigninTable implements INormalSigninTable {

        /**
         * Constructs a new NormalSigninTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.INormalSigninTable);

        /** NormalSigninTable normalSigninDailyList. */
        public normalSigninDailyList: CVP.INormalSigninDaily[];

        /** NormalSigninTable signinCumulativeRewardList. */
        public signinCumulativeRewardList: CVP.ISigninCumulativeReward[];

        /** NormalSigninTable cumulativeRewardProgress. */
        public cumulativeRewardProgress: number;

        /**
         * Creates a new NormalSigninTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NormalSigninTable instance
         */
        public static create(properties?: CVP.INormalSigninTable): CVP.NormalSigninTable;

        /**
         * Encodes the specified NormalSigninTable message. Does not implicitly {@link CVP.NormalSigninTable.verify|verify} messages.
         * @param message NormalSigninTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.INormalSigninTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NormalSigninTable message, length delimited. Does not implicitly {@link CVP.NormalSigninTable.verify|verify} messages.
         * @param message NormalSigninTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.INormalSigninTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NormalSigninTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NormalSigninTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.NormalSigninTable;

        /**
         * Decodes a NormalSigninTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NormalSigninTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.NormalSigninTable;

        /**
         * Verifies a NormalSigninTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NormalSigninTable message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NormalSigninTable
         */
        public static fromObject(object: { [k: string]: any }): CVP.NormalSigninTable;

        /**
         * Creates a plain object from a NormalSigninTable message. Also converts values to other types if specified.
         * @param message NormalSigninTable
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.NormalSigninTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NormalSigninTable to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NormalSigninDaily. */
    interface INormalSigninDaily {

        /** NormalSigninDaily state */
        state?: (CVP.SigninState|null);

        /** NormalSigninDaily signinReward */
        signinReward?: (CVP.ISingleReward|null);
    }

    /** Represents a NormalSigninDaily. */
    class NormalSigninDaily implements INormalSigninDaily {

        /**
         * Constructs a new NormalSigninDaily.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.INormalSigninDaily);

        /** NormalSigninDaily state. */
        public state: CVP.SigninState;

        /** NormalSigninDaily signinReward. */
        public signinReward?: (CVP.ISingleReward|null);

        /**
         * Creates a new NormalSigninDaily instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NormalSigninDaily instance
         */
        public static create(properties?: CVP.INormalSigninDaily): CVP.NormalSigninDaily;

        /**
         * Encodes the specified NormalSigninDaily message. Does not implicitly {@link CVP.NormalSigninDaily.verify|verify} messages.
         * @param message NormalSigninDaily message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.INormalSigninDaily, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NormalSigninDaily message, length delimited. Does not implicitly {@link CVP.NormalSigninDaily.verify|verify} messages.
         * @param message NormalSigninDaily message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.INormalSigninDaily, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NormalSigninDaily message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NormalSigninDaily
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.NormalSigninDaily;

        /**
         * Decodes a NormalSigninDaily message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NormalSigninDaily
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.NormalSigninDaily;

        /**
         * Verifies a NormalSigninDaily message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NormalSigninDaily message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NormalSigninDaily
         */
        public static fromObject(object: { [k: string]: any }): CVP.NormalSigninDaily;

        /**
         * Creates a plain object from a NormalSigninDaily message. Also converts values to other types if specified.
         * @param message NormalSigninDaily
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.NormalSigninDaily, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NormalSigninDaily to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestNormalSignin. */
    interface IRequestNormalSignin {

        /** RequestNormalSignin commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestNormalSignin isLookAtAd */
        isLookAtAd?: (boolean|null);
    }

    /** Represents a RequestNormalSignin. */
    class RequestNormalSignin implements IRequestNormalSignin {

        /**
         * Constructs a new RequestNormalSignin.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestNormalSignin);

        /** RequestNormalSignin commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestNormalSignin isLookAtAd. */
        public isLookAtAd: boolean;

        /**
         * Creates a new RequestNormalSignin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestNormalSignin instance
         */
        public static create(properties?: CVP.IRequestNormalSignin): CVP.RequestNormalSignin;

        /**
         * Encodes the specified RequestNormalSignin message. Does not implicitly {@link CVP.RequestNormalSignin.verify|verify} messages.
         * @param message RequestNormalSignin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestNormalSignin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestNormalSignin message, length delimited. Does not implicitly {@link CVP.RequestNormalSignin.verify|verify} messages.
         * @param message RequestNormalSignin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestNormalSignin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestNormalSignin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestNormalSignin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestNormalSignin;

        /**
         * Decodes a RequestNormalSignin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestNormalSignin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestNormalSignin;

        /**
         * Verifies a RequestNormalSignin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestNormalSignin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestNormalSignin
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestNormalSignin;

        /**
         * Creates a plain object from a RequestNormalSignin message. Also converts values to other types if specified.
         * @param message RequestNormalSignin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestNormalSignin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestNormalSignin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestNormalSigninResult. */
    interface IRequestNormalSigninResult {

        /** RequestNormalSigninResult signinReward */
        signinReward?: (CVP.ISingleReward|null);

        /** RequestNormalSigninResult normalSigninTable */
        normalSigninTable?: (CVP.INormalSigninTable|null);
    }

    /** Represents a RequestNormalSigninResult. */
    class RequestNormalSigninResult implements IRequestNormalSigninResult {

        /**
         * Constructs a new RequestNormalSigninResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestNormalSigninResult);

        /** RequestNormalSigninResult signinReward. */
        public signinReward?: (CVP.ISingleReward|null);

        /** RequestNormalSigninResult normalSigninTable. */
        public normalSigninTable?: (CVP.INormalSigninTable|null);

        /**
         * Creates a new RequestNormalSigninResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestNormalSigninResult instance
         */
        public static create(properties?: CVP.IRequestNormalSigninResult): CVP.RequestNormalSigninResult;

        /**
         * Encodes the specified RequestNormalSigninResult message. Does not implicitly {@link CVP.RequestNormalSigninResult.verify|verify} messages.
         * @param message RequestNormalSigninResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestNormalSigninResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestNormalSigninResult message, length delimited. Does not implicitly {@link CVP.RequestNormalSigninResult.verify|verify} messages.
         * @param message RequestNormalSigninResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestNormalSigninResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestNormalSigninResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestNormalSigninResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestNormalSigninResult;

        /**
         * Decodes a RequestNormalSigninResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestNormalSigninResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestNormalSigninResult;

        /**
         * Verifies a RequestNormalSigninResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestNormalSigninResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestNormalSigninResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestNormalSigninResult;

        /**
         * Creates a plain object from a RequestNormalSigninResult message. Also converts values to other types if specified.
         * @param message RequestNormalSigninResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestNormalSigninResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestNormalSigninResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestSigninTable. */
    interface IRequestSigninTable {

        /** RequestSigninTable commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestSigninTable. */
    class RequestSigninTable implements IRequestSigninTable {

        /**
         * Constructs a new RequestSigninTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestSigninTable);

        /** RequestSigninTable commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestSigninTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestSigninTable instance
         */
        public static create(properties?: CVP.IRequestSigninTable): CVP.RequestSigninTable;

        /**
         * Encodes the specified RequestSigninTable message. Does not implicitly {@link CVP.RequestSigninTable.verify|verify} messages.
         * @param message RequestSigninTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestSigninTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestSigninTable message, length delimited. Does not implicitly {@link CVP.RequestSigninTable.verify|verify} messages.
         * @param message RequestSigninTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestSigninTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestSigninTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestSigninTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestSigninTable;

        /**
         * Decodes a RequestSigninTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestSigninTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestSigninTable;

        /**
         * Verifies a RequestSigninTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestSigninTable message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestSigninTable
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestSigninTable;

        /**
         * Creates a plain object from a RequestSigninTable message. Also converts values to other types if specified.
         * @param message RequestSigninTable
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestSigninTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestSigninTable to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestSigninTableResult. */
    interface IRequestSigninTableResult {

        /** RequestSigninTableResult normalSigninTable */
        normalSigninTable?: (CVP.INormalSigninTable|null);

        /** RequestSigninTableResult purchaseSigninTable */
        purchaseSigninTable?: (CVP.IPurchaseSigninTable|null);

        /** RequestSigninTableResult signinType */
        signinType?: (CVP.SigninType|null);
    }

    /** Represents a RequestSigninTableResult. */
    class RequestSigninTableResult implements IRequestSigninTableResult {

        /**
         * Constructs a new RequestSigninTableResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestSigninTableResult);

        /** RequestSigninTableResult normalSigninTable. */
        public normalSigninTable?: (CVP.INormalSigninTable|null);

        /** RequestSigninTableResult purchaseSigninTable. */
        public purchaseSigninTable?: (CVP.IPurchaseSigninTable|null);

        /** RequestSigninTableResult signinType. */
        public signinType: CVP.SigninType;

        /**
         * Creates a new RequestSigninTableResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestSigninTableResult instance
         */
        public static create(properties?: CVP.IRequestSigninTableResult): CVP.RequestSigninTableResult;

        /**
         * Encodes the specified RequestSigninTableResult message. Does not implicitly {@link CVP.RequestSigninTableResult.verify|verify} messages.
         * @param message RequestSigninTableResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestSigninTableResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestSigninTableResult message, length delimited. Does not implicitly {@link CVP.RequestSigninTableResult.verify|verify} messages.
         * @param message RequestSigninTableResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestSigninTableResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestSigninTableResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestSigninTableResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestSigninTableResult;

        /**
         * Decodes a RequestSigninTableResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestSigninTableResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestSigninTableResult;

        /**
         * Verifies a RequestSigninTableResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestSigninTableResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestSigninTableResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestSigninTableResult;

        /**
         * Creates a plain object from a RequestSigninTableResult message. Also converts values to other types if specified.
         * @param message RequestSigninTableResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestSigninTableResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestSigninTableResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCollectCumulativeReward. */
    interface IRequestCollectCumulativeReward {

        /** RequestCollectCumulativeReward commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestCollectCumulativeReward idx */
        idx?: (number|null);

        /** RequestCollectCumulativeReward signinType */
        signinType?: (CVP.SigninType|null);
    }

    /** Represents a RequestCollectCumulativeReward. */
    class RequestCollectCumulativeReward implements IRequestCollectCumulativeReward {

        /**
         * Constructs a new RequestCollectCumulativeReward.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestCollectCumulativeReward);

        /** RequestCollectCumulativeReward commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /** RequestCollectCumulativeReward idx. */
        public idx: number;

        /** RequestCollectCumulativeReward signinType. */
        public signinType: CVP.SigninType;

        /**
         * Creates a new RequestCollectCumulativeReward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCollectCumulativeReward instance
         */
        public static create(properties?: CVP.IRequestCollectCumulativeReward): CVP.RequestCollectCumulativeReward;

        /**
         * Encodes the specified RequestCollectCumulativeReward message. Does not implicitly {@link CVP.RequestCollectCumulativeReward.verify|verify} messages.
         * @param message RequestCollectCumulativeReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestCollectCumulativeReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCollectCumulativeReward message, length delimited. Does not implicitly {@link CVP.RequestCollectCumulativeReward.verify|verify} messages.
         * @param message RequestCollectCumulativeReward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestCollectCumulativeReward, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCollectCumulativeReward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCollectCumulativeReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestCollectCumulativeReward;

        /**
         * Decodes a RequestCollectCumulativeReward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCollectCumulativeReward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestCollectCumulativeReward;

        /**
         * Verifies a RequestCollectCumulativeReward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCollectCumulativeReward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCollectCumulativeReward
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestCollectCumulativeReward;

        /**
         * Creates a plain object from a RequestCollectCumulativeReward message. Also converts values to other types if specified.
         * @param message RequestCollectCumulativeReward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestCollectCumulativeReward, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCollectCumulativeReward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCollectCumulativeRewardResult. */
    interface IRequestCollectCumulativeRewardResult {

        /** RequestCollectCumulativeRewardResult singleRewardList */
        singleRewardList?: (CVP.ISingleReward[]|null);

        /** RequestCollectCumulativeRewardResult signinCumulativeRewardList */
        signinCumulativeRewardList?: (CVP.ISigninCumulativeReward[]|null);

        /** RequestCollectCumulativeRewardResult cumulativeRewardProgress */
        cumulativeRewardProgress?: (number|null);
    }

    /** Represents a RequestCollectCumulativeRewardResult. */
    class RequestCollectCumulativeRewardResult implements IRequestCollectCumulativeRewardResult {

        /**
         * Constructs a new RequestCollectCumulativeRewardResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestCollectCumulativeRewardResult);

        /** RequestCollectCumulativeRewardResult singleRewardList. */
        public singleRewardList: CVP.ISingleReward[];

        /** RequestCollectCumulativeRewardResult signinCumulativeRewardList. */
        public signinCumulativeRewardList: CVP.ISigninCumulativeReward[];

        /** RequestCollectCumulativeRewardResult cumulativeRewardProgress. */
        public cumulativeRewardProgress: number;

        /**
         * Creates a new RequestCollectCumulativeRewardResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCollectCumulativeRewardResult instance
         */
        public static create(properties?: CVP.IRequestCollectCumulativeRewardResult): CVP.RequestCollectCumulativeRewardResult;

        /**
         * Encodes the specified RequestCollectCumulativeRewardResult message. Does not implicitly {@link CVP.RequestCollectCumulativeRewardResult.verify|verify} messages.
         * @param message RequestCollectCumulativeRewardResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestCollectCumulativeRewardResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCollectCumulativeRewardResult message, length delimited. Does not implicitly {@link CVP.RequestCollectCumulativeRewardResult.verify|verify} messages.
         * @param message RequestCollectCumulativeRewardResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestCollectCumulativeRewardResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCollectCumulativeRewardResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCollectCumulativeRewardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestCollectCumulativeRewardResult;

        /**
         * Decodes a RequestCollectCumulativeRewardResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCollectCumulativeRewardResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestCollectCumulativeRewardResult;

        /**
         * Verifies a RequestCollectCumulativeRewardResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCollectCumulativeRewardResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCollectCumulativeRewardResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestCollectCumulativeRewardResult;

        /**
         * Creates a plain object from a RequestCollectCumulativeRewardResult message. Also converts values to other types if specified.
         * @param message RequestCollectCumulativeRewardResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestCollectCumulativeRewardResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCollectCumulativeRewardResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PurchaseSigninTable. */
    interface IPurchaseSigninTable {

        /** PurchaseSigninTable purchaseSigninDailyList */
        purchaseSigninDailyList?: (CVP.IPurchaseSigninDaily[]|null);

        /** PurchaseSigninTable signinCumulativeRewardList */
        signinCumulativeRewardList?: (CVP.ISigninCumulativeReward[]|null);

        /** PurchaseSigninTable cumulativeRewardProgress */
        cumulativeRewardProgress?: (number|null);
    }

    /** Represents a PurchaseSigninTable. */
    class PurchaseSigninTable implements IPurchaseSigninTable {

        /**
         * Constructs a new PurchaseSigninTable.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IPurchaseSigninTable);

        /** PurchaseSigninTable purchaseSigninDailyList. */
        public purchaseSigninDailyList: CVP.IPurchaseSigninDaily[];

        /** PurchaseSigninTable signinCumulativeRewardList. */
        public signinCumulativeRewardList: CVP.ISigninCumulativeReward[];

        /** PurchaseSigninTable cumulativeRewardProgress. */
        public cumulativeRewardProgress: number;

        /**
         * Creates a new PurchaseSigninTable instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PurchaseSigninTable instance
         */
        public static create(properties?: CVP.IPurchaseSigninTable): CVP.PurchaseSigninTable;

        /**
         * Encodes the specified PurchaseSigninTable message. Does not implicitly {@link CVP.PurchaseSigninTable.verify|verify} messages.
         * @param message PurchaseSigninTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IPurchaseSigninTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PurchaseSigninTable message, length delimited. Does not implicitly {@link CVP.PurchaseSigninTable.verify|verify} messages.
         * @param message PurchaseSigninTable message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IPurchaseSigninTable, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PurchaseSigninTable message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PurchaseSigninTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.PurchaseSigninTable;

        /**
         * Decodes a PurchaseSigninTable message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PurchaseSigninTable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.PurchaseSigninTable;

        /**
         * Verifies a PurchaseSigninTable message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PurchaseSigninTable message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PurchaseSigninTable
         */
        public static fromObject(object: { [k: string]: any }): CVP.PurchaseSigninTable;

        /**
         * Creates a plain object from a PurchaseSigninTable message. Also converts values to other types if specified.
         * @param message PurchaseSigninTable
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.PurchaseSigninTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PurchaseSigninTable to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PurchaseSigninDaily. */
    interface IPurchaseSigninDaily {

        /** PurchaseSigninDaily state */
        state: CVP.SigninState;

        /** PurchaseSigninDaily singleRewardList */
        singleRewardList?: (CVP.ISingleReward[]|null);

        /** PurchaseSigninDaily progress */
        progress: number;

        /** PurchaseSigninDaily target */
        target: number;
    }

    /** Represents a PurchaseSigninDaily. */
    class PurchaseSigninDaily implements IPurchaseSigninDaily {

        /**
         * Constructs a new PurchaseSigninDaily.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IPurchaseSigninDaily);

        /** PurchaseSigninDaily state. */
        public state: CVP.SigninState;

        /** PurchaseSigninDaily singleRewardList. */
        public singleRewardList: CVP.ISingleReward[];

        /** PurchaseSigninDaily progress. */
        public progress: number;

        /** PurchaseSigninDaily target. */
        public target: number;

        /**
         * Creates a new PurchaseSigninDaily instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PurchaseSigninDaily instance
         */
        public static create(properties?: CVP.IPurchaseSigninDaily): CVP.PurchaseSigninDaily;

        /**
         * Encodes the specified PurchaseSigninDaily message. Does not implicitly {@link CVP.PurchaseSigninDaily.verify|verify} messages.
         * @param message PurchaseSigninDaily message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IPurchaseSigninDaily, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PurchaseSigninDaily message, length delimited. Does not implicitly {@link CVP.PurchaseSigninDaily.verify|verify} messages.
         * @param message PurchaseSigninDaily message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IPurchaseSigninDaily, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PurchaseSigninDaily message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PurchaseSigninDaily
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.PurchaseSigninDaily;

        /**
         * Decodes a PurchaseSigninDaily message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PurchaseSigninDaily
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.PurchaseSigninDaily;

        /**
         * Verifies a PurchaseSigninDaily message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PurchaseSigninDaily message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PurchaseSigninDaily
         */
        public static fromObject(object: { [k: string]: any }): CVP.PurchaseSigninDaily;

        /**
         * Creates a plain object from a PurchaseSigninDaily message. Also converts values to other types if specified.
         * @param message PurchaseSigninDaily
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.PurchaseSigninDaily, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PurchaseSigninDaily to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestPurchaseSignin. */
    interface IRequestPurchaseSignin {

        /** RequestPurchaseSignin commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestPurchaseSignin. */
    class RequestPurchaseSignin implements IRequestPurchaseSignin {

        /**
         * Constructs a new RequestPurchaseSignin.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestPurchaseSignin);

        /** RequestPurchaseSignin commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestPurchaseSignin instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestPurchaseSignin instance
         */
        public static create(properties?: CVP.IRequestPurchaseSignin): CVP.RequestPurchaseSignin;

        /**
         * Encodes the specified RequestPurchaseSignin message. Does not implicitly {@link CVP.RequestPurchaseSignin.verify|verify} messages.
         * @param message RequestPurchaseSignin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestPurchaseSignin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestPurchaseSignin message, length delimited. Does not implicitly {@link CVP.RequestPurchaseSignin.verify|verify} messages.
         * @param message RequestPurchaseSignin message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestPurchaseSignin, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestPurchaseSignin message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestPurchaseSignin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestPurchaseSignin;

        /**
         * Decodes a RequestPurchaseSignin message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestPurchaseSignin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestPurchaseSignin;

        /**
         * Verifies a RequestPurchaseSignin message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestPurchaseSignin message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestPurchaseSignin
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestPurchaseSignin;

        /**
         * Creates a plain object from a RequestPurchaseSignin message. Also converts values to other types if specified.
         * @param message RequestPurchaseSignin
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestPurchaseSignin, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestPurchaseSignin to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestPurchaseSigninResult. */
    interface IRequestPurchaseSigninResult {

        /** RequestPurchaseSigninResult singleRewardList */
        singleRewardList?: (CVP.ISingleReward[]|null);

        /** RequestPurchaseSigninResult purchaseSigninTable */
        purchaseSigninTable?: (CVP.IPurchaseSigninTable|null);
    }

    /** Represents a RequestPurchaseSigninResult. */
    class RequestPurchaseSigninResult implements IRequestPurchaseSigninResult {

        /**
         * Constructs a new RequestPurchaseSigninResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestPurchaseSigninResult);

        /** RequestPurchaseSigninResult singleRewardList. */
        public singleRewardList: CVP.ISingleReward[];

        /** RequestPurchaseSigninResult purchaseSigninTable. */
        public purchaseSigninTable?: (CVP.IPurchaseSigninTable|null);

        /**
         * Creates a new RequestPurchaseSigninResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestPurchaseSigninResult instance
         */
        public static create(properties?: CVP.IRequestPurchaseSigninResult): CVP.RequestPurchaseSigninResult;

        /**
         * Encodes the specified RequestPurchaseSigninResult message. Does not implicitly {@link CVP.RequestPurchaseSigninResult.verify|verify} messages.
         * @param message RequestPurchaseSigninResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestPurchaseSigninResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestPurchaseSigninResult message, length delimited. Does not implicitly {@link CVP.RequestPurchaseSigninResult.verify|verify} messages.
         * @param message RequestPurchaseSigninResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestPurchaseSigninResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestPurchaseSigninResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestPurchaseSigninResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestPurchaseSigninResult;

        /**
         * Decodes a RequestPurchaseSigninResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestPurchaseSigninResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestPurchaseSigninResult;

        /**
         * Verifies a RequestPurchaseSigninResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestPurchaseSigninResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestPurchaseSigninResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestPurchaseSigninResult;

        /**
         * Creates a plain object from a RequestPurchaseSigninResult message. Also converts values to other types if specified.
         * @param message RequestPurchaseSigninResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestPurchaseSigninResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestPurchaseSigninResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UpdateSign. */
    interface IUpdateSign {

        /** UpdateSign finish */
        finish?: (number|null);

        /** UpdateSign normalRed */
        normalRed?: (boolean|null);

        /** UpdateSign purhaseRed */
        purhaseRed?: (boolean|null);
    }

    /** Represents an UpdateSign. */
    class UpdateSign implements IUpdateSign {

        /**
         * Constructs a new UpdateSign.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IUpdateSign);

        /** UpdateSign finish. */
        public finish: number;

        /** UpdateSign normalRed. */
        public normalRed: boolean;

        /** UpdateSign purhaseRed. */
        public purhaseRed: boolean;

        /**
         * Creates a new UpdateSign instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UpdateSign instance
         */
        public static create(properties?: CVP.IUpdateSign): CVP.UpdateSign;

        /**
         * Encodes the specified UpdateSign message. Does not implicitly {@link CVP.UpdateSign.verify|verify} messages.
         * @param message UpdateSign message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IUpdateSign, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UpdateSign message, length delimited. Does not implicitly {@link CVP.UpdateSign.verify|verify} messages.
         * @param message UpdateSign message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IUpdateSign, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateSign message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UpdateSign
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.UpdateSign;

        /**
         * Decodes an UpdateSign message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UpdateSign
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.UpdateSign;

        /**
         * Verifies an UpdateSign message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UpdateSign message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UpdateSign
         */
        public static fromObject(object: { [k: string]: any }): CVP.UpdateSign;

        /**
         * Creates a plain object from an UpdateSign message. Also converts values to other types if specified.
         * @param message UpdateSign
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.UpdateSign, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UpdateSign to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestSubscribeData. */
    interface IRequestSubscribeData {

        /** RequestSubscribeData commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestSubscribeData. */
    class RequestSubscribeData implements IRequestSubscribeData {

        /**
         * Constructs a new RequestSubscribeData.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestSubscribeData);

        /** RequestSubscribeData commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestSubscribeData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestSubscribeData instance
         */
        public static create(properties?: CVP.IRequestSubscribeData): CVP.RequestSubscribeData;

        /**
         * Encodes the specified RequestSubscribeData message. Does not implicitly {@link CVP.RequestSubscribeData.verify|verify} messages.
         * @param message RequestSubscribeData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestSubscribeData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestSubscribeData message, length delimited. Does not implicitly {@link CVP.RequestSubscribeData.verify|verify} messages.
         * @param message RequestSubscribeData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestSubscribeData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestSubscribeData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestSubscribeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestSubscribeData;

        /**
         * Decodes a RequestSubscribeData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestSubscribeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestSubscribeData;

        /**
         * Verifies a RequestSubscribeData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestSubscribeData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestSubscribeData
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestSubscribeData;

        /**
         * Creates a plain object from a RequestSubscribeData message. Also converts values to other types if specified.
         * @param message RequestSubscribeData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestSubscribeData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestSubscribeData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestSubscribeDataResult. */
    interface IRequestSubscribeDataResult {

        /** RequestSubscribeDataResult shopItemList */
        shopItemList?: (CVP.IShopItem[]|null);

        /** RequestSubscribeDataResult shopItem */
        shopItem?: (CVP.IShopItem|null);

        /** RequestSubscribeDataResult isSubscribe */
        isSubscribe?: (boolean|null);

        /** RequestSubscribeDataResult leftDayDate */
        leftDayDate?: (string|null);

        /** RequestSubscribeDataResult isGetCoins */
        isGetCoins?: (boolean|null);

        /** RequestSubscribeDataResult getCoinsNum */
        getCoinsNum?: (number|null);
    }

    /** Represents a RequestSubscribeDataResult. */
    class RequestSubscribeDataResult implements IRequestSubscribeDataResult {

        /**
         * Constructs a new RequestSubscribeDataResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestSubscribeDataResult);

        /** RequestSubscribeDataResult shopItemList. */
        public shopItemList: CVP.IShopItem[];

        /** RequestSubscribeDataResult shopItem. */
        public shopItem?: (CVP.IShopItem|null);

        /** RequestSubscribeDataResult isSubscribe. */
        public isSubscribe: boolean;

        /** RequestSubscribeDataResult leftDayDate. */
        public leftDayDate: string;

        /** RequestSubscribeDataResult isGetCoins. */
        public isGetCoins: boolean;

        /** RequestSubscribeDataResult getCoinsNum. */
        public getCoinsNum: number;

        /**
         * Creates a new RequestSubscribeDataResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestSubscribeDataResult instance
         */
        public static create(properties?: CVP.IRequestSubscribeDataResult): CVP.RequestSubscribeDataResult;

        /**
         * Encodes the specified RequestSubscribeDataResult message. Does not implicitly {@link CVP.RequestSubscribeDataResult.verify|verify} messages.
         * @param message RequestSubscribeDataResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestSubscribeDataResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestSubscribeDataResult message, length delimited. Does not implicitly {@link CVP.RequestSubscribeDataResult.verify|verify} messages.
         * @param message RequestSubscribeDataResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestSubscribeDataResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestSubscribeDataResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestSubscribeDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestSubscribeDataResult;

        /**
         * Decodes a RequestSubscribeDataResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestSubscribeDataResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestSubscribeDataResult;

        /**
         * Verifies a RequestSubscribeDataResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestSubscribeDataResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestSubscribeDataResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestSubscribeDataResult;

        /**
         * Creates a plain object from a RequestSubscribeDataResult message. Also converts values to other types if specified.
         * @param message RequestSubscribeDataResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestSubscribeDataResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestSubscribeDataResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestSubscribeGetCoins. */
    interface IRequestSubscribeGetCoins {

        /** RequestSubscribeGetCoins commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestSubscribeGetCoins. */
    class RequestSubscribeGetCoins implements IRequestSubscribeGetCoins {

        /**
         * Constructs a new RequestSubscribeGetCoins.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestSubscribeGetCoins);

        /** RequestSubscribeGetCoins commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestSubscribeGetCoins instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestSubscribeGetCoins instance
         */
        public static create(properties?: CVP.IRequestSubscribeGetCoins): CVP.RequestSubscribeGetCoins;

        /**
         * Encodes the specified RequestSubscribeGetCoins message. Does not implicitly {@link CVP.RequestSubscribeGetCoins.verify|verify} messages.
         * @param message RequestSubscribeGetCoins message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestSubscribeGetCoins, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestSubscribeGetCoins message, length delimited. Does not implicitly {@link CVP.RequestSubscribeGetCoins.verify|verify} messages.
         * @param message RequestSubscribeGetCoins message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestSubscribeGetCoins, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestSubscribeGetCoins message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestSubscribeGetCoins
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestSubscribeGetCoins;

        /**
         * Decodes a RequestSubscribeGetCoins message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestSubscribeGetCoins
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestSubscribeGetCoins;

        /**
         * Verifies a RequestSubscribeGetCoins message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestSubscribeGetCoins message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestSubscribeGetCoins
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestSubscribeGetCoins;

        /**
         * Creates a plain object from a RequestSubscribeGetCoins message. Also converts values to other types if specified.
         * @param message RequestSubscribeGetCoins
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestSubscribeGetCoins, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestSubscribeGetCoins to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestSubscribeGetCoinsResult. */
    interface IRequestSubscribeGetCoinsResult {

        /** RequestSubscribeGetCoinsResult coins */
        coins?: (number|null);

        /** RequestSubscribeGetCoinsResult balance */
        balance?: (number|null);
    }

    /** Represents a RequestSubscribeGetCoinsResult. */
    class RequestSubscribeGetCoinsResult implements IRequestSubscribeGetCoinsResult {

        /**
         * Constructs a new RequestSubscribeGetCoinsResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestSubscribeGetCoinsResult);

        /** RequestSubscribeGetCoinsResult coins. */
        public coins: number;

        /** RequestSubscribeGetCoinsResult balance. */
        public balance: number;

        /**
         * Creates a new RequestSubscribeGetCoinsResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestSubscribeGetCoinsResult instance
         */
        public static create(properties?: CVP.IRequestSubscribeGetCoinsResult): CVP.RequestSubscribeGetCoinsResult;

        /**
         * Encodes the specified RequestSubscribeGetCoinsResult message. Does not implicitly {@link CVP.RequestSubscribeGetCoinsResult.verify|verify} messages.
         * @param message RequestSubscribeGetCoinsResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestSubscribeGetCoinsResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestSubscribeGetCoinsResult message, length delimited. Does not implicitly {@link CVP.RequestSubscribeGetCoinsResult.verify|verify} messages.
         * @param message RequestSubscribeGetCoinsResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestSubscribeGetCoinsResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestSubscribeGetCoinsResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestSubscribeGetCoinsResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestSubscribeGetCoinsResult;

        /**
         * Decodes a RequestSubscribeGetCoinsResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestSubscribeGetCoinsResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestSubscribeGetCoinsResult;

        /**
         * Verifies a RequestSubscribeGetCoinsResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestSubscribeGetCoinsResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestSubscribeGetCoinsResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestSubscribeGetCoinsResult;

        /**
         * Creates a plain object from a RequestSubscribeGetCoinsResult message. Also converts values to other types if specified.
         * @param message RequestSubscribeGetCoinsResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestSubscribeGetCoinsResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestSubscribeGetCoinsResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestRestore. */
    interface IRequestRestore {

        /** RequestRestore sku */
        sku?: (string|null);

        /** RequestRestore purchase_data */
        purchase_data?: (string|null);

        /** RequestRestore signature_data */
        signature_data?: (string|null);

        /** RequestRestore package_name */
        package_name?: (string|null);

        /** RequestRestore purchase_binary_data */
        purchase_binary_data?: (string|null);

        /** RequestRestore commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestRestore. */
    class RequestRestore implements IRequestRestore {

        /**
         * Constructs a new RequestRestore.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestRestore);

        /** RequestRestore sku. */
        public sku: string;

        /** RequestRestore purchase_data. */
        public purchase_data: string;

        /** RequestRestore signature_data. */
        public signature_data: string;

        /** RequestRestore package_name. */
        public package_name: string;

        /** RequestRestore purchase_binary_data. */
        public purchase_binary_data: string;

        /** RequestRestore commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestRestore instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestRestore instance
         */
        public static create(properties?: CVP.IRequestRestore): CVP.RequestRestore;

        /**
         * Encodes the specified RequestRestore message. Does not implicitly {@link CVP.RequestRestore.verify|verify} messages.
         * @param message RequestRestore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestRestore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestRestore message, length delimited. Does not implicitly {@link CVP.RequestRestore.verify|verify} messages.
         * @param message RequestRestore message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestRestore, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestRestore message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestRestore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestRestore;

        /**
         * Decodes a RequestRestore message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestRestore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestRestore;

        /**
         * Verifies a RequestRestore message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestRestore message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestRestore
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestRestore;

        /**
         * Creates a plain object from a RequestRestore message. Also converts values to other types if specified.
         * @param message RequestRestore
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestRestore, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestRestore to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestRestoreResult. */
    interface IRequestRestoreResult {

        /** RequestRestoreResult success */
        success?: (boolean|null);

        /** RequestRestoreResult error */
        error?: (string|null);
    }

    /** Represents a RequestRestoreResult. */
    class RequestRestoreResult implements IRequestRestoreResult {

        /**
         * Constructs a new RequestRestoreResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestRestoreResult);

        /** RequestRestoreResult success. */
        public success: boolean;

        /** RequestRestoreResult error. */
        public error: string;

        /**
         * Creates a new RequestRestoreResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestRestoreResult instance
         */
        public static create(properties?: CVP.IRequestRestoreResult): CVP.RequestRestoreResult;

        /**
         * Encodes the specified RequestRestoreResult message. Does not implicitly {@link CVP.RequestRestoreResult.verify|verify} messages.
         * @param message RequestRestoreResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestRestoreResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestRestoreResult message, length delimited. Does not implicitly {@link CVP.RequestRestoreResult.verify|verify} messages.
         * @param message RequestRestoreResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestRestoreResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestRestoreResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestRestoreResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestRestoreResult;

        /**
         * Decodes a RequestRestoreResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestRestoreResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestRestoreResult;

        /**
         * Verifies a RequestRestoreResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestRestoreResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestRestoreResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestRestoreResult;

        /**
         * Creates a plain object from a RequestRestoreResult message. Also converts values to other types if specified.
         * @param message RequestRestoreResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestRestoreResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestRestoreResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestFreeSubscribe. */
    interface IRequestFreeSubscribe {

        /** RequestFreeSubscribe commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestFreeSubscribe. */
    class RequestFreeSubscribe implements IRequestFreeSubscribe {

        /**
         * Constructs a new RequestFreeSubscribe.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestFreeSubscribe);

        /** RequestFreeSubscribe commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestFreeSubscribe instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestFreeSubscribe instance
         */
        public static create(properties?: CVP.IRequestFreeSubscribe): CVP.RequestFreeSubscribe;

        /**
         * Encodes the specified RequestFreeSubscribe message. Does not implicitly {@link CVP.RequestFreeSubscribe.verify|verify} messages.
         * @param message RequestFreeSubscribe message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestFreeSubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestFreeSubscribe message, length delimited. Does not implicitly {@link CVP.RequestFreeSubscribe.verify|verify} messages.
         * @param message RequestFreeSubscribe message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestFreeSubscribe, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestFreeSubscribe message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestFreeSubscribe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestFreeSubscribe;

        /**
         * Decodes a RequestFreeSubscribe message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestFreeSubscribe
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestFreeSubscribe;

        /**
         * Verifies a RequestFreeSubscribe message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestFreeSubscribe message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestFreeSubscribe
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestFreeSubscribe;

        /**
         * Creates a plain object from a RequestFreeSubscribe message. Also converts values to other types if specified.
         * @param message RequestFreeSubscribe
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestFreeSubscribe, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestFreeSubscribe to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestFreeSubscribeResult. */
    interface IRequestFreeSubscribeResult {

        /** RequestFreeSubscribeResult success */
        success?: (boolean|null);
    }

    /** Represents a RequestFreeSubscribeResult. */
    class RequestFreeSubscribeResult implements IRequestFreeSubscribeResult {

        /**
         * Constructs a new RequestFreeSubscribeResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestFreeSubscribeResult);

        /** RequestFreeSubscribeResult success. */
        public success: boolean;

        /**
         * Creates a new RequestFreeSubscribeResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestFreeSubscribeResult instance
         */
        public static create(properties?: CVP.IRequestFreeSubscribeResult): CVP.RequestFreeSubscribeResult;

        /**
         * Encodes the specified RequestFreeSubscribeResult message. Does not implicitly {@link CVP.RequestFreeSubscribeResult.verify|verify} messages.
         * @param message RequestFreeSubscribeResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestFreeSubscribeResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestFreeSubscribeResult message, length delimited. Does not implicitly {@link CVP.RequestFreeSubscribeResult.verify|verify} messages.
         * @param message RequestFreeSubscribeResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestFreeSubscribeResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestFreeSubscribeResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestFreeSubscribeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestFreeSubscribeResult;

        /**
         * Decodes a RequestFreeSubscribeResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestFreeSubscribeResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestFreeSubscribeResult;

        /**
         * Verifies a RequestFreeSubscribeResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestFreeSubscribeResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestFreeSubscribeResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestFreeSubscribeResult;

        /**
         * Creates a plain object from a RequestFreeSubscribeResult message. Also converts values to other types if specified.
         * @param message RequestFreeSubscribeResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestFreeSubscribeResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestFreeSubscribeResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestEnterTutorial. */
    interface IRequestEnterTutorial {

        /** RequestEnterTutorial commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestEnterTutorial. */
    class RequestEnterTutorial implements IRequestEnterTutorial {

        /**
         * Constructs a new RequestEnterTutorial.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestEnterTutorial);

        /** RequestEnterTutorial commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestEnterTutorial instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestEnterTutorial instance
         */
        public static create(properties?: CVP.IRequestEnterTutorial): CVP.RequestEnterTutorial;

        /**
         * Encodes the specified RequestEnterTutorial message. Does not implicitly {@link CVP.RequestEnterTutorial.verify|verify} messages.
         * @param message RequestEnterTutorial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestEnterTutorial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestEnterTutorial message, length delimited. Does not implicitly {@link CVP.RequestEnterTutorial.verify|verify} messages.
         * @param message RequestEnterTutorial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestEnterTutorial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestEnterTutorial message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestEnterTutorial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestEnterTutorial;

        /**
         * Decodes a RequestEnterTutorial message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestEnterTutorial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestEnterTutorial;

        /**
         * Verifies a RequestEnterTutorial message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestEnterTutorial message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestEnterTutorial
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestEnterTutorial;

        /**
         * Creates a plain object from a RequestEnterTutorial message. Also converts values to other types if specified.
         * @param message RequestEnterTutorial
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestEnterTutorial, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestEnterTutorial to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestEnterTutorialResult. */
    interface IRequestEnterTutorialResult {

        /** RequestEnterTutorialResult curBetIdx */
        curBetIdx?: (number|null);

        /** RequestEnterTutorialResult payTable */
        payTable?: (CVP.IPayTable|null);

        /** RequestEnterTutorialResult creditAmount */
        creditAmount?: (number[]|null);

        /** RequestEnterTutorialResult jackpotAcc */
        jackpotAcc?: (number|null);

        /** RequestEnterTutorialResult jackpotBase */
        jackpotBase?: (number|null);

        /** RequestEnterTutorialResult creditAmountIdx */
        creditAmountIdx?: (number|null);
    }

    /** Represents a RequestEnterTutorialResult. */
    class RequestEnterTutorialResult implements IRequestEnterTutorialResult {

        /**
         * Constructs a new RequestEnterTutorialResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestEnterTutorialResult);

        /** RequestEnterTutorialResult curBetIdx. */
        public curBetIdx: number;

        /** RequestEnterTutorialResult payTable. */
        public payTable?: (CVP.IPayTable|null);

        /** RequestEnterTutorialResult creditAmount. */
        public creditAmount: number[];

        /** RequestEnterTutorialResult jackpotAcc. */
        public jackpotAcc: number;

        /** RequestEnterTutorialResult jackpotBase. */
        public jackpotBase: number;

        /** RequestEnterTutorialResult creditAmountIdx. */
        public creditAmountIdx: number;

        /**
         * Creates a new RequestEnterTutorialResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestEnterTutorialResult instance
         */
        public static create(properties?: CVP.IRequestEnterTutorialResult): CVP.RequestEnterTutorialResult;

        /**
         * Encodes the specified RequestEnterTutorialResult message. Does not implicitly {@link CVP.RequestEnterTutorialResult.verify|verify} messages.
         * @param message RequestEnterTutorialResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestEnterTutorialResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestEnterTutorialResult message, length delimited. Does not implicitly {@link CVP.RequestEnterTutorialResult.verify|verify} messages.
         * @param message RequestEnterTutorialResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestEnterTutorialResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestEnterTutorialResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestEnterTutorialResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestEnterTutorialResult;

        /**
         * Decodes a RequestEnterTutorialResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestEnterTutorialResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestEnterTutorialResult;

        /**
         * Verifies a RequestEnterTutorialResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestEnterTutorialResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestEnterTutorialResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestEnterTutorialResult;

        /**
         * Creates a plain object from a RequestEnterTutorialResult message. Also converts values to other types if specified.
         * @param message RequestEnterTutorialResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestEnterTutorialResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestEnterTutorialResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestTutorialDeal. */
    interface IRequestTutorialDeal {

        /** RequestTutorialDeal curBetIdx */
        curBetIdx?: (number|null);

        /** RequestTutorialDeal creditAmountIdx */
        creditAmountIdx?: (number|null);

        /** RequestTutorialDeal hand */
        hand?: (number|null);

        /** RequestTutorialDeal commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestTutorialDeal. */
    class RequestTutorialDeal implements IRequestTutorialDeal {

        /**
         * Constructs a new RequestTutorialDeal.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestTutorialDeal);

        /** RequestTutorialDeal curBetIdx. */
        public curBetIdx: number;

        /** RequestTutorialDeal creditAmountIdx. */
        public creditAmountIdx: number;

        /** RequestTutorialDeal hand. */
        public hand: number;

        /** RequestTutorialDeal commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestTutorialDeal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestTutorialDeal instance
         */
        public static create(properties?: CVP.IRequestTutorialDeal): CVP.RequestTutorialDeal;

        /**
         * Encodes the specified RequestTutorialDeal message. Does not implicitly {@link CVP.RequestTutorialDeal.verify|verify} messages.
         * @param message RequestTutorialDeal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestTutorialDeal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestTutorialDeal message, length delimited. Does not implicitly {@link CVP.RequestTutorialDeal.verify|verify} messages.
         * @param message RequestTutorialDeal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestTutorialDeal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestTutorialDeal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestTutorialDeal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestTutorialDeal;

        /**
         * Decodes a RequestTutorialDeal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestTutorialDeal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestTutorialDeal;

        /**
         * Verifies a RequestTutorialDeal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestTutorialDeal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestTutorialDeal
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestTutorialDeal;

        /**
         * Creates a plain object from a RequestTutorialDeal message. Also converts values to other types if specified.
         * @param message RequestTutorialDeal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestTutorialDeal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestTutorialDeal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestTutorialDealResult. */
    interface IRequestTutorialDealResult {

        /** RequestTutorialDealResult pokerList */
        pokerList?: (string[]|null);

        /** RequestTutorialDealResult winTypeName */
        winTypeName?: (string|null);

        /** RequestTutorialDealResult jackpot */
        jackpot?: (number|null);

        /** RequestTutorialDealResult holdIdxList */
        holdIdxList?: (number[]|null);
    }

    /** Represents a RequestTutorialDealResult. */
    class RequestTutorialDealResult implements IRequestTutorialDealResult {

        /**
         * Constructs a new RequestTutorialDealResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestTutorialDealResult);

        /** RequestTutorialDealResult pokerList. */
        public pokerList: string[];

        /** RequestTutorialDealResult winTypeName. */
        public winTypeName: string;

        /** RequestTutorialDealResult jackpot. */
        public jackpot: number;

        /** RequestTutorialDealResult holdIdxList. */
        public holdIdxList: number[];

        /**
         * Creates a new RequestTutorialDealResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestTutorialDealResult instance
         */
        public static create(properties?: CVP.IRequestTutorialDealResult): CVP.RequestTutorialDealResult;

        /**
         * Encodes the specified RequestTutorialDealResult message. Does not implicitly {@link CVP.RequestTutorialDealResult.verify|verify} messages.
         * @param message RequestTutorialDealResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestTutorialDealResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestTutorialDealResult message, length delimited. Does not implicitly {@link CVP.RequestTutorialDealResult.verify|verify} messages.
         * @param message RequestTutorialDealResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestTutorialDealResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestTutorialDealResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestTutorialDealResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestTutorialDealResult;

        /**
         * Decodes a RequestTutorialDealResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestTutorialDealResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestTutorialDealResult;

        /**
         * Verifies a RequestTutorialDealResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestTutorialDealResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestTutorialDealResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestTutorialDealResult;

        /**
         * Creates a plain object from a RequestTutorialDealResult message. Also converts values to other types if specified.
         * @param message RequestTutorialDealResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestTutorialDealResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestTutorialDealResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestTutorialDraw. */
    interface IRequestTutorialDraw {

        /** RequestTutorialDraw commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestTutorialDraw. */
    class RequestTutorialDraw implements IRequestTutorialDraw {

        /**
         * Constructs a new RequestTutorialDraw.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestTutorialDraw);

        /** RequestTutorialDraw commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestTutorialDraw instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestTutorialDraw instance
         */
        public static create(properties?: CVP.IRequestTutorialDraw): CVP.RequestTutorialDraw;

        /**
         * Encodes the specified RequestTutorialDraw message. Does not implicitly {@link CVP.RequestTutorialDraw.verify|verify} messages.
         * @param message RequestTutorialDraw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestTutorialDraw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestTutorialDraw message, length delimited. Does not implicitly {@link CVP.RequestTutorialDraw.verify|verify} messages.
         * @param message RequestTutorialDraw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestTutorialDraw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestTutorialDraw message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestTutorialDraw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestTutorialDraw;

        /**
         * Decodes a RequestTutorialDraw message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestTutorialDraw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestTutorialDraw;

        /**
         * Verifies a RequestTutorialDraw message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestTutorialDraw message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestTutorialDraw
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestTutorialDraw;

        /**
         * Creates a plain object from a RequestTutorialDraw message. Also converts values to other types if specified.
         * @param message RequestTutorialDraw
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestTutorialDraw, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestTutorialDraw to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestTutorialDrawResult. */
    interface IRequestTutorialDrawResult {

        /** RequestTutorialDrawResult balance */
        balance?: (number|null);

        /** RequestTutorialDrawResult pokerDataList */
        pokerDataList?: (CVP.IPokerData[]|null);

        /** RequestTutorialDrawResult jackpotAcc */
        jackpotAcc?: (number|null);

        /** RequestTutorialDrawResult isDoubleOrNothing */
        isDoubleOrNothing?: (boolean|null);

        /** RequestTutorialDrawResult isRewardRoulette */
        isRewardRoulette?: (boolean|null);

        /** RequestTutorialDrawResult upgrade */
        upgrade?: (number|null);

        /** RequestTutorialDrawResult curExp */
        curExp?: (number|null);

        /** RequestTutorialDrawResult nextExp */
        nextExp?: (number|Long|null);

        /** RequestTutorialDrawResult levelUpReward */
        levelUpReward?: (CVP.ILevelUpReward|null);

        /** RequestTutorialDrawResult bigWin */
        bigWin?: (CVP.IPokerData|null);

        /** RequestTutorialDrawResult isFlash */
        isFlash?: (boolean|null);

        /** RequestTutorialDrawResult jackPot */
        jackPot?: (CVP.IPokerData|null);
    }

    /** Represents a RequestTutorialDrawResult. */
    class RequestTutorialDrawResult implements IRequestTutorialDrawResult {

        /**
         * Constructs a new RequestTutorialDrawResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestTutorialDrawResult);

        /** RequestTutorialDrawResult balance. */
        public balance: number;

        /** RequestTutorialDrawResult pokerDataList. */
        public pokerDataList: CVP.IPokerData[];

        /** RequestTutorialDrawResult jackpotAcc. */
        public jackpotAcc: number;

        /** RequestTutorialDrawResult isDoubleOrNothing. */
        public isDoubleOrNothing: boolean;

        /** RequestTutorialDrawResult isRewardRoulette. */
        public isRewardRoulette: boolean;

        /** RequestTutorialDrawResult upgrade. */
        public upgrade: number;

        /** RequestTutorialDrawResult curExp. */
        public curExp: number;

        /** RequestTutorialDrawResult nextExp. */
        public nextExp: (number|Long);

        /** RequestTutorialDrawResult levelUpReward. */
        public levelUpReward?: (CVP.ILevelUpReward|null);

        /** RequestTutorialDrawResult bigWin. */
        public bigWin?: (CVP.IPokerData|null);

        /** RequestTutorialDrawResult isFlash. */
        public isFlash: boolean;

        /** RequestTutorialDrawResult jackPot. */
        public jackPot?: (CVP.IPokerData|null);

        /**
         * Creates a new RequestTutorialDrawResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestTutorialDrawResult instance
         */
        public static create(properties?: CVP.IRequestTutorialDrawResult): CVP.RequestTutorialDrawResult;

        /**
         * Encodes the specified RequestTutorialDrawResult message. Does not implicitly {@link CVP.RequestTutorialDrawResult.verify|verify} messages.
         * @param message RequestTutorialDrawResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestTutorialDrawResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestTutorialDrawResult message, length delimited. Does not implicitly {@link CVP.RequestTutorialDrawResult.verify|verify} messages.
         * @param message RequestTutorialDrawResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestTutorialDrawResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestTutorialDrawResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestTutorialDrawResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestTutorialDrawResult;

        /**
         * Decodes a RequestTutorialDrawResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestTutorialDrawResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestTutorialDrawResult;

        /**
         * Verifies a RequestTutorialDrawResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestTutorialDrawResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestTutorialDrawResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestTutorialDrawResult;

        /**
         * Creates a plain object from a RequestTutorialDrawResult message. Also converts values to other types if specified.
         * @param message RequestTutorialDrawResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestTutorialDrawResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestTutorialDrawResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestTutorial. */
    interface IRequestTutorial {

        /** RequestTutorial commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestTutorial. */
    class RequestTutorial implements IRequestTutorial {

        /**
         * Constructs a new RequestTutorial.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestTutorial);

        /** RequestTutorial commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestTutorial instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestTutorial instance
         */
        public static create(properties?: CVP.IRequestTutorial): CVP.RequestTutorial;

        /**
         * Encodes the specified RequestTutorial message. Does not implicitly {@link CVP.RequestTutorial.verify|verify} messages.
         * @param message RequestTutorial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestTutorial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestTutorial message, length delimited. Does not implicitly {@link CVP.RequestTutorial.verify|verify} messages.
         * @param message RequestTutorial message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestTutorial, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestTutorial message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestTutorial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestTutorial;

        /**
         * Decodes a RequestTutorial message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestTutorial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestTutorial;

        /**
         * Verifies a RequestTutorial message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestTutorial message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestTutorial
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestTutorial;

        /**
         * Creates a plain object from a RequestTutorial message. Also converts values to other types if specified.
         * @param message RequestTutorial
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestTutorial, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestTutorial to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestTutorialResult. */
    interface IRequestTutorialResult {

        /** RequestTutorialResult coins */
        coins?: (number|null);
    }

    /** Represents a RequestTutorialResult. */
    class RequestTutorialResult implements IRequestTutorialResult {

        /**
         * Constructs a new RequestTutorialResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestTutorialResult);

        /** RequestTutorialResult coins. */
        public coins: number;

        /**
         * Creates a new RequestTutorialResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestTutorialResult instance
         */
        public static create(properties?: CVP.IRequestTutorialResult): CVP.RequestTutorialResult;

        /**
         * Encodes the specified RequestTutorialResult message. Does not implicitly {@link CVP.RequestTutorialResult.verify|verify} messages.
         * @param message RequestTutorialResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestTutorialResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestTutorialResult message, length delimited. Does not implicitly {@link CVP.RequestTutorialResult.verify|verify} messages.
         * @param message RequestTutorialResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestTutorialResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestTutorialResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestTutorialResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestTutorialResult;

        /**
         * Decodes a RequestTutorialResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestTutorialResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestTutorialResult;

        /**
         * Verifies a RequestTutorialResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestTutorialResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestTutorialResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestTutorialResult;

        /**
         * Creates a plain object from a RequestTutorialResult message. Also converts values to other types if specified.
         * @param message RequestTutorialResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestTutorialResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestTutorialResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestTutorialSkip. */
    interface IRequestTutorialSkip {

        /** RequestTutorialSkip commonParams */
        commonParams?: (CVP.IMsgCommonParams|null);
    }

    /** Represents a RequestTutorialSkip. */
    class RequestTutorialSkip implements IRequestTutorialSkip {

        /**
         * Constructs a new RequestTutorialSkip.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestTutorialSkip);

        /** RequestTutorialSkip commonParams. */
        public commonParams?: (CVP.IMsgCommonParams|null);

        /**
         * Creates a new RequestTutorialSkip instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestTutorialSkip instance
         */
        public static create(properties?: CVP.IRequestTutorialSkip): CVP.RequestTutorialSkip;

        /**
         * Encodes the specified RequestTutorialSkip message. Does not implicitly {@link CVP.RequestTutorialSkip.verify|verify} messages.
         * @param message RequestTutorialSkip message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestTutorialSkip, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestTutorialSkip message, length delimited. Does not implicitly {@link CVP.RequestTutorialSkip.verify|verify} messages.
         * @param message RequestTutorialSkip message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestTutorialSkip, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestTutorialSkip message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestTutorialSkip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestTutorialSkip;

        /**
         * Decodes a RequestTutorialSkip message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestTutorialSkip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestTutorialSkip;

        /**
         * Verifies a RequestTutorialSkip message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestTutorialSkip message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestTutorialSkip
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestTutorialSkip;

        /**
         * Creates a plain object from a RequestTutorialSkip message. Also converts values to other types if specified.
         * @param message RequestTutorialSkip
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestTutorialSkip, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestTutorialSkip to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestTutorialSkipResult. */
    interface IRequestTutorialSkipResult {

        /** RequestTutorialSkipResult coins */
        coins?: (number|null);
    }

    /** Represents a RequestTutorialSkipResult. */
    class RequestTutorialSkipResult implements IRequestTutorialSkipResult {

        /**
         * Constructs a new RequestTutorialSkipResult.
         * @param [properties] Properties to set
         */
        constructor(properties?: CVP.IRequestTutorialSkipResult);

        /** RequestTutorialSkipResult coins. */
        public coins: number;

        /**
         * Creates a new RequestTutorialSkipResult instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestTutorialSkipResult instance
         */
        public static create(properties?: CVP.IRequestTutorialSkipResult): CVP.RequestTutorialSkipResult;

        /**
         * Encodes the specified RequestTutorialSkipResult message. Does not implicitly {@link CVP.RequestTutorialSkipResult.verify|verify} messages.
         * @param message RequestTutorialSkipResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CVP.IRequestTutorialSkipResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestTutorialSkipResult message, length delimited. Does not implicitly {@link CVP.RequestTutorialSkipResult.verify|verify} messages.
         * @param message RequestTutorialSkipResult message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CVP.IRequestTutorialSkipResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestTutorialSkipResult message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestTutorialSkipResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CVP.RequestTutorialSkipResult;

        /**
         * Decodes a RequestTutorialSkipResult message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestTutorialSkipResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CVP.RequestTutorialSkipResult;

        /**
         * Verifies a RequestTutorialSkipResult message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestTutorialSkipResult message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestTutorialSkipResult
         */
        public static fromObject(object: { [k: string]: any }): CVP.RequestTutorialSkipResult;

        /**
         * Creates a plain object from a RequestTutorialSkipResult message. Also converts values to other types if specified.
         * @param message RequestTutorialSkipResult
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CVP.RequestTutorialSkipResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestTutorialSkipResult to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
