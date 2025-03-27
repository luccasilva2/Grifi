// Página base do App

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicial from "./src/screens/Inicial";
import Home from "./src/screens/Home";
import SignUp from "./src/screens/SignUp";
import Login from "./src/screens/Login";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
          name="Inicial" 
          component={Inicial} 
          options={{ headerShown: false }}  // Cabeçalho oculto na página Home
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ headerShown: false }}  // Cabeçalho oculto na página Home
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ headerShown: false }}  // Cabeçalho oculto na página de Cadastro
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ headerShown: false }}  // Cabeçalho oculto na página de Login
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
