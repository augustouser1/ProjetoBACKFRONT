import styled, { createGlobalStyle } from "styled-components"
import 'react-toastify/dist/ReactToastify.css'
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
  }
`

export const colors = {
  primary: "#5B68C0",
  secondary: "#FFDD95",
  third: "#BE7D7D",
  quarternary: "#FDCD6B",
  black: "black",
  white: "white",
}