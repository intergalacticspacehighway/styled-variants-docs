import React, { useEffect } from "react";
import { Pressable, View, ScrollView, Text } from "react-native";
import Link from "next/link";
import { createVariant } from "../theme";
import { useRouter } from "next/router";
import { StyledText } from "./variants";
import { useCurrentBreakpoint } from "react-native-styled-variants";
import Image from "next/image";
import closeSvg from "../public/close.svg";

export const Sidebar = ({
  show,
  hide,
}: {
  show: boolean;
  hide: () => void;
}) => {
  const route = useRouter();
  const { resolveResponsiveValue } = useCurrentBreakpoint();

  useEffect(() => {
    hide();
  }, [route.pathname, hide]);

  const contentView = (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View
        sx={{
          justifyContent: "center",
          padding: "$space.10",
        }}
      >
        <Link href="/" passHref>
          <StyledText size="xl" bold sx={{ color: "$colors.teal300" }}>
            Styled Variants
          </StyledText>
        </Link>
      </View>
      <View>
        <Button focusable={false}>
          <Link href="/quick-start" passHref>
            <StyledText sidebar focused={route.pathname === "/quick-start"}>
              Quick start
            </StyledText>
          </Link>
        </Button>
        <Button focusable={false}>
          <Link href="/create-theme" passHref>
            <StyledText sidebar focused={route.pathname === "/create-theme"}>
              createTheme
            </StyledText>
          </Link>
        </Button>
        <Button focusable={false}>
          <Link href="/create-variant" passHref>
            <StyledText sidebar focused={route.pathname === "/create-variant"}>
              createVariant
            </StyledText>
          </Link>
        </Button>
        <Button focusable={false}>
          <Link href="/sx-prop" passHref>
            <StyledText sidebar focused={route.pathname === "/sx-prop"}>
              SX prop
            </StyledText>
          </Link>
        </Button>
        <Button focusable={false}>
          <Link href="/playground" passHref>
            <StyledText sidebar focused={route.pathname === "/playground"}>
              Transpiler playground
            </StyledText>
          </Link>
        </Button>

        <Button focusable={false}>
          <Link href="/tradeoffs" passHref>
            <StyledText sidebar focused={route.pathname === "/tradeoffs"}>
              Tradeoffs
            </StyledText>
          </Link>
        </Button>
      </View>
    </ScrollView>
  );

  return resolveResponsiveValue({
    base: show ? (
      <View
        sx={{
          position: "absolute",
          flex: 1,
          backgroundColor: "$colors.blueGray900",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 99,
        }}
      >
        <Pressable
          onPress={hide}
          sx={{ right: 10, position: "absolute", zIndex: 999, bottom: 10 }}
        >
          <Image
            src={closeSvg}
            alt="close sidebar"
            height={"56px"}
            width={"56px"}
          />
        </Pressable>
        {contentView}
      </View>
    ) : null,
    md: (
      <View
        sx={{
          flex: 1,
          backgroundColor: "$colors.blueGray900",
        }}
      >
        {contentView}
      </View>
    ),
  }) as any;
};

const Button = createVariant(Pressable, {
  _hover: {
    backgroundColor: "$colors.blueGray800",
  },
});
