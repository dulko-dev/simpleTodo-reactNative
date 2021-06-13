import React from "react";
import { View, TextInput, StyleSheet, Button } from "react-native";

const TodoInput = ({ handleAdd, setText, text }) => {

  const handleText = (val) => {
    setText(val);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="click to add task"
        onChangeText={(val) => handleText(val)}
        value={text}
      />
      <Button color='#2a2a72' title="add todo" onPress={() => handleAdd(text)} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    color: "#000500",
    paddingTop: 20,
    borderBottomWidth: 1,
    borderColor: "#545454",
    marginHorizontal: 30,
    marginBottom: 30,
  },
});

export default TodoInput;
