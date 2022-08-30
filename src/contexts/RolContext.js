import React, {createContext, useReducer} from 'react';
import roles from "../archivo/roles";

// import { Container } from './styles';

const initialState = {roles}
const RolesContext = createContext({})

const actions = {
    createRol(state, action){
        const rol = action.payload
        rol.id = Math.random()
        return {
            ...state,
            roles: [...state.roles, rol]
        }
    },
    updateRol(state, action){
        const updated = action.payload

        return {
            ...state,
            roles: state.roles.map(u => u.id === updated.id ? updated : u)

        }

    },
    deleteRol(state, action){

        const user = action.payload
        return {
            ...state,
            roles: state.roles.filter(u=> u.id !== user.id)
        }
    }
}


export const RolesProvider = props => {

    function reducer(state, action){
        const fn = actions[action.type]
        return fn ? fn(state, action): state
    }


    const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <RolesContext.Provider
            value={{
                state, dispatch
            }}>
            {props.children}
        </RolesContext.Provider>
    )
}

export default RolesContext