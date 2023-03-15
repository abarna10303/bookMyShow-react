import React, { useState } from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { useRef } from "react";
import "./ceat.css";
const Ceat = () => {
  let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
  let row = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K","L","M","N","O","P"];
  const state = useSelector(({ counter }) => counter);
  const [seatStorage,setseatStorage]=useState([]);
  let count=0;
  const refe = useRef(null);
  const changeBackground = (e) => {
 
    let active=document.getElementById(e);
    if(count<state.tickets && !active.classList.contains("changebg1"))
    {
      active.classList.add("changebg1");
      // setseatStorage([...seatStorage,e]);
      count++;
      localStorage.setItem(`seat${e}`,`${e}`);
     
    }
    else if(active.classList.contains("changebg1"))
    {
      active.classList.remove("changebg1");
      count--;
      localStorage.removeItem(`seat${e}`,`${e}`);
    }
    console.log(localStorage.getItem(`seat${e}`));
  };
  const handlingPayNow=(e)=>{
    
  }
  return (
    <section>
      <div className="ceat-container">
        <div className="ceat-header" style={{ backgroundColor: "#1f2533" }}>
          <div>
            <span>{state.movieName}</span>
            <p style={{ marginBottom: "0px" }}>
              Anand Theatre Madhuranthagam RGB LASER 4k | Tomorrow, 11 Mar,
              11:30 AM
            </p>
          </div>
          <div>
            <Button
              style={{
                textTransform: "none",
                border: "1px solid white",
                color: "white",
              }}
              sx={{ mr: 2, ml: 2, pt: 0, pb: 0 }}
            >
              {state.tickets} Tickets
            </Button>
          </div>
        </div>
        <p>DIAMOUNT : </p>
        <div className="ceats-rows">
        {row.map((value1, index1) => {
            return (
              <div className="ceat-row" key={index1}>
                <div className="ceat">
                  <div className="ceat-no seat-bottom-gap">{value1}</div>
                </div>
                <div className="ceat">
                  {array.map((value2, index2) => {
                    return (
                      <button
                        className="ceat-no seat-left-gap"
                        id={value1+value2}
                        onClick={(e,index2) => changeBackground(e.target.id)}
                        key={index2}
                      >
                        {value2}
                      </button>
                    );
                  })}
                </div>      
              </div>
            );
          })}
          <div className="space"></div>
          <div className="last-content">
            <div className="box"></div>
            <span>All eyes this way please </span>
          </div>
          <div className="seat-legent-wrapper">
            <div className="seat-legent-container">
              <div className="seat-legent-inner">
                <div className="seat-legent">
                  <div className="seat-box box1"></div>
                  <span>Sold</span>
                </div>
                <div className="seat-legent">
                  <div className="seat-box box2"></div>
                  <span>Available</span>
                </div>
                <div className="seat-legent">
                  <div className="seat-box box3"></div>
                  <span>Selected</span>
                </div>
              </div>
              <Button
                variant="contained"
                style={{ textTransform: "none",backgroundColor:'#f84464' }}
                sx={{ mr: 2, ml: 2 }}
                onClick={(e)=>handlingPayNow(e)}
             >
                Pay Rs.380.00
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceat;
