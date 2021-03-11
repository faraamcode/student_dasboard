import React from 'react'
import {FaBook} from 'react-icons/fa'

const Payment = () =>{

 return(
     <div className="bill-container payment-main-container">
        <div className="bill-header">
         <h5>My payment</h5>
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
                      <td><input type="checkbox"/></td>
                      <td>School fees</td>
                      <td>#400, 000</td>
                  </tr>
                  <tr>
                      <td><input type="checkbox"/></td>
                      <td>School fees</td>
                      <td>#400, 000</td>
                  </tr>
                  <tr>
                      <td><input type="checkbox"/></td>
                      <td>School fees</td>
                      <td>#400, 000</td>
                  </tr>
                  <tr>
                      <td><input type="checkbox"/></td>
                      <td>School fees</td>
                      <td>#400, 000</td>
                  </tr>
              </tbody>
              <tfoot>
                  <tr>
                      <td colSpan="2">Total</td>
                      <td>#1,700,000</td>
                  </tr>

              </tfoot>
          </table>
          <div className="payment-container">
          <img src="payment.png" alt=""/>
          <button className="btn payment-btn"> Proceed to payment</button>
          </div>
        </div>
     </div>
 )

}

export default Payment