import React from "react";
import Link from "@mui/material/Link";
import movie from "../MOCK_DATA.json";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Banner.css";
import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { setMovieName } from "../features/counter/counterSlice";
import 'react-multi-carousel/lib/styles.css';
const Banner = () => {
  const navigate=useNavigate();
  var movieData=[];
  for(var i=0; i<10;i++)
  {
    movieData[i]=movie[i]
  }
  const dispatch=useDispatch();
  const navigateTheater=(value)=>{
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
        <div className="banner-row">
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
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default Banner;
