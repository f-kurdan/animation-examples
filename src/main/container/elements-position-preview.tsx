import React from 'react'
import { useSelector } from 'react-redux'
import Image from './image'

const ElementsPositionPreview = () => {
  const start: { start: boolean } = useSelector((state: any) => state.animation.start)

  const translateX = useSelector((state: any) => state.animation.translateX)
  const translateY = useSelector((state: any) => state.animation.translateY)
  const scale = useSelector((state: any) => state.animation.scale)
  const blur = useSelector((state: any) => state.animation.blur)

  return !start ? (
    <div className='container__elements-position-preview'
      style={{
        'transform': `translate(${translateX}px, ${translateY}px) scale(${scale})`,
        'filter': `blur(${blur / 10}px)`,
      }} >
      <Image />
    </div>
  ) : null
}

export default ElementsPositionPreview