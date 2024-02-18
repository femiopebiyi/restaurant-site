import { ReactNode, createContext, useState } from "react";


interface UIContextType {
    hamState: boolean;
    handleClick: () => void;
}

export const UIContext = createContext<UIContextType>({
    hamState: false,
    handleClick: () => {} // Provide a dummy function
});



interface Props {
    children: ReactNode
}


export function UIContextProvider(props: Props){
const [hamState, setHamState] = useState(false)

    function handleClick(){
        setHamState(prev => !prev)
    }

const contextData = {hamState, handleClick}

    return <UIContext.Provider value={contextData}>
        {props.children}
    </UIContext.Provider>
}
