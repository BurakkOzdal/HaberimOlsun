import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StatusBar } from 'react-native';
import Categories from './pages/Categories'
import CategoryDetail from './pages/CategoryDetail';
import NewsDetail from './pages/NewsDetail';

const Stack = createNativeStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <StatusBar barStyle="default" hidden={false} backgroundColor="#b0bec5" translucent={true} />
            <Stack.Navigator>
                <Stack.Screen name="Categories" component={Categories} options={{
                    title: "Kategoriler",
                    headerStyle: { backgroundColor: "#b0bec5" },
                    headerTitleStyle: { color: "white" },
                    headerTintColor: "white",
                    headerTitleAlign: "center"
                }} />
                <Stack.Screen name="CategoryDetail" component={CategoryDetail} options={{
                    title: "Kategoriler",
                    headerStyle: { backgroundColor: "#b0bec5" },
                    headerTitleStyle: { color: "white" },
                    headerTintColor: "white",
                    headerTitleAlign: "center"
                }} />
                <Stack.Screen name="NewsDetail" component={NewsDetail} options={{
                    title: "Kategoriler",
                    headerStyle: { backgroundColor: "#b0bec5" },
                    headerTitleStyle: { color: "white" },
                    headerTintColor: "white",
                    headerTitleAlign: "center"
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;
