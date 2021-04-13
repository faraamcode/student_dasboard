import React from 'react'
import {FaBook} from 'react-icons/fa'
import {UseClassContext} from '../admin/context/classContext'
import {UseSubjectContext} from '../admin/context/subjectContext'
import {UseStudentContext} from '../admin/context/studentContext'
import {UseResultContext} from './context/result.context'
const Midtermrecord = () =>{

    const {classDetails} = UseClassContext()
    const {subjectDetails} = UseSubjectContext()
    const {message, setUpdate, update, details,setDetails, handleChange1, handleChange2, handleChange3, handleClick} = UseResultContext()
    const{fetchStudentByClass, studentDetails} = UseStudentContext()

    const handleFirstSubmit = (e)=>{
        setUpdate(true)
        e.preventDefault()
       fetchStudentByClass(details.class);
    }
    if (!update) {
        
    
 return(
     <div className="form-container">
        <div className="form-header">
         <h5>First Mid term Record</h5>
        </div>
        <div className="main-form">
         <form action="" className="form teacher-result" onSubmit={handleFirstSubmit}>
            <div className="form-control">
                <label htmlFor="">Class</label>
                <select name="session" id="" required value={details.class} onChange = { (e)=> setDetails({...details, class : e.target.value })}>
                    <option value="">
                        ----select a class---
                    </option>
                    {
                        classDetails.map((item)=> 
                        <option value={item.id}>{item.class_name}</option>
                        )
                    }
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="">Subject</label>
                <select name="session" id="" required value={details.subject} onChange = { (e)=> setDetails({...details, subject : e.target.value })}>
                    <option value="">
                        ----select a subject---
                    </option>
                    {
                        subjectDetails.map((item)=> 
                        <option value={item.id}>{item.subject_name}</option>
                        )
                    }
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="">Session</label>
                <select name="session" id="" required value={details.session} onChange = { (e)=> setDetails({...details, session : e.target.value })}>
                    <option value="">
                        ----select a session---
                    </option>
                    <option value="20/20">20/20</option>
                    <option value="20/21">20/21</option>
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="">Term</label>
                <select name="session" id="" required value={details.term} onChange = { (e)=> setDetails({...details, term : e.target.value })}>
                    <option value="">
                        ----select a term---
                    </option>
                    <option value="first">First</option>
                    <option value="second">Second</option>
                    <option value="third">Third</option>
                </select>
            </div>
            <button type="submit" class="submit-btn"><FaBook className="btn-icon"/>submit</button>
         </form>
        </div>
     </div>
 )
}else{
    return (

        <div className="edit-container ">
      <div className="message">{message}</div>
        <div className="main-bill">
          <table>
              <thead>
                  <tr>

                  <th>S/N</th>
                  <th>Student Name</th>
                  <th>Welcome Test(5)</th>
                  <th>Assignment(5)</th>
                  <th>Test(10)</th>
                  <th>Update</th>
                  </tr>
              </thead>
              <tbody>
                  {studentDetails.map((item)=>   {
                   const admission = item.admission_no;
                   return ( 
                      <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{`${item.last_name}  ${item.other_names}`}</td>
                      <td><input name="test" type="number"  id=""  onChange={(e)=> handleChange1(e, item.admission_no)}/></td>
                      <td><input name="test" type="number"  id=""  onChange={(e)=> handleChange2(e, item.admission_no)}/></td>
                      <td><input name="test" type="number"  id=""  onChange={(e)=> handleChange3(e, item.admission_no)}/></td>
                      <td><button className="btn" onClick={(e)=>handleClick(e, item.admission_no)}>Updade</button></td>
                  </tr>
                   )}
                  )}

              </tbody>
            </table>
              </div> 
     </div>
    )
}

}

export default Midtermrecord