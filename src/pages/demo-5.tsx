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
import useCdaiUnderlyingBalance from '../hooks/useCdaiUnderlyingBalance'

import styles from '../styles/Home.module.css'

/**
 * Paso 5: obtenemos info de la tx para así informar al usuario del
 * progreso y recargar las queries relacionadas
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

  // Tx info
  const authTx = useWaitForTransaction({ hash: authorize.data?.hash })

  // Effects
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
          <DaiBox balance={daiBalance.formatted} isLoading={daiBalance.isLoading} />
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
