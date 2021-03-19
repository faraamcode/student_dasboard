import React, {useState, useEffect} from 'react'
import {FaBook} from 'react-icons/fa'

const geturl = "http://localhost:3000/class"
const CreateClass = () =>{
const [message, setMessage]= useState("")
const [classname, setClassname] = useState("")
const handleSubmit = (e)=>{
    e.preventDefault()
    const data = {
        "class_name":classname
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
 return(
     <div className="form-container">
        <div className="form-header">
         <h5> Create Class</h5>
        </div>
        <div className="message">{message}</div>
        <div className="main-form">
         <form action="" className="form teacher-result" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="">Class name</label>
                 <input className= "text-input" type="text" value={classname} onChange={(e)=> setClassname(e.target.value)} id=""/>
            </div>

            
            <button type="submit" class="submit-btn">submit</button>
         </form>
        </div>
     </div>
 )

}

export default CreateClass