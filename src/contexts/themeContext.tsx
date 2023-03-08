import React from "react";
import { useColorScheme } from "react-native";

import {
  MD3DarkTheme as PaperDarkTheme,
  MD3LightTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";

import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { darkColors, lightColors } from "../styles/colors";

const lightTheme = {
  ...DefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    ...lightColors,
  },
};
const darkTheme = {
  ...DarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...DarkTheme.colors,
    ...PaperDarkTheme.colors,
    ...darkColors,
  },
};

export type Theme = typeof lightTheme;
export type ThemeType = "dark" | "light";

export interface ThemeContextValue {
  theme: Theme;
  themeType: ThemeType;
  isDarkTheme: boolean;
  toggleThemeType: () => void;
  setThemeType: React.Dispatch<React.SetStateAction<ThemeType>>;
}
export interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContext = React.createContext<ThemeContextValue>({
  theme: lightTheme,
  themeType: "light",
  isDarkTheme: false,
  setThemeType: () => {},
  toggleThemeType: () => {},
});

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const colorScheme = useColorScheme();
  const [themeType, setThemeType] = React.useState<ThemeType>(
    colorScheme || "light"
  );

  const toggleThemeType = React.useCallback(() => {
    setThemeType((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const isDarkTheme = React.useMemo(() => themeType === "dark", [themeType]);

  const theme = React.useMemo(
    () => (isDarkTheme ? darkTheme : lightTheme),
    [isDarkTheme]
  );

  return (
    <PaperProvider theme={theme}>
      <ThemeContext.Provider
        value={{
          theme,
          themeType,
          isDarkTheme,
          setThemeType,
          toggleThemeType,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </PaperProvider>
  );
};
