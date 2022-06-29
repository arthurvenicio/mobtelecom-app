import { View, StyleSheet, TextInput } from "react-native";
export const LoginArea = (): JSX.Element => {
  return (
    <>
      <View style={styles.menu}>
        <TextInput
          style={styles.input}
          placeholder="CPF ou CNPJ"
          placeholderTextColor="#ffffffc5"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ffffffc5"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  menu: {
    padding: 10,
    color: "#ffff",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    gap: 5,
  },
  title: {},
  input: {
    borderColor: "#fff",
    padding: 10,
  },
});
