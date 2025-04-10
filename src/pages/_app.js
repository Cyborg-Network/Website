import Header from '@/components/Header';
import Headline from '@/components/Headline';
import Footer from '@/components/Footer';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const noLayout = Component.noLayout;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {noLayout ? (
        <Component {...pageProps} />
      ):(
        <>
        <Headline/>
        <Header/>
        <Component {...pageProps} />
        <Footer/>
        </>
      )
    }
  </>
  )
}
