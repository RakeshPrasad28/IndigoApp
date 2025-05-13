import { StyleSheet } from "react-native";

import fonts from "utils/Constants/fonts";
import useDimensions from "utils/useDimension";
import colors from "utils/Constants/colors";

export const styles = () => {
  const { width, height } = useDimensions();

  return StyleSheet.create({
    container: {
      margin: width * 0.01,
      alignSelf: "center",
    },
    headerText: {
      fontSize: width * 0.03,
      textAlign: "center",
      textDecorationLine: "underline",
      padding: 5,
      fontWeight: "600",
      color: colors.CLR_BLACK,
      fontFamily: fonts.OpenSansRegular,
    },
    radioButtonsContainer: {
      flexDirection: "row",
      gap: width * 0.01,
      margin: width * 0.015,
    },
    radioButtonLabelText: {
      fontSize: width * 0.02,
      textAlign: "center",
      fontWeight: "600",
      color: colors.CLR_BLACK,
      fontFamily: fonts.OpenSansRegular,
    },
  });
};
