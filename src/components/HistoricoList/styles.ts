import styled from "styled-components/native";

interface TipoProps {
    tipo: string
}

export const Container = styled.View`
    background-color: #FAF3FF;
    border-radius: 4px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 14px;
    padding: 12px;
`;

export const TipoText = styled.Text`
    color: #FFF;
    font-size: 16px;
    font-style: italic;
`;

export const Tipo = styled.View`
  flex-direction: row;
`;
export const IconView = styled.View<TipoProps>`
    flex-direction: row;
    background-color: ${props => props.tipo === 'receita' ? "#049301" : "#C62C36"};
    padding-bottom: 4px;
    padding-top: 4px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 4px;
    margin-bottom: 4px;
`;

export const ValorText = styled.Text`
  font-size: 22px;
  color: #121212;
`;