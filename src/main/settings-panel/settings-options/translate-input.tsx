import React, { useEffect, useRef, useState } from 'react'
import { setTranslateInputStyleProperties } from '../../../utils'

const TranslateInput = ({axis}:{axis: string}) => {
    const [inputValue, setInputValue] = useState('0')
    const translateXInputRef = useRef<HTMLInputElement | null>(null)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        translateXInputRef.current = e.target
        setInputValue(e.target.value)

        localStorage.setItem(`inputRange${axis}Value`, e.target.value);
    }

    useEffect(() => {
        const rangeInput = translateXInputRef.current;
        rangeInput?.addEventListener('input', () => {
            setTranslateInputStyleProperties(rangeInput, rangeInput.value)
        });

        const inputRangeValue = localStorage.getItem(`inputRange${axis}Value`)
        if (inputRangeValue) {
            setInputValue(inputRangeValue)

            if (rangeInput) {
                setTranslateInputStyleProperties(rangeInput, inputRangeValue)
                rangeInput.value = inputRangeValue
            }
        }
    }, [])

    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>{axis}</span>
            <input className='settings-panel__options__translate-option' ref={translateXInputRef} onChange={onChange} type="range" defaultValue={inputValue} min="-200" max="200" />
            <span className='settings-panel__options__value'>{inputValue}</span>
        </label>
    )
}

export default TranslateInput