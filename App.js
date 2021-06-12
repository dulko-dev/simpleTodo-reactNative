import React from "react";
import { StyleSheet, Text, View } from "react-native";
import TodoNav from "./components/todoNav";

export default function App() {
  return (
    <View style={styles.container}>
      <TodoNav />
      <View style={styles.content}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 30,
  },
});
