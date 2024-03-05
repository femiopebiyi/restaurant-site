import pasta from "./assets/images/pasta.jpg"
import pizza from "./assets/images/pizza.jpg"
import salmon from "./assets/images/salmon.jpg"
import pepperSoup from "./assets/images/peppersoup.jpg"
import fufu from "./assets/images/fufu.jpg"
import jollof from "./assets/images/jollof.jpg"

export const menuItems = [
    {
        name: 'Pasta Carbonara',
        price: 12.99,
        pictureUrl: pasta,
        id: 1,
        toppings: ['Bacon', 'Parmesan Cheese', 'Black Pepper', 'none'],
    },
    {
        name: 'Margherita Pizza',
        price: 10.99,
        pictureUrl: pizza,
        id: 2,
        toppings: ['Tomatoes', 'Basil', 'Mozzarella', 'none'],
    },
    {
        name: 'Grilled Salmon',
        price: 15.99,
        pictureUrl: salmon,
        id: 3,
        toppings: ['Lemon', 'Garlic Butter', 'Dill', 'none'],
    },
    {
        name: 'Pepper Soup',
        price: 35.99,
        pictureUrl: pepperSoup,
        id: 4,
        toppings: ['Goat Meat', 'Cow Beef', 'Pork', 'none'],
    },
    {
        name: 'FuFu',
        price: 45.99,
        pictureUrl: fufu,
        id: 5,
        toppings: ['Egusi Soup', 'Groundnut Soup', 'Okra Soup', 'Palm Nut Soup', 'Light Soup'],
    },
    {
        name: 'Jollof Rice',
        price: 33.99,
        pictureUrl: jollof,
        id: 6,
        toppings: ['Fried Plantains', 'Grilled Chicken', 'Fried Fish', 'Fried Plantain', 'Coleslaw'],
    },
];
