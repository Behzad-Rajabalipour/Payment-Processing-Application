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
        <td><label htmlFor="cryptoAddress">Crypto Address:</label></td>
        <td><input type="text" id="cryptoAddress" name="cryptoAddress" placeholder="1BoatSLRHtKNngkdXEeobR76b53LETtpyT" required /></td>
      </tr>
      <tr>
        <td><label htmlFor="cryptoType">Cryptocurrency Type:</label></td>
        <td>
          <select id="cryptoType" name="cryptoType" required className={style.selectInput}>
            <option value="">Select a Cryptocurrency</option> {/* Added default select option */}
            <option value="BTC">Bitcoin</option>
            <option value="ETH">Ethereum</option>
            <option value="LTC">Litecoin</option>
          </select>
        </td>
      </tr>
      <tr>
        <td colSpan="2"><button type="submit" className={style.submitButton}>Submit</button></td>
      </tr>
    </tbody>
  </table>
);

const plugin = {
  name: 'Crypto',
  formComponent: PaymentFormComponent,
};

export default plugin;

