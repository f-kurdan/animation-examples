import React, { useEffect, useState } from 'react'

const Toggle = () => {
    const [checked, setChecked] = useState(false)

    const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked)
    }

    useEffect(() => {
        localStorage.setItem('replayToggleValue', String(checked))
    }, [checked])

    useEffect(() => {
        const replayToggleValue = localStorage.getItem('replayToggleValue')
        if (replayToggleValue)
            setChecked(Boolean(replayToggleValue))
    }, [])

    return (

        <div className='settings-panel__options__option' style={{ 'justifyContent': 'start' }}>
            <span className='settings-panel__options__option__label' >Replay</span>
            <label className="settings-panel__options__option-switch">
                <input onChange={onCheck} checked={checked} type="checkbox" />
                <span className="settings-panel__options__option-slider" />
            </label>
        </div>
    )
}

export default Toggle