import React, {useContext, useState, useEffect } from 'react'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTYxNzg4Mzg3MSwiZXhwIjoxNjE3ODkxMDcxfQ.Q60wP95Ox8j-IuNeXuuBlJ8WpHiDVqgL2xxDMkkD7z4"
const geturl = "http://localhost:3000/staff"
const StaffContext = React.createContext()

const StaffProvider = ({children})=>{

    const [message, setMessage]= useState("")

const [studentDetails, setStudentDetails] = useState([])
const fetchStaff = ()=>{
    fetch(geturl)
    .then(result => result.json())
    .then( resp => setStudentDetails(resp))
    .catch(err => console.log(err))
}

const createStaff = (data)=>{
    const formData = data
    const submitData = {
   
        "first_name": formData.surname, 
        "other_name": formData.othernames,
        "class_id": formData.class_name,
        "phone_no": formData.phone_no,
        "role": formData.role,
        "title": formData.title,
        "gender" : formData.gender,
        "subject_id" : formData.subject_name,
        "password" : formData.password,
        "email" : formData.email,
        "authorization": token
        }
fetch(geturl,{
        method: "post",
        body: JSON.stringify(submitData),
        headers :{
            "content-type": "application/json"
        }
})
    .then(result => result.json())
    .then( resp => setMessage(resp.message))
    .catch(err => console.log(err))
}


const deleteStudent = (data)=>{
    const formData = data
    const submitData = {
        "admission_no": formData, 
        "authorization": token
        }
fetch(`${geturl}/delete`,{
        method: "post",
        body: JSON.stringify(submitData),
        headers :{
            "content-type": "application/json"
        }
})
    .then(result => result.json())
    .then( resp => setMessage(resp.message))
    .catch(err => console.log(err))
}

useEffect(()=>{

    fetchStaff() 
}, [message])


    return <StaffContext.Provider value ={{ message, studentDetails, createStaff, deleteStudent }}>{children}</StaffContext.Provider>
}


const UseStaffContext = ()=>{
    return useContext(StaffContext);
}

export {StaffProvider, UseStaffContext}