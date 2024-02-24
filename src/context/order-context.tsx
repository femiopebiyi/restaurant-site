import { ReactNode, createContext, useState } from "react";

interface orderContextType {
    handleChangeIncrease: ()=> void;
    handleChangeDecrease: ()=> void;
    quantity: number;
}

export const OrderContext = createContext<orderContextType>({
    handleChangeIncrease: ()=> {},
    handleChangeDecrease: ()=> {},
    quantity: 1
});



interface Props {
    children: ReactNode
}


export function OrderContextProvider(props: Props){
    const [quantity, setQuantity] = useState(1)

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

        const orderContext = { handleChangeDecrease, handleChangeIncrease, quantity } 

    return <OrderContext.Provider value={orderContext}>
        {props.children}
    </OrderContext.Provider>
}
