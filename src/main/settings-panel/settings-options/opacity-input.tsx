import React, { useEffect, useRef, useState } from 'react'

const OpacityInput = () => {
    const [inputValue, setInputValue] = useState('0')
    const opacityInputRef = useRef<HTMLInputElement | null>(null)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        opacityInputRef.current = e.target
        setInputValue(e.target.value)

        localStorage.setItem('opacityInput', e.target.value);
    }

    useEffect(() => {
        const rangeInput = opacityInputRef.current;

        rangeInput?.addEventListener('input', () => {
            const value = parseInt(rangeInput.value);
            const trackWidth = Math.abs(value) / 2 + '%';

            rangeInput?.style.setProperty('--after-width', trackWidth)
        });

        const inputRangeValue = localStorage.getItem(`opacityInput`)
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

    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>Opacity</span>
            <input className='settings-panel__options__opacity-option' ref={opacityInputRef} onChange={onChange} type="range" defaultValue={inputValue} />
            <span className='settings-panel__options__value'>{inputValue + '%'}</span>
        </label>
    )
}

export default OpacityInput