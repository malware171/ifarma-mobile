import { View, Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import cart from '@/assets/database/cart'
import Product from '@/components/product'
import CardList from '@/components/cartPage/cardList'
import BuyButton from '@/components/cartPage/buyButton'

export default function cartPage() {
  const {id, imgUrl, pharmacyName, pontuation, productName, description, price, amount} = useLocalSearchParams()


  return (
    <View style={style.container}>
      <CardList
        amount={amount as string}
        description={description as string}
        id={id as string}
        imgUrl={imgUrl}
        pharmacyName={pharmacyName as string}
        pontuation={pontuation as string}
        productName={productName as string}
        price={price as string}
      />
      <BuyButton price={Number(price)}/>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  }
})
