import React, {useState, useEffect} from 'react'
import {FaBook} from 'react-icons/fa'
import {UseStudentContext} from '../context/studentContext'
import {UseClassContext} from '../context/classContext'
const ReadStudent = () =>{
const { message, studentDetails, deleteStudent} = UseStudentContext()
const { classDetails} = UseClassContext()
const findClass = (id)=>{
    const class_main = id.toString()
   const class_nam = classDetails.filter((mine) => mine.id === class_main)
   if (class_nam.length < 1) {
       return "nil"
   }
   return class_nam[0].class_name
//    return class_nam
}
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
                  <th>Student Name</th>
                  <th>Class Name</th>
                  <th>Edit</th>
                  <th>Delete</th>
                  </tr>
              </thead>
              <tbody>
                  {studentDetails.map((item)=>
                    
                      
                      <tr>
                      <td>{item.id}</td>
                      <td>{item.last_name, item.other_names}</td>
                      <td>{item.class_id}</td>
                      <td><button type="button" className="btn">Edit</button></td>
                      <td><button className="btn" onClick={()=> deleteStudent(item.admission_no)}>Delete</button></td>
                  </tr>
                  )}

              </tbody>
            </table>
              </div> 
     </div>
    
 )

}

export default ReadStudent