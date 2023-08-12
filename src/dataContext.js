import React, { useContext, useReducer, useState, } from "react";
import { inventoryData } from "./data";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    
    const [ db, setDb ] = useState(inventoryData)
    const [state, dispatch] = useReducer(reducer , db)

    function reducer () {}

    const departments = db.map((item) => {
        return item.department
    }).filter((item, index) => db.map((item) => {
        return item.department
    }).indexOf(item) === index )

return <AppContext.Provider value={{db, setDb, state, dispatch, departments}}>{children}</AppContext.Provider>
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}
export {AppContext, AppProvider};