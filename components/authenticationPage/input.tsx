import { View, Text, StyleSheet, TextInput } from 'react-native'
import React, { useState } from 'react'


interface InputProps{
  placeholder: string
}

export default function Input({placeholder}: InputProps) {
  const [isFocused, setIsFocused] = useState(false)
  return (
    <TextInput
    style = {[style.container, isFocused && style.inputFocused ]}
    placeholder= {placeholder}
    onFocus={() => setIsFocused(true)}
    onBlur={() => setIsFocused(false)}
    />  
  )
}

const style = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 10,
    width: "100%",
    borderColor: "#EDF1F3",
    borderWidth: 1.5,
    fontFamily: "inter",
    fontSize: 11,
    color: "black"
  },
  inputFocused: {
    borderColor: '#1D61E7',
    borderWidth: 2,
  },
})