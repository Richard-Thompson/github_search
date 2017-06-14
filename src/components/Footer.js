import React, {Component} from 'react';
import '../css/Footer.css';
class Footer extends Component {
  render () {
    return (
      <div className="footer-container">
        <div className="copyright">
          2017 Github, Inc.
        </div>
        <div className="item">
          Terms
        </div>
         <div className="item">
          Privacy
        </div>
         <div className="item">
          Security
        </div>
         <div className="item">
          Status
        </div>
         <div className="item">
          Help
        </div>
        <div className="icon-container">
          <i className="fa fa-github fa-3x icon"></i>
        </div>
         <div className="item">
          Contact Github
        </div>
         <div className="item">
          API
        </div>
         <div className="item">
          Training 
        </div>
         <div className="item">
          Shop
        </div>
         <div className="item">
          Blog
        </div>
         <div className="item">
          About
        </div>
      </div>
    );
  }
}

export default Footer;