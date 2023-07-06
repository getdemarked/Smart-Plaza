import type { AppProps } from "next/app";
import { ThirdwebProvider, coinbaseWallet, localWallet, magicLink, metamaskWallet, paperWallet, safeWallet, smartWallet, trustWallet, walletConnect } from "@thirdweb-dev/react";
import { Navbar } from "../components/Navbar/Navbar";
import NextNProgress from "nextjs-progressbar";
import { NETWORK } from "../const/contractAddresses";
import "../styles/globals.css";
import { Ethereum, Polygon,  } from "@thirdweb-dev/chains"; //mainnet
import { Mumbai, BaseGoerli } from "@thirdweb-dev/chains"; //testnet


function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <ThirdwebProvider 

    activeChain={NETWORK}
    supportedChains={[
      //testnet
      Mumbai,
      BaseGoerli,
      //mainnet
      Ethereum,
      Polygon
    ]}
    supportedWallets={
      [
        paperWallet({
          clientId: "dd2a7b91-e862-4542-b6cd-1a6e8e23b277",
        }),
        /*magicLink({
          apiKey: "",
        }),
          smartWallet({
          factoryAddress: "",
          thirdwebApiKey: "",
          gasless: false,
          personalWallets: [
            metamaskWallet(),
            localWallet()
          ]
        }),*/
        metamaskWallet(),
        coinbaseWallet(),
        walletConnect(),
        trustWallet(),
        safeWallet(),
        localWallet(),
      ]
    }
      >
      {/* Progress bar when navigating between pages */}
      <NextNProgress
        color="var(--color-tertiary)"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />

      {/* Render the navigation menu above each component */}
      <Navbar />
      {/* Render the actual component (page) */}
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
