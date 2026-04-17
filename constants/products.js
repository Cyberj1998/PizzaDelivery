import Burger1 from "../assets/images/hamburguesa-1.png";
import Burger2 from "../assets/images/hamburguesa-2.png";
import Burger3 from "../assets/images/hamburguesa-3.png";
import Pizza1 from "../assets/images/pizza-1.png";
import Pizza2 from "../assets/images/pizza-2.png";
import Pizza3 from "../assets/images/pizza-3.png";
import Pizza4 from "../assets/images/pizza-4.png";

//------------category icons

import { default as PizzaIcon, default as Test } from "../assets/images/pizza.svg";

const products = [
  {
    id: "pizza_001",
    name: "Margherita Pizza",
    price: 12.99,
    description:
      "Classic pizza with fresh mozzarella, basil, and a rich tomato sauce.",
    image: Pizza1,
    categoryIcon: Test,
  },
  {
    id: "pizza_002",
    name: "Pepperoni Pizza",
    price: 14.49,
    description:
      "A crowd-pleaser with generous slices of spicy pepperoni and melted cheese.",
    image: Pizza2,
    categoryIcon: PizzaIcon,
  },
  {
    id: "pizza_003",
    name: "Vegetarian Supreme Pizza",
    price: 13.99,
    description:
      "A colorful medley of fresh vegetables like bell peppers, onions, mushrooms, and olives.",
    image: Pizza3,
    categoryIcon: PizzaIcon,
  },
  {
    id: "pizza_004",
    name: "BBQ Chicken Pizza",
    price: 15.49,
    description:
      "Tangy BBQ sauce base topped with grilled chicken, red onions, and cilantro.",
    image: Pizza4,
    categoryIcon: PizzaIcon,
  },

  //----------------------
  {
    id: "sandwich_001",
    name: "Classic Club Sandwich",
    price: 9.99,
    description:
      "Triple-decker sandwich with roasted turkey, crispy bacon, lettuce, tomato, and mayo.",
    image: Burger1,
  },
  {
    id: "sandwich_002",
    name: "Italian Sub Sandwich",
    price: 10.49,
    description:
      "A hearty sub piled high with salami, ham, provolone cheese, lettuce, tomato, and an Italian dressing.",
    image: Burger2,
  },
  {
    id: "sandwich_003",
    name: "Caprese Panini",
    price: 8.99,
    description:
      "Grilled ciabatta with fresh mozzarella, ripe tomatoes, basil pesto, and a balsamic glaze.",
    image: Burger3,
  },
];

export default products;
