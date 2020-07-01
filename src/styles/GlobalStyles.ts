import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased
  }

  html, body, #root {
    height: 100%
  }

  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif
  }

  :root {
    --primary: #36393F;
    --secondary: #2F3136;
    --tertiary: rgb(32, 34, 37);
    --quaternary: #292B2F;
    --quinary: #393D42;
    --senary: #828386;

    --white: #FFF;
    --gray: #8A8C90;
    --chat-input: rgb(64, 68, 75);
    --symbol: #74777A;

    --notification: #F84A4B;
    --discord: #6E86D6;
    --mention-detail: #F9A839;
    --mention-message: #413F3F;
    --link: #5D80D6
  }
`

