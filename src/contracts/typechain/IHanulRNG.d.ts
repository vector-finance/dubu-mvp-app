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

interface IHanulRNGInterface extends ethers.utils.Interface {
  functions: {
    "generateRandomNumber(uint256,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "generateRandomNumber",
    values: [BigNumberish, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "generateRandomNumber",
    data: BytesLike
  ): Result;

  events: {};
}

export class IHanulRNG extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IHanulRNGInterface;

  functions: {
    generateRandomNumber(
      seed: BigNumberish,
      sender: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "generateRandomNumber(uint256,address)"(
      seed: BigNumberish,
      sender: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  generateRandomNumber(
    seed: BigNumberish,
    sender: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "generateRandomNumber(uint256,address)"(
    seed: BigNumberish,
    sender: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    generateRandomNumber(
      seed: BigNumberish,
      sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "generateRandomNumber(uint256,address)"(
      seed: BigNumberish,
      sender: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    generateRandomNumber(
      seed: BigNumberish,
      sender: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "generateRandomNumber(uint256,address)"(
      seed: BigNumberish,
      sender: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    generateRandomNumber(
      seed: BigNumberish,
      sender: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "generateRandomNumber(uint256,address)"(
      seed: BigNumberish,
      sender: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
