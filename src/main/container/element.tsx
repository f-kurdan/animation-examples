import React from 'react'
import './container.css'
import ElementsPositionPreview from './elements-position-preview'

const Element = () => {
  return (
    <div className='container__element'>
        <span className='container__element__text'>Button</span>        
        <ElementsPositionPreview />
    </div>
  )
}

export default Element