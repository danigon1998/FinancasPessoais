import styled from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    background-color: #F0F4FF;
    align-items: center;
`;

export const Message = styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin-top: 24px;
    color: #121212;
`;

export const Name = styled.Text`
    font-size: 24px;
    margin-top: 8px;
    margin-bottom: 24px;
    padding: 0 14px;
    color: #121212;
`;

export const NewLink = styled.TouchableOpacity`
    background-color: #3B3DBF;
    width: 90%;
    height: 45px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    margin-bottom: 14px;
`;

export const NewText = styled.Text`
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
`;

export const LogoutButton = styled.TouchableOpacity`
    width: 90%;
    height: 45px;
    border-width: 1px;
    border-color: #C62C36;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
`;

export const LogoutText = styled.Text`
    color: #C62C36;
    font-size: 18px;
    font-weight: bold;
`;