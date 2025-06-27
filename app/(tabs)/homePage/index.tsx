import { StyleSheet, FlatList } from 'react-native'
import React from 'react'
import Product from '@/components/product'

import products from '@/database/products'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function index() {
  return (
    <SafeAreaView style = {styles.container}>
      
     <FlatList
      contentContainerStyle={{
        paddingHorizontal: 50,
        paddingBottom: 20,
      }}
      data={products}
      renderItem={({ item }) => (
        <Product
          testID={item.productName}
          id={item.id}
          imgUrl={item.imgUrl}
          pharmacyName={item.pharmacyName}
          price={item.price}
          productName={item.productName}
          pontuation={item.pontuation}
          description={item.description}
        />
      )}
      keyExtractor={(item) => item.id.toString()}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   container: {
      alignContent: 'center',
      flex: 1,
   },
})