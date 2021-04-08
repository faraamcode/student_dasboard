import React from 'react'
import {UseStudentContext} from '../context/studentContext'
import {UseClassContext} from '../context/classContext'
// import {createStudentForm} from '../components/createStudent.jsx'÷
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const createStudentForm = ()=>{
        const {createStudent, message} = UseStudentContext()
  const {classDetails} = UseClassContext()
    const { register, handleSubmit, watch, formState: { errors } } = useForm({resolver: yupResolver(schema)});
    const onSubmit = (data) => {
     createStudent(data);
    }
    return (
                 <form onSubmit={handleSubmit(onSubmit)} className="form student-form" >
            <div className="form-control">
                <label htmlFor="">Surname</label>
                 <input className= "text-input" type="text" {...register("surname", {required : true})} id=""/>
                 {errors.surname ?.message}
            </div>
            <div className="form-control">
                <label htmlFor="">Other names</label>
                 <input className= "text-input" type="text" {...register("othernames", {required : true})}/>
                 {errors.othernames ?.message}
            </div>
            <div className="form-control">
                <label htmlFor="">Admission Number</label>
                 <input className= "text-input" type="text" {...register("admission", {required : true})}/>
                 {errors.admission ?.message}
            </div>


            <div className="form-control">
                <label htmlFor="">Class</label>
                <select  {...register("class_nam", {required : true})} id="" className="text-input">
                    <option value="">
                        ----select a term---
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
                <label htmlFor="">Parent Phone number</label>
                 <input className= "text-input" type="text" {...register("parent_no", {required : true})} />
                 {errors.parent_no ?.message}
            </div>

            <div className="form-control">
                <label htmlFor="">Home Address</label>
                 <input className= "text-input" type="text" {...register("address", {required : true})}/>
                 {errors.address ?.message}
            </div>
            <div className="form-control">
             <label htmlFor="">Admission Type</label>
             <select name="admission type" {...register("admission_type", {required : true})} className="text-input">
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
             {errors.admission_type ?.message}
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
             <label htmlFor="">Date of Birth</label>
              <input className= "text-input" type="date"  id="" {...register("dob", {required : true})} />
              {errors.dob ?.message}
         </div>

         <div className="form-control">
             <label htmlFor="">Parent Name</label>
              <input className= "text-input" type="text"  id="" {...register("parent_name", {required : true})} />
              {errors.parent_name ?.message}
         </div>
         <div className="form-control">
             <label htmlFor="">Parent Email</label>
              <input className= "text-input" type="text"  id="" {...register("parent_email", {required : true})} />
              {errors.parent_email ?.message}
         </div>
         <div className="form-control">
             <label htmlFor="">Parent Occupation</label>
              <input className= "text-input" type="text"  id="" {...register("parent_occup", {required : true})} />
              {errors.parent_occup ?.message}
         </div>
         <div className="form-control">
             <label htmlFor="">Class Section Name</label>
              <input className= "text-input" type="text"  id="" {...register("class_section", {required : true})} />
              {errors.class_section ?.message}
         </div>

            
            <input type="submit" class="submit-btn" value="submit"  />
         </form>
    )
}

export default createStudentForm