import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetchProductById(id).then(setProduct);
    }, [id]);

    return (
        <div>
            {product ? <ItemDetail product={product} /> : <p>Cargando producto...</p>}
        </div>
    );
};

export default ItemDetailContainer;

