import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

interface BuyButtonProps {
   price: number
}

export default function BuyButton({price}: BuyButtonProps) {
  return (
   <View style={styles.container}>
      
      <View style={styles.containerButton}>
         <Text style={styles.price}>R${price}</Text>

         <TouchableOpacity style = {styles.statusContainer}>
            <Text style={styles.textButton}>Realizar Pagamento</Text>
            <FontAwesome6 name="basket-shopping" size={16} color="white" />
         </TouchableOpacity>
      </View>

   </View>
    
  )
}

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      backgroundColor: "white",
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
      fontSize: 20,
   },
   price: {
      fontSize: 28,
      fontWeight: '700',
      fontFamily: "Inter"
   }
})