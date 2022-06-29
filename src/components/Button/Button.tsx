import { Text, Pressable, StyleSheet } from "react-native";

type ButtonPropsType = {
  text: string;
  onPress?: () => void;
};

export const Button = ({ text, onPress }: ButtonPropsType) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    backgroundColor: "#ffff",
  },
  buttonText: {
    color: "#e01313",
    fontWeight: "bold",
  },
});
