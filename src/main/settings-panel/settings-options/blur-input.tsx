import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setBlur } from '../../../redux/animationSlice'

const BlurInput = () => {
    const blurInputRef = useRef<HTMLInputElement | null>(null)
    const dispatch = useDispatch()
    const blurValue = useSelector((state: any) => state.animation.blur)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setBlur(Number(e.target.value)))
    }

    useEffect(() => {
        const rangeInput = blurInputRef.current;

        rangeInput?.addEventListener('input', () => {
            const value = parseInt(rangeInput.value);
            const trackWidth = Math.abs(value) / 2 + '%';

            rangeInput?.style.setProperty('--after-width', trackWidth)
        });

        if (rangeInput) {
            const trackWidth = Math.abs(blurValue) / 2 + '%';

            rangeInput?.style.setProperty('--after-width', trackWidth)
            rangeInput.value = blurValue
        }
    }, [blurValue])

    const quotient = Math.floor(parseInt(blurValue) / 10)

    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>Blur</span>
            <input className='settings-panel__options__opacity-option' ref={blurInputRef} onChange={onChange} type="range" defaultValue={blurValue} />
            <span className='settings-panel__options__value'>{quotient}</span>
        </label>
    )
}

export default BlurInput