import React from 'react';

function Item({ item }) {
  const quantityColor = item.quantity < 50 ? 'red' : 'green';

  return (
    <div className="item">
      <img src={item.image} alt={item.name} />
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: <span>{item.quantity}</span></p>
      <p>Rating: {item.rating}/5</p>
    </div>
  );
}

export default Item;