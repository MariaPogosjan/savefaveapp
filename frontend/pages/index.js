import Head from 'next/head'
import Image from 'next/image'
import Button from '@components/buttons/Button'
import Heading from '@components/Heading'
import styles from '@styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Button></Button>
      <Heading></Heading>
      <h1>SaveFave</h1>
    </div>
  )
}
