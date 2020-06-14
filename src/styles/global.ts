import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: linear-gradient(
      150deg,
      rgba(41, 57, 75, 1) 0%,
      rgba(23, 37, 52, 1) 100%
    );
    min-width: 480px;
    background-attachment: fixed;

    color: #3a3a3a;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`
