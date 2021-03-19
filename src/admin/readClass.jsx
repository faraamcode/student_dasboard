import React, {useState, useEffect} from 'react'
import {FaBook} from 'react-icons/fa'

const geturl = "http://localhost:3000/class"
const ReadClass = () =>{
const [isEdit, setIsEdit] =useState(false)
const [edit, setEdit] = useState({id: "www", value: "wwws"})
const [message, setMessage]= useState("")
const [classDetails, setClassDetails] = useState([])
const fetchClass = ()=>{
    fetch(geturl)
    .then(result => result.json())
    .then( resp => setClassDetails(resp))
    .catch(err => console.log(err))
}
useEffect(()=>{

  fetchClass() 
}, [message])
const handleUpdate = (e)=>{
e.preventDefault()
fetch(`http://localhost:3000/class/${edit.id}`, {
    method: "post",
    body: JSON.stringify({class_name: edit.value}),
    headers :{
        "content-type": "application/json"
    }

}).then(resp => resp.json())
.then(result => {

    setMessage(result.message)
    setIsEdit(false)
    setEdit({id: "", value: ""})
    fetchClass()
})

}
const handleEdit = (id, value)=>{
    setIsEdit(true)
setEdit({id,value});

}
const handleDelete = (id)=>{
    // e.preventDefault();
   fetch(`http://localhost:3000/class/delete/${id}`)
   .then(resp => resp.json())
   .then(data => {
       setMessage(data.message)
        fetchClass()
    })
   .catch(err => console.log(err))

}


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