import React, {useState, useContext} from "react";
import {Platform, Alert} from "react-native";

import { Background, Container, Logo, AreaInput, Input, SubmitButton, SubmitText, Link, LinkText } from "./styles";

import { useNavigation } from "@react-navigation/native";

import { AuthContext } from "../../contexts/auth";

export default function SignIn() {

    const navigation = useNavigation<any>();
    const [email, seEmail] = useState('')
    const [password, setPassword] = useState('')

    const {signIn, loadingAuth} = useContext(AuthContext);

    function handleLogin() {
        if(email == '' || password == ''){
            Alert.alert('Preencha todos os campos')
            return;
        }
        signIn(email, password)
        
    }

    return (
    <Background>
        <Container
        behavior = {Platform.OS === 'ios' ? 'padding' : undefined}
        enable = {true} 
        >
        <Logo
            source = {require('../../assets/Logo.png')}
        />
        <AreaInput>
            <Input
                value = {email}
                placeholder="Seu email"
                onChangeText = {(value:string) => seEmail(value)}
            />
        </AreaInput>
        <AreaInput>
            <Input
                value = {password}
                placeholder="Sua Senha"
                secureTextEntry = {true}
                onChangeText = {(value:string) => setPassword(value)}

            />
        </AreaInput>
        <SubmitButton activeOpacity = {0.8} onPress = {handleLogin}>
            <SubmitText>Acessar</SubmitText>
        </SubmitButton>
        <Link onPress={() => navigation.navigate('SignUp')}>
            <LinkText>Criar uma conta</LinkText>
        </Link>
        </Container>
    </Background>
    );
}