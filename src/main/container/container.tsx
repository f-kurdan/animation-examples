import React from 'react'
import { useSelector } from 'react-redux'
import Element from './element'

const Container = () => {
  const repeat = useSelector((state: any) => state.animation.repeat)

  return (
    <div className='container'>
      <Element repeat={repeat} />
    </div>
  )
}

export default Container