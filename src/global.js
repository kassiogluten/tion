import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root{
  --azul:#001A34;
  --secundariaCinza:#000E1D;
  --terciariaCinza:#001A34;
  --branco:#ffffff;
  --laranja:#FF4655;
}


*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
    -webkit-font-smoothing: antialiased;
    background: linear-gradient(324.28deg, #000E1D 20.91%, #001A34 79.09%);
    
  }
  body, input, textarea, button {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }
  html {
    @media(max-width: 1080px) {
      font-size: 93.75%;
    }
    @media(max-width: 720px) {
      font-size: 87.5%;
    }
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  
  `;
