import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from "../pages/Home";

const appDrawer = createDrawerNavigator();

function AppRoutes(){
    return(
        <appDrawer.Navigator
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
                    drawerInactiveTintColor: "#121212"
                }

            }
        >
            <appDrawer.Screen name="Home" component={Home}/>
        </appDrawer.Navigator>
    )
}

export default AppRoutes;