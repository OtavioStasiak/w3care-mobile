import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.42)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  container: {
    width: '85%',
    backgroundColor: "#FFF",
    borderRadius: 4,
    height: '30%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontWeight: 'bold',
    color: "#3A506B",
    fontSize: 17,
  },
  input: {
    width: '90%',
    paddingVertical: 10,
    borderRadius: 4,
    borderWidth: 2,
    paddingLeft: 10,
    borderColor: "#3A506B",
    color: "#3A506B",
  },
  button: {
    backgroundColor: "#3A506B",
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: "#FFF",
    fontWeight: 'bold',
  },
});