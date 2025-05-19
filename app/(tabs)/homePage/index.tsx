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
      price={300}
      productName='Dipirona'
      />
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
      alignItems: "center"
   }
})