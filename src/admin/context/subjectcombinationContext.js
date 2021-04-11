import React, {useContext, useState, useEffect } from 'react'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTYxNzc5NDg1MSwiZXhwIjoxNjE3ODAyMDUxfQ.l1V3NcEU8iNiSJi_PXvqirhccwSh2jZ08vMNpGujQEc"
const geturl = "http://localhost:3000/subjectcombination"
const SubjectcombinationContext = React.createContext()

const SubjectcombinationProvider = ({children})=>{
    const [message, setMessage]= useState("")
    const [subjectid, setSubjectid] = useState("")
    const [classid, setClassid] = useState("")
    const [subjectcombinationDetails, setSubjectcombinationDetails] = useState([])

const handleSubmit = (e)=>{
    e.preventDefault()
    const data = {
        "subject_id":subjectid,
        "class_id":classid,
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
const [subjectDetails, setSubjectDetails] = useState([])
const fetchSubjectcombination = ()=>{
    fetch(geturl)
    .then(result => result.json())
    .then( resp => setSubjectcombinationDetails(resp))
    .catch(err => console.log(err))
}

useEffect(()=>{

  fetchSubjectcombination() 
}, [message])
useEffect(()=>{

  fetchSubjectcombination() 
}, [])

const handleUpdate = (e)=>{
e.preventDefault()
fetch(`${geturl}/${edit.id}`, {
    method: "post",
    body: JSON.stringify({
        subject_name: edit.value,
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
    fetchSubjectcombination()
})

}

const handleEdit = (id, value)=>{
    setIsEdit(true)
setEdit({id,value});

}

const handleDelete = (class_id, subject_id)=>{

    // e.preventDefault();
   fetch(`${geturl}/delete/byboth`,
   {
    method: "post",
    body: JSON.stringify({
        class_id,
        subject_id,
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
        fetchSubjectcombination()
    })
   .catch(err => console.log(err))

}


    return <SubjectcombinationContext.Provider value ={{ message, isEdit, handleDelete, handleUpdate, edit, setEdit, subjectid, classid,  handleEdit, message, handleSubmit,  setSubjectid, setClassid, subjectcombinationDetails}}>{children}</SubjectcombinationContext.Provider>
}


const UseSubjectcombinationContext = ()=>{
    return useContext(SubjectcombinationContext);
}

export {SubjectcombinationProvider, UseSubjectcombinationContext}