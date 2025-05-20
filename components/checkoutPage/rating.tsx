import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '@/constants/color'

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
      color: colors.tirdColor,
      fontSize: 16,
      fontWeight: '600'
   }
})