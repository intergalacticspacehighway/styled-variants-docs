import { createTheme } from "react-native-styled-variants";

const theme = { colors: { pink: "pink" } };
const breakpoints = { sm: 100, base: 0 };
export const { createVariant, ThemeProvider } = createTheme({
  theme,
  breakpoints,
});
type ITheme = typeof theme;
type IBreakpoints = typeof breakpoints;
export type { ITheme, IBreakpoints };
