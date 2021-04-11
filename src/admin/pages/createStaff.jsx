import React, {useState, useEffect} from 'react'
import {FaBook} from 'react-icons/fa'
import {UseClassContext} from '../context/classContext'
import {UseSubjectContext} from '../context/subjectContext'
import {UseStaffContext} from '../context/staffContext'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object().shape({
    surname: yup.string().required(),
    othernames: yup.string().required(),
    class_name: yup.string().required(),
    phone_no: yup.string().required(),
    role: yup.string().required(),
    title: yup.string().required(),
    gender: yup.string().required(),
    email: yup.string().required().email(),
    password: yup.string().required(),
    subject_name: yup.string().required(),
  })

const CreateStaff = () =>{
    const {createStaff, message} = UseStaffContext()
  const {classDetails} = UseClassContext()
  const {subjectDetails} = UseSubjectContext()
    const { register, handleSubmit, watch, formState: { errors } } = useForm({resolver: yupResolver(schema)});
    const onSubmit = (data) => {
     createStaff(data)
    } 
    
 return(

     <div className="student-container">
        <div className="form-header">
         <h5> Create Staff</h5>
        </div>
       <div className="message">{message}</div>
        <div className="main-form">
         <form onSubmit={handleSubmit(onSubmit)} className="form student-form" >
            <div className="form-control">
                <label htmlFor="">Surname</label>
                 <input className= "text-input" type="text"  {...register("surname", {required : true})} id=""/>
                 {errors.surname ?.message}
            </div>
            <div className="form-control">
                <label htmlFor="">Other names</label>
                 <input className= "text-input" type="text" {...register("othernames", {required : true})}/>
                 {errors.othernames ?.message}
            </div>

            <div className="form-control">
                <label htmlFor="">Phone number</label>
                 <input className= "text-input" type="text" {...register("phone_no", {required : true})} />
                 {errors.phone_no ?.message}
            </div>

         <div className="form-control">
             <label htmlFor="">Gender</label>
             <select name="gender" id="" className="text-input" {...register("gender", {required : true})}   >
                 <option value="">
                     ----select a gender---
                 </option>
                 <option value="male">
                     male
                 </option>
                 <option value="female">
                   female
                 </option>
             </select>
             {errors.gender ?.message}
         </div>
            <div className="form-control">
             <label htmlFor="">Role</label>
             <select name="admission type" {...register("role", {required : true})} className="text-input">
                 <option value="">
                    ----select a role---
                    </option>
                 <option value="admin">
                     Admin
                 </option>
                 <option value="teacher">
                   Teacher
                 </option>
             </select>
             {errors.role ?.message}
         </div>

            <div className="form-control">
             <label htmlFor="">Title</label>
             <select name="admission type" {...register("title", {required : true})} className="text-input">
                 <option value="">
                    ----select a title---
                    </option>
                 <option value="Class teacher">
                     Class teacher
                 </option>
                 <option value="Not Class teacher">
                   Not Class teacher
                 </option>
             </select>
             {errors.title ?.message}
         </div>

         <div className="form-control">
                <label htmlFor="">Class</label>
                <select  {...register("class_name", {required : true})} id="" className="text-input">
                    <option value="">
                        ----select a class---
                    </option>
                    <option value="not a class teacher">
                        not a class teacher
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
                {errors.class_nam ?.message}
            </div>

            <div className="form-control">
                <label htmlFor="">Subject</label>
                <select  {...register("subject_name", {required : true})} id="" className="text-input">
                    <option value="">
                        ----select a subject---
                    </option>
                    <option value="not a subject teacher">
                     not a subject teacher
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
                {errors.subject_name ?.message}
            </div>


         <div className="form-control">
             <label htmlFor="">Email</label>
              <input className= "text-input" type="text"  id="" {...register("email", {required : true})} />
              {errors.email ?.message}
         </div>


         <div className="form-control">
             <label htmlFor="">Password</label>
              <input className= "text-input" type="password"  id="" {...register("password", {required : true})} />
              {errors.password ?.message}
         </div>

            
            <input type="submit" class="submit-btn" value="submit"  />
         </form>
         
        </div>
     </div>
 )

}

export default CreateStaff