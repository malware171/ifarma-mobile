import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface UserProfileProps{
   profileImage: string
}
export default function UserProfile({profileImage}: UserProfileProps) {
  return (
    <View style={style.container}>
      <img style={style.image} src={profileImage} alt="profile Image" />
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