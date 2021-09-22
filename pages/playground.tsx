import { StyledText } from "components/variants";
import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { createVariant } from "theme";
import Editor from "react-simple-code-editor";
//@ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import { useTheme } from "react-native-styled-variants";

const initialState = `
const App = () => {
    const renderIcon = <View sx={{ color: '$colors.maroon.1' }} />;
  
    return <>
      {list.map(item => {
        return <View sx={{margin: "$colors.blue", padding: {"@base" : 10, "@sm": 20} }} style={[{margin: 10}]} />
      })}
    </>
  }
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
        sx={{ flexDirection: { "@base": "column", "@lg": "row" }, flex: 1 }}
      >
        <View
          sx={{ flex: 1, borderColor: "$colors.blueGray300", borderWidth: 1 }}
        >
          <StyledText bold sx={{ margin: "$space.5" }}>
            Input
          </StyledText>
          <Editor
            value={text}
            onValueChange={(code) => setText(code)}
            highlight={(code) => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
              height: "100%",
            }}
          />
        </View>
        <View
          sx={{
            flex: 1,
            borderColor: "$colors.blueGray300",
            borderRightWidth: 1,
            borderTopWidth: 1,
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
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
              height: "100%",
            }}
          />
        </View>
      </View>
    </RenderClient>
  );
}
