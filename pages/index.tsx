import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Platform, Pressable, View } from "react-native";
import { StyledText } from "components/variants";
import Link from "next/link";

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
        <meta
          name="description"
          content="Compile time interactive, responsive and theming style utilities for React Native."
        />
      </Head>

      <View sx={{ flex: 1, marginTop: "$space.10" }}>
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
            flexDirection: { "@base": "row", "@sm": "column", "@md": "row" },
            marginTop: "$space.10",
          }}
        >
          {links.map((link) => {
            return (
              <Link passHref href={link.link} key={link.link}>
                <View
                  sx={{
                    //@ts-ignore
                    cursor: Platform.select({ web: "pointer" }),
                    marginRight: "$space.4",
                    marginTop: "$space.4",
                    borderRadius: 8,
                    padding: "$space.5",
                    paddingVertical: "$space.8",
                    maxWidth: 500,
                    width: { "@base": "100%", "@md": "45%" },
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
                </View>
              </Link>
            );
          })}
        </View>
      </View>
    </View>
  );
}
