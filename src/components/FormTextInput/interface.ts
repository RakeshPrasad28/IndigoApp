import React from "react";
import { NativeSyntheticEvent, TextInputSelectionChangeEventData } from "react-native";

type TypeProps =
  | "default"
  | "number-pad"
  | "decimal-pad"
  | "numeric"
  | "email-address"
  | "phone-pad"
  | "url";

export interface TextInputProps {
  value: string;
  handleChange: (name: string, value: string) => void;
  capitalize?: boolean;
  width?: number;
  height?: number;
  placeHolder?: string;
  name: string;
  type?: TypeProps;
  multiline?: boolean;
  editable?: boolean;
  customStyles?: any;
  prefix?: string;
  maxLength?: number | undefined
  compress?: boolean;
}
