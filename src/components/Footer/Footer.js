import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Assets/Images/logo.png';

export default class Footer extends Component {
  render() {
    return (
      <div className='footerWrapper'>
        <div className="logoFooter">
          <Link
            to='/'><img src={logo} className="logoFooterimg" alt='logo badge with a blue background, a corona typewriter with the name Patty Schramm in curly script font in a very light grey color' /></Link>
        </div>
        <div className="copyright">
          <p>Patty Schramm © 2019</p>
          <a href="mailto:jeaninehoffman42@gmail.com" target="_blank" rel="noopener noreferrer">
        </div>
        
      </div>
    );
  }
}