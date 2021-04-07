import React, {useContext, useState, useEffect } from 'react'

const MenuContext = React.createContext()

const MenuProvider = ({children})=>{
    const [openSubmenu, setOpenSubmenu] = useState(" ")
    // const { isSidebarOpen, closeSidebar } = useGlobalContext();
    const submenufunction = (menu)=>{
       setOpenSubmenu(previousState => previousState === menu ? " " : menu);
      
    }
    return <MenuContext.Provider value ={{ submenufunction, openSubmenu}}>{children}</MenuContext.Provider>
}


const UseMenuContext = ()=>{
    return useContext(MenuContext);
}

export {MenuProvider, UseMenuContext}