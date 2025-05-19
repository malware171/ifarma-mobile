import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import Rating from './rating';
import AntDesign from '@expo/vector-icons/AntDesign';
import ProductDescription from './productDescription';
import AddCartButton from './addCartButton';


interface CardCheckoutProps {
   imgUrl: any
   productName: string
   price: number
   pharmacyName: string
   pontuation: number
   description: string
}

export default function CardCheckout({ imgUrl, productName, price, pharmacyName, pontuation, description}: CardCheckoutProps) {
  
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

   useEffect(() => {
      setNewPrice(amout * price)
   }, [amout])
  
   return (
      <View style={styles.principalContainer}>
         <View style={styles.container}>
            <View style={styles.imageContainer}>
               <Image style={styles.image} source={{uri: imgUrl}} ></Image>
            </View>
            <Text style={styles.distaceText}> 
               <EvilIcons name="location" size={18} color="#666666"  /> {pharmacyName} 2.5 Km - 5 Minutos</Text>
            <View style={styles.quantContainer}>
               <Text style={styles.productName}>{productName}</Text>

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

            <View style = {styles.ratingContainer}>
               <Rating pontuation={pontuation}/>
               <AntDesign name="star" size={16} color="#FFBC3F" />
               <Text style={styles.totalReviewsText}>5k+ Reviews</Text>
            </View>
            <ProductDescription description={description}/>

         </View>

         <AddCartButton price={newPrice}/>
         
      </View>
  )
}

const styles = StyleSheet.create({
   principalContainer: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flex: 1
   },
   container: {
      width: "80%",
      gap: 14
   },
   image: {
      width: "100%",
      height: 350,
      borderRadius: 10
   },
   imageContainer: {
      width: "100%",
   },
   distaceText: {
      color: "#656565",
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
   },
   ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8
   },
   totalReviewsText: {
      color: "#656565",
      fontSize: 16
   }
})