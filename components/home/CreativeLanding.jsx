/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable max-len */
/* eslint-disable no-prototype-builtins */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-restricted-syntax */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
// import Slider from 'react-slick';
// import { FiChevronUp, FiX, FiMenu } from 'react-icons/fi';
// import { slickDot } from '../page-demo/script';
import ServiceList from '../elements/service/ServiceList';
import BlogContent from '../elements/blog/BlogContent';
import BrandTwo from '../elements/BrandTwo';
import FooterTwo from '../component/footer/FooterTwo';
import Contact from '../elements/contact/ContactTwo';
import Header from '../component/header/Header';
import TabTwo from '../elements/tab/TabTwo';

const SlideList = [
  {
    textPosition: 'text-center',
    category: 'Design. Build. Improve',
    title: '',
    description: 'I design and build beautiful and solid websites',
    buttonText: 'Let\'s work together',
    buttonLink: '#contact',
  },
];

// const list = [
//   {
//     image: 'image-1',
//     category: '',
//     title: 'Getting tickets to the big show',
//   },
//   {
//     image: 'image-2',
//     category: '',
//     title: 'Getting tickets to the big show',
//   },
//   {
//     image: 'image-3',
//     category: '',
//     title: 'Getting tickets to the big show',
//   },
//   {
//     image: 'image-4',
//     category: '',
//     title: 'Getting tickets to the big show',
//   },
// ];

class CreativeLanding extends Component {
  constructor(props) {
    super(props);
    this.menuTrigger = this.menuTrigger.bind(this);
    this.CLoseMenuTrigger = this.CLoseMenuTrigger.bind(this);
    this.stickyHeader = this.stickyHeader.bind(this);

    //  this.subMetuTrigger = this.subMetuTrigger.bind(this);
    // window.addEventListener('load', () => {
    //   console.log('All assets are loaded');
    // });
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

  stickyHeader() {}

  render() {
    const PostList = BlogContent.slice(0, 5);

    return (
      <>
        {/* Start Header Area  */}
        <Header />

        {/* End Header Area  */}

        {/* Start Slider Area   */}
        <div className='slider-activation slider-creative-agency' id='home'>
          <div className=''>
            {SlideList.map((value, index) => (
              <div className='slide slide-style-2 slider-paralax d-flex align-items-center justify-content-center' key={index}>
                <div className='container'>
                  <div className='row'>
                    <div className='col-lg-12'>
                      <div className={`inner ${value.textPosition} d-flex flex-column align-items-center`}>
                        {value.category ? <span>{value.category}</span> : ''}
                        {value.title ? <h1 className='title theme-gradient'>{value.title}</h1> : ''}
                        {value.description ? <h1 className='description '>{value.description}</h1> : ''}
                        {value.buttonText ? <div className='slide-btn'><a className='rn-button-style--2 btn-solid' href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Slider Area   */}

        {/* Start Portfolio Area */}
        {/* <div className='portfolio-area pb--140 bg_color--1' id='portfolio'>
          <div className='rn-slick-dot'>
            <div className='container'>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='slick-space-gutter--15 slickdot--20'>
                    <Slider {...slickDot}>
                      {list.map((value, index) => (
                        <div className='portfolio' key={index}>
                          <div className='thumbnail-inner'>
                            <div className={`thumbnail ${value.image}`} />
                            <div className={`bg-blr-image ${value.image}`} />
                          </div>
                          <div className='content'>
                            <div className='inner'>
                              <p>{value.category}</p>
                              <h4><a href='/portfolio-details'>{value.title}</a></h4>
                              <div className='portfolio-button'>
                                <a className='rn-btn' href='/portfolio-details'>View</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  <div className='d-flex justify-content-center'>
                    <a className='rn-btn mt-5 position-absolute translate-middle-x' href='https://themeforest.net/checkout/from_item/25457315?license=regular'>
                    <span>View more projects</span>
                  </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div> */}
        {/* End Portfolio Area */}

        {/* Start About Area */}
        <div className='about-area ptb--100 bg_color--5' id='about'>
          <div className='about-wrapper'>
            <div className='container'>
              <div className='row row--35 align-items-center'>
                <div className='col-lg-5'>
                  <div className='thumbnail'>
                    <img className='w-100' src='/assets/images/about/about-3.jpg' alt='About Images' />
                  </div>
                </div>
                <div className='col-lg-7'>
                  <div className='about-inner inner'>
                    <div className='section-title'>
                      <h1 className='title'>About me</h1>
                      <p className='description'>
                        I'm a software developer working with teams and businesses around the world to define requirements, design, implement, test, and deliver complex web applications and interactive experiences.
                      </p>
                      <p className='description'>
                        Over the past 5 years, I've built web apps and interactive experiences that enable businesses to achieve their objectives and deliver great experiences to end users.
                      </p>
                      <p className='description'>
                        I help you understanding how users comprehend your web presence and I design beautiful interfaces with these insights in mind, bringing them to life by building performant, maintainable and accessible websites.
                      </p>
                    </div>
                    <div className='row mt--30'>
                      <TabTwo tabStyle='tab-style--1' />
                      {/* <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                        <div className='about-us-list'>
                          <h3 className='title'>Who we are</h3>
                          <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                      </div>
                      <div className='col-lg-6 col-md-12 col-sm-12 col-12'>
                        <div className='about-us-list'>
                          <h3 className='title'>Who we are</h3>
                          <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End About Area */}

        {/* Start Service Area  */}
        <div className='service-area creative-service-wrapper ptb--60 bg_color--1' id='service'>
          <div className='container'>
            <div className='row creative-service'>
              <div className='col-lg-12'>
                <h1 className='title'>Elite Service</h1>
                <ServiceList item='6' column='col-lg-4 col-md-6 col-sm-6 col-12 text-left' />
              </div>
            </div>
          </div>
        </div>
        {/* End Service Area  */}

        {/* Start Brand Area */}
        <div className='rn-brand-area bg_color--1 ptb--120'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <h1 className='title text-center mb-5'>Trusted by Clients</h1>
                <BrandTwo />
              </div>
            </div>
          </div>
        </div>
        {/* End Brand Area */}

        {/* Start CounterUp Area */}
        {/* <div className='rn-counterup-area pt--140 p pb--110 bg_color--5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='section-title text-center'>
                  <h3 className='fontWeight500'>Our Fun Facts</h3>
                </div>
              </div>
            </div>
            <CounterOne />
          </div>
        </div> */}
        {/* End CounterUp Area */}

        {/* Start Team Area  */}
        {/* <div className='rn-team-area ptb--120 bg_color--1' id='team'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='section-title service-style--3 text-left mb--25 mb_sm--0'>
                  <h2 className='title'>Skilled Team</h2>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
              </div>
            </div>
            <div className='row'>
              <Team column='col-lg-4 col-md-6 col-sm-6 col-12' />
            </div>
          </div>
        </div> */}
        {/* End Team Area  */}

        {/* Start Testimonial Area */}
        {/* <div className='rn-testimonial-area bg_color--5 ptb--120' id='testimonial'>
          <div className='container'>
            <Testimonial />
          </div>
        </div> */}
        {/* End Testimonial Area */}

        {/* Start Blog Area */}
        {/* <div className='rn-blog-area pt--120 pb--140 bg_color--1' id='blog'>
          <div className='container'>
            <div className='row align-items-end'>
              <div className='col-lg-6'>
                <div className='section-title text-left'>
                  <h2>Latest News</h2>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                </div>
              </div>
            </div>
            <div className='row mt--55 mt_sm--30 rn-slick-dot slick-space-gutter--15 slickdot--20 row--0'>
              <div className='col-lg-12'>
                <Slider {...slickDot}>
                  {PostList.map((value, i) => (
                    <div className='blog blog-style--1' key={i}>
                      <div className='thumbnail'>
                        <a href='/blog-details'>
                          <img src={`/assets/images/blog/blog-${value.images}.jpg`} alt='Blog Images' />
                        </a>
                      </div>
                      <div className='content'>
                        <p className='blogtype'>{value.category}</p>
                        <h4 className='title'><a href='/blog-details'>{value.title}</a></h4>
                        <div className='blog-btn'>
                          <a className='rn-btn text-white' href='/blog-details'>Read More</a>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div> */}
        {/* End Blog Area */}

        {/* Start Contact Us */}
        <div className='rn-contact-us ptb--100 bg_color--5' id='contact'>
          <Contact />
        </div>
        {/* End Contact Us */}

        {/* Start Footer Style  */}
        <FooterTwo />
        {/* End Footer Style  */}
        {/* Start Back To Top */}
        {/* <div className='backto-top'>
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div> */}
        {/* End Back To Top */}

      </>
    );
  }
}

export default CreativeLanding;
