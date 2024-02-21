import { ReactNode, createContext, useState } from "react";


interface UIContextType {
    hamState: boolean;
    handleClick: () => void;
    handleSuccess: ()=> void;
    showSuccessMessage: boolean;
}

export const UIContext = createContext<UIContextType>({
    hamState: false,
    handleClick: () => {}, // Provide a dummy function,
    handleSuccess: () => {},
    showSuccessMessage: false
});



interface Props {
    children: ReactNode
}


export function UIContextProvider(props: Props){
const [hamState, setHamState] = useState(false)

    function handleClick(){
        setHamState(prev => !prev)
    }

    function handleSuccess (){
        setShowSuccessMessage(prev => !prev)
    }

    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

const contextData = {hamState, handleClick, handleSuccess, showSuccessMessage}

    return <UIContext.Provider value={contextData}>
        {props.children}
    </UIContext.Provider>
}
