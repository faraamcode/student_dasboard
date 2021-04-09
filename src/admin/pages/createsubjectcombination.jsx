import React, {useState, useEffect} from 'react'
import {FaBook} from 'react-icons/fa'
import {UseSubjectContext} from '../context/subjectContext'
import {UseSubjectcombinationContext} from '../context/subjectcombinationContext'
import {UseClassContext} from '../context/classContext'
const geturl = "http://localhost:3000/class"
const CreateSubjectcombination = () =>{

   const { subjectDetails} = UseSubjectContext()
   const { subjectid, classid, setSubjectid, setClassid, handleSubmit, message} = UseSubjectcombinationContext()
   const { classDetails} = UseClassContext()
 return(
     <div className="form-container">
        <div className="form-header">
         <h5> Create Subject</h5>
        </div>
        <div className="message">{message}</div>
        <div className="main-form">
         <form action="" className="form teacher-result" onSubmit={handleSubmit}>
            <div className="form-control">
                <label htmlFor="">Class name</label>
                <select  id="" className="text-input" onChange={(e)=> {setClassid(e.target.value)}} required>
                    <option value="">
                        ----select a class---
                    </option>
                    {
                        classDetails.map((item)=>{
                            return (
                                <option value={item.id}>
                                {item.class_name}
                            </option>
                            )
                        })
                    }
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="">Subject name</label>
                <select  id="" className="text-input" onChange={(e)=> {setSubjectid(e.target.value)}} required>
                    <option value="">
                        ----select a subject---
                    </option>
                    {
                        subjectDetails.map((item)=>{
                            return (
                                <option value={item.id}>
                                {item.subject_name}
                            </option>
                            )
                        })
                    }
                </select>
            </div>

            
            <button type="submit" class="submit-btn">submit</button>
         </form>
        </div>
     </div>
 )

}

export default CreateSubjectcombination