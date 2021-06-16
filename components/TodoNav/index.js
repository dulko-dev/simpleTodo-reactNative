import React from "react";
import {View, Text } from "react-native";
import styles from './style';

const TodoNav = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Your's task today</Text>
    </View>
  );
};



export default TodoNav;
