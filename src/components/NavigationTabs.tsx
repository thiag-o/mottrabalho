import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Ionicons } from "@expo/vector-icons";
import React from "react";

import { OpaqueColorValue } from "react-native/types";
import Items from "../screens/Items";
import HomeScreen from "../screens/HomeScreen";
import ContatosScreen from "../screens/ContatosScreen";
import ContatoStackScreen from "./ContatoStackScreen";

const Tab = createBottomTabNavigator();

interface IIcons {
  color: string | OpaqueColorValue | undefined;
  size: number | undefined;
}

const NavigationTabs = () => {
  const optionsHome = {
    tabBarIcon: ({ color, size }: IIcons) => (
      <Ionicons name="home" size={size} color={color} />
    ),
  };
  const optionsContatos = {
    tabBarIcon: ({ color, size }: IIcons) => (
      <Ionicons name="person" size={size} color={color} />
    ),

    headerShown: false,
  };
  const optionsItems = {
    tabBarIcon: ({ color, size }: IIcons) => (
      <Ionicons name="key" size={size} color={color} />
    ),
  };

  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Items" component={Items} options={optionsItems} />
      <Tab.Screen name="Home" component={HomeScreen} options={optionsHome} />
      <Tab.Screen
        name="Contatos"
        component={ContatoStackScreen}
        options={optionsContatos}
      />
    </Tab.Navigator>
  );
};

export default NavigationTabs;
