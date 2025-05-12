import { StyleSheet } from "react-native";


// import { useSelector } from "react-redux";
import Colors from "@utils/Colors";
import { screenHeight, screenWidth } from "@utils/Scaling";
import Fonts from "@utils/Fonts";

export const styles = () => {
  //getting theme mode from reducer
  // const { theme, isDarkMode } = useSelector(
  //   (state: any) => state?.darkModeReducer
  // );

  return StyleSheet.create({
    headerContainer: {
      paddingLeft: screenWidth * 0.01,
      backgroundColor: Colors.CLR_NORTHBLUE,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    headerInnerContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: screenWidth * 0.02,
    },
    usernameContainer: {
      backgroundColor: Colors.CLR_WHITE,
      padding: 3,
      resizeMode: "contain",
      paddingHorizontal: screenWidth * 0.02,
      borderRadius: 10,
    },
    usernameText: {
      fontSize: 16,
      color: Colors.CLR_GALACTIC,
      // fontWeight: "300",
      fontFamily: Fonts.OpenSansRegular,
    },
    usernameInnerText: {
      textTransform: "uppercase",
      color:  Colors.CLR_PERFECT_DARK,
      fontFamily: Fonts.OpenSansRegular,
    },
    logoutButtonContainer: {
      backgroundColor: Colors.CLR_GALACTIC,
      padding: screenWidth * 0.015,
    },
    itemContainer: {
      padding: 10,
      // paddingVertical: 20,
      borderBottomWidth: 0.3,
      borderBottomColor: "gray",
      // flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      // gap: 30,
      paddingTop: 0,
      height: screenWidth > screenHeight ? 60 : 50,
    },
    itemText: {
      fontSize: 18,
      fontFamily: Fonts.OpenSansSemiBold,
      color: Colors.CLR_SQUANT,
      fontWeight: "800",
    },
  });
};
