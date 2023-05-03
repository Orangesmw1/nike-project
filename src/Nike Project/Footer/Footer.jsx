import React from "react";
import "./Footer.css";
import TagFooter from "./TagFooter/TagFooter";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="box-top">
            <div className="content-left">
              <ul className="find-store">
                <li>FIND A STORE</li>
                <li>BECOME A MEMBER</li>
                <li>SIGN UP FOR EMAIL</li>
                <li>Send Us Feedback</li>
              </ul>

              <ul className="get-help">
                <li className="title-get-help">GET HELP</li>
                <li>Order Status</li>
                <li>Delivery</li>
                <li>Returns</li>
                <li>Payment Options</li>
                <li>Contact Us</li>
              </ul>

              <ul className="about-nike">
                <li className="title-about-nike">ABOUT NIKE</li>
                <li>News</li>
                <li>Careers</li>
                <li>Investors</li>
                <li>Sustainability</li>
              </ul>
            </div>

            <div className="content-right">
              <ul className="socical">
                <li>
                  <i className="fab fa-facebook-f" />
                </li>
                <li>
                  <i className="fab fa-instagram" />
                </li>
                <li>
                  <i className="fab fa-youtube" />
                </li>
                <li>
                  <i className="fab fa-twitter" />
                </li>
              </ul>
            </div>
          </div>

          <div className="box-bottom">
            <div className="location">
              <div className="box-localtion">
                <i className="fa fa-map-marker-alt"></i>
                Vietnam
              </div>
              <p>© 2023 Nike, Inc. All Rights Reserved</p>
            </div>

            <div className="privacy">
              <ul>
                <li>Guides</li>
                <li>Terms of Sale</li>
                <li>Terms of Use</li>
                <li>Nike Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
