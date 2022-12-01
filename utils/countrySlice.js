import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    selectedFilter: "Africa"
  }
  
  const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        
    },
    extraReducers: {},
  })
  
  export default countrySlice.reducer