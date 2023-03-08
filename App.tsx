import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import NavigationTabs from "./src/components/NavigationTabs";
import { ThemeContextProvider, useTheme } from "./src/contexts/themeContext";

const App = () => {
  const { theme } = useTheme();
  return (
    <ThemeContextProvider>
      <NavigationContainer theme={theme}>
        <NavigationTabs />
      </NavigationContainer>
    </ThemeContextProvider>
  );
};
export default App;
