import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setEasing, resetAnimationCount } from '../../../redux/animationSlice';
import Arrow from './arrow';

const options = ['Linear', 'Ease', 'Ease-in', 'Ease-out', 'Ease-in-out'];

const Easing = () => {
    const dispatch = useDispatch()
    const easingValue = useSelector((state: any) => state.animation.easing)

    const onOptinClick = (value: string) => {
        dispatch(setEasing(value))
        dispatch(resetAnimationCount())
    }

    return (
        <div className='settings-panel__options__option' style={{ 'justifyContent': 'start', 'alignItems': 'baseline' }}>
            <span className='settings-panel__options__option__label' >Easing</span>
            <div className='settings-panel__options__easing-options-list__option'>{easingValue ? easingValue : options[0]}
                <span>{<Arrow />}</span>
            </div>
            <ul className='settings-panel__options__easing-options-list' >
                {options.map(option => (
                    <li key={option} onClick={() => onOptinClick(option)} className='settings-panel__options__easing-options-list__option'>{option}</li>
                ))}
            </ul>
        </div>
    )
}

export default Easing