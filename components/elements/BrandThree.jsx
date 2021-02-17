/* eslint-disable linebreak-style */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class BrandTwo extends Component {
  render() {
    return (
      <>
        <ul className='brand-style-2 tech'>
          <li>
            <img src='tech/react.svg' alt='ReactJS logo' />
          </li>
          <li>
            <img src='tech/redux.svg' alt='Redux logo' />
          </li>
          <li>
            <img src='tech/node.svg' alt='NodeJS logo' />
          </li>
          <li>
            <img src='tech/mongodb.svg' alt='MongoDB logo' />
          </li>
          <li>
            <img src='tech/nextjs.svg' alt='NextJS logo' />
          </li>
          <li>
            <img src='tech/firebase.svg' alt='Firebase logo' />
          </li>
        </ul>
      </>
    );
  }
}
export default BrandTwo;
