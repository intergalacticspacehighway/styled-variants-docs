import { ScrollView, View } from "react-native";
import { Sidebar } from "../Sidebar";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export const Layout = ({ children }: any) => {
  const route = useRouter();
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ y: 0, animated: false });
  }, [route.pathname]);

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
        <ScrollView
          ref={scrollRef}
          sx={{ height: "100%", padding: "$space.10" }}
        >
          {children}
        </ScrollView>
      </View>
    </View>
  );
};
