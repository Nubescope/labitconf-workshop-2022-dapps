import type { NextPage } from 'next'

import Nav from '../components/Nav'
import Heading from '../components/Heading'
import DaiBox from '../components/DaiBox'
import CdaiBox from '../components/CdaiBox'
import Footer from '../components/Footer'

import useDaiBalance from '../hooks/useDaiBalance'
import useCdaiUnderlyingBalance from '../hooks/useCdaiUnderlyingBalance'

import styles from '../styles/Home.module.css'

/**
 * Paso 1: queries para leer data de un contrato
 */

const Home: NextPage = () => {
  const address = '0xD2e2B135BCA466271069c394f655e0c70535C2dd'

  const daiBalance = useDaiBalance(address)
  const cdaiBalance = useCdaiUnderlyingBalance(address)

  return (
    <div>
      <Nav address={address} />

      <main className={styles.main}>
        <Heading />

        <div className={styles.content}>
          <DaiBox balance={daiBalance.formatted} isLoading={daiBalance.isLoading} />
          &nbsp; &lt; &gt; &nbsp;
          <CdaiBox balance={cdaiBalance.formatted} isLoading={cdaiBalance.isLoading} />
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
