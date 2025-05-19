import React from 'react'
import { Tabs } from 'expo-router'

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen name='index' options={{title: "Produtos", headerShown: false}}/>
      <Tabs.Screen name='homePage/index' options={{title: "Home", headerShown: false}}/>
      <Tabs.Screen name='checkoutPage/index' options={{title: "Carrinho", headerShown: false}}/>
      <Tabs.Screen name='checkoutPage/[productId]' options={{  headerShown: false}}/>
    </Tabs>
  )
}