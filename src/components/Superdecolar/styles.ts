import styled from "styled-components"
import {colors} from "../../styles/GlobalStyle"
import aviao from "../../assets/Airplane56.jpg"
export const section=styled.section `
.REM{
   background-color:white; 
}

.REM h3 {
  font-family: "Century Gothic", CenturyGothic, Geneva, AppleGothic, sans-serif;
  background-image:  url("/Airplane56.jpg");
  margin: 0rem;
  display: flex;
  font-size: 4rem;
  -webkit-background-clip: text;
  background-position: 0 0;
  -webkit-text-fill-color: #5b5f8a54;
  animation: animadinho 30s linear infinite;
  margin-left:35rem;
}

@keyframes animadinho {
  from {
      background-position: 0 0;
  }
  to {
      background-position: 100% 0;
  }
}






`

