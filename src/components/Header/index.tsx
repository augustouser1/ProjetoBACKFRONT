import * as S from "./styles"
import Logo from "../../assets/🦆 icon _Plane 2_.svg"
import { Superdecolar } from "../Superdecolar"

export function Header() {
  return (
    <S.Header>
      <picture>
        <img src={Logo} alt="Logo" />
      </picture>
      <Superdecolar/>
      <S.NavBar>
        <ul>
          <li>
            <a href="/">Página Inicial</a>
          </li>
          <li>
            <a href="/list">Lista</a>
          </li>
          <li>
            <a href="/">Entrar</a>
          </li>
          <li>
            <a href="/">Cadastrar</a>
          </li>
        </ul>   
    
      </S.NavBar>
    </S.Header>
  )
}