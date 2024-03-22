import React from 'react';

// Defines a component to render a payment form based on the selected plugin
const PaymentForm = ({ plugin, onSubmit }) => {
    // Extracts the form component from the plugin
    const FormComponent = plugin.formComponent;

    // Handles form submission, gathering form data, and passing it to the onSubmit prop
    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formProps = Object.fromEntries(formData);
        onSubmit(formProps); // Calls the onSubmit function passed as a prop
    }

    // Renders the form with the FormComponent determined by the selected payment plugin
    return (
        <form onSubmit={handleSubmit}>
            <h2>Payment Details</h2>
            <FormComponent />
        </form>
    )
}

export default PaymentForm; 
