import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const TodoList = ({ item, setList }) => {
  const handleRemove = (key) => {
    setList((prevState) => {
      return prevState.filter((list) => list.key !== key);
    });
  };

  return (
    <TouchableOpacity onPress={() => handleRemove(item.key)}>
      <Text style={styles.content}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 7,
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "dashed",
    borderColor: "#ff521b",
  },
});

export default TodoList;
