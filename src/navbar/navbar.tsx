import React from 'react'
import Logo from './logo'
import './navbar.css'
import PreviewButton from './preview-button'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Logo />
        <PreviewButton />
    </nav>
  )
}

export default Navbar