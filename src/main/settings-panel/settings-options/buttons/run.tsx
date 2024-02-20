import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increaseAnimationCount } from '../../../../redux/animationSlice'

const Run = () => {
    const dispatch = useDispatch()
    const start = useSelector((state: any) => state.animation.start)
    const onClick = () => {
        dispatch(increaseAnimationCount())
    }

    return (
        <div onClick={onClick} className='settings-panel__options__button'>{start ? 'Replay' : 'Run'}</div>
    )
}

export default Run