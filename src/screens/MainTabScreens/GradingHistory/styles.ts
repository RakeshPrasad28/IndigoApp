import Colors from "@utils/Colors";
import Fonts from "@utils/Fonts";
import { screenHeight, screenWidth } from "@utils/Scaling";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export const styles = () => {
const theme = useSelector((state: any) => state.theme);
  return StyleSheet.create({
    text: {
      fontSize: screenWidth * 0.018,
      marginHorizontal: screenWidth * 0.011,
      fontFamily: Fonts.OpenSansRegular,
      color: Colors.CLR_CARBON,
      // textDecorationLine: "underline",
    },
    headingText: {
      fontSize: screenWidth * 0.025,
      // marginHorizontal: width * 0.011,
      fontFamily: Fonts.OpenSansRegular,
      color: Colors.CLR_WHITE,
      // alignSelf: "center",
      textAlign: "center",
    },
    crossIcon: {
      position: "absolute",
      right: 14,
      top: 10,
    },
    mainContainer: {
      backgroundColor: theme.modal==="dark" ? Colors.CLR_SQUANT : "#027bff",
      paddingHorizontal: 15,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 8,
    },
    renderContainer: {
      flexDirection: "row",
      backgroundColor: theme.modal==="dark"
        ? Colors.CLR_PHILIPPINE_SILVER
        : Colors.CLR_CORNBLUE,
      padding: 10,
      borderRadius: 8,
      width: "100%",
      marginLeft: -30,
      alignItems: "center",
    },
    tableContainer: {
      marginHorizontal: screenWidth * 0.01,
      marginVertical: 4,
      width: screenWidth * 0.96,
      alignSelf: "center",
      marginBottom: screenHeight * 0.06,
    },
    tableHeaderContainer: {
      backgroundColor: Colors.CLR_GALACTIC,
    },
    tableHeaderContainerText: {
      fontSize: screenWidth * 0.019,
      color: "white",
      textAlign: "center",
      fontFamily: Fonts.OpenSansRegular,
    },
    pdfView: {
      flexGrow: 1,
      justifyContent: "flex-start",
      alignItems: "center",
    },
    // pdf modal
    modalContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
      width: "90%",
      height: "92%",
      backgroundColor: theme.modal==="dark"
        ? Colors.CLR_PHILIPPINE_SILVER
        : Colors.CLR_WHITE,
      borderRadius: 10,
      overflow: "hidden",
    },
    pdf: {
      flex: 1,
    },
  });
};
