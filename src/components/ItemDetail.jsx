import React from 'react';

const ItemDetail = ({ product }) => {
    return (
        <div className="product-detail">
            <img src={product.image} alt={product.title} style={{ height: 200 }} />
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p><strong>Precio:</strong> ${product.price}</p>
        </div>
    );
};

export default ItemDetail;
