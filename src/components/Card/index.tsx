import * as S from "./styles";
export interface ICard {
  ida: string
  volta: string
  informacao: string
}
export const Card = ({ ida, volta, informacao}: ICard) => {
  return (
    <S.Aside>
      <h3>
        <strong>Ida: </strong> {ida}
      </h3>
      <h4>Volta: {volta}</h4>
      <p>Informação: {informacao}</p>
    </S.Aside>
  );
};
