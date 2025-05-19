import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../authenticationPage/button";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Link } from "expo-router";

interface ProductProps {
  imgUrl: string
  productName: string
  price: number
  pharmacyName: string
  pontuation: number
  description: string
}

export default function Product({ imgUrl, productName, price, pharmacyName, pontuation, description}: ProductProps) {
  return(
    <Link style={styles.container}
    href={{
        pathname: "/(tabs)/checkoutPage/[productId]",
        params: {
          imgUrl: imgUrl,
          productName: productName,
          price: price,
          pharmacyName: pharmacyName,
          pontuation: pontuation,
          description: description
        },
      }}
    >

      
      <Image source={{ uri: imgUrl }} style={styles.image}/>
      <View style = {styles.productInfo}>
         <Text style={styles.title}>{productName}</Text>
         <Text style={styles.price}>R${price}</Text>
         <View style={styles.containerpharmacyName}>
            <EvilIcons name="location" size={18} color="#666666"  />
            <Text style={styles.pharmacyName}>{pharmacyName}</Text>
         </View>
      </View>
   </Link>
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
  pharmacyName: {
   fontSize: 12,
   color: "#999999",
  },
  image: {
    width: "100%", 
    height: 150,
    marginRight: 16,
    borderRadius: 10
  },
  containerpharmacyName: {
   flexDirection: "row"
  }
  
  
});
