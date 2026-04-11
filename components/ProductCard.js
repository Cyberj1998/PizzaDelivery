import { StyleSheet, Text, View } from "react-native";

export default function ProductCard({ item }) {
  return (
    <View style={styles.productCard}>
      <Text>{item.name}</Text>
      <Text>{item.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  productCard: {
    borderWidth: 1,
    borderColor: "gray",
    height: 200,
    width: "90%",
    borderRadius: 10,
    margin: 5,
  },
});
