import React, { useEffect, useState } from 'react'
import Arrow from './arrow';

const options = ['Linear', 'Ease', 'Ease-in', 'Ease-out', 'Ease-in-out'];

const Easing = () => {
    const [selectedValue, setSelectedValue] = useState('')
    const [isOpen, setIsOpen] = useState(true)

    useEffect(() => {
        if (selectedValue)
            localStorage.setItem('selectedEasingValue', selectedValue);
    }, [selectedValue])

    useEffect(() => {
        const selectedEasingValue = localStorage.getItem('selectedEasingValue');
        if (selectedEasingValue) {
            setSelectedValue(selectedEasingValue)
        }
    }, [])

    const onOptinClick = (value: string) => {
        setSelectedValue(value)
        setIsOpen(!isOpen)
    }

    return (
        <div className='settings-panel__options__option' style={{ 'justifyContent': 'start', 'alignItems': 'baseline' }}>
            <span className='settings-panel__options__option__label' >Easing</span>
            <div className='settings-panel__options__easing-options-list__option'>{selectedValue ? selectedValue : options[0]}
                <span>{<Arrow />}</span>
            </div>
            <ul className='settings-panel__options__easing-options-list' >
                {options.map(option => (
                    <li key={option} onClick={() => onOptinClick(option)} className='settings-panel__options__easing-options-list__option'>{option}</li>
                ))}
            </ul>
        </div>
    )
}

export default Easing