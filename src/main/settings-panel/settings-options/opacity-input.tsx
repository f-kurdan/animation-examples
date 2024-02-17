import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOpacity } from '../../../redux/animationSlice'

const OpacityInput = () => {
    const opacityInputRef = useRef<HTMLInputElement | null>(null)
    const opacityValue = useSelector((state: any) => state.animation.opacity)
    const dispatch = useDispatch()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setOpacity(Number(e.target.value)))
    }

    useEffect(() => {
        const rangeInput = opacityInputRef.current;

        rangeInput?.addEventListener('input', () => {
            const value = parseInt(rangeInput.value);
            const trackWidth = Math.abs(value) / 2 + '%';

            rangeInput?.style.setProperty('--after-width', trackWidth)
        });

        if (rangeInput) {
            const trackWidth = Math.abs(opacityValue) / 2 + '%';
            rangeInput?.style.setProperty('--after-width', trackWidth)
            rangeInput.value = opacityValue
        }
    }, [opacityValue])

    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>Opacity</span>
            <input className='settings-panel__options__opacity-option' ref={opacityInputRef} onChange={onChange} type="range" defaultValue={opacityValue} />
            <span className='settings-panel__options__value'>{opacityValue + '%'}</span>
        </label>
    )
}

export default OpacityInput