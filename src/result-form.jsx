import React from 'react'
import {FaBook} from 'react-icons/fa'

const ResultForm = () =>{

 return(
     <div className="form-container">
        <div className="form-header">
         <h5>My result</h5>
        </div>
        <div className="main-form">
         <form action="" className="form">
            <div className="form-control">
                <label htmlFor="">Academic session</label>
                <select name="session" id=""></select>
            </div>
            <div className="form-control">
                <label htmlFor="">Term</label>
                <select name="session" id=""></select>
            </div>
            <button type="submit" class="submit-btn"><FaBook className="btn-icon"/>submit</button>
         </form>
        </div>
     </div>
 )

}

export default ResultForm