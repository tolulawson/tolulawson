/* eslint-disable max-len */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';
import {
  Tab, Tabs, TabList, TabPanel,
} from 'react-tabs';

class TabsTwo extends Component {
  render() {
    // const tab1 = 'Skills';
    const tab2 = 'Technologies I Use';
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
                    {/* <Tab>{tab1}</Tab> */}
                    <Tab>{tab2}</Tab>
                  </TabList>

                  {/* <TabPanel>
                    <div className='single-tab-content expertise'>
                      <ul>
                        <li className=''>
                          My skills span from understanding how users comprehend your web presence to designing beautiful interfaces with these insights in mind and bringing them to life by building performant, maintainable and accessible websites.
                        </li>
                      </ul>
                    </div>
                  </TabPanel> */}

                  <TabPanel>
                    <div className='single-tab-content tech'>
                      <img src='tech/react.svg' alt='ReactJS logo' />
                      <img src='tech/redux.svg' alt='Redux logo' />
                      <img src='tech/node.svg' alt='NodeJS logo' />
                      <img src='tech/mongodb.svg' alt='MongoDB logo' />
                      <img src='tech/nextjs.svg' alt='NextJS logo' />
                      <img src='tech/firebase.svg' alt='Firebase logo' />
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
