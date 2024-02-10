import React from 'react'
import TranslateXInput from './translate-x-input'
import TranslateYInput from './translate-y-input'

const SettingsOptions = () => {
  return (
    <ul className='settings-panel__options'>
        <li>
            <TranslateYInput />
        </li>
        <li>
            <TranslateXInput />
        </li>
    </ul>
  )
}

export default SettingsOptions