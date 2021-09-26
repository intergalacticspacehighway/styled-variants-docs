import { ScrollView, View, Pressable, Text } from "react-native";
import { Sidebar } from "../Sidebar";
import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { ClientOnly } from "components/ClientOnly";
import Link from "next/link";
import { useCurrentBreakpoint } from "react-native-styled-variants";
import Image from "next/image";
import menuSvg from "../../public/menu.svg";
import { StyledText } from "components/variants";

export const Layout = ({ children }: any) => {
  const route = useRouter();
  const scrollRef = useRef<ScrollView>(null);
  const { resolveResponsiveValue } = useCurrentBreakpoint();

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [route.pathname]);

  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <View
      sx={{
        flexDirection: "row",
        flex: 1,
        minHeight: "100%",
      }}
    >
      <ClientOnly>
        <Sidebar
          show={showSidebar}
          hide={useCallback(() => setShowSidebar(false), [])}
        />
      </ClientOnly>

      <View sx={{ flex: 4, backgroundColor: "$colors.blueGray50" }}>
        <ScrollView ref={scrollRef} sx={{ height: "100%" }}>
          {resolveResponsiveValue({
            base:
              route.pathname !== "/" ? (
                <Link href="/" passHref>
                  <StyledText
                    size="xl"
                    bold
                    sx={{
                      color: "$colors.primary",
                      marginHorizontal: "auto",
                      marginTop: "$space.3",
                      position: "absolute",
                      left: "50%",
                      //@ts-ignore
                      transform: [{ translateX: "-50%" }],
                    }}
                  >
                    Styled Variants
                  </StyledText>
                </Link>
              ) : null,
            md: null,
          })}
          <View sx={{ flex: 1, padding: "$space.10" }}>{children}</View>
        </ScrollView>
      </View>
      {resolveResponsiveValue({
        base: (
          <Pressable
            sx={{ position: "absolute", bottom: 10, zIndex: 9, right: 10 }}
            onPress={() => setShowSidebar(true)}
          >
            <Image alt="open sidebar" src={menuSvg} />
          </Pressable>
        ),
        md: null,
      })}
    </View>
  );
};
