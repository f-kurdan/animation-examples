import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSpeed, resetAnimationCount } from '../../../redux/animationSlice'

const DurationInput = () => {
    const durationInputRef = useRef<HTMLInputElement | null>(null)
    const dispatch = useDispatch()
    const durationValue = useSelector((state: any) => state.animation.speed)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSpeed(Number(e.target.value)))
        dispatch(resetAnimationCount())
    }

    useEffect(() => {
        const rangeInput = durationInputRef.current;

        rangeInput?.addEventListener('input', () => {
            const value = Number(rangeInput.value);
            const trackWidth = Math.round(((Math.abs(value) - 1) / 2) * 100) / 2 + '%';

            rangeInput?.style.setProperty('--after-width', trackWidth)
        });

        if (rangeInput) {
            const trackWidth =  Math.round(((Math.abs(durationValue) - 1) / 2) * 100) / 2 + '%';

            rangeInput?.style.setProperty('--after-width', trackWidth)
            rangeInput.value = durationValue
        }
    }, [durationValue])

    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>Speed</span>
            <input className='settings-panel__options__opacity-option' ref={durationInputRef} onChange={onChange} type="range" defaultValue={durationValue} min="1" max="3" step="0.1"/>
            <span className='settings-panel__options__value'>{durationValue}s</span>
        </label>
    )
}

export default DurationInput