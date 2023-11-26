'use client';
import './globals.css';
import * as React from 'react';
 
import { ChainProvider } from '@cosmos-kit/react';
import { chains, assets } from 'chain-registry';
import { wallets as keplrWallet } from "@cosmos-kit/keplr";
 
// Import this in your top-level route/layout
import "@interchain-ui/react/styles";

import {
  twilightTestnet,
  twilightTestnetAssets,
  signerOptions
} from "@/lib/chain"
import { App } from '@/pages/App';
import { ChakraProvider } from '@chakra-ui/react'
import { defaultTheme } from '@/config';


export default function Home() {
  return (
    <ChakraProvider theme={defaultTheme}>
      <ChainProvider
        chains={[...chains, twilightTestnet]} // supported chains
        assetLists={[...assets, twilightTestnetAssets]} // supported asset lists
        wallets={keplrWallet} // supported wallets
        signerOptions={signerOptions} // required if `wallets` contains mobile wallets
      >
       <App/>
      </ChainProvider>
    </ChakraProvider>
  )
}
