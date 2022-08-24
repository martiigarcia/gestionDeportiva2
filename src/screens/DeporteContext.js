import React, {createContext, useReducer} from 'react';
import users from "./users";
import deportes from "./deportes";

// import { Container } from './styles';

const initialState = {deportes}
const DeportesContext = createContext({})

const actions = {
    createDeporte(state, action){
        const deporte = action.payload
        deporte.id = Math.random()
        return {
            ...state,
            deportes: [...state.deportes, deporte]
        }
    },
    updateDeporte(state, action){
        const updated = action.payload

        return {
            ...state,
            deportes: state.deportes.map(u => u.id === updated.id ? updated : u)

        }

    },
    deleteDeporte(state, action){

        const deporte = action.payload
        return {
            ...state,
            deportes: state.deportes.filter(u=> u.id !== deporte.id)
        }
    }
}


export const DeportesProvider = props => {

    function reducer(state, action){
        const fn = actions[action.type]
        return fn ? fn(state, action): state
    }


    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <DeportesContext.Provider
            value={{
                state, dispatch
            }}>
            {props.children}
        </DeportesContext.Provider>
    )
}

export default DeportesContext