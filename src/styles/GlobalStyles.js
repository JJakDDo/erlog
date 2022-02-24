import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
   @import url('https://fonts.googleapis.com/css2?family=DotGothic16&family=Inter&family=Noto+Sans+KR:wght@500&family=Poppins:wght@500&display=swap');
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Noto Sans KR', sans-serif;
    list-style: none;
  }
  body {
    color: #b3b3b3;
    background: #121212;
    font-size: 1.15em;
    height: 100vh;
  }

  h1{
    color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1,h2,h3,h4,p,span{    
    cursor: default;
  }

`;

export default GlobalStyles;
