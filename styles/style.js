import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8fe", // Warna latar belakang biru muda
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#2c3e50", // Warna header gelap
    textShadowColor: "#ecf0f1",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  matchInfo: {
    flexDirection: "row",
    marginBottom: 30,
    justifyContent: "space-around",
    width: "100%",
  },
  teamName: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 30,
    padding: 10,
    backgroundColor: "#3498db", // Warna biru untuk nama tim
    color: "white",
    borderRadius: 10,
    textAlign: "center",
    width: 100,
  },
  scoreButtons: {
    flexDirection: "column",
    alignItems: "center",
  },
  scoreButton: {
    width: 60,
    height: 60,
    backgroundColor: "#2ecc71", // Warna hijau untuk tombol
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    margin: 10,
  },
  buttonText: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: "#e74c3c", // Warna merah untuk tombol reset
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
  },
  resetButtonText: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  winnerText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#27ae60", // Warna hijau untuk pemenang
    marginTop: 30,
    textAlign: "center",
  },
  card: {
    padding: 20,
    marginBottom: 30,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5, // Untuk tampilan shadow di Android
  },
});
