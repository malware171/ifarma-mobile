import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Product from '@/components/product'
import HeaderHomePage from '@/components/headerHomePage'

export default function index() {
  return (
    <View style = {styles.container}>
      <HeaderHomePage/>
      <Product
         imgUrl='https://drogariavenancio.vtexassets.com/arquivos/ids/1060740-1200-auto?v=638279844533400000&width=1200&height=auto&aspect=true'
         pharmacyName='Rede Raia'
         price={13.99}
         productName='Dipirona'
         pontuation={4.8}
         description='Vulputate tincidunt convallis pulvinar egestas consequat, aliquam lectus nibh. Leo purus nisi, nibh condimentum aliquam eu quis. Ultrices arcu pharetra.'
      />

    </View>
  )
}

const styles = StyleSheet.create({
   container: {
      alignItems: "center"
   }
})