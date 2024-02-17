import React from 'react'
import './top-panel.css'

const TopPanel = () => {
  return (
    <nav className='top-panel'>
      <span className='top-panel__title'>Animation Examples</span>
      <a className='top-panel__github' href="https://github.com/f-kurdan/animation-examples">
        <img className='top-panel__github__image' src="github-mark-white.png" alt="github-mark-white" />
      </a>
    </nav>
  )
}

export default TopPanel