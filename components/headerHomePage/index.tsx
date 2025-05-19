import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import React from 'react'
import UserProfile from '../userProfile';
import Title from '../title';

export default function HeaderHomePage() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
         <FontAwesome6 name="bars-staggered" size={13} color="black" />
      </TouchableOpacity>

      <Title title='Ifarma'/>
      <TouchableOpacity>
         <UserProfile profileImage='https://www.computertechreviews.com/wp-content/uploads/2022/04/Keep-It-Simple-scaled.jpeg'/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
      width: "100%",
      padding: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      color: "red"
   }
})