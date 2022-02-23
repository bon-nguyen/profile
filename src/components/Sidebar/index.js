import React from 'react';
import {SidebarContainer,SidebarNav, SidebarList, SidebarLink, SidebarItem } from './Sidebar';

const Sidebar = ({toggle, isOpen}) => {
    return (

            <SidebarContainer toggle={toggle} isOpen={isOpen}>
                <SidebarNav>
                    <SidebarList>
                        <SidebarItem>
                            <SidebarLink>Home</SidebarLink>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLink>About</SidebarLink>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLink>Project</SidebarLink>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLink>Resume</SidebarLink>
                        </SidebarItem>
                        <SidebarItem>
                            <SidebarLink>Contact</SidebarLink>
                        </SidebarItem>
                    </SidebarList>
                </SidebarNav>
            </SidebarContainer>


    );
};

export default Sidebar;