import { configureStore } from '@reduxjs/toolkit'
import { slideSlice } from './features/sliderSlice'

export const store = configureStore({
  reducer: {
    slide: slideSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch