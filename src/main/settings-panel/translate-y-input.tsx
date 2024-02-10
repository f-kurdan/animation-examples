import React, { useState } from 'react'

const TranslateYInput = () => {
    const [inputValue, setInputValue] = useState('0')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }
    
    return (
        <label className='settings-panel__options__option'>
            <span className='settings-panel__options__option__label'>Y</span>
            <input onChange={onChange} type="range" defaultValue={inputValue} min="-200" max="200" />
            <span className='settings-panel__options__value'>{inputValue}</span>
        </label>
    )
}

export default TranslateYInput