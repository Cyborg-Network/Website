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
        <meta name="robots" content="index, follow" />

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <meta name="theme-color" content="#00B0B0" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.cyborgnetwork.io/" />
        <meta property="og:title" content="Cyborg Network | Decentralized AI Infrastructure Platform" />
        <meta
          property="og:description"
          content="Deploy and scale AI models across decentralized infrastructure with Cyborg Network."
        />
        <meta property="og:image" content="/images/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cyborg Network | Decentralized AI Infrastructure Platform" />
        <meta
          name="twitter:description"
          content="Build, deploy, and scale AI workloads on decentralized infrastructure."
        />
        <meta name="twitter:image" content="/images/og-image.jpg" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Cyborg Network",
              url: "https://www.cyborgnetwork.io",
              logo: "https://www.cyborgnetwork.io/images/logo.png",
              description:
                "Cyborg Network provides decentralized AI infrastructure for scalable model deployment and distributed inference.",
              sameAs: [
                "https://twitter.com/",
                "https://linkedin.com/company/",
                "https://github.com/"
              ]
            }),
          }}
        />
      </Head>
      <Headline/>
      <Header/>
      <main>
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
  )
}
