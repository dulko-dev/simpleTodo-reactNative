import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./style";

const TodoList = ({ item, setList }) => {
  const handleRemove = (key) => {
    setList((prevState) => {
      return prevState.filter((list) => list.key != key);
    });
  };

  return (
    <TouchableOpacity onPress={() => handleRemove(item.key)}>
      <Text style={styles.content}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default TodoList;
