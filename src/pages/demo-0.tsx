import type { NextPage } from 'next'

import Nav from '../components/Nav'
import Heading from '../components/Heading'
import DaiBox from '../components/DaiBox'
import CdaiBox from '../components/CdaiBox'
import Footer from '../components/Footer'

import styles from '../styles/Home.module.css'

/**
 * Paso 0: componentes mockeados
 */

const Home: NextPage = () => {
  const address = '0xD2e2B135BCA466271069c394f655e0c70535C2dd'

  return (
    <div>
      <Nav address={address} />

      <main className={styles.main}>
        <Heading />

        <div className={styles.content}>
          <DaiBox balance="0.00" />
          &nbsp; &lt; &gt; &nbsp;
          <CdaiBox balance="0.00" />
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
