import React from "react";
// import { createStackNavigator } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { COLORS, FONTS, TYPE } from "../../constants";

import { OrderStatus } from '../../components/OrderStatus/OrderStatus';
const Stack = createNativeStackNavigator();
export default function MainAppStack({ initialRouteName }) {
    return (
        <Stack.Navigator
            headerMode="none"
            initialRouteName={initialRouteName}
            screenOptions={{ gestureEnabled: false }}
        >
            <Stack.Screen name="Public experience" component={OrderStatus} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    );

}
// options={{
//     title: 'Public experiences',
//     headerTintColor: COLORS.RGB_49_48_48,
//     // headerTitleAlign: 'center',
//     headerTitleStyle: { fontSize: 30, fontFamily: FONTS.CaveatBold }
// }}