import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #EEEEEE;
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

  input:-webkit-autofill {
    transition: background-color 5000s ease-in-out 0s;
  }
`
