import React, {createContext, useState, ReactNode, useEffect} from "react";
import api from "../services/api";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthProviderProps {
    children: ReactNode;
}

interface UserProps{
    name: string;
    email: string;
    id: string;
}

interface AuthContextData {
    signed: boolean;
    user: UserProps | null;
    signUp: (email:string, password:string, name: string) => Promise<void>;
    signIn: (email: string, password:string) => Promise<void>;
    signOut: () => Promise<void>;
    loadingAuth: boolean;
    loading: boolean; 
  }

export const AuthContext = createContext<AuthContextData>({} as AuthContextData) 

function AuthProvider({children}:AuthProviderProps){

    const navigation = useNavigation();
    const [user, setUser] = useState<UserProps | null>(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData(){

            const token = await AsyncStorage.getItem('@finToken');

            if (token) {
                try {
                  const response = await api.get('/me', {
                    headers: {
                      Authorization: `Bearer ${token}`,
                    },
                  });
                  api.defaults.headers['Authorization'] = `Bearer ${token}`;
                  const {email, id, name} = response.data;
                  setUser({
                    name,
                    email,
                    id,
                })
                } catch (error) {
                  Alert.alert("Sessão expirada, faça login novamente");
                  setUser(null);
                  AsyncStorage.removeItem('@finToken');
                }
              }
          
              setLoading(false); 
            }

        loadStorageData();
    }, [])

    async function signUp(email:string, password:string, name:string) {
        setLoadingAuth(true);
        try {
            const response = await api.post('/users', {
                email,
                password,
                name
            })
            
            navigation.goBack();
            setLoadingAuth(false);
        } catch (error) {
            console.log(error);
            setLoadingAuth(false);
        }
    }

    async function signIn(email:string, password:string) {
        setLoadingAuth(true);

        try {
            const response = await api.post('/login', {
                email,
                password
            })

            const {token, id, name} = response.data;

            await AsyncStorage.setItem('@finToken', token);

            api.defaults.headers['Authorization'] = `Bearer ${token}`

            setUser({
                name,
                email,
                id,
            })

            setLoadingAuth(false)
            
        } catch (error) {
            console.log(error);
            setLoadingAuth(false);
        }
    }

    async function signOut() {
        await AsyncStorage.clear().then(() => {
            setUser(null);
        })
    }

    return(
        <AuthContext.Provider value={{signed: !!user, user, signUp, signIn, loadingAuth, loading, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;