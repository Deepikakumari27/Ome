import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainAppStack from "./src/navigation/MainStack";

const AppNavigation = ({ initialRouteName }) => {
    return (
        <NavigationContainer >
            <MainAppStack initialRouteName={initialRouteName} />
        </NavigationContainer>
    );
};

export default React.memo(AppNavigation);
