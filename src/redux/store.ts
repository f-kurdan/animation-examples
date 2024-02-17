import { configureStore } from '@reduxjs/toolkit'
import animationReducer from './animationSlice'
import {
    persistStore,
    persistReducer,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedAnimationReducer = persistReducer(persistConfig, animationReducer)

export const store = configureStore({
    reducer: {
        animation: persistedAnimationReducer,
    },
})

export const persistor = persistStore(store)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch