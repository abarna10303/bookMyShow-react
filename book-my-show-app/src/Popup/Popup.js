import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import cycle from '../assets/images/cycle.png';
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setTicket } from "../features/counter/counterSlice";
import "./Popup.css";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
  textAlign: "center",
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Popup() {
  const [open, setOpen] = React.useState(true);
  const [buttons, setButtons] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  const [ticketCount,setTicketCount]=React.useState(0);
  const refe = useRef(null);
  const navigate = useNavigate();
  const dispatch=useDispatch();
  const handlingSeatSelection=()=>{
    dispatch(setTicket(ticketCount));
    navigate('/seatsAvailability');
  }
  const handleClose = () => {
    setOpen(false);
    navigate('/gotoTheater');
  };
  const changeBackground = (e, refe) => {
    if (!refe.current) {
      return;
    }
    if (!refe.current.classList.contains("changebg")) {
      refe.current.classList.add("changebg");
      setTicketCount(refe.current.innerHTML);
    } else {
      refe.current.classList.remove("changebg");
      refe.current = null;
    }
   
  };
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
         How Many Seats? 
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <img src={cycle} alt='poop' />
          <ul className="booking-container">
            {buttons.map((value, index) => {
              return (
                <li key={index}>
                  <button
                    onClick={(e) => {
                      changeBackground(e, refe);
                      e.stopPropagation();
                      refe.current = e.target;
                      changeBackground(e, refe);
                    }}
                    className="booking-btn"                   
                  >
                    {value}
                  </button>
                </li>
              );
            })}
          </ul>
        </DialogContent>
        <DialogActions style={{justifyContent:'center'}}>
            <div className="selectAmont">
              <span style={{color:'#666'}}>DIAMOUNT</span>
              <span><b>Rs.190.00</b></span>
              <span style={{color:'#4abd5d'}}>Available</span>
            </div>
            <div className="selectAmont">
              <span style={{color:'#666'}}>PEARL</span>
              <span><b>Rs.60.00</b></span>
              <span style={{color:'#999'}}>Sould Out</span>
            </div>
        </DialogActions>
        <DialogActions>
          <Button
            variant="contained"
            style={{ textTransform: "none" }}
            onClick={(evnt)=>handlingSeatSelection(evnt)}
            id='selectSeat'
          >
            Select Seates
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
