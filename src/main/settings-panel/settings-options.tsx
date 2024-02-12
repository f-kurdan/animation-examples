import React, { useRef } from 'react'
import TranslateXInput from './translate-x-input'
import TranslateYInput from './translate-y-input'

const SettingsOptions = () => {
  
  const TranslateYInputRef = useRef(null)


  return (
    <ul className='settings-panel__options'>
        <li>
            <TranslateXInput />
        </li>
        <li>
            <TranslateYInput />
        </li>
    </ul>
  )
}

export default SettingsOptions