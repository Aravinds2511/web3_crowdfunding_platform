import crowdFunding from "../artifacts/contracts/CrowdFunding.sol/CrowdFunding.json";
import { contractAddress, ownerAddress } from "@/config";

export const CrowdFundingABI = crowdFunding.abi;
export const CrowdFundingAddress = contractAddress;
export const OwnerAddress = ownerAddress;
