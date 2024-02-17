import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDelay } from '../../../redux/animationSlice'

const DelayInput = () => {
    const delayInputRef = useRef<HTMLInputElement | null>(null)
    const dispatch = useDispatch()
    const delayValue = useSelector((state: any) => state.animation.delay)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setDelay(Number(e.target.value)))
    }

    useEffect(() => {
        const rangeInput = delayInputRef.current;

        rangeInput?.addEventListener('input', () => {
            const value = Number(rangeInput.value);
            const trackWidth = Math.round((Math.abs(value) / 3) * 100) / 2 + '%';

            rangeInput?.style.setProperty('--after-width', trackWidth)
        });

        if (rangeInput) {
            const trackWidth =  Math.round((Math.abs(delayValue) / 3) * 100) / 2 + '%';
            rangeInput?.style.setProperty('--after-width', trackWidth)
            rangeInput.value = delayValue
        }
    }, [delayValue])

    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>Delay</span>
            <input className='settings-panel__options__opacity-option' ref={delayInputRef} onChange={onChange} type="range" defaultValue={delayValue} min="0" max="3" step="0.1"/>
            <span className='settings-panel__options__value'>{delayValue}s</span>
        </label>
    )
}

export default DelayInput