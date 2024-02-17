import React from 'react'
import './container.css'
import ElementsPositionPreview from './elements-position-preview'
import Image from './image'

const Element = () => {
  return (
    <div className='container__element'>
      <Image />
      <ElementsPositionPreview />
    </div>
  )
}

export default Element