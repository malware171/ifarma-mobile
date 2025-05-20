import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Button from "../authenticationPage/button";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { Link, useRouter } from "expo-router";
import colors from "@/constants/color";

interface ProductProps {
  id: number
  imgUrl: string
  productName: string
  price: number
  pharmacyName: string
  pontuation: number
  description: string
}

export default function Product({ id, imgUrl, productName, price, pharmacyName, pontuation, description}: ProductProps) {
  
  const router = useRouter()

  return(
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        router.push({
          pathname: "/(tabs)/checkoutPage/[productId]",
          params: {
            productId: id,
            imgUrl: encodeURIComponent(imgUrl),
            productName,
            price,
            pharmacyName,
            pontuation,
            description
          },
        });
      }}
    >
      <Image source={{ uri: imgUrl }} style={styles.image}/>
      <View style = {styles.productInfo}>
         <Text style={styles.title}>{productName}</Text>
         <Text style={styles.price}>R${price}</Text>
         <View style={styles.containerpharmacyName}>
            <EvilIcons name="location" size={18} color={colors.secondColor}  />
            <Text style={styles.pharmacyName}>{pharmacyName}</Text>
         </View>
      </View>
   </TouchableOpacity>
  ) 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.backgroud,
    padding: 16,
    borderRadius: 12,
    width: "100%",
    marginBottom: 10
  },
  productInfo: {
    flex: 1,
    gap: 5
  },
  title:{
    color: colors.secondColor,
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
    height: 250,
    marginRight: 16,
    borderRadius: 10,
    alignContent: "center",
  },
  containerpharmacyName: {
   flexDirection: "row"
  }
});
