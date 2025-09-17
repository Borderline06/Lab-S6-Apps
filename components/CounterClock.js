import React, { useState, useEffect } from "react";
import { View, Text, Button } from "react-native";

const CounterClock = () => {
  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const [metaAlcanzada, setMetaAlcanzada] = useState(false);

  useEffect(() => {
    console.log("Bienvenido");

    // Reloj en tiempo real
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Mensaje al desmontar el componente
    return () => {
      console.log("Componente cerrado");
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    // Resetear contador al llegar a 10
    if (counter === 10) {
      setCounter(0);
    }

    // Mostrar mensaje al llegar a 5
    if (counter === 5 && !metaAlcanzada) {
      setMetaAlcanzada(true);
    }
  }, [counter]);

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <View style={{ padding: 20, alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Bienvenido</Text>
      <Text style={{ fontSize: 30, marginBottom: 10 }}>
        Contador: {counter}
      </Text>
      {metaAlcanzada && (
        <Text style={{ color: "green", fontSize: 24, marginBottom: 20 }}>
          ¡Meta Alcanzada!
        </Text>
      )}
      <Button title="Aumentar Contador" onPress={incrementCounter} />
      <Text style={{ marginTop: 20, fontSize: 20 }}>Hora: {time}</Text>
    </View>
  );
};

export default CounterClock;
