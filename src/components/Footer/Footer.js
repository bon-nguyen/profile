import styled from "styled-components";
import { Link  } from 'react-router-dom';
import { device } from "../../styles/breakpoints";

export const FooterContainer = styled.footer`
    padding: 30px 5%;
    background-color: var(--bg);

    @media ${device.laptop}{

    }

`

export const FooterCoppy = styled.div`
    color: var(--txt);
    font-size: 16px;
    opacity: .75;
    width: 100%;
    text-align: center;

    @media ${device.tablet}{
        font-size : 14px;
        order: 2;
    }

    @media ${device.laptop}{
        flex: 0.33;
        text-align: right;
    }


`

export const FooterLogo = styled(Link)`
    font-size: 2.5em;
    font-weight: 700;
    color: var(--txt);
    width: 100%;
    margin-bottom: 1rem;
    text-align: center;

    span:first-child{
        color: var(--logo-primary);
    }

    @media ${device.tablet}{
        order: 1;
        flex: 0.5;
        text-align: left;
    }

    @media ${device.laptop}{
        flex: 0.333;
        margin-bottom: 0;
    }
`

export const FooterInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

export const FooterTop = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between;
    justify-content: space-between;
    align-items: center;

    @media ${device.tablet}{
        flex-flow: row wrap;
    }

    @media ${device.laptop}{
        
    }
    
`

export const FooterLink = styled(Link)`
    padding: 8px;
`

export const FooterList = styled.ul`
    display: flex;
    justify-content: center;

    @media ${device.tablet}{
        justify-content: flex-end;
    }

    @media ${device.laptop}{
        justify-content: center;
    }
`

export const FooterItem = styled.li`
    margin: 6px;
           
    &:hover a{
        background: var(--txt-primary);
        border-color: var(--txt-primary);
        transform: translateY(-3px);

        svg{
            fill: #fff;
        }
    }

    a{
        width: 50px;
        height: 50px;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--txt);
        border: 2px solid var(--bg-border);
        border-radius: 50%;
        text-align: center;
        transition: all .3s cubic-bezier(.645,.045,.355,1);
    }

`

export const FooterSocial = styled.div`
    width: 100%;

    @media ${device.tablet}{
        order: 2;
        flex: 0.5;
    }

    @media ${device.laptop}{
        flex: 0.333;
    }
`