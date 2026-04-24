import { useMemo, useState } from "react";
import {
  FlatList,
  Image,
  ListRenderItem,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import ProductCard from "../../components/ProductCard";
import products from "../../constants/products";

//-----------------images imports
import burger from "../../assets/images/icons/burger.png";
import dessert from "../../assets/images/icons/dessert.png";
import drinkIcon from "../../assets/images/icons/drink.png";
import food from "../../assets/images/icons/food.png";
import Logo from "../../assets/images/icons/logo-2.png";
import pizza from "../../assets/images/icons/pizza.png";
import SearchIcon from "../../assets/images/icons/search.png";

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

  interface CategoryItem {
    category: string;
    image: any;
  }

  const categories = [
    {
      category: "todo",
      image: "",
    },
    {
      category: "pizza",
      image: pizza,
    },
    {
      category: "burgers",
      image: burger,
    },
    {
      category: "drinks",
      image: drinkIcon,
    },
    {
      category: "desserts",
      image: dessert,
    },
    {
      category: "meals",
      image: food,
    },
  ];

  const [category, setCategory] = useState("todo");
  const [searchValue, setSearchValue] = useState("");

  const filteredProducts = useMemo(() => {
    const categoryFiltered =
      category === "todo"
        ? products
        : products.filter((item) => item.category === category);

    return categoryFiltered.filter((item) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }, [category, searchValue, products]);

  const handleCategory = (category: CategoryItem) => {
    setCategory(category.category);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.navbar}>
        <Image style={styles.logo} source={Logo} />
      </View>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Introdusca su direccion..."
          placeholderTextColor="#999"
          multiline={true}
          textAlignVertical="top"
          onChangeText={(text) => setSearchValue(text)}
          value={searchValue}
        />
        <TouchableOpacity>
          <Image source={SearchIcon} style={styles.searchIcon} />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.categoryBar} horizontal>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            style={styles.categoryButton}
            onPress={() => handleCategory(category)}
          >
            <Text style={styles.categoryText}>{category.category}</Text>
            <Image style={styles.categoryIcon} source={category.image} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <FlatList
        style={styles.flatList}
        data={filteredProducts}
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
  navbar: {
    height: 40,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: 55,
    width: 55,
  },
  categoryButton: {
    backgroundColor: "#48d769",
    borderRadius: 20,
    padding: 10,
    margin: 10,
    width: 100,
    height: 40,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 500,
    color: "white",
  },
  searchBar: {
    height: 40,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#989898",
    borderRadius: 15,
    width: "70%",
  },
  searchIcon: {
    height: 30,
    width: 30,
  },
  categoryIcon: {
    height: 30,
    width: 30,
  },
  categoryBar: {
    height: 70,
  },
});
