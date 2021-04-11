import React, {useState, useEffect} from 'react'
import {FaBook} from 'react-icons/fa'
import {UseStaffContext} from '../context/staffContext'

const ReadStaff = () =>{
const { message, staffDetails, deleteStaff} = UseStaffContext()


 return(
    
 <div className="edit-container ">
        {/* <div className="form-header">
         <h5> Create Class</h5>
        </div> */}
        <div className="message">{message}</div>
        <div className="main-bill">
        {/* {isEdit && <form action="" className="form teacher-result" onSubmit={handleUpdate} > */}
            {/* <div className="form-control">
                <label htmlFor="">Class name</label>
                 <input className= "text-input" type="text" value={edit.value} onChange={(e)=> setEdit({...edit, value: e.target.value}) } id=""/>
            </div> */}

            
            {/* <button type="submit" class="submit-btn">submit</button> */}
         {/* </form>} */}
          <table>
              <thead>
                  <tr>

                  <th>S/N</th>
                  <th>Staff Name</th>
                  <th>Title</th>
                  <th>Role</th>
                  <th>Class</th>
                  <th>Subject</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  </tr>
              </thead>
              <tbody>
                  {staffDetails.map((item)=>
                      <tr>
                      <td>{item.id}</td>
                      <td>{item.first_name, item.other_name}</td>
                      <td>{item.title}</td>
                      <td>{item.role}</td>
                      <td>{item.class_id}</td>
                      <td>{item.subject_id}</td>
                      <td><button type="button" className="btn">Edit</button></td>
                      <td><button className="btn" onClick={()=> deleteStaff(item.email)}>Delete</button></td>
                  </tr>
           
                  )}

              </tbody>
            </table>
              </div> 
     </div>
    
 )

}

export default ReadStaff