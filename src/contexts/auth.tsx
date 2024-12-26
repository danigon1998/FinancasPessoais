import React, {createContext, useState, ReactNode} from "react";
import api from "../services/api";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface AuthProviderProps {
    children: ReactNode;
}

interface AuthContextData {
    signUp: (email:string, password:string, name: string) => Promise<void>;
    loading: boolean; 
  }

export const AuthContext = createContext<AuthContextData>({} as AuthContextData) 

function AuthProvider({children}:AuthProviderProps){

    const navigation = useNavigation();
    const [user, setUser] = useState<object | null>(null);
    const [loading, setLoading] = useState(false);

    async function signUp(email:string, password:string, name:string) {
        setLoading(true);
        try {
            const response = await api.post('/users', {
                email,
                password,
                name
            })
            
            navigation.goBack();
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    return(
        <AuthContext.Provider value={{signUp, loading}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;