import { ReactNode, createContext, useState } from "react";
import { slideImages } from "../reservation-img";


interface UIContextType {
    hamState: boolean;
    handleClick: () => void;
    handleSuccess: ()=> void;
    showSuccessMessage: boolean;
    clickedReserve: Reservation | null;
    showReservation: (id: number)=> void
}

export const UIContext = createContext<UIContextType>({
    hamState: false,
    handleClick: () => {}, // Provide a dummy function,
    handleSuccess: () => {},
    showSuccessMessage: false,
    clickedReserve: {
        name: '',
        description: '',
        price: 0,
        id: 0

    },
    showReservation: ()=> {}
});



interface Props {
    children: ReactNode
}

interface Reservation {
    name: string;
    description: string;
    price: number
    id: number
}


export function UIContextProvider(props: Props){
const [hamState, setHamState] = useState(false)

    function handleClick(){
        setHamState(prev => !prev)
    }

    function handleSuccess (){
        setShowSuccessMessage(prev => !prev)
    }

    const [clickedReserve, setClickedReserve] = useState<Reservation | null>(null)

    function showReservation(id: number){
        const reserve = slideImages.find(item=> item.id === id)
        if (reserve){
            setClickedReserve({
                name: reserve.caption,
                description: reserve.description,
                price: reserve.price,
                id: reserve.id
            })
        }
    }

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

const contextData = {hamState, handleClick, handleSuccess, showSuccessMessage, clickedReserve, showReservation}

    return <UIContext.Provider value={contextData}>
        {props.children}
    </UIContext.Provider>
}
