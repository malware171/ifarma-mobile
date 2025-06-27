import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LoginTitle from '@/components/authenticationPage/title'
import Button from '@/components/authenticationPage/button'
import Input from '@/components/authenticationPage/input'
import { Link } from 'expo-router'
import { useRoute } from '@react-navigation/native'
import users from '@/database/user'

export default function index() {
   
  return (
    <View style = {styles.container}>
      <View style = {styles.backgroundContainer}>
         <LoginTitle title='Login'subtitle='Não tem uma conta ?'>
            <Link href={"/createAccountPage/createAccount"} style = { styles.link}>Criar Conta</Link>
         </LoginTitle>
         <Input testID="input-username" placeholder='username'/>
         <Input testID="input-password" placeholder='password' secureTextEntry/>
         <Button testId='button-logIn' title='Log In' route='(tabs)/homePage'></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#F6F8FA",
      padding: 35
   },
   backgroundContainer: {
      gap: 15,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      width: "100%",
      padding: 30,
      borderRadius: 20
   },
   link: {
      color: "#1D61E7",
      fontWeight: "700",
      marginLeft: 5
   }
})