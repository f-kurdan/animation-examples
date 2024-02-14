import React from 'react'

const Toggle = () => {
    return (

        <div className='settings-panel__options__option' style={{ 'justifyContent': 'start' }}>
            <span className='settings-panel__options__option__label' >Replay</span>
            <label className="settings-panel__options__option-switch">
                <input type="checkbox" />
                <span className="settings-panel__options__option-slider"/>
            </label>
        </div>
    )
}

export default Toggle