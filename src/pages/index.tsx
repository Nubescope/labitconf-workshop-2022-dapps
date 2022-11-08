import { useEffect } from 'react'
import { Button } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useAccount, useConnect, useDisconnect, useWaitForTransaction } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

import Nav from '../components/Nav'
import Heading from '../components/Heading'
import DaiBox from '../components/DaiBox'
import CdaiBox from '../components/CdaiBox'
import Footer from '../components/Footer'

import AuthorizeCompoundOverlay from '../components/AuthorizeCompoundOverlay'
import ConnectOverlay from '../components/ConnectOverlay'
import useCdaiAllowance from '../hooks/useCdaiAllowance'
import useCdaiApprove from '../hooks/useCdaiApprove'
import useCdaiDisapprove from '../hooks/useCdaiDisapprove'
import useDaiBalance from '../hooks/useDaiBalance'
import useCdaiMint from '../hooks/useCdaiMint'
import useCdaiUnderlyingBalance from '../hooks/useCdaiUnderlyingBalance'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  // Connection
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()

  // Read
  const { address, isConnected } = useAccount()
  const daiBalance = useDaiBalance(address)
  const cdaiBalance = useCdaiUnderlyingBalance(address)
  const cdaiAllowance = useCdaiAllowance(address)

  // Write
  const mint = useCdaiMint()
  const authorize = useCdaiApprove()
  const unauthorize = useCdaiDisapprove()

  // Tx info
  const mintTx = useWaitForTransaction({ hash: mint.data?.hash })
  const authTx = useWaitForTransaction({ hash: authorize.data?.hash })

  useEffect(() => {
    if (mintTx.isSuccess) {
      daiBalance.refetch()
      cdaiBalance.refetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mintTx.isSuccess])

  useEffect(() => {
    if (authTx.isSuccess) {
      cdaiAllowance.refetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authTx.isSuccess])

  return (
    <div>
      <Nav address={address} onConnectPress={connect} onDisconnectPress={disconnect} />

      <main className={styles.main}>
        <Heading />

        <div className={styles.content}>
          <DaiBox
            balance={daiBalance.formatted}
            onDepositPress={mint.write}
            isLoading={daiBalance.isLoading || mintTx.isLoading}
          />
          &nbsp; &lt; &gt; &nbsp;
          <CdaiBox balance={cdaiBalance.formatted} isLoading={cdaiBalance.isLoading} />
          {isConnected && !cdaiAllowance.isAuthorized && (
            <AuthorizeCompoundOverlay
              onAuthorizePress={authorize.write}
              isLoading={cdaiAllowance.isLoading || authTx.isLoading}
            />
          )}
          {!isConnected && <ConnectOverlay onConnectPress={connect} />}
        </div>
      </main>

      {/* Temporary button for debug purposes */}
      <Button onClick={() => unauthorize.write?.()}>Disable Market</Button>

      <Footer />
    </div>
  )
}

/**
 * Exports
 */

export default Home
