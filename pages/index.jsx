import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <meta charset="UTF-8"/>
        {/* <!-- meta tag for responsive --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Illegal Sound Entertainment Group</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
        <main>

        </main>
        <Footer />
    </div>
  )
}
