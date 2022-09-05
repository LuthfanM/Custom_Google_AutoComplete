// ** Redux Imports
import { createSlice} from '@reduxjs/toolkit'
import { convertCharacter } from '../../utils';

const initialState = {
  typedText: [],
  searchResults: []
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setTextSearch: (state, action)=>{
      state.typedText = [...state.typedText, action.payload]
    },
    setResults: (state, action)=>{
      state.searchResults = [...state.searchResults, action.payload]
    },
    resetGeneral: (state)=>{
      Object.assign(state, initialState)
    },
  }
})

export const { setTextSearch, setResults, resetGeneral } = generalSlice.actions

export default generalSlice.reducer
