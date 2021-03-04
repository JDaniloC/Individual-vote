import Head from 'next/head'
import VotePanel from '../components/VotePanel'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head> Votação </Head>
      <VotePanel />
    </div>
  )
}
