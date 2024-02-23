import pasta from "./assets/images/pasta.jpg"
import pizza from "./assets/images/pizza.jpg"
import salmon from "./assets/images/salmon.jpg"
import salad from "./assets/images/salad.jpg"

export const menuItems = [
    {
        name: 'Pasta Carbonara',
        price: 12.99,
        pictureUrl: pasta,
        id: 1,
        toppings: ['Bacon', 'Parmesan Cheese', 'Black Pepper', 'none']
    },
    {
        name: 'Margherita Pizza',
        price: 10.99,
        pictureUrl: pizza,
        id: 2,
        toppings: ['Tomatoes', 'Basil', 'Mozzarella', 'none']
    },
    {
        name: 'Grilled Salmon',
        price: 15.99,
        pictureUrl: salmon,
        id: 3,
        toppings: ['Lemon', 'Garlic Butter', 'Dill', 'none']
    },
    {
        name: 'Caesar Salad',
        price: 8.99,
        pictureUrl: salad,
        id: 4,
        toppings: ['Croutons', 'Parmesan Cheese', 'Caesar Dressing', 'none']
    }
];
