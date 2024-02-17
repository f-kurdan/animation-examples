import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSpeed } from '../../../redux/animationSlice'

const DurationInput = () => {
    const durationInputRef = useRef<HTMLInputElement | null>(null)
    const dispatch = useDispatch()
    const durationValue = useSelector((state: any) => state.animation.speed)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSpeed(Number(e.target.value)))
    }

    useEffect(() => {
        const rangeInput = durationInputRef.current;

        rangeInput?.addEventListener('input', () => {
            const value = Number(rangeInput.value);
            const trackWidth = Math.round((Math.abs(value) / 2) * 100) / 2 + '%';

            rangeInput?.style.setProperty('--after-width', trackWidth)
        });

        if (rangeInput) {
            const trackWidth =  Math.round((Math.abs(durationValue) / 2) * 100) / 2 + '%';

            rangeInput?.style.setProperty('--after-width', trackWidth)
            rangeInput.value = durationValue
        }
    }, [durationValue])

    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>Speed</span>
            <input className='settings-panel__options__opacity-option' ref={durationInputRef} onChange={onChange} type="range" defaultValue={durationValue} min="0" max="2" step="0.1"/>
            <span className='settings-panel__options__value'>{durationValue}s</span>
        </label>
    )
}

export default DurationInput