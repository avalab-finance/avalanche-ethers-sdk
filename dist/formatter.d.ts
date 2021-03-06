import { BigNumber } from "@ethersproject/bignumber";
import { Formatter, TransactionReceipt } from "@ethersproject/providers";
import { Formats as BaseFormats, FormatFuncs } from "@ethersproject/providers/lib/formatter";
import { Transaction, Msg, Directive, TransactionResponse, StakingTransactionResponse, CXTransactionReceipt, StakingTransaction, Block } from "./types";
declare type AvalancheFormats = {
    stakingTransaction: FormatFuncs;
    cXReceipt: FormatFuncs;
    description: FormatFuncs;
    commissionRate: FormatFuncs;
    createValidatorMsg: FormatFuncs;
    createValidatorRequestMsg: FormatFuncs;
    editValidatorMsg: FormatFuncs;
    editValidatorRequestMsg: FormatFuncs;
    delegateMsg: FormatFuncs;
    undelegateMsg: FormatFuncs;
    collectRewardsMsg: FormatFuncs;
    delegation: FormatFuncs;
    undelegation: FormatFuncs;
};
export interface Delegation {
    validatorAddress: string;
    delegatorAddress: string;
    amount: number;
    reward: number;
    undelegations: {
        amount: number;
        reward: number;
    }[];
}
declare type Formats = BaseFormats & AvalancheFormats;
export default class AvalancheFormatter extends Formatter {
    formats: Formats;
    constructor();
    getDefaultFormats(): Formats;
    decimal(value: any): BigNumber | null;
    transaction(value: any): Transaction;
    stakingTransaction(value: any): StakingTransaction;
    transactionType(value: any): Directive;
    msg(type: any, value: any): Msg;
    address(value: any): string;
    _block(value: any, format: any): Block;
    block(value: any): Block;
    blockWithTransactions(value: any): Block;
    transactionResponse(transaction: any): TransactionResponse;
    stakingTransactionResponse(transaction: any): StakingTransactionResponse;
    receipt(value: any): TransactionReceipt;
    cXReceipt(value: any): CXTransactionReceipt;
    delegation(value: any): Delegation;
}
export {};
