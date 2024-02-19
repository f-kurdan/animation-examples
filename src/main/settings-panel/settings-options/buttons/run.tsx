import React from 'react'
import { useDispatch } from 'react-redux'
import { startAnimation } from '../../../../redux/animationSlice'

const Run = () => {
    const dispatch = useDispatch()

    return (
        <div onClick={() => dispatch(startAnimation(true))} className='settings-panel__options__button'>Run</div>
    )
}

export default Run