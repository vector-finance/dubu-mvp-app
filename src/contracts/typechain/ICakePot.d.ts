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

interface ICakePotInterface extends ethers.utils.Interface {
  functions: {
    "amounts(uint256,address)": FunctionFragment;
    "checkEnd()": FunctionFragment;
    "currentSeason()": FunctionFragment;
    "end()": FunctionFragment;
    "enter(uint256)": FunctionFragment;
    "exit(uint256)": FunctionFragment;
    "rs(uint256,uint256)": FunctionFragment;
    "srs(uint256,uint256)": FunctionFragment;
    "ssrs(uint256,uint256)": FunctionFragment;
    "totalAmounts(uint256)": FunctionFragment;
    "totalWeights(uint256)": FunctionFragment;
    "userCounts(uint256)": FunctionFragment;
    "weights(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "amounts",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "checkEnd", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "currentSeason",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "end", values?: undefined): string;
  encodeFunctionData(functionFragment: "enter", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "exit", values: [BigNumberish]): string;
  encodeFunctionData(
    functionFragment: "rs",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "srs",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "ssrs",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalAmounts",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalWeights",
    values: [BigNumberish]
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
  decodeFunctionResult(functionFragment: "checkEnd", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "currentSeason",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "end", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "enter", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "exit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "srs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ssrs", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalAmounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalWeights",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userCounts", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "weights", data: BytesLike): Result;

  events: {
    "End(uint256)": EventFragment;
    "Enter(uint256,address,uint256)": EventFragment;
    "Exit(uint256,address,uint256)": EventFragment;
    "Start(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "End"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Enter"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Exit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Start"): EventFragment;
}

export class ICakePot extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: ICakePotInterface;

  functions: {
    amounts(
      season: BigNumberish,
      who: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "amounts(uint256,address)"(
      season: BigNumberish,
      who: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    checkEnd(overrides?: CallOverrides): Promise<[boolean]>;

    "checkEnd()"(overrides?: CallOverrides): Promise<[boolean]>;

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

    rs(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "rs(uint256,uint256)"(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    srs(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "srs(uint256,uint256)"(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    ssrs(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "ssrs(uint256,uint256)"(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalAmounts(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalAmounts(uint256)"(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalWeights(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "totalWeights(uint256)"(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userCounts(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "userCounts(uint256)"(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    weights(
      season: BigNumberish,
      who: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "weights(uint256,address)"(
      season: BigNumberish,
      who: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  amounts(
    season: BigNumberish,
    who: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "amounts(uint256,address)"(
    season: BigNumberish,
    who: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  checkEnd(overrides?: CallOverrides): Promise<boolean>;

  "checkEnd()"(overrides?: CallOverrides): Promise<boolean>;

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

  rs(
    season: BigNumberish,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "rs(uint256,uint256)"(
    season: BigNumberish,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  srs(
    season: BigNumberish,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "srs(uint256,uint256)"(
    season: BigNumberish,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  ssrs(
    season: BigNumberish,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  "ssrs(uint256,uint256)"(
    season: BigNumberish,
    index: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  totalAmounts(
    season: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalAmounts(uint256)"(
    season: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalWeights(
    season: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "totalWeights(uint256)"(
    season: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userCounts(
    season: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "userCounts(uint256)"(
    season: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  weights(
    season: BigNumberish,
    who: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "weights(uint256,address)"(
    season: BigNumberish,
    who: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    amounts(
      season: BigNumberish,
      who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "amounts(uint256,address)"(
      season: BigNumberish,
      who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkEnd(overrides?: CallOverrides): Promise<boolean>;

    "checkEnd()"(overrides?: CallOverrides): Promise<boolean>;

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

    rs(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "rs(uint256,uint256)"(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    srs(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "srs(uint256,uint256)"(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    ssrs(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    "ssrs(uint256,uint256)"(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    totalAmounts(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalAmounts(uint256)"(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalWeights(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalWeights(uint256)"(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userCounts(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "userCounts(uint256)"(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weights(
      season: BigNumberish,
      who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "weights(uint256,address)"(
      season: BigNumberish,
      who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    End(season: BigNumberish | null): EventFilter;

    Enter(
      season: BigNumberish | null,
      who: string | null,
      amount: null
    ): EventFilter;

    Exit(
      season: BigNumberish | null,
      who: string | null,
      amount: null
    ): EventFilter;

    Start(season: BigNumberish | null): EventFilter;
  };

  estimateGas: {
    amounts(
      season: BigNumberish,
      who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "amounts(uint256,address)"(
      season: BigNumberish,
      who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    checkEnd(overrides?: CallOverrides): Promise<BigNumber>;

    "checkEnd()"(overrides?: CallOverrides): Promise<BigNumber>;

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

    rs(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "rs(uint256,uint256)"(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    srs(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "srs(uint256,uint256)"(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    ssrs(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "ssrs(uint256,uint256)"(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalAmounts(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalAmounts(uint256)"(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalWeights(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "totalWeights(uint256)"(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userCounts(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "userCounts(uint256)"(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    weights(
      season: BigNumberish,
      who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "weights(uint256,address)"(
      season: BigNumberish,
      who: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    amounts(
      season: BigNumberish,
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "amounts(uint256,address)"(
      season: BigNumberish,
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    checkEnd(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "checkEnd()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

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

    rs(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "rs(uint256,uint256)"(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    srs(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "srs(uint256,uint256)"(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    ssrs(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "ssrs(uint256,uint256)"(
      season: BigNumberish,
      index: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalAmounts(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalAmounts(uint256)"(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalWeights(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "totalWeights(uint256)"(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userCounts(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "userCounts(uint256)"(
      season: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    weights(
      season: BigNumberish,
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "weights(uint256,address)"(
      season: BigNumberish,
      who: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
