'use client'

import { useReducer } from "react";
import MainContext from "@/context/main.context";

const mainReducer = (state, action) => {
    const {type, payload} = action;
    switch(type) {
        case 'setUsers':
            return {
                ...state,
                users: action.payload,
            }
        default: 
            return state
    }
}

const initialState = {
    users: [],
};

const ContextWrapper = ({children}) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);
    return (
        <MainContext.Provider value={{...state, dispatch}}>
            <div>
                {children}
            </div>
        </MainContext.Provider>
    )
}
export default ContextWrapper;