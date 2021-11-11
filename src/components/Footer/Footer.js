import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="bg-primary">
      <div className="container text-white">
        <div className="row">
          <div className="col-sm-4 text-left">
            <h5>About Good Food</h5>
            <ul>
              <li>
                <a href="/#">About</a>
              </li>
              <li>
                <a href="/#">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 text-left">
            <h5>Support</h5>
            <ul>
              <li>
                <a href="/#">FAQ</a>
              </li>
              <li>
                <a href="/#">Help Desk</a>
              </li>
              <li>
                <a href="/#">Forums</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4 text-left">
            <h5>Download App</h5>
            <ul>
              <li>
                <a href="/#">Google Play</a>
              </li>
              <li>
                <a href="/#">App Store</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="social-networks text-center">
        <a href="/#" className="twitter">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="/#" className="facebook">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="/#" className="instagram">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="/#" className="google">
          <i className="fa fa-google"></i>
        </a>
      </div>
      <p className="text-center copyright mx-0 py-3 my-0">
        Copyright &copy; Good Food
      </p>
    </footer>
  );
}

export default Footer;
