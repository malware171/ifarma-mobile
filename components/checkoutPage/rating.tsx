import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface RatingProps{
   pontuation: number
}

export default function Rating({pontuation}: RatingProps) {

  return (
    <Text style = {styles.text}>{pontuation}</Text>
  )
}

const styles = StyleSheet.create({
   text: {
      color: "#5E5E5E",
      fontSize: 16,
      fontWeight: '600'
   }
})