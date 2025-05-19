import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../authenticationPage/button";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Link } from "expo-router";

interface ProductProps {
  imgUrl: string
  productName: string
  price: number
  localization: string
}

export default function Product({ imgUrl, productName, price, localization}: ProductProps) {
  return(
    <View style={styles.container}>
      
      <Image source={{ uri: imgUrl }} style={styles.image}/>
      <View style = {styles.productInfo}>
         <Text style={styles.title}>{productName}</Text>
         <Text style={styles.price}>R${price}</Text>
         <View style={styles.containerLocalization}>
            <EvilIcons name="location" size={18} color="#666666"  />
            <Text style={styles.localization}>{localization}</Text>
         </View>
      
         <Button title="Adicionar ao Carrinho" route="/checkout"></Button>
      </View>
   </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    width: "70%",
    marginBottom: 10
  },
  productInfo: {
    flex: 1,
    gap: 5
  },
  title:{
    color: "#666666",
    fontSize: 14,
  },
  price: {
   fontSize: 16,
   fontWeight: "600"
  },
  produtcName: {
    color: "#B3B3B3",
  },
  localization: {
   fontSize: 12,
   color: "#999999",
  },
  image: {
    width: "100%", 
    height: 150,
    marginRight: 16,
    borderRadius: 10
  },
  containerLocalization: {
   flexDirection: "row"
  }
  
  
});
