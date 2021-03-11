import React from 'react'
import {FaBook} from 'react-icons/fa'

const Bill = () =>{

 return(
     <div className="bill-container">
        <div className="bill-header">
         <h5>My Current Bill</h5>
        </div>
        <div className="main-bill">
          <table>
              <thead>
                  <tr>

                  <th>S/N</th>
                  <th>ITEM</th>
                  <th>AMOUNT</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>School fees</td>
                      <td>#400, 000</td>
                  </tr>
                  <tr>
                      <td>1</td>
                      <td>School fees</td>
                      <td>#400, 000</td>
                  </tr>
                  <tr>
                      <td>1</td>
                      <td>School fees</td>
                      <td>#400, 000</td>
                  </tr>
                  <tr>
                      <td>1</td>
                      <td>School fees</td>
                      <td>#400, 000</td>
                  </tr>
              </tbody>
          </table>
        </div>
     </div>
 )

}

export default Bill