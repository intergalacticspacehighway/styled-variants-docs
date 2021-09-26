import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Pressable, Text, View } from "react-native";
import { StyledText } from "components/variants";

const links = [
  {
    label: "Quick Start",
    link: "/quick-start",
    description:
      "Steps to install styled variants in your react native project",
  },
  {
    label: "Variants",
    link: "/create-variant",
    description: "Steps to create styled variants in your react native project",
  },
  {
    label: "SX prop",
    link: "/sx-prop",
    description: "Discover sx prop for inline styling that is memoized",
  },
  {
    label: "How it works?",
    link: "/playground",
    description:
      "Try the transpilation playground to know what's happening under the hood",
  },
];

export default function Home() {
  return (
    <View>
      <Head>
        <title>React Native Styled Variants</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <View sx={{ flex: 1 }}>
        <StyledText h1 primary>
          React Native Styled Variants
        </StyledText>
        <StyledText
          secondary
          sx={{ fontSize: "$fontSizes.lg", marginTop: "$space.4" }}
        >
          Compile time interactive, responsive and theming utilities for React
          Native.
        </StyledText>
        <View
          sx={{
            flexWrap: "wrap",
            flexDirection: "row",
            marginTop: "$space.10",
          }}
        >
          {links.map((link) => {
            return (
              <Pressable
                key={link.link}
                //@ts-ignore - web only
                href={link.link}
                sx={{
                  marginRight: "$space.4",
                  marginTop: "$space.4",
                  borderRadius: 8,
                  padding: "$space.5",
                  paddingVertical: "$space.8",
                  maxWidth: 500,
                  width: "45%",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,

                  elevation: 2,
                }}
              >
                <StyledText h2>{link.label}</StyledText>
                <StyledText secondary sx={{ marginTop: "$space.6" }}>
                  {link.description}
                </StyledText>
              </Pressable>
            );
          })}
        </View>
      </View>

      <footer className={styles.footer}></footer>
    </View>
  );
}
