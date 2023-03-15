import React from "react";
import Link from "@mui/material/Link";
import movie from "../MOCK_DATA.json";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Banner.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { setMovieName } from "../features/counter/counterSlice";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const Banner = () => {
  const navigate=useNavigate();
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  var movieData=[];
  for(var i=0; i<10;i++)
  {
    movieData[i]=movie[i]
  }
  const dispatch=useDispatch();
  const state=useSelector(({counter})=>counter);
  const navigateTheater=(value,index)=>{
    dispatch(setMovieName(value.target.title));
    navigate('/gotoTheater');
    console.log(value.target.title);
  }
  return (
    <>
    <Header />
    <section className="banner-section">
      <div className="banner-container">
        <div className="banner-title">
          <h4>Recommended Movies</h4>
          <div>
            <Link href="#" color="error" className="see-all-btn">
              See All
            </Link>
            <ArrowForwardIosIcon color="error" style={{ fontSize: "12px" }} />
          </div>
        </div>
        <Carousel responsive={responsive}>
          {movieData.map((value, index) => {
            return (
              <div className="card-section" key={index} onClick={(value,index)=>navigateTheater(value,index)}>
                <div className="card-img" title={value["movie_title"]}>
                  <img src={value.image} alt="hshkj" title={value["movie_title"]}/>
                </div>
                <h5 title={value["movie_title"]}>{value.movie_title}</h5>
                <span title={value["movie_title"]}>{value.genre}</span>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Banner;
