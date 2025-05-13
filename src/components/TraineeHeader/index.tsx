import React from "react";
import { View, Text } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { TraineeHeaderProps } from "./interface";
import { styles } from "./styles";
import { useSelector } from "react-redux";
import Colors from "@utils/Colors";
import { screenWidth } from "@utils/Scaling";
import { RootState } from "@redux/store";

export default function TraineeHeader({
  id,
  name,
  designation,
}: TraineeHeaderProps) {
  const traineeStyles = styles();
  const theme = useSelector((state:RootState)=>state.theme)

  return (
    <View style={traineeStyles.mainContainer}>
      <View style={traineeStyles.iconContainer}>
        <FontAwesome
          name="user"
          size={35}
          color={theme.mode==="dark" ? Colors.CLR_WHITE : Colors.CLR_GALACTIC}
          style={traineeStyles.icon}
        />
      </View>
      <View style={{ width: screenWidth * 0.5 }}>
        <Text style={traineeStyles.name}>
          {name} ({id})
        </Text>
        <Text style={traineeStyles.designation}>
          Designation - {designation}
        </Text>
      </View>
    </View>
  );
}
