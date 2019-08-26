import React from 'react';

const CandyItem = props => {
  const { name, description, quantity, imageUrl } = props.candy;
  return (
    <div>
      <h4>{name}</h4> Goddie Bag has: {quantity}
      <p>{description}</p>
      <img src={imageUrl} />
    </div>
  );
};

export default CandyItem;
