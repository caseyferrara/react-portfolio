import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    transition: all 0.50s linear;
  }
  h1 {
  	color: ${({ theme }) => theme.h1};
  }
  hr {
  	background-color: ${({ theme }) => theme.hr};
  }
  .form-color {
  	color: ${({ theme }) => theme.formcolor};
  }
  `