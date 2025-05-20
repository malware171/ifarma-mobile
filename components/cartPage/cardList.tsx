import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import colors from '@/constants/color';
import { useActionSheet } from '@expo/react-native-action-sheet';

interface CardListProps {
   id: string
   imgUrl: any
   pharmacyName: string
   pontuation: string
   productName: string
   description:string
   price: number
   amount: number
}

export default function CardList({id, imgUrl, pharmacyName, pontuation, productName, description, price, amount}: CardListProps) {
   
   const { showActionSheetWithOptions } = useActionSheet();

   const options = ["Apagar", "Cancelar"];
   const destructiveButtonIndex = 0;
   const cancelButtonIndex = 1;

   const numberPrice = Number(price)
   const [amout, setAmount] = useState(Number(amount))

   const [newPrice, setNewPrice] = useState(numberPrice)

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

   useEffect(() => {
      setNewPrice(Number(amout) * numberPrice)
   }, [amout])

   const handleOpen = () => {
      showActionSheetWithOptions(
         {
            options,
            destructiveButtonIndex,
            cancelButtonIndex
         },
         (buttonIndex) => {
            console.log("Selected: ", buttonIndex);
         }
      )
   }
  
   return (
    <View style={styles.backGroundContainer}>
      <Image style={styles.image} source={{uri: imgUrl}} ></Image>
      <View style ={styles.leftContainer}>
         <View style = {styles.topContainer}>
            <Text>{productName}</Text>
            <TouchableOpacity onPress={handleOpen}>
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
      backgroundColor: colors.backgroud,
      borderRadius: 10,
      flexDirection: 'row',
      alignContent: 'center',
      maxWidth: "100%"
   }, 
   image : {
      width: 100,
      height: 100,
      borderRadius: 10,
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