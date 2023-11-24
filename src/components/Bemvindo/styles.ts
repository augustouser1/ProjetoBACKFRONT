import styled from "styled-components"
import {colors} from "../../styles/GlobalStyle"

export const section= styled.section`
   .Simpleminds{
    background-color: white;
   }
   .Dreamtheater{
    display: flex;
    font-size: 6rem;
    margin: 1.5rem;
    justify-content: center;
    font-family: "Russo One", sans-serif;
   }
  
   .B {
  opacity: 0;
  animation: drop 0.4s linear forwards;
  color:#5B68C0;
}
.e {
  opacity: 0;
  animation: drop 0.4s linear forwards 0.2s;
  color: orange;
}
.m {
  opacity: 0;
  animation: drop 0.4s linear forwards 0.6s;
  color: red;
}
.V {
  opacity: 0;
  animation: drop 0.4s linear forwards 1.0s;
  color: royalblue;
}
.i {
  opacity: 0;
  animation: drop 0.4s linear forwards 1.4s;
  color: #de4040;
}
.n{
  opacity: 0;
  animation: drop 0.4s linear forwards 1.8s;
  color: orange;
}
.d{
  opacity: 0;
  animation: drop 0.4s linear forwards 2.2s;
  color:#de4040;
}
.o{
  opacity:0;
  animation:drop 0.4s linear forwards 2.6s;
  color:royalblue;
}

@keyframes drop {
  0% {
      transform: translateY(-200px);
      opacity: 0;
  }
  50% {
      transform: translateY(0px);
      opacity: 1;
  }
  65% {
      transform: translateY(-17px);
      opacity: 1;
  }
  75% {
      transform: translateY(-22px);
      opacity: 1;
  }
  100% {
      transform: translateY(0px);
      opacity: 1;
  }
}







`