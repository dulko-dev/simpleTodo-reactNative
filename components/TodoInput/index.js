import React from "react";
import { View, TextInput, Pressable, Text} from "react-native";
import styles from "./style";

const TodoInput = ({ handleAdd, setText, text }) => {

  const handleText = (val) => {
    setText(val);
  };

  return (
    <View style={styles.content}>
      <TextInput
        style={styles.input}
        placeholder="click to add task"
        onChangeText={(val) => handleText(val)}
        value={text}
      />
      <Pressable style={styles.button} onPress={() => handleAdd(text)}>
        <Text style={styles.btnText}>Add task</Text>
      </Pressable>
    </View>
  );
};



export default TodoInput;
