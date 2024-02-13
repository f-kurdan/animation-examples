import React, { useEffect, useRef, useState } from 'react'

const DurationInput = () => {
    const [inputValue, setInputValue] = useState('0')
    const durationInputRef = useRef<HTMLInputElement | null>(null)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        durationInputRef.current = e.target
        setInputValue((e.target.value))

        localStorage.setItem(`durationInputValue`, e.target.value);
    }

    useEffect(() => {
        const rangeInput = durationInputRef.current;

        rangeInput?.addEventListener('input', () => {
            const value = Number(rangeInput.value);
            const trackWidth = Math.round((Math.abs(value) / 2) * 100) / 2 + '%';

            rangeInput?.style.setProperty('--after-width', trackWidth)
        });

        const inputRangeValue = localStorage.getItem(`durationInputValue`)
        if (inputRangeValue) {
            setInputValue(inputRangeValue);

            if (rangeInput) {
                const value = Number(rangeInput.value);
                const trackWidth =  Math.round((Math.abs(value) / 2) * 100) / 2 + '%';

                rangeInput?.style.setProperty('--after-width', trackWidth)
                rangeInput.value = inputRangeValue
            }
        }
    }, [])

    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>Speed</span>
            <input className='settings-panel__options__opacity-option' ref={durationInputRef} onChange={onChange} type="range" defaultValue={inputValue} min="0" max="2" step="0.1"/>
            <span className='settings-panel__options__value'>{inputValue}s</span>
        </label>
    )
}

export default DurationInput