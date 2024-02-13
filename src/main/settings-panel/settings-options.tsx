import React from 'react'
import BlurInput from './settings-options/blur-input'
import DurationInput from './settings-options/duration-input'
import OpacityInput from './settings-options/opacity-input'
import ScaleInput from './settings-options/scale-input'
import TranslateInput from './settings-options/translate-input'

const SettingsOptions = () => {
  return (
    <ul className='settings-panel__options'>
      <li>
        <TranslateInput axis='X' />
      </li>
      <li>
        <TranslateInput axis='Y' />
      </li>
      <li>
        <OpacityInput />
      </li>
      <li>
        <ScaleInput />
      </li>
      <li>
        <BlurInput />
      </li>
      <li>
        <DurationInput />
      </li>
    </ul>
  )
}

export default SettingsOptions