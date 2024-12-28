import styled from "styled-components/native";

export const Background = styled.View`
  flex: 1;
  background-color: #F0F4FF;
`;

export const Input = styled.TextInput`
  width: 90%;
  height: 50px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 10px;
  padding: 0 8px;
  font-size: 17px;
  margin-bottom: 14px;
  border-radius: 4px
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 50px;
  background-color: #00B94A;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  font-size: 21px;
  color: #fff;
  font-weight: bold;
`;