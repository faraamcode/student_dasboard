import React, {useState, useEffect} from 'react'
import {FaBook} from 'react-icons/fa'
import {UseMenuContext} from '../context/menuContext'
import {UseSubjectContext} from '../context/subjectContext'
const geturl = "http://localhost:3000/class"
const CreateSubject = () =>{
    const menuValue = UseMenuContext()
   const { message, handleSubmit, subjectname, setSubjectname} = UseSubjectContext()
 return(
     <div className="form-container">
        <div className="form-header">
         <h5> Create Subject</h5>
        </div>
        <div className="message">{message}</div>
        <div className="main-form">
         <form action="" className="form teacher-result" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="">Subject name</label>
                 <input className= "text-input" type="text" value={subjectname} onChange={(e)=> setSubjectname(e.target.value)} id=""/>
            </div>

            
            <button type="submit" class="submit-btn">submit</button>
         </form>
        </div>
     </div>
 )

}

export default CreateSubject