import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import style from "../../styles/style.module.css"; // Adjust the import path as necessary

const ConfirmationPage = () => {
  const location = useLocation();
  // Extract details from state passed via navigation
  const { details } = location.state || {};     // Accessing the passed state
  const navigate = useNavigate();

  // Render confirmation details and a button to navigate back to the form
  return (
    <div className={style.confirmationContainer}>
      <h2 className={style.confirmationHeader}>Payment Confirmation</h2>
      <p className={style.confirmationDetail}>Transaction ID: {details.transactionId}</p>
      <p className={style.confirmationDetail}>Payment Method: {details.paymentMethod}</p>
      <p className={style.confirmationDetail}>First Name: {details.FirstName}</p>
      <p className={style.confirmationDetail}>Last Name: {details.LastName}</p>

      <button className={style.confirmationButton} onClick={() => navigate('/')}>
        Make another payment
      </button>
    </div>
  );
};
export default ConfirmationPage;
