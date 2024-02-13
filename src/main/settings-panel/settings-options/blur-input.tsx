import React, { useEffect, useRef, useState } from 'react'

const BlurInput = () => {
  const [inputValue, setInputValue] = useState('0')
    const blurInputRef = useRef<HTMLInputElement | null>(null)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        blurInputRef.current = e.target
        setInputValue(e.target.value)

        localStorage.setItem('blurInputValue', e.target.value);
    }

    useEffect(() => {
        const rangeInput = blurInputRef.current;

        rangeInput?.addEventListener('input', () => {
            const value = parseInt(rangeInput.value);
            const trackWidth = Math.abs(value) / 2 + '%';

            rangeInput?.style.setProperty('--after-width', trackWidth)
        });

        const inputRangeValue = localStorage.getItem(`blurInputValue`)
        if (inputRangeValue) {
            setInputValue(inputRangeValue);

            if (rangeInput) {
                const value = parseInt(rangeInput.value);
                const trackWidth = Math.abs(value) / 2 + '%';

                rangeInput?.style.setProperty('--after-width', trackWidth)
                rangeInput.value = inputRangeValue
            }
        }
    }, [])

    const quotient = Math.floor(parseInt(inputValue) / 10)

    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>Blur</span>
            <input className='settings-panel__options__opacity-option' ref={blurInputRef} onChange={onChange} type="range" defaultValue={inputValue} />
            <span className='settings-panel__options__value'>{quotient}</span>
        </label>
    )
}

export default BlurInput