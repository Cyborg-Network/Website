import Head from 'next/head'
import Image from 'next/image'
import Button from '@/components/Button'
import connectImage from '../../public/images/connect-app.svg'
import connectImageMobile from '../../public/images/connect-app-mob.svg'
import rocket from '../../public/images/rocket.svg'
import Privacy from '../../public/images/privacy.svg'
import Realtime from '../../public/images/realtime.svg'
import Node from '../../public/images/node.svg'
import { motion } from "framer-motion"


export default function CyborgConnect() {
  return (
    <>
      <Head>
        <title>Cyborg Connect</title>
        <meta name="description" content="Cyborg Network - An Untapped Market" />
      </Head>

      <section className='common-section connect-hero-section flow-hidden'>
        <div className='container'>
          <div className='home-wrap d-flex a-center'>
            <motion.div className='d-left' viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 2 }} initial={{ opacity: 0, translateX: -200 }} whileInView={{ opacity: 1, translateX: 0 }}>
            <div className='hw-left'>
            <h1 className="hero-heading">Deploy <span className='text-gradient'>AI Apps</span> Anywhere You Desire</h1>
            <p className='home-desc'>Cyborg supports a vast network of AI accelerators at the edge powered by blockchain</p>
            <Button title="Deploy Now" link="/deploy-app" target="_blank" size="btn-md" icon={rocket}/>
            </div>
            </motion.div>
            </div>
          </div>
          <div className='connect-app'>
          <motion.div viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 2 }} initial={{ opacity: 0, translateX: 200 }} whileInView={{ opacity: 1, translateX: 0 }}>
            <div className="hw-right">
              <Image className='app-image-web' src={connectImage} alt='home-cover-image' />
              <Image className='app-image-mob' src={connectImageMobile} alt='home-cover-image' />
            </div>
            </motion.div>
          </div>
      </section>

      <section className='common-section globe-section flow-hidden'>
        <div className='gs-wrap'>
          <motion.div className='gs-list' viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 2 }} initial={{ opacity: 0, translateX: -200 }} whileInView={{ opacity: 1, translateX: 0 }}>
            <div className='gs-item'>
              <h4>Integrity</h4>
              <p>Run AI models with <strong>Zero-Knowledge SNARK-based</strong> integrity verification, powered by <strong>Cyborg Network's NeuroZK</strong>. Ensure trustless and verifiable execution across Distributed node networks.</p>
            </div>
            <div className='gs-item'>
              <h4>Compliance</h4>
              <p>All <strong>Cyborg node operators</strong> undergo <strong>strict compliance and fraud prevention checks</strong>, ensuring a <strong>secure and trustworthy</strong> environment for your AI workloads.</p>
            </div>
            <div className='gs-item'>
              <h4>Privacy</h4>
              <p>Leverage <strong>end-to-end encryption</strong> with <strong>private key-based access control</strong>, ensuring <strong>confidential model storage</strong> and <strong>data protection</strong> without compromise.</p>
            </div>
          </motion.div>
          <motion.div className="gs-text" viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 1.5 }} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}>
            <h5>Go Global</h5>
            <p>with hyperlocal connectivity using Cyborg's on demand AI compute</p>
          </motion.div>
          <motion.div className='gs-list' viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 2 }} initial={{ opacity: 0, translateX: 200 }} whileInView={{ opacity: 1, translateX: 0 }}>
          <div className='gs-item'>
              <h4>Speed</h4>
              <p>Cyborg Network is powered by <strong>NVIDIA's industrial-grade AI accelerator modules</strong>, delivering up to <strong>200 TOPS of peak compute</strong>, enabling <strong>low-latency AI inference</strong> for real-time applications.</p>
            </div>
            <div className='gs-item'>
              <h4>Flexibility</h4>
              <p>Deploy models <strong>on-demand, anywhere, anytime</strong>, dynamically scaling inference workloads based on your <strong>compute and latency requirements.</strong></p>
            </div>
            <div className='gs-item'>
              <h4>Availability</h4>
              <p>Cyborg supports a <strong>wide range of AI workloads</strong>, from <strong>linear regression and computer vision to large language models (LLMs) and deep neural networks</strong>, ensuring <strong>broad compatibility</strong> for diverse AI applications.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className='common-section tops-section flow-hidden'>
        <div className='container'>
          <motion.h1 className="hero-heading" viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 1.5 }} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}>Enjoy up to <span className='text-gradient light'>200 TOPS</span> on a single device</motion.h1>
        </div>
      </section>

      <section className='common-section about-hero-section flow-hidden'>
        <div className='container'>
          <div className='about-wrap d-flex a-center d-reverse'>
          <motion.div className='d-left' viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 2, delay: 0.1 }} initial={{ opacity: 0, translateX: 200 }} whileInView={{ opacity: 1, translateX: 0 }}>
          <div className='aw-left'>
          <Image src={Privacy} className="aw-img" alt='Our Mission'/>
          </div>
          </motion.div>
          <motion.div className='d-right' viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 2, delay: 0.1 }} initial={{ opacity: 0, translateX: -200 }} whileInView={{ opacity: 1, translateX: 0 }}>
          <div className="aw-right">
          <div className='aw-detail'>
            <h2>Privacy-Locked Dashboard</h2>
            <p>Secure your dashboard with key-based encryption, ensuring exclusive access to your data.</p>
          </div>
          </div>
          </motion.div>
          </div>
          <div className='about-wrap d-flex a-center'>
          <motion.div className='d-left' viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 2, delay: 0.2 }} initial={{ opacity: 0, translateX: -200 }} whileInView={{ opacity: 1, translateX: 0 }}>
          <div className='aw-left'>
          <Image src={Realtime} className="aw-img" alt='Our Vision'/>
          </div>
          </motion.div>
          <motion.div className='d-right' viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 2, delay: 0.2 }} initial={{ opacity: 0, translateX: 200 }} whileInView={{ opacity: 1, translateX: 0 }}>
          <div className="aw-right">
          <div className='aw-detail'>
            <h2>Real-Time Metrics</h2>
            <p>Monitor model performance in real time with live analytics and inference tracking.</p>
          </div>
          </div>
          </motion.div>
          </div>
          <div className='about-wrap d-flex a-center d-reverse'>
          <motion.div className='d-left' viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 2, delay: 0.3 }} initial={{ opacity: 0, translateX: 200 }} whileInView={{ opacity: 1, translateX: 0 }}>
          <div className='aw-left'>
          <Image src={Node} className="aw-img" alt='Our Values'/>
          </div>
          </motion.div>
          <motion.div className='d-right' viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 2, delay: 0.3 }} initial={{ opacity: 0, translateX: -200 }} whileInView={{ opacity: 1, translateX: 0 }}>
          <div className="aw-right">
          <div className='aw-detail'>
            <h2>Integrated Node List</h2>
            <p>Seamlessly manage and monitor all your deployments in one unified interface.</p>
          </div>
          </div>
          </motion.div>
          </div>
          </div>
        </section>

        <section className='common-section fiveg-section flow-hidden'>
        <div className='container'>
          <div className='fiveg-wrap'>
          <motion.h1 className="hero-heading" viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateX: -75 }} whileInView={{ opacity: 1, translateX: 0 }}>Cyborg AI inference Nodes are <span className='text-gradient'>5G Ready!!!</span></motion.h1>
        </div>
        </div>
      </section>

    </>
  )
}
