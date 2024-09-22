import React from 'react';

function Deal({ deal }) {
  return (
    <div className="deal card mx-2">
      <div className="deal-image">
        <img src={deal.image} alt={deal.product} />
      </div>
      <div className="deal-info">
        <h3 className="deal-store">{deal.store}</h3>
        <h4 className="deal-product">{deal.product}</h4>
        <p className="deal-original-price">${deal.originalPrice}</p>
        <p className="deal-sale-price">${deal.salePrice}</p>
        <p className="deal-discount">{deal.discount}% OFF</p>
        <p className="deal-expiry">Expires: {deal.expiry}</p>
        <p className="deal-notes">{deal.notes}</p>
      </div>
    </div>
  );
}

export default Deal;
