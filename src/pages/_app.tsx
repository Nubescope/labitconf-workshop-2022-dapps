import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { getDefaultProvider } from 'ethers'
import { WagmiConfig, createClient } from 'wagmi'
import { ChakraProvider } from '@chakra-ui/react'
import { NETWORK_ID } from '../constants'
import { useIsMounted } from '../hooks/useIsMounted'
import Head from 'next/head'

const wagmiClient = createClient({
  autoConnect: true,
  provider: getDefaultProvider(NETWORK_ID),
})

function MyApp({ Component, pageProps }: AppProps) {
  const isMounted = useIsMounted()

  if (!isMounted) {
    return null
  }
  return (
    <>
      <Head>
        <title>Compound Finance Demo</title>
        <link rel="icon" href="/underscope.png" />
      </Head>

      <ChakraProvider>
        <WagmiConfig client={wagmiClient}>
          <Component {...pageProps} />
        </WagmiConfig>
      </ChakraProvider>
    </>
  )
}

export default MyApp
