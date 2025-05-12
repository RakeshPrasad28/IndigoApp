import React from "react";
import { ActivityIndicator, Image, View } from "react-native";
import styles from "./styles";
import { useSelector } from "react-redux";

const Loader = () => {
  const theme = useSelector((state: any) => state.theme);
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Images/Aeoplane.gif")}
        style={styles.gif}
      />
    </View>
  );
};
export default Loader;
