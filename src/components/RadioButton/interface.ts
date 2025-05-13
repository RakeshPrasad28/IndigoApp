import React from "react";
import { RadioButtonProps } from "react-native-radio-buttons-group";

export interface RadioButtonComponentProps {
  selectedRadioId: string;
  setSelectedRadioId: React.Dispatch<React.SetStateAction<string>>;
  name: string;
  size?: number;
  disabled?: boolean | null | undefined;
}
