import { RootState } from "@redux/store";
import Colors from "@utils/Colors";
import Fonts from "@utils/Fonts";
import { screenHeight, screenWidth } from "@utils/Scaling";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

export const styles = () => {
  const theme = useSelector((state: RootState) => state.theme);
  return StyleSheet.create({
    text: {
      fontSize: 18,
      marginHorizontal: screenWidth * 0.024,
      marginTop: 20,
      color: theme.mode === "dark" ? Colors.CLR_WHITE : Colors.CLR_BLACK,
    },
    tableContainer: {
      marginHorizontal: screenWidth * 0.1,
      marginVertical: 6,
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
      paddingVertical: 7,
    },
    tableBodyCellText: {
      fontSize: 16,
      color: Colors.CLR_WHITE,
      textAlign: "left",
      fontFamily: Fonts.OpenSansRegular,
      padding: 3,
      paddingHorizontal: 10,
    },
    primaryButton: {
      backgroundColor: theme.mode==="dark" ? Colors.CLR_DARK_CHARCOAL : Colors.CLR_MIDNIGHT,
      borderLeftColor: theme.mode==="dark" ? Colors.CLR_CORNBLUE : Colors.CLR_GALACTIC,
      borderBottomColor: theme.mode==="dark" ? Colors.CLR_CORNBLUE : Colors.CLR_GALACTIC,
      width: screenWidth * 0.17,
      marginVertical: 30,
    },
    input: {
      width: screenWidth * 0.77,
      height: screenHeight * 0.15,
      fontSize: 14,
      textAlign: "left",
      paddingHorizontal: 10,
      // marginHorizontal: 5,
      fontWeight: "300",
      color: Colors.CLR_BLACK,
      fontFamily: Fonts.OpenSansRegular,
      justifyContent: "flex-start",
      backgroundColor: theme.mode==="dark" ? Colors.CLR_WHITE : Colors.CLR_SATIN,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: Colors.CLR_SPANISH_GREY,
    },
    mainContainer: {
      flexDirection: "row",
      gap: 7,
      marginVertical: 30,
    },
    tabContainer: {
      flex: 1,
    },
    tabItemContainer: {
      backgroundColor: theme.mode==="dark" ? Colors.CLR_SUVA_GRAY : Colors.CLR_GALACTIC,
      margin: 2,
      padding: 10,
    },
    tabText: {
      fontSize: 16,
      color: Colors.CLR_WHITE,
      fontFamily: Fonts.OpenSansRegular,
      textAlign: "center",
    },
    formContainer: {
      flex: 7.5,
      marginHorizontal: 5,
    },
    overallContainer: {
      width: "100%",
    },
    buttonContainer: {
      flexDirection: "row",
      gap: 10,
      justifyContent: "center",
      alignItems: "center",
    },
    modalContainer: {
      flex: 1,
      justifyContent: "flex-start", // Moves the modal to the top
      alignItems: "center",
      marginTop: 100, // Adjust this value to position it higher
      backgroundColor: "rgba(0, 0, 0, 0.3)", // Optional background dim
    },
    modalContent: {
      backgroundColor: "white",
      // padding: 10,
      paddingTop: 15,
      paddingBottom: 10,
      borderRadius: 10,
      alignItems: "center",
      width: "33%",
    },
    modalText: {
      paddingTop: 8,
      fontSize: 16,
      fontWeight: "500",
      marginBottom: 10,
    },
    okButton: {
      // backgroundColor: "#007bff",
      padding: 3,
      borderRadius: 5,
    },
    okButtonText: {
      color: "#458aff",
      fontSize: 15,
      fontWeight: "600",
    },
    modalLine: {
      height: 0.5,
      backgroundColor: "gray",
      width: "100%",
      marginVertical: 10,
    }


  });
};



