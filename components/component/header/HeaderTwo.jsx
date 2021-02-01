/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable max-len */
/* eslint-disable func-names */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import Link from 'next/link';
import {
  FaTwitter,
  FaLinkedinIn,
} from 'react-icons/fa';
import { FiX, FiMenu } from 'react-icons/fi';

const SocialShare = [
  { Social: <FaTwitter />, link: 'https://twitter.com/' },
  { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/' },
];

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    // eslint-disable-next-line no-tabs
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
  }

  menuTrigger() {
    if (typeof document !== 'undefined') {
      document.querySelector('.header-wrapper').classList.toggle('menu-open');
    }
  }

  CLoseMenuTrigger() {
    if (typeof document !== 'undefined') {
      document.querySelector('.header-wrapper').classList.remove('menu-open');
    }
  }

  render() {
    if (typeof document !== 'undefined') {
      const elements = document.querySelectorAll('.has-droupdown > a');
      for (const i in elements) {
        if (elements.hasOwnProperty(i)) {
          elements[i].onclick = function () {
            this.parentElement.querySelector('.submenu').classList.toggle('active');
            this.classList.toggle('open');
          };
        }
      }
    }
    const { logo, color = 'default-color' } = this.props;
    let logoUrl;
    if (logo === 'light') {
      logoUrl = <img src='/assets/images/logo/logo-light.png' alt='Digital Agency' />;
    } else if (logo === 'dark') {
      logoUrl = <img src='/assets/images/logo/logo-dark.png' alt='Digital Agency' />;
    } else if (logo === 'symbol-dark') {
      logoUrl = <img src='/assets/images/logo/logo-symbol-dark.png' alt='Digital Agency' />;
    } else if (logo === 'symbol-light') {
      logoUrl = <img src='/assets/images/logo/logo-symbol-light.png' alt='Digital Agency' />;
    } else {
      logoUrl = <img src='/assets/images/logo/logo.png' alt='Digital Agency' />;
    }
    return (
      <header className={`header-area header-style-two header--transparent ${color}`}>
        <div className='header-wrapper'>
          <div className='header-left d-flex align-items-center'>
            <div className='logo'>
              <Link href='/'>
                {logoUrl}
              </Link>
            </div>
            <nav className='mainmenunav d-lg-block ml--50'>
              <ul className='mainmenu'>
                <li><Link href='/about'>About</Link></li>
                <li><Link href='/contact'>Projects</Link></li>
                <li><Link href='/contact'>Clients</Link></li>
              </ul>
            </nav>
          </div>
          <div className='header-right'>
            <div className='social-share-inner'>
              <ul className='social-share social-style--2 color-black d-flex justify-content-start liststyle'>
                {SocialShare.map((val, i) => (
                  <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                ))}
              </ul>
            </div>
            <div className='header-btn'>
              <a className='rn-btn' href='https://themeforest.net/checkout/from_item/25457315?license=regular'>
                <span>Hire Me Today</span>
              </a>
            </div>
            {/* Start Humberger Menu  */}
            <div className='humberger-menu d-block d-lg-none pl--20'>
              <span onClick={this.menuTrigger} className='menutrigger text-white'><FiMenu /></span>
            </div>
            {/* End Humberger Menu  */}
            <div className='close-menu d-block d-lg-none'>
              <span onClick={this.CLoseMenuTrigger} className='closeTrigger'><FiX /></span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}
export default Header;
