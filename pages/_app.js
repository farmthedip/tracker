import '../styles/globals.css'
import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react"
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import React from 'react'
import { mode } from "@chakra-ui/theme-tools"

function getLibrary() {
  return new Web3(new Web3.providers.HttpProvider("https://speedy-nodes-nyc.moralis.io/a1c8f6dd1d9faf78fda78394/bsc/mainnet"))
}

function StakingApp({ Component, pageProps }) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
        <ChakraProvider theme={extendTheme({
          styles: {
            Global: () => ({
              body: {
                bg: mode('#fffff', 'gray.800')(props)
              },
              html: {
                colorScheme: mode('light', 'dark')(props)
              }
            }),
          },
        })}>
          <Component {...pageProps} />
        </ChakraProvider>
    </Web3ReactProvider>
  )
}

export default StakingApp