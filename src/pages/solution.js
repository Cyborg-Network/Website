import Head from 'next/head'
import Image from 'next/image'
import solutionCover from '../../public/images/solution-cover.svg'
import Architecture from '../../public/images/architecture.svg'
import ArchitectureMob from '../../public/images/architecture-mob.svg'
import StackBarChart from '@/components/StackBarChart'
import LineBarChart from '@/components/LineBarChart'
import Circle from '@/components/icons/Circle'
import { motion } from "framer-motion"


export default function Solution() {
  return (
    <>
      {/* <Head>
        <title>Solution | Cyborg Network</title>
        <meta name="description" content="Cyborg Network - An Untapped Market" />
      </Head>
        <section className='common-section solution-hero-section flow-hidden'>
        <div className='container'>
        <motion.h1 className="hero-heading center-hero-heading"  viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>Why Cyborg?</motion.h1>
        <div className='solution-wrap d-flex a-center'>
          <motion.div className='d-left'  viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 2, delay: 0.5 }} initial={{ opacity: 0, translateX: -200 }} whileInView={{ opacity: 1, translateX: 0 }}>
          <div className='sw-left'>
          <Image src={solutionCover} alt='solution-cover-image'/>
          </div>
          </motion.div>
          <motion.div className='d-right'  viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 2, delay: 0.75 }} initial={{ opacity: 0, translateX: 200 }} whileInView={{ opacity: 1, translateX: 0 }}>
          <div className="sw-right">
          <div className='sw-detail'>
            <h2>An Untapped Market</h2>
            <p>Many businesses and individuals already rely on edge computing to manage and process their data, but the potential for edge systems to become the backbone of the decentralized web remains largely untapped. With the emergence of IoT, 5G networks, and smart cities, the demand for edge computing infrastructure is only going to increase.</p>
          </div>
          <div className='sw-detail'>
            <h2>Our Solution</h2>
            <p>At Cyborg, our dedication lies in delivering a secure edge computing infrastructure, enabling businesses to harness the complete capabilities of the decentralized web. Through our platform, which harnesses blockchain technology, we establish an incentivized and streamlined ecosystem for edge computing. This facilitates the secure exchange of data using robust cryptographic primitives and Zero-Knowledge (ZK) technology, thereby minimizing the likelihood of data breaches.</p>
          </div>
          </div>
          </motion.div>
          </div>
        </div>
        </section>

        <section className='common-section architecture-section middle-blur left-logo-bg'>
          <div className='container'>
            <motion.h2 className="section-heading"  viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 0.5 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>Architecture</motion.h2>
            <motion.div   viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 0.75 }} initial={{ opacity: 0, scale: 0.95, delay: 0.25 }} whileInView={{ opacity: 1, scale: 1 }}>
            <Image src={Architecture} alt='Architecture Diagram' className='arc-img arc-web'/>
            <Image src={ArchitectureMob} alt='Architecture Diagram' className='arc-img arc-mob'/>
            </motion.div>
          </div>
        </section>

        <section className='common-section market-section un-clip right-logo-bg left-blur'>
          <div className='container'>
            <motion.div className='sh-wrap'  viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 0.5 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <h2 className="section-heading">Market Validation</h2>
              <p className='section-desc'>Experience our purpose-built platform for edge computing, meeting rising demand for secure and decentralized infrastructure. With a projected <strong>CAGR</strong> of <strong>29%</strong>, we&apos;ll transform the industry, shaping the future and empowering businesses with cutting-edge solutions. Join us now and unlock new possibilities.</p>
            </motion.div>
            <div className='market-wrap d-flex flow-hidden'>
              <motion.div className='d-left'  viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 1.5, delay: 0.5 }} initial={{ opacity: 0, translateX: -150 }} whileInView={{ opacity: 1, translateX: 0 }}>
                <div className='mw-left'>
                <div className='clip-wrap'>
                <div className='box-clip clip-border'></div>
                  <div className='mw-content'>
                    <div className='mw-header'>
                      <h3 className='mw-head'>Total edge computing addressable revenue by value chain component, 2020 - 2030</h3>
                      <h4 className='mw-highlight'>(In Billions $USD)</h4>
                    </div>
                    <div className='mw-graph'>
                      <StackBarChart/>
                    </div>
                  </div>
                  </div>
                  <div className='mw-footer'>
                    <p className='mw-desc'>Our cutting-edge technology is being designed to meet the needs of the booming edge market, which is projected to be worth nearly <strong>USD 300 Billion</strong> by <strong>2025</strong>, with over <strong>1,500</strong> network edge data centers expected to be built by telecom operators</p>
                  </div>
                </div>
              </motion.div>
              <motion.div className='d-right'  viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 1.5, delay: 0.5 }} initial={{ opacity: 0, translateX: 150 }} whileInView={{ opacity: 1, translateX: 0 }}>
                <div className='mw-right'>
                <div className='clip-wrap'>
                <div className='box-clip clip-border'></div>
                <div className='mw-content'>
                  <div className='mw-header'>
                    <h3 className='mw-head'>Network edge data centre* capacity (available to developers/enterprises)</h3>
                  </div>
                  <div className='mw-graph'>
                  <LineBarChart/>
                  </div>
                </div>
                </div>
                <div className='mw-footer'>
                    <p className='mw-desc'>*Network edge data centres refer to edge data centres within telecom operator facilities that are used for enterprises/consumer applications, but also host network infrastructure (e.g. core, access network)</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className='common-section roadmap-section right-blur'>
          <div className='roadmap-bg'>
          <div className='container'>
            <motion.div className='sh-wrap'  viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 0.5 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <h2 className="section-heading">Roadmap</h2>
              <p className='section-desc'>We have a clear roadmap to guide us in the development and launch of our platform, with milestones including:</p>
            </motion.div>
            <div className='roadmap-wrap'>
              <div className='rw-content'>
                <div className='rw-line'></div>
                <motion.div className='rw-item'  viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
                  <div className='rw-time'><h4>Q2 2023</h4></div>
                  <div className='rw-circle'><Circle/></div>
                  <div className='rw-detail'>
                    <div className='rw-detail-desc'>
                    <div className='clip-wrap'>
              <div className='box-clip clip-border'></div>
                    <p><span>Q2 2023</span>Launch of the website and publication of the Litepaper</p>
                    </div>
                    </div>
                    </div>
                </motion.div>
                <motion.div className='rw-item'  viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
                  <div className='rw-time'><h4>Q3 2023</h4></div>
                  <div className='rw-circle'><Circle/></div>
                  <div className='rw-detail'><div className='rw-detail-desc'><div className='clip-wrap'>
              <div className='box-clip clip-border'></div><p><span>Q3 2023</span>Commencement of PoC development</p></div></div>
                </div>
                </motion.div>
                <motion.div className='rw-item'  viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 0.5, delay: 0.2 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
                  <div className='rw-time'><h4>Q4 2023</h4></div>
                  <div className='rw-circle'><Circle/></div>
                  <div className='rw-detail'>
                  <div className='rw-detail-desc'><div className='clip-wrap'>
              <div className='box-clip clip-border'></div><p><span>Q4 2023</span>Growth Programs and legal setup</p></div></div>
                </div>
                </motion.div>
                <motion.div className='rw-item'  viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 0.5, delay: 0.3 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
                  <div className='rw-time'><h4>Q1 2024</h4></div>
                  <div className='rw-circle'><Circle/></div>
                  <div className='rw-detail'><div className='rw-detail-desc'><div className='clip-wrap'>
              <div className='box-clip clip-border'></div><p><span>Q1 2024</span>MVP and testnet launch</p></div></div>
                </div>
                </motion.div>
                <motion.div className='rw-item'  viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 0.5, delay: 0.4 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
                  <div className='rw-time'><h4>Q2 2024</h4></div>
                  <div className='rw-circle'><Circle/></div>
                  <div className='rw-detail'><div className='rw-detail-desc'><div className='clip-wrap'>
              <div className='box-clip clip-border'></div><p><span>Q2 2024</span>Community Building and Marketing</p></div></div>
                </div>
                </motion.div>
                <motion.div className='rw-item'  viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 0.5, delay: 0.5 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
                  <div className='rw-time'><h4>Q3 2024</h4></div>
                  <div className='rw-circle'><Circle/></div>
                  <div className='rw-detail'><div className='rw-detail-desc'><div className='clip-wrap'>
              <div className='box-clip clip-border'></div><p><span>Q3 2024</span>Expansion and Partnerships</p></div></div>
                </div>
                </motion.div>
                <motion.div className='rw-item'  viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 0.5, delay: 0.6 }} initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }}>
                  <div className='rw-time'><h4>Q4 2024</h4></div>
                  <div className='rw-circle'><Circle/></div>
                  <div className='rw-detail'><div className='rw-detail-desc'><div className='clip-wrap'>
              <div className='box-clip clip-border'></div><p><span>Q4 2024</span>Full product launch with open access and marketing outreach to increase adoption</p></div></div>
                </div>
                </motion.div>
              </div>
              </div>
            </div>
            </div>
            </section> */}
    </>
  )
}
