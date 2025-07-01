import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { useRouter } from 'expo-router';
import fonts from '@/constants/fonts';
import colors from '@/constants/color';

interface AddCartButtonProps {
   price: number
   newPrice: number
   id: string,
   imgUrl: string,
   productName: string,
   pharmacyName: string,
   pontuation: number,
   description: string
   amount: number
}

export default function AddCartButton({newPrice, price, id, imgUrl, productName, pharmacyName, pontuation, description, amount}: AddCartButtonProps) {
   const router = useRouter()

   const handleCheckout = () => {
      router.push({
      pathname: '/cartPage', 
      params: {
         id: id,
         imgUrl: imgUrl,
         productName: productName,
         price: price,
         pharmacyName: pharmacyName,
         pontuation: pontuation.toString(),
         description: description,
         amount: amount
      }
   })}
  return (

   
   <View style={styles.container}>
      
      <View style={styles.containerButton}>
         <Text style={styles.price}>R${newPrice.toFixed(2)}</Text>

         <TouchableOpacity style = {styles.statusContainer} onPress={handleCheckout}>
            <Text testID='button-checkout' style={styles.textButton}>Check out</Text>
            <FontAwesome6 name="basket-shopping" size={16} color="white" />
         </TouchableOpacity>
      </View>

   </View>
    
  )
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      backgroundColor: colors.backgroud,
      width: "100%",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20
   },
   containerButton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 20,
      gap: 50
   },
   statusContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: "#F55A51",
      padding: 16,
      borderRadius: 15,
      gap: 10
   },
   textButton: {
      color: "white",
      fontWeight: '600',
      fontSize: fonts.title.bg,
   },
   price: {
      fontSize: fonts.title.eg,
      fontWeight: '700',
      fontFamily: "Inter"
   }
})