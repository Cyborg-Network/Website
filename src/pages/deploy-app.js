import Head from 'next/head'
import Image from 'next/image'
import Button from '@/components/Button'
import appImg from '../../public/images/app-launch.png'
import bell from '../../public/images/bell.svg'
import { motion } from "framer-motion"
import Logo from '@/components/Logo'


export default function SoonPage() {
  SoonPage.noLayout = true;
  return (
    <>
      <Head>
        <title>App Launching Soon</title>
        <meta name="description" content="Cyborg Network - An Untapped Market" />
      </Head>

      <section className='app-soon-section soon-section flow-hidden'>
        <div className='container'>
          <div className='py-30'>
            <Logo/>
          </div>
          <div className='home-wrap d-flex a-center'>
            <motion.div className='d-left' viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 2 }} initial={{ opacity: 0, translateX: -200 }} whileInView={{ opacity: 1, translateX: 0 }}>
            <div className='hw-left'>
            <h1 className="hero-heading">App Launching Soon</h1>
            <p className='home-desc'>Cyborg Connect helps AI apps deploy pre-trained models instantly across our global network of hyperlocal AI accelerators — delivering lightning-fast processing and ultra-low latency for your users.</p>
            <Button title="Notify Me" link="/connect-miner" size="btn-md" icon={bell}/>
            </div>
            </motion.div>

            <motion.div className='d-right' viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 2 }} initial={{ opacity: 0, translateX: 200 }} whileInView={{ opacity: 1, translateX: 0 }}>
            <div className='hw-right'>
            <Image src={appImg} alt='home-cover-image' />
            </div>
            </motion.div>
            </div>
          </div>
      </section>
    </>
  )
}
