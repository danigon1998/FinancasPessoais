import styled from "styled-components/native";

interface RegisterTypeButtonProps {
    checked: boolean;
}

export const RegisterContainer = styled.View`
    flex-direction: row;
    width: 100%;
    padding-left: 5%;
    padding-right: 5%;
    justify-content: space-between;
    align-items: center;
`;

export const RegisterTypeButton = styled.TouchableOpacity<RegisterTypeButtonProps>`
    width: 47%;
    height: 48px;
    background-color:${props => props.checked ? '#FFF' : "#E7E7E7"};
    border-radius: 4px;
    border-width: 1.5px;
    border-color:${props => props.checked ? '#3B3DBF' : "transparent"};
    margin-bottom: 14px;
    justify-content: center;
    align-items: center;
    flex-direction: row;
`;

export const RegisterLabel = styled.Text`
    margin-left: 8px;
    font-size: 17px;
`;