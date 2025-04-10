import Head from 'next/head'
import Image from 'next/image'
import Barath from '../../public/images/team/barath.jpg'
import Megha from '../../public/images/team/megha.jpg'
import Nathaniel from '../../public/images/team/nathaniel.jpeg'
import Nikunj from '../../public/images/team/nikunj.jpg'
import Raisul from '../../public/images/team/raisul.jpg'
import Tom from '../../public/images/team/tom.jpg'
import one from '../../public/images/gallery/1.jpg'
import two from '../../public/images/gallery/2.jpg'
import three from '../../public/images/gallery/3.jpg'
import four from '../../public/images/gallery/4.jpeg'
import five from '../../public/images/gallery/5.jpg'
import six from '../../public/images/gallery/6.jpg'
import seven from '../../public/images/gallery/7.jpg'
import eight from '../../public/images/gallery/8.jpg'
import nine from '../../public/images/gallery/9.jpg'
import ten from '../../public/images/gallery/10.jpeg'
import eleven from '../../public/images/gallery/11.jpg'
import twelve from '../../public/images/gallery/12.jpg'
import thirteen from '../../public/images/gallery/13.jpg'
import Linkedin from '@/components/icons/Linkedin'
import { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import { sendContactForm } from '@/lib/api'
var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});


const initValues = { name:"", email:"", subject:"", message:"" }
const initState = { error: "", values : initValues }

export default function Team() {

  const [sucMsg, setSucMsg] = useState();

  const [state, setState] = useState(initState);

  const {values, error} = state;

  const handleChange = ({target}) => setState((prev)=>({
        ...prev,
        values: {
          ...prev.values,
          [target.name] : target.value,
        },
  }));

  useEffect(()=>{
    setTimeout(()=>{
      setState((prev) => ({
        ...prev,
        error:"",
      }));
      setSucMsg("");
    },3000)
  },[sucMsg,error])

  const onSubmit = async(event) => {
    event.preventDefault()
    setState((prev) => ({
      ...prev,
    }));
    try {
      await sendContactForm(values);
      setState(initState);
      setSucMsg("Message sent sucessfully.")
    } catch (error) {
      setState((prev) => ({
        ...prev,
        error: error.message,
      }));
    }
  };



  const [showClass, setShowClass] = useState("false");
  const [showClass1, setShowClass1] = useState("false");
  const [showClass2, setShowClass2] = useState("false");
  const [showClass3, setShowClass3] = useState("false");
  const [showClass4, setShowClass4] = useState("false");
  const [showClass5, setShowClass5] = useState("false");
  const [showClass6, setShowClass6] = useState("false");
  const [showClass7, setShowClass7] = useState("false");
  const [showClass8, setShowClass8] = useState("false");
  const [showClass9, setShowClass9] = useState("false");



  return (
    <>
    <Head>
        <title>Team | Cyborg Network</title>
        <meta name="description" content="Cyborg Network - An Untapped Market" />
      </Head>

      <section className='common-section team-hero-section flow-hidden'>
        <div className='container'>
          <div className='th-wrap d-flex'>
              <motion.div className='d-left'  viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 1.5 }} initial={{ opacity: 0, translateX: -200 }} whileInView={{ opacity: 1, translateX: 0 }}>
                <div className='sw-left'>
                <div className='sw-detail'>
                  <h2>Mission</h2>
                  <p>To revolutionize AI infrastructure by integrating blockchain and edge computing, creating scalable, secure, and efficient AI hubs. Our goal is to empower businesses and developers with seamless access to high-performance AI, driving innovation and real-world adoption.</p>
                </div>
                </div>
                </motion.div>
                <motion.div className='d-right'  viewport={{ once: true }} transition={{ type: "spring", bounce: 0.25, duration: 1.5 }} initial={{ opacity: 0, translateX: 200 }} whileInView={{ opacity: 1, translateX: 0 }}>
                <div className="sw-right">
                <div className='sw-detail'>
                  <h2>Vision</h2>
                  <p>To be the market leader in future tech infrastructure, laying the foundation for next-generation AI, decentralized computing, and autonomous systems, shaping a smarter, more connected world.</p>
                </div>
                </div>
                </motion.div>
            </div>
          </div>
        </section>

        <section className='common-section team-section'>
          <div className='container'>
          <motion.h2 className="section-heading" viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>We are a Team of</motion.h2>
          <motion.p className="section-desc" viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>Innovators and problem-solvers, driven by determination and perseverance. We tackle challenges head-on, shaping the future of AI infrastructure with passion and expertise.</motion.p>
          <div className='tsx-wrap'>
            <div className='tsx-main'>
              <motion.div className='tsx-box' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateX: -100 }} whileInView={{ opacity: 1, translateX: 0 }}>
                <div className='tsx-img'>
                  <Image src={Barath} alt='Barath'/>
                </div>
                <div className='tsx-content'>
                  <h4>Barath Kanna</h4>
                  <p>Founder & CEO</p>
                </div>
                <div className='tsx-link'>
                  <Linkedin/>
                </div>
              </motion.div>
              <motion.div className='tsx-box' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateX: 100 }} whileInView={{ opacity: 1, translateX: 0 }}>
                <div className='tsx-img'>
                  <Image src={Megha} alt='Barath'/>
                </div>
                <div className='tsx-content'>
                  <h4>Megha Varshini</h4>
                  <p>Founder & COO</p>
                </div>
                <div className='tsx-link'>
                  <Linkedin/>
                </div>
              </motion.div>
            </div>
            <div className='tsx-sub'>
              <motion.div className='tsx-box' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>
                <div className='tsx-img'>
                  <Image src={Tom} alt='Barath'/>
                  <div className='tsx-link'>
                    <Linkedin/>
                  </div>
                </div>
                <div className='tsx-content'>
                  <h4>Tom Bleek</h4>
                  <p>Lead Developer</p>
                </div>
              </motion.div>
              <motion.div className='tsx-box' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>
                <div className='tsx-img'>
                  <Image src={Raisul} alt='Barath'/>
                  <div className='tsx-link'>
                    <Linkedin/>
                  </div>
                </div>
                <div className='tsx-content'>
                  <h4>Raisul Islam</h4>
                  <p>Substrate Developer</p>
                </div>
              </motion.div>
              <motion.div className='tsx-box' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>
                <div className='tsx-img'>
                  <Image src={Nathaniel} alt='Barath'/>
                  <div className='tsx-link'>
                    <Linkedin/>
                  </div>
                </div>
                <div className='tsx-content'>
                  <h4>Nathaniel</h4>
                  <p>Substrate Developer</p>
                </div>
              </motion.div>
              <motion.div className='tsx-box' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>
                <div className='tsx-img'>
                  <Image src={Nikunj} alt='Barath'/>
                  <div className='tsx-link'>
                    <Linkedin/>
                  </div>
                </div>
                <div className='tsx-content'>
                  <h4>Nikunj Galaiya</h4>
                  <p>AI Engineer</p>
                </div>
              </motion.div>
            </div>
          </div>
          </div>
        </section>

        <section className='common-section gallery-section'>
          <div className='container'>
          <motion.h2 className="section-heading" viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 0.5 }} initial={{ opacity: 0, translateY: 100 }} whileInView={{ opacity: 1, translateY: 0 }}>Gallery</motion.h2>
          <div className='gallery-wrap'>
            <motion.div className='gallery-item' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 75 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <Image src={one} alt='gallery'/>
            </motion.div>
            <motion.div className='gallery-item' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 75 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <Image src={two} alt='gallery'/>
              </motion.div>
            <motion.div className='gallery-item' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 75 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <Image src={three} alt='gallery'/>
              </motion.div>
            <motion.div className='gallery-item' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 75 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <Image src={four} alt='gallery'/>
              </motion.div>
            <motion.div className='gallery-item' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 75 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <Image src={five} alt='gallery'/>
              </motion.div>
            <motion.div className='gallery-item' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 75 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <Image src={six} alt='gallery'/>
              </motion.div>
            <motion.div className='gallery-item' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 75 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <Image src={seven} alt='gallery'/>
              </motion.div>
            <motion.div className='gallery-item' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 75 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <Image src={eight} alt='gallery'/>
              </motion.div>
            <motion.div className='gallery-item' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 75 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <Image src={nine} alt='gallery'/>
              </motion.div>
            <motion.div className='gallery-item' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 75 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <Image src={ten} alt='gallery'/>
              </motion.div>
            <motion.div className='gallery-item' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 75 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <Image src={eleven} alt='gallery'/>
              </motion.div>
            <motion.div className='gallery-item' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 75 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <Image src={twelve} alt='gallery'/>
              </motion.div>
            <motion.div className='gallery-item' viewport={{ once: true }} transition={{ ease: "easeInOut", duration: 1 }} initial={{ opacity: 0, translateY: 75 }} whileInView={{ opacity: 1, translateY: 0 }}>
              <Image src={thirteen} alt='gallery'/>
            </motion.div>
          </div>
          </div>
        </section>
    </>
  )
}
