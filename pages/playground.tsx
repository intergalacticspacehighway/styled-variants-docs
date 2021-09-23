import { StyledText } from "components/variants";
import React, { useEffect, useState } from "react";
import { TextInput, View, ScrollView } from "react-native";
import { createVariant } from "theme";
import Editor from "react-simple-code-editor";
//@ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import { useTheme } from "../theme";

const initialState = `
import { Text } from "react-native";
import { createVariant } from "../theme";

export const StyledText = createVariant(Text, {
  color: "$colors.blueGray900",
  fontSize: "$fontSizes.md",
  variants: {
    sidebar: {
      true: {
        color: "$colors.blueGray100",
        paddingHorizontal: "$space.16",
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
`;

const fetchTransformedCode = async (data: any) => {
  try {
    const d = await fetch("/api/hello", { body: data, method: "POST" });
    const v = await d.json();
    if (d.status === 400) {
      return JSON.stringify(v.name);
    } else {
      return v.name;
    }
  } catch (e: any) {
    return JSON.stringify(e);
  }
};
const RenderClient = ({ children }: any) => {
  const [state, setState] = useState(false);
  useEffect(() => {
    setState(true);
  }, []);
  return state ? children : null;
};

export default function Playground() {
  const [text, setText] = React.useState(initialState);
  const theme = useTheme().theme;
  const [output, setOutput] = React.useState(initialState);

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchTransformedCode(text)
        .then((v) => setOutput(v))
        .catch((e) => setOutput(e));
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [text]);

  return (
    <RenderClient>
      <View
        nativeID="112"
        sx={{
          flexDirection: { "@base": "column", "@lg": "row" },
          flex: 1,
          height: "100%",
        }}
      >
        <ScrollView
          sx={{
            flex: 1,
            borderColor: "$colors.blueGray300",
            borderWidth: 1,
          }}
        >
          <StyledText bold sx={{ margin: "$space.5" }}>
            Input
          </StyledText>
          <Editor
            value={text}
            onValueChange={(code) => setText(code)}
            highlight={(code) => highlight(code, languages.js)}
            padding={theme.space[5]}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: theme.fontSizes.sm,
              height: "100%",
            }}
          />
        </ScrollView>
        <ScrollView
          sx={{
            flex: 1,
            borderColor: "$colors.blueGray300",
            borderBottomWidth: 1,
          }}
        >
          <StyledText bold sx={{ margin: "$space.5" }}>
            Output
          </StyledText>
          <Editor
            value={output}
            onValueChange={() => {}}
            highlight={(code) => highlight(code, languages.js)}
            padding={theme.space[5]}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: theme.fontSizes.sm,
              height: "100%",
            }}
          />
        </ScrollView>
      </View>
    </RenderClient>
  );
}
