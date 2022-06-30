import { Dispatch, SetStateAction } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";

type AreaPropsType = {
  data: LoginDataType;
  setData: Dispatch<SetStateAction<LoginDataType>>;
};

type LoginDataType = {
  document: string;
  password: string;
};

export const LoginArea = ({ data, setData }: AreaPropsType): JSX.Element => {
  const handleOnChangeDocument = (value: string) => {
    setData({ ...data, document: value });
  };

  const handleOnChangePassword = (value: string) => {
    setData({ ...data, password: value });
  };

  return (
    <>
      <View style={styles.menu}>
        <TextInput
          style={styles.input}
          placeholder="CPF ou CNPJ"
          placeholderTextColor="#ffffffc5"
          onChangeText={handleOnChangeDocument}
          keyboardType="numeric"
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
    borderColor: "#fff",
    padding: 10,
  },
});
