import { createContext,useState } from "react";

const TourContext = createContext();

export function TourProvider({children}) {
    const [data,setData] = useState(s)

    return (
        <TourContext.Provider value={{data,setData}}> 
            {children}
        </TourContext.Provider>
    )
}


export default TourContext;