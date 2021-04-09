import React, {useState, useEffect} from 'react'
import {FaBook} from 'react-icons/fa'
import {UseSubjectcombinationContext} from '../context/subjectcombinationContext'
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIiwicm9sZSI6ImFkbWluIn0sImlhdCI6MTYxNzc3OTkwOSwiZXhwIjoxNjE3Nzg3MTA5fQ.LzJYKsGVF6yHFNLoEdiPtEm4aEyqiNjB1-W9zf0J6lk"
const geturl = "http://localhost:3000/class"
const ReadSubjectcombination = () =>{
const { message, isEdit, handleDelete, handleUpdate, edit, setEdit, subjectcombinationDetails, handleEdit} = UseSubjectcombinationContext()
 return(
    
 <div className="edit-container ">
      
        <div className="main-bill">
          <table>
              <thead>
                  <tr>

                  <th>S/N</th>
                  <th>Subject Name</th>
                  <th>Class Name</th>
                  <th>Delete</th>
                  </tr>
              </thead>
              <tbody>
                  {subjectcombinationDetails.map((item)=>    
                      <tr>
                      <td>{item.id}</td>
                      <td>{item.subject_id}</td>
                      <td>{item.class_id}</td>
                      <td><button className="btn" onClick={()=> handleDelete(item.class_id, item.subject_id)}>Delete</button></td>
                  </tr>
                  )}

              </tbody>
            </table>
              </div> 
     </div>
    
 )

}

export default ReadSubjectcombination