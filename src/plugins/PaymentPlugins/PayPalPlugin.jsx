import React from 'react';
import style from "../../styles/style.module.css"

const PaymentFormComponent = () => (  
  <table className={style.formTable}>
    <tbody>
      <tr>
        <td><label htmlFor="Fname">First Name:</label></td>
        <td><input type="text" id="Fname" name="Fname" placeholder="John" required /></td>
      </tr>
      <tr>
        <td><label htmlFor="Lname">Last Name:</label></td>
        <td><input type="text" id="Lname" name="Lname" placeholder="Doe" required /></td>
      </tr>
      <tr>
        <td><label htmlFor="paypalEmail">PayPal Email:</label></td>
        {/* Adding a placeholder to indicate an example email format  */}
        <td><input type="email" id="paypalEmail" name="paypalEmail" placeholder="john.doe@example.com" required /></td>
      </tr>
      <tr>
        {/* Spanning the submit button across two columns for alignment */}
        <td colSpan="2"><button type="submit" className={style.submitButton}>Submit</button></td>
      </tr>
    </tbody>
  </table>
);

const plugin = {
  name: 'PayPal',
  formComponent: PaymentFormComponent,
};

export default plugin;

