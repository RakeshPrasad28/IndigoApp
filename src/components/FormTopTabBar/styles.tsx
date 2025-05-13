import { StyleSheet } from "react-native";
import Fonts from "@utils/Fonts";
import Colors from "@utils/Colors";
import { useSelector } from "react-redux";

export const styles = () => {
  const theme = useSelector((state: any) => state.theme);
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      backgroundColor: theme.mode==="dark"
        ? Colors.CLR_PICHOLINE
        : Colors.CLR_BLUE_HUE,
      justifyContent: "space-evenly",
    },
    text: {
      fontSize: 25,
      textAlign: "center",
      margin: 5,
    },
    singleTabView: {
      padding: 8,
      borderColor: Colors.CLR_SKY,
      paddingHorizontal: "5%",
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      justifyContent: "space-between",
      // marginHorizontal: 10,
    },
    textStyle: {
      fontSize: 18,
      alignSelf: "center",
      justifyContent: "center",
      textAlign: "center",
      fontFamily: Fonts.OpenSansRegular,
    },
  });
};



