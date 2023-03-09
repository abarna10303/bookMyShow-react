import React from 'react'
import Button from '@mui/material/Button';
import './Footer.css';
const Footer = () => {
  return (
    <footer className='footer-section'>
        <div className='footer-container'>
            <div className='footer-one'>
                <div style={{display:'flex',alignItems:'center'}}>
                    <img src='https://in.bmscdn.com/webin/common/icons/hut.svg' alt='alternate'/>
                    <p style={{marginBottom:0}}><strong>List your Show</strong>Get a show,event,activity or a great experience Patner with us & get listed on BookMyShow</p>
                 </div>
                <div>
                    <Button variant="contained" color="error" style={{textTransform:'none'}} sx={{mr:2,ml:2,pt:1,pb:1}}>Contact today!</Button>
                </div>
            </div>
            <div>
                <div>
                    <img src='' alt='kadshd'/>
                    <span>24/7,CUSTOMER CARE</span>
                </div>
                <div>
                    <img src='' alt='kadshd'/>
                    <span>RESEND BOOKING CONFIRMATION</span>
                </div>
                <div>
                    <img src='' alt='kadshd'/>
                    <span></span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer