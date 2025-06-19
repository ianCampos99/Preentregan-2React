import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);

    const fetchProducts = async () => {
        const url = categoryId
            ? `https://fakestoreapi.com/products/category/${categoryId}`
            : 'https://fakestoreapi.com/products';

        const res = await fetch(url);
        const data = await res.json();
        setItems(data);
    };

    useEffect(() => {
        fetchProducts();
    }, [categoryId]);

    return (
        <div className="item-list-container">
            <h2>{greeting}</h2>
            {items.length > 0 ? <ItemList items={items} /> : <p>Cargando productos...</p>}
        </div>
    );
};

export default ItemListContainer;

