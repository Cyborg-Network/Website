import Image from 'next/image'
import React from 'react'
import logoImg from '../../public/images/logo-dark.svg'
import Link from 'next/link'

const Logo = () => {
  return (
    <div className='logo'>
        <Link href="/"><Image src={logoImg} alt='logo'></Image></Link>
    </div>
  )
}

export default Logo