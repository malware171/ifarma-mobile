import { StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'

interface TitleProps {
   title: string
}

export default  function Title({title}: TitleProps) {
  
    return (
      <View>
        <Text style={style.title}>{title}</Text>
      </View>
    )
}

const style = StyleSheet.create({
   title: {
      fontSize: 16,
      fontWeight: '600',
      textTransform: 'uppercase',
      fontFamily: "inter"
   }
})