import React, { useState } from 'react'
import Arrow from './arrow';

const options = ['Linear', 'Ease', 'Ease-in', 'Ease-out', 'Ease-in-out'];

const Easing = () => {
    const [selectedValue, setSelectedValue] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    const toggleSelect = () => {
        setIsOpen(!isOpen);
    };

    const onOptinClick = (value: string) => {
        setSelectedValue(value)
        setIsOpen(!isOpen)
    }

    return (
        <div className='settings-panel__options__option' style={{ 'justifyContent': 'start' }}>
            <span className='settings-panel__options__option__label' >Easing</span>
            <div className='settings-panel__options__easing-options-list__option' onClick={toggleSelect}>{selectedValue ? selectedValue : options[0]}
              <span>{<Arrow />}</span>
            </div>
            {
                isOpen ? (<ul className='settings-panel__options__easing-options-list' >
                    {options.map(option => (
                        <li key={option} onClick={() => onOptinClick(option)} className='settings-panel__options__easing-options-list__option'>{option}</li>
                    ))}
                </ul>) : null
            }
        </div>
    )
}

export default Easing