import React from 'react';

// Defines a component for selecting a payment method from a dropdown
// It accepts 'methods' (an array of payment method identifiers) and 'onSelect' (a function to handle the selection of a payment method)
const PaymentMethodSelector = ({methods, onSelect}) => (
    <div>
        <h2>Select Payment Method</h2>
        <select onChange={(e) => onSelect(e.target.value)}>
            <option value="">Select one...</option>
            {methods.map(method => (
            <option key={method} value={method}>
                {method.charAt(0).toUpperCase() + method.slice(1)}  {/* Capitalize the first letter */}
            </option>
            ))}
      </select>
    </div>
)

export default PaymentMethodSelector;