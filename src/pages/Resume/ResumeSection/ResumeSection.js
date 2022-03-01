import styled from 'styled-components';
import { device } from '../../../styles/breakpoints';


export const ResumeContainer = styled.section`
    padding: 70px 5%;
    background-color: var(--bg);
    position: relative;

    @media ${device.laptop}{
        padding: 150px 90px;
    }
`
export const ResumeInner = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    @media ${device.laptop}{
        flex-direction: row;
    }
`

export const ResumeStory = styled.div`
    width: 60%;

    @media ${device.laptop}{
        width: 70%;
    }
`

export const ResumeSvg = styled.div`
    position: relative;
    overflow: hidden;
    

    svg{
        max-width: 100%;
        height: auto;
    }

    @media ${device.laptop}{
        width: 30%;
    }
`


export const ResumeWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    

    button{
        span{
            font-size: 12px;
            font-weight: 400;
            
        }
    }

    a{
        svg{
            margin-right: .25rem;
        }

        span{
            font-size: 12px;
            font-weight: 400;
        }
    }
`