import styled from "styled-components";
import { device } from "../../../styles/breakpoints";

export const MainNavigationContainer = styled.div`
    min-height: 56px;
    display: flex;
    align-items: center;
    padding: 0px 5%;
    justify-content: space-between;

    @media ${device.laptop}{
        max-width: 1200px;
        margin: auto;
    }

    @media ${device.laptopL}{
        padding: 0px 0px;
    }
`
export const MainNavigationNav = styled.nav`
    display: none;
    visibility: hidden;
    opacity: 0;

    @media ${device.laptop}{
        display: flex;
        margin-left: auto;
        visibility: visible;
        opacity: 1;
    }
    
`

export const MainNavigationClose = styled.button`
    position: fixed;
    top: 12px;
    right: 30px;
    display: block;
    z-index: 1000;
    background: transparent;
    color: var(--txt);
    border: none;
    cursor: pointer;
`