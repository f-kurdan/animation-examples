import React from 'react'
import BlurInput from './settings-options/blur-input'
import Reset from './settings-options/buttons/reset'
import Run from './settings-options/buttons/run'
import DelayInput from './settings-options/delay-input'
import DurationInput from './settings-options/duration-input'
import Easing from './settings-options/easing'
import OpacityInput from './settings-options/opacity-input'
import ScaleInput from './settings-options/scale-input'
import Toggle from './settings-options/toggle'
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
      <li>
        <DelayInput />
      </li>
      <li>
        <Easing />
      </li>
      <li>
        <Toggle />
      </li>
      <li className='settings-panel__options__buttons'>
        <Run />
        <Reset />
      </li>
    </ul>
  )
}

export default SettingsOptions