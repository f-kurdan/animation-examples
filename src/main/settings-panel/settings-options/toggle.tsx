import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setReplay, startAnimation } from '../../../redux/animationSlice'

const Toggle = () => {
    const dispatch = useDispatch()
    const toggleValue = useSelector((state: any) => state.animation.replay)

    const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setReplay(e.target.checked))
        dispatch(startAnimation(false))
    }

    console.log(toggleValue)
    return (

        <div className='settings-panel__options__option' style={{ 'justifyContent': 'start' }}>
            <span className='settings-panel__options__option__label' >Replay</span>
            <label className="settings-panel__options__option-switch">
                <input onChange={onCheck} checked={toggleValue} type="checkbox" />
                <span className="settings-panel__options__option-slider" />
            </label>
        </div>
    )
}

export default Toggle