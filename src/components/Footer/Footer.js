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


    @media ${device.tablet}{

    }

    @media ${device.laptop}{
        flex-shrink: 1;
        flex-basis: 33.3333%;
    }

`



export const FooterInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`

export const FooterTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    @media ${device.tablet}{
    
    }

    @media ${device.laptop}{
        flex-direction: row;

        > a{
            flex-shrink: 1;
            flex-basis: 33.3333%;
        }
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
        border: 2px solid var(--btn-border);
        border-radius: 50%;
        text-align: center;
        transition: all .3s cubic-bezier(.645,.045,.355,1);

        svg{
            fill: var(--btn-icon);
        }
    }

`

export const FooterSocial = styled.div`
    position: relative;


    @media ${device.tablet}{

    }

    @media ${device.laptop}{
        flex-shrink: 1;
        flex-basis: 33.3333%;
    }
`