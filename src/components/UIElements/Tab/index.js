import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { TabOneContent, TabOneWrap } from './TabOne';

const TabOne = () => {
    let 
    tab1 = "Main skills",
    tab2 = "Experience",
    tab3 = "Education & Certification";

    return (
        <TabOneWrap>
            <Tabs>
                <TabList >
                    <Tab>{tab1}</Tab>
                    <Tab>{tab2}</Tab>
                    <Tab>{tab3}</Tab>
                </TabList>
                <TabPanel>
                    <TabOneContent>
                        <ul>
                            <li>
                                <p>User experience design <span> - UI/UX</span></p>
                                Delight the user and make it work.
                            </li>
                            <li>
                                <p>Web and user interface design<span> - Development</span></p>
                                Websites, web experiences, ...
                            </li>
                        </ul>
                    </TabOneContent>
                </TabPanel>

                <TabPanel>
                    <TabOneContent>
                        <ul>
                            <li>
                                <p>Wordpress Development <span> - Hazo Media</span></p>
                                Mar - Oct 2021
                            </li>
                        </ul>
                    </TabOneContent>
                </TabPanel>

                <TabPanel>
                    <TabOneContent>
                        <ul>
                            <li>
                                <p>Thu Duc Technolofy College <span> - Information Technolofy</span></p>
                                2018 - 2021
                            </li>
                        </ul>
                    </TabOneContent>
                </TabPanel>
                
                </Tabs>
        </TabOneWrap>
    );
};

export default TabOne;