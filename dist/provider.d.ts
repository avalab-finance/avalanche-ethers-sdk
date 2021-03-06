import { BlockTag, BaseProvider, JsonRpcProvider } from "@ethersproject/providers";
import { BigNumber } from "@ethersproject/bignumber";
import { Deferrable } from "@ethersproject/properties";
import { Network } from "@ethersproject/networks";
import { ConnectionInfo } from "@ethersproject/web";
import { TransactionRequest, Transaction, TransactionResponse, TransactionReceipt, CXTransactionReceipt, StakingTransactionResponse, StakingTransaction, Block, BlockWithTransactions } from "./types";
import AvalancheFormatter, { Delegation } from "./formatter";
export interface AvalancheProvider extends BaseProvider {
    network: AvalancheNetwork;
    sendTransaction(signedTransaction: string | Promise<string>): Promise<TransactionResponse>;
    sendStakingTransaction(signedTransaction: string | Promise<string>): Promise<StakingTransactionResponse>;
    call(transaction: Deferrable<TransactionRequest>, blockTag?: BlockTag | Promise<BlockTag>): Promise<string>;
    estimateGas(transaction: Deferrable<TransactionRequest>): Promise<BigNumber>;
    getBlock(blockHashOrBlockTag: BlockTag | string | Promise<BlockTag | string>): Promise<Block>;
    getBlockWithTransactions(blockHashOrBlockTag: BlockTag | string | Promise<BlockTag | string>): Promise<BlockWithTransactions>;
    getTransaction(transactionHash: string): Promise<TransactionResponse>;
    getTransactionReceipt(transactionHash: string): Promise<TransactionReceipt>;
    getCXTransactionReceipt(transactionHash: string): Promise<CXTransactionReceipt>;
    getStakingTransaction(transactionHash: string): Promise<StakingTransactionResponse>;
    getCirculatingSupply(): Promise<BigNumber>;
    getTotalSupply(): Promise<BigNumber>;
    getEpoch(): Promise<number>;
    getEpochLastBlock(epoch: number): Promise<number>;
    getLeader(): Promise<string>;
    getValidatorsAddresses(): Promise<Array<string>>;
    getActiveValidatorsAddresses(): Promise<Array<string>>;
    getDelegationsByValidator(validatorAddress: string): Promise<Array<Delegation>>;
    getDelegationsByDelegator(delegatorAddress: string): Promise<Array<Delegation>>;
}
interface ShardStructure {
    current: boolean;
    http: string;
    shardID: number;
    ws: string;
}
interface AvalancheNetwork extends Network {
    shardID: number;
    shardingStructure?: ShardStructure[];
}
export declare type Networkish = AvalancheNetwork | number;
export declare class ApiAvalancheProvider extends JsonRpcProvider implements AvalancheProvider {
    static getNetwork(network: Networkish, shardingStructure?: ShardStructure[]): AvalancheNetwork;
    static getFormatter(): AvalancheFormatter;
    formatter: AvalancheFormatter;
    _networkPromise: Promise<AvalancheNetwork>;
    _network: AvalancheNetwork;
    _shardingStructure?: ShardStructure[];
    constructor(url?: ConnectionInfo | string);
    get network(): AvalancheNetwork;
    detectNetwork(): Promise<AvalancheNetwork>;
    getCirculatingSupply(): Promise<BigNumber>;
    getTotalSupply(): Promise<BigNumber>;
    getEpoch(): Promise<number>;
    getEpochLastBlock(epoch: number): Promise<number>;
    getLeader(): Promise<string>;
    getValidatorsAddresses(): Promise<Array<string>>;
    getActiveValidatorsAddresses(): Promise<Array<string>>;
    getDelegationsByValidator(validatorAddress: string): Promise<Array<Delegation>>;
    getDelegationsByDelegator(delegatorAddress: string): Promise<Array<Delegation>>;
    _wrapTransaction(tx: Transaction, hash?: string): TransactionResponse;
    _wrapStakingTransaction(tx: StakingTransaction, hash?: string): StakingTransactionResponse;
    sendTransaction(signedTransaction: string | Promise<string>): Promise<TransactionResponse>;
    sendStakingTransaction(signedTransaction: string | Promise<string>): Promise<StakingTransactionResponse>;
    prepareRequest(method: string, params: any): [string, Array<any>];
    _getBlock(blockHashOrBlockTag: BlockTag | string | Promise<BlockTag | string>, includeTransactions?: boolean): Promise<Block | BlockWithTransactions>;
    getBlock(blockHashOrBlockTag: BlockTag | string | Promise<BlockTag | string>): Promise<Block>;
    getBlockWithTransactions(blockHashOrBlockTag: BlockTag | string | Promise<BlockTag | string>): Promise<BlockWithTransactions>;
    getTransaction(transactionHash: string): Promise<TransactionResponse>;
    getStakingTransaction(transactionHash: string): Promise<StakingTransactionResponse>;
    getCXTransactionReceipt(transactionHash: string): Promise<CXTransactionReceipt>;
}
export {};
