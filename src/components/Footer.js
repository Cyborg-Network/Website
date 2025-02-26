import React, { useEffect } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Linkedin from './icons/Linkedin'
import Twitter from './icons/Twitter'
import Telegram from './icons/Telegram'
// import Medium from './icons/Medium'
import ArrowRight from './icons/ArrowRight'
import { useRouter } from 'next/router'

const Footer = () => {

    const router = useRouter();

    useEffect(()=>{
        window.addEventListener("load", onLoadFunction);
        function onLoadFunction(e){
            var bodyHeight = document.getElementsByTagName('body')[0].offsetHeight;
            var footerHeight = document.getElementsByTagName('footer')[0].offsetHeight;
            document.getElementById("fake-footer").style.height = (footerHeight - 15)+'px';
            if(bodyHeight <= footerHeight){
                document.getElementsByTagName('body')[0].classList.add("footer-relative"); 
            } 
        }
        window.addEventListener("resize", onResizeFunction);
        function onResizeFunction (e){
            var bodyHeight = document.getElementsByTagName('body')[0].offsetHeight;
            var footerHeight = document.getElementsByTagName('footer')[0].offsetHeight;
            document.getElementById("fake-footer").style.height = (footerHeight - 15)+'px';
            if(bodyHeight <= footerHeight){
                document.getElementsByTagName('body')[0].classList.add("footer-relative"); 
            }
        }
        window.addEventListener("scroll", onResizeFunction);
        function onResizeFunction (e){
            var bodyHeight = document.getElementsByTagName('body')[0].offsetHeight;
            var footerHeight = document.getElementsByTagName('footer')[0].offsetHeight;
            document.getElementById("fake-footer").style.height = (footerHeight - 15)+'px';
            if(bodyHeight <= footerHeight){
                document.getElementsByTagName('body')[0].classList.add("footer-relative"); 
            }
        }
    },[])

  return (<>
        <div className='footer-edge-wrap'>
            <div className='footer-edge'></div>
            <div className='left-edge'></div>
            <div className='right-edge'></div>
        </div>
    <div id='fake-footer'></div>
    <footer id="main-footer">
        <div className='container'>
        <div className='footer-wrap'>
            <div className='fw-content fw-first'>
            <Logo/>
            <p className='fw-desc'>Our innovative platform leverages blockchain technology to revolutionize edge computing, offering a secure and scalable infrastructure designed to meet computing needs of the future.</p>
      <div className='fw-address'>
            <p><strong>ResoluteX Technology Labs Ltd</strong><span>DIFC Innovation Hub, Gate Avenue</span><span>Dubai, United Arab Emirates</span></p> 
            </div>      
      <ul className='social'>
                <li><Link href="https://twitter.com/Cyborg_network_"><Twitter/></Link></li>
                <li><Link href="https://in.linkedin.com/company/cyborg-network"><Linkedin/></Link></li>
                {/* <li><Link href="https://t.me/CyborgNetworkOfficial"><Telegram/></Link></li> */}
                {/* <li><Link href="/"><Medium/></Link></li> */}
            </ul>
            </div>
            <div className='fw-content fw-second'>
                <div className='content-wrap'>
                <h6 className='fw-head'>Explore</h6>
                <ul className='fw-link'>
                <li><Link href="/" className={`${router.asPath === "/" ? "active" : router.asPath === "/home" ? "active" : ""}`}>Home</Link></li>
                <li><Link href="/solution" className={`${router.asPath === "/solution" ? "active" : ""}`}>Solution</Link></li>
                <li><Link href="/about" className={`${router.asPath === "/about" ? "active" : router.asPath === "/about#faq" ? "active" : ""}`}>About</Link></li>
                </ul>
                </div>
            </div>
            <div className='fw-content fw-third'>
            <div className='content-wrap'>
                <h6 className='fw-head'>Information</h6>
                <ul className='fw-link'>
                    <li><Link href="/docs/cyborg-one-pager.pdf" target='_blank'>One Pager</Link></li>
                    <li><Link href="/docs/cyborg-white-paper-v1.pdf" target='_blank'>White Paper</Link></li>
                    {/* <li><Link href="/docs/cyborg-lite-paper-v1.pdf" target='_blank'>Lite Paper</Link></li> */}
                    <li><Link href="/about#faq">FAQ</Link></li>
                    {/* <li><Link href="/privacy-policy" className={`${router.asPath === "/privacy-policy" ? "active" : ""}`}>Privacy Policy</Link></li> */}
                    {/* <li><Link href="/term-of-use" className={`${router.asPath === "/term-of-use" ? "active" : ""}`}>Term of Use</Link></li> */}
                </ul>
                </div>
            </div>
            <div className='fw-content fw-fourth'>
                <h6 className='fw-head'>Subscribe to our newsletter</h6>
                <p className='fw-desc'>Sign up for early access</p>
                <div className='fw-form'>
                    <form>
                        <div className='fw-field'>
                            <div className='fw-clip clip-border'></div>
                            <input type='email' name='fw-email' placeholder='Enter you email'/>
                            <button type='submit' className='fw-send'><ArrowRight/></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
        <div className='footer-credit'>
            <p>Cyborg © 2023 All Right Reserved</p>
        </div>
    </footer>
    </>
  )
}

export default Footer
