import styled from "styled-components";
import imageAbout from '../../../assets/images/avatar.jpg';
import { device } from "../../../styles/breakpoints";

export const AboutContainer = styled.section`
    position: relative;
    padding: 70px 5%;
    background-color: var(--bg);

    @media ${device.laptop}{
        padding: 150px 90px;
    }
`

export const AboutInner = styled.div`
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

export const AboutContext = styled.p`
    font-size: 16px;
    color: var(--txt);

    span{
        color: var(--txt-primary);
        font-weight: 600;
    }

    @media ${device.laptop}{
        font-size: 18px;
    }
`

export const AboutStoryImage = styled.img.attrs({
    src: `${imageAbout}`
  })`
  max-width: 100%;
  height: 450px;

`;

export const AboutStoryImageContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    @media ${device.laptop}{
        width: 40%;
    }
`


export const AboutStory = styled.div`
    @media ${device.laptop}{
        width: 55%;
        margin-right: 5%;
    }
`

export const AbouContenxtLove = styled.p`

`

export const AboutActivity = styled.ul`
  margin-bottom: 1rem;
  margin-top: 1rem;

  li{
      font-size: 16px;
      color: var(--txt);
  }

  @media ${device.laptop}{
    li{
        font-size: 18px;
    }
  }

`
export const AboutStrive = styled.h4`
    text-align: center;
    color: var(--txt-primary);
    font-weight: 500;
    font-size: 18px;

    @media ${device.laptop}{
        font-size: 20px;
    }
`

export const AboutLocaltion = styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid var(--txt);
    width: 70%;
    padding-top: .5rem;
    padding-bottom: .5rem;
    color: var(--txt);
    font-size: 16px;

    svg{
        fill: var(--txt);
        margin-right: .25rem;
    }

    @media ${device.laptop}{
        font-size: 18px;
    }
`   

export const AboutContextSkill = styled.p`
  font-size: 16px;



  @media ${device.laptop}{
      font-size: 18px;
      color: var(--txt);
  }
`