import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import colors from '@/constants/color';

interface QuantitySelectorProps {
  amount: number;
  onAdd: () => void;      
  onRemove: () => void;
}

export default function QuantitySelector({ amount, onAdd, onRemove} : QuantitySelectorProps) {

   

  return (
    <View style={styles.buttonAddProdutsContainer}>
      <TouchableOpacity testID='button-less' onPress={onRemove}>
         <Ionicons name="remove-circle" size={20} color={colors.icons.plus_less} />
      </TouchableOpacity>
      <Text testID="display-amout">{amount}</Text>
      <TouchableOpacity testID='button-plus' onPress={onAdd}>
         <FontAwesome name="plus-square-o" size={20} color={colors.icons.plus_less} />
      </TouchableOpacity>
   </View>
  )
}

const styles = StyleSheet.create({
   buttonAddProdutsContainer: {
      flexDirection: "row",
      alignContent: 'center',
      gap: 10
   },
})