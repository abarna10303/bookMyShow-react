import React from 'react'
import SuccessAnim from "../Success.json";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import './SuccessFull.css';
const SuccessFull = () => {
    const navigate=useNavigate();
    const goBack=()=>{
        navigate('/');
        
    }
  return (
    <div className="animation_success">
    <div>
        <Lottie
            animationData={SuccessAnim}
            loop={false}
        />
        <p>Payment Successfull</p>
        <div className="ani-btn">
            <button onClick={goBack}>Go Back</button>
        </div>
    </div>
</div>
  )
}

export default SuccessFull