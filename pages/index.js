import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Billify.dev -Automated SaaS Billing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Billify.dev - Automated SaaS Billing" />
        
        <p className="description">
        Turn any database change into a billable event, without a programmer.
        </p>
      </main>

      <Footer />
    </div>
  )
}
