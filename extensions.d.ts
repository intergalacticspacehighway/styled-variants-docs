import "react-native";
import { RNStyles } from "react-native-styled-variants";
import type { ITheme, IBreakpoints } from "./theme";

declare module "react-native" {
  interface ViewProps {
    sx?: RNStyles<ITheme, IBreakpoints>;
  }
  interface ScrollViewProps {
    contentContainerSX?: RNStyles<ITheme, IBreakpoints>;
  }
  interface ImageProps {
    sx?: RNStyles<ITheme, IBreakpoints>;
  }
  interface TextProps {
    sx?: RNStyles<ITheme, IBreakpoints>;
  }
}
