import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import AddContato from "../screens/AddContato";
import ContatosScreen from "../screens/ContatosScreen";

const ContatoStack = createStackNavigator();

const ContatoStackScreen = () => {
  return (
    <ContatoStack.Navigator initialRouteName="Contatos">
      <ContatoStack.Screen name="Contatos" component={ContatosScreen} />
      <ContatoStack.Screen name="AddContato" component={AddContato} />
    </ContatoStack.Navigator>
  );
};

export default ContatoStackScreen;
