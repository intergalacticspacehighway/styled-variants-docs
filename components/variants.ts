import { Text } from "react-native";
import { createVariant } from "../theme";

export const StyledText = createVariant(Text, {
  color: "$colors.blueGray900",
  fontSize: "$fontSizes.md",
  variants: {
    sidebar: {
      true: {
        color: "$colors.blueGray100",
        paddingHorizontal: "$space.10",
        paddingVertical: "$space.4",
      },
    },
    focused: {
      true: {
        color: "white",
        backgroundColor: "$colors.blueGray800",
      },
    },
    primary: {
      true: { color: "$colors.primary" },
    },
    secondary: {
      true: { fontSize: "$fontSizes.md" },
    },
    heading: {
      true: { fontSize: "$fontSizes.2xl", fontWeight: "800" },
    },
    size: {
      xl: { fontSize: "$fontSizes.xl" },
      "2xl": { fontSize: "$fontSizes.2xl" },
      "5xl": { fontSize: "$fontSizes.5xl" },
    },
    bold: {
      true: { fontWeight: "800" },
    },
    h1: {
      true: { fontSize: "$fontSizes.4xl", fontWeight: "900" },
    },
    h2: {
      true: { fontSize: "$fontSizes.3xl", fontWeight: "800" },
    },
    h3: {
      true: { fontSize: "$fontSizes.2xl", fontWeight: "600" },
    },
    h4: {
      true: { fontSize: "$fontSizes.lg", fontWeight: "600" },
    },
  },
});
