import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="box-tag">
        <ul className="tag-item">
          <li className="title-tag">
            <h4>Icons</h4>
          </li>
          <li>Air Force 1</li>
          <li>Huarache</li>
          <li>Air Max 90</li>
          <li>Air Max 50</li>
        </ul>

        <ul className="tag-item">
          <li className="title-tag">
            <h4>Shoes</h4>
          </li>
          <li>All Shoes</li>
          <li>Custom Shoes</li>
          <li>Jordan Shoes</li>
          <li>Running Shoes</li>
        </ul>

        <ul className="tag-item">
          <li className="title-tag">
            <h4>Clothings</h4>
          </li>
          <li>All Clothing</li>
          <li>Modest Wear</li>
          <li>Hoodies & Pullovers</li>
          <li>Shirt & Top</li>
        </ul>

        <ul className="tag-item">
          <li className="title-tag">
            <h4>Kid's</h4>
          </li>
          <li>All Shoes</li>
          <li>Kid's Shoes</li>
          <li>Kid's Jordan Shoes</li>
          <li>Kid's Basketball Shoes</li>
        </ul>
      </div>

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
