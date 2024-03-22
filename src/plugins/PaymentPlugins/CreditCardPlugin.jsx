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
                <td><label htmlFor="cardNumber">Card Number:</label></td>
                <td><input type="text" id="cardNumber" name="cardNumber" placeholder="1234 5678 9012 3456" required /></td>
            </tr>
            <tr>
                <td><label htmlFor="cardExpiry">Expiry Date:</label></td>
                <td><input type="text" id="cardExpiry" name="cardExpiry" placeholder="MM/YY" required /></td>
            </tr>
            <tr>
                <td><label htmlFor="cardCVC">CVC:</label></td>
                <td><input type="text" id="cardCVC" name="cardCVC" placeholder="123" required /></td>
            </tr>
            <tr>
                <td colSpan="2"><button type='submit' className={style.submitButton}>Submit</button></td>
            </tr>
        </tbody>
    </table>

)

const plugin = {
    name : 'Credit Card',
    formComponent: PaymentFormComponent,
}

export default plugin;          // We will have plugin wherever we import it