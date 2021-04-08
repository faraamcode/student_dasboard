import React, {useContext, useState, useEffect } from 'react'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTYxNzc5NDg1MSwiZXhwIjoxNjE3ODAyMDUxfQ.l1V3NcEU8iNiSJi_PXvqirhccwSh2jZ08vMNpGujQEc"
const geturl = "http://localhost:3000/class"
const ClassContext = React.createContext()

const ClassProvider = ({children})=>{
    const [message, setMessage]= useState("")
    const [classname, setClassname] = useState("")
    const handleSubmit = (e)=>{
    e.preventDefault()
    const data = {
        "class_name":classname,
        "authorization" : token
    }
    fetch(geturl,{
        method: "post",
        body: JSON.stringify(data),
        headers :{
            "content-type": "application/json"
        }

    })
    .then(result => result.json())
    .then( resp => setMessage(resp.message))
    .catch(err => console.log(err))
   
}


const [isEdit, setIsEdit] =useState(false)
const [edit, setEdit] = useState({id: "www", value: "wwws"})
// const [message, setMessage]= useState("")
const [classDetails, setClassDetails] = useState([])
const fetchClass = ()=>{
    fetch(geturl)
    .then(result => result.json())
    .then( resp => setClassDetails(resp))
    .catch(err => console.log(err))
}

useEffect(()=>{

  fetchClass() 
}, [message])
useEffect(()=>{

  fetchClass() 
}, [])

const handleUpdate = (e)=>{
e.preventDefault()
fetch(`http://localhost:3000/class/${edit.id}`, {
    method: "post",
    body: JSON.stringify({
        class_name: edit.value,
        authorization : token
    }),
    headers :{
        "content-type": "application/json"
    }

}).then(resp => resp.json())
.then(result => {

    setMessage(result.message)
    setIsEdit(false)
    setEdit({id: "", value: ""})
    fetchClass()
})

}

const handleEdit = (id, value)=>{
    setIsEdit(true)
setEdit({id,value});

}

const handleDelete = (id)=>{
    // e.preventDefault();
   fetch(`http://localhost:3000/class/delete/${id}`,
   {
    method: "post",
    body: JSON.stringify({
        authorization : token
    }),
    headers :{
        "content-type": "application/json"
    }
}
    )
   .then(resp => resp.json())
   .then(data => {
       setMessage(data.message)
        fetchClass()
    })
   .catch(err => console.log(err))

}


    return <ClassContext.Provider value ={{ message, isEdit, handleDelete, handleUpdate, edit, setEdit, classDetails, handleEdit, message, handleSubmit, classname, setClassname}}>{children}</ClassContext.Provider>
}


const UseClassContext = ()=>{
    return useContext(ClassContext);
}

export {ClassProvider, UseClassContext}