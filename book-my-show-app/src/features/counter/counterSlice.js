import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    isAuthodcate: false,
    movieName: "",
    theater: "",
    showTime: "",
    tickets: 0,
    selectSeats: [],
  },
  reducers: {
    setAutodication: (state, action) => {
      state.isAuthodcate = action.payload;
    },
    setMovieName: (state, action) => {
      state.movieName = action.payload;
    },
    setTicket: (state, action) => {
      state.tickets = action.payload;
    },
    setTheater: (state, action) => {
      state.theater = action.payload;
    },
    setShowTime: (state, action) => {
      state.showTime = action.payload;
    },
    setSelectSeat: (state, action) => {
      state.selectSeats = action.payload;
    },
  },
});

export const {
  setAutodication,
  setMovieName,
  setMovieGeneral,
  setTicket,
  setTheater,
  setShowTime,
  setSelectSeat,
} = counterSlice.actions;

export default counterSlice.reducer;
