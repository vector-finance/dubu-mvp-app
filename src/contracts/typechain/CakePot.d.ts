/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface CakePotInterface extends ethers.utils.Interface {
  functions: {
    "amounts(uint256,address)": FunctionFragment;
    "currentSeason()": FunctionFragment;
    "end()": FunctionFragment;
    "enter(uint256)": FunctionFragment;
    "exit(uint256)": FunctionFragment;
    "exited(uint256,address)": FunctionFragment;
    "maxRCounts(uint256)": FunctionFragment;
    "maxSRCounts(uint256)": FunctionFragment;
    "nRewards(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "period()": FunctionFragment;
    "rRewards(uint256)": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "rs(uint256,uint256)": FunctionFragment;
    "setPeriod(uint256)": FunctionFragment;
    "setRNG(address)": FunctionFragment;
    "srRewards(uint256)": FunctionFragment;
    "srs(uint256,uint256)": FunctionFragment;
    "ssrRewards(uint256)": FunctionFragment;
    "ssrs(uint256)": FunctionFragment;
    "startSeasonBlock()": FunctionFragment;
    "totalWeights(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "userCounts(uint256)": FunctionFragment;
    "weights(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "amounts",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "currentSeason",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "end", values?: undefined): string;
  encodeFunctionData(functionFragment: "enter", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "exit", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "exited",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "maxRCounts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "maxSRCounts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "nRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "period", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "rRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rs",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPeriod",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "setRNG", values: [string]): string;
  encodeFunctionData(
    functionFragment: "srRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "srs",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ssrRewards",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "ssrs", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "startSeasonBlock",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalWeights",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "userCounts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "weights",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(functionFragment: "amounts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentSeason",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "end", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "enter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exited", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "maxRCounts", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maxSRCounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nRewards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "period", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rRewards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setPeriod", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setRNG", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "srRewards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "srs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ssrRewards", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ssrs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startSeasonBlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalWeights",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userCounts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weights", data: BytesLike): Result;

  events: {
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export class CakePot extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: CakePotInterface;

  functions: {
    amounts(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "amounts(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    currentSeason(overrides?: CallOverrides): Promise<[BigNumber]>;

    "currentSeason()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    end(overrides?: Overrides): Promise<ContractTransaction>;

    "end()"(overrides?: Overrides): Promise<ContractTransaction>;

    enter(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "enter(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    exit(
      season: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "exit(uint256)"(
      season: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    exited(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "exited(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    maxRCounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "maxRCounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    maxSRCounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "maxSRCounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    nRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "nRewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    period(overrides?: CallOverrides): Promise<[BigNumber]>;

    "period()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    rRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "rRewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    rs(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "rs(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setPeriod(
      _period: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setPeriod(uint256)"(
      _period: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setRNG(_rng: string, overrides?: Overrides): Promise<ContractTransaction>;

    "setRNG(address)"(
      _rng: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    srRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "srRewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    srs(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "srs(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    ssrRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "ssrRewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    ssrs(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    "ssrs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    startSeasonBlock(overrides?: CallOverrides): Promise<[BigNumber]>;

    "startSeasonBlock()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalWeights(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalWeights(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    userCounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "userCounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    weights(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "weights(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  amounts(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "amounts(uint256,address)"(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  currentSeason(overrides?: CallOverrides): Promise<BigNumber>;

  "currentSeason()"(overrides?: CallOverrides): Promise<BigNumber>;

  end(overrides?: Overrides): Promise<ContractTransaction>;

  "end()"(overrides?: Overrides): Promise<ContractTransaction>;

  enter(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "enter(uint256)"(
    amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  exit(
    season: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "exit(uint256)"(
    season: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  exited(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "exited(uint256,address)"(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  maxRCounts(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "maxRCounts(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  maxSRCounts(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "maxSRCounts(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  nRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "nRewards(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  period(overrides?: CallOverrides): Promise<BigNumber>;

  "period()"(overrides?: CallOverrides): Promise<BigNumber>;

  rRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "rRewards(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  rs(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "rs(uint256,uint256)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  setPeriod(
    _period: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setPeriod(uint256)"(
    _period: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setRNG(_rng: string, overrides?: Overrides): Promise<ContractTransaction>;

  "setRNG(address)"(
    _rng: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  srRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "srRewards(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  srs(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "srs(uint256,uint256)"(
    arg0: BigNumberish,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  ssrRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "ssrRewards(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  ssrs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "ssrs(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  startSeasonBlock(overrides?: CallOverrides): Promise<BigNumber>;

  "startSeasonBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

  totalWeights(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalWeights(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  userCounts(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

  "userCounts(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  weights(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "weights(uint256,address)"(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    amounts(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "amounts(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentSeason(overrides?: CallOverrides): Promise<BigNumber>;

    "currentSeason()"(overrides?: CallOverrides): Promise<BigNumber>;

    end(overrides?: CallOverrides): Promise<void>;

    "end()"(overrides?: CallOverrides): Promise<void>;

    enter(amount: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "enter(uint256)"(
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    exit(season: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "exit(uint256)"(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    exited(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "exited(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    maxRCounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "maxRCounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxSRCounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "maxSRCounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "nRewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    period(overrides?: CallOverrides): Promise<BigNumber>;

    "period()"(overrides?: CallOverrides): Promise<BigNumber>;

    rRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "rRewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    rs(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "rs(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    setPeriod(_period: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setPeriod(uint256)"(
      _period: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setRNG(_rng: string, overrides?: CallOverrides): Promise<void>;

    "setRNG(address)"(_rng: string, overrides?: CallOverrides): Promise<void>;

    srRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "srRewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    srs(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "srs(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    ssrRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ssrRewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ssrs(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "ssrs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    startSeasonBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "startSeasonBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalWeights(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalWeights(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userCounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "userCounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weights(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "weights(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;
  };

  estimateGas: {
    amounts(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "amounts(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentSeason(overrides?: CallOverrides): Promise<BigNumber>;

    "currentSeason()"(overrides?: CallOverrides): Promise<BigNumber>;

    end(overrides?: Overrides): Promise<BigNumber>;

    "end()"(overrides?: Overrides): Promise<BigNumber>;

    enter(amount: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "enter(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    exit(season: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "exit(uint256)"(
      season: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    exited(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exited(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxRCounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "maxRCounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    maxSRCounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "maxSRCounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    nRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "nRewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    period(overrides?: CallOverrides): Promise<BigNumber>;

    "period()"(overrides?: CallOverrides): Promise<BigNumber>;

    rRewards(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "rRewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    rs(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rs(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setPeriod(_period: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setPeriod(uint256)"(
      _period: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setRNG(_rng: string, overrides?: Overrides): Promise<BigNumber>;

    "setRNG(address)"(_rng: string, overrides?: Overrides): Promise<BigNumber>;

    srRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "srRewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    srs(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "srs(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ssrRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ssrRewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ssrs(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    "ssrs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    startSeasonBlock(overrides?: CallOverrides): Promise<BigNumber>;

    "startSeasonBlock()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalWeights(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalWeights(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    userCounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "userCounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weights(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "weights(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    amounts(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "amounts(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentSeason(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentSeason()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    end(overrides?: Overrides): Promise<PopulatedTransaction>;

    "end()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    enter(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "enter(uint256)"(
      amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    exit(
      season: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "exit(uint256)"(
      season: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    exited(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "exited(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxRCounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maxRCounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    maxSRCounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "maxSRCounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "nRewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    period(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "period()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rRewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    rs(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rs(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setPeriod(
      _period: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setPeriod(uint256)"(
      _period: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setRNG(_rng: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "setRNG(address)"(
      _rng: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    srRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "srRewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    srs(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "srs(uint256,uint256)"(
      arg0: BigNumberish,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ssrRewards(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ssrRewards(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ssrs(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ssrs(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    startSeasonBlock(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "startSeasonBlock()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalWeights(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalWeights(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    userCounts(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "userCounts(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    weights(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "weights(uint256,address)"(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
