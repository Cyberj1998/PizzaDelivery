import useCartStore from "@/store/CartSlice";
import {
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CartCard from "../../components/CartCard";

export default function TabTwoScreen() {
  const cart = useCartStore((state) => state.cart);

  interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
    categoryIcon: string;
  }

  const renderProductItem: ListRenderItem<Product> = ({ item }) => (
    <CartCard item={item} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.flatList}
        data={cart}
        renderItem={renderProductItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatListContentContainer}
      />
      <View style={styles.invisibleContainer}>
        <View style={styles.paymentContainer}>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text>Checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  text: {
    color: "red",
    backgroundColor: "red",
  },
  flatList: {
    width: "100%",
  },
  flatListContentContainer: {
    paddingHorizontal: 8,
    justifyContent: "center",
  },
  invisibleContainer: {
    width: "100%",
    height: "45%",
    backgroundColor: "#ffffff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  paymentContainer: {
    backgroundColor: "#eeeeee",
    height: "100%",
    width: "93%",
    borderRadius: 20,
    margin: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  checkoutButton: {
    backgroundColor: "#48d769",
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    alignSelf: "center",
    width: "100%",
  },
});
