import React, {useContext, useState, useEffect } from 'react'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTYxNzg4Mzg3MSwiZXhwIjoxNjE3ODkxMDcxfQ.Q60wP95Ox8j-IuNeXuuBlJ8WpHiDVqgL2xxDMkkD7z4"
const geturl = "http://localhost:3000/student"
const StudentContext = React.createContext()

const StudentProvider = ({children})=>{

    const [message, setMessage]= useState(" not yet ")
//     const [classname, setClassname] = useState("")
//     const handleSubmit = (e)=>{
//     e.preventDefault()
//     const data = {
//         "class_name":classname,
//         "authorization" : token
//     }
//     fetch(geturl,{
//         method: "post",
//         body: JSON.stringify(data),
//         headers :{
//             "content-type": "application/json"
//         }

//     })
//     .then(result => result.json())
//     .then( resp => setMessage(resp.message))
//     .catch(err => console.log(err))
   
// }


// const [isEdit, setIsEdit] =useState(false)
// const [edit, setEdit] = useState({id: "www", value: "wwws"})
// const [message, setMessage]= useState("")
const [studentDetails, setStudentDetails] = useState([])
const fetchStudent = ()=>{
    fetch(geturl)
    .then(result => result.json())
    .then( resp => setStudentDetails(resp))
    .catch(err => console.log(err))
}

const createStudent = (data)=>{
    const formData = data
    const submitData = {
        "admission_no": formData.admission, 
        "last_name": formData.surname, 
        "other_names": formData.othernames,
        "parent_no": formData.parent_no,
        "home_address": formData.address,
        "admission_type": formData.admission_type,
        "gender" : formData.gender,
        "date_of_birth" : formData.dob,
        "class_id" : formData.class_nam,
        "parent_name" : formData.parent_name,
        "parent_email" : formData.parent_email,
        "parent_occupation" : formData.parent_occup,
        "class_section_name" : formData.class_section,
        "password" : "adekunle",
        "passport" : "my image",
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

  fetchStudent() 
}, [message])
// const handleUpdate = (e)=>{
// e.preventDefault()
// fetch(`http://localhost:3000/class/${edit.id}`, {
//     method: "post",
//     body: JSON.stringify({
//         class_name: edit.value,
//         authorization : token
//     }),
//     headers :{
//         "content-type": "application/json"
//     }

// }).then(resp => resp.json())
// .then(result => {

//     setMessage(result.message)
//     setIsEdit(false)
//     setEdit({id: "", value: ""})
//     fetchClass()
// })

// }

// const handleEdit = (id, value)=>{
//     setIsEdit(true)
// setEdit({id,value});

// }

// const handleDelete = (id)=>{
//     // e.preventDefault();
//    fetch(`http://localhost:3000/class/delete/${id}`,
//    {
//     method: "post",
//     body: JSON.stringify({
//         authorization : token
//     }),
//     headers :{
//         "content-type": "application/json"
//     }
// }
//     )
//    .then(resp => resp.json())
//    .then(data => {
//        setMessage(data.message)
//         fetchClass()
//     })
//    .catch(err => console.log(err))

// }


    return <StudentContext.Provider value ={{ message, studentDetails, createStudent, deleteStudent }}>{children}</StudentContext.Provider>
}


const UseStudentContext = ()=>{
    return useContext(StudentContext);
}

export {StudentProvider, UseStudentContext}