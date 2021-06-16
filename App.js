import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Dimensions,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import TodoNav from "./components/TodoNav";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);

  const handleAdd = (val) => {
    if (val.length === 0) {
      Alert.alert("Sorry", "Please write something more than 0 letter", [
        { val: "all right" },
      ]);
    } else {
      setList((prev) => {
        return [
          ...prev,
          { name: val, key: Math.floor(Math.random() * 1000).toString() },
        ];
      });
    }
    setText("");
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container}>
        <ImageBackground
          source={require("./assets/image/task.png")}
          style={styles.background}
        />
        <View style={styles.content}>
          <TodoNav />
          <TodoInput handleAdd={handleAdd} setText={setText} text={text} />
          <View style={styles.list}>
            <FlatList
              data={list}
              renderItem={({ item }) => (
                <TodoList item={item} setList={setList} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
  },
  background: {
    position: "absolute",
    top: 0,
    left: 0,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    opacity: 0.2,
  },
  content: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 30,
  },
  list: {
    flex: 1,
    marginVertical: 30,
  },
});
