import React from 'react'
import { useDispatch } from 'react-redux'
import { resetState } from '../../../../redux/animationSlice'
const Reset = () => {
    const dispatch = useDispatch()

    return (
        <div onClick={() => dispatch(resetState())} className='settings-panel__options__button'>Reset</div>
    )
}

export default Reset