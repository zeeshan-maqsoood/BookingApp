import React, { useState } from 'react';
import OrderList from './OrderList';
function OrderForm() {
 const [order,setOrder]=useState([])
 const [selectedTime,setSelectedTime]=useState([])
const [amount,setAmount]=useState('')
 const validateVenueHours = (time) => {
  const selectedHour = new Date(time).getHours();
  return selectedHour >= 8 && selectedHour < 26; 
};




  const handleSubmit = async () => {
    try {
      if (!validateVenueHours(selectedTime)) {
        
        alert("Venue is closed for orders. Please select a time between 8 AM and 2 AM.");
        return;
      }
      const currentTime=selectedTime
      console.log(currentTime)
      const response = await fetch('http://localhost:5000/api/createOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, currentTime }),
      });
      const data = await response.json();
      alert("order has been created")
     
      setAmount('');
      setSelectedTime('')
      setOrder(data)
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Create Order</h2>
      <label>
        Amount:
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>
      <label>
        Select Time:
        <input type="datetime-local" name="" id="" value={selectedTime} onChange={(e)=>setSelectedTime(e.target.value)} />
      </label>
      <button onClick={handleSubmit}>Create Order</button> {/* Button to trigger the API request */}
      <OrderList data={order}  />
    </div>
  );
}

export default OrderForm;
