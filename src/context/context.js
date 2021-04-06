import React from 'react';
import {useState, useEffect} from 'react';
let data;
// const getClass = async ()=>{
//     const resp = await fetch("http://localhost:3000/subject")
//     const result= await resp.json()
//     data = result;
// }

const ClassContext = React.createContext()
const ClassProvider = ({children}) =>{
    const[classroom, setClassroom] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/subject")
        .then(response => response.json())
        .then(result => setClassroom(result))

    },[])
    


   return (<ClassContext.Provider value ={{classroom}
    }>
        {children}
    </ClassContext.Provider>)
}
export {ClassContext, ClassProvider}