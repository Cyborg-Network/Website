import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import Logo from './Logo'
import Button from './Button'
import AngleDown from './icons/AngleDown'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const Header = () => {

    const [toggle, setToggle] = useState("false");

    const router = useRouter();

  return (
    <header className={`${router.asPath === "/" ? "home" : ""} ${toggle ? "" : "active"}`}>
        <div className='container'>
            <div className='header-wrap'>
        <Logo/>
        <nav>
            <ul>
                <li className='submenu'>
                    <Link href="/">Products</Link>
                    <div className='dropdown'>
                        <ul>
                            <li onClick={()=>setToggle(!toggle)}><Link href="/cyborg-connect" className={`${router.asPath === "/cyborg-connect" ? "active" : ""}`}>Cyborg Connect</Link></li>
                            <li onClick={()=>setToggle(!toggle)}><Link href="/cyborg-miner" className={`${router.asPath === "/cyborg-miner" ? "active" : ""}`}>Cyborg Miner</Link></li>
                        </ul>
                    </div>
                </li>
                <li className='submenu'>
                    <Link href="/">Docs</Link>
                    <div className='dropdown'>
                        <ul>
                            <li onClick={()=>setToggle(!toggle)}><Link href="/docs/white-paper.pdf" target='_blank'>Litepaper</Link></li>
                            <li onClick={()=>setToggle(!toggle)}><Link href="/docs/one-pager.pdf" target='_blank'>One Pager</Link></li>
                        </ul>
                    </div>
                </li>
                <li onClick={()=>setToggle(!toggle)}><Link href="/team" className={`${router.asPath === "/team" ? "active" : ""}`}>Team</Link></li>
                <li onClick={()=>setToggle(!toggle)}><Link href="/docs/FAQ.pdf" target='_blank'>FAQ</Link></li>
                <div className='header-btn'>
                    <Button onClick={()=>setToggle(!toggle)} title="Join Now" link="https://tally.so/r/mVN4qg" size="btn-md" theme="dark"/>
                </div>
            </ul>
        </nav>
        <div className={`toggle-menu ${toggle ? "" : "active"}`} onClick={()=>setToggle(!toggle)}>
            <div className='toggle-wrap'>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        </div>
        </div>
    </header>
  )
}

export default Header