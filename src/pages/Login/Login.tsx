import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import Button from "../../components/Button";
import LoginArea from "../../components/LoginArea";
import { useNavigation } from "@react-navigation/native";

const FAKE_DOCUMENT = "12345";
const FAKE_PASSWORD = "123";

export const Login = (): JSX.Element => {
  const [data, setData] = useState({
    document: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navegation = useNavigation();

  const handleOnLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    if (data.document === FAKE_DOCUMENT && data.password === FAKE_PASSWORD) {
      navegation.navigate("HomePage" as never);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <ActivityIndicator size="large" color="#ffff" />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Area do Cliente</Text>
      <LoginArea data={data} setData={setData} />
      <Button text="Entrar" onPress={() => handleOnLogin()} />
      <Text style={styles.footer}>
        Mob Telecom - {new Date().getFullYear()}
      </Text>
      <Text style={styles.author}>Created by 4devs.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e01313",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    color: "#ffffff",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "transparent",
  },
  footer: {
    fontSize: 12,
    fontWeight: "500",
    color: "#ffff",
    padding: 8,
  },
  author: {
    fontSize: 10,
    fontWeight: "500",
    color: "#ffff",
    paddingTop: 3,
  },
});
