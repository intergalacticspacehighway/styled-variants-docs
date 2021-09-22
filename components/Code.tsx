import { Text, View } from "react-native";

export const Code = ({ children }: any) => {
  return (
    <View>
      <Text
        sx={{
          padding: "$space.2",
          fontFamily: "monospace",
          fontSize: "$fontSizes.sm",
        }}
      >
        {children}
      </Text>
    </View>
  );
};
