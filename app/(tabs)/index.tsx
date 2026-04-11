import { FlatList, ListRenderItem, StyleSheet, View } from "react-native";
import ProductCard from "../../components/ProductCard";
import products from "../../constants/products";

export default function HomeScreen() {
  interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
  }

  const renderProductItem: ListRenderItem<Product> = ({ item }) => (
    <ProductCard item={item} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatLiist}
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "red",
  },
  flatLiist: {
    borderWidth: 2,
    borderColor: "blue",
    width: "100%",
  },
});
