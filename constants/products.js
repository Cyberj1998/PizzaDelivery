import Drink1 from "../assets/images/bebida-1.png";
import Drink2 from "../assets/images/bebida-2.png";
import Drink3 from "../assets/images/bebida-3.png";
import Completa1 from "../assets/images/completa-1.png";
import Completa2 from "../assets/images/completa-2.png";
import Completa3 from "../assets/images/completa-3.png";
import Completa4 from "../assets/images/completa-4.png";
import Completa5 from "../assets/images/completa-5.png";
import Completa6 from "../assets/images/completa-6.png";
import Completa7 from "../assets/images/completa-7.png";
import Burger1 from "../assets/images/hamburguesa-1.png";
import Burger2 from "../assets/images/hamburguesa-2.png";
import Burger3 from "../assets/images/hamburguesa-3.png";
import Pizza1 from "../assets/images/pizza-1.png";
import Pizza2 from "../assets/images/pizza-2.png";
import Pizza3 from "../assets/images/pizza-3.png";
import Pizza4 from "../assets/images/pizza-4.png";
import Dessert1 from "../assets/images/postre-1.png";
import Dessert2 from "../assets/images/postre-2.png";
import Dessert3 from "../assets/images/postre-3.png";
import Dessert4 from "../assets/images/postre-4.png";
import Dessert5 from "../assets/images/postre-5.png";
import Dessert6 from "../assets/images/postre-6.png";

//------------category icons

import burger from "../assets/images/icons/burger.png";
import dessert from "../assets/images/icons/dessert.png";
import drinkIcon from "../assets/images/icons/drink.png";
import food from "../assets/images/icons/food.png";
import pizza from "../assets/images/icons/pizza.png";

const products = [
  {
    id: "pizza_001",
    name: "Margherita Pizza",
    price: 12.99,
    description:
      "Classic pizza with fresh mozzarella, basil, and a rich tomato sauce.",
    image: Pizza1,
    categoryIcon: pizza,
    category: "pizza",
  },
  {
    id: "pizza_002",
    name: "Pepperoni Pizza",
    price: 14.49,
    description:
      "A crowd-pleaser with generous slices of spicy pepperoni and melted cheese.",
    image: Pizza2,
    categoryIcon: pizza,
    category: "pizza",
  },
  {
    id: "pizza_003",
    name: "Vegetarian Supreme Pizza",
    price: 13.99,
    description:
      "A colorful medley of fresh vegetables like bell peppers, onions, mushrooms, and olives.",
    image: Pizza3,
    categoryIcon: pizza,
    category: "pizza",
  },
  {
    id: "pizza_004",
    name: "BBQ Chicken Pizza",
    price: 15.49,
    description:
      "Tangy BBQ sauce base topped with grilled chicken, red onions, and cilantro.",
    image: Pizza4,
    categoryIcon: pizza,
    category: "pizza",
  },

  //----------------------
  {
    id: "sandwich_001",
    name: "Classic Club Sandwich",
    price: 9.99,
    description:
      "Triple-decker sandwich with roasted turkey, crispy bacon, lettuce, tomato, and mayo.",
    image: Burger1,
    categoryIcon: burger,
    category: "burger",
  },
  {
    id: "sandwich_002",
    name: "Italian Sub Sandwich",
    price: 10.49,
    description:
      "A hearty sub piled high with salami, ham, provolone cheese, lettuce, tomato, and an Italian dressing.",
    image: Burger2,
    categoryIcon: burger,
    category: "burger",
  },
  {
    id: "sandwich_003",
    name: "Caprese Panini",
    price: 8.99,
    description:
      "Grilled ciabatta with fresh mozzarella, ripe tomatoes, basil pesto, and a balsamic glaze.",
    image: Burger3,
    categoryIcon: burger,
    category: "burger",
  },
  {
    id: "beer_001",
    name: "Heineken Lager",
    price: 4.5,
    description:
      "Una cerveza lager clásica, refrescante y con un toque de malta equilibrado.",
    image: Drink1,
    categoryIcon: drinkIcon,
    category: "bebida",
  },
  {
    id: "beer_002",
    name: "Stella Artois",
    price: 4.75,
    description:
      "Cerveza premium con un sabor suave y un aroma floral distintivo.",
    image: Drink3,
    categoryIcon: drinkIcon,
    category: "bebida",
  },
  {
    id: "malta_001",
    name: "Malta Indulgent",
    price: 3.0,
    description:
      "Bebida de malta oscura, densa y con un sabor dulce y energético.",
    image: Drink2,
    categoryIcon: drinkIcon,
    category: "bebida",
  },
  {
    id: "dessert_001",
    name: "Chocolate Lava Cake",
    price: 6.5,
    description:
      "Bizcocho caliente de chocolate con un centro fundido y una bola de helado de vainilla.",
    image: Dessert1,
    categoryIcon: dessert,
    category: "postre",
  },
  {
    id: "dessert_002",
    name: "New York Cheesecake",
    price: 5.99,
    description:
      "Tarta de queso cremosa sobre una base de galleta crujiente, servida con salsa de frutos rojos.",
    image: Dessert2,
    categoryIcon: dessert,
    category: "postre",
  },
  {
    id: "dessert_003",
    name: "Tiramisu Classico",
    price: 6.25,
    description:
      "Postre italiano tradicional con capas de bizcochos empapados en café y crema de mascarpone.",
    image: Dessert3,
    categoryIcon: dessert,
    category: "postre",
  },
  {
    id: "dessert_004",
    name: "Apple Pie",
    price: 5.5,
    description:
      "Tarta de manzana casera con canela y una corteza de masa quebrada muy crujiente.",
    image: Dessert4,
    categoryIcon: dessert,
    category: "postre",
  },
  {
    id: "dessert_005",
    name: "Crème Brûlée",
    price: 7.0,
    description:
      "Crema suave de vainilla con una capa de azúcar caramelizada crujiente en la parte superior.",
    image: Dessert5,
    categoryIcon: dessert,
    category: "postre",
  },
  {
    id: "dessert_006",
    name: "Brownie con Nueces",
    price: 4.95,
    description:
      "Brownie de chocolate intenso con trozos de nuez y un toque de sal marina.",
    image: Dessert6,
    categoryIcon: dessert,
    category: "postre",
  },
  {
    id: "combo_001",
    name: "Classic Burger Combo",
    price: 12.99,
    description:
      "Hamburguesa clásica con queso, patatas fritas crujientes y una bebida refrescante.",
    image: Completa1,
    categoryIcon: food,
    category: "completa",
  },
  {
    id: "combo_002",
    name: "Chicken Tender Meal",
    price: 10.5,
    description:
      "Tiras de pollo crujientes, salsa especial, patatas y una bebida a elección.",
    image: Completa2,
    categoryIcon: food,
    category: "completa",
  },
  {
    id: "combo_003",
    name: "BBQ Ribs Set",
    price: 18.5,
    description:
      "Costillas bañadas en salsa BBQ, guarnición de ensalada de col y bebida.",
    image: Completa3,
    categoryIcon: food,
    category: "completa",
  },
  {
    id: "combo_004",
    name: "Veggie Delight Combo",
    price: 11.25,
    description:
      "Hamburguesa vegetariana de garbanzos, patatas dulces y una bebida natural.",
    image: Completa4,
    categoryIcon: food,
    category: "completa",
  },
  {
    id: "combo_005",
    name: "Family Pizza Feast",
    price: 25.0,
    description:
      "Pizza familiar de varios sabores, acompañamiento de palitroques de ajo y refresco grande.",
    image: Completa5,
    categoryIcon: food,
    category: "completa",
  },
  {
    id: "combo_006",
    name: "Spaghetti Bolognese Combo",
    price: 13.75,
    description:
      "Pasta con salsa boloñesa casera, pan de ajo y una bebida fría.",
    image: Completa6,
    categoryIcon: food,
    category: "completa",
  },
  {
    id: "combo_007",
    name: "Fish & Chips Meal",
    price: 14.0,
    description:
      "Filete de pescado rebozado, patatas fritas tradicionales y una bebida.",
    image: Completa7,
    categoryIcon: food,
    category: "completa",
  },
];

export default products;
