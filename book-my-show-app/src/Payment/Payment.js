import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import "./Payment.css";
import theater from '../assets/images/theater.png';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const Payment = () => {
  const state = useSelector(({ counter }) => counter);
  var base = state.tickets * 30;
  var gst = state.tickets * 30 * (18 / 100);
  const [selectOption,setSelectionOption]=useState(false);
  const navigate=useNavigate();
  const diomand=190*state.tickets;
  const [removeAmount,setRemoveAmount]=useState(state.tickets*1);
  const remove=(e)=>{
    setRemoveAmount(0);
    e.target.classList.add("removed");
  }
  const amountPayable=(base+gst+removeAmount+diomand).toFixed(2);
  const handlingPayNow=()=>{
    for(var j=0;j<state.selectSeats.length;j++)
    {
      localStorage.setItem(`${state.movieName+state.theater+state.showTime}seats${state.selectSeats[j]}`,
      `${state.movieName+state.theater+state.showTime+state.selectSeats[j]}`);
    } 
    navigate('/gotoSuccess');
  }
  return (
    <section className="payment-section">
      <div className="payment-container">
        <div className="payment-row">
          <h2>BOOKING SUMMARY</h2>
          <ul className="payment-details">
            <li>
              <div>
                DIAMOND - {state.selectSeats.toString()} ( {state.tickets} Tickets )<br></br>
              </div>
              <div>Rs. {diomand.toFixed(2)}</div>
            </li>
            <li>
              <div style={{width: "100%"}}>
                <Accordion style={{ boxShadow: "none" }}>
              <AccordionSummary
                style={{ padding: 0 }}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <ExpandMoreIcon
                  style={{
                    border: "1px solid #ccc",
                    borderRadius: "50%",
                    marginRight: "8px",
                    width: "auto",
                  }}
                />
                <Typography className="payBill" style={{ width: "95%" }}>
                  <div>Convenience fees</div>
                  <div>Rs.{base+gst}</div>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <Grid className="conv">
                    <div>Base Amount</div>
                    <div>Rs.{base.toFixed(2)}</div>
                  </Grid>
                  <Grid className="conv">
                    <div>Integrated GST (IGST) @ 18%</div>
                    <div>Rs.{gst.toFixed(2)}</div>
                  </Grid>
                </Typography>
              </AccordionDetails>
            </Accordion>
              </div>
            </li>
             <li className="payment-total">
              <div>Sub total</div>
              <div>Rs.{(base+gst+diomand).toFixed(2)}</div>
            </li>
            <li className="payment-contribution">
              <div>
                Contribution to BookASmile<br></br>
                <span className="size">(₹1 per ticket has been added)</span>
                <br></br>
                <span className="size view">View T&C</span>
              </div>
              <div>
                Rs.{removeAmount.toFixed(2)}<br></br>
                <span className="color" onClick={(e)=>remove(e)}>Remove</span>
              </div>
              </li>
            <li>
              <div style={{ color: "gray", fontSize: "13px" }}>
                Your current state is<span className="color"> Tamil Nadu</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="payment-amount">
            <div>Amount Payable</div>
            <div>Rs. {amountPayable}</div>
          </div>
        <div className="ticket-type">
            <h1>SELECT TICKET TYPE</h1>
            <div className="ticket-row">
                <div className="ticket-box">
                  <div className="ticket-input1">
                    <input type='radio' name="ticket" defaultChecked onChange={(e)=>setSelectionOption(false)}/>
                  </div>
                  <div className="ticket-input">
                    <div style={{position:'relative'}}>
                    <i className="las la-mobile" style={{fontSize:'35px'}}></i>
                    <i className="bi bi-ticket-fill money-icon" style={{color:'yellow',fontSize:'20px'}}></i>
                    <i className="bi bi-ticket money-icon" style={{fontSize:'20px'}}></i>
                    </div>
                    <div style={{marginLeft:'15px',display:'flex',alignItems:'center'}}>M-Ticket</div>
                  </div>
                </div>
                <div className="ticket-box">
                <div className="ticket-input1">
                    <input type='radio' name="ticket" style={{color:'red'}} onChange={(e)=>setSelectionOption(true)}/>
                  </div>
                  <div className="ticket-input">
                    <div style={{display:'flex',alignItems:'center'}}>
                    <img src={theater} alt='lkjfkjf' />
                    </div>
                    <div style={{marginLeft:'15px'}}>
                      Box Office Pickup
                  </div>
                  </div>
                </div>
            </div>
            {selectOption?<p className="size" style={{textAlign:'center', marginTop: "12px"}}>Select this option to pick your tickets from Box Office.</p>
    :<p className="size" style={{textAlign:'center', marginTop: "12px"}}>Show the m-tcket QR Code on your mobile to enter the cinema,</p> }
                    </div>
        <div>
            <p>By proceeding, I express my consent to complete this transaction.</p>
            <Button
            variant="contained"
            style={{ textTransform: "none",justifyContent:'space-between' }}
            className='total-btn'
            sx={{p:2}}
            onClick={(e)=>handlingPayNow(e)}
          >
            TOTAL: Rs. {amountPayable}
            <span className="proceed">Proceed</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Payment;
