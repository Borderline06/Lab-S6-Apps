import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button } from "react-native";

const Login = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    // Limpiar los campos
    setUsername("");
    setPassword("");
  }, [onLoginSuccess]);

  const handleLogin = () => {
    // login exitoso
    if (username && password) {
      onLoginSuccess(username);
    } else {
      console.log("Por favor, complete ambos campos.");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Usuario"
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Contraseña"
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

export default Login;
