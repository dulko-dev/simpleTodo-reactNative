import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Alert,
  Dimensions,
  ImageBackground,
} from "react-native";

import TodoNav from "./components/TodoNav";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default function App() {
  const [text, setText] = useState("");
  const [list, setList] = useState([
    {
      name: "clean house",
      key: "1",
    },
    {
      name: "do shopping",
      key: "2",
    },
    {
      name: "do loundry",
      key: "3",
    },
  ]);

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
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/image/task.png")}
        style={styles.background}
      />
      <View style={styles.content}>
        <TodoNav />
        <TodoInput handleAdd={handleAdd} setText={setText} text={text} />
        <FlatList
          data={list}
          renderItem={({ item }) => <TodoList item={item} setList={setList} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
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
    paddingTop: 20,
    paddingHorizontal: 30,
  },
});
