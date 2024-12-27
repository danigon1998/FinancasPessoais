import React, {useContext, useState} from "react";
import { Platform, ActivityIndicator, Alert } from "react-native";
import { Background, Container, AreaInput, Input, SubmitButton, SubmitText } from "../SignIn/styles";
import { AuthContext } from "../../contexts/auth";

export default function SignUp() {

    const {signUp, loadingAuth} = useContext(AuthContext)

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSignUp(){
        if(name === '' || email === '' || password === ''){
            Alert.alert('Preencha todos os campos')
            return;
        }
        signUp(email, password, name);
    }

    return (
        <Background>
            <Container
            behavior = {Platform.OS === 'ios' ? 'padding' : undefined}
            >
            <AreaInput>
                <Input
                    placeholder="Seu Nome"
                    value = {name}
                    onChangeText = {(text:string) => setName(text)}
                />
            </AreaInput>
            <AreaInput>
                <Input
                    placeholder="Email"
                    value = {email}
                    onChangeText = {(text:string) => setEmail(text)}
                />
            </AreaInput>
            <AreaInput>
                <Input
                    placeholder="Senha"
                    value = {password}
                    onChangeText = {(text:string) => setPassword(text)}
                    secureTextEntry = {true}
                />
            </AreaInput>
            <SubmitButton activeOpacity = {0.8} onPress={handleSignUp}>
                {loadingAuth ? <ActivityIndicator size={20} color="#FFF"/> : <SubmitText>Cadastrar</SubmitText>}
            </SubmitButton>
            </Container>
        </Background>
        );
}