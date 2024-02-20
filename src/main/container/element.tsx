import React from 'react'
import { useSelector } from 'react-redux'
import './container.css'
import ElementsPositionPreview from './elements-position-preview'
import Image from './image'

const Element = ({ repeat }: { repeat: boolean }) => {
  const translateX = useSelector((state: any) => state.animation.translateX)
  const translateY = useSelector((state: any) => state.animation.translateY)
  const opacity = useSelector((state: any) => state.animation.opacity)
  const decimalOpacity = (opacity / 100) === Math.round(opacity / 100) ? (opacity / 100) : (opacity / 100).toFixed(1)
  const scale = useSelector((state: any) => state.animation.scale)
  const blur = useSelector((state: any) => state.animation.blur)
  const speed = useSelector((state: any) => state.animation.speed)
  const delay = useSelector((state: any) => state.animation.delay)
  const easing = useSelector((state: any) => state.animation.easing)
  const replay = useSelector((state: any) => state.animation.replay)
  const start = useSelector((state: any) => state.animation.start)

  const properties: any = {}
  if (translateX || translateY || scale)
    properties['transform'] = `translate(${translateX}px, ${translateY}px) scale(${scale})`

  if (opacity)
    properties['opacity'] = decimalOpacity

  if (blur)
    properties['filter'] = `blur(${blur / 10}px)`

  const keyframes = `
    @keyframes slideIn {
      to {
        transform: ${properties['transform']};
        opacity: ${properties['opacity']};
        filter: ${properties['filter']};
      }
    }
  `;

  return (
    <div className='container__element'>
      <div key={start} className='container__element__image'
        style={start ? { 'animation': `slideIn ${speed}s ${delay}s ${easing.toLowerCase()} ${replay ? 'infinite' : ''}` } : {}}>
        <Image />
      </div>
      <ElementsPositionPreview />
      <style>{keyframes}</style>
    </div>
  )
}

export default Element