import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setScale } from '../../../redux/animationSlice'

const ScaleInput = () => {
    const [inputValue, setInputValue] = useState('0')
    const scaleInputRef = useRef<HTMLInputElement | null>(null)
    const  scaleValue = useSelector((state: any) => state.animation.scale)
    const dispatch = useDispatch()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        scaleInputRef.current = e.target
        dispatch(setScale(Number(e.target.value)))
        setInputValue((e.target.value))
    }

    useEffect(() => {
        const rangeInput = scaleInputRef.current;

        rangeInput?.addEventListener('input', () => {
            const value = Number(rangeInput.value);
            const trackWidth = Math.round((Math.abs(value) / 3) * 100) / 2 + '%';

            rangeInput?.style.setProperty('--after-width', trackWidth)
        });

        if (scaleValue) {
            setInputValue(scaleValue);

            if (rangeInput) {
                const value = Number(rangeInput.value);
                const trackWidth =  Math.round((Math.abs(value) / 3) * 100) / 2 + '%';

                rangeInput?.style.setProperty('--after-width', trackWidth)
                rangeInput.value = scaleValue
            }
        }
    }, [])

    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>Scale</span>
            <input className='settings-panel__options__opacity-option' ref={scaleInputRef} onChange={onChange} type="range" defaultValue={inputValue} min="0" max="3" step="0.1"/>
            <span className='settings-panel__options__value'>{inputValue}</span>
        </label>
    )
}

export default ScaleInput