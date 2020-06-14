import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
  * {
    box-sizing: border-box;
    :focus {
      outline: none;
    }
  }
  body {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
`;
