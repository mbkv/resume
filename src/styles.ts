import styled, { css, createGlobalStyle } from "styled-components/macro";

export const GlobalStyles = createGlobalStyle`
  html {
    line-height: 1.4;
    font-family: Arial, Helvetica, sans-serif;

    @media not print {
      color: ${props => props.theme.primary.color};
      background-color: ${props => props.theme.primary.background};
    }
  }

  html * {
    box-sizing: border-box;
  }
`;

export const hideFromPrint = css`
  @media print {
    display: none !important;
  }
`;