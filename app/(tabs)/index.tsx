import { FlatList, ListRenderItem, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={products}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  flatList: {
    width: "100%",
    flexWrap: "wrap",
  },
  flatListContentContainer: {
    paddingHorizontal: 8,
    justifyContent: "center",
  },
});
