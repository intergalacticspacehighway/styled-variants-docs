import { StyledText } from "components/variants";
import React, { useEffect, useState } from "react";
import { TextInput, View } from "react-native";
import { createVariant } from "theme";

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
        <View sx={{ flex: 1 }}>
          <StyledText bold sx={{ margin: "$space.5" }}>
            Input
          </StyledText>
          <CodeEditor
            onChangeText={(e) => setText(e)}
            value={text}
            multiline
            numberOfLines={50}
          />
        </View>
        <View sx={{ flex: 1 }}>
          <StyledText bold sx={{ margin: "$space.5" }}>
            Output
          </StyledText>
          <CodeEditor
            editable={false}
            value={output}
            multiline
            numberOfLines={50}
          />
        </View>
      </View>
    </RenderClient>
  );
}

const CodeEditor = createVariant(TextInput, {
  borderWidth: 1,
  borderColor: "$colors.primary",
  padding: "$space.5",
});
