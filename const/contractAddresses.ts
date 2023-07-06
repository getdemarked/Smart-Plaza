/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Polygon, Mumbai } from "@thirdweb-dev/chains";
export const NETWORK = Mumbai;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0xD22b12C591A498286A92A72a7e0bF6af691f5502";

// 3. The address of your NFT collection smart contract.
export const NFT_COLLECTION_ADDRESS =
  "0xDFf8aEc7264A5bb77Bcc056BfEb4AB23f12E648D";

// (Optional) Set up the URL of where users can view transactions on
export const ETHERSCAN_URL = "https://mumbai.polygonscan.com/";