import React from "react";
import { StyleSheet, View, Text } from "react-native";

const TodoNav = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Your Todo List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    height: 40,
    marginTop:20,
    borderWidth: 1,
    borderRadius: 8,
  },
  title: {
    fontSize: 25,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default TodoNav;
