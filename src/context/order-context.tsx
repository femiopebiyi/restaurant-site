import { ReactNode, createContext, useState } from "react";

interface orderContextType {
    handleChangeIncrease: ()=> void;
    handleChangeDecrease: ()=> void;
    quantity: number;
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
    quantity: 1,
    order: [],
    orderFood: ()=>{}
});



interface Props {
    children: ReactNode
}


export function OrderContextProvider(props: Props){
    const [quantity, setQuantity] = useState(1)
    const [order, setOrder] = useState<Order[]>([])

        const handleChangeIncrease = ()=>{
            setQuantity(prev=> prev + 1)
        }
        const handleChangeDecrease = ()=>{
              if(quantity <= 1){
                return
              } else{
                setQuantity(prev=> prev - 1)
              }
            
        }

        function orderFood (id: number, topping: string, quantity:number, price: number, name: string ){
            setOrder((prev)=>{
                return [...prev, {
                name: name,
                finalPrice: price,
                quantity: quantity,
                topping: topping,
                id: id
            }]
            })
        }

        const orderContext = { handleChangeDecrease, handleChangeIncrease, quantity, order, orderFood} 

    return <OrderContext.Provider value={orderContext}>
        {props.children}
    </OrderContext.Provider>
}

