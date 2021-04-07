import React, {useState, useEffect} from 'react'
import {FaBook} from 'react-icons/fa'

const geturl = "http://localhost:3000/class"
const CreateStudent = () =>{
const [message, setMessage]= useState("")
const [classname, setClassname] = useState("")
// const handleSubmit = (e)=>{
//     e.preventDefault()
//     const data = {
//         "class_name":classname
//     }
//     fetch(geturl,{
//         method: "post",
//         body: JSON.stringify(data),
//         headers :{
//             "content-type": "application/json"
//         }

//     })
//     .then(result => result.json())
//     .then( resp => setMessage(resp.message))
//     .catch(err => console.log(err))
   
// }
 return(
     <div className="student-container">
        <div className="form-header">
         <h5> Create Student</h5>
        </div>
        <div className="message">{message}</div>
        <div className="main-form">
         <form action="" className="form student-form" >
            <div className="form-control">
                <label htmlFor="">Surname</label>
                 <input className= "text-input" type="text" value={classname} onChange={(e)=> setClassname(e.target.value)} id=""/>
            </div>
            <div className="form-control">
                <label htmlFor="">Other names</label>
                 <input className= "text-input" type="text" value={classname} onChange={(e)=> setClassname(e.target.value)} id=""/>
            </div>
            <div className="form-control">
                <label htmlFor="">Admission Number</label>
                 <input className= "text-input" type="text" value={classname} onChange={(e)=> setClassname(e.target.value)} id=""/>
            </div>
            <div className="form-control">
                <label htmlFor="">Class</label>
                <select name="session" id="" className="text-input">
                    <option value="">
                        ----select a term---
                    </option>
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="">Parent Phone number</label>
                 <input className= "text-input" type="text" value={classname} onChange={(e)=> setClassname(e.target.value)} id=""/>
            </div>
            <div className="form-control">
                <label htmlFor="">Home Address</label>
                 <input className= "text-input" type="text" value={classname} onChange={(e)=> setClassname(e.target.value)} id=""/>
            </div>
            <div className="form-control">
                <label htmlFor="">Admission Type</label>
                <select name="admission type" id="" className="text-input">
                    <option value="">
                        ----select a term---
                    </option>
                    <option value="day">
                        day
                    </option>
                    <option value="border">
                      border
                    </option>
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="">Gender</label>
                <select name="gender" id="" className="text-input" value={classname} onChange={(e)=> setClassname(e.target.value)} >
                    <option value="">
                        ----select a term---
                    </option>
                    <option value="male">
                        male
                    </option>
                    <option value="female">
                      female
                    </option>
                </select>
            </div>
            <div className="form-control">
                <label htmlFor="">Date of Birth</label>
                 <input className= "text-input" type="date" value={classname} onChange={(e)=> setClassname(e.target.value)} id=""/>
            </div>
            <div className="form-control">
                <label htmlFor="">Parent Name</label>
                 <input className= "text-input" type="text" value={classname} onChange={(e)=> setClassname(e.target.value)} id=""/>
            </div>
            <div className="form-control">
                <label htmlFor="">Parent Email</label>
                 <input className= "text-input" type="text" value={classname} onChange={(e)=> setClassname(e.target.value)} id=""/>
            </div>
            <div className="form-control">
                <label htmlFor="">Parent Occupation</label>
                 <input className= "text-input" type="text" value={classname} onChange={(e)=> setClassname(e.target.value)} id=""/>
            </div>
            <div className="form-control">
                <label htmlFor="">Class Section Name</label>
                 <input className= "text-input" type="text" value={classname} onChange={(e)=> setClassname(e.target.value)} id=""/>
            </div>

            
            <button type="submit" class="submit-btn">submit</button>
         </form>
        </div>
     </div>
 )

}

export default CreateStudent