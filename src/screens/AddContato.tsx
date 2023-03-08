import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AddContato = () => {
  const navigation = useNavigation();
  navigation.setOptions({
    tabBarVisible: false,
  });
  return <View></View>;
};

export default AddContato;
