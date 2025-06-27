import { View, StyleSheet } from 'react-native'
import { ActionSheetProvider, connectActionSheet } from "@expo/react-native-action-sheet";
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import cart from '@/database/cart'
import Product from '@/components/product'
import CardList from '@/components/cartPage/cardList'
import BuyButton from '@/components/cartPage/buyButton'

function cartPage() {
  const {id, imgUrl, pharmacyName, pontuation, productName, description, price, amount} = useLocalSearchParams()
  return (
    <ActionSheetProvider>
      <View style={style.container}>
        <CardList
          amount={Number(amount)}
          description={description as string}
          id={id as string}
          imgUrl={imgUrl}
          pharmacyName={pharmacyName as string}
          pontuation={pontuation as string}
          productName={productName as string}
          price={Number(price)}
        />
      </View>
    </ActionSheetProvider>
  )
}

const ConnectedApp = connectActionSheet(cartPage)

export default ConnectedApp

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  }
})
