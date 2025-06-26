import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

interface UserProfileProps{
   profileImage: string
}
export default function UserProfile({profileImage}: UserProfileProps) {
  return (
    <View style={style.container}>
      <Image style={style.image} source={{uri: profileImage}}/>
    </View>
  )
}

const style = StyleSheet.create({
   container: {
      width: 30,
      height: 30,
   },
   image: {
      borderRadius: 30
   }
})