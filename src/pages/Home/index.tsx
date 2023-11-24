import * as S from './styles'
import aviao from "../../assets/image 1.png"
import { BemVindo } from '../../components/Bemvindo'
export function Home() {
  return (
    <S.Section>
      <BemVindo/>
      <img src={aviao} alt="aviao" />
    </S.Section>
  )
}
