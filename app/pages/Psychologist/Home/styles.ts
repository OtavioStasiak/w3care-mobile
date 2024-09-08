import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    backgroundColor: "#6FFFE9",
    height: 80,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#000",
  },
  buttonContainer: {
    width: "90%",
    marginTop: 50,
  },
  psychologistContainer: {
    width: "90%",
    borderWidth: 2,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
    paddingLeft: 5,
  },
});
