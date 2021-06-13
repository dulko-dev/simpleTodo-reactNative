import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import TodoNav from "./components/todoNav";
import TodoList from "./components/todoList";
import TodoInput from "./components/todoInput";

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
    if (text.length === 0) return;
    setList((prev) => {
      return [
        ...prev,
        { name: val, key: Math.floor(Math.random() * 1000).toString() },
      ];
    });
    setText("");
  };

  return (
    <View style={styles.container}>
      <TodoNav />
      <View>
        <TodoInput handleAdd={handleAdd} setText={setText} text={text} />
      </View>
      <View style={styles.content}>
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
    marginTop: 20,
    marginHorizontal: 30,
  },
});
