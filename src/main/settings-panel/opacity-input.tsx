import React, { useEffect, useRef, useState } from 'react'

const OpacityInput = () => {
    const [inputValue, setInputValue] = useState('0')
    const translateXInputRef = useRef<HTMLInputElement | null>(null)

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        translateXInputRef.current = e.target
        setInputValue(e.target.value + '%')

        //localStorage.setItem('opacityInput', e.target.value);
    }

    useEffect(() => {
        // const rangeInput = translateXInputRef.current;

        // rangeInput?.addEventListener('input', () => {
        //     setStyleProperties(rangeInput, rangeInput.value)
        // });

        // const inputRangeValue = localStorage.getItem('inputRangeXValue')
        // if (inputRangeValue) {
        //     setInputValue(inputRangeValue)

        //     if (rangeInput) {
        //         setStyleProperties(rangeInput, inputRangeValue)
        //         rangeInput.value = inputRangeValue
        //     }
        // }

    }, [])

    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>Opacity</span>
            <input ref={translateXInputRef} onChange={onChange} type="range" defaultValue={inputValue} />
            <span className='settings-panel__options__value'>{inputValue}</span>
        </label>
    )
}

export default OpacityInput