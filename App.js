import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import Login from "./components/Login";
import CounterClock from "./components/CounterClock";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!isLoggedIn ? (
        <Login onLoginSuccess={handleLoginSuccess} />
      ) : (
        <CounterClock />
      )}
    </SafeAreaView>
  );
}
