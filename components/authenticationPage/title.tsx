import { View, Text, StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'


type TitleProps = {
  title: string
  subtitle: string
} & PropsWithChildren
export default function title({title, subtitle, children}: TitleProps) {

  return (
    <View style = {styles.container}>
      <Text style = {styles.title}>{title}</Text>
      <Text style = {styles.subtitle}>
        {subtitle}
        {children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center"
  },
  title: {
    color: "#111827",
    fontSize: 30,
    fontWeight: '800',
    fontFamily: "inter"
  },
  subtitle: {
    color: "#6C7278",
    fontSize: 12,
    fontFamily: "inter"
  }
})