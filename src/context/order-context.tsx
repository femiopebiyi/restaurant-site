import { ReactNode, createContext, useEffect, useState } from "react";
import { menuItems } from "../menuItem";

interface orderContextType {
    handleChangeIncrease: (id: number)=> void;
    handleChangeDecrease: (id: number)=> void;
    quantity: { [Id: number]: number };
    order: Order[];
    orderFood: (id: number, topping: string, quantity:number, price: number, name: string)=>void;
}


type Order = {
    name: string;
    finalPrice: number;
    topping: string;
    quantity: number;
    id: number
}

export const OrderContext = createContext<orderContextType>({
    handleChangeIncrease: ()=> {},
    handleChangeDecrease: ()=> {},
    quantity: {},
    order: [],
    orderFood: ()=>{}
});



interface Props {
    children: ReactNode
}

const getDefaultCart = (): { [Id: number]: number } => {
    const cart: { [productId: number]: number } = {};

    for (let i = 0; i < menuItems.length; i++) {
        const productId = menuItems[i].id;
        cart[productId] = 1;
    }

    return cart;
};


export function OrderContextProvider(props: Props){
    const [quantity, setQuantity] = useState(getDefaultCart())
    const [order, setOrder] = useState<Order[]>([])

     useEffect(() => {
        // Retrieve cart items from localStorage when the component mounts
        const savedCart = localStorage.getItem('cartItem');
        if (savedCart) {
            setQuantity(JSON.parse(savedCart));
        }

        const savedOrder = localStorage.getItem('order');
    if (savedOrder) {
        setOrder(JSON.parse(savedOrder));
    }
    }, []);


const handleChangeIncrease = (id: number) => {
    setQuantity((prev) => {
            const updatedCart = { ...prev, [id]: prev[id] + 1 };
            // Save updated cart to localStorage
            localStorage.setItem('cartItem', JSON.stringify(updatedCart));
            return updatedCart;
        });
};
const handleChangeDecrease = (id: number) => {
    setQuantity((prev) => {
        // Check if quantity is already 0, if so, return prev state
        if (prev[id] <= 1) {
            return prev;
        }

        // Decrease the quantity by 1
        const updatedCart = { ...prev, [id]: prev[id] - 1 };

        // Save updated cart to localStorage
        localStorage.setItem('cartItem', JSON.stringify(updatedCart));
        return updatedCart;
    });
};

function orderFood(id: number, topping: string, quantity: number, price: number, name: string) {
    setOrder((prev) => {
        const updatedOrder = [...prev];
        const existingOrderIndex = prev.findIndex(order => order.id === id && order.name === name && order.topping === topping);

        if (existingOrderIndex !== -1) {
            // If an existing order is found, update its quantity and final price
            const existingOrder = updatedOrder[existingOrderIndex];
            existingOrder.quantity += quantity;
            existingOrder.finalPrice = existingOrder.quantity * price;
        } else {
            // If no existing order found, add a new order
            updatedOrder.push({
                name: name,
                finalPrice: quantity * price,
                quantity: quantity,
                topping: topping,
                id: id
            });
        }

        // Save updated order to localStorage
        localStorage.setItem('order', JSON.stringify(updatedOrder));

        return updatedOrder;
    });
}



        const orderContext = { handleChangeDecrease, handleChangeIncrease, quantity, order, orderFood} 

    return <OrderContext.Provider value={orderContext}>
        {props.children}
    </OrderContext.Provider>
}

