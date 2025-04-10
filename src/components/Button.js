import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

const defaultLink = "/";
const defaultSize = "btn-md";

const Button = ({title,link,size, theme="", icon}) => {
  return (
    <Link href={link} className={`btn ${size} ${theme}`}>{icon && <Image src={icon} alt="btn-icon" className='btn-icon'></Image>} {title}</Link>
  )
}

export default Button