import React from 'react';
import Deal from './Deal';

function FeaturedDeals({ deals }) {
  return (
    <div id="deals-container">
      {deals.map((deal, index) => (
        <Deal key={index} deal={deal} />
      ))}
    </div>
  );
}

export default FeaturedDeals;
