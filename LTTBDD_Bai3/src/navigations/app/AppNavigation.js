import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import options from './AppNavigation.options'
import HomeScreen from "../../screens/home/HomeScreen";
import Ex1 from "../../screens/ex1/Ex1";
import Ex2 from "../../screens/ex2/Ex2";
import Ex3 from "../../screens/ex3/Ex3";
import Ex4 from "../../screens/ex4/Ex4";
import Ex5 from "../../screens/ex5/Ex5";
import Ex6 from "../../screens/ex6/Ex6";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="home" screenOptions={options.navigator.screenOptions}>
                <Stack.Screen name='home' component={HomeScreen} options={options.screen.home}/>
                <Stack.Screen name='ex1' component={Ex1} options={options.screen.ex1}/>
                <Stack.Screen name='ex2' component={Ex2} options={options.screen.ex2}/>
                <Stack.Screen name='ex3' component={Ex3} options={options.screen.ex3}/>
                <Stack.Screen name='ex4' component={Ex4} options={options.screen.ex4}/>
                <Stack.Screen name='ex5' component={Ex5} options={options.screen.ex5}/>
                <Stack.Screen name='ex6' component={Ex6} options={options.screen.ex6}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;