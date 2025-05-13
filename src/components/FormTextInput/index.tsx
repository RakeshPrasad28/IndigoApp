import React, { useEffect, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { TextInputProps } from "./interface";
import { styles } from "./styles";
import { screenHeight, screenWidth } from "@utils/Scaling";

const TextInputComponent = ({
  value,
  handleChange,
  capitalize = true,
  width: TextInputWidth,
  height: TextInputHeight,
  placeHolder,
  name,
  multiline = false,
  type = "default",
  customStyles,
  editable,
  prefix,
  maxLength,
  compress = false,
}: TextInputProps) => {
  const textInputStyles = styles();

  const displayValueNormal = `${value || ""}`;
  const [isFocused, setIsFocused] = useState(false);
  const [displayValue, setDisplayValue] = useState(value);
  const limitToCompress = prefix ? 12 : 14;

  useEffect(() => {
    if (!isFocused && value?.length > limitToCompress && screenWidth < screenHeight) {
      setDisplayValue(`${value?.slice(0, limitToCompress)}...`);
    } else {
      setDisplayValue(value);
    }
  }, [isFocused, value, screenWidth]);

  const handleTextChange = (text: string) => {
    const finalValue = capitalize ? text.toUpperCase() : text;
    handleChange(name, finalValue);
  };

  const customTextInput = (
    <TextInput
      style={[
        !prefix && textInputStyles.inputContainerText,
        { flex: 1 },
        textInputStyles.inputTextProperties,
        prefix === undefined && customStyles,
        screenWidth > screenHeight
          ? { height: TextInputHeight || screenHeight * 0.052 }
          : { height: TextInputHeight || screenHeight * 0.034 },
        screenWidth > screenHeight
          ? { width: TextInputWidth || screenWidth * 0.25 }
          : { width: TextInputWidth || screenWidth * 0.25 },
        { alignSelf: "stretch" },
      ]}
      placeholder={placeHolder}
      onChangeText={handleTextChange}
      multiline={multiline}
      value={compress ? displayValue : displayValueNormal}
      keyboardType={type}
      placeholderTextColor="gray"
      editable={editable}
      autoCorrect={false}
      maxLength={maxLength}
      onFocus={compress ? () => setIsFocused(true) : undefined}
      onBlur={compress ? () => setIsFocused(false) : undefined}
    />
  );

  return (
    <View
      style={[
        textInputStyles.inputContainer,
        customStyles,
        screenWidth > screenHeight
          ? { width: TextInputWidth || screenWidth * 0.25 }
          : { width: TextInputWidth || screenWidth * 0.25 },
      ]}
    >
      {prefix ? (
        <View
          style={[
            textInputStyles.inputContainerText,
            {
              flexDirection: "row",
              alignItems: "center",
            },
          ]}
        >
          <Text style={textInputStyles.inputTextProperties}>{prefix} </Text>
          {customTextInput}
        </View>
      ) : (
        customTextInput
      )}
    </View>
  );
};

export default TextInputComponent;
