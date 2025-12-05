import { MD3LightTheme } from "react-native-paper";

const theme = {
  ...MD3LightTheme,

  colors: {
    ...MD3LightTheme.colors,
    primary: '#e9e9e9',
    secondary: '#a669ec',
    tertiary: 'gray',
  },
};

export function useTheme() {
    return (theme);
}