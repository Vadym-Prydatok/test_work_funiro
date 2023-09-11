import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SlideState {
  slide: number,
}

const initialState: SlideState = {
  slide: 0,
}

export const slideSlice = createSlice({
  name: 'slide',
  initialState,
  reducers: {
    plus: (state) => {
      state.slide +=1
    },
    minus: (state) => {
      state.slide -= 1
    },
    setSlideNum: (state, action: PayloadAction<number>) => {
      state.slide = action.payload
    },
  }
})

export const { plus, minus, setSlideNum } = slideSlice.actions;
export default slideSlice.reducer;