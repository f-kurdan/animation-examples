import React, { useEffect, useRef, useState } from 'react'
import { setTranslateInputStyleProperties } from '../../../utils'
import { useDispatch } from 'react-redux'
import { setTranslateX, setTranslateY } from '../../../redux/animationSlice'

const TranslateInput = ({ axis }: { axis: string }) => {
    const [inputValue, setInputValue] = useState('0')
    const translateInputRef = useRef<HTMLInputElement | null>(null)
    const dispatch = useDispatch()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        translateInputRef.current = e.target
        const setTranslate = axis === 'X' ? setTranslateX : setTranslateY
        dispatch((setTranslate(Number(e.target.value))))
        setInputValue(e.target.value)

        localStorage.setItem(`inputRange${axis}Value`, e.target.value);
    }

    useEffect(() => {
        const rangeInput = translateInputRef.current;
        rangeInput?.addEventListener('input', () => {
            setTranslateInputStyleProperties(rangeInput, rangeInput.value, 200)
        });

        const inputRangeValue = localStorage.getItem(`inputRange${axis}Value`)
        if (inputRangeValue) {
            setInputValue(inputRangeValue)

            if (rangeInput) {
                setTranslateInputStyleProperties(rangeInput, inputRangeValue, 200)
                rangeInput.value = inputRangeValue
            }
        }
    }, [])

    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>{axis}</span>
            <input className='settings-panel__options__translate-option' ref={translateInputRef} onChange={onChange} type="range" defaultValue={inputValue} min="-200" max="200" />
            <span className='settings-panel__options__value'>{inputValue}</span>
        </label>
    )
}

export default TranslateInput