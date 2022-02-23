import styled from "styled-components";
import { Link  } from 'react-router-dom';
import { device } from "../../styles/breakpoints";



export const HeaderContainer = styled.header`
    position: absolute;
    top: 0;
    z-index: 999;
    width: 100%;
    background: transparent;
    transition: .3s;

    &.headerHighlight{
        position: fixed;
        box-shadow: 0 0 10px rgb(0 0 0 / 10%);
        background-color: var(--bg-secondary);
    }

    @media ${device.laptop}{

    }

`

export const HeaderWrap = styled.div`
    min-height: 56px;
    display: flex;
    align-items: center;
    padding: 0px 5%;
    justify-content: space-between;

    @media ${device.laptop}{
        max-width: 1200px;
        margin: auto;

    }   
`

export const HeaderHamburger = styled.button`
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--txt-primary);
    border-radius: 10px;
    color: var(--txt-primary);
    margin-left: .5em;
`

export const HeaderNav = styled.nav`
    display: none;

    @media ${device.laptop}{
        display: flex;
        margin-left: auto;
    }
`

export const HeaderLogo = styled(Link)`
    font-size: 1.5em;
    font-weight: 700;
    color: var(--txt);
    
    span:first-child{
        color: var(--logo-primary);
    }
`


export const HeaderList = styled.ul`
    display: flex;


`

export const HeaderItem = styled.li`
    position: relative;
    overflow: hidden;
    margin: 0 1rem;
    display: flex;
    align-items: center;
    color: var(--txt);
    justify-content: center;

    a{
        text-decoration: none;
        cursor: pointer;
        font-size: 1rem;
        display: flex;
        align-items: center;
        color: var(--txt-title);
        position: relative;
        height: 56px;
        font-weight: 700;
        transition: .3s ease-in;

        &:before{
            content: "";
            width: 100%;
            height: 2px;
            background: var(--txt-primary);
            bottom: 0;
            left: 0;
            position: absolute;
            transform: translateX(-50px);
            opacity: 0;
            transition: .3s ease-in;
        }

        &:hover{
            color: var(--txt-primary);
            &:before{
                opacity: 1;
                transform: translateX(0px);
            }
        }

        &.active:before{
            opacity: 1;
            transform: translateX(0px);
        }
    }

`



export const HeaderMobile = styled.div`
    @media ${device.laptop}{
        display: none;
    }
`

export const HeaderWelcome = styled.span`

`