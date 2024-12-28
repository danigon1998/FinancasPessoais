import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";
import New from "../pages/New";
import Profile from "../pages/Profile";
import CustomDrawer from "../components/CustomDrawer";

const appDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <appDrawer.Navigator
            drawerContent={(props)=> <CustomDrawer {...props}/>}
            screenOptions={
                {
                    headerShown: false,
                    drawerStyle:{
                        backgroundColor: "#FFF",
                        paddingTop: 20
                    },
                    drawerActiveBackgroundColor: "#3B3DBF",
                    drawerActiveTintColor: "#FFF",
                    drawerInactiveBackgroundColor: "#F0F2FF",
                    drawerInactiveTintColor: "#121212",
                    drawerItemStyle:{
                        marginVertical: 8
                    }
                }

            }
        >
            <appDrawer.Screen name="Home" component={Home}/>
            <appDrawer.Screen name="Registrar" component={New}/>
            <appDrawer.Screen name="Perfil" component={Profile}/>
        </appDrawer.Navigator>
    )
}

export default AppRoutes;