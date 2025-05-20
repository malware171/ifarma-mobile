import React from 'react'
import { Tabs } from 'expo-router'
import HeaderHomePage from '@/components/headerHomePage'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        header: () => <HeaderHomePage/>,
      }}
    >
      <Tabs.Screen name='index' options={{title: "Produtos", headerShown: true}}/>
      <Tabs.Screen name='homePage/index' options={{title: "Home", headerShown: true, tabBarIcon: ({ color, size }) => ( <Ionicons name="home-outline" size={size} color={color} /> ),}}/>
      <Tabs.Screen name='checkoutPage/[productId]' options={{ title: "Detalhes do produto", headerShown: true, tabBarButton: () => null,}}/>
      <Tabs.Screen name='cartPage/index' options={{title: "Carrinho", headerShown: true, tabBarIcon: ({ color, size }) => ( <Ionicons name="cart-outline" size={size} color={color} /> ),}}/>
    </Tabs>
  )
}