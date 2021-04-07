import React, {useState, useEffect} from 'react'
import {FaBook} from 'react-icons/fa'
import {UseClassContext} from '../context/classContext'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTYxNzc3OTkwOSwiZXhwIjoxNjE3Nzg3MTA5fQ.LzJYKsGVF6yHFNLoEdiPtEm4aEyqiNjB1-W9zf0J6lk"
const geturl = "http://localhost:3000/class"
const ReadClass = () =>{
const { message, isEdit, handleDelete, handleUpdate, edit, setEdit, classDetails, handleEdit} = UseClassContext()
 return(
    
 <div className="edit-container ">
        {/* <div className="form-header">
         <h5> Create Class</h5>
        </div> */}
        <div className="message">{message}</div>
        <div className="main-bill">
        {isEdit && <form action="" className="form teacher-result" onSubmit={handleUpdate} >
            <div className="form-control">
                <label htmlFor="">Class name</label>
                 <input className= "text-input" type="text" value={edit.value} onChange={(e)=> setEdit({...edit, value: e.target.value}) } id=""/>
            </div>

            
            <button type="submit" class="submit-btn">submit</button>
         </form>}
          <table>
              <thead>
                  <tr>

                  <th>S/N</th>
                  <th>Class Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  </tr>
              </thead>
              <tbody>
                  {classDetails.map((item)=>
                    
                      
                      <tr>
                      <td>{item.id}</td>
                      <td>{item.class_name}</td>
                      <td><button type="button" className="btn" onClick={()=> handleEdit(item.id, item.class_name)}>Edit</button></td>
                      <td><button className="btn" onClick={()=> handleDelete(item.id)}>Delete</button></td>
                  </tr>
                  )}

              </tbody>
            </table>
              </div> 
     </div>
    
 )

}

export default ReadClass