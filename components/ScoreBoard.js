import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles/style";

const ScoreBoard = ({ scoreA, scoreB }) => {
  return (
    <View style={styles.matchInfo}>
      <Text style={styles.teamName}>Tim A {scoreA}</Text>
      <Text style={styles.teamName}>Tim B {scoreB}</Text>
    </View>
  );
};

export default ScoreBoard;
