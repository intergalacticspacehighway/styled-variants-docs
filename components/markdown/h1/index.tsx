import React from "react";
import { StyledText } from "components/variants";

export const H1 = (props: any) => {
  console.log("hey man ", props);
  return <StyledText sx={{ color: "tomato" }} {...props} />;
};
