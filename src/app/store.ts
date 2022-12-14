import {Action, combineReducers, configureStore, ThunkAction} from '@reduxjs/toolkit'
import type { PreloadedState } from '@reduxjs/toolkit'

import userReducer from '../features/users/usersSlice'
import counterReducer from '../features/counter/counterSlice';

// Create the root reducer separately so we can extract the RootState type
const rootReducer = combineReducers({
  user: userReducer,
  counter: counterReducer,
})

export const store = configureStore({
  reducer: rootReducer
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
