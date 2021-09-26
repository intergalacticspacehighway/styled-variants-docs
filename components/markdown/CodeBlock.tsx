import nightOwnLight from "prism-react-renderer/themes/shadesOfPurple";
import Highlight, { defaultProps } from "prism-react-renderer";
import { View } from "react-native";

export const CodeBlock = ({ children, className = "javascript" }: any) => {
  const language = className.replace(/language-/, "");

  return (
    <View sx={{ marginTop: "$space.1" }}>
      <Highlight
        {...defaultProps}
        theme={nightOwnLight}
        code={children}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre className={className} style={{ ...style }}>
            {tokens.slice(0, tokens.length - 1).map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </View>
  );
};
