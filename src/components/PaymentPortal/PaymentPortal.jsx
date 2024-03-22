// Importing necessary React features and components
import React, { useState } from "react"; 
import { useNavigate } from "react-router-dom"; 
import PaymentMethodSelector from "./PaymentMethodSelector"; 
import PaymentForm from "./PaymentForm"; 
import paymentPlugins from "../../plugins/PaymentPlugins/plugins"; 
import style from "../../styles/style.module.css"; // Importing CSS module for styling

function PaymentPortal() {
  // State to keep track of the selected payment method
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  // useNavigate hook for redirecting to the confirmation page after payment submission
  const navigate = useNavigate();

  const handlePaymentSubmit = (paymentDetails) => {
    // Constructing the details to be shown on the confirmation page
    const confirmationDetails = {
      transactionId: `TXN-${Math.floor(Math.random() * 1000000)}`, // Generating a random transaction ID
      paymentMethod: selectedPaymentMethod, // Storing the selected payment method
      FirstName: paymentDetails.Fname, 
      LastName: paymentDetails.Lname, 
    };
    // Navigating to the ConfirmationPage component and passing the confirmation details through state
    navigate('/ConfirmationPage', { state: { details: confirmationDetails } });
  };

  // Render function for the PaymentPortal component
  return (
    <div className={style.appContainer}> 
      <img src="/Images/Credit-Card-Icons.jpg" className={style.img1} alt="Credit Card Icons"/> 
      <h2 className={style.header}>Payment Processing App</h2> 

      <div className={style.paymentMethodSelector}>
        {/* Payment method selector with dynamic methods from plugins */}
        <PaymentMethodSelector
          methods={Object.keys(paymentPlugins)}
          onSelect={setSelectedPaymentMethod}
        />
      </div>
      
      <div className={style.paymentForm}>
        {/* Conditional rendering of the PaymentForm based on the selected payment method */}
        {selectedPaymentMethod && (
          <PaymentForm
            plugin={paymentPlugins[selectedPaymentMethod]}
            onSubmit={handlePaymentSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default PaymentPortal; // Exporting the PaymentPortal component for use in other parts of the app
