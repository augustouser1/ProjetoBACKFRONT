import * as S from "./styles"
import Calendar from "../../assets/🦆 icon _calender_.svg"
import Home from "../../assets/🦆 icon _home alt_.svg"
import Share from "../../assets/🦆 icon _share_.svg"

export function Footer() {
  return (
    <S.Footer>
      <a href="https://www.calendario-365.com.br/calend%C3%A1rio-2023.html" target="_blank">
        <img src={Calendar} alt="Facebook" />
      </a>
      <a href="/" >
      <img src={Home} alt="Casa" />
      </a>
      <img src={Share} alt="compartilhar" />
    </S.Footer>
  )
}