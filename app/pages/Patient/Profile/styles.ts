import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    width: "100%",
    backgroundColor: "#0B132B",
    height: 80,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 15,
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fff",
  },
  buttonContainer: {
    width: "90%",
    marginTop: 50,
  },
  arrowLeft: {
    position: "absolute",
    left: 15,
    bottom: 10,
  },
  label: {
    width: "90%",
    fontWeight: "bold",
    fontSize: 15,
  },
  data: {
    width: "90%",
    borderWidth: 1,
    paddingLeft: 5,
    paddingVertical: 10,
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 10,
  },
});
