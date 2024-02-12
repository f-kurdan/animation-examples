import React, { useRef } from 'react'
import OpacityInput from './opacity-input'
import TranslateXInput from './translate-x-input'
import TranslateYInput from './translate-y-input'

const SettingsOptions = () => {
  return (
    <ul className='settings-panel__options'>
        <li>
            <TranslateXInput />
        </li>
        <li>
            <TranslateYInput />
        </li>
        <li>
          <OpacityInput />
        </li>
    </ul>
  )
}

export default SettingsOptions