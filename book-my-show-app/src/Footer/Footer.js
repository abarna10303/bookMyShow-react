import React from "react";
import Button from "@mui/material/Button";
import Cust from '../assets/images/cust.png';
import Ticket from '../assets/images/ticket.png';
import News from '../assets/images/newsletter.png'
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-one">
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://in.bmscdn.com/webin/common/icons/hut.svg"
              alt="alternate"
            />
            <p style={{ marginBottom: 0 }}>
              <strong>List your Show</strong>Get a show,event,activity or a
              great experience Patner with us & get listed on BookMyShow
            </p>
          </div>
          <div>
            <Button
              variant="contained"
              color="error"
              style={{ textTransform: "none" }}
              sx={{ mr: 2, ml: 2, pt: 1, pb: 1 }}
            >
              Contact today!
            </Button>
          </div>
        </div>
        <div className="footer-two">
          <div className="foot-logo">
          <img
              src={Cust}
              alt="alternate"
              className="image"
            />
            <span>24/7,CUSTOMER CARE</span>
          </div>
          <div className="foot-logo">
          <img
              src={Ticket}
              alt="alternate"
              className="image"
            />
            <span>RESEND BOOKING CONFIRMATION</span>
          </div>
          <div className="foot-logo">
          <img
              src={News}
              alt="alternate"
              className="image"
            />
            <span>SUBSCRIBE TO THE NEWSLETTER</span>
          </div>
        </div>
        <div className="footer-three">
          <div className="footer-content">
            
            <div className="border1">
            </div>
            <img
              src={"https://in.bmscdn.com/webin/common/icons/logo.svg"}
              alt="alternat"
              className="book-icon"
            />
            <div className="border1">
            </div>
          </div>
          <div className="social-icon">
            <div className="icon">
              <i className="bi bi-facebook"></i>
            </div>
            <div className="icon">
              <i className="bi bi-twitter"></i>
            </div>

            <div className="icon">
              <i className="bi bi-instagram"></i>
            </div>

            <div className="icon">
              <i className="bi bi-youtube"></i>
            </div>

            <div className="icon">
              <i className="bi bi-pinterest"></i>
            </div>

            <div className="icon">
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
          <div className="copy-right">
            Copyright 2023 © Bigtree Entertainment Pvt. Ltd. All Rights
            Reserved.
            <br></br>The content and images used on this site are copyright
            protected and copyrights vests with the respective owners. The usage
            of the content and images on this website is intended to promote the
            works and no endorsement of the artist shall be implied.
            Unauthorized use is prohibited and punishable by law.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
