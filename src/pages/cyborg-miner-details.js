import Head from "next/head";
import Image from "next/image";
import Button from "@/components/Button";
import AngleDown from '@/components/icons/AngleDown';
import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import faqs from '../data/faqs';
import specs from '../data/specs';
import payout from "../../public/images/payout.svg";
import stock from "../../public/images/stock.svg";
import noise from "../../public/images/noise.svg";
import product from "../../public/images/miner-product.png";
import poweredLogos from "../../public/images/powered-logos.svg";
import warningSvg from "../../public/images/warning.svg";
import Click from "../../public/images/click.svg";
import Close from '@/components/Close';
import { sendContactForm } from '@/lib/api';
import Check from '@/components/icons/Check'
import Cross from '@/components/icons/Cross'

export default function CyborgMiner() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [popup, setPopup] = useState("hide");

  const popupClose = ()=>{
    setPopup("hide");
  }
  const popupShow = ()=>{
    setPopup("show");
  }

  const initValues = { name:"", email:"", city:"", country:"", zipCode:"", promo:false }
  const initState = { error: "", values : initValues }

  const [sucMsg, setSucMsg] = useState();

  const [state, setState] = useState(initState);

  const {values, error} = state;

  const handleChange = ({ target }) => {
    const { name, type, value, checked } = target;
  
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [name]: type === 'checkbox' ? checked : value,
      },
    }));
  };

  useEffect(()=>{
    setTimeout(()=>{
      setState((prev) => ({
        ...prev,
        error:"",
      }));
      setSucMsg("");
    },3000)
  },[sucMsg,error])

const onSubmit = async (event) => {
  event.preventDefault();
  setIsSubmitting(true);
  setState((prev) => ({
    ...prev,
  }));
  try {
    await sendContactForm(values);
    setState(initState);
    setSucMsg("Form Submit Successfully.");
  } catch (error) {
    setState((prev) => ({
      ...prev,
      error: error.message,
    }));
  } finally {
    setIsSubmitting(false);
  }
};

  const actualCount = 24436;
  const [displayCount, setDisplayCount] = useState(actualCount);

  useEffect(() => {
    const increment = () => {
      const randomIncrement = Math.floor(Math.random() * 5) + 1;
      setDisplayCount(prev => prev + randomIncrement);
    };

    const interval = setInterval(() => {
      increment();
    }, Math.floor(Math.random() * 2000) + 1000);

    return () => clearInterval(interval);
  }, []);

  const handleToggle = (index) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <>
    <style jsx global>{`
        body, .common-section {
          background-color: #141615;
        }
      .header-wrap nav > ul > li > a {
          color: #e8e8e8;
      }
.logo a img{
    filter: invert(1) hue-rotate(-186deg) brightness(1.5);
}
  .common-section.cyborg-miner-section {
    padding-top: 145px;
    padding-bottom: 75px;
  }

.miner-image-area {
  border: 1px solid rgba(1, 218, 99, 0.35);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
overflow: hidden;
}

.miner-image {
  width: 100%;
  height: auto;
}

.miner-disclaimer {
    font-size: 14px;
    color: #e8e8e8;
    background: #314138;
    padding: 10px 15px;
    line-height: 20px;
    display: flex;
    gap: 10px;
}
.miner-disclaimer img{
  color: transparent;
  margin-top: 3px;
  flex: 0;
}
.miner-content-area {
}

.miner-heading {
    font-size: 42px;
    margin-bottom: 15px;
    font-weight: 800;
    color: #e8e8e8;
}

.miner-price {
    font-size: 26px;
    color: #c5c5c5;
    margin-bottom: 25px;
}

.miner-tagline {
    color: #01da63;
    font-weight: 600;
    margin-bottom: 25px;
    letter-spacing: 0.5px;
}

.miner-features {
  list-style: none;
  padding-left: 0;
  margin-bottom: 30px;
}

.miner-features li {
    margin-bottom: 13px;
    font-size: 16px;
    color: #c5c5c5;
}

.miner-features li strong{
  color: #e8e8e8;
  font-weight: 600;
}

.miner-buttons {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap;
    margin-bottom: 30px;
}
  .miner-buttons .btn{
    padding: 14px 18px;
  }

.miner-buttons .btn, .fw-list-btn .btn{
  border: 1px solid #01da63;
  box-shadow: 0 0 12px 2px rgba(1, 218, 99, 0.5);
}
.miner-buttons .btn.dark{
      opacity: 0.5;
      background: #0d4328;
}
.miner-buttons .btn.dark:hover{
  background: #107447;
}
.header-btn .btn{
  background: #0d4328;
  border: 1px solid #01da63;
  box-shadow: 0 0 12px 2px rgba(1, 218, 99, 0.5);
}
.header-btn .btn:hover{
  background: #107447;
}
.miner-counter {
  background: #4A7F61;
  padding: 8px 12px;
  border-radius: 16px;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border: 2px solid #141615;
  box-shadow: 3px 3px #75B08E;
  margin-bottom: 4px;
}
.miner-counter .count{
  display: flex;
  justify-content: center;
  gap: 5px;
  margin-bottom: 6px;
}
.miner-counter .count span {
    font-size: 26px;
    font-weight: 900;
    padding: 0px 2px;
    min-width: 30px;
    border-radius: 8px;
    border: 2px solid#579773;
    background: linear-gradient(0deg, #1D5635, #64977c, #1D5635);
    transition: transform 0.2s ease;
}
.miner-counter .label {
    font-size: 14px;
    font-weight: 600;
    border-top: 2px solid#437257;
    margin: 0 -12px -12px;
    padding: 2px 12px 8px 12px;
}
.miner-note {
    margin-bottom: 20px;
    font-size: 16px;
    color: #e8e8e8;
    border-bottom: 1px solid#27332d;
    padding-bottom: 25px;
}

.miner-links {
    padding-bottom: 25px;
    display: flex;
    gap: 15px 45px;
    margin-bottom: 25px;
    border-bottom: 1px solid #27332d;
}

.miner-links a {
  color: #c5c5c5;
  text-decoration: underline;
  font-size: 14px;
}

.miner-links a:hover {
color: #fff;
}

.miner-powered-by {
  display: flex;
  align-items: center;
  gap: 15px;
}

.miner-powered-by span {
    font-size: 24px;
    color: #e8e8e8;
    font-weight: 600;
}

.miner-powered-by img {
    height: 42px;
}

        .common-section {
          padding: 50px 0;
        }  
        .section-heading{
          text-align: left;
          color: #01DA63;
          font-weight: 700;
          position: relative;
          margin-bottom: 45px;
        }
        .section-heading:after{
          position: absolute;
          content: "";
          width: 100%;
          height: 1px;
          top: calc(100% + 10px);
          left: 0;
          opacity: 0.45;
          background: linear-gradient(90deg, #01DA63, rgba(54, 153, 99, 0));
        }
        .section-desc{
          color: #e8e8e8;
        }
        .section-desc .text-gradient{
          font-weight: 600;
        }
        .box-desc {
          padding: 25px 30px;
          border-radius: 15px;
          background: #232A26;
          margin-top: 60px;
        }
        .box-desc h2{
          color: #01DA63;
          margin-bottom: 15px;
        }
        .box-desc .section-desc{
          text-align: left;
        }
          
        .spec-box {
          border: 1px solid #3a453e;
          border-radius: 15px;
          overflow: hidden;
        }
        .spec-row {
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #3a453e;
        }
        .spec-row:last-child {
          border: 0;
        }
        .spec-label {
          font-weight: 500;
          flex: 1;
          color: #e8e8e8;
          padding: 1rem 1.25rem;
          background: #1D221F;
          border-right: 1px solid #3a453e;
        }
        .spec-value {
          flex: 2;
          color: #C5C5C5;
          padding: 1rem 1.25rem;
          background: linear-gradient(-90deg, #1D221F, rgba(29, 34, 31, 0));
        }
        .card-wrap{
          margin-top: 0;
        }
        .card-item {
          text-align: center;
          align-items: center;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(1, 218, 99, 0.85);
          box-shadow: 0 0 20px 0 rgba(37,216,97,.25);
          background: linear-gradient(-135deg, rgb(1 218 99 / 0%), rgb(1 218 99 / 10%));
        }
        .card-item:hover{
          box-shadow: 0 15px 30px -5px rgb(37 216 97 / 50%)
        }
        .card-icon{
          border: 0;
          margin-bottom: 20px;
        }
        .card-item h5 {
          font-size: 26px;
          line-height: 36px;
          max-width: 310px;
        }
        .card-item h5 span{
          font-weight: 700;
        }
        .info-section .card-item h5 {
            font-size: 25px;
            line-height: 36px;
            max-width: 310px;
        }
        .info-section .card-item p {
            font-size: 18px;
            line-height: 28px;
        }
        .guide-box{
          padding: 25px 35px;
          border-radius: 15px;
          background: rgb(37 42 40 / 40%);
          border: 1px solid #3a453e;
        }
        .guide-box h2{
          color: #e8e8e8;
          margin-bottom: 15px;
        }
        .guide-box .section-desc{
          color: #C5C5C5;
          margin-bottom: 15px;
          text-align: left;
        }          
        .faq-wrap {
          max-width: none;
        }
        .fw-header h4 {
          color: #e8e8e8;
        }
        .fw-item.active .fw-header h4 {
          color: #fff;
        }
        .fw-item {
            background: #212624;
        }
            
            #main-footer{
            padding-top: 60px;
            }
            .fw-link li a{
            color: #e8e8e8;
            }
            .social li a {
                border: 2px solid rgb(39 51 45);
            }
            .social li a svg path{
            fill: #c5c5c5;
            }
            .social li a.twitter svg path{
            stroke: #c5c5c5;
            }
            .social li a:hover svg path {
              fill: #e8e8e8;
            }
              .social li a.twitter:hover svg path {
              stroke: #e8e8e8;
            }
            .footer-credit p, .footer-credit a{
            color: #c5c5c5;
            }
            .top-card {
              margin-top: 60px;
            }
            @media (max-width: 767px){
              .miner-wrap{
                gap: 30px;
              }
            }
      `}</style>

      <Head>
        <title>Cyborg Network | Cyborg Miner Details</title>
        <meta name="description" content="Cyborg Miner enables users to contribute compute power to the Cyborg Network and earn rewards by supporting decentralized AI workloads." />
        <link rel="canonical" href="https://www.cyborgnetwork.io/cyborg-miner-details" />
      </Head>

      <section className="common-section cyborg-miner-section flow-hidden">
        <div className="container">
          <div className="miner-wrap d-flex">
            <motion.div
              className="d-left"
              viewport={{ once: true }}
              transition={{
                type: "spring",
                bounce: 0.25,
                duration: 1.5,
                delay: 0.25,
              }}
              initial={{ opacity: 0, translateX: -100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
            >
              <div className="miner-image-area">
                <Image src={product} alt="Cyborg Miner" className="miner-image" />
                <p className="miner-disclaimer">
                  <Image src={warningSvg} alt="Warning" />
                  The image shown is for illustrative purposes only. The final Cyborg Miner may vary slightly in design. 
                  At the time of purchase, we'll release the official product video with complete details and specifications of the actual device.
                </p>
              </div>
            </motion.div>
            <motion.div className="d-right"
            viewport={{ once: true }}
              transition={{
                type: "spring",
                bounce: 0.25,
                duration: 1.5,
                delay: 0.25,
              }}
              initial={{ opacity: 0, translateX: 100 }}
              whileInView={{ opacity: 1, translateX: 0 }}
              >
              <div className="miner-content-area">
                <h1 className="miner-heading">Cyborg Miner V1</h1>
                <h2 className="miner-price">Coming soon...</h2>
                <p className="miner-tagline">Just Connect, Mine and Earn</p>
                <ul className="miner-features">
                  <li><strong>Performance:</strong> 200 TOPS (INT 8) | 5.3 TFLOPS (FP32) | 55 W ±5%</li>
                  <li><strong>Architecture:</strong> Nvidia Ampere</li>
                  <li><strong>Rewards:</strong> Daily rewards in BORG | Task rewards in stables (USDT/USDC)</li>
                  <li><strong>Includes:</strong> $500 USD in BORG staked against your miner</li>
                </ul>
                <div className="miner-buttons">
                  <span onClick={popupShow}>
                  <Button
                    title="Register For Presale"
                    link=""
                    size="btn-md"
                    icon={Click}
                  />
                  </span>
                  <Button title="Add To Cart" link="" size="btn-md" theme="dark"/>
                  <div className="miner-counter">
                    <div className="count">
                      {displayCount
                        .toString()
                        .padStart(5, "0")
                        .split("")
                        .map((digit, index) => (
                          <span key={index}>{digit}</span>
                        ))}
                    </div>
                    <span className="label">Live Registration Count</span>
                  </div>
                </div>
                <p className="miner-note">Presale Opening soon - only participants get main sale access</p>
                <div className="miner-links">
                  <a href="#">Order FAQ</a>
                  <a href="#">Order Terms</a>
                  <a href="#">After Sales - Terms</a>
                </div>
                <div className="miner-powered-by">
                  <span>Powered by:</span>
                  <Image src={poweredLogos} alt="Powered" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="common-section">
        <div className="container">
          <motion.p
            className="section-desc"
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 1 }}
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
          >
            The first version of Cyborg Miners is limited to <span className="text-gradient">1,000 units</span> only, reserved exclusively for early supporters who pre-book with a $200 deposit. Pre-bookings will open soon, and only those who secure their spot in advance will gain access to the sale. Don’t miss the chance to be among the first to power the future of AI at the edge.
          </motion.p>
          <div className="card-wrap top-card">
            <motion.div
              className="card-item"
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 1 }}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
            >
              <div className="card-icon">
                <Image src={payout} alt="icon" />
              </div>
              <div>
                <h5>Minimum monthly payout of
                  <span className="text-gradient light"> $300 in BORG</span>
                </h5>
              </div>
            </motion.div>
            <motion.div
              className="card-item"
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 1 }}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
            >
              <div className="card-icon">
                <Image src={stock} alt="icon" />
              </div>
              <div>
                <h5>Limited to
                  <span className="text-gradient light"> 1,000 units</span> only
                </h5>
              </div>
            </motion.div>
            <motion.div
              className="card-item"
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 1 }}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
            >
              <div className="card-icon">
                <Image src={noise} alt="icon" />
              </div>
              <div>
                <h5>
                  <span className="text-gradient light">&gt;25 decibels</span> (Very quiet)
                </h5>
              </div>
            </motion.div>
          </div>
          <motion.div
              className="box-desc"
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.25, duration: 1 }}
              initial={{ opacity: 0, translateY: 150 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              >
                  <h2>Introducing the Stable ROI Promise.</h2>
                  <p className="section-desc">
                    We will not release additional Cyborg Miners until the current batch is fully occupied, protecting the value of your investment. And even if your device is idle, you’ll still receive a guaranteed minimum payout of <span className="text-gradient">$300/month</span> to ensure you recover your investment with confidence.
                  </p>
            </motion.div>
        </div>
      </section>
   
      <section className='common-section spec-section'>
        <div className='container'>
          <motion.h2
            className="section-heading"
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            initial={{ opacity: 0, translateY: 200 }}
            whileInView={{ opacity: 1, translateY: 0 }}
          >
            Specifications
          </motion.h2>
          <motion.div className="spec-box"
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.75 }}
            initial={{ opacity: 0, translateY: 200 }}
            whileInView={{ opacity: 1, translateY: 0 }}
          >
            {specs.map((item, index) => (
              <div className="spec-row" key={index}>
                <div className="spec-label">{item.label} →</div>
                <div className="spec-value">{item.value}</div>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      <section className="common-section info-section">
        <div className="container">
          <div className="card-wrap">
            <motion.div
              className="card-item"
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 1 }}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
            >
              <div>
                <h5><span className="text-gradient light">Decentralized </span>AI Compute
                </h5>
                <p>Cyborg Network distributes AI workloads across thousands of nodes.</p>
              </div>
            </motion.div>
            <motion.div
              className="card-item"
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 1 }}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
            >
              <div>
                <h5><span className="text-gradient light">Privacy-First </span> Architecture
                </h5>
                <p>Built with encryption, zero-knowledge proofs, and decentralized identity to protect sensitive data.</p>
              </div>
            </motion.div>
            <motion.div
              className="card-item"
              viewport={{ once: true }}
              transition={{ ease: "easeInOut", duration: 1 }}
              initial={{ opacity: 0, translateY: 100 }}
              whileInView={{ opacity: 1, translateY: 0 }}
            >
              <div>
                <h5><span className="text-gradient light">Plug</span> and <span className="text-gradient light">Play</span>
                </h5>
                <p>Just connect ethernet and power and it starts mining.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="common-section guideline-section">
        <div className="container">
          <motion.div
              className="guide-box"
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.25, duration: 1 }}
              initial={{ opacity: 0, translateY: 200 }}
              whileInView={{ opacity: 1, translateY: 0 }}
              >
                <h2>Miner Guidelines</h2>
                <ul>
                  <li className="section-desc">
                    Please ensure you register your node and wallet information correctly during purchase. This information will be securely processed through Cyborg's decentralized interface.
                  </li>
                  <li className="section-desc">
                    Node software is distributed via secure download (with checksum verification). Deployment typically takes only a few minutes depending on your server or cloud provider.
                  </li>
                  <li className="section-desc">
                    Running a Cyborg Node is free to join, but operators are responsible for covering their own infrastructure costs (Electricity and Internet). Rewards are distributed in CYB tokens based on performance and uptime.
                  </li>
                  <li className="section-desc">
                    Ensure a stable internet and power supply. Avoid shutting down or restarting the node abruptly, as this may affect performance and reward eligibility.
                  </li>
                  <li className="section-desc">
                    Maintain a clean and secure environment to protect your node from malware, unauthorized access, or system-level vulnerabilities.
                  </li>
                </ul>
            </motion.div>
        </div>
      </section>

      <section className='common-section faq-section static-border middle-blur' id='faq'>
        <div className='container'>
          <motion.h2
            className="section-heading"
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.5 }}
            initial={{ opacity: 0, translateY: 100 }}
            whileInView={{ opacity: 1, translateY: 0 }}
          >
            FAQ
          </motion.h2>

          <div className={`faq-wrap ${showAll ? "show-all" : "show-five"}`}>
            <div className='fw-list'>
              {visibleFaqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className='fwl-content'
                  viewport={{ once: true }}
                  transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 * (index + 1) }}
                  initial={{ opacity: 0, translateY: 50 }}
                  whileInView={{ opacity: 1, translateY: 0 }}
                >
                  <div className={`fw-item ${activeIndex === index ? "active" : ""}`}>
                    <div className='fw-header' onClick={() => handleToggle(index)}>
                      <h4>{faq.question}</h4>
                      <span><AngleDown /></span>
                    </div>
                    {activeIndex === index && (
                      <div className='fw-body'>
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {faqs.length > 5 && (
              <motion.div
                className='fw-list-btn'
                viewport={{ once: true }}
                transition={{ ease: "easeInOut", duration: 0.5, delay: 1 }}
                initial={{ opacity: 0, translateY: 50 }}
                whileInView={{ opacity: 1, translateY: 0 }}
              >
                <button onClick={() => setShowAll(!showAll)} type='button' className='btn btn-md'>
                  {showAll ? "Show Less" : "Show More"}
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <div className={`learn-more-popup ${popup}`}>
        <div className='lm-content'>
          <div className="lm-header">
            <h4>Presale Registration</h4>
            <span onClick={popupClose}><Close/></span>
          </div>
          <div className="lm-body">
            <div className='contact-wrap'>
              <motion.div className='cw-form' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 0.75, delay: 0.25 }} initial={{ opacity: 0, translateY: 200 }} whileInView={{ opacity: 1, translateY: 0 }}>
                <form method='post'>
                  <div className='cw-field'>
                    <input type='text' name='name' placeholder='Name' value={values.name} onChange={handleChange} required/>
                  </div>
                  <div className='cw-field'>
                    <input type='email' name='email' placeholder='Email' value={values.email} onChange={handleChange} required/>
                  </div>
                  <div className='cw-field'>
                    <input type='text' name='city' placeholder='City' value={values.city} onChange={handleChange} required/>
                  </div>
                  <div className="cw-field-group">
                    <div className='cw-field'>
                      <input type='text' name='country' placeholder='Country' value={values.country} onChange={handleChange} required/>
                    </div>
                    <div className='cw-field'>
                      <input type='text' name='zipCode' placeholder='ZIP Code' value={values.zipCode} onChange={handleChange} required/>
                    </div>
                  </div>
                  <div className='cw-checkbox'>
                      <input type='checkbox' id="promo" name='promo' checked={values.promo} onChange={handleChange} required/>
                      <label htmlFor="promo">I here by agree that Cyborg Network can add me to the mailing list to send promotional material</label>
                  </div>
                  <div className='cw-btn'>
                    <button type='submit' className='cw-submit' onClick={onSubmit} disabled={
                      !values.name || !values.email || !values.city || !values.country || !values.zipCode|| !values.promo
                      }>
                        {isSubmitting ? (
                          <>
                            <span className="spinner"></span> Registering...
                          </>
                        ) : (
                          "Register"
                        )}
                    </button>
                  </div>
                </form>
              </motion.div>
            </div>
            <div className={`form-toast ${error ? "error" : ""} ${error || sucMsg ? "" : "d-none"}`}>
                <p><span><Check/><Cross/></span>{error}{sucMsg}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
