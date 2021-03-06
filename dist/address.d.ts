export declare const HRP = "one";
export declare const tHRP = "tone";
export declare const isBech32Address: (raw: string) => boolean;
export declare const isBech32TestNetAddress: (raw: string) => boolean;
export declare class AvalancheAddress {
    static isValidBasic(str: string): boolean;
    static isValidChecksum(str: string): boolean;
    static isValidBech32(str: string): boolean;
    static isValidBech32TestNet(str: string): boolean;
    raw: string;
    basic: string;
    get basicHex(): string;
    get checksum(): string;
    get bech32(): string;
    get bech32TestNet(): string;
    constructor(raw: string);
    private getBasic;
}
export declare function getAddress(address: string): AvalancheAddress;
