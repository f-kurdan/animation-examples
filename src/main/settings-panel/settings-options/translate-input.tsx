import React, { useEffect, useRef } from 'react'
import { setTranslateInputStyleProperties } from '../../../utils'
import { useDispatch, useSelector } from 'react-redux'
import { setTranslateX, setTranslateY } from '../../../redux/animationSlice'

const TranslateInput = ({ axis }: { axis: string }) => {
    const translateInputRef = useRef<HTMLInputElement | null>(null)
    const dispatch = useDispatch()
    const translateValue = useSelector((state: any) => state.animation[`translate${axis}`])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const setTranslate = axis === 'X' ? setTranslateX : setTranslateY
        dispatch((setTranslate(Number(e.target.value))))
    }

    useEffect(() => {
        const rangeInput = translateInputRef.current;
        rangeInput?.addEventListener('input', () => {
            setTranslateInputStyleProperties(rangeInput, rangeInput.value, 200)
        });
        
        if (rangeInput) {
            setTranslateInputStyleProperties(rangeInput, translateValue, 200)
            rangeInput.value = translateValue
        }
    }, [translateValue])

    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>{axis}</span>
            <input className='settings-panel__options__translate-option' ref={translateInputRef} onChange={onChange} type="range" defaultValue={translateValue} min="-200" max="200" />
            <span className='settings-panel__options__value'>{translateValue}</span>
        </label>
    )
}

export default TranslateInput