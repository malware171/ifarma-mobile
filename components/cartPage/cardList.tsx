import { View, Text, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

interface CardListProps {
   id: string
   imgUrl: any
   pharmacyName: string
   pontuation: string
   productName: string
   description:string
   price: string
   amount: string
}

export default function CardList({id, imgUrl, pharmacyName, pontuation, productName, description, price, amount}: CardListProps) {
  
  const [amout, setAmount] = useState(1)
     const [newPrice, setNewPrice] = useState(price)
  
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
    <View style={styles.backGroundContainer}>
      <Image style={styles.image} source={{uri: imgUrl}} ></Image>
      <View style ={styles.leftContainer}>
         <View style = {styles.topContainer}>
            <Text>{productName}</Text>
            <TouchableOpacity>
               <FontAwesome5 name="trash" size={16} color="#F55A51" />
            </TouchableOpacity>
         </View>
         
         <Text>R${price}</Text>

         <View style={styles.addItens}>
            <Text>{pharmacyName}</Text>

            <View style={styles.buttonAddProdutsContainer}>
               <TouchableOpacity onPress={removeProduct}>
                  <Ionicons name="remove-circle" size={20} color="#2B2B2B" />
               </TouchableOpacity>
               <Text>{amout}</Text>
               <TouchableOpacity onPress={addProduct}>
                  <FontAwesome name="plus-square-o" size={20} color="#2B2B2B" />
               </TouchableOpacity>
            </View>
         </View>
         
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   backGroundContainer: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 10,
      flexDirection: 'row',
      alignContent: 'center',
      maxWidth: "100%"
   }, 
   image : {
      width: 100,
      height: 100,
      borderRadius: 10
   }, 
   buttonAddProdutsContainer: {
      flexDirection: "row",
      alignContent: 'center',
      gap: 10
   },
   leftContainer: {
      justifyContent: 'space-between',
      margin: 12,
      flex: 1
   },
   topContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
   },
   addItens: {
      flexDirection: 'row',
      justifyContent: 'space-between',
   }
})