import { View, TouchableOpacity, StyleSheet, Text} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { router } from 'expo-router'
interface ButtonProps{
  title: string
  route: string
}

export default function Button({title, route}: ButtonProps) {

  const handleLogin = () => {
    router.navigate(route as any)
  }
  return (
    <TouchableOpacity style = {styles.buttonContainer} onPress={handleLogin}>
      <Text style={styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  buttonContainer: {
    alignItems: "center",
    backgroundColor: "#1D61E7",
    padding: 14,
    width: "100%",
    borderRadius: 10,
  },
  title: {
    color: "white",
    fontSize: 12,
    fontWeight: "500",
    fontFamily: "inter"
  }
})