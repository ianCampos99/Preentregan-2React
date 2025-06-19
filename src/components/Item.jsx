import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ item }) => {
    return (
        <div className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm">
                <img src={item.image} className="card-img-top p-3" style={{ height: '220px', objectFit: 'contain' }} alt={item.title} />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title fs-6">{item.title}</h5>
                    <p className="card-text fw-bold">${item.price}</p>
                    <Link to={`/product/${item.id}`} className="btn btn-primary mt-auto">COMPRAR</Link>
                </div>
            </div>
        </div>
    );
};

export default Item;

