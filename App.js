import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "red" }} />
      <View style={{ flex: 1.5, backgroundColor: "blue" }} />
      <View style={{ flex: 1, backgroundColor: "pink" }} />
    </View>
  );
}
