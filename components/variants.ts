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
    },
    bold: {
      true: { fontWeight: "800" },
    },
  },
});
