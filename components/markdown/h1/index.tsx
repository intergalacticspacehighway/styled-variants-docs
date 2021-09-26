import React from "react";
import { StyledText } from "components/variants";
import { Text, View } from "react-native";

export const H1 = (props: any) => (
  <StyledText
    h1
    sx={{
      color: "$colors.blueGray800",
      marginTop: "$space.8",
    }}
    {...props}
  />
);

export const H2 = (props: any) => (
  <StyledText
    h2
    sx={{ color: "$colors.blueGray700", marginTop: "$space.4" }}
    {...props}
  />
);

export const H3 = (props: any) => (
  <StyledText
    h3
    sx={{ color: "$colors.blueGray400", marginTop: "$space.4" }}
    {...props}
  />
);

export const H4 = (props: any) => (
  <StyledText
    h4
    sx={{ color: "$colors.blueGray700", marginTop: "$space.4" }}
    {...props}
  />
);

export const P = (props: any) => (
  <StyledText
    sx={{ color: "$colors.blueGray800", marginTop: "$space.1" }}
    {...props}
  />
);

export const Li = (props: any) => (
  <StyledText
    sx={{ color: "$colors.blueGray800", marginTop: "$space.1" }}
    {...props}
  />
);

export const Ul = (props: any) => (
  <View sx={{ marginVertical: "$space.1" }} {...props} />
);

export const Link = (props: any) => (
  <Text sx={{ color: "$colors.primary" }} {...props} />
);
