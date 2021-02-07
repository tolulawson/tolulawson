/* eslint-disable react/no-array-index-key */
/* eslint-disable linebreak-style */
import React from 'react';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const SocialShare = [
  { Social: <FaTwitter />, link: 'https://twitter.com/tolulawson' },
  { Social: <FaLinkedinIn />, link: 'https://www.linkedin.com/in/tolulawson/' },
];

const currentYear = new Date().getFullYear();

const FooterTwo = () => (
  <div className='footer-style-2 ptb--30 bg_image bg_image--1' data-black-overlay='6'>
    <div className='wrapper plr--50 plr_sm--20'>
      <div className='row align-items-center justify-content-between'>
        <div className='col-lg-6 col-md-6 col-sm-6 col-12'>
          <div className='inner'>
            <div className='logo text-center text-sm-left mb_sm--20'>
              <ul className='social-share rn-lg-size d-flex liststyle'>
                {SocialShare.map((val, i) => (
                  <li key={i}><a href={`${val.link}`} target='_blank' rel='noreferrer'>{val.Social}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-12 col-sm-12 col-12'>
          <div className='inner text-lg-right text-center mt_md--20 mt_sm--20'>
            <div className='text'>
              <p>
                ©
                {' '}
                {currentYear}
                {' '}
                Tolu Lawson
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default FooterTwo;
