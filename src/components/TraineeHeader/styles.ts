import Fonts from "@utils/Fonts";
import Colors from "@utils/Colors";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { fontR, screenHeight, screenWidth } from "@utils/Scaling";
import { RootState } from "@redux/store";

export const styles = () => {
  const theme = useSelector((state:RootState)=>state.theme)

  return StyleSheet.create({
    mainContainer: {
      flexDirection: "row",
      gap: 10,
      alignItems: "center",
    },
    iconContainer: {
      borderRadius: 9999,
      borderWidth: 2,
      borderColor: theme.mode==="dark" ? Colors.CLR_WHITE : Colors.CLR_GALACTIC,
      width: screenWidth * 0.065,
      padding: 5,
      height: screenWidth > screenHeight ? screenHeight * 0.06 : screenHeight * 0.045,
      // marginLeft: 10,
    },
    icon: {
      alignSelf: "center",
    },
    name: {
      fontSize: 17,
      color: theme.mode==="dark" ? Colors.CLR_WHITE : Colors.CLR_GALACTIC,
      marginVertical: 6,
      textTransform: "uppercase",
      fontFamily: Fonts.OpenSansRegular,
      flexWrap: "wrap",
      maxWidth: screenWidth * 0.5,
    },
    designation: {
      fontFamily: Fonts.OpenSansSemiBold,
      color: theme.mode==="dark" ? Colors.CLR_WHITE : Colors.CLR_CARBON,
      fontWeight: "800",
      fontSize: fontR(10),
      textTransform: "capitalize",
    },
  });
};
