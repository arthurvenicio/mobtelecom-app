import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, View } from "react-native";
import LoginArea from "./src/components/LoginArea";
import Button from "./src/components/Button";

export default function App() {
  const handleOnPress = () => {
    Alert.alert("No momentos não é possivel realizar o seu login!");
  };
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Text style={styles.title}>Area do Cliente</Text>
      <LoginArea />
      <Button text="Entrar" onPress={handleOnPress} />
      <Text style={styles.footer}>
        Mob Telecom - {new Date().getFullYear()}
      </Text>
    </View>
  );
}

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
});
