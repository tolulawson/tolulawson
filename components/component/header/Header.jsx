/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
/* eslint-disable no-prototype-builtins */
/* eslint-disable block-scoped-var */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable class-methods-use-this */
/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import React, { Component } from 'react';
import Link from 'next/link';
import { FiX, FiMenu } from 'react-icons/fi';

class Header extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    // window.addEventListener('load', function() {
    //     console.log('All assets are loaded')
    // })
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
      var elements = document.querySelectorAll('.has-droupdown > a');
    }
    for (const i in elements) {
      if (elements.hasOwnProperty(i)) {
        elements[i].onclick = function () {
          this.parentElement.querySelector('.submenu').classList.toggle('active');
          this.classList.toggle('open');
        };
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
      <header className={`header-area formobile-menu header--transparent ${color}`}>
        <div className='header-wrapper' id='header-wrapper'>
          <div className='header-left'>
            <div className='logo'>
              <Link href='/'>
                <a href='/'>
                  {logoUrl}
                </a>
              </Link>
            </div>
          </div>
          <div className='header-right'>
            <nav className='mainmenunav d-lg-block'>
              <ul className='mainmenu'>
                <li><Link href='#about'>About</Link></li>
                <li><Link href='#service'>Services</Link></li>
                <li><Link href='/projects'>Projects</Link></li>
                <li><Link href='/blog'>Blog</Link></li>
                <li><Link href='/contact'>Contact</Link></li>
              </ul>
            </nav>
            <div className='header-btn'>
              <a className='rn-btn' href='https://themeforest.net/checkout/from_item/25457315?license=regular'>
                <span>Hire me</span>
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
