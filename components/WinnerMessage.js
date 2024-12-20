import React from "react";
import { Text } from "react-native";
import { styles } from "../styles/style";

const WinnerMessage = ({ message }) => {
  if (!message) return null;
  return <Text style={styles.winnerText}>{message}</Text>;
};

export default WinnerMessage;
