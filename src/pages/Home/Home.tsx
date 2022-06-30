import React from "react";
import { StyleSheet, Text, View } from "react-native";

type UserData = {
  document: string;
  fullName: string;
  balance: number;
  amdress: string;
};

export const Home = ({ balance = 50 }: UserData): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.balances}>
          <Text style={styles.title}>Fatura Atual</Text>
          <Text style={styles.balance}>R${balance}</Text>
        </View>
        <View style={styles.invoices}>
          <Text style={styles.title}>Últimas faturas</Text>
        </View>
      </View>
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
  box: {
    backgroundColor: "#fff",
    width: "80%",
    height: "60%",
    paddingVertical: 25,
    paddingStart: 14,
    paddingEnd: 14,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#e01313c8",
  },
  balance: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  balances: {},
  invoices: {
    paddingTop: 5,
  },
});
