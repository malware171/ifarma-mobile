import { View, Text, StyleSheet, TextInput, TextInputProps,} from "react-native";
import React, { useState } from "react";

interface InputProps extends TextInputProps {
  placeholder: string;
}
export default function Input({...rest}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: any) => {
    setIsFocused(true);
    if (rest.onFocus) {
      rest.onFocus(e);
    }
  };

  const handleBlur = (e: any) => {
    setIsFocused(false);
    if (rest.onBlur) {
      rest.onBlur(e);
    }
  };

  return (
    <TextInput
      {...rest}
      style={[style.container, isFocused && style.inputFocused]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      placeholderTextColor="#A9A9A9"
    />
  );
}

const style = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 10,
    width: "100%",
    backgroundColor: "#F7F7F7",
    borderColor: "#E8E8E8",
    borderWidth: 1.5,
    fontFamily: "inter",
    fontSize: 14,
    color: "black",
  },
  inputFocused: {
    borderColor: "#1D61E7",
    borderWidth: 2,
    backgroundColor: "#FFF",
  },
});