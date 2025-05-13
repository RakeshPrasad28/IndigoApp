import React from "react";
import { Text, View } from "react-native";
import { RadioButtonComponentProps } from "./interface";
import RadioGroup, { RadioButton } from "react-native-radio-buttons-group";
import { styles } from "./styles";
import useDimensions from "utils/useDimension";
import { useSelector } from "react-redux";

const RadioButtonComponent = ({
  selectedRadioId,
  setSelectedRadioId,
  name,
  size = 25,
  disabled,
}: RadioButtonComponentProps) => {
  const radioButtonStyles = styles(); // this because styles is a function which return styling component
  const { width, height } = useDimensions();
  //getting theme mode from reducer
  const { isDarkMode } = useSelector((state: any) => state?.darkModeReducer);
  return (
    <RadioButton
      id={name}
      value={name}
      onPress={() => setSelectedRadioId(name)}
      selected={selectedRadioId === name}
      borderColor={selectedRadioId === name ? "blue" : "gray"}
      color={isDarkMode ? "white" : "blue"}
      size={size}
      disabled={disabled}
    />
  );
};

export default RadioButtonComponent;
