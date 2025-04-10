import Head from 'next/head'
import Image from 'next/image'
import Button from '@/components/Button'
import miner from '../../public/images/miner.png'
import bell from '../../public/images/bell.svg'
import { motion } from "framer-motion"
import Logo from '@/components/Logo'


export default function SoonPage() {
  SoonPage.noLayout = true;
  return (
    <>
      <Head>
        <title>Pre-sale Coming Soon</title>
        <meta name="description" content="Cyborg Network - An Untapped Market" />
      </Head>

      <section className='miner-soon-section soon-section flow-hidden'>
        <div className='container'>
          <div className='py-30'>
            <Logo/>
          </div>
          <div className='home-wrap d-flex a-center'>
            <motion.div className='d-left' viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 2 }} initial={{ opacity: 0, translateX: -200 }} whileInView={{ opacity: 1, translateX: 0 }}>
            <div className='hw-left'>
            <h1 className="hero-heading">Pre-sale Coming Soon</h1>
            <p className='home-desc'>Turn compute into income. Cyborg Miner lets you run AI inference tasks from your space and earn rewards — no crypto mining, just real utility powering the next-gen AI economy. Be the infrastructure behind the next generation of intelligent apps. Plug in. Power up. Get rewarded.</p>
            <Button title="Notify Me" link="/connect-miner" size="btn-md" icon={bell}/>
            </div>
            </motion.div>

            <motion.div className='d-right' viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 2 }} initial={{ opacity: 0, translateX: 200 }} whileInView={{ opacity: 1, translateX: 0 }}>
            <div className='hw-right'>
            <Image src={miner} alt='home-cover-image' />
            </div>
            </motion.div>
            </div>
          </div>
      </section>
    </>
  )
}
