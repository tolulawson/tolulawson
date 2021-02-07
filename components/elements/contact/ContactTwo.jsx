/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable linebreak-style */
/* eslint-disable no-empty-character-class */
/* eslint-disable max-len */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { openPopupWidget } from 'react-calendly';

function ContactTwo() {
  const [loading, setLoading] = useState(false);
  const [sendStatus, setSendStatus] = useState(null);
  const sendStatusMessages = {
    sent: 'Message on the way. I\'ll get back to you soon.',
    failed: 'Oops! Something went wrong. Please try again.',
  };
  const {
    register, handleSubmit, errors, reset,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: true,
  });

  const onSubmit = (data) => {
    setSendStatus(null);
    setLoading(true);
    fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          setLoading(false);
          setSendStatus('sent');
          reset();
        }
      })
      .catch(() => {
        // console.error('Error:', error);
        setLoading(false);
        setSendStatus('failed');
      });
  };

  const openCalendly = () => {
    const url = 'https://calendly.com/tolulawson/discovery?hide_event_type_details=1';
    const pageSettings = {
      backgroundColor: 'ffffff',
      hideEventTypeDetails: true,
      hideLandingPageDetails: true,
      primaryColor: '00398F',
      textColor: '4d5055',
    };

    openPopupWidget({
      url, pageSettings,
    });
  };

  return (
    <div className='contact-form--1'>
      <div className='container'>
        <div className='row row--35 d-flex justify-content-between'>
          <div className='col-lg-6 order-2 order-lg-1 '>
            <div className='section-title text-left mb--50'>
              <h2 className='title mb-3'>Leave a message</h2>
              <p className='description'>
                Or email me at
                {' '}
                <a href='mailto:tolu@tolulawson.com'>tolu@tolulawson.com</a>
              </p>
            </div>
            <div className='form-wrapper'>
              <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='item01'>
                  {errors.name && <span className='text-danger fw-light fs-6'>What do I call you?</span>}
                  <input
                    type='text'
                    name='name'
                    id='item01'
                    ref={register({ required: true })}
                    placeholder='Your Name *'
                    className={errors.name ? 'border-danger' : ''}
                  />
                </label>

                <label htmlFor='item02'>
                  {errors.email && <span className='text-danger fw-light fs-6'>I need a valid email to reach you</span>}
                  <input
                    type='text'
                    name='email'
                    id='item02'
                    ref={register({ required: true, pattern: /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+/ })}
                    placeholder='Your email *'
                    className={errors.email ? 'border-danger' : ''}
                  />
                </label>

                <label htmlFor='item03'>
                  <input
                    type='text'
                    name='subject'
                    id='item03'
                    ref={register()}
                    placeholder='Write a Subject'
                  />
                </label>
                <label htmlFor='item04'>
                  {errors.message && <span className='text-danger fw-light fs-6'>Drop a line</span>}
                  <textarea
                    type='text'
                    id='item04'
                    name='message'
                    ref={register({ required: true })}
                    placeholder='Your Message'
                    className={errors.message ? 'border-danger' : ''}
                  />
                </label>
                <button className='rn-button-style--2 btn-solid' type='submit' value='submit' name='submit' id='mc-embedded-subscribe' disabled={loading}>Send</button>
                <img className='ml-4' alt='loading animation' src='https://s2.svgbox.net/loaders.svg?ic=spinner&color=969393' width='32' height='32' hidden={!loading} />
                <span className={`ml-4 fw-light fs-6 ${sendStatus === 'failed' ? 'text-danger' : ''}`} hidden={!sendStatus}>{sendStatus ? sendStatusMessages[sendStatus] : ''}</span>
              </form>
            </div>
          </div>
          <div className='col-lg-5 order-2 order-lg-1 p-5 mt-5'>
            <div className='section-title text-left mb--50' style={{ backgroundColor: '#00398F', borderRadius: '15px', padding: 'clamp(1.5rem, 5vw, 3rem)' }}>
              <h2 className='title mb-3 text-light'>Schedule a call</h2>
              <p className='description text-light'>
                An initial call helps me understand your business, the issues you face, and the goals you hope to achieve.
              </p>
              <button type='button' className='rn-button-style--2 btn-dark-bg mt-3' onClick={openCalendly}>Schedule</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactTwo;
