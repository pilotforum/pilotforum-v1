import { createGlobalStyle } from 'styled-components';
import { lighten } from 'polished';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Raleway:400,500,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: none;
    box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }

  body, html {
    height: auto;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Raleway', sans-serif;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.linkColor};
    transition: opacity 150ms;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
`;
