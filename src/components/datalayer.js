import {createContext,useReducer,useContext} from 'react'

export const Datalayercontext =createContext();


export  const  Datalayer = ({initialstate,reducer,children})=>(
    <Datalayercontext.Provider value={useReducer(reducer,initialstate)}>
        {children}

    </Datalayercontext.Provider>
)


export const useDatalayerValue = () => useContext(Datalayercontext);