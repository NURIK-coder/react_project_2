import React from "react";
import Item from '../item/Item.jsx'
const items = [
    {
      id: 1,
      name: 'Item 1',
      price: 10000,
      quantity: 20,
      rating: 4,
      image: 'https://i.pinimg.com/736x/21/f5/7d/21f57d1693251fedbbf518e9b796bba7.jpg',
    },
    {
      id: 2,
      name: 'Item 2',
      price: 9000,
      quantity: 50,
      rating: 3,
      image: 'https://i.pinimg.com/736x/21/f5/7d/21f57d1693251fedbbf518e9b796bba7.jpg',
    },
    {
      id: 3,
      name: 'Item 3',
      price: 12000,
      quantity: 30,
      rating: 5,
      image: 'https://i.pinimg.com/736x/21/f5/7d/21f57d1693251fedbbf518e9b796bba7.jpg',
    },
    // ...
  ];
  
  function Items() {
    return (
      <div className="items">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    );
  }
  
  export default Items;
