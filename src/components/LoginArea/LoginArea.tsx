import { Dispatch, SetStateAction, useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { TextInputMask } from "react-native-masked-text";

type AreaPropsType = {
  data: LoginDataType;
  setData: Dispatch<SetStateAction<LoginDataType>>;
};

type LoginDataType = {
  document: string;
  password: string;
};

export const LoginArea = ({ data, setData }: AreaPropsType): JSX.Element => {
  const [document, setDocument] = useState("");

  const handleOnChangeDocument = (value: string) => {
    const unmask = value.replace(/\D/g, "");
    setDocument(value);
    setData({ ...data, document: unmask });
  };

  const handleOnChangePassword = (value: string) => {
    setData({ ...data, password: value });
  };

  return (
    <>
      <View style={styles.menu}>
        <TextInputMask
          style={styles.input}
          type="cpf"
          placeholder="CPF"
          placeholderTextColor="#ffffffc5"
          value={document}
          onChangeText={handleOnChangeDocument}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ffffffc5"
          onChangeText={handleOnChangePassword}
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
    color: "#ffff",
    borderColor: "#fff",
    padding: 10,
  },
});
