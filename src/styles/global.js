import { createGlobalStyle } from "styled-components";
import { modernNormalize } from "styled-modern-normalize";


export const GlobalStyle = createGlobalStyle`
    ${modernNormalize}

    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

    .light {
        --txt: rgba(198,201,216,.75);
        --txt-title: #fff;
        --txt-primary: #f9004d;
        --bg: #101010;
        --bg-primary: #fafafa;
        --bg-secondary: #191919;
        --bg-modal: #fafafa;
        --bg-border: #f61b10; 
        --bg-shadow: #a10b46bd;
        --social-icon: #c5c8d8;
        --modal-border: none;
        --preloader: #fafafa;
        --logo-primary: #39b175;
        --border-bottom: #333;
        --btn-primary: #f9004d;
        --btn-border: hsla(0,0%,100%,.3);
    }
      
    .dark {
        --txt: rgba(198,201,216,.75);
        --txt-title: #fff;
        --txt-primary: #f9004d;
        --bg: #101010;
        --bg-primary: #181a27;
        --bg-secondary: #191919;
        --bg-modal: #100D19;
        --bg-border: #f61b10;
        --bg-shadow: #a10b46bd;
        --social-icon: #c5c8d8;
        --modal-border: #100D19;
        --preloader: #0c0513;
        --logo-primary: #f9004d;
        --border-bottom: #333;
        --btn-primary: #f9004d;
        --btn-border: hsla(0,0%,100%,.3);
    }

    *,
    *::before,
    *::after{
        box-sizing:border-box;
    }
    a {
        text-decoration:none;
        color:inherit;
        cursor:pointer;
    }
    ul, ol, dd{
        margin:0; padding:0; list-style:none;
    }
    h1, h2, h3, h4, h5, h6{
        margin: 0;
        font-weight: inherit;
        line-height: 1.4;
    }
    
    p{
        margin:0;
    }

    body{
        font-family: 'Montserrat', sans-serif; 
        font-size: 14px;
        line-height: 1.7;
        font-weight: 400;
    }


`