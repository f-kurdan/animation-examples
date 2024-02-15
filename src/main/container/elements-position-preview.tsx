import React from 'react'
import { useSelector } from 'react-redux'

const ElementsPositionPreview = () => {
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
    
    console.log(decimalOpacity)
 
  return (
    <div className='container__element-position-preview' 
        style={{ 
            'transform': `translate(${translateX}px, ${translateY}px)`,
            // 'scale': scale,
            // 'filter': `blur(${blur}px)`,
            // 'animation': `${speed}s ${delay}s ${easing} ${replay ? 'infinite' : ''}`
             }} >
        <span className='container__element__text'>Button</span>
    </div>
  )
}

export default ElementsPositionPreview