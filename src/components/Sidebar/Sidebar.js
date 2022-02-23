import styled from "styled-components";
import {Link as LinkR} from 'react-router-dom';


export const SidebarContainer = styled.aside`
    position: fixed;
    top: 56px;
    left: 0px;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
    box-shadow: inset 0px -1px 1px #e7ebf0;
    transition:  400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    max-height: ${({isOpen}) => (isOpen ? '100%' : '0%')};
    
`


export const SidebarNav = styled.nav`
    padding: 20px;
`

export const SidebarList = styled.ul`

`

export const SidebarItem = styled.li`

`

export const SidebarLink = styled(LinkR)`
    padding: 8px;
    display: flex;
    align-items: center;
    font-weight: 700;
    color: ${({theme}) => theme.primary};
`