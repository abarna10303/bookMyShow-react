import React from "react";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
// import { useRef } from "react";
import "./ceat.css";
import { useState } from "react";

let count=0;
const Ceat = () => {
  let array=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21];
  let row = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J","K","L","M","N","O","P"];
  const state = useSelector(({ counter }) => counter);
  // Seat Disabled
   
   let [seatSouldOut,setSeatSouldOut]=useState([]);
  const changeBackground = (e) => {
    let seats=seatSouldOut;
    let active=document.getElementById(e);
    if(count<state.tickets && !active.classList.contains("changebg1"))
    {
        active.classList.add("changebg1");
        count+=1;
        seats.push(`${e}`);
        setSeatSouldOut(seats);
    }
    else if(active.classList.contains("changebg1"))
      {
        active.classList.remove("changebg1");
        count--;
        seats.splice(e,1);
      } 
  };
  const handlingPayNow=(e)=>{ 
    for(var j=0;j<seatSouldOut.length;j++)
    {
      localStorage.setItem(`${state.movieName+state.theater+state.showTime}seats${seatSouldOut[j]}`,
      `${state.movieName+state.theater+state.showTime+seatSouldOut[j]}`);
    } 
  }
  return (
    <section>
      <div className="ceat-container">
        <div className="ceat-header" style={{ backgroundColor: "#1f2533" }}>
          <div>
            <span>{state.movieName}</span>
            <p style={{ marginBottom: "0px" }}>
              {state.theater} | Tomorrow, 11 Mar,
              {state.showTime}
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
                      ((localStorage.getItem(`${state.movieName+state.theater+state.showTime}seats${value1+value2}`))===(state.movieName+state.theater+state.showTime+value1+value2)?
                      <button
                        className="ceat-no seat-left-gap diabled"
                        id={value1+value2}
                        onClick={(e,index2) => changeBackground(e.target.id)}
                        key={index2}
                        disabled>
                        {value2}
                      </button>:<button
                      className="ceat-no seat-left-gap"
                      id={value1+value2}
                      onClick={(e,index2) => changeBackground(e.target.id)}
                      key={index2}
                      >
                      {value2}
                    </button>)
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
                Pay Rs.{190.00*state.tickets}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceat;
