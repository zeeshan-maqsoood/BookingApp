import React, { useState, useEffect } from "react";
function OrderList({data}) {

 

  return (
    <div>
      <h2>Order List</h2>
      <ul>
        {data?.map((order) => (
          <li key={order.id}>
            Order ID: {order.id}, Amount: ${order.amount}, Time:{" "}
            {order.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrderList;
