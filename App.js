import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import TodoNav from "./components/todoNav";
import TodoList from "./components/todoList";

export default function App() {
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

  return (
    <View style={styles.container}>
      <TodoNav />
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
