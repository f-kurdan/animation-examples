import React, { useEffect, useRef, useState } from 'react'

function setStyleProperties(rangeInput: HTMLInputElement, rangeValue: string) {
    const value = parseInt(rangeValue);
    const trackWidth = (((Math.abs(value) / 200) * 100) * (0.59)) - 5 + 'px';

    if (value >= 0) {
        rangeInput?.style.setProperty('--before-width', '0');
        rangeInput?.style.setProperty('--after-width', trackWidth);
    } else {
        rangeInput?.style.setProperty('--before-width', trackWidth);
        rangeInput?.style.setProperty('--after-width', '0');
    }
}

const TranslateXInput = () => {
    const [inputValue, setInputValue] = useState('0')
    const translateXInputRef = useRef<HTMLInputElement | null>(null)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        translateXInputRef.current = e.target
        setInputValue(e.target.value)

        localStorage.setItem('inputRangeValue', e.target.value);
    }

    useEffect(() => {
        const rangeInput = translateXInputRef.current;

        rangeInput?.addEventListener('input', () => {
            setStyleProperties(rangeInput, rangeInput.value)
        });

        const inputRangeValue = localStorage.getItem('inputRangeValue')
        if (inputRangeValue) {
            setInputValue(inputRangeValue)

            if (rangeInput) {
                setStyleProperties(rangeInput, inputRangeValue)
                rangeInput.value = inputRangeValue
            }
        }

    }, [])

    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>X</span>
            <input ref={translateXInputRef} onChange={onChange} type="range" defaultValue={inputValue} min="-200" max="200" />
            <span className='settings-panel__options__value'>{inputValue}</span>
        </label>
    )
}

export default TranslateXInput