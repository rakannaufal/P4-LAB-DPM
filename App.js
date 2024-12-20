import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles/style";
import ScoreBoard from "./components/ScoreBoard";
import ResetButton from "./components/ResetButton";
import WinnerMessage from "./components/WinnerMessage";

const App = () => {
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const increaseScoreA = () => setScoreA(scoreA + 1);
  const decreaseScoreA = () => setScoreA(scoreA > 0 ? scoreA - 1 : 0);
  const increaseScoreB = () => setScoreB(scoreB + 1);
  const decreaseScoreB = () => setScoreB(scoreB > 0 ? scoreB - 1 : 0);

  const resetScore = () => {
    setScoreA(0);
    setScoreB(0);
  };

  const checkWinner = () => {
    if (scoreA === 10) return "Tim A Menang!";
    if (scoreB === 10) return "Tim B Menang!";
    return null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Skor Pertandingan Futsal</Text>

      <View style={styles.card}>
        <ScoreBoard scoreA={scoreA} scoreB={scoreB} />
      </View>

      <View style={styles.matchInfo}>
        <View style={styles.scoreButtons}>
          <Text style={styles.teamName}>Tim A</Text>
          <TouchableOpacity style={styles.scoreButton} onPress={increaseScoreA}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scoreButton} onPress={decreaseScoreA}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.scoreButtons}>
          <Text style={styles.teamName}>Tim B</Text>
          <TouchableOpacity style={styles.scoreButton} onPress={increaseScoreB}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scoreButton} onPress={decreaseScoreB}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ResetButton resetScore={resetScore} />

      <WinnerMessage message={checkWinner()} />
    </View>
  );
};

export default App;
