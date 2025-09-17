import React from "react";
import { SafeAreaView } from "react-native";
import CounterClock from "./components/CounterClock";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CounterClock />
    </SafeAreaView>
  );
}
