import React from 'react'
import { Tabs } from 'expo-router'
import HeaderHomePage from '@/components/headerHomePage'

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        header: () => <HeaderHomePage/>,
      }}
    >
      <Tabs.Screen name='index' options={{title: "Produtos", headerShown: true}}/>
      <Tabs.Screen name='homePage/index' options={{title: "Home", headerShown: true}}/>
      <Tabs.Screen name='checkoutPage/[productId]' options={{ title: "Detalhes do produto", headerShown: true, tabBarButton: () => null,}}/>
      <Tabs.Screen name='cartPage/index' options={{ title: "Carrinho", headerShown: true}}/>
    </Tabs>
  )
}