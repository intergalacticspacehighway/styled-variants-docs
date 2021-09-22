import React from "react";
import { Pressable, View, ScrollView, Text } from "react-native";
import Link from "next/link";
import { createVariant } from "../theme";
import { useRouter } from "next/router";
import { StyledText } from "./variants";

export const Sidebar = () => {
  const route = useRouter();

  return (
    <ScrollView>
      <View
        sx={{
          alignItems: "center",
          justifyContent: "center",
          paddingVertical: "$space.10",
        }}
      >
        <StyledText size="xl" bold sx={{ color: "$colors.teal300" }}>
          Styled Variants
        </StyledText>
      </View>
      <View>
        <Button focusable={false}>
          <Link href="/" passHref>
            <StyledText sidebar focused={route.pathname === "/"}>
              About
            </StyledText>
          </Link>
        </Button>
        <Button focusable={false}>
          <Link href="/variants" passHref>
            <StyledText sidebar focused={route.pathname === "/variants"}>
              Variants
            </StyledText>
          </Link>
        </Button>
      </View>
    </ScrollView>
  );
};

const Button = createVariant(Pressable, {
  _hover: {
    backgroundColor: "$colors.blueGray800",
  },
});
