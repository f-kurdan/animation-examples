import React, { useEffect, useRef, useState } from 'react'

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
            const value = Number(rangeInput.value);
            const trackWidth = Math.round((Math.abs(value) / 3) * 100) / 2 + '%';

            rangeInput?.style.setProperty('--after-width', trackWidth)
        });

        const inputRangeValue = localStorage.getItem(`scaleInputValue`)
        if (inputRangeValue) {
            setInputValue(inputRangeValue);

            if (rangeInput) {
                const value = Number(rangeInput.value);
                const trackWidth =  Math.round((Math.abs(value) / 3) * 100) / 2 + '%';

                rangeInput?.style.setProperty('--after-width', trackWidth)
                rangeInput.value = inputRangeValue
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