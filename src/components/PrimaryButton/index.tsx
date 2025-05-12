import React, {useState} from 'react';
import {TouchableOpacity, Text, View, ViewStyle, TextStyle} from 'react-native';
import {styles} from './styles';

export interface PrimaryButtonProps {
  handlePress: () => void;
  text: string;
  customStyles?: ViewStyle;
  icon?: any;
  textStyles?: TextStyle;
  disabled?: boolean;
}

const PrimaryButton = ({
  handlePress,
  text,
  customStyles,
  icon,
  textStyles,
  disabled = false,
}: PrimaryButtonProps) => {
    // console.log(text,"good",icon)
  const [pressed, setPressed] = useState(false);
  const buttonStyles = styles();

  return (
    <TouchableOpacity
      style={[
        buttonStyles.buttonContainer,
        customStyles,
        disabled && {opacity: 0.3},
      ]}
      onPressIn={() => setPressed(true)}
      onPressOut={() => {
        setTimeout(() => {
          setPressed(false);
        }, 300);
      }}
      onPress={() => handlePress()}
      disabled={disabled}>
      <Text style={[buttonStyles.buttonContainerText, textStyles]}>{text}</Text>
      {icon}
    </TouchableOpacity>
  );
};

export default PrimaryButton;
