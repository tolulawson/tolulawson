/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';

class TabsTwo extends Component {
  render() {
    const tab1 = 'Expertise';
    const tab2 = 'Technologies';
    const { tabStyle } = this.props;
    return (
      <div>
        {/* Start Tabs Area */}
        <div className='tabs-area'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <Tabs>
                  <TabList className={`${tabStyle}`}>
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                  </TabList>

                  <TabPanel>
                    <div className='single-tab-content'>
                      <ul>
                        <li>
                          <a href='/service'>
                            User experience design
                          </a>
                          Delight the user and make it work.
                        </li>
                        <li>
                          <a href='/service'>
                            Strategy
                            <span> - Development</span>
                          </a>
                          Websites, web experiences, ...
                        </li>
                        <li>
                          <a href='/service'>
                            Interaction design
                            <span> - Animation</span>
                          </a>
                          I like to move it move it.
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <div className='single-tab-content'>
                      <ul>
                        <li>
                          <a href='/service'>
                            Awwwards.com
                            <span>- Winner</span>
                          </a>
                          {' '}
                          2019 - 2020
                        </li>
                        <li>
                          <a href='/service'>
                            CSS Design Awards
                            <span>- Winner</span>
                          </a>
                          {' '}
                          2017 - 2018
                        </li>
                        <li>
                          <a href='/service'>
                            Design nominees
                            <span>- site of the day</span>
                          </a>
                          {' '}
                          2013- 2014
                        </li>
                      </ul>
                    </div>
                  </TabPanel>

                </Tabs>
              </div>
            </div>
          </div>
        </div>
        {/* End Tabs Area */}
      </div>
    );
  }
}

export default TabsTwo;
