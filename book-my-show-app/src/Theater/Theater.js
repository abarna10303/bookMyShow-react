import React from "react";
import "./Theater.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "#49ba8e",
}));

const Theater = () => {
const state=useSelector(({counter})=>counter);
// const dispatch=useDispatch();
  const navigate = useNavigate();
  console.log(state.movieName);
  const seatsHandle = () => {
    navigate("/slectSeats");
  };

  const currentDate = new Date();

  var day = currentDate.getDay();

  var date = currentDate.getDate();
  var month = currentDate.getMonth();
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  return (
    <>
      <Header />
      <div className="theater_header">
        <h1>{state.movieName} - Tamil</h1>
        <div className="thHead">
          <div className="cert">UA</div>
          <div className="genre">Action</div>
          <div className="genre">Drama</div>
          <div className="genre">Thriller</div>
        </div>
      </div>
      <div className="theater_sticky">
        <div className="theater_date">
          <div className="chevron">
            <i className="bi bi-chevron-left"></i>
          </div>
          <div className="date_month bgColor">
            <p>{days[day]}</p>
            <h3>{date}</h3>
            <p>{months[month]}</p>
          </div>
          <div className="date_month">
            <p>{days[day + 1]}</p>
            <h3>{date + 1}</h3>
            <p>{months[month]}</p>
          </div>
          <div className="date_month">
            <p>{days[day + 2]}</p>
            <h3>{date + 2}</h3>
            <p>{months[month]}</p>
          </div>
          <div className="chevron">
            <i className="bi bi-chevron-right"></i>
          </div>
        </div>
        <div className="filter">
          <div>Tamil - 2D</div>
          <div>
            {" "}
            <p>Filter Price Range</p> <i className="las la-angle-down"></i>{" "}
          </div>
          <div>Filter Show Timings</div>
          <div>
            {" "}
            <i className="las la-search"></i>{" "}
          </div>
        </div>
      </div>
      <Grid style={{ background: "#f2f2f2", padding: "20px 0" }}>
        <Grid
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            background: "#fff",
            width: "98%",
            margin: "auto",
          }}
        >
          <Grid style={{ width: "75%" }}></Grid>
          <Grid
            style={{
              width: "25%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "11px",
              padding: "8px",
              color: "#000",
              opacity: 0.7,
            }}
          >
            <div className="avail"></div>
            <div>AVALABLE</div>
            <div className="fastfill"></div>
            <div>FAST FILLING</div>
            <div className="subtitle">LAN</div>
            <div>SUBTITLES LANGUAGE</div>
          </Grid>
        </Grid>
        <Grid
          style={{
            display: "flex",
            background: "#fff",
            width: "98%",
            margin: "auto",
            borderTop: "1px solid #cccccc",
          }}
        >
          <Grid className="cinema_cont">
            <Grid
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "0 20px 20px",
              }}
            >
              <i className="bi bi-heart-fill"></i>
            </Grid>
            <Grid className="cinema">
              <h5>AGS Cinemas: Maduravoyal</h5>
              <Grid container spacing={2}>
                <Grid>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "#49ba8e",
                    }}
                  >
                    <div>
                      <i className="las la-mobile"></i>
                    </div>
                    <p>M-Ticket</p>
                  </div>
                </Grid>
                <Grid style={{ marginLeft: "20px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      color: "orange",
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <i className="las la-hamburger"></i>
                      <i className="bi bi-cup-straw"></i>
                    </div>
                    <p>Food & Beverge</p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              style={{
                fontSize: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#000",
                opacity: 0.8,
                padding: "0 20px 20px",
              }}
            >
              <i className="las la-info-circle"></i>
              INFO
            </Grid>
          </Grid>
          <Grid
            container
            spacing={2}
            className="cinema_timing"
            style={{ alignContent: "center" }}
          >
            <Grid item xs={2}>
              <Item onClick={seatsHandle} style={{ cursor: "pointer" }}>
                <p>10.00 AM</p>
                <p>4K DOLBY 7.1</p>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item onClick={seatsHandle}>
                <p>10.00 AM</p>
                <p>4K DOLBY 7.1</p>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item onClick={seatsHandle}>
                <p>10.00 AM</p>
                <p>4K DOLBY 7.1</p>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item onClick={seatsHandle}>
                <p>10.00 AM</p>
                <p>4K DOLBY 7.1</p>
              </Item>
            </Grid>
            <Grid item xs={2}>
              <Item onClick={seatsHandle}>
                <p>10.00 AM</p>
                <p>4K DOLBY 7.1</p>
              </Item>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        style={{
          background: "#fff",
          padding: "20px",
          display: "flex",
          alignItems: "center",
          color: "#000",
          opacity: 0.8,
        }}
      >
        Home
        <i className="las la-long-arrow-alt-right"></i>
        Movies in Chennai
        <i className="las la-long-arrow-alt-right"></i>
        {state.movie}
      </Grid>
      <Grid
        className="privacy_policy"
        style={{
          background: "#f2f2f2",
          padding: "24px 50px 10px 50px",
          fontSize: "12px",
          color: "#999999",
        }}
      >
        <h4>Privacy Note</h4>
        <p>
          By using www.bookmyshow.com(our website), you are fully accepting the
          Privacy Policy available at{" "}
          <span>https://bookmyshow.com/privacy</span> governing your access to
          Bookmyshow and provision of services by Bookmyshow to you. If you do
          not accept terms mentioned in the <span>Privacy Policy</span> , you
          must not share any of your personal information and immediately exit
          Bookmyshow.
        </p>
      </Grid>
      <Footer />
    </>
  );
};

export default Theater