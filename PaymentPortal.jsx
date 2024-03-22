import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentMethodSelector from "./PaymentMethodSelector";
import PaymentForm from "./PaymentForm";
import paymentPlugins from "../../plugins/PaymentPlugins/plugins";
import style from "../../styles/style.module.css"

function PaymentPortal() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null); // Default action is transfering value to selectedPaymentMethod
  const navigate = useNavigate(); // Using useNavigate hook

  const handlePaymentSubmit = (paymentDetails) => {
    const confirmationDetails = {
      transactionId: `TXN-${Math.floor(Math.random() * 1000000)}`,
      paymentMethod: selectedPaymentMethod,
      FirstName: paymentDetails.Fname,
      LastName: paymentDetails.Lname,
    };
    navigate('/ConfirmationPage', { state: { details: confirmationDetails } });
  };

  return (
    <div>
      <h1>Payment Processing App</h1>
      <img src="/Images/Credit-Card-Icons.jpg" className={style["img1"]} alt="#"/>

      <PaymentMethodSelector
        methods={Object.keys(paymentPlugins)} //  passing an array of the keys from the 'paymentPlugins'
        onSelect={setSelectedPaymentMethod}
      />

      {selectedPaymentMethod && (
        <PaymentForm
          plugin={paymentPlugins[selectedPaymentMethod]}
          onSubmit={handlePaymentSubmit}
        />
      )}
    </div>
  );
}

export default PaymentPortal;
