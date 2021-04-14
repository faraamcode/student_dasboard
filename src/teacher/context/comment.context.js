import React, {useContext, useState, useEffect } from 'react'
const geturl = "http://localhost:3000/comment"
const CommentContext = React.createContext()

const CommentProvider = ({children})=>{
    const [message, setMessage] = useState("")

     const handleSubmit =(e)=>{
         e.preventDefault()
         const { student, session, term, commenttype, comment} = details
         const submitData = {
            "admission_no": student, 
            "class_id": details.class,
            "term": term,
            "session": session,
            "comment_type":commenttype,
            "comment_value" : comment
         }
         console.log(submitData);
         fetch(geturl,{
             method : "post",
             body : JSON.stringify(submitData),
             headers:{
                 "content-type": "application/json"
             }
         })
         .then(resp=> resp.json())
         .then(data => setMessage(data.message))
     }
     const handleChangeMain =(e)=>{
         const name =   e.target.name
         const value = e.target.value
         setDetails((previousState)=> ({...previousState, [name] : value}))  
     }
     const [details, setDetails] = useState({})


    return <CommentContext.Provider value ={{ message, handleSubmit, handleChangeMain, setDetails}}>{children}</CommentContext.Provider>
}


const UseCommentContext = ()=>{
    return useContext(CommentContext);
}

export {CommentProvider, UseCommentContext}