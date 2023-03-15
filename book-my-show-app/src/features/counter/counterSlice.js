import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    movieName:'',
    tickets:0,
  },
  reducers: {
    setMovieName:(state,action)=>{
      state.movieName=action.payload;
    },
    setTicket:(state,action)=>{
      state.tickets=action.payload;
    }
  }, 
});

export const { setMovieName,setTicket } = counterSlice.actions;

export default counterSlice.reducer;
