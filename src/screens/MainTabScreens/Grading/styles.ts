import Colors from "@utils/Colors";
import Fonts from "@utils/Fonts";
import { screenHeight, screenWidth } from "@utils/Scaling";
import { StyleSheet } from "react-native";

import { useSelector } from "react-redux";

export const styles = () => {
  //getting theme mode from reducer
  const theme = useSelector((state: any) => state.theme);

  return StyleSheet.create({
    rootContainer: {
      flex: 1,
      backgroundColor: theme.mode==="dark" ? Colors.CLR_BLACK : Colors.CLR_WHITE,
    },
    text: {
      fontSize: 18,
      // marginHorizontal: width * 0.011,
      marginTop: 20,
      marginLeft: 20,
      color: theme.textColor,
    },
    tableContainer: {
      marginHorizontal: screenWidth * 0.015,
      marginVertical: 4,
      alignSelf: "center",
      height: screenWidth > screenHeight ? screenHeight * 0.635 : screenHeight * 0.77,
      alignItems: "center",
    },
    tableHeaderContainer: {
      backgroundColor: theme.mode==="dark"
        ? Colors.CLR_DARK_CHARCOAL
        : Colors.CLR_GALACTIC,
      padding: 10,
      marginBottom: 1,
    },
    tableHeaderContainerText: {
      fontSize: 17,
      color: "white",
      textAlign: "left",
      fontFamily: Fonts.OpenSansRegular,
    },
    tableBodyRow: {
      backgroundColor: theme.mode==="dark" ? Colors.CLR_SQUANT : Colors.CLR_NORTHBLUE,
      marginVertical: 1,
      paddingVertical: 3,
    },
    tableBodyCellText: {
      fontSize: 15,
      color: Colors.CLR_WHITE,
      textAlign: "left",
      fontFamily: Fonts.OpenSansRegular,
      padding: 5,
      paddingHorizontal: 8,
    },

    // offlineTableContainer: {
    //   marginHorizontal: 50,

    //   alignSelf: "center",

    //   alignItems: "center",

    // },
    // offlineHeader: {
    // backgroundColor: theme.mode==="dark"
    //   ? colors.CLR_DARK_CHARCOAL
    //   : colors.CLR_GALACTIC,
    //   padding: 10,
    //   marginBottom: 1,
    // },

    container: { padding: 16, overflow: "hidden" },
    head: {
      backgroundColor: theme.mode==="dark"
        ? Colors.CLR_DARK_CHARCOAL
        : Colors.CLR_GALACTIC, height: 46
    },
    wrapper: { flexDirection: "row" },
    title: { flex: 1, backgroundColor: "white" },
    row: { backgroundColor: "#FFFFC5", height: 46 },
    offlineText: { textAlign: "left", color: "black", fontSize: 17, paddingLeft: 8 }, // Added paddingLeft
    headertext: {
      textAlign: "left",
      color: "white",
      fontSize: 17,
      fontWeight: "600",
      paddingLeft: 8,
    }, // Added paddingLeft
    headingText: {
      textAlign: "left",
      color: "black",
      fontSize: 22,
      paddingLeft: 8,
      fontWeight: "400",
      marginBottom: 10,
    },
  });
};
