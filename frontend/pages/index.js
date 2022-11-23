import Head from 'next/head'
import Image from 'next/image'

import NavBar from '@components/navbar/NavBar'
import Login from '@components/login/Login'
import Signup from '@components/login/Signup'
import Footer from '@components/footer/Footer'

import styles from '@styles/index.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SavaFave</title>
        <meta property="og:title" content="SaveFave" key="title" />
      </Head>
      <NavBar />
      <Login />
      <Signup />
      <Footer />
    </div>
  )
}
