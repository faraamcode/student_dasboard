import React from 'react'
import {FaBook} from 'react-icons/fa'
import {UseClassContext} from '../admin/context/classContext'
import {UseSubjectContext} from '../admin/context/subjectContext'
import {UseStudentContext} from '../admin/context/studentContext'
const Midtermrecord = () =>{

    const {classDetails} = UseClassContext()
    const {subjectDetails} = UseSubjectContext()
    const{fetchStudentByClass, studentDetails} = UseStudentContext()
    const [update, setUpdate] = React.useState(false)
    const admiRef = React.useRef(null)
    const [classnum, setClassnum] = React.useState({});
    
    const [details, setDetails] = React.useState({class : "", subject: "", term : "", session : "", midterm : "" })
    
    const handleFirstSubmit = (e)=>{
        setUpdate(true)
        e.preventDefault()
       fetchStudentByClass(details.class);
    }

   const handleChange = (e, id)=>{
    const {name, value} = e.target;
    setClassnum((previousState)=>  ({...previousState, [id] : value}))
   }

    const handleClick = (e, id) => {
        e.preventDefault()
        const admission = id
        const testscore = classnum[id] || ""
        updateTestScore(admission, testscore)
    }
    console.log(studentDetails);
    if (!update) {
        
    
 return(
     <div className="form-container">
        <div className="form-header">
         <h5> Mid term Record</h5>
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
            <div className="form-control">
                <label htmlFor="">Mid Term</label>
                <select name="session" id="" required value={details.midterm} onChange = { (e)=> setDetails({...details, midterm : e.target.value })}>
                    <option value="">
                        ----select a mid term---
                    </option>
                    <option value="first">First</option>
                    <option value="second">Second</option>
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
      
        <div className="main-bill">
          <table>
              <thead>
                  <tr>

                  <th>S/N</th>
                  <th>Student Name</th>
                  <th>Class Name</th>
                  <th>Delete</th>
                  </tr>
              </thead>
              <tbody>
                  {studentDetails.map((item)=>   {
                   const admission = item.admission_no;
                   return ( 
                      <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{`${item.last_name}  ${item.other_names}`}</td>
                      <td><input name="test" type="text"  id=""  onChange={(e)=> handleChange(e, item.admission_no)}/></td>
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