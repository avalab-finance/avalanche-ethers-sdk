import { Wallet } from "@ethersproject/wallet";
import { Deferrable } from "@ethersproject/properties";
import { TransactionRequest, StakingTransactionResponse, StakingTransactionRequest, TransactionResponse } from "./types";
import { AvalancheProvider } from "./provider";
export default class AvalancheWallet extends Wallet {
    provider: AvalancheProvider;
    getChainId(): Promise<number>;
    populateTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionRequest>;
    populateStakingTransaction(transaction: Deferrable<StakingTransactionRequest>): Promise<StakingTransactionRequest>;
    signTransaction(transaction: TransactionRequest): Promise<string>;
    checkTransaction(transaction: Deferrable<TransactionRequest>): Deferrable<TransactionRequest>;
    checkStakingTransaction(transaction: Deferrable<StakingTransactionRequest>): Deferrable<StakingTransactionRequest>;
    sendTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionResponse>;
    sendStakingTransaction(transaction: Deferrable<StakingTransactionRequest>): Promise<StakingTransactionResponse>;
}
