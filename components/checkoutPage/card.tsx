import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

interface CardCheckoutProps {
   imgUrl: any
   productName: string
   price: number
   pharmacyName: string
}

export default function CardCheckout({ imgUrl, productName, price, pharmacyName}: CardCheckoutProps) {
  
   const [amout, setAmount] = useState(1)
   
   const addProduct = () => {
      setAmount(amout + 1)
   }

   const removeProduct = () => {
      if(amout <= 0) {
         setAmount(0)
      } else {
         setAmount(amout - 1)
      }
   }
  
   return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
         <Image style={styles.image} source={{uri: imgUrl}} ></Image>
      </View>
      
      <Text style={styles.distaceText}>2.5 Km - 5 Mins</Text>
      <View style={styles.quantContainer}>
         <Text style={styles.productName}>{productName}</Text>
         <View style={styles.buttonAddProdutsContainer}>
            <TouchableOpacity onPress={removeProduct}>
               <Ionicons name="remove-circle" size={20} color="black" />
            </TouchableOpacity>
            <Text>{amout}</Text>
            <TouchableOpacity onPress={addProduct}>
               <FontAwesome name="plus-square-o" size={20} color="black" />
            </TouchableOpacity>
         </View>
      </View>
   </View>
  )
}

const styles = StyleSheet.create({
   container: {
      width: "80%"
   },
   image: {
      width: "100%",
      height: 250,
      borderRadius: 10
   },
   imageContainer: {
      width: "100%",
      height: "100%",
   },
   distaceText: {
      color: "#656565"
   },
   productName: {
      color: "#2B2B2B",
      fontSize: 22,
      fontWeight: '700',
   },
   quantContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
   },
   buttonAddProdutsContainer: {
      flexDirection: "row",
      alignContent: 'center',
      gap: 10
   }
})