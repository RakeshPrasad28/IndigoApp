import Colors from "@utils/Colors";
import Fonts from "@utils/Fonts";
import { screenWidth } from "@utils/Scaling";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export const styles = () => {
  const theme = useSelector((state: any) => state.theme);

  return StyleSheet.create({
    buttonContainer: {
      paddingVertical: 7,
      paddingHorizontal: screenWidth * 0.015,
      flexDirection: "row",
      alignItems: "center",
      backgroundColor: theme.mode==="dark" ? Colors.CLR_SQUANT : Colors.CLR_CORNBLUE,
      gap: 15,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: Colors.CLR_MIRROR_LAKE,
      // borderBottomWidth: 4,
      borderBottomColor: Colors.CLR_MIRROR_LAKE,
      justifyContent: "center",
    },
    buttonContainerText: {
      fontSize: 16,
      color: theme.mode==="dark" ? "white" : Colors.CLR_NORTHBLUE,
      fontFamily: Fonts.OpenSansRegular,
      textAlign: "center",
    },
  });
};
