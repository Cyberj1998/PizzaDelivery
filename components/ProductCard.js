import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import useCartStore from "../store/CartSlice";

export default function ProductCard({ item }) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (item) => {
    addToCart(item);
    console.log(item);
  };

  return (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.textContainer}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        <View style={styles.priceCategoryContainer}>
          <Text style={styles.productPrice}>$: {item.price}</Text>
          <Image style={styles.categoryIcon} source={item.categoryIcon} />
        </View>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddToCart(item)}
        >
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: "#eeeeee",
    borderRadius: 12,
    marginHorizontal: 10,
    marginVertical: 8,
    flexDirection: "column",
    justifyContent: "space-between",
    width: 160,
    height: 300,
    flexShrink: false,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  productImage: {
    margin: 5,
    width: "100%",
    height: 150,
    resizeMode: "contain",
  },
  textContainer: {
    padding: 12,
  },
  productName: {
    fontSize: 15,
    width: "100%",
    fontWeight: "bold",
    marginBottom: 6,
    color: "#333333",
  },
  productPrice: {
    fontSize: 18,
    fontWeight: "600",
    color: "#007bff",
  },
  addButton: {
    backgroundColor: "#48d769",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignSelf: "center",
    width: "100%",
  },
  addButtonText: {
    color: "#ffffff",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
  categoryIcon: {
    height: 25,
    width: 25,
    resizeMode: "contain",
  },
  priceCategoryContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
