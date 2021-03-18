import React from 'react';
import {useState, useEffect} from 'react';
let data;

const SidebarContext = React.createContext()
const submenufunction = ()=>{
    console.log("it work here");
}
const SidebarProvider = ({children}) =>{
    const[openClass, setOpenClass] = useState(true)

    const openClassfunction = ()=>{
        console.log("class open");
    }
    const closeClassfunction = ()=>{
        console.log("class close");
    }



    


   return (<SidebarContext.Provider value ={{ openClassfunction, closeClassfunction}
    }>
        {children}
    </SidebarContext.Provider>)
}
export { submenufunction, SidebarContext, SidebarProvider}