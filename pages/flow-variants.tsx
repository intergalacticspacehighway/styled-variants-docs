import { Code } from "components/Code";
import { StyledText } from "components/variants";
import { View } from "react-native";

export default function FlowVariant() {
  return (
    <View sx={{ paddingLeft: "$space.48" }}>
      <StyledText size="2xl" bold primary sx={{ marginTop: "$space.6" }}>
        Variants transpile flow
      </StyledText>

      <StyledText size="xl" bold primary sx={{ marginTop: "$space.4" }}>
        1. Code
      </StyledText>
      <Code>
        {`
          const StyledText = createVariant(Text, {
            color: "$colors.blueGray900",
            fontSize: "$fontSizes.md",
            variants: {
              primary: {
                true: { color: "$colors.primary" },
              },
              size: {
                xl: { fontSize: "$fontSizes.xl" },
                "2xl": { fontSize: "$fontSizes.2xl" },
              },
            },
          });
          `}
      </Code>

      <StyledText size="xl" bold primary sx={{ marginTop: "$space.4" }}>
        2. Flatten styles and resolves theme tokens
      </StyledText>
      <Code>
        {`
          const styles = {
            baseStyle: {
              color: theme["colors"]["blueGray900"],
              fontSize: theme["fontSizes"]["md"]
            },
            primary_true: {
              color: theme["colors"]["primary"]
            },
            size_xl: {
              fontSize: theme["fontSizes"]["xl"]
            },
            size_2xl: {
              fontSize: theme["fontSizes"]["2xl"]
            }
          }
          `}
      </Code>
      <StyledText size="xl" bold primary sx={{ marginTop: "$space.4" }}>
        3. Generates a component
      </StyledText>
      <Code>
        {`
          const StyledText = _rnStyledVariants__react.forwardRef((props, ref) => {
            const { style: propStyle, primary, size, ...rest } = props;
            
            useTheme();
          
            const styleSheet = useStyleSheet(
              "test",
              ({ theme }) => ({
                baseStyle: {
                  color: theme["colors"]["blueGray900"],
                  fontSize: theme["fontSizes"]["md"],
                },
                primary_true: {
                  color: theme["colors"]["primary"],
                },
                size_xl: {
                  fontSize: theme["fontSizes"]["xl"],
                },
                size_2xl: {
                  fontSize: theme["fontSizes"]["2xl"],
                },
              }),
              ["theme"]
            );
          
            const style = useMemo(() => {
              return [
                styleSheet.baseStyle,
                styleSheet[\`primary_\${primary}\`],
                styleSheet[\`size_\${size}\`],
                propStyle,
              ];
            }, [styleSheet, primary, size, propStyle]);
          
            return (
              <Text ref={ref} style={style} {...rest} />
            );
          });
          
          `}
      </Code>
    </View>
  );
}
