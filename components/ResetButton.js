import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "../styles/styles";

const ResetButton = ({ resetScore }) => {
  return (
    <TouchableOpacity style={styles.resetButton} onPress={resetScore}>
      <Text style={styles.resetButtonText}>Reset</Text>
    </TouchableOpacity>
  );
};

export default ResetButton;
