import { createGlobalStyle } from 'styled-components';

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

  textarea {
    width: 100%;
    padding: 10px 12px;
    background-color: hsl(0,0%,100%);
    border-color: hsl(0,0%,80%);
    color: ${({ theme }) => theme.colors.text};
    border-radius: 4px;
    border-style: solid;
    border-width: 1px;
    font-size: 14px;
    border-radius: 5px;
    width: 100%;
    font-family: 'Raleway', sans-serif;
    margin-top: 20px;
    min-height: 300px;

    &::placeholder {
      color: hsl(0,0%,50%);
    }

    &:hover {
      border-width: 1px;
      border-color: hsl(0,0%,70%);
    }

    &:focus, &::selection {
      border-width: 2px;
      border-color: #2684ff;
    }
  }

  .react-select-container {
    width: 100%;
    margin-bottom: 1.15rem;
  }

  .ck-editor__editable_inline {
    min-height: 300px !important;
  }
`;
