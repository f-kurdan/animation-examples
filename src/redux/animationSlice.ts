import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AnimationState {
    translateX: number,
    translateY: number,
    opacity: number,
    scale: number,
    blur: number,
    speed: number,
    delay: number,
    easing: string,
    replay: boolean,
    start: number
    repeat: boolean
}

const initialState: AnimationState = {
    translateX: 0,
    translateY: 0,
    opacity: 0,
    scale: 1,
    blur: 0,
    speed: 1,
    delay: 0,
    easing: 'linear',
    replay: false,
    start: 0,
    repeat: false
}

export const animationSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setTranslateX: (state, action: PayloadAction<number>) => {
            state.translateX = action.payload
        },
        setTranslateY: (state, action: PayloadAction<number>) => {
            state.translateY = action.payload
        },
        setOpacity: (state, action: PayloadAction<number>) => {
            state.opacity = action.payload
        },
        setScale: (state, action: PayloadAction<number>) => {
            state.scale = action.payload
        },
        setBlur: (state, action: PayloadAction<number>) => {
            state.blur = action.payload
        },
        setSpeed: (state, action: PayloadAction<number>) => {
            state.speed = action.payload
        },
        setDelay: (state, action: PayloadAction<number>) => {
            state.delay = action.payload
        },
        setEasing: (state, action: PayloadAction<string>) => {
            state.easing = action.payload
        },
        setReplay: (state, action: PayloadAction<boolean>) => {
            state.replay = action.payload
        },
        resetState: (state) => initialState,
        increaseAnimationCount: (state) => {
            state.start += 1
        },
        resetAnimationCount: (state) => {
            state.start = 0
        },
    },
})

export const { setTranslateX, setTranslateY, setOpacity, setScale, setBlur, setSpeed, setDelay, setEasing, setReplay, resetState, increaseAnimationCount, resetAnimationCount } = animationSlice.actions

export default animationSlice.reducer