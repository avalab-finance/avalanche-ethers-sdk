import { BytesLike, SignatureLike } from "@ethersproject/bytes";
import { Transaction, StakingTransaction, UnsignedTransaction, UnsignedStakingTransaction } from "./types";
export declare function serialize(transaction: UnsignedStakingTransaction | UnsignedTransaction, signature?: SignatureLike): string;
export declare function serializeStakingTransaction(transaction: UnsignedStakingTransaction, signature?: SignatureLike): string;
export declare function parseTransaction(payload: BytesLike): Transaction;
export declare function parseStakingTransaction(payload: BytesLike): StakingTransaction;
export declare function parse(rawTransaction: BytesLike): StakingTransaction | Transaction;
