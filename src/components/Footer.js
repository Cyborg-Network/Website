import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import Linkedin from './icons/Linkedin'
import Twitter from './icons/Twitter'
import Telegram from './icons/Telegram'
import Medium from './icons/Medium'
import { useRouter } from 'next/router'
import f6s from '../../public/images/f6s.jpg'
import Image from 'next/image'

const Footer = () => {

    const router = useRouter();

  return (<>
    <footer id="main-footer">
        <div className='container'>
        <div className='footer-wrap'>
            <div className='fw-content fw-first'>
            <Logo/>
            <ul className='social'>
                <li><Link className='twitter' href="https://twitter.com/Cyborg_network_"><Twitter/></Link></li>
                <li><Link href="https://in.linkedin.com/company/cyborg-network"><Linkedin/></Link></li>
                <li><Link href="https://t.me/CyborgNetworkOfficial"><Telegram/></Link></li>
                <li><Link href="https://medium.com/@info_94282"><Medium/></Link></li>
            </ul>
            </div>
            <div className='fw-content fw-second'>
                <div className='content-wrap'>
                <ul className='fw-link'>
                <li><Link href="/" className={`${router.asPath === "/team" ? "active" : ""}`}>About</Link></li>
                <li><Link href="/" className={`${router.asPath === "/documentation" ? "active" : ""}`}>Documentation</Link></li>
                {/* <li><Link href="/docs/tokenomics.pdf" className={`${router.asPath === "/tokenomics" ? "active" : ""}`}>Tokenomics</Link></li> */}
                <li><Link href='mailto:info@cyborgnetwork.io' className={`${router.asPath === "/contact" ? "active" : ""}`}>Contact Us</Link></li>
                <li><Link href="/privacy-policy" className={`${router.asPath === "/privacy-policy" ? "active" : ""}`}>Privacy Policy</Link></li>
                </ul>
                </div>
            </div>
        </div>
        <div className='footer-credit'>
            <div className='fc-left'>
                <p>© Cyborg {new Date().getFullYear()}, All right reserved.</p>
                <p>© 2023 NVIDIA, the NVIDIA logo</p>
                <Link href='mailto:info@cyborgnetwork.io'>info@cyborgnetwork.io</Link>
            </div>
            <div className='fc-right'>
                <Link href="https://www.f6s.com/company/cyborg-network" target='_blank'>
                    <Image src={f6s} alt="ai"/>
                </Link>
            </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
