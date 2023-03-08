import React from "react";
import { StyleSheet, View } from "react-native";

interface Props {
  children: React.ReactNode;
}

const Container = ({ children }: Props) => {
  return <View style={style.container}>{children}</View>;
};

const style = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});
export default Container;
