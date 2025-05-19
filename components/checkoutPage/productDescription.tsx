import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface ProductDescriptionProps{
   description: string
}
export default function ProductDescription({description}: ProductDescriptionProps) {
  return (
   <Text style={styles.text}>{description}</Text>
  )
}

const styles = StyleSheet.create({
   text: {
      fontSize: 16,
      color: "#5E5E5E"
   }
})