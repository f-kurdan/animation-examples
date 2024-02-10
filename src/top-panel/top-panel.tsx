import React from 'react'
import Logo from './logo'
import './top-panel.css'
import PreviewButton from './preview-button'

const TopPanel = () => {
  return (
    <nav className='top-panel'>
        <Logo />
        <PreviewButton />
    </nav>
  )
}

export default TopPanel