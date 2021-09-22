import { createTheme } from "react-native-styled-variants";
const space = {
  "1": 4,
  "1.5": 6,
  "2": 8,
  "2.5": 10,
  "3": 12,
  "3.5": 14,
  "4": 16,
  "5": 20,
  "6": 24,
  "7": 28,
  "8": 32,
  "9": 36,
  "10": 40,
  "12": 48,
  "16": 64,
  "20": 80,
  "24": 96,
  "32": 128,
  "40": 160,
  "48": 192,
  "56": 224,
  "64": 256,
  "72": 288,
  "80": 320,
  "96": 384,
};

const grays = {
  blueGray50: "#F8FAFC",
  blueGray100: "#F1F5F9",
  blueGray200: "#E2E8F0",
  blueGray300: "#CBD5E1",
  blueGray400: "#94A3B8",
  blueGray500: "#64748B",
  blueGray600: "#475569",
  blueGray700: "#334155",
  blueGray800: "#1E293B",
  blueGray900: "#0F172A",
};

const teal = {
  teal50: "#F0FDFA",
  teal100: "#CCFBF1",
  teal200: "#99F6E4",
  teal300: "#5EEAD4",
  teal400: "#2DD4BF",
  teal500: "#14B8A6",
  teal600: "#0D9488",
  teal700: "#0F766E",
  teal800: "#115E59",
  teal900: "#134E4A",
};

const fontSizes = {
  sm: 14,
  md: 16,
  lg: 18,
  xl: 28,
  "2xl": 48,
};

const theme = {
  colors: { ...grays, primary: teal.teal500, ...teal },
  space,
  fontSizes,
};
const breakpoints = { sm: 100, base: 0 };

export const { createVariant, ThemeProvider } = createTheme({
  theme,
  breakpoints,
});

type ITheme = typeof theme;
type IBreakpoints = typeof breakpoints;
export type { ITheme, IBreakpoints };
