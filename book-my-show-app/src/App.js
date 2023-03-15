import React from 'react';
import './App.css';
import Banner from '../src/Banner/Banner';
import Theater from './Theater/Theater';
import Ceat from './Ceat/Ceat';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Popup from './Popup/Popup';
function App() {
  const state=useSelector(({counter})=>counter);
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Banner />}></Route>
        <Route path='/gotoTheater' element={<Theater />}></Route>
        <Route path='/slectSeats' element={<Popup />}></Route>
        <Route path='/seatsAvailability' element={<Ceat />}></Route>
      </Routes>
     </BrowserRouter>
    </>  
  );
}

export default App;
