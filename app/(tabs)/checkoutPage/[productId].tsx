import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { useLocalSearchParams } from 'expo-router'
import CardCheckout from '@/components/checkoutPage/card';
import HeaderHomePage from '@/components/headerHomePage';


export default function ProductId() {
 const { imgUrl, productName, price, pharmacyName} = useLocalSearchParams();

  return (
   /* <View style={styles.container}>
      <Image source={ { uri: imgUrl}} style={styles.image}/>
      <View style = {styles.productInfo}>
         <Text style={styles.title}>{productName}</Text>
         <Text style={styles.price}>R${price}</Text>
         <View style={styles.containerpharmacyName}>
            <EvilIcons name="location" size={18} color="#666666"  />
            <Text style={styles.pharmacyName}>{pharmacyName}</Text>
         </View>
      </View>
   </View> */
   <View style={styles.container}>
      <HeaderHomePage/>
      <CardCheckout 
         imgUrl= "https://drogariavenancio.vtexassets.com/arquivos/ids/1060740-1200-auto?v=638279844533400000&width=1200&height=auto&aspect=true"
         pharmacyName={pharmacyName}
         price={price}
         productName={productName}
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