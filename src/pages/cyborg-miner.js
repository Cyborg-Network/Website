import Head from 'next/head'
import Image from 'next/image'
import Button from '@/components/Button'
import rewards from '../../public/images/rewards.svg'
import uptime from '../../public/images/uptime.svg'
import reputation from '../../public/images/reputation.svg'
import office from '../../public/images/nvidia/office.svg'
import shoopingCentre from '../../public/images/nvidia/shopping-centre.svg'
import edgeData from '../../public/images/nvidia/edge-data.svg'
import home from '../../public/images/nvidia/home.svg'
import nvidiaText from '../../public/images/nvidia/nvidia-text.svg'
import plug from '../../public/images/plug.svg'
import Miner from '../../public/images/miner.png'
import { motion } from "framer-motion"


export default function CyborgMiner() {
  return (
    <>
      <Head>
        <title>Cyborg Connect</title>
        <meta name="description" content="Cyborg Network - An Untapped Market" />
      </Head>

      <section className='common-section miner-hero-section flow-hidden'>
        <div className='container'>
        <div className='miner-wrap d-flex a-center'>
          <motion.div className='d-left'  viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 1.5, delay: 0.25 }} initial={{ opacity: 0, translateX: -100 }} whileInView={{ opacity: 1, translateX: 0 }}>
          <div className='miner-left'>
          <Image src={Miner} alt='solution-cover-image'/>
          </div>
          </motion.div>
          <div className='d-right'>
          <div className="miner-right">
            <motion.h1 viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1, delay: 0.05 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>Connect</motion.h1>
            <motion.h1  viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1, delay: 0.15 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>Contribute</motion.h1>
            <motion.h1 viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1, delay: 0.25 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>Earn</motion.h1>
          </div>
          </div>
          </div>
          <motion.p viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 1.5, delay: 0.25 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>Join a groundbreaking network of AI miners, where your compute power fuels the future of intelligent infrastructure and earns you passive income.</motion.p>
          <div className='text-center'>
          <motion.div viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 1.5, delay: 0.5 }} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}>
          <Button title="Connect Now" link="/connect-miner" target="_blank" size="btn-md" icon={plug}/>
          </motion.div>
          </div>
        </div>
        </section>

      <section className='common-section nvidia-section flow-hidden'>
        <div className='container'>
          <div className='nv-wrap'>
            <motion.div className='nv-text'  viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 1.5, delay: 0.25 }} initial={{ opacity: 0, translateX: -100 }} whileInView={{ opacity: 1, translateX: 0 }}>
              <Image src={nvidiaText} alt='Nvidia'/>  
            </motion.div>
            <div className='nv-flag'>
              <motion.div class="nv-flag-item" viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1, delay: 0.35 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
                <Image src={office} alt='office'/> 
              </motion.div>
              <motion.div class="nv-flag-item" viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1, delay: 0.45 }} initial={{ opacity: 0, translateY: -50 }} whileInView={{ opacity: 1, translateY: 0 }}>
                <Image src={shoopingCentre} alt='shopping centre'/> 
              </motion.div>
              <motion.div class="nv-flag-item" viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1, delay: 0.55 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}> 
                <Image src={edgeData} alt='edge data centre'/>  
              </motion.div>
              <motion.div class="nv-flag-item" viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1,delay: 0.65 }} initial={{ opacity: 0, translateY: -50 }} whileInView={{ opacity: 1, translateY: 0 }}> 
                <Image src={home} alt='home'/>  
              </motion.div>
            </div>
          </div>         
        </div>
      </section>

       <section className='common-section features-section flow-hidden'>
        <div className='container'>
        <motion.h1 className='hero-heading' viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 1.5, delay: 0.25 }} initial={{ opacity: 0, translateX: -100 }} whileInView={{ opacity: 1, translateX: 0 }}><span className='text-gradient light'>Features</span></motion.h1>
          <div className='fs-wrap'>
            <motion.div className='fs-item'  viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 1.5, delay: 0.25 }} initial={{ opacity: 0, translateX: 100 }} whileInView={{ opacity: 1, translateX: 0 }}>
              <p><span className='break'>Plug and Play!! </span>Cyborg miners are pre loaded with robust software to get you going without any installation.</p>
              <h1 className='text-gradient batman'>1</h1>
            </motion.div>
            <motion.div className='fs-item'  viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 1.5, delay: 0.35 }} initial={{ opacity: 0, translateX: 100 }} whileInView={{ opacity: 1, translateX: 0 }}>
              <p>Anybody can mine!!
              No technical expertise is required to run a cyborg miner, you just need a mobile phone or a computer and stable internet connection.</p>
              <h1 className='text-gradient batman'>2</h1>
            </motion.div>
            <motion.div className='fs-item'  viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 1.5, delay: 0.45 }} initial={{ opacity: 0, translateX: 100 }} whileInView={{ opacity: 1, translateX: 0 }}>
              <p>Light and Powerful!!
              Miners consume only as much power as charging your mobile phone. They are small and easy to store.</p>
              <h1 className='text-gradient batman'>3</h1>
            </motion.div>
          </div>
        </div>
        </section>

        <section className='common-section unlock-section flow-hidden'>
          <div className='container'>
            <motion.h1 className="hero-heading" viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}><span>Unlock</span> Limitless Income</motion.h1>
          </div>
        </section>

        <section className='common-section card-section flow-hidden'>
        <div className='container'>
          <motion.h1 className="hero-heading" viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}><span className='text-gradient light'>Just connect to power and the internet—let your miner do the rest</span></motion.h1>
          <div className='card-wrap'>
            <motion.div className="card-item" viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <div className='card-icon'>
                <Image src={rewards} alt='icon'/>
              </div>
              <div>
              <h5><span className='text-gradient light'>Execution</span> Rewards</h5>
              <p>Rent out your miner's compute power to Cyborg and receive <strong>monthly payouts</strong> in local fiat or crypto. Passive income, on your terms!</p>
              </div>
            </motion.div>
            <motion.div className="card-item" viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <div className='card-icon'>
                <Image src={uptime} alt='icon'/>
              </div>
              <div>
              <h5><span className='text-gradient light'>Uptime</span> Bonus</h5>
              <p>Earn <strong>BORG tokens</strong> for maintaining high uptime—even when your miner is idle. Stay online, get rewarded!</p>
              </div>
            </motion.div>
            <motion.div className="card-item" viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <div className='card-icon'>
                <Image src={reputation} alt='icon'/>
              </div>
              <div>
              <h5><span className='text-gradient light'>Reputation</span> Bonus</h5>
              <p>Miners with consistent network activity and a strong track record of executing AI tasks will earn higher reputation ranks on the Cyborg Chain, unlocking multiplier bonuses on their existing BORG rewards.</p>
              </div>
            </motion.div>
          </div>
        </div>
        </section>
    </>
  )
}
