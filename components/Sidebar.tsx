import React, { useEffect } from "react";
import { Pressable, View, ScrollView, Text, Platform } from "react-native";
import Link from "next/link";
import { createVariant, useCurrentBreakpoint } from "../theme";
import { useRouter } from "next/router";
import { StyledText } from "./variants";
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
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Link href="/" passHref>
          <StyledText
            size="xl"
            bold
            sx={{
              color: "$colors.teal300",
              //@ts-ignore
              cursor: Platform.select({ web: "pointer" }),
            }}
          >
            Styled Variants
          </StyledText>
        </Link>
        <a
          href="https://github.com/intergalacticspacehighway/react-native-styled-variants"
          target="_blank"
          rel="noreferrer"
          aria-label="styled variants github link"
        >
          <svg
            height={32}
            aria-hidden="true"
            viewBox="0 0 16 16"
            width={32}
            fill="#fff"
            data-view-component="true"
            className="prefix__octicon prefix__octicon-mark-github prefix__v-align-middle"
          >
            <path
              fillRule="evenodd"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            />
          </svg>
        </a>
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

        {/* <Button focusable={false}>
          <Link href="/example-apps" passHref>
            <StyledText sidebar focused={route.pathname === "/example-apps"}>
              Example apps
            </StyledText>
          </Link>
        </Button> */}
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
  _hovered: {
    backgroundColor: "$colors.blueGray800",
  },
});
