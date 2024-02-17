import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOpacity } from '../../../redux/animationSlice'

const OpacityInput = () => {
    const [inputValue, setInputValue] = useState('0')
    const opacityInputRef = useRef<HTMLInputElement | null>(null)
    const opacityValue = useSelector((state: any) => state.animation.opacity)
    const dispatch = useDispatch()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        opacityInputRef.current = e.target
        dispatch(setOpacity(Number(e.target.value)))
        setInputValue(e.target.value)
    }

    useEffect(() => {
        const rangeInput = opacityInputRef.current;

        rangeInput?.addEventListener('input', () => {
            const value = parseInt(rangeInput.value);
            const trackWidth = Math.abs(value) / 2 + '%';

            rangeInput?.style.setProperty('--after-width', trackWidth)
        });

        if (opacityValue) {
            setInputValue(opacityValue);

            if (rangeInput) {
                const value = parseInt(rangeInput.value);
                const trackWidth = Math.abs(value) / 2 + '%';

                rangeInput?.style.setProperty('--after-width', trackWidth)
                rangeInput.value = opacityValue
            }
        }
    }, [])

    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>Opacity</span>
            <input className='settings-panel__options__opacity-option' ref={opacityInputRef} onChange={onChange} type="range" defaultValue={inputValue} />
            <span className='settings-panel__options__value'>{inputValue + '%'}</span>
        </label>
    )
}

export default OpacityInput