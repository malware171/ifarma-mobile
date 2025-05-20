import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useLocalSearchParams } from 'expo-router'
import CardCheckout from '@/components/checkoutPage/cardCheckout';
import HeaderHomePage from '@/components/headerHomePage';



export default function ProductId() {
 const { imgUrl, productName, price, pharmacyName, pontuation, description} = useLocalSearchParams();

  return (
   <View style={styles.container}>
      <CardCheckout
         imgUrl= {imgUrl as string}
         pharmacyName={pharmacyName as string}
         price={Number(price)}
         productName={productName as string}
         pontuation={Number(pontuation) }
         description = {description as string} 
      />
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  })

  // 13 PILARES