import { ScrollView, View } from "react-native";
import { Sidebar } from "../Sidebar";

export const Layout = ({ children }: any) => {
  return (
    <View
      sx={{
        flexDirection: "row",
        flex: 1,
        backgroundColor: "$colors.blueGray900",
        minHeight: "100%",
      }}
    >
      <View
        sx={{
          flex: 1,
        }}
      >
        <Sidebar />
      </View>
      <View sx={{ flex: 4, backgroundColor: "$colors.blueGray50" }}>
        <ScrollView>{children}</ScrollView>
      </View>
    </View>
  );
};
