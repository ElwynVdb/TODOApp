import styled, { createGlobalStyle } from "styled-components";


export const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
  h1, h2 {
      margin:0;
      padding:0;
      box-sizing: border-box;
  }
`;