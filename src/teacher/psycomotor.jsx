import React from 'react'
import {FaBook} from 'react-icons/fa'
import {UseClassContext} from '../admin/context/classContext'
import {UseStudentContext} from '../admin/context/studentContext'
import {UsePsycomotorContext} from './context/psycomotor.context'
const Psycomotor = () =>{
    const {classDetails} = UseClassContext()
    const{fetchStudentByClass, studentDetails} = UseStudentContext()
    const{ message, handleSubmit, handleChangeMain, setPsycomotor} = UsePsycomotorContext()
    const handleChange = (e)=>{
        const name =   e.target.name
        const value = e.target.value
        setPsycomotor((previousState)=> ({...previousState, [name] : value}))
         e.preventDefault()
         fetchStudentByClass(value);
     }
 return(
    <div className="form-container">
    <div className="form-header">
     <h5> Student Psycomotor</h5>
    </div>
  <div className="message">{message}</div>
    <div className="main-form">
     <form action="" className="form teacher-result" onSubmit ={handleSubmit}>
        <div className="form-control">
            <label htmlFor="">Class</label>
            <select name="class" id="" onChange = {handleChange} >
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
            <label htmlFor="">Student</label>
            <select name="student" id="" onChange={handleChangeMain}>
                <option value="">
                    ----select a student---
                </option>
                {
                    studentDetails.map((item)=> 
                    <option value={item.admission_no}>{`${item.last_name}  ${item.other_names}`}</option>
                    )
                }
            </select>
        </div>
        <div className="form-control">
            <label htmlFor="">Session</label>
            <select name="session" id="" onChange={handleChangeMain}>
                <option value="">
                    ----select a session---
                </option>
                <option value="20/20">20/20</option>
                <option value="20/21">20/21</option>
            </select>
        </div>
        <div className="form-control">
            <label htmlFor="">Term</label>
            <select name="term" id="" onChange={handleChangeMain}>
                <option value="">
                    ----select a term---
                </option>
                <option value="first">First</option>
                <option value="second">Second</option>
                <option value="third">Third</option>
            </select>
        </div>
        <div className="form-control" >
            <label htmlFor="">Psycomotor Type</label>
            <select name="psycomotortype" id="" onChange={handleChangeMain}>
                <option value="">
                    ----select a Psycomotor type---
                </option>
                <option value="handwriting">hand writing</option>
                <option value="fluency">Fluency</option>
                <option value="game">Game</option>
                <option value="sport">Sports</option>
                <option value="handlingtools">Handling Tools</option>
                <option value="drawing">Drawing and Painting</option>
                <option value="music">Music skills</option>
            </select>
        </div>
        <div className="form-control">
            <label htmlFor="">Psycomotor </label>
            <select name="grade" id="" onChange={handleChangeMain}>
                <option value="">
                    ----select a Psycomotor Value---
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
        <button type="submit" class="submit-btn"><FaBook className="btn-icon"/>submit</button>
     </form>
    </div>
 </div>
 )

}

export default Psycomotor