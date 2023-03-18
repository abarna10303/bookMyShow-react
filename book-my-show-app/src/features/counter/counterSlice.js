import { createSlice } from '@reduxjs/toolkit';
export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    movieName:'',
    theater:'',
    showTime:'',
    tickets:0,
  },
  reducers: {
    setMovieName:(state,action)=>{
      state.movieName=action.payload;
    },
    setTicket:(state,action)=>{
      state.tickets=action.payload;
    },
    setTheater:(state,action)=>{
      state.theater=action.payload;
    },
    setShowTime:(state,action)=>{
      state.showTime=action.payload;
    }
  }, 
});

export const { setMovieName,setTicket,setTheater,setShowTime } = counterSlice.actions;

export default counterSlice.reducer;
