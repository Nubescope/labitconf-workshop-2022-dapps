import { useEffect } from 'react'
import type { NextPage } from 'next'
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
import useDaiBalance from '../hooks/useDaiBalance'
import useCdaiMint from '../hooks/useCdaiMint'
import useCdaiUnderlyingBalance from '../hooks/useCdaiUnderlyingBalance'

import styles from '../styles/Home.module.css'

/**
 * Paso 6: "minteamos" CDAI a partir del DAI del usuario y recargamos los balances
 */

const Home: NextPage = () => {
  // Connection
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect()
  const { address, isConnected } = useAccount()

  // Read
  const daiBalance = useDaiBalance(address)
  const cdaiBalance = useCdaiUnderlyingBalance(address)
  const cdaiAllowance = useCdaiAllowance(address)

  // Write
  const authorize = useCdaiApprove()
  const mint = useCdaiMint()

  // Tx info
  const authTx = useWaitForTransaction({ hash: authorize.data?.hash })
  const mintTx = useWaitForTransaction({ hash: mint.data?.hash })

  // Effects
  useEffect(() => {
    if (authTx.isSuccess) {
      cdaiAllowance.refetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authTx.isSuccess])

  useEffect(() => {
    if (mintTx.isSuccess) {
      daiBalance.refetch()
      cdaiBalance.refetch()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mintTx.isSuccess])

  return (
    <div>
      <Nav address={address} onConnectPress={connect} onDisconnectPress={disconnect} />

      <main className={styles.main}>
        <Heading />

        <div className={styles.content}>
          <DaiBox
            balance={daiBalance.formatted}
            isLoading={daiBalance.isLoading || mintTx.isLoading}
            onDepositPress={mint.write}
          />
          &nbsp; &lt; &gt; &nbsp;
          <CdaiBox balance={cdaiBalance.formatted} isLoading={cdaiBalance.isLoading} />
          {isConnected && !cdaiAllowance.isAuthorized && (
            <AuthorizeCompoundOverlay
              isLoading={cdaiAllowance.isLoading || authTx.isLoading}
              onAuthorizePress={authorize.write}
            />
          )}
          {!isConnected && <ConnectOverlay onConnectPress={connect} />}
        </div>
      </main>
      <Footer />
    </div>
  )
}

/**
 * Exports
 */

export default Home
