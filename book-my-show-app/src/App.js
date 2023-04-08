import React from "react";
import "./App.css";
import Banner from "../src/Banner/Banner";
import Theater from "./Theater/Theater";
import Ceat from "./Ceat/Ceat";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Popup from "./Popup/Popup";
import Payment from "./Payment/Payment";
import SuccessFull from "./SuccessFullPage/SuccessFull";
import SignIn from "./SignIn/SignIn";
import SignUp from "./SignUp/SignUp";
function App() {
  const state = useSelector(({ counter }) => counter);
  return (
    <>
      {state.isAuthodcate ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Banner />}></Route>
            <Route path="/goToMovieCard" element={<Banner />}></Route>
            <Route path="/gotoTheater" element={<Theater />}></Route>
            <Route path="/slectSeats" element={<Popup />}></Route>
            <Route path="/seatsAvailability" element={<Ceat />}></Route>
            <Route path="/gotoPayment" element={<Payment />}></Route>
            <Route path='/gotoSuccess' element={<SuccessFull />}></Route>
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SignIn />}></Route>
            <Route path="/gotosignUp" element={<SignUp />}></Route>
            <Route path="*" element={<SignIn />}></Route>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
