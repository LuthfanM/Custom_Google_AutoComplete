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
      state.typedText = [action.payload, ...state.typedText]
    },
    setResults: (state, action)=>{
      state.searchResults = [action.payload, ...state.searchResults]
    },
    resetGeneral: (state)=>{
      Object.assign(state, initialState)
    },
  }
})

export const { setTextSearch, setResults, resetGeneral } = generalSlice.actions

export default generalSlice.reducer
