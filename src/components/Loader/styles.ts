import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    // position: "absolute",
   top: 200,
    justifyContent: "center",
    alignItems: "center",
  },

  gif: {
    width: 100, // Adjust the size as needed
    height: 100,
    resizeMode: "contain",
    alignSelf: "center",
    backgroundColor : 'transparent'
  },
});
export default styles