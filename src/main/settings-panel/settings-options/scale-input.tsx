import React, { useEffect, useRef, useState } from 'react'
import { setTranslateInputStyleProperties } from '../../../utils'

const ScaleInput = () => {
    const [inputValue, setInputValue] = useState('0')
    const scaleInputRef = useRef<HTMLInputElement | null>(null)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        scaleInputRef.current = e.target
        setInputValue((e.target.value))

        localStorage.setItem(`scaleInputValue`, e.target.value);
    }

    useEffect(() => {
        const rangeInput = scaleInputRef.current;
        rangeInput?.addEventListener('input', () => {
            setTranslateInputStyleProperties(rangeInput, rangeInput.value, 300)
        });

        const inputRangeValue = localStorage.getItem(`scaleInputValue`)
        if (inputRangeValue) {
            setInputValue(inputRangeValue)

            if (rangeInput) {
                setTranslateInputStyleProperties(rangeInput, inputRangeValue, 300)
                rangeInput.value = inputRangeValue
            }
        }
    }, [])

    const decimalForm  = (parseInt(inputValue) / 100).toFixed(1)

    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>Scale</span>
            <input className='settings-panel__options__translate-option' ref={scaleInputRef} onChange={onChange} type="range" defaultValue={inputValue} min="-300" max="300" />
            <span className='settings-panel__options__value'>{decimalForm}</span>
        </label>
    )
}

export default ScaleInput