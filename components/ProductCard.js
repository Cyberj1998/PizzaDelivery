import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProductCard({ item }) {
  const handleAddToCart = () => {
    alert("hola!");
  };

  return (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <View style={styles.textContainer}>
        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>
        <Text style={styles.productPrice}>${item.price}</Text>
        <Image style={styles.categoryIcon} source={item.categoryIcon} />
        <TouchableOpacity style={styles.addButton} onPress={handleAddToCart}>
          <Text style={styles.addButtonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    backgroundColor: "#ffffff",
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
    borderWidth: 1,
    borderColor: "red",
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
    height: 20,
    width: 20,
    resizeMode: "contain",
  },
});
